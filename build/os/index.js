import"./wallpaper.js";import"./tool.js";import"./icon.js";import"./taskbar.js";let s,l,t;import e from"../lib/magix.js";export default e.View.extend({tmpl:(e,i,o,p)=>{let a=[],{id:r}=e;return s?a.push(s):a.push(s=i("div",{_:"_","mx-view":"~xl/os/wallpaper",class:"xl-_"})),l?a.push(l):a.push(l=i("div",{_:"a","mx-view":"~xl/os/tool",class:"xl-b"})),t?a.push(t):a.push(t=i("div",{_:"b","mx-view":"~xl/os/icon",class:"xl-a"})),a.push(i("div",{"mx-view":"~xl/os/taskbar",class:"xl-B",id:p(r)+"_tb"})),i(o,0,a)},render(){this.digest()},"$doc<contextmenu>"(s){s.preventDefault()}});