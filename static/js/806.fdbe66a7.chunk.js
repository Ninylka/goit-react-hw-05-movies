"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{1687:function(n,t,e){e.d(t,{Df:function(){return s},TP:function(){return p},bI:function(){return i},tx:function(){return l},zv:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),o=e(5294),u="b8d7d89f197d26db40ec55b0893fc528";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&include_adult=false&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/day?api_key=".concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&append_to_response=videos,images,credits&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,r=e.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},1806:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,c,o,u,i=e(5861),s=e(9439),p=e(7757),f=e.n(p),l=e(2791),d=e(7689),h=e(5218),v=e(1687),x=e(168),g=e(5867),m=g.ZP.b(r||(r=(0,x.Z)(["\nfont-family: 'roboto';\nfont-size: 20px;\nfont-weight: 600;\n color: #090;\n margin-right: 12px;\n margin-bottom: 12px;\n"]))),Z=g.ZP.span(a||(a=(0,x.Z)(["\nfont-family: 'roboto';\ncolor: #424949;\nfont-size: 16px;\n\n"]))),b=g.ZP.p(c||(c=(0,x.Z)(["\nfont-family: 'roboto';\nfont-weight: 600;\ncolor: #424949;\nmargin-top: 12px;\n"]))),w=g.ZP.li(o||(o=(0,x.Z)(["\npadding-left: 12px;\npadding-right: 12px;\nmargin-bottom: 12px;\n"]))),y=g.ZP.p(u||(u=(0,x.Z)(["\nfont-family: 'roboto';\nfont-weight: 600;\nfont-size: 20px;\npadding-left: 12px;\n"]))),k=e(9067),_=e(184),j=function(){var n=(0,l.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,l.useState)(!1),c=(0,s.Z)(a,2),o=c[0],u=c[1],p=(0,d.UO)().movieId;return(0,l.useEffect)((function(){function n(){return(n=(0,i.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.tx)(p);case 3:t=n.sent,r(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),h.ZP.error("Something wrong!");case 10:return n.prev=10,u(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))).apply(this,arguments)}u(!0),function(){n.apply(this,arguments)}()}),[p]),(0,_.jsxs)(_.Fragment,{children:[o&&(0,_.jsx)(k.a,{}),e.length>0?(0,_.jsx)("ul",{children:e.map((function(n){return(0,_.jsxs)(w,{children:[(0,_.jsxs)(m,{children:["Author: ",(0,_.jsx)(Z,{children:n.author})]}),(0,_.jsx)(b,{children:n.content})]},n.id)}))}):(0,_.jsx)(y,{children:"Sorry! No reviews available!"})]})}}}]);
//# sourceMappingURL=806.fdbe66a7.chunk.js.map