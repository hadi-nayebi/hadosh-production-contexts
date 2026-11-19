Verdict: Timing/tempo passes this lens’s BAR contribution. Overall tier NOT ASSESSED: the other four lens scores are absent.

Findings:
- Allocation honoured: supplied `recreation.html`, `CONFIG.region` and `stateAt()` prescribe the region reveal at 4500–6500 ms. Badge onset is 6800 ms, with its 260 ms pop complete at 7060 ms. Both stand at the 8500 ms census.
- Serial order honoured: region completion → 300 ms gap → badge onset → banner onset at 9500 ms. `CONFIG.banner` and `stateAt()` prescribe a 450 ms travel/overshoot/settle, completing at 9950 ms.
- Hold honoured: `stateAt()` keeps banner offset at zero after settling, including 14500 ms. `frame()` resets through modulo `cycleMs` at 15000 ms; the hold therefore lasts 5050 ms before reset.
- Cure list: no schedule correction indicated. Practice verification should confirm rendered reveal continuity and perceived slam/settle in playback; the supplied checks establish logic and structure only.

Limits: Stream-only assessment against the named t=0 allocation, not measured source onsets. No rendered playback examined; perceptual tempo and pixel coverage remain unverified.

BODY-WRITE: none (read-only run)
SCORE: 98