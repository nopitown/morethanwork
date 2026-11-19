"""Convert every traced Figma color shape into native Lottie Bezier geometry.
No raster assets, image layers, reveal masks or clipped silhouettes.
Color shapes stay complete; only the separate drawing strokes use Trim Paths.
"""
import json,re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
scenes=json.loads((ROOT/'app/lib/hero-scenes.json').read_text())
def prop(k):return {'a':0,'k':k}
def anim(points):
 return {'a':1,'k':[{'t':t,'s':[value],'i':{'x':[.65],'y':[1]},'o':{'x':[.35],'y':[0]}} for t,value in points]}
def curves(d,offset,scale,yoffset):
 # VTracer contours are closed cubic subpaths. Retain each subpath separately.
 for part in re.findall(r'M[^M]+',d):
  tok=re.findall(r'[MCZ]|-?\d*\.?\d+(?:e[-+]?\d+)?',part);i=0;v=[];ins=[];outs=[]
  def point():
   nonlocal i
   p=[(float(tok[i])+offset[0])*scale,(float(tok[i+1])+offset[1])*scale+yoffset];i+=2;return p
  while i<len(tok):
   cmd=tok[i];i+=1
   if cmd=='M':v.append(point());ins.append([0,0]);outs.append([0,0])
   elif cmd=='C':
    a,b,end=point(),point(),point();outs[-1]=[a[j]-v[-1][j] for j in range(2)];v.append(end);ins.append([b[j]-end[j] for j in range(2)]);outs.append([0,0])
   elif cmd=='Z':pass
  if len(v)>2:yield {'v':v,'i':ins,'o':outs,'c':True}
tr={'ty':'tr','p':prop([0,0]),'a':prop([0,0]),'s':prop([100,100]),'r':prop(0),'o':prop(100),'sk':prop(0),'sa':prop(0)}
layers=[]
for index,scene in enumerate(scenes):
 word=scene['word'];start=index*150
 scale=500/scene['width'];yoffset=(380-scene['height']*scale)/2
 fills=[];ink=[]
 for order,path in enumerate(scene['paths']):
  rgb=[int(path['fill'][j:j+2],16)/255 for j in (1,3,5)]
  offset=[float(x) for x in re.findall(r'-?\d*\.?\d+',path.get('transform',''))][:2] or [0,0]
  paths=[{'ty':'sh','nm':'Bezier contour','ks':prop(curve)} for curve in curves(path['d'],offset,scale,yoffset)]
  if not paths:continue
  # All colors and all details are native filled Bezier geometry.
  fills.append({'ty':'gr','nm':f'{word} color {order}','it':paths+[{'ty':'fl','c':prop(rgb+[1]),'o':prop(100),'r':1},tr]})
  if len(path['d'])>600 or (max(rgb)<.6 and len(path['d'])>180):
   delay=(len(ink)%7)*1.1
   ink.append({'ty':'gr','nm':f'{word} contour {order}','it':paths+[{'ty':'st','c':prop(rgb+[1]),'o':prop(100),'w':prop(.85),'lc':2,'lj':2,'ml':4},{'ty':'tm','s':anim([(start,0),(start+132,0),(start+149,100)]),'e':anim([(start+delay,0),(start+35+delay,100)]),'o':prop(0),'m':1},tr]})
 base={'ddd':0,'ty':4,'sr':1,'ao':0,'ip':start,'op':start+150,'st':0,'bm':0}
 def layer(name,groups,opacity,ind):
  return {**base,'ind':ind,'nm':name,'ks':{'o':opacity,'r':prop(0),'p':prop([0,0,0]),'a':prop([0,0,0]),'s':prop([100,100,100])},'shapes':list(reversed(groups))}
 # Lottie uses front-to-back ordering. The source SVG paints back-to-front.
 layers.append(layer(f'{word} — native vector colors',fills,anim([(start,0),(start+22,0),(start+47,100),(start+119,100),(start+134,0)]),index*2+1))
 layers.append(layer(f'{word} — native vector drawing',ink,anim([(start,100),(start+47,100),(start+52,0),(start+119,0),(start+130,100),(start+149,0)]),index*2+2))
 print(word,len(fills),'vector fills;',len(ink),'animated contour groups')
result={'v':'5.12.2','fr':30,'ip':0,'op':600,'w':500,'h':380,'nm':'Figma illustrations — fully vector Lottie','ddd':0,'assets':[],'layers':layers,'markers':[{'tm':i*150,'cm':s['word'],'dr':150} for i,s in enumerate(scenes)]}
assert not result['assets'] and all(layer['ty']==4 for layer in layers)
(ROOT/'public/animations/hero-vectors.json').write_text(json.dumps(result,separators=(',',':')))
