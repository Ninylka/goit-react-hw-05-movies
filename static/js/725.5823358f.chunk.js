"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[725],{1725:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,o,i,a,s,l,c,u,p=t(5861),x=t(9439),d=t(7757),f=t.n(d),h=t(9075),m=t(2791),b=t(5218),g=t(3430),v=t(168),Z=t(5867),j=Z.ZP.div(r||(r=(0,v.Z)(["\npadding: 12px 24px;\n"]))),y=Z.ZP.form(o||(o=(0,v.Z)(["\n  display: flex;\n  margin-top: 24px;\n  margin-bottom: 24px;\n  \n"]))),k=Z.ZP.input(i||(i=(0,v.Z)(["\nheight: 100%;\nfont-size: 20px;\nfont-weight: 500;\nfont-family: 'roboto';\noutline: none;\npadding: 4px 10px;\noutline: none;\nmargin-right: 20px;\nborder-radius: 12px;\nborder: 1px solid #6f6;\noutline: none;\ntransition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n    &:hover {\n      border: 1px solid #090;\n  }\n   \n"]))),w=Z.ZP.label(a||(a=(0,v.Z)(["\n  margin-left: 10px;\n"]))),S=Z.ZP.button(s||(s=(0,v.Z)(["\n background-color: #6f6;\n display: flex;\n align-items: center;\n justify-content: center;\n  border: 0;\n  cursor: pointer;\n  outline: none;\n  min-width: 120px;\nfont-size: 20px;\nfont-weight: 600;\nfont-family: 'roboto';\nborder-radius: 12px;\npadding: 4px 10px;\ncolor: #333;\ntransition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n    &:hover {\n    background-color: #090;}\n  \n\n"]))),P=t(6907),z=t(184),C=function(n){var e=n.onSubmit,t=(0,m.useState)(""),r=(0,x.Z)(t,2),o=r[0],i=r[1];return(0,z.jsx)(j,{children:(0,z.jsxs)(y,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(e(o),i("")):alert("Please enter a search query!")},children:[(0,z.jsx)(k,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){i(n.target.value)},value:o}),(0,z.jsxs)(S,{type:"submit",children:[(0,z.jsx)(P.tHH,{}),(0,z.jsx)(w,{children:"Search"})]})]})})},_=t(1087),q=Z.ZP.div(l||(l=(0,v.Z)(["\npadding: 12px 24px;\n"]))),F=Z.ZP.li(c||(c=(0,v.Z)(["\nmargin-bottom: 10px;\n&:last-child {\n    margin-bottom: 0;\n}\n\n&::before {\n    content: '\u2022'; \n    font-size: 24px;\n    margin-right: 8px; \n    color: #090; \n    display: inline-block;\n    text-shadow: black 1px 1px 2px, black 1px 1px 2px;\n  }\n"]))),H=(0,Z.ZP)(_.rU)(u||(u=(0,v.Z)(["\nfont-family: 'roboto';\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.3;\n    letter-spacing: 0.02em;\n    color: #333;\n    text-decoration: none;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n    &:hover {\n    color: #090;\n  }\n"]))),D=function(n){var e=n.movies,t=n.location;return(0,z.jsx)(q,{children:(0,z.jsx)("ul",{children:e.map((function(n){return(0,z.jsx)(F,{children:(0,z.jsx)(H,{to:"/movies/".concat(n.id),state:{from:t},children:n.title||n.name})},n.id)}))})})},E=function(n){var e=n.onSubmit,t=n.movies;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(C,{onSubmit:e}),(0,z.jsx)("ul",{children:(0,z.jsx)(D,{movies:t})})]})};function I(){var n,e=(0,m.useState)(!1),t=(0,x.Z)(e,2),r=t[0],o=t[1],i=(0,m.useState)([]),a=(0,x.Z)(i,2),s=a[0],l=a[1],c=(0,m.useState)(""),u=(0,x.Z)(c,2),d=u[0],v=u[1],Z=(0,_.lr)(""),j=(0,x.Z)(Z,2),y=j[0],k=j[1],w=null!==(n=y.get("query"))&&void 0!==n?n:"";(0,m.useEffect)((function(){function n(){return(n=(0,p.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.prev=1,n.next=4,(0,h.bI)(w);case 4:0===(e=n.sent).length?b.ZP.error("No movie available"):l(e),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:return n.prev=10,o(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,8,10,13]])})))).apply(this,arguments)}""!==d&&function(){n.apply(this,arguments)}()}),[d,w]);return(0,z.jsxs)(z.Fragment,{children:[r&&(0,z.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:(0,z.jsx)(g.g4,{height:"50",width:"50",radius:"9",color:"#090",ariaLabel:"three-dots-loading"})}),!r&&(0,z.jsx)(E,{onSubmit:function(n){v(n),k({query:n})},movies:s})]})}}}]);
//# sourceMappingURL=725.5823358f.chunk.js.map