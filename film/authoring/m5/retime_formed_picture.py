"""Fit the final Unit Three picture to the approved formed-sentence take."""
import argparse
import json
from pathlib import Path

def retime(path):
    u = json.loads(path.read_bytes())
    assert round(u['duration']*24) == 721
    begin,old_end,new_end = 26.5,721/24,730/24
    points = u['visualTimeline']
    following = next(i for i,point in enumerate(points) if point[0]>begin)
    a,b = points[following-1:following+1]
    value = a[1] + (b[1]-a[1])*(begin-a[0])/(b[0]-a[0])
    points.insert(following,[begin,value])
    for point in points:
        if point[0]>begin:
            point[0] = begin+(point[0]-begin)*(new_end-begin)/(old_end-begin)
    points[-1][0] = new_end
    u['duration'] = new_end
    for node in u['root']['children']:
        if node['type']=='audio':
            node['time'][1] = new_end
    path.write_text(json.dumps(u,ensure_ascii=False,indent=2)+'\n')
if __name__=='__main__':
    a=argparse.ArgumentParser(description=__doc__)
    a.add_argument('unit',type=Path)
    retime(a.parse_args().unit)
