let $quick_w_1_static_node,$quick_w_0_static_attr={class:"xl-aY"},$quick_w_2_static_attr={class:"xl-bc"},$quick_w_3_static_attr={class:"xl-be"},$quick_w_4_static_attr={class:"xl-bd"},$quick_w_5_static_attr={class:"xl-bg"},$quick_w_6_static_attr={class:"xl-bh"};var __awaiter=this&&this.__awaiter||function(t,i,e,a){return new(e||(e=Promise))(function(s,l){function o(t){try{c(a.next(t))}catch(t){l(t)}}function r(t){try{c(a.throw(t))}catch(t){l(t)}}function c(t){t.done?s(t.value):new e(function(i){i(t.value)}).then(o,r)}c((a=a.apply(t,i||[])).next())})};import Magix from"../../lib/magix.js";import DialogCtrl from"../../os/ctrl.js";import Bridge from"./bridge.js";Magix.applyStyle("xli",'[mx-view$="news/index"]{position:relative}.xl-aY{height:28px;line-height:28px;padding:0 26px;background:#ddd;color:#333;position:-webkit-sticky;position:sticky;top:0}.xl-aZ{float:left;padding:0 5px;cursor:pointer}.xl-b_{background:#fff}.xl-ba{cursor:progress;position:absolute;left:0;right:0;top:0;bottom:0;text-align:center;padding-top:150px;font-size:20px}.xl-bb{display:inline-grid;grid-template-columns:70% 30%;grid-template-rows:80% 20%;grid-template-areas:"a b" "c c";width:410px;height:120px;margin:10px;padding:5px;background:#fafafa;border-radius:4px;-webkit-transition:box-shadow .25s;transition:box-shadow .25s;cursor:pointer}.xl-bb:hover{box-shadow:0 3px 6px 0 rgba(0,0,0,.08)}.xl-bc{font-size:18px;padding:5px}.xl-bd{grid-area:c;color:#aaa}.xl-be{width:120px;height:80px;-webkit-box-align:center;align-items:center}.xl-bf{width:auto;height:auto;max-width:100%;max-height:100%}.xl-bg,.xl-bh{display:inline-block;height:22px;line-height:22px}.xl-bh{float:right}.xl-bi{color:red}.xl-bj{color:#ff8703}');let Categories=[{text:"\u5168\u90e8",id:"BBM54PGA"},{text:"\u5a31\u4e50",id:"BA10TA81"},{text:"\u4f53\u80b2",id:"BA8E6OEO"},{text:"\u8d22\u7ecf",id:"BA8EE5GM"},{text:"\u519b\u4e8b",id:"BAI67OGG"},{text:"\u79d1\u6280",id:"BA8D4A3R"},{text:"\u624b\u673a",id:"BAI6I0O5"},{text:"\u6570\u7801",id:"BAI6JOD9"},{text:"\u65f6\u5c1a",id:"BA8F6ICN"},{text:"\u6e38\u620f",id:"BAI6RHDK"},{text:"\u6559\u80b2",id:"BA8FF5PR"},{text:"\u5065\u5eb7",id:"BDC4QSV3"},{text:"\u65c5\u6e38",id:"BEO4GINL"}],API="https://3g.163.com/touch/reconstruct/article/list/{id}wangning/{start}-{end}.html?_={guid}",NeteasePools={};window.artiList=(t=>{let i=document.currentScript.src,e=NeteasePools[i];e&&(e(t),delete NeteasePools[i])});let NeteaseJSONP=(t,i,e)=>new Promise((a,s)=>{let l=document.createElement("script"),o=!1,r=()=>{l.parentNode.removeChild(l)},c=API.replace("{id}",t).replace("{start}",i.toString()).replace("{end}",e.toString()).replace("{guid}",Magix.guid("thx_"));NeteasePools[c]=(i=>{if(!o){let e=i[t+"wangning"];o=!0,a(e)}}),l.onload=(()=>{setTimeout(()=>{r(),o||s(`load ${c} error`)},50)}),l.onerror=(()=>{r(),s(`load ${c} error`)}),l.src=c,document.body.append(l)}),Options={icon:'<svg viewBox="0 0 1039 1024"><path d="M906.589 0H132.688A132.79 132.79 0 0 0 0 132.688v605.318a132.79 132.79 0 0 0 132.688 132.79h220.411l70.828 102.882a116.181 116.181 0 0 0 191.422 0l70.828-102.922H906.59a132.79 132.79 0 0 0 132.79-132.79V132.688A132.79 132.79 0 0 0 906.589 0zm48.458 738.006a48.52 48.52 0 0 1-48.458 48.459H641.866l-95.894 139.409a31.951 31.951 0 0 1-52.667 0l-95.895-139.41H132.688a48.52 48.52 0 0 1-48.458-48.458V132.688a48.52 48.52 0 0 1 48.458-48.458h773.9a48.52 48.52 0 0 1 48.459 48.458z" fill="#1ACAD8"/><path d="M288.665 368.176a63.33 63.33 0 1 0 63.33 63.33 63.33 63.33 0 0 0-63.33-63.33zm230.973 0a63.33 63.33 0 1 0 63.33 63.33 63.33 63.33 0 0 0-63.33-63.33zm230.973 0a63.33 63.33 0 1 0 63.331 63.33 63.33 63.33 0 0 0-63.33-63.33z" fill="#1ACAD8"/></svg>',appId:"aaa",title:"\u7f51\u6613\u65b0\u95fb\u8be6\u60c5",width:450,height:650,min:!0,close:!0,dockY:30,view:"~xl/plugins/news/detail"},OpenSubDialog=(t,i)=>{Bridge._bs(i),DialogCtrl._r(t,Options)};export default Magix.View.extend({tmpl:(t,i,e,a,s,l,o,r)=>{let c,n,d,_,x,p,h,g=[],{cats:u,active:b,loading:w,error:m,list:f}=t;c=[];for(let t=0,s=u,l=s.length;t<l;t++){let l=s[t];_=[i(0,0,a(l.text))],d="xl-aZ",l.id==b&&(d+=" xl-b_"),n=[i("div",{"mx-click":l.id!=b&&e+"\x1e_bx({id:'"+r(l.id)+"'})",class:d},_)],c.push(...n)}if(g.push(i("div",$quick_w_0_static_attr,c)),w)$quick_w_1_static_node?c=[$quick_w_1_static_node]:(n=[i(0,0,"loading...")],c=[$quick_w_1_static_node=i("div",{_:"_",class:"xl-ba"},n)]),g.push(...c);else if(m)c=[i(0,0,a(m))],g.push(...c);else{c=[];for(let t=0,s=f,r=s.length;t<r;t++){let r=s[t];x=[i(0,0,a(r.title))],_=[i("div",$quick_w_2_static_attr,x)],x=[i("img",{loading:"lazy",class:"xl-bf",src:a(r.imgsrc)},0,1)],_.push(i("div",$quick_w_3_static_attr,x)),p=[i(0,0,"\u6765\u6e90\uff1a"+a(r.source))],x=[i("span",$quick_w_5_static_attr,p)],p=[i(0,0,a(r.ptime)+"\u2003")],h=[i(0,0,"\u8bc4\u8bba\uff1a"+a(r.commentCount))],d="",r.commentCount>1e3?d+="xl-bi":d+="xl-bj",p.push(i("span",{class:r.commentCount>=500&&d},h)),x.push(i("span",$quick_w_6_static_attr,p)),_.push(i("div",$quick_w_4_static_attr,x)),n=[i("div",{class:"xl-bb","mx-click":e+"\x1e_by({detail:'"+o(l,r,"\x1eg."+t)+"'})"},_)],c.push(...n)}g.push(...c)}return i(e,0,g)},init(){this.set({active:Categories[0].id,cats:Categories,list:[],start:0,size:20,loading:!0})},_bw(){return __awaiter(this,void 0,void 0,function*(){try{let t=this.get("active"),i=this.get("start"),e=this.get("size"),a=Magix.mark(this,"_bu"),s=yield NeteaseJSONP(t,i,e);if(a()){let t=this.get("list");t.push(...s),this.digest({loading:!1,list:t})}}catch(t){this.digest({error:t})}delete this._bv})},render(){this._bw()},"_bx<click>"(t){let{id:i}=t.params;this.digest({list:[],loading:!0,active:i}),this._bw()},"_by<click>"(t){let{detail:i}=t.params;OpenSubDialog(this,i)},"$win<scroll>&capture"(t){if(t.target==this.root&&!this._bv){let t=this.root;if(t.scrollTop+t.offsetHeight+200>t.scrollHeight){this._bv=1;let t=this.get("start")+this.get("size");this.set({start:t}),this._bw()}}}});