(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[9],{100:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var c=n(82),a=n(39),r=n(0),o=n(2),u=n(16),i=n(76),s=n(1);function f(t){var e=t.onSubmit,n=Object(r.useState)(""),c=Object(a.a)(n,2),o=c[0],u=c[1],f=function(){u("")};return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===o.trim())return i.a.error("Enter correct request!");e(o),f()},className:"SearchForm",children:[Object(s.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",value:o,autoFocus:!0,placeholder:"Search movie",onChange:function(t){u(t.currentTarget.value.toLowerCase())}}),Object(s.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(s.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]})})}var b=n(8);function h(t){var e=t.films,n=Object(o.j)().url,c=Object(o.h)();return console.log(c),Object(s.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.original_title;return Object(s.jsx)("li",{children:Object(s.jsx)(b.b,{to:{pathname:"".concat(n,"/").concat(e),state:{from:c}},children:a})},e)}))})}var j=n(37);function l(){var t=Object(o.h)(),e=Object(o.g)(),n=Object(r.useState)(""),i=Object(a.a)(n,2),b=i[0],l=i[1],d=Object(r.useState)([]),m=Object(a.a)(d,2),O=m[0],g=m[1];return Object(r.useEffect)((function(){""!==b&&b&&(e.push(Object(c.a)(Object(c.a)({},t),{},{search:"?query=".concat(b)})),j.c(b).then((function(t){g(t.results)})).catch(console.log(Error)))}),[b]),Object(r.useEffect)((function(){if(""!==t.search){var e=new URLSearchParams(t.search).get("query");l(e)}}),[t.search]),Object(s.jsxs)("div",{children:[Object(s.jsx)(u.a,{children:Object(s.jsx)(f,{onSubmit:function(t){l(t)}})}),Object(s.jsx)(u.a,{children:Object(s.jsx)(h,{films:O})})]})}},37:function(t,e,n){"use strict";n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return b}));var c=n(42),a=n.n(c),r="https://api.themoviedb.org/3",o="c740ae3bc849e8128f3bc5da169fb976";function u(){return a.a.get("".concat(r,"/trending/all/day?api_key=").concat(o,"&language=en-US&page=").concat(1)).then((function(t){return t.data}))}function i(t){return a.a.get("".concat(r,"/search/movie?api_key=").concat(o,"&query=").concat(t)).then((function(t){return t.data}))}function s(t){return a.a.get("".concat(r,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US")).then((function(t){return t.data}))}function f(t){return a.a.get("".concat(r,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US")).then((function(t){return t.data}))}function b(t){return a.a.get("".concat(r,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US")).then((function(t){return t.data}))}}}]);
//# sourceMappingURL=9.28cb95c9.chunk.js.map