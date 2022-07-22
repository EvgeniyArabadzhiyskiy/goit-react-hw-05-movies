"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[998],{9055:function(n,t,e){e.d(t,{x:function(){return o}});var r,a=e(168),c=e(6031),i=e(407),o=c.ZP.div(r||(r=(0,a.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),i.$_,i.Cg,i.Dh,i.eC,i.bK,i.GQ,i.cp)},6389:function(n,t,e){e.d(t,{Z:function(){return f}});var r,a=e(4164),c=e(6373),i=e(168),o=e(6031).ZP.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 20;\n"]))),u=e(184),s=document.querySelector("#loader-root"),f=function(){return(0,a.createPortal)((0,u.jsx)(o,{children:(0,u.jsx)(c.p2,{color:"orangered",height:300,width:300,ariaLabel:"loading-indicator"})}),s)}},5143:function(n,t,e){e.d(t,{Z:function(){return c}});var r,a=e(168),c=e(6031).ZP.ul(r||(r=(0,a.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin: 0 auto;\n"])))},7197:function(n,t,e){e.d(t,{Z:function(){return f}});var r,a=e(9055),c=e(3504),i=e(6871),o=e(168),u=e(6031).ZP.li(r||(r=(0,o.Z)(["\n  border: 1px solid black;\n  overflow: hidden;\n  border-radius: 4px;\n\n  h3{\n    margin-left: 20px;\n  }\n\n  img {\n    width: 100%;\n    object-fit: cover;\n    transition: transform 300ms linear;\n  }\n\n  &:hover img {\n    transform: scale(1.03);\n  }\n"]))),s=e(184),f=function(n){var t=n.id,e=n.title,r=n.poster,o=(0,i.TH)();return(0,s.jsx)(u,{children:(0,s.jsxs)(c.rU,{to:"/movie/".concat(t),state:{from:o},children:[(0,s.jsx)(a.x,{height:550,overflow:"hidden",children:r?(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:e}):(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/eBj90pocOdfR4IQge0XvaGBPnUF.jpg",alt:e})}),(0,s.jsx)("h3",{children:e})]})})}},4998:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(5861),a=e(885),c=e(7757),i=e.n(c),o=e(235),u=e(2791),s=e(5143),f=e(7197),d=e(6389),p=e(184),l=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],l=(0,u.useState)(!1),h=(0,a.Z)(l,2),v=h[0],m=h[1];return(0,u.useEffect)((function(){function n(){return(n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,o.Z.fetchTrendingMovies();case 4:e=n.sent,c(e),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:return n.prev=10,m(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,8,10,13]])})))).apply(this,arguments)}!function(t){n.apply(this,arguments)}()}),[]),(0,p.jsxs)(p.Fragment,{children:[v&&(0,p.jsx)(d.Z,{}),(0,p.jsx)(s.Z,{children:e.map((function(n){var t=n.id,e=n.original_title,r=n.poster_path;return(0,p.jsx)(f.Z,{title:e,id:t,poster:r},t)}))})]})},h=function(){return(0,p.jsx)("main",{children:(0,p.jsx)(l,{})})}},235:function(n,t,e){var r=e(5861),a=e(7757),c=e.n(a),i=e(4569).default,o="https://api.themoviedb.org/3",u="api_key=d8b0ad5d4fb786d62f1125fa68e28b99",s={fetchTrendingMovies:function(){return(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i("".concat(o,"/trending/movie/day?").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))()},fetchMovieById:function(n){return(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("".concat(o,"/movie/").concat(n,"?").concat(u));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},fetchSearchMovie:function(n){return(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("".concat(o,"/search/movie?query=").concat(n,"&").concat(u,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))()},fetchCastCredits:function(n){return(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("".concat(o,"/movie/").concat(n,"/credits?").concat(u));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))()},fetchMovieReviwes:function(n){return(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("".concat(o,"/movie/").concat(n,"/reviews?").concat(u,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))()}};t.Z=s}}]);
//# sourceMappingURL=998.ad6152fa.chunk.js.map