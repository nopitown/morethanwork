"""Create clean flat-color vector regions from the original Figma references.
Requires Pillow and vtracer. Run build-hero-lottie.py after this script.
Small color islands are removed, deliberate facial marks retained, and
low-contrast shadows, movement lines and map folds rebuilt as clean curves.
"""
from PIL import Image,ImageFilter,ImageDraw
from pathlib import Path
from collections import Counter,deque
import vtracer,xml.etree.ElementTree as ET,json
root=Path(__file__).resolve().parents[1]
import tempfile
out=Path(tempfile.mkdtemp(prefix='hero-flat-regions-'))
scenes=[]
for name in ['pinta','escucha','baila','explora']:
 colors=['fffdf8','20355e','687ce1','a99af0','cac1f3','f8c69f','ffd04c','eeb275','369b7a','d8d1c2']
 if name in ['escucha','baila']:colors=colors[:7]
 palette=Image.new('P',(1,1));vals=[int(c[i:i+2],16) for c in colors for i in (0,2,4)];palette.putpalette(vals+vals[:3]*((768-len(vals))//3))
 im=Image.open(root/'public/images/hero'/('figma-'+name+'.png')).convert('RGB').filter(ImageFilter.MedianFilter(3))
 im.putdata([(255,253,248) if min(p)>200 else p for p in im.getdata()])
 indexed=im.quantize(palette=palette,dither=Image.Dither.NONE);w,h=im.size
 data=bytearray(indexed.tobytes());data=bytearray(v if v<len(colors) else 0 for v in data)
 # Assign continuous regions deliberately, rather than keeping raster shading.
 if name=='explora':
  region=Image.new('1',(w,h));ImageDraw.Draw(region).polygon([(624,304),(700,333),(770,298),(728,429),(668,457),(588,432)],fill=1)
  for i,on in enumerate(region.getdata()):
   if on and data[i] in (0,9):data[i]=9
 face={'pinta':(690,130,805,310),'escucha':(505,205,680,420),'baila':(550,175,665,300),'explora':(550,150,665,285)}[name]
 for y in range(face[1],face[3]):
  for x in range(face[0],face[2]):
   if data[y*w+x] in (6,7):data[y*w+x]=5
 # Remove isolated compression islands, preserving the small navy facial marks.
 visited=bytearray(w*h)
 for seed in range(w*h):
  if visited[seed]:continue
  label=data[seed];stack=[seed];visited[seed]=1;component=[];neighbors=Counter()
  while stack:
   p=stack.pop();component.append(p);x=p%w
   for q in ([p-1] if x else [])+([p+1] if x<w-1 else [])+([p-w] if p>=w else [])+([p+w] if p<w*(h-1) else []):
    if data[q]!=label:neighbors[data[q]]+=1
    elif not visited[q]:visited[q]=1;stack.append(q)
  threshold=8 if label==1 else 85
  if label==0 and any(face[0]<=p%w<face[2] and face[1]<=p//w<face[3] for p in component):threshold=5
  if len(component)<threshold and neighbors:
   replacement=neighbors.most_common(1)[0][0]
   for p in component:data[p]=replacement
 # Remove the outside paper only. Closed clothing and headphone whites remain.
 stack=[0];data[0]=255
 while stack:
  p=stack.pop();x=p%w
  for q in ([p-1] if x else [])+([p+1] if x<w-1 else [])+([p-w] if p>=w else [])+([p+w] if p<w*(h-1) else []):
   if data[q]==0:data[q]=255;stack.append(q)
 # Rebuild soft ground shadows as one clean ellipse, behind the character.
 for i,c in enumerate(data):
  if c==4 and (i//w>700 or (name=='baila' and i%w<480)):data[i]=255
 paths=[]
 cx,cy,rx,ry={'pinta':(600,782,320,14),'escucha':(600,740,300,14),'baila':(610,799,140,16),'explora':(605,778,190,22)}[name]
 k=.55228475
 d=f'M {cx+rx} {cy} C {cx+rx} {cy+k*ry} {cx+k*rx} {cy+ry} {cx} {cy+ry} C {cx-k*rx} {cy+ry} {cx-rx} {cy+k*ry} {cx-rx} {cy} C {cx-rx} {cy-k*ry} {cx-k*rx} {cy-ry} {cx} {cy-ry} C {cx+k*rx} {cy-ry} {cx+rx} {cy-k*ry} {cx+rx} {cy} Z'
 paths.append(dict(d=d,fill='#cac1f3',transform=''))
 if name=='baila':
  paths.extend([dict(d='M 421 157 C 350 210 359 289 459 360 C 371 320 345 218 421 157 Z',fill='#cac1f3',transform=''),dict(d='M 355 267 C 373 320 406 362 459 398 C 397 377 359 321 355 267 Z',fill='#cac1f3',transform='')])
 # Ink is painted last so flat colors cannot interrupt outlines.
 for label in [i for i in range(len(colors)) if i!=1]+[1]:
  mask=Image.frombytes('L',(w,h),bytes(255 if p==label else 0 for p in data))
  if label!=1:mask=mask.filter(ImageFilter.MaxFilter(3))
  mask=mask.point(lambda x:255-x);source=str(out/f'{name}-{label}.png');mask.save(source)
  svg=str(out/f'{name}-{label}.svg')
  vtracer.convert_image_to_svg_py(source,svg,colormode='binary',mode='spline',filter_speckle=2,corner_threshold=80,length_threshold=3,max_iterations=10,splice_threshold=50,path_precision=2)
  for p in ET.parse(svg).getroot():
   if p.tag.endswith('path'):paths.append(dict(d=p.attrib['d'],fill='#'+colors[label],transform=p.attrib.get('transform','')))
 if name=='explora':
  # The map's folds are clean narrow filled curves, not blotchy image texture.
  paths.extend([dict(d='M 673 322 C 665 358 650 398 637 435 C 647 395 660 354 671 321 Z',fill='#b6b1a5',transform=''),dict(d='M 727 316 C 711 355 697 396 677 447 C 690 399 705 353 725 316 Z',fill='#b6b1a5',transform='')])
 svgroot=ET.Element('svg',{'xmlns':'http://www.w3.org/2000/svg','viewBox':f'0 0 {w} {h}','width':str(w),'height':str(h)})
 for p in paths:ET.SubElement(svgroot,'path',p)
 ET.ElementTree(svgroot).write(out/f'{name}.svg',encoding='unicode')
 scenes.append(dict(word=name,width=w,height=h,paths=paths));print(name,len(paths),flush=True)
(out/'hero-scenes.json').write_text(json.dumps(scenes,separators=(',',':')))

import shutil
shutil.copyfile(out/"hero-scenes.json",root/"app/lib/hero-scenes.json")
for name in ["pinta","escucha","baila","explora"]:
 shutil.copyfile(out/(name+".svg"),root/"public/images/hero"/(name+".svg"))
