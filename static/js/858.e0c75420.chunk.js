"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[858],{6389:function(e,t,n){n.d(t,{Z:function(){return f}});var r,c=n(4164),a=n(6373),o=n(168),u=n(6031).ZP.div(r||(r=(0,o.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 20;\n"]))),i=n(184),s=document.querySelector("#loader-root"),f=function(){return(0,c.createPortal)((0,i.jsx)(u,{children:(0,i.jsx)(a.p2,{color:"orangered",height:300,width:300,ariaLabel:"loading-indicator"})}),s)}},6858:function(e,t,n){n.r(t);var r=n(5861),c=n(885),a=n(7757),o=n.n(a),u=n(6389),i=n(2791),s=n(6871),f=n(235),p=n(184);t.default=function(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),n=(0,c.Z)(t,2),a=n[0],d=n[1],h=(0,i.useState)(!1),v=(0,c.Z)(h,2),l=v[0],x=v[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,f.Z.fetchMovieReviwes(e);case 4:n=t.sent,d(n),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:return t.prev=10,x(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,8,10,13]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),(0,p.jsxs)("div",{children:[l&&(0,p.jsx)(u.Z,{}),a.length>0&&(0,p.jsx)("ul",{children:a.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:t}),(0,p.jsx)("p",{children:n})]},r)}))})]})}},235:function(e,t,n){var r=n(5861),c=n(7757),a=n.n(c),o=n(4569).default,u="https://api.themoviedb.org/3",i="api_key=d8b0ad5d4fb786d62f1125fa68e28b99",s={fetchTrendingMovies:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("".concat(u,"/trending/movie/day?").concat(i,"&page=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},fetchMovieById:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("".concat(u,"/movie/").concat(e,"?").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},fetchSearchMovie:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("".concat(u,"/search/movie?query=").concat(e,"&").concat(i,"&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))()},fetchCastCredits:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("".concat(u,"/movie/").concat(e,"/credits?").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))()},fetchMovieReviwes:function(e){return(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("".concat(u,"/movie/").concat(e,"/reviews?").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))()}};t.Z=s}}]);
//# sourceMappingURL=858.e0c75420.chunk.js.map