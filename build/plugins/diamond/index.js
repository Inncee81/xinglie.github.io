import"./explain.js";import"./game.js";let e;import t from"../../lib/magix.js";t.applyStyle("xlf",".xl-ah{border:none;color:#333;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#f96447;border-radius:5px}");export default t.View.extend({tmpl:(t,s,i)=>{let r,a=[],{state:n}=t;return"desc"==n?(r=[s("div",{_:"_","mx-view":"~xl/plugins/diamond/explain","mx-start":i+"\x1e_au()"})],a.push(...r)):(r=e?[e]:[e=s("div",{_:"a","mx-view":"~xl/plugins/diamond/game"})],a.push(...r)),s(i,0,a)},init(){this.set({state:"desc"})},render(){this.digest()},"_au<start>"(e){this.digest({state:"start"})}});