(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{119:function(t,n,e){"use strict";e.r(n);var a=e(1),r=e(0),c=e(99),o=e.n(c),i=(e(118),e(11)),s=e(120),u=e(3),l=e(8),b=e(95),p=e(23),d=e(24);function m(){var t=Object(p.a)(["\n  padding: 20px 0;\n  width: 100%;\n  background-color: #efefef;\n  .formLabel {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 10px;\n  }\n  .formInput {\n    display: block;\n    width: 100%;\n  }\n  .formBtn {\n    padding: 5px 15px;\n    border: 1px solid navy;\n    border-radius: 5px;\n    background-color: lightblue;\n    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);\n  }\n  .formBtn:hover,\n  .formBtn:focus {\n    background-color: yellow;\n  }\n"]);return m=function(){return t},t}var j=d.a.div(m());function f(){var t=Object(p.a)(["\n  padding: 15px;\n  position: absolute;\n  top: 20px;\n  right: 40px;\n  background-color: tomato;\n  max-width: 450px;\n  border-radius: 5px;\n\n  .alertText {\n    font-size: 20px;\n  }\n"]);return f=function(){return t},t}var x=d.a.div(f()),h=function(t){var n=t.msg;return Object(a.jsx)(x,{children:Object(a.jsx)("p",{className:"alertText",children:n})})},O=e(29),v=function(t){return t.phonebook.contacts},g=function(t){return t.phonebook.filter},y=function(t){return t.phonebook.loader},w=Object(O.a)([v,g],(function(t,n){return t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))})),k=e(18),L=e.n(k),N=e(25),T=e(21),C=e.n(T),F=e(9),B=function(t){C.a.defaults.headers.common.Authorization="".concat(t)},I=e(16),X={name:"",number:""},S=function(){var t=Object(i.d)(v),n=(Object(i.d)(I.a),Object(i.c)()),e=Object(r.useState)(Object(l.a)({},X)),c=Object(b.a)(e,2),o=c[0],p=c[1],d=Object(r.useState)(""),m=Object(b.a)(d,2),f=m[0],x=m[1],O=Object(r.useState)(!1),g=Object(b.a)(O,2),y=g[0],w=g[1],k=function(t){var n=t.target,e=n.name,a=n.value;p((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(u.a)({},e,a))}))},T=function(t){x(t),w(!0),setTimeout((function(){w(!1)}),3e3),setTimeout((function(){x("")}),3250)},B=o.name,S=o.number;return Object(a.jsxs)(j,{children:[Object(a.jsx)(s.a,{classNames:"myAlert",in:y,timeout:250,unmountOnExit:!0,children:Object(a.jsx)(h,{msg:f})}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a,r={name:o.name,number:o.number};t.some((function(t){return t.name===r.name}))?T("".concat(r.name," is already in contacts")):r.name.length?r.number.length?(n((a=r,function(){var t=Object(N.a)(L.a.mark((function t(n,e){var r,c,o,i,s;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(F.b)()),r=e(),c=r.auth,o=c.token,i=c.localId,t.prev=2,t.next=5,C.a.post("".concat("https://goit-react-hw-08-phonebook-default-rtdb.firebaseio.com","/contacts/").concat(i,".json?auth=").concat(o),a);case 5:s=t.sent,n(Object(F.c)(Object(l.a)(Object(l.a)({},a),{},{id:s.data.name}))),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n(Object(F.a)(t.t0));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(n,e){return t.apply(this,arguments)}}())),p(Object(l.a)({},X))):T("Pleas enter a number"):T("Please enter a name")},children:[Object(a.jsxs)("label",{className:"formLabel",children:["Name",Object(a.jsx)("input",{className:"formInput",type:"text",name:"name",value:B,onChange:k})]}),Object(a.jsxs)("label",{className:"formLabel",children:["Number",Object(a.jsx)("input",{className:"formInput",type:"text",name:"number",value:S,onChange:k})]}),Object(a.jsx)("button",{className:"formBtn",type:"submit",children:"Add contact"})]})]})},E=e(121);function z(){var t=Object(p.a)(["\n  padding: 10px 0;\n\n  li:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  .myList-enter {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  .myList-enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: all 250ms;\n  }\n  .myList-exit {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  .myList-exit-active {\n    opacity: 0;\n    transform: translateX(-100%);\n    transition: all 250ms;\n  }\n"]);return z=function(){return t},t}var A=d.a.div(z());function D(){var t=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 15px;\n  border: 1px solid navy;\n  border-radius: 5px;\n  box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);\n\n  .contactListName {\n    font-weight: 700;\n    margin-right: 5px;\n  }\n  .contactListNumber {\n    margin-right: 10px;\n  }\n  .contactListBtn {\n    padding: 5px 15px;\n    border: 1px solid navy;\n    border-radius: 5px;\n    background-color: lightblue;\n    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);\n  }\n  .contactListBtn:hover,\n  .contactListBtn:focus {\n    background-color: yellow;\n  }\n"]);return D=function(){return t},t}var P=d.a.li(D()),J=function(t){var n=t.item,e=Object(i.d)(w),r=Object(i.d)(g),c=Object(i.c)();return Object(a.jsxs)(P,{children:[Object(a.jsxs)("span",{className:"contactListName",children:[n.name,":"]},n.id),Object(a.jsx)("span",{className:"contactListNumber",children:n.number}),Object(a.jsx)("button",{className:"contactListBtn",type:"button",onClick:function(t){var n=t.target.dataset.id;c(function(t){return function(){var n=Object(N.a)(L.a.mark((function n(e){return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(Object(F.e)()),n.prev=1,n.next=4,C.a.delete("".concat("https://goit-react-hw-08-phonebook-default-rtdb.firebaseio.com","/contacts/").concat(t,".json"));case 4:e(Object(F.f)(t)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),e(Object(F.d)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(t){return n.apply(this,arguments)}}()}(n)),e.filter((function(t){return t.name.toLowerCase().includes(r.toLowerCase())})).length<2&&c(Object(F.j)(""))},"data-id":n.id,children:"Delete contact"})]})},Y=function(){var t=Object(i.d)(w),n=Object(i.d)(g),e=Object(i.c)();return Object(r.useEffect)((function(){e(function(){var t=Object(N.a)(L.a.mark((function t(n,e){var a,r,c,o,i,s;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n(Object(F.h)()),a=e(),r=a.auth,c=r.token,o=r.localId,c){t.next=4;break}return t.abrupt("return");case 4:return B(c),t.prev=5,t.next=8,C.a.get("".concat("https://goit-react-hw-08-phonebook-default-rtdb.firebaseio.com","/contacts/").concat(o,".json?auth=").concat(c));case 8:(i=t.sent).data?(s=Object.keys(i.data).map((function(t){return Object(l.a)(Object(l.a)({},i.data[t]),{},{id:t})})),n(Object(F.i)(s))):n(Object(F.i)([])),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),n(Object(F.g)(t.t0));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(n,e){return t.apply(this,arguments)}}())}),[]),Object(a.jsx)(A,{children:Object(a.jsx)(E.a,{component:"ul",classnames:"list",children:t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){return Object(a.jsx)(s.a,{classNames:"myList",timeout:250,children:Object(a.jsx)(J,{item:t})},t.id)}))})})};function W(){var t=Object(p.a)(["\n  width: 100%;\n  padding: 20px 0;\n\n  .filterLabel {\n    font-weight: 700;\n    display: block;\n  }\n  .filterInput {\n    display: block;\n    width: 100%;\n  }\n"]);return W=function(){return t},t}var q=d.a.div(W()),G=Object(i.b)((function(t){return{filter:t.phonebook.filter}}),(function(t){return{setFilter:function(n){t(Object(F.j)(n))}}}))((function(t){var n=t.setFilter,e=t.filter;return Object(a.jsx)(q,{children:Object(a.jsxs)("label",{className:"filterLabel",children:["Search by name",Object(a.jsx)("input",{className:"filterInput",type:"text",name:"filter",value:e,onChange:function(t){var e=t.target.value;n(e)}})]})})}));function H(){var t=Object(p.a)(["\n  padding: 20px;\n  position: relative;\n  overflow: hidden;\n  border: 1px solid navy;\n  border-radius: 10px;\n  width: 500px;\n  margin: 0 auto;\n  background-color: #efefef;\n  box-shadow: 7px 5px 7px 5px rgba(140, 140, 140, 0.75);\n  .pageTitle {\n    margin-bottom: 20px;\n  }\n  .contactsTitle {\n    margin-bottom: 10px;\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\n  }\n  .myTitle-appear {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  .myTitle-appear-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: all 500ms;\n  }\n  .myTitle-exit {\n    opacity: 1;\n  }\n  .myTitle-exit-active {\n    opacity: 0;\n    transition: opacity 500ms;\n  }\n  .myFilter-enter {\n    opacity: 0;\n    transform: translateY(-50%);\n  }\n  .myFilter-enter-active {\n    opacity: 1;\n    transform: translateY(0);\n    transition: all 250ms;\n  }\n  .myFilter-exit {\n    opacity: 1;\n  }\n  .myFilter-exit-active {\n    opacity: 0;\n    transition: opacity 250ms;\n  }\n"]);return H=function(){return t},t}var K=d.a.div(H());n.default=function(){var t=Object(i.d)(v),n=Object(i.d)(y);return Object(a.jsxs)(K,{children:[n&&Object(a.jsx)("div",{className:"loaderWrapper",children:Object(a.jsx)(o.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})}),Object(a.jsx)(s.a,{className:"myTitle",in:!0,appear:!0,timeout:500,unmountOnExit:!0,children:Object(a.jsx)("h1",{className:"pageTitle",children:"Phonebook"})}),Object(a.jsx)(S,{}),Object(a.jsx)("h2",{className:"contactsTitle",children:"Contacts"}),Object(a.jsx)(s.a,{classNames:"myFilter",in:t.length>1,timeout:250,unmountOnExit:!0,children:Object(a.jsx)(G,{})}),Object(a.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=ContactsPage.b9bb1b53.chunk.js.map