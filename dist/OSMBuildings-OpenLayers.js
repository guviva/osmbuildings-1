(function(J){function ba(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d}function ra(a,b){var c={};a/=V;b/=V;c[Ka]=0>=b?90:1<=b?-90:sa*(2*La(Ma(B*(1-2*b)))-K);c[Na]=360*(1===a?1:(a%1+1)%1)-180;return c}function ta(a,b){return a.replace(/\{([\w_]+)\}/g,function(a,d){return b[d]||a})}function Oa(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){if(4===c.readyState&&c.status&&!(200>c.status||299<c.status)&&b&&c.responseText){var a;try{a=JSON.parse(c.responseText)}catch(e){}b(a)}};c.open("GET",
a);c.send(null);return c}function W(a){for(var b=x+q,c=w+n,d=0,e=a.length-3;d<e;d+=2)if(a[d]>q&&a[d]<b&&a[d+1]>n&&a[d+1]<c)return!0;return!1}function ua(a){L=X+a.x;M=w+a.y;C.render(!0)}function va(a){x=a.w;w=a.h;X=x/2<<0;ga=w/2<<0;L=X;M=w;C.setSize(x,w);ha=s-50}function wa(a){u=a;V=Pa<<u;a=ra(q+X,n+ga);xa=Math.abs(40075040*ya(a.latitude)/ia(2,u+8));y=ia(0.95,u-F);ja=""+G.alpha(y);ca=""+da.alpha(y);Y=""+N.alpha(y)}var l=Math,Ma=l.exp,Qa=l.log,Ra=l.sin,ya=l.cos,za=l.tan,La=l.atan,O=l.atan2,Z=l.min,
P=l.max,Aa=l.sqrt,Ba=l.ceil,ia=l.pow,ka=document,Ca=Ca||Array,Da=Da||Array;J.console||(J.console={});var l=/iP(ad|hone|od)/g.test(navigator.userAgent),p=!!~navigator.userAgent.indexOf("Trident"),Sa=J.requestAnimationFrame&&!l&&!p?J.requestAnimationFrame:function(a){a()},D,la=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a},Ta={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",
black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",
darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",
lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",
mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",
peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",
wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Q=function(a,b,c,d){this.H=a;this.S=b;this.L=c;this.A=d},l=Q.prototype;l.toString=function(){var a=this.toRGBA();a.r*=255;a.g*=255;a.b*=255;return 1===a.a?"#"+(16777216+(a.r<<16)+(a.g<<8)+a.b).toString(16).slice(1,7):"rgba("+[Math.round(a.r),Math.round(a.g),Math.round(a.b),a.a.toFixed(2)].join()+")"};l.toRGBA=function(){var a=Math.min(360,Math.max(0,this.H)),b=Math.min(1,Math.max(0,this.S)),c=Math.min(1,Math.max(0,
this.L)),d={a:Math.min(1,Math.max(0,this.A))};0===b?(d.r=c,d.g=c,d.b=c):(b=0.5>c?c*(1+b):c+b-c*b,c=2*c-b,a/=360,d.r=la(c,b,a+1/3),d.g=la(c,b,a),d.b=la(c,b,a-1/3));return d};l.hue=function(a){return new Q(this.H*a,this.S,this.L,this.A)};l.saturation=function(a){return new Q(this.H,this.S*a,this.L,this.A)};l.lightness=function(a){return new Q(this.H,this.S,this.L*a,this.A)};l.alpha=function(a){return new Q(this.H,this.S,this.L,this.A*a)};D=function(a){var b=0,c=0,d=0,e=1,f;a=(""+a).toLowerCase().replace("grey",
"gray");a=Ta[a]||a;if(f=a.match(/^#(\w{2})(\w{2})(\w{2})$/))b=parseInt(f[1],16),c=parseInt(f[2],16),d=parseInt(f[3],16);else if(f=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))b=parseInt(f[1],10),c=parseInt(f[2],10),d=parseInt(f[3],10),e=f[4]?parseFloat(f[5]):1;else return;b/=255;c/=255;d/=255;a=Math.max(b,c,d);var h=Math.min(b,c,d),g;f=(a+h)/2;var j=a-h;if(j){h=0.5<f?j/(2-a-h):j/(a+h);switch(a){case b:g=(c-d)/j+(c<d?6:0);break;case c:g=(d-b)/j+2;break;case d:g=(b-c)/j+4}g*=60}else g=h=
0;return new Q(g,h,f,e)};var Ea,l=Math,ma=l.PI,z=l.sin,E=l.cos,Fa=l.tan,Ga=l.asin,Ha=l.atan2,H=ma/180,ea=23.4397*H;Ea=function(a,b,c){c=H*-c;b*=H;a=a.valueOf()/864E5-0.5+2440588-2451545;var d=H*(357.5291+0.98560028*a),e=H*(1.9148*z(d)+0.02*z(2*d)+3E-4*z(3*d)),e=d+e+102.9372*H+ma,d=Ga(z(0)*E(ea)+E(0)*z(ea)*z(e)),e=Ha(z(e)*E(ea)-Fa(0)*z(ea),E(e));c=H*(280.16+360.9856235*a)-c-e;return{altitude:Ga(z(b)*z(d)+E(b)*E(d)*E(c)),azimuth:Ha(z(c),E(c)*z(b)-Fa(d)*E(b))-ma/2}};var R={METERS_PER_LEVEL:3,clockwise:"CW",
counterClockwise:"CCW",getWinding:function(a){var b,c,d,e,f=0,h,g;h=0;for(g=a.length-3;h<g;h+=2)b=a[h],c=a[h+1],d=a[h+2],e=a[h+3],f+=b*e-d*c;return 0<f/2?this.clockwise:this.counterClockwise},makeWinding:function(a,b){if(this.getWinding(a)===b)return a;for(var c=[],d=a.length-2;0<=d;d-=2)c.push(a[d],a[d+1]);return c},getRadius:function(a){for(var b=90,c=-90,d=0,e=a.length;d<e;d+=2)b=Z(b,a[d]),c=P(c,a[d]);return 6378137*((c-b)/sa)/2<<0},materialColors:{brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",
concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},baseMaterials:{asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",
sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},getMaterialColor:function(a){a=a.toLowerCase();return"#"===a[0]?a:this.materialColors[this.baseMaterials[a]||a]||null},alignProperties:function(a){var b={};a=a||{};b.height=a.height||(a.levels?a.levels*this.METERS_PER_LEVEL:Ua);b.minHeight=a.minHeight||(a.minLevel?a.minLevel*this.METERS_PER_LEVEL:
0);var c=a.material?this.getMaterialColor(a.material):a.wallColor||a.color;c&&(b.wallColor=c);if(c=a.roofMaterial?this.getMaterialColor(a.roofMaterial):a.roofColor)b.roofColor=c;switch(a.shape){case "cone":case "cylinder":case "dome":b.shape=a.shape;break;case "pyramid":case "pyramidal":b.shape="pyramid";break;case "sphere":b.shape="cylinder"}switch(a.roofShape){case "cone":case "dome":b.shape="cylinder";b.roofShape=a.roofShape;break;case "pyramid":case "pyramidal":b.roofShape="pyramid"}b.roofShape&&
a.roofHeight?(b.roofHeight=a.roofHeight,b.height=P(0,b.height-b.roofHeight)):b.roofHeight=0;return b}},na,oa=function(a){var b,c,d=[],e;switch(a.type){case "GeometryCollection":d=[];b=0;for(c=a.geometries.length;b<c;b++)(e=oa(a.geometries[b]))&&d.push.apply(d,e);return d;case "MultiPolygon":d=[];b=0;for(c=a.coordinates.length;b<c;b++)(e=oa({type:"Polygon",coordinates:a.coordinates[b]}))&&d.push.apply(d,e);return d;case "Polygon":a=a.coordinates;break;default:return[]}var f,h=[],g=[];f=a[0];b=0;for(c=
f.length;b<c;b++)h.push(f[b][1],f[b][0]);b=0;for(c=a.length-1;b<c;b++){f=a[b+1];g[b]=[];d=0;for(e=f.length;d<e;d++)g[b].push(f[d][1],f[d][0]);g[b]=R.makeWinding(g[b],R.counterClockwise)}return[{outer:R.makeWinding(h,R.clockwise),inner:g.length?g:null}]};na={read:function(a){if(!a||"FeatureCollection"!==a.type)return[];a=a.features;var b,c,d,e,f=[],h,g,j,k;b=0;for(c=a.length;b<c;b++)if(h=a[b],!("Feature"!==h.type||!1===Ia(h))){j=R.alignProperties(h.properties);g=oa(h.geometry);d=0;for(e=g.length;d<
e;d++){k=j;var m={},I=void 0;for(I in k)k.hasOwnProperty(I)&&(m[I]=k[I]);k=m;k.footprint=g[d].outer;if("cone"===k.shape||"cylinder"===k.shape)k.radius=R.getRadius(k.footprint);g[d].inner&&(k.holes=g[d].inner);if(h.id||h.properties.id)k.id=h.id||h.properties.id;f.push(k)}}return f}};var B=Math.PI,K=B/2,Va=B/4,sa=180/B,Pa=256,u,V,F=15,Ka="latitude",Na="longitude",x=0,w=0,X=0,ga=0,q=0,n=0,G=D("rgba(200, 190, 180)"),da=G.lightness(0.8),N=G.lightness(1.2),ja=""+G,ca=""+da,Y=""+N,xa=1,y=1,ha,Ua=5,L,M,s=
450,$,pa={time:new Date,data:{},add:function(a,b){this.data[b]={data:a,time:Date.now()}},get:function(a){return this.data[a]&&this.data[a].data},purge:function(){this.time.setMinutes(this.time.getMinutes()-5);for(var a in this.data)this.data[a].time<this.time&&delete this.data[a]}},A={currentItemsIndex:{},items:[],getPixelFootprint:function(a){for(var b,c,d=new Ca(a.length),e=0,f=a.length-1;e<f;e+=2)b=a[e+1],c=Z(1,P(0,0.5-Qa(za(Va+K*a[e]/180))/B/2)),b=(b/360+0.5)*V<<0,c=c*V<<0,d[e]=b,d[e+1]=c;a=d;
d=a.length/2;e=new Da(d);f=0;b=d-1;var h,g,j,k=[],m=[],I=[];for(e[f]=e[b]=1;b;){h=0;for(c=f+1;c<b;c++){g=a[2*c];var q=a[2*c+1],n=a[2*f],l=a[2*f+1],s=a[2*b],p=a[2*b+1],r=s-n,t=p-l,u=void 0;if(0!==r||0!==t)u=((g-n)*r+(q-l)*t)/(r*r+t*t),1<u?(n=s,l=p):0<u&&(n+=r*u,l+=t*u);r=g-n;t=q-l;g=r*r+t*t;g>h&&(j=c,h=g)}2<h&&(e[j]=1,k.push(f),m.push(j),k.push(j),m.push(b));f=k.pop();b=m.pop()}for(c=0;c<d;c++)e[c]&&I.push(a[2*c],a[2*c+1]);d=I;if(!(8>d.length))return d},createClosure:function(a){var b=this;return function(c){c=
na.read(c);pa.add(c,a);b.addRenderItems(c,!0)}},resetItems:function(){this.items=[];this.currentItemsIndex={}},addRenderItems:function(a,b){for(var c,d,e,f=0,h=a.length;f<h;f++)if(c=a[f],e=c.id||[c.footprint[0],c.footprint[1],c.height,c.minHeight].join(),!this.currentItemsIndex[e]&&(d=this.scale(c)))d.scale=b?0:1,this.items.push(d),this.currentItemsIndex[e]=1;S||(S=setInterval(function(){for(var a=A.items,b=!1,c=0,d=a.length;c<d;c++)1>a[c].scale&&(a[c].scale+=0.1,1<a[c].scale&&(a[c].scale=1),b=!0);
C.render();b||(clearInterval(S),S=null)},33))},scale:function(a){var b={},c=6/ia(2,u-F);a.id&&(b.id=a.id,b.hitColor=fa.toColor(a.id));b.height=Z(a.height/c,ha);b.minHeight=isNaN(a.minHeight)?0:a.minHeight/c;if(!(b.minHeight>ha)&&(b.footprint=this.getPixelFootprint(a.footprint),b.footprint)){for(var d=b.footprint,e=Infinity,f=-Infinity,h=Infinity,g=-Infinity,j=0,k=d.length-3;j<k;j+=2)e=Z(e,d[j]),f=P(f,d[j]),h=Z(h,d[j+1]),g=P(g,d[j+1]);b.center={x:e+(f-e)/2<<0,y:h+(g-h)/2<<0};a.shape&&(b.shape=a.shape,
a.radius&&(b.radius=a.radius/xa));if(a.holes){b.holes=[];for(var m,d=0,e=a.holes.length;d<e;d++)(m=this.getPixelFootprint(a.holes[d]))&&b.holes.push(m)}var n;if(a.wallColor&&(n=D(a.wallColor)))n=n.alpha(y),b.altColor=""+n.lightness(0.8),b.wallColor=""+n;if(a.roofColor&&(n=D(a.roofColor)))b.roofColor=""+n.alpha(y);a.roofHeight&&(b.roofHeight=a.roofHeight/c);if(!(b.height+b.roofHeight<=b.minHeight))return a.roofShape&&(b.roofShape=a.roofShape),b}},set:function(a){this.isStatic=!0;this.resetItems();
this._staticData=na.read(a);this.addRenderItems(this._staticData,!0)},load:function(a){this.url=ta(a||"http://data.osmbuildings.org/0.2/{k}/tile/{z}/{x}/{y}.json",{k:"rkc8ywdl"});this.update()},update:function(){this.resetItems();if(!(u<F))if(this.isStatic&&this._staticData)this.addRenderItems(this._staticData);else if(this.url){var a=16<u?256<<u-16:256>>16-u,b=q/a<<0,c=n/a<<0,d=Ba((q+x)/a),a=Ba((n+w)/a),e,f,h,g;for(e=c;e<=a;e++)for(c=b;c<=d;c++)f={x:c,y:e,z:16},h=c+","+e,(g=pa.get(h))?this.addRenderItems(g):
Oa(ta(this.url,f),this.createClosure(h));pa.purge()}}},aa={draw:function(a,b,c,d,e,f,h,g){var j,k=this._extrude(a,b,d,e,f,h),m=[];if(c){b=0;for(j=c.length;b<j;b++)m[b]=this._extrude(a,c[b],d,e,f,h)}a.fillStyle=g;a.beginPath();this._ring(a,k);if(c){b=0;for(j=m.length;b<j;b++)this._ring(a,m[b])}a.closePath();a.stroke();a.fill()},_extrude:function(a,b,c,d,e,f){c=s/(s-c);for(var h=s/(s-d),g={x:0,y:0},j={x:0,y:0},k,m,l=[],p=0,t=b.length-3;p<t;p+=2)g.x=b[p]-q,g.y=b[p+1]-n,j.x=b[p+2]-q,j.y=b[p+3]-n,k=r.project(g,
c),m=r.project(j,c),d&&(g=r.project(g,h),j=r.project(j,h)),(j.x-g.x)*(k.y-g.y)>(k.x-g.x)*(j.y-g.y)&&(a.fillStyle=g.x<j.x&&g.y<j.y||g.x>j.x&&g.y>j.y?f:e,a.beginPath(),this._ring(a,[j.x,j.y,g.x,g.y,k.x,k.y,m.x,m.y]),a.closePath(),a.fill()),l[p]=k.x,l[p+1]=k.y;return l},_ring:function(a,b){a.moveTo(b[0],b[1]);for(var c=2,d=b.length-1;c<d;c+=2)a.lineTo(b[c],b[c+1])},simplified:function(a,b,c){a.beginPath();this._ringAbs(a,b);if(c){b=0;for(var d=c.length;b<d;b++)this._ringAbs(a,c[b])}a.closePath();a.stroke();
a.fill()},_ringAbs:function(a,b){a.moveTo(b[0]-q,b[1]-n);for(var c=2,d=b.length-1;c<d;c+=2)a.lineTo(b[c]-q,b[c+1]-n)},shadow:function(a,b,c,d,e){for(var f=null,h={x:0,y:0},g={x:0,y:0},j,k,m=0,l=b.length-3;m<l;m+=2)h.x=b[m]-q,h.y=b[m+1]-n,g.x=b[m+2]-q,g.y=b[m+3]-n,j=v.project(h,d),k=v.project(g,d),e&&(h=v.project(h,e),g=v.project(g,e)),(g.x-h.x)*(j.y-h.y)>(j.x-h.x)*(g.y-h.y)?(1===f&&a.lineTo(h.x,h.y),f=0,m||a.moveTo(h.x,h.y),a.lineTo(g.x,g.y)):(0===f&&a.lineTo(j.x,j.y),f=1,m||a.moveTo(j.x,j.y),a.lineTo(k.x,
k.y));if(c){m=0;for(l=c.length;m<l;m++)this._ringAbs(a,c[m])}},shadowMask:function(a,b,c){this._ringAbs(a,b);if(c){b=0;for(var d=c.length;b<d;b++)this._ringAbs(a,c[b])}},hitArea:function(a,b,c,d,e,f){c=null;var h={x:0,y:0},g={x:0,y:0};d=s/(s-d);var j=s/(s-e),k;a.fillStyle=f;a.beginPath();for(var m=0,l=b.length-3;m<l;m+=2)h.x=b[m]-q,h.y=b[m+1]-n,g.x=b[m+2]-q,g.y=b[m+3]-n,f=r.project(h,d),k=r.project(g,d),e&&(h=r.project(h,j),g=r.project(g,j)),(g.x-h.x)*(f.y-h.y)>(f.x-h.x)*(g.y-h.y)?(1===c&&a.lineTo(h.x,
h.y),c=0,m||a.moveTo(h.x,h.y),a.lineTo(g.x,g.y)):(0===c&&a.lineTo(f.x,f.y),c=1,m||a.moveTo(f.x,f.y),a.lineTo(k.x,k.y));a.closePath();a.fill()}},t={draw:function(a,b,c,d,e,f,h,g,j){b={x:b.x-q,y:b.y-n};var k=s/(s-e),m=s/(s-f);e=r.project(b,k);d*=k;f&&(b=r.project(b,m),c*=k);(k=this._tangents(b,c,e,d))?(f=O(k[0].y1-b.y,k[0].x1-b.x),k=O(k[1].y1-b.y,k[1].x1-b.x)):(f=1.5*B,k=1.5*B);a.fillStyle=h;a.beginPath();a.arc(e.x,e.y,d,K,f,!0);a.arc(b.x,b.y,c,f,K);a.closePath();a.fill();a.fillStyle=g;a.beginPath();
a.arc(e.x,e.y,d,k,K,!0);a.arc(b.x,b.y,c,K,k);a.closePath();a.fill();a.fillStyle=j;this._circle(a,e,d)},simplified:function(a,b,c){this._circle(a,{x:b.x-q,y:b.y-n},c)},shadow:function(a,b,c,d,e,f){b={x:b.x-q,y:b.y-n};e=v.project(b,e);var h;f&&(b=v.project(b,f));var g=this._tangents(b,c,e,d);g?(f=O(g[0].y1-b.y,g[0].x1-b.x),h=O(g[1].y1-b.y,g[1].x1-b.x),a.moveTo(g[1].x2,g[1].y2),a.arc(e.x,e.y,d,h,f),a.arc(b.x,b.y,c,f,h)):(a.moveTo(b.x+c,b.y),a.arc(b.x,b.y,c,0,2*B))},shadowMask:function(a,b,c){var d=b.x-
q;b=b.y-n;a.moveTo(d+c,b);a.arc(d,b,c,0,2*B)},hitArea:function(a,b,c,d,e,f,h){b={x:b.x-q,y:b.y-n};var g=s/(s-e),j=s/(s-f);e=r.project(b,g);d*=g;f&&(b=r.project(b,j),c*=g);f=this._tangents(b,c,e,d);a.fillStyle=h;a.beginPath();f?(h=O(f[0].y1-b.y,f[0].x1-b.x),g=O(f[1].y1-b.y,f[1].x1-b.x),a.moveTo(f[1].x2,f[1].y2),a.arc(e.x,e.y,d,g,h),a.arc(b.x,b.y,c,h,g)):(a.moveTo(b.x+c,b.y),a.arc(b.x,b.y,c,0,2*B));a.closePath();a.fill()},_circle:function(a,b,c){a.beginPath();a.arc(b.x,b.y,c,0,2*B);a.stroke();a.fill()},
_tangents:function(a,b,c,d){var e=a.x-c.x,f=a.y-c.y,h=b-d,g=e*e+f*f;if(!(g<=h*h)){var g=Aa(g),e=-e/g,f=-f/g,h=h/g,g=[],j,k,m;j=Aa(P(0,1-h*h));for(var l=1;-1<=l;l-=2)k=e*h-l*j*f,m=f*h+l*j*e,g.push({x1:a.x+b*k<<0,y1:a.y+b*m<<0,x2:c.x+d*k<<0,y2:c.y+d*m<<0});return g}}},T={draw:function(a,b,c,d,e,f,h){var g=s/(s-e);c=r.project({x:c.x-q,y:c.y-n},s/(s-d));d={x:0,y:0};for(var j={x:0,y:0},k=0,m=b.length-3;k<m;k+=2)d.x=b[k]-q,d.y=b[k+1]-n,j.x=b[k+2]-q,j.y=b[k+3]-n,e&&(d=r.project(d,g),j=r.project(j,g)),(j.x-
d.x)*(c.y-d.y)>(c.x-d.x)*(j.y-d.y)&&(a.fillStyle=d.x<j.x&&d.y<j.y||d.x>j.x&&d.y>j.y?h:f,a.beginPath(),this._triangle(a,d,j,c),a.closePath(),a.fill())},_triangle:function(a,b,c,d){a.moveTo(b.x,b.y);a.lineTo(c.x,c.y);a.lineTo(d.x,d.y)},_ring:function(a,b){a.moveTo(b[0]-q,b[1]-n);for(var c=2,d=b.length-1;c<d;c+=2)a.lineTo(b[c]-q,b[c+1]-n)},shadow:function(a,b,c,d,e){var f={x:0,y:0},h={x:0,y:0};c=v.project({x:c.x-q,y:c.y-n},d);d=0;for(var g=b.length-3;d<g;d+=2)f.x=b[d]-q,f.y=b[d+1]-n,h.x=b[d+2]-q,h.y=
b[d+3]-n,e&&(f=v.project(f,e),h=v.project(h,e)),(h.x-f.x)*(c.y-f.y)>(c.x-f.x)*(h.y-f.y)&&this._triangle(a,f,h,c)},shadowMask:function(a,b){this._ring(a,b)},hitArea:function(a,b,c,d,e,f){var h=s/(s-e);c=r.project({x:c.x-q,y:c.y-n},s/(s-d));d={x:0,y:0};var g={x:0,y:0};a.fillStyle=f;a.beginPath();f=0;for(var j=b.length-3;f<j;f+=2)d.x=b[f]-q,d.y=b[f+1]-n,g.x=b[f+2]-q,g.y=b[f+3]-n,e&&(d=r.project(d,h),g=r.project(g,h)),(g.x-d.x)*(c.y-d.y)>(c.x-d.x)*(g.y-d.y)&&this._triangle(a,d,g,c);a.closePath();a.fill()}},
r={project:function(a,b){return{x:(a.x-L)*b+L<<0,y:(a.y-M)*b+M<<0}},render:function(){var a=this.context;a.clearRect(0,0,x,w);if(!(u<F||$)){var b,c,d,e={x:L+q,y:M+n},f,h,g,j,k=A.items,m;k.sort(function(a,b){return a.minHeight-b.minHeight||ba(b.center,e)-ba(a.center,e)||b.height-a.height});for(var l=0,p=k.length;l<p;l++)if(b=k[l],!qa.isSimple(b)&&(f=b.footprint,W(f)))switch(c=1>b.scale?b.height*b.scale:b.height,d=0,b.minHeight&&(d=1>b.scale?b.minHeight*b.scale:b.minHeight),h=b.wallColor||ja,g=b.altColor||
ca,j=b.roofColor||Y,a.strokeStyle=g,b.shape){case "cylinder":f=b.center;m=b.radius;t.draw(a,f,m,m,c,d,h,g,j);"cone"===b.roofShape&&t.draw(a,f,m,0,c+b.roofHeight,c,j,""+D(j).lightness(0.9));"dome"===b.roofShape&&t.draw(a,f,m,m/2,c+b.roofHeight,c,j,""+D(j).lightness(0.9));break;case "cone":t.draw(a,b.center,b.radius,0,c,d,h,g);break;case "pyramid":T.draw(a,f,b.center,c,d,h,g);break;case "dome":t.draw(a,b.center,b.radius,b.radius/2,c,d,h,g);break;default:aa.draw(a,f,b.holes,c,d,h,g,j),"pyramid"===b.roofShape&&
T.draw(a,f,b.center,c+b.roofHeight,c,j,D(j).lightness(0.9))}}}},qa={maxZoom:F+2,maxHeight:5,isSimple:function(a){return u<=this.maxZoom&&a.height+a.roofHeight<this.maxHeight},render:function(){var a=this.context;a.clearRect(0,0,x,w);if(!(u<F||$||u>this.maxZoom))for(var b,c,d=A.items,e=0,f=d.length;e<f;e++)b=d[e],b.height>=this.maxHeight||(c=b.footprint,W(c)&&(a.strokeStyle=b.altColor||ca,a.fillStyle=b.roofColor||Y,"cylinder"===b.shape||"cone"===b.shape||"dome"===b.shape?t.simplified(a,b.center,b.radius):
aa.simplified(a,c,b.holes)))}},v={enabled:!0,color:"#666666",blurColor:"#000000",blurSize:15,date:new Date,direction:{x:0,y:0},project:function(a,b){return{x:a.x+this.direction.x*b,y:a.y+this.direction.y*b}},render:function(){var a=this.context,b,c,d;a.clearRect(0,0,x,w);if(this.enabled&&!(u<F||$))if(b=ra(X+q,ga+n),b=Ea(this.date,b.latitude,b.longitude),!(0>=b.altitude)){c=1/za(b.altitude);d=5>c?0.75:5*(1/c);this.direction.x=ya(b.azimuth)*c;this.direction.y=Ra(b.azimuth)*c;var e,f,h,g;b=A.items;var j;
a.canvas.style.opacity=d/(2*y);a.shadowColor=this.blurColor;a.shadowBlur=this.blurSize*(y/2);a.fillStyle=this.color;a.beginPath();d=0;for(c=b.length;d<c;d++)if(e=b[d],g=e.footprint,W(g))switch(f=1>e.scale?e.height*e.scale:e.height,h=0,e.minHeight&&(h=1>e.scale?e.minHeight*e.scale:e.minHeight),e.shape){case "cylinder":g=e.center;j=e.radius;t.shadow(a,g,j,j,f,h);"cone"===e.roofShape&&t.shadow(a,g,j,0,f+e.roofHeight,f);"dome"===e.roofShape&&t.shadow(a,g,j,j/2,f+e.roofHeight,f);break;case "cone":t.shadow(a,
e.center,e.radius,0,f,h);break;case "pyramid":T.shadow(a,g,e.center,f,h);break;case "dome":t.shadow(a,e.center,e.radius,e.radius/2,f,h);break;default:aa.shadow(a,g,e.holes,f,h),"pyramid"===e.roofShape&&T.shadow(a,g,e.center,f+e.roofHeight,f)}a.closePath();a.fill();a.shadowBlur=null;a.globalCompositeOperation="destination-out";a.beginPath();d=0;for(c=b.length;d<c;d++)if(e=b[d],g=e.footprint,W(g)&&!e.minHeight)switch(e.shape){case "cylinder":case "cone":case "dome":t.shadowMask(a,e.center,e.radius);
break;default:aa.shadowMask(a,g,e.holes)}a.fillStyle="#00ff00";a.fill();a.globalCompositeOperation="source-over"}}},fa={render:function(){this._timer&&(clearTimeout(this._timer),this._timer=null);var a=this;this._timer=setTimeout(function(){a._timer=null;a._render()},500)},_render:function(){var a=this.context;a.clearRect(0,0,x,w);if(!(u<F||$)){var b,c,d,e={x:L+q,y:M+n},f,h,g=A.items,j;g.sort(function(a,b){return a.minHeight-b.minHeight||ba(b.center,e)-ba(a.center,e)||b.height-a.height});for(var k=
0,l=g.length;k<l;k++)if(b=g[k],h=b.hitColor)if(f=b.footprint,W(f))switch(c=b.height,d=0,b.minHeight&&(d=b.minHeight),b.shape){case "cylinder":f=b.center;j=b.radius;t.hitArea(a,f,j,j,c,d,h);"cone"===b.roofShape&&t.hitArea(a,f,j,0,c+b.roofHeight,c,h);"dome"===b.roofShape&&t.hitArea(a,f,j,j/2,c+b.roofHeight,c,h);break;case "cone":t.hitArea(a,b.center,b.radius,0,c,d,h);break;case "pyramid":T.hitArea(a,f,b.center,c,d,h);break;case "dome":t.hitArea(a,b.center,b.radius,b.radius/2,c,d,h);break;default:aa.hitArea(a,
f,b.holes,c,d,h),"dome"===b.roofShape&&T.hitArea(a,f,b.center,c+b.roofHeight,c,h)}this._data=this.context.getImageData(0,0,x,w).data}},getIdFromXY:function(a,b){if(this._data){var c=4*((b|0)*x+(a|0));return this._data[c]|this._data[c+1]<<8|this._data[c+2]<<16}},toColor:function(a){return"rgb("+[a&255,a>>8&255,a>>16&255].join()+")"},_toNum:function(a,b,c){return a|b<<8|c<<16}},S,C={container:ka.createElement("DIV"),items:[],init:function(){this.container.style.pointerEvents="none";this.container.style.position=
"absolute";this.container.style.left=0;this.container.style.top=0;v.context=this.createContext(this.container);qa.context=this.createContext(this.container);r.context=this.createContext(this.container);fa.context=this.createContext()},render:function(a){Sa(function(){a||(v.render(),qa.render(),fa.render());r.render()})},createContext:function(a){var b=ka.createElement("CANVAS");b.style.webkitTransform="translate3d(0,0,0)";b.style.imageRendering="optimizeSpeed";b.style.position="absolute";b.style.left=
0;b.style.top=0;var c=b.getContext("2d");c.lineCap="round";c.lineJoin="round";c.lineWidth=1;c.mozImageSmoothingEnabled=!1;c.webkitImageSmoothingEnabled=!1;this.items.push(b);a&&a.appendChild(b);return c},appendTo:function(a){a.appendChild(this.container)},remove:function(){this.container.parentNode.removeChild(this.container)},setSize:function(a,b){for(var c=0,d=this.items.length;c<d;c++)this.items[c].width=a,this.items[c].height=b},screenshot:function(){var a=ka.createElement("CANVAS"),b=a.getContext("2d"),
c,d,e;a.width=x;a.height=w;clearInterval(S);S=null;e=A.items;c=0;for(d=e.length;c<d;c++)e[c].scale=1;this.render(!0);c=0;for(d=this.items.length;c<d;c++)e=this.items[c],""!==e.style.opacity&&(b.globalAlpha=parseFloat(e.style.opacity)),b.drawImage(e,0,0),b.globalAlpha=1;return a.toDataURL("image/png")},setPosition:function(a,b){this.container.style.left=a+"px";this.container.style.top=b+"px"}};C.init();var U=OpenLayers.Layer.prototype,l=function(a){this.offset={x:0,y:0};U.initialize.call(this,this.name,
{projection:"EPSG:900913"});a.addLayer(this)},p=l.prototype=new OpenLayers.Layer;p.name="OSM Buildings";p.attribution='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';p.isBaseLayer=!1;p.alwaysInRange=!0;p.setOrigin=function(){var a=this.map,b=a.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),a=a.resolution,c=this.maxExtent,d=(c.top-b.lat)/a<<0;q=(b.lon-c.left)/a<<0;n=d};p.setMap=function(a){this.map||U.setMap.call(this,a);C.appendTo(this.div);va(a.size);wa(a.zoom);this.setOrigin();a.events.register("click",
a,function(a){(a=fa.getIdFromXY(a.xy.x,a.xy.y))&&Ja(a)});A.update()};p.removeMap=function(a){C.remove();U.removeMap.call(this,a);this.map=null};p.onMapResize=function(){var a=this.map;U.onMapResize.call(this);va(a.size.w,a.size.h);C.render();A.update()};p.moveTo=function(a,b,c){var d=this.map;a=U.moveTo.call(this,a,b,c);if(!c){c=parseInt(d.layerContainerDiv.style.left,10);var e=parseInt(d.layerContainerDiv.style.top,10);this.div.style.left=-c+"px";this.div.style.top=-e+"px"}this.setOrigin();this.offset.x=
0;this.offset.y=0;ua(this.offset);b?(b=d.zoom,$=!1,wa(b),A.update(),C.render()):(C.render(),A.update());return a};p.moveByPx=function(a,b){this.offset.x+=a;this.offset.y+=b;var c=U.moveByPx.call(this,a,b);ua(this.offset);return c};p.setStyle=function(a){console.warn("OSM Buildings: .setStyle() will be deprecated soon. Use .style() instead.");return this.style(a)};p.style=function(a){a=a||{};var b;if(b=a.color||a.wallColor)G=D(b),ja=""+G.alpha(y),da=G.lightness(0.8),ca=""+da.alpha(y),N=G.lightness(1.2),
Y=""+N.alpha(y);a.roofColor&&(N=D(a.roofColor),Y=""+N.alpha(y));void 0!==a.shadows&&(v.enabled=!!a.shadows);C.render();return this};p.setDate=function(a){console.warn("OSM Buildings: .setDate() will be deprecated soon. Use .date() instead.");return this.date(a)};p.date=function(a){v.date=a;v.render();return this};p.loadData=function(a){console.warn("OSM Buildings: .loadData() will be deprecated soon. Use .load() instead.");return this.load(a)};p.load=function(a){A.load(a);return this};p.setData=function(a){console.warn("OSM Buildings: .setData() will be deprecated soon. Use .data() instead.");
return this.set(a)};p.set=function(a){A.set(a);return this};p.screenshot=function(a){var b=C.screenshot();a&&(J.location.href=b.replace("image/png","image/octet-stream"));return b};var Ia=function(){};p.each=function(a,b){Ia=function(c){return a.call(b,c)};return this};var Ja=function(){};p.click=function(a,b){Ja=function(c){return a.call(b,c)};return this};l.VERSION="0.2.0b";l.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';J.OSMBuildings=l})(this);
