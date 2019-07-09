let $quick_l_1_static_node,$quick_l_0_static_attr={cellpadding:"0",cellspacing:"1",class:"xl-ao"},$quick_l_2_static_attr={colspan:"20",class:"xl-aA"},$quick_l_3_static_attr={class:"xl-av"};import Magix from"../../lib/magix.js";import Dragdrop from"../../gallery/mx-dragdrop/index.js";Magix.applyStyle("xlh",'[mx-view$="/game"]{position:relative;padding:5px}.xl-ao{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xl-ap{text-align:center;width:60px;height:60px}.xl-aq{background:url(//img.alicdn.com/tfs/TB1B3EYXkH0gK0jSZPiXXavapXa-60-60.jpg) no-repeat}.xl-ar{display:inline-block;width:40px;height:40px}.xl-as{background:url(//img.alicdn.com/tfs/TB1KawWXeL2gK0jSZFmXXc7iXXa-40-40.gif) no-repeat}.xl-at{background:url(//img.alicdn.com/tfs/TB1mJoTXa67gK0jSZFHXXa9jVXa-40-40.gif) no-repeat;position:absolute;left:-100000px}.xl-au{left:320px;top:395px;width:112px}.xl-av,.xl-au{position:absolute;height:22px}.xl-av{left:350px;top:45px}.xl-aw{left:320px}.xl-ax,.xl-aw{position:absolute;top:340px;height:22px}.xl-ax{left:384px}.xl-ay:before{content:"\u221a";color:green;font-weight:700}.xl-az:before,.xl-ay:before{position:absolute;top:0;right:3px}.xl-az:before{content:"x";color:red}.xl-az,.xl-ay{position:relative}.xl-aA{font-size:12px;padding:5px 6px}');let GameLevels=[[[-1,-1,0,0,0,-1,-1],[-1,-1,0,1,0,-1,-1],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0],[0,0,0,1,0,0,0],[-1,-1,0,0,0,-1,-1],[-1,-1,0,0,0,-1,-1]],[[-1,-1,0,0,0,-1,-1],[-1,-1,0,1,0,-1,-1],[0,0,0,1,0,0,0],[0,1,1,1,1,1,0],[0,0,0,1,0,0,0],[-1,-1,0,1,0,-1,-1],[-1,-1,0,0,0,-1,-1]],[[-1,-1,0,1,0,-1,-1],[-1,-1,0,1,0,-1,-1],[0,1,1,1,1,1,0],[0,0,0,1,0,0,0],[0,0,0,1,0,0,0],[-1,-1,1,1,1,-1,-1],[-1,-1,1,1,1,-1,-1]],[[-1,-1,0,1,0,-1,-1],[-1,-1,1,1,1,-1,-1],[0,1,1,1,1,1,0],[0,0,0,1,0,0,0],[0,0,0,1,0,0,0],[-1,-1,1,1,1,-1,-1],[-1,-1,1,1,1,-1,-1]],[[-1,-1,0,0,0,-1,-1],[-1,-1,0,0,0,-1,-1],[0,0,0,1,0,0,0],[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[-1,-1,0,0,0,-1,-1],[-1,-1,0,0,0,-1,-1]],[[-1,-1,0,0,0,-1,-1],[-1,-1,0,1,0,-1,-1],[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[1,1,1,1,1,1,1],[-1,-1,0,0,0,-1,-1],[-1,-1,0,0,0,-1,-1]],[[-1,-1,0,1,0,-1,-1],[-1,-1,1,1,1,-1,-1],[0,1,1,1,1,1,0],[1,1,1,1,1,1,1],[0,1,1,1,1,1,0],[-1,-1,1,1,1,-1,-1],[-1,-1,0,0,0,-1,-1]],[[-1,-1,1,1,1,-1,-1],[-1,-1,1,1,1,-1,-1],[1,1,0,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[-1,-1,1,1,1,-1,-1],[-1,-1,1,1,1,-1,-1]],[[-1,-1,1,1,1,-1,-1],[-1,-1,1,1,1,-1,-1],[1,1,1,1,1,1,1],[1,1,1,0,1,1,1],[1,1,1,1,1,1,1],[-1,-1,1,1,1,-1,-1],[-1,-1,1,1,1,-1,-1]]],GameLevelsDesc={8:"\u4f20\u7edf\u578b",7:"\u6234\u7ef4\u65af\u8df3\u8dc3",6:"\u4e94\u8fb9\u5f62",5:"\u5927\u91d1\u5b57\u5854",4:"\u91d1\u5b57\u5854",3:"\u53f0\u706f",2:"\u53e4\u5b57\u5f62",1:"\u5927\u5341\u5b57",0:"\u5341\u5b57\u67b6"},GameLevelsChar="\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d".split(""),GameResultLevel={5:"\u9887\u597d",4:"\u5f88\u597d",3:"\u806a\u660e",2:"\u5c16\u5b50",1:"\u5927\u5e08"},StartResult="\u9f20\u6807\u62d6\u52a8\u4efb\u610f\u9752\u86d9\u5f00\u59cb\uff0c\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u4f1a\u6709\u76f8\u5e94\u7684\u63d0\u793a<br/>\u60a8\u9700\u8981\u62d6\u52a8\u9752\u86d9\u8df3\u8fc7\u5176\u5b83\u9752\u86d9\uff0c\u8df3\u8fc7\u7684\u88ab\u5403\u6389\uff0c\u5269\u4f59\u9752\u86d9\u8d8a\u5c11\u8d8a\u597d<br/>\u5f53\u53ea\u5269\u4e00\u4e2a\u9752\u86d9\uff0c\u4e14\u5728\u6b63\u4e2d\u4f4d\u7f6e\u65f6\uff0c\u5219\u662f\u6700\u7ec8\u7684\u80dc\u5229",PlayResult="\u6e38\u620f\u7ed3\u675f\uff0c\u6ca1\u6709\u53ef\u4ee5\u79fb\u52a8\u7684\u9752\u86d9\u4e86\uff5e<br/>\u60a8\u7684\u6210\u7ee9\u662f\uff1a{score}<br/>\u5355\u51fb\u4e0a\u4e0b\u4e00\u5173\u6216\u91cd\u65b0\u5f00\u59cb\u65b0\u7684\u6e38\u620f";export default Magix.View.extend({tmpl:(e,t,a,l)=>{let i,s,x,r,c,o,n,p,_=[],{size:f,result:u,tip:g,desc:h,id:y}=e;s=[];for(let e=0,i=f.length;e<i;e++){r=[];for(let i=0,s=f[e].length;i<s;i++)c=[],-1!=f[e][i]?(n=[],1===f[e][i]&&(p=[t("span",{class:"xl-ar xl-as",x:l(i),y:l(e),"mx-mousedown":a+"\x1e_aj()"})],n.push(...p)),o=[t("td",{class:"xl-ap xl-aq",id:"main_"+l(i)+"_"+l(e)},n)],c.push(...o)):(o=$quick_l_1_static_node?[$quick_l_1_static_node]:[$quick_l_1_static_node=t("td",{_:"_",class:"xl-ap"})],c.push(...o)),r.push(...c);x=[t("tr",0,r)],s.push(...x)}return r=[t(0,1,l(u))],x=[t("td",$quick_l_2_static_attr,r)],s.push(t("tr",0,x)),i=[t("tbody",0,s)],_.push(t("table",$quick_l_0_static_attr,i)),s=[t(0,0,l(g))],i=[t("div",0,s)],s=[t(0,0,l(h))],i.push(t("div",0,s)),_.push(t("div",$quick_l_3_static_attr,i),t("span",{class:"xl-ar xl-at",id:l(y)+"_active"})),i=[t(0,0,"\u4e0a\u4e00\u5173")],_.push(t("button",{_:"a",class:"xl-aj xl-aw","mx-click":a+"\x1e_al()"},i)),i=[t(0,0,"\u4e0b\u4e00\u5173")],_.push(t("button",{_:"b",class:"xl-aj xl-ax","mx-click":a+"\x1e_ak()"},i)),i=[t(0,0,"\u91cd\u65b0\u5f00\u59cb")],_.push(t("button",{_:"c",class:"xl-au xl-aj","mx-click":a+"\x1e_am()"},i)),t(a,0,_)},mixins:[Dragdrop],init(){this._ab=0,this.set({result:StartResult})},render(){let e=this._ab,t=GameLevels[e],a=[];for(let e=0;e<t.length;e++)a.push(t[e].slice());this._ac=a,this.digest({size:a,desc:GameLevelsDesc[e],tip:"\u7b2c"+GameLevelsChar[e]+"\u5173"})},"{change.level}"(e){let t,a=GameLevels.length-1,l=this;e?l._ab<a&&(l._ab++,t=1):l._ab>0&&(l._ab--,t=1),t&&l.render()},_ag(){let e=this._ac,t={},a=0,l=!0;for(let t=0,i=e.length,s=i-2;t<i;t++){for(let i=0,x=e[t].length,r=x-2;i<x;i++)if(-1!=e[t][i])if(e[t][i]&&a++,t<s){if(i<r){if(1==e[t][i]){if(1==e[t][i+1]&&0===e[t][i+2]){l=!1;break}if(1==e[t+1][i]&&0===e[t+2][i]){l=!1;break}}else if(0===e[t][i]){if(1==e[t][i+1]&&1==e[t][i+2]){l=!1;break}if(1==e[t+1][i]&&1==e[t+2][i]){l=!1;break}}}else if(1==e[t][i]){if(1==e[t+1][i]&&0===e[t+2][i]){l=!1;break}}else if(0===e[t][i]&&1==e[t+1][i]&&1==e[t+2][i]){l=!1;break}}else if(1==e[t][i]){if(1==e[t][i+1]&&0===e[t][i+2]){l=!1;break}}else if(0===e[t][i]&&1==e[t][i+1]&&1==e[t][i+2]){l=!1;break}if(!l)break}return t._ad=l,t._ae=l&&1==a&&1==e[3][3],t._af=a,t},_ah(e,t){let a=null,l=this.root.getBoundingClientRect(),i=(e.x-l.left)/60|0,s=(e.y-l.top)/60|0,x=this._ac;return i<x[0].length&&s<x.length&&(!t||t.x!=i||t.y!=s)&&(a={x:i,y:s}),a},_ai(e,t){let a={can:!1,eatList:[]},l=!0,i=[],s=!1,x=this._ac;if(x[t.y][t.x])return a;if((e={x:e.x,y:e.y}).y==t.y){for(;e.x!=t.x;)if(t.x>e.x?e.x++:e.x--,l){if(1!=x[e.y][e.x]){s=!0;break}i.push({x:e.x,y:e.y}),l=!1}else if(e.x!=t.x){if(0!==x[e.y][e.x]){s=!0;break}l=!0}s||(a.can=!0,a.eatList=i)}else if(e.x==t.x){for(;e.y!=t.y;)if(t.y>e.y?e.y++:e.y--,l){if(1!=x[e.y][e.x]){s=!0;break}i.push({x:e.x,y:e.y}),l=!1}else if(e.y!=t.y){if(0!==x[e.y][e.x]){s=!0;break}l=!0}s||(a.can=!0,a.eatList=i)}return a},"_aj<mousedown>"(e){let t=this,a=e.eventTarget,l=a.getBoundingClientRect(),i=Magix.node(this.id+"_active"),s=t.root.getBoundingClientRect();a.style.visibility="hidden";let x,r,c=l.left-s.left,o=l.top-s.top;i.style.left=c+"px",i.style.top=o+"px";let n,p,_={x:a.getAttribute("x"),y:a.getAttribute("y")};this._e(e,a=>{a.preventDefault(),x=a.pageX-e.pageX+c,r=a.pageY-e.pageY+o,i.style.left=x+"px",i.style.top=r+"px";let l=t._ah({x:a.pageX,y:a.pageY},_),s=l!=p;if(l&&p&&(s=l.x!=p.x||l.y!=p.y),s&&(p=l,n&&(n.style.opacity=1,n.classList.remove("xl-ay"),n.classList.remove("xl-az")),l&&(n=Magix.node("main_"+l.x+"_"+l.y)))){n.style.opacity=.7,t._ai(_,l).can?n.classList.add("xl-ay"):n.classList.add("xl-az")}},e=>{let l=t._ah({x:e.pageX,y:e.pageY},_),s=!1;if(l){let e=t._ai(_,l);if(e.can){let a=t._ac;a[_.y][_.x]=0,a[l.y][l.x]=1;for(let t,l=0,i=e.eatList.length;l<i;l++)a[(t=e.eatList[l]).y][t.x]=0;if((e=t._ag())._ad){let t;t=e._ae?"\u5929\u624d\uff01":GameResultLevel[e._af]?GameResultLevel[e._af]+"\uff0c\u8fd8\u6709"+e._af+"\u4e2a\u9752\u86d9":"\u4e00\u822c\uff0c\u8fd8\u6709"+e._af+"\u4e2a\u9752\u86d9",this.set({result:PlayResult.replace("{score}",t)})}s=!0}else a.style.visibility="visible"}else a.style.visibility="visible";i.style.left="-10000px",n&&(n.style.opacity=1,n.classList.remove("xl-ay"),n.classList.remove("xl-az")),s&&this.digest({size:this._ac})})},"_ak<click>":function(){this["{change.level}"](!0)},"_al<click>":function(){this["{change.level}"]()},"_am<click>":function(){this.render()}});