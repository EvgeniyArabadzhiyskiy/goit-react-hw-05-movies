"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[509],{9055:function(n,t,e){e.d(t,{x:function(){return o}});var r,a=e(168),c=e(6031),i=e(407),o=c.ZP.div(r||(r=(0,a.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),i.$_,i.Cg,i.Dh,i.eC,i.bK,i.GQ,i.cp)},6389:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a=e(4164),c=e(6373),i=e(168),o=e(6031).ZP.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 20;\n"]))),s=e(184),u=document.querySelector("#loader-root"),d=function(){return(0,a.createPortal)((0,s.jsx)(o,{children:(0,s.jsx)(c.p2,{color:"orangered",height:300,width:300,ariaLabel:"loading-indicator"})}),u)}},5143:function(n,t,e){e.d(t,{Z:function(){return c}});var r,a=e(168),c=e(6031).ZP.ul(r||(r=(0,a.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin: 0 auto;\n"])))},7197:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a=e(9055),c=e(3504),i=e(6871),o=e(168),s=e(6031).ZP.li(r||(r=(0,o.Z)(["\n  border: 1px solid black;\n  overflow: hidden;\n  border-radius: 4px;\n\n  h3{\n    margin-left: 20px;\n  }\n\n  img {\n    width: 100%;\n    object-fit: cover;\n    transition: transform 300ms linear;\n  }\n\n  &:hover img {\n    transform: scale(1.03);\n  }\n"]))),u=e(184),d=function(n){var t=n.id,e=n.title,r=n.poster,o=(0,i.TH)();return(0,u.jsx)(s,{children:(0,u.jsxs)(c.rU,{to:"/movie/".concat(t),state:{from:o},children:[(0,u.jsx)(a.x,{height:550,overflow:"hidden",children:r?(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:e}):(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/eBj90pocOdfR4IQge0XvaGBPnUF.jpg",alt:e})}),(0,u.jsx)("h3",{children:e})]})})}},8509:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r=e(5861),a=e(885),c=e(7757),i=e.n(c),o=e(6389),s=e(5143),u=e(7197),d=e(1413),f=e(1134),p=e(9085),h=e(184),l=function(n){var t=n.onSearhSubmit,e=(0,f.cI)(),r=e.register,a=e.handleSubmit,c=e.reset;return(0,h.jsx)("div",{children:(0,h.jsxs)("form",{onSubmit:a((function(n){if(""!==n.search){var e=(0,d.Z)((0,d.Z)({},n),{},{search:n.search.toLowerCase()});t(e),c()}else p.Am.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430",{position:"top-center",transition:p.LG})})),children:[(0,h.jsx)("input",(0,d.Z)({},r("search"))),(0,h.jsx)("button",{type:"submit",children:"Search"})]})})},v=e(2791),m=e(3504),x=e(235),g=function(){var n,t=(0,v.useState)([]),e=(0,a.Z)(t,2),c=e[0],d=e[1],f=(0,v.useState)(!1),p=(0,a.Z)(f,2),g=p[0],w=p[1],b=(0,m.lr)(),Z=(0,a.Z)(b,2),j=Z[0],k=Z[1],S=null!==(n=j.get("search"))&&void 0!==n?n:"";(0,v.useEffect)((function(){function n(){return(n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),n.next=4,x.Z.fetchSearchMovie(S);case 4:t=n.sent,d(t),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:return n.prev=10,w(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,8,10,13]])})))).apply(this,arguments)}""!==S&&function(){n.apply(this,arguments)}()}),[S]);return(0,h.jsxs)("div",{children:[(0,h.jsx)(l,{onSearhSubmit:function(n){k(n)}}),g&&(0,h.jsx)(o.Z,{}),(0,h.jsx)(s.Z,{children:c.map((function(n){var t=n.id,e=n.original_title,r=n.poster_path;return(0,h.jsx)(u.Z,{title:e,id:t,poster:r},t)}))})]})},w=function(){return(0,h.jsx)("main",{children:(0,h.jsx)(g,{})})}},235:function(n,t,e){var r=e(5861),a=e(7757),c=e.n(a),i=e(4569).default,o="https://api.themoviedb.org/3",s="api_key=d8b0ad5d4fb786d62f1125fa68e28b99",u={fetchTrendingMovies:function(){return(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i("".concat(o,"/trending/movie/day?").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))()},fetchMovieById:function(n){return(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("".concat(o,"/movie/").concat(n,"?").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},fetchSearchMovie:function(n){return(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("".concat(o,"/search/movie?query=").concat(n,"&").concat(s,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))()},fetchCastCredits:function(n){return(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("".concat(o,"/movie/").concat(n,"/credits?").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))()},fetchMovieReviwes:function(n){return(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("".concat(o,"/movie/").concat(n,"/reviews?").concat(s,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))()}};t.Z=u}}]);
//# sourceMappingURL=509.38df342d.chunk.js.map