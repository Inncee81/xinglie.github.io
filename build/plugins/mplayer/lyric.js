var __awaiter=this&&this.__awaiter||function(t,e,i,a){return new(i||(i=Promise))(function(r,s){function l(t){try{h(a.next(t))}catch(t){s(t)}}function n(t){try{h(a.throw(t))}catch(t){s(t)}}function h(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(l,n)}h((a=a.apply(t,e||[])).next())})};import Magix from"../../lib/magix.js";import Player from"./player.js";let lineReg=/((?:\[[0-9:\.]+\])+)([^\r\n]*)/g,offsetReg=/\[offset\s*:\s*(\d+)\]/i,timeReg=/\[([0-9\.:]+)\]/g,Sort=(t,e)=>t.time-e.time,MaxLines=5,NoLyric=[{text:""},{text:"\u6b4c\u8bcd\u52a0\u8f7d\u4e2d..."}],ErrorLyric=[{text:""},{text:"\u83b7\u53d6\u6b4c\u8bcd\u5931\u8d25"}],ParseLyric=t=>{let e=0,i=[];return t.replace(offsetReg,(t,i)=>(e=parseFloat(i)/1e3,"")).replace(lineReg,(t,a,r)=>{a.replace(timeReg,(t,a)=>{let s=0,l=(a=a.split(":")).length-1;for(let t=0;t<=l;t++)s+=a[t]*Math.pow(60,l-t);s-=e,isNaN(s)||i.push({time:s,text:r})})}),i.length<2&&i.push({time:-1,text:""}),i=i.sort(Sort)};export default Magix.View.extend({tmpl:(t,e,i,a)=>{let r,s,l,n=[],{lyrics:h}=t;for(let t=0,i=h,o=i.length;t<o;t++){let h=i[t];l=[e(0,0,a(h.text))],s="xl-bb",h.active&&(s+=" xl-bc"),r=[e("div",{title:a(h.text),class:s},l)],n.push(...r)}return e(i,0,n)},init(){Player.on("_av",t=>{this._aJ(t.song.sid)}),Player.on("_aK",t=>{this._aL(t.current)}),Player.on("_aw",()=>{this._aM()})},_aM(){delete this._aN,delete this._aO,delete this._aP,delete this._aQ,delete this._aR,this._aL(0)},_aJ(t){return __awaiter(this,void 0,void 0,function*(){let e=Magix.mark(this,"_aJ");try{let{lyric:i}=yield Player._aS(t);e()&&(this._aN=ParseLyric(i))}catch(t){this._aR=!0}})},_aL(t){let e=this._aN;if(e){let i=0,a=[];for(;i<e.length;i++){if(e[i].time>t)break}let r=Math.ceil(MaxLines/2),s=Math.floor(MaxLines/2),l=Math.max(i-r,0),n=Math.min(e.length,i+s);if(0==l&&e.length>MaxLines-1&&n-l<MaxLines&&n++,n==e.length&&e.length>MaxLines-1&&n-l<MaxLines&&l--,(i-=1)<0&&(i=0),this._aP!=n||this._aO!=l||this._aQ!=i){this._aP=n,this._aO=l,this._aQ=i;for(let t=l;t<n;t++)a.push({text:e[t].text,active:t==i});this.digest({lyrics:a})}}else this.digest({lyrics:this._aR?ErrorLyric:NoLyric})},render(){this.digest({lyrics:NoLyric})}});