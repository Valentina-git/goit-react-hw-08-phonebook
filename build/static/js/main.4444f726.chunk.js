(this.webpackJsonptest=this.webpackJsonptest||[]).push([[4],{16:function(t,n,e){"use strict";e.d(n,"c",(function(){return c})),e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return a}));var c=function(t){return t.auth.token},r=function(t){return t.auth.user.email},a=function(t){return t.auth.localId}},28:function(t,n,e){"use strict";e.d(n,"d",(function(){return j})),e.d(n,"c",(function(){return d})),e.d(n,"b",(function(){return l})),e.d(n,"a",(function(){return f}));var c=e(18),r=e.n(c),a=e(8),o=e(25),u=e(21),i=e.n(u),b=e(5);i.a.defaults.baseURL="https://goit-react-hw-08-phonebook-default-rtdb.firebaseio.com";var s=function(t){i.a.defaults.headers.common.Authorization="".concat(t)},j=function(t){return function(){var n=Object(o.a)(r.a.mark((function n(e){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(Object(b.i)()),n.prev=1,n.next=4,i.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBry6fNSgz0oyA0j1DZe4Xoktht1W5fzFQ",Object(a.a)(Object(a.a)({},t),{},{returnSecureToken:!0}));case 4:c=n.sent,s(c.data.idToken),e(Object(b.j)(c.data)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),e(Object(b.h)(n.t0));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(t){return n.apply(this,arguments)}}()},d=function(t){return function(){var n=Object(o.a)(r.a.mark((function n(e){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(Object(b.f)()),n.prev=1,n.next=4,i.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBry6fNSgz0oyA0j1DZe4Xoktht1W5fzFQ",Object(a.a)(Object(a.a)({},t),{},{returnSecureToken:!0}));case 4:c=n.sent,s(c.data.idToken),e(Object(b.g)(c.data)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),e(Object(b.e)(n.t0));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(t){return n.apply(this,arguments)}}()},l=function(){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(Object(b.d)());case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},f=function(){return function(){var t=Object(o.a)(r.a.mark((function t(n,e){var c,a,o,u,j;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=e(),a=c.auth,o=a.token,u=a.localId,o){t.next=3;break}return t.abrupt("return");case 3:return s(o),n(Object(b.b)()),t.prev=5,t.next=8,i.a.post("contacts/".concat(u,".json?auth=").concat(o),{});case 8:j=t.sent,n(Object(b.c)(j.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),n(Object(b.a)(t.t0));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(n,e){return t.apply(this,arguments)}}()}},5:function(t,n,e){"use strict";e.d(n,"i",(function(){return r})),e.d(n,"j",(function(){return a})),e.d(n,"h",(function(){return o})),e.d(n,"f",(function(){return u})),e.d(n,"g",(function(){return i})),e.d(n,"e",(function(){return b})),e.d(n,"d",(function(){return s})),e.d(n,"b",(function(){return j})),e.d(n,"c",(function(){return d})),e.d(n,"a",(function(){return l}));var c=e(2),r=Object(c.b)("auth/signUpRequest"),a=Object(c.b)("auth/signUpSuccess"),o=Object(c.b)("auth/signUpError"),u=Object(c.b)("auth/signInRequest"),i=Object(c.b)("auth/signInSuccess"),b=Object(c.b)("auth/signInError"),s=Object(c.b)("auth/logOutSuccess"),j=Object(c.b)("auth/getCurrentUserRequest"),d=Object(c.b)("auth/getCurrentUserSuccess"),l=Object(c.b)("auth/getCurrentUserError")},63:function(t,n,e){},9:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o})),e.d(n,"e",(function(){return u})),e.d(n,"f",(function(){return i})),e.d(n,"d",(function(){return b})),e.d(n,"h",(function(){return s})),e.d(n,"i",(function(){return j})),e.d(n,"g",(function(){return d})),e.d(n,"j",(function(){return l}));var c=e(2),r=Object(c.b)("phonebook/addRequest"),a=Object(c.b)("phonebook/addSuccess"),o=Object(c.b)("phonebook/addError"),u=Object(c.b)("phonebook/deleteRequest"),i=Object(c.b)("phonebook/deleteSuccess"),b=Object(c.b)("phonebook/deleteError"),s=Object(c.b)("phonebook/getRequest"),j=Object(c.b)("phonebook/getSuccess"),d=Object(c.b)("phonebook/getError"),l=Object(c.b)("phonebook/setFilter")},94:function(t,n,e){"use strict";e.r(n);var c=e(1),r=e(0),a=e(27),o=e.n(a),u=e(50),i=(e(62),e(63),e(11)),b=e(6),s=[{path:"/",name:"Home",exact:!0,component:Object(r.lazy)((function(){return e.e(1).then(e.bind(null,122))})),private:!1,restricted:!1},{path:"/register",name:"Register",exact:!1,component:Object(r.lazy)((function(){return e.e(3).then(e.bind(null,123))})),private:!1,restricted:!0},{path:"/login",name:"Login",exact:!1,component:Object(r.lazy)((function(){return e.e(2).then(e.bind(null,124))})),private:!1,restricted:!0},{path:"/contacts",name:"Contacts",exact:!1,component:Object(r.lazy)((function(){return Promise.all([e.e(7),e.e(0)]).then(e.bind(null,119))})),private:!0,restricted:!1}],j=e(16),d=e(23),l=e(24);function f(){var t=Object(d.a)(["\n  right: 20px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .logOutMenuText {\n    margin-right: 20px;\n  }\n  .logOutMenuBtn {\n    padding: 5px 15px;\n    border: 1px solid navy;\n    border-radius: 5px;\n    background-color: lightblue;\n    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);\n  }\n  .logOutMenuBtn:hover,\n  .logOutMenuBtn:focus {\n    background-color: yellowgreen;\n  }\n"]);return f=function(){return t},t}var O=l.a.div(f()),p=e(28),h=function(){var t=Object(i.c)(),n=Object(i.d)(j.b);return Object(c.jsxs)(O,{children:[Object(c.jsxs)("span",{className:"logOutMenuText",children:["Hello, ",n]}),Object(c.jsx)("button",{className:"logOutMenuBtn",type:"button",onClick:function(){t(Object(p.b)())},children:"Log Out"})]})},x=e(19);function g(){var t=Object(d.a)(["\n  text-decoration: none;\n  padding: 10px;\n  font-size: 20px;\n  color: lightgrey;\n\n  &."," {\n    color: white;\n  }\n"]);return g=function(){return t},t}function v(){var t=Object(d.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  margin-bottom: 20px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]);return v=function(){return t},t}var m,k,y,w,z,S,I,C=l.a.header(v()),E=Object(l.a)(x.b)(g(),(function(t){return t.activeClassName})),N=function(){var t=Object(i.d)(j.c);return Object(c.jsxs)(C,{children:[t?s.map((function(t){return!t.restricted&&Object(c.jsx)(E,{className:"navlink",activeClassName:"navlink-active",to:t.path,exact:t.exact,children:t.name},t.name)})):s.map((function(t){return!t.private&&Object(c.jsx)(E,{className:"navlink",activeClassName:"navlink-active",to:t.path,exact:t.exact,children:t.name},t.name)})),t&&Object(c.jsx)(h,{})]})},R=e(8),T=e(30),U=function(t){var n=t.component,e=Object(T.a)(t,["component"]),r=Object(i.d)(j.c);return Object(c.jsx)(b.b,Object(R.a)(Object(R.a)({},e),{},{render:function(t){return r?Object(c.jsx)(n,Object(R.a)({},t)):Object(c.jsx)(b.a,{to:"/login"})}}))},B=function(t){var n=t.component,e=t.restricted,r=Object(T.a)(t,["component","restricted"]),a=Object(i.d)(j.c);return Object(c.jsx)(b.b,Object(R.a)(Object(R.a)({},r),{},{render:function(t){return a&&e?Object(c.jsx)(b.a,{to:"/contacts"}):Object(c.jsx)(n,Object(R.a)({},t))}}))},q=function(){return Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)("div",{children:"... Loading "}),children:Object(c.jsx)(b.d,{children:s.map((function(t){return t.private?Object(c.jsx)(U,Object(R.a)({},t),t.path):Object(c.jsx)(B,Object(R.a)(Object(R.a)({},t),{},{restricted:t.restricted}),t.path)}))})})},A=function(){var t=Object(i.c)(),n=Object(i.d)(j.c),e=Object(b.g)();return Object(r.useEffect)((function(){t(Object(p.a)())}),[]),Object(r.useEffect)((function(){n||e.replace("/login")}),[n]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(N,{}),Object(c.jsx)(q,{})]})},M=e(2),F=e(7),L=e(3),W=e(5),D={email:""},H=Object(M.c)(D,(m={},Object(L.a)(m,W.j,(function(t,n){return{email:n.payload.email}})),Object(L.a)(m,W.g,(function(t,n){return{email:n.payload.email}})),Object(L.a)(m,W.c,(function(t,n){return n.payload})),Object(L.a)(m,W.d,(function(){return D})),m)),J=Object(M.c)(null,(k={},Object(L.a)(k,W.j,(function(t,n){return n.payload.idToken})),Object(L.a)(k,W.g,(function(t,n){return n.payload.idToken})),Object(L.a)(k,W.d,(function(){return null})),k)),P=Object(M.c)(null,(y={},Object(L.a)(y,W.j,(function(t,n){return n.payload.localId})),Object(L.a)(y,W.g,(function(t,n){return n.payload.localId})),Object(L.a)(y,W.d,(function(){return null})),y)),Q=Object(M.c)(null,(w={},Object(L.a)(w,W.h,(function(t,n){return n.payload})),Object(L.a)(w,W.e,(function(t,n){return n.payload})),Object(L.a)(w,W.a,(function(t,n){return n.payload})),w)),X=Object(F.c)({user:H,token:J,error:Q,localId:P}),Z=e(31),G=e(9),K=Object(M.c)([],(z={},Object(L.a)(z,G.c,(function(t,n){var e=n.payload;return[].concat(Object(Z.a)(t),[e])})),Object(L.a)(z,G.f,(function(t,n){var e=n.payload;return Object(Z.a)(t.filter((function(t){return t.id!==e})))})),Object(L.a)(z,G.i,(function(t,n){var e=n.payload;return Object(Z.a)(e)})),z)),V=Object(M.c)("",Object(L.a)({},G.j,(function(t,n){return n.payload}))),Y=Object(M.c)(!1,(S={},Object(L.a)(S,G.b,(function(){return!0})),Object(L.a)(S,G.c,(function(){return!1})),Object(L.a)(S,G.a,(function(){return!1})),Object(L.a)(S,G.e,(function(){return!0})),Object(L.a)(S,G.f,(function(){return!1})),Object(L.a)(S,G.d,(function(){return!1})),Object(L.a)(S,G.h,(function(){return!0})),Object(L.a)(S,G.i,(function(){return!1})),Object(L.a)(S,G.g,(function(){return!1})),S)),$=Object(M.c)(null,(I={},Object(L.a)(I,G.a,(function(t,n){return n.payload})),Object(L.a)(I,G.d,(function(t,n){return n.payload})),Object(L.a)(I,G.g,(function(t,n){return n.payload})),I)),_=Object(F.c)({contacts:K,filter:V,loader:Y,error:$}),tt=e(17),nt=e(56),et={key:"auth",storage:e.n(nt).a,whitelist:["token","localId"]},ct=Object(F.c)({phonebook:_,auth:Object(tt.g)(et,X)}),rt=Object(M.a)({reducer:ct,middleware:Object(M.d)({serializableCheck:{ignoredActions:[tt.a,tt.f,tt.b,tt.c,tt.d,tt.e]}})}),at=rt,ot=Object(tt.h)(rt);o.a.render(Object(c.jsx)(i.a,{store:at,children:Object(c.jsx)(u.a,{loading:null,persistor:ot,children:Object(c.jsx)(x.a,{children:Object(c.jsx)(A,{})})})}),document.getElementById("root"))}},[[94,5,6]]]);
//# sourceMappingURL=main.4444f726.chunk.js.map