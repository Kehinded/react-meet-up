(this["webpackJsonpreact-max"]=this["webpackJsonpreact-max"]||[]).push([[0],{13:function(e,t,a){e.exports={header:"Task_header__uD1Lq"}},17:function(e,t,a){e.exports={detail:"Detail_detail__1X7lT",cancel:"Detail_cancel__2P2br",btn:"Detail_btn__3U5S9"}},26:function(e,t,a){e.exports={wrapper:"Details_wrapper__3435G"}},27:function(e,t,a){e.exports={styler:"Ui_styler__3C8Ml"}},34:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(1),c=a(24),s=a.n(c),i=(a(34),a(2)),l=a(9),o=a.n(l),u=a(29),j=a(14),d=a(11),m=a(13),b=a.n(m),f=a(17),h=a.n(f),O=a(28),p=a(0),x=Object(n.createContext)({favourites:[],totalFavourites:0,addFavourite:function(e){},removeFavourite:function(e){},itemFavourite:function(e){}});function v(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],c=a[1];var s={favourites:r,totalFavourites:r.length,addFavourite:function(e){c([].concat(Object(O.a)(r),[e]))},removeFavourite:function(e){c(r.filter((function(t){return t.id!==e})))},itemFavourite:function(e){return r.some((function(t){return t.id===e}))}};return Object(p.jsx)(x.Provider,{value:s,children:e.children})}var _=x,N=function(e){var t=e.detail,a=e.deleteItem,r=Object(i.g)(),c=Object(n.useContext)(_),s=c.itemFavourite(t.id),l=function(){s?c.removeFavourite(t.id):c.addFavourite({id:t.id,firstName:t.firstName,lastName:t.lastName,email:t.email,comment:t.comment})};return Object(p.jsxs)("div",{className:h.a.detail,children:["/"===r.pathname&&Object(p.jsx)("span",{className:h.a.cancel,onClick:function(){return a(t.id,t.firstName)},children:"\xd7"}),Object(p.jsxs)("h2",{children:["Firstname: ",t.firstName]}),Object(p.jsxs)("h3",{children:["Lastname: ",t.lastName," "]}),Object(p.jsxs)("h4",{children:["Email: ",t.email]}),Object(p.jsxs)("h5",{children:["Comment: ",t.comment]}),s?Object(p.jsx)("button",{className:h.a.btn,onClick:l,children:"unlike detail"}):Object(p.jsx)("button",{className:h.a.btn,onClick:l,children:"like detail"})]})},g=a(26),k=a.n(g),w=function(e){var t=e.details,a=e.deleteItem;return Object(p.jsx)("div",{className:k.a.wrapper,children:t.map((function(e){return Object(p.jsx)(N,{deleteItem:a,detail:e},e.id)}))})},y=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),s=Object(d.a)(c,2),i=s[0],l=s[1],m=Object(n.useState)(!1),f=Object(d.a)(m,2),h=f[0],O=f[1],x=Object(n.useState)(""),v=Object(d.a)(x,2),_=v[0],N=v[1];Object(n.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,a,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:for(n in t=e.sent,a=[],t)c=Object(u.a)({id:n},t[n]),a.push(c);l(!1),r(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g=function(){var e=Object(j.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-getting-started-70a69-default-rtdb.firebaseio.com/detail.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(n),O(!0),r(a.filter((function(e){return e.id!==t}))),e.next=5,fetch("https://react-getting-started-70a69-default-rtdb.firebaseio.com/detail/".concat(t,".json"),{method:"DELETE"}).then((function(){setTimeout((function(){O(!1),N("")}),2e3)}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return i?Object(p.jsx)("h1",{className:b.a.header,children:"Loading..."}):h?Object(p.jsxs)("div",{className:b.a.task,children:[Object(p.jsxs)("h1",{className:b.a.header,children:["deleted ",_," details"]}),Object(p.jsx)(w,{details:a,deleteItem:k})]}):Object(p.jsxs)("div",{className:b.a.task,children:[a.length>0?Object(p.jsx)("h1",{className:b.a.header,children:"all detail(s) "}):Object(p.jsx)("h1",{className:b.a.header,children:"no details to show"}),Object(p.jsx)(w,{details:a,deleteItem:k})]})},F=function(){var e=Object(n.useContext)(_);return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"i am favourite and wadup!"}),Object(p.jsx)(w,{details:e.favourites})]})},C=(a(27),a(6)),S=a.n(C),D=function(e){var t=e.userInfo,a=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(n.useRef)();return Object(p.jsxs)("form",{className:S.a.form,onSubmit:function(e){e.preventDefault();var n=a.current.value,i=r.current.value,l=c.current.value,o=s.current.value;t({firstName:n,lastName:i,email:l,comment:o}),a.current.value="",r.current.value="",c.current.value="",s.current.value=""},children:[Object(p.jsxs)("div",{className:S.a.form_group,children:[Object(p.jsx)("label",{className:S.a.form_label,htmlFor:"firstName",children:"first name"}),Object(p.jsx)("input",{type:"text",ref:a,id:"firstName",placeholder:"first name",className:S.a.form_input})]}),Object(p.jsxs)("div",{className:S.a.form_group,children:[Object(p.jsx)("label",{className:S.a.form_label,htmlFor:"lastName",children:"last name"}),Object(p.jsx)("input",{type:"text",ref:r,id:"lastName",placeholder:"last name",className:S.a.form_input})]}),Object(p.jsxs)("div",{className:S.a.form_group,children:[Object(p.jsx)("label",{className:S.a.form_label,htmlFor:"email",children:"email"}),Object(p.jsx)("input",{type:"text",ref:c,id:"email",placeholder:"email",className:S.a.form_input})]}),Object(p.jsx)("div",{className:S.a.form_group,children:Object(p.jsx)("textarea",{ref:s,className:S.a.form_input,placeholder:"Feedback",name:"",id:"",cols:"30",rows:"5"})}),Object(p.jsx)("input",{type:"submit",value:"submit"})]})},E=function(){var e=Object(i.f)(),t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){c(!1)}),[]);var s=function(){var t=Object(j.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),t.next=3,fetch("https://react-getting-started-70a69-default-rtdb.firebaseio.com/detail.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:e.replace("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r?Object(p.jsx)("h1",{style:{textAlign:"center"},children:"submitting your comment"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"submit your comment"}),Object(p.jsx)(D,{userInfo:s})]})},I=a(8),A=a.n(I),L=function(){var e=Object(n.useContext)(_);return Object(p.jsxs)("div",{className:A.a.header,children:[Object(p.jsxs)("div",{className:A.a.no_wrap,children:["No of likes: ",Object(p.jsx)("div",{className:A.a.like_no,children:e.totalFavourites})]}),Object(p.jsxs)("ul",{className:A.a.list,children:[Object(p.jsx)("li",{className:A.a.item,children:Object(p.jsx)(r.b,{className:A.a.link,to:"/",children:"main page"})}),Object(p.jsx)("li",{className:A.a.item,children:Object(p.jsx)(r.b,{className:A.a.link,to:"/form-page",children:"form page"})}),Object(p.jsx)("li",{className:A.a.item,children:Object(p.jsx)(r.b,{className:A.a.link,to:"/favourite-page",children:"favorite"})})]})]})};var T=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(L,{}),Object(p.jsxs)(i.c,{children:[Object(p.jsxs)(i.a,{path:"/",exact:!0,children:[" ",Object(p.jsx)(y,{})]}),Object(p.jsx)(i.a,{path:"/favourite-page",children:Object(p.jsx)(F,{})}),Object(p.jsxs)(i.a,{path:"/form-page",children:[" ",Object(p.jsx)(E,{})]})]})]})};s.a.render(Object(p.jsx)(v,{children:Object(p.jsx)(r.a,{children:Object(p.jsx)(T,{})})}),document.getElementById("root"))},6:function(e,t,a){e.exports={form:"Addmeet_form__1LWB8",form_group:"Addmeet_form_group__14SdK",form_label:"Addmeet_form_label__3E56r",form_input:"Addmeet_form_input__CBoi3"}},8:function(e,t,a){e.exports={header:"Navigations_header__3XodC",list:"Navigations_list__3eDac",item:"Navigations_item__3mfNX",link:"Navigations_link__1Nu6i",no_wrap:"Navigations_no_wrap__WeJmY",like_no:"Navigations_like_no__2mLP2"}}},[[42,1,2]]]);
//# sourceMappingURL=main.6e38cb55.chunk.js.map