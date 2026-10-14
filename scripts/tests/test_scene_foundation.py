"""Score contracts: evidence-based, sensitive to timing, and silent regions fail."""
import importlib.util
from pathlib import Path
import unittest
from unittest.mock import patch
import numpy as np
spec=importlib.util.spec_from_file_location('foundation',Path(__file__).parents[1]/'analyze-scene-foundation.py')
f=importlib.util.module_from_spec(spec);spec.loader.exec_module(f)
class ScoreTests(unittest.TestCase):
    def setUp(self):
        self.t=np.arange(0,2,.01)
        self.env=np.zeros(len(self.t))
        self.bands={n:{'flux':self.env.copy(),'db':np.full(len(self.t),-100.)} for n in f.BANDS}
        self.beats=[{'seconds':1.,'strength':1.,'gridErrorMs':0,'analysisIndex':100,'estimatedBpm':120.,'periodicity':.8}]
    def score(self,time,beats=None):
        return f.cut_score(time,self.t,self.env,self.bands,self.beats if beats is None else beats)
    def test_exact_strong_beat_is_full_score(self):
        self.assertEqual(self.score(1.)['score'],100)
    def test_offset_reduces_score_and_large_offset_fails(self):
        self.assertGreater(self.score(1.)['score'],self.score(1.05)['score'])
        self.assertGreater(self.score(1.05)['score'],self.score(1.1)['score'])
        self.assertEqual(self.score(1.25)['score'],0)
    def test_no_detected_beats_is_zero_not_approved(self):
        self.assertEqual(self.score(1.,[])['score'],0)
        self.assertIsNone(self.score(1.,[])['beatDistanceMs'])
    def test_weak_onset_does_not_get_perfect_score(self):
        self.beats[0]['strength']=.1
        self.assertEqual(self.score(1.)['score'],73)
    def test_each_band_preserves_numeric_evidence(self):
        self.bands['low']['flux'][100]=.125
        self.bands['low']['db'][100]=-12.5
        row=self.score(1.)
        self.assertEqual(row['frequencyBands']['low'],{'rangeHz':[45,220],'spectralFlux':.125,'energyDb':-12.5})
class SelectionTests(unittest.TestCase):
    def schedule(self):
        return {'shots':[{'id':str(i),'startFrame':round(6804*i/71)} for i in range(71)]}
    def test_individual_floor_cannot_be_traded_for_average(self):
        bad=round(6804*20/71)
        scorer=lambda seconds,*args:{'score':75 if round(seconds*30)==bad else 95}
        with patch.object(f,'cut_score',scorer):
            cuts=f.select_cuts(self.schedule(),None,None,None,None)
        self.assertNotIn(bad,cuts[1:-1])
        self.assertTrue(all(60<=b-a<=120 for a,b in zip(cuts,cuts[1:])))
    def test_no_passing_path_fails_explicitly(self):
        with patch.object(f,'cut_score',lambda *args:{'score':79}):
            with self.assertRaisesRegex(ValueError,'No cadence-preserving path'):
                f.select_cuts(self.schedule(),None,None,None,None)

class CueConstraintTests(unittest.TestCase):
    def test_action_center_must_be_inside_expected_source_phrase(self):
        shot={'expectedPhraseIds':['utterance-26'],'lyricCueFrameRanges':[[3763,3885]]}
        self.assertTrue(f.cue_allows_interval(shot,3750,3870,[]))
        self.assertFalse(f.cue_allows_interval(shot,4100,4200,[]))
    def test_instrumental_intent_cannot_land_in_a_vocal_phrase(self):
        shot={'expectedPhraseIds':[],'lyricCueFrameRanges':[]}
        self.assertFalse(f.cue_allows_interval(shot,60,120,[[80,100]]))
        self.assertTrue(f.cue_allows_interval(shot,120,180,[[80,100]]))

if __name__=='__main__':unittest.main()
