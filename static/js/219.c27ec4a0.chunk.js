"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{1687:function(n,t,e){e.d(t,{Df:function(){return s},TP:function(){return p},bI:function(){return u},tx:function(){return l},zv:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),o=e(5294),i="b8d7d89f197d26db40ec55b0893fc528";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t,"&include_adult=false&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/day?api_key=".concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&append_to_response=videos,images,credits&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,r=e.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4219:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,a,c,o,i,u,s,p=e(5861),f=e(9439),l=e(7757),d=e.n(l),h=e(2791),v=e(7689),x=e(5218),g=e(1687),m=e(9067),Z=e(168),w=e(5867),b=w.ZP.ul(r||(r=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 0;\n"]))),y=w.ZP.div(a||(a=(0,Z.Z)(["\n  width: 250px;\n  text-align: center;\n   "]))),k=w.ZP.img(c||(c=(0,Z.Z)(["\nwidth: 100%;\nmax-height: 375px;\nborder-radius: 8px;\nmargin-bottom: 10px;\n\n\n"]))),_=w.ZP.h3(o||(o=(0,Z.Z)(["\nfont-family: 'roboto';\n color: #090;\n margin-bottom: 12px;\n\n"]))),j=w.ZP.p(i||(i=(0,Z.Z)(["\nfont-family: 'roboto';\ncolor: #424949;\n"]))),P=w.ZP.span(u||(u=(0,Z.Z)(["\nfont-family: 'roboto';\nfont-weight: 600;\ncolor: #424949;\n"]))),S=w.ZP.p(s||(s=(0,Z.Z)(["\nfont-family: 'roboto';\nfont-weight: 600;\nfont-size: 20px;\npadding-left: 12px;\n"]))),U=e(184),z=function(){var n=(0,h.useState)([]),t=(0,f.Z)(n,2),e=t[0],r=t[1],a=(0,h.useState)(!1),c=(0,f.Z)(a,2),o=c[0],i=c[1],u=(0,v.UO)().movieId;(0,h.useEffect)((function(){function n(){return(n=(0,p.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.zv)(u);case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),x.ZP.error("Oops! Something went wrong! Please try reloading this page! \ud83e\udd79");case 10:return n.prev=10,i(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))).apply(this,arguments)}i(!0),function(){n.apply(this,arguments)}()}),[u]);return(0,U.jsxs)("div",{children:[o&&(0,U.jsx)(m.a,{}),(0,U.jsx)(b,{children:e.length>0?e.map((function(n){var t=n.profile_path,e=n.name,r=n.character,a=n.id;return(0,U.jsxs)(y,{children:[(0,U.jsx)(k,{src:t?"".concat("https://image.tmdb.org/t/p/w500","/").concat(t):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e,width:250,height:375}),(0,U.jsx)(_,{children:e}),(0,U.jsxs)(j,{children:[(0,U.jsx)(P,{children:"Character: "})," ",r]})]},a)})):(0,U.jsx)(S,{children:"We don't have any information about the actors."})})]})}}}]);
//# sourceMappingURL=219.c27ec4a0.chunk.js.map