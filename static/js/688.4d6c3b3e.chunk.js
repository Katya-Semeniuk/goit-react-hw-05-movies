"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[688],{688:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,i,a,o=r(439),s=r(791),l=r(87),u=r(529),p=r(168),c=r(444),d=r(128),h=c.ZP.div(t||(t=(0,p.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  padding: 10px;\n  text-transform: uppercase;\n"])));h.displayName="Wrapper";var v=c.ZP.input(i||(i=(0,p.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"])));v.displayName="Input";var x=(0,c.ZP)(d.G4C)(a||(a=(0,p.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 16px;\n"])));x.displayName="Icon";var f,m,g,Z=r(184),j=function(n){var e=n.value,r=n.onChange;return(0,Z.jsxs)(h,{children:[(0,Z.jsx)(x,{}),(0,Z.jsx)(v,{type:"text",value:e,placeholder:"Search movies",onChange:function(n){r(n.target.value)}})]})},b=r(689),w=r(989),y=c.ZP.div(f||(f=(0,p.Z)(["\n  padding: 10px;\n  \n"])));y.displayName="Wrapper";var C=c.ZP.li(m||(m=(0,p.Z)(["\nmargin-bottom: 5px;\n\n&:last-child {\n    margin-bottom: 0px; \n}"]))),k=(0,c.ZP)(l.rU)(g||(g=(0,p.Z)(["\ncolor: black;\n&:hover{\n    color: rgb(181 11 158);\n}\n"]))),P=r(862),N=function(n){var e=n.filteredmovies,r=(0,b.TH)();return(0,Z.jsx)(y,{children:(0,Z.jsx)("ul",{children:e.map((function(n){var e=n.id,t=n.title;return(0,Z.jsx)(C,{children:(0,Z.jsxs)(k,{to:(0,w.Gn)(P.a.aboutMovie,{movieId:e}),state:{from:r},children:[" ",t]})},e)}))})})},S=function(){var n,e=(0,l.lr)(),r=(0,o.Z)(e,2),t=r[0],i=r[1],a=null!==(n=t.get("query"))&&void 0!==n?n:"",p=(0,s.useState)([]),c=(0,o.Z)(p,2),d=c[0],h=c[1],v=(0,s.useState)(""),x=(0,o.Z)(v,2),f=x[0],m=x[1];(0,s.useEffect)((function(){""!==a&&(m("pending"),(0,u.z1)(a).then((function(n){var e=n.data;h(e.results),m("resolved")})).catch((function(n){console.log(n.message),m("error")})))}),[a]);var g=d.filter((function(n){return n.title.toLowerCase().includes(a.toLowerCase())}));return"error"===f?(0,Z.jsx)(Z.Fragment,{children:"Something was wrong"}):(0,Z.jsxs)("div",{children:[(0,Z.jsx)(j,{value:a,onChange:function(n){if(""===n)return i({});i({query:n})}}),(0,Z.jsx)(N,{filteredmovies:g})]})}}}]);
//# sourceMappingURL=688.4d6c3b3e.chunk.js.map