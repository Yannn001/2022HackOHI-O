(this.webpackJsonpstudentfrontend=this.webpackJsonpstudentfrontend||[]).push([[0],{69:function(e,t,s){},70:function(e,t,s){},72:function(e,t,s){},78:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s.n(c),r=s(23),n=s.n(r),l=(s(69),s(70),s(12)),a=s(1);function o(){document.querySelector(".nav__menu");return Object(c.useEffect)((function(){var e=function(e){document.querySelector("nav").classList.toggle("window-scroll",window.scrollY>0)},t=function(e){i.style.display="block",r.style.display="inline-block",c.style.display="none"},s=function(e){i.style.display="none",r.style.display="none",c.style.display="inline-block"};window.innerWidth<1024&&document.querySelectorAll(".nav__menu li a").forEach((function(e){e.addEventListener("click",s)}));var c=document.querySelector("#open-menu-btn"),i=document.querySelector(".nav__menu"),r=document.querySelector("#close-menu-btn");return window.addEventListener("scroll",e),c.addEventListener("click",t),r.addEventListener("click",s),function(){window.removeEventListener("scroll",e),c.removeEventListener("click",t),r.removeEventListener("click",s)}}),[]),Object(a.jsx)("div",{children:Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{class:"container nav__container",children:[Object(a.jsx)("a",{href:"index.html",class:"nav__logo",children:Object(a.jsx)("h3",{children:"Welcome!"})}),Object(a.jsxs)("ul",{class:"nav__menu",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"",children:"Demo"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"",children:"Future Solution"})}),Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"https://hr.osu.edu/benefits/travel-assistance/",class:"btn btn-primary",children:[Object(a.jsx)("i",{class:"uil uil-grin"})," OSU "]})}),Object(a.jsx)("li",{})]}),Object(a.jsx)("button",{id:"open-menu-btn",children:Object(a.jsx)("i",{class:"uil uil-bars"})}),Object(a.jsx)("button",{id:"close-menu-btn",children:Object(a.jsx)("i",{class:"uil uil-multiply"})})]})})})}var j=s(7),d=(s(72),s(126)),b=s(123),h=s(124),u=[{value:"yes",label:"yes"},{value:"no",label:"no"}],O=[{value:"Ohio union",label:"Ohio union"},{value:"99P labs",label:"99P labs"}],x=[{value:"RPAC",label:"RPAC"},{value:"Dreese lab",label:"Dreese lab"}];var v=function(e){var t=e.setOpenModal,s=c.useState(!0),i=Object(j.a)(s,2),r=i[0],n=i[1],l=c.useState(!1),o=Object(j.a)(l,2),v=o[0],m=o[1],p=c.useState(""),f=Object(j.a)(p,2),_=f[0],g=f[1],y=c.useState(""),w=Object(j.a)(y,2),S=w[0],k=w[1];return Object(a.jsx)("div",{className:"modalBackground",children:Object(a.jsxs)("div",{className:"modalContainer",children:[Object(a.jsx)("div",{className:"titleCloseBtn",children:Object(a.jsx)("button",{onClick:function(){t(!1)},children:"X"})}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:Object(a.jsxs)("div",{children:[Object(a.jsx)(b.a,{id:"outlined-required",label:"optional",defaultValue:"",helperText:"What's your OSU #ID?"}),Object(a.jsx)(b.a,{id:"outlined-select-preferWalk",select:!0,label:"Select",value:r,onChange:function(e){"no"===e.target.value?n(!1):"yes"===e.target.value&&n(!0),console.log(r)},helperText:"Do you prefer to walk?",children:u.map((function(e){return Object(a.jsx)(h.a,{value:e.value,children:e.label},e.value)}))}),Object(a.jsx)(b.a,{id:"outlined-select-preferDrive",select:!0,label:"Select",value:v,onChange:function(e){m(e.target.value)},helperText:"Do you prefer to drive?",children:u.map((function(e){return Object(a.jsx)(h.a,{value:e.value,children:e.label},e.value)}))}),Object(a.jsx)(b.a,{id:"outlined-select-start",select:!0,label:"Select",value:_,onChange:function(e){g(e.target.value)},helperText:"What is your starting point?",children:O.map((function(e){return Object(a.jsx)(h.a,{value:e.value,children:e.label},e.value)}))}),Object(a.jsx)(b.a,{id:"outlined-select-end",select:!0,label:"Select",value:S,onChange:function(e){k(e.target.value)},helperText:"Where is your destination?",children:x.map((function(e){return Object(a.jsx)(h.a,{value:e.value,children:e.label},e.value)}))})]})})}),Object(a.jsx)("div",{className:"body"}),Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("button",{onClick:function(){t(!1)},id:"cancelBtn",children:"Cancel"}),Object(a.jsx)("button",{children:"Submit"})]})]})})};function m(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),s=t[0],i=t[1];return Object(a.jsx)("div",{children:Object(a.jsxs)("header",{children:[Object(a.jsxs)("div",{class:"container header__container",children:[Object(a.jsx)("div",{class:"header__left",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"2022 Hack OHI/O Honda Challenge"}),Object(a.jsx)("p",{children:"We are aiming to provide user with the best travelling solution with the current resources we have, and provide out solution for improvement."}),Object(a.jsx)("a",{class:"btn btn-primary btn-lg",onClick:function(){i(!0)},children:"Demo"})]})}),Object(a.jsxs)("div",{class:"header__right",children:[Object(a.jsx)("div",{class:"header__image",children:Object(a.jsx)("img",{src:"https://user-images.githubusercontent.com/69735000/194733235-0fe58209-5768-44ce-b7c9-adbb376b70b6.png"})}),Object(a.jsx)("div",{class:"header__right-bg"}),Object(a.jsx)("ul",{class:"header__socials"})]})]}),s&&Object(a.jsx)(v,{setOpenModal:i})]})})}function p(){return Object(a.jsx)("div",{children:Object(a.jsx)("section",{id:"aboutMe",children:Object(a.jsxs)("div",{class:"container services__container",children:[Object(a.jsxs)("div",{class:"services__left",children:[Object(a.jsx)("h1",{children:" TRAVEL "}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:" IS "}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:" FOR "}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:" EVERYONE "})]}),Object(a.jsxs)("div",{class:"services__right",children:[Object(a.jsxs)("h2",{children:[Object(a.jsx)("b",{children:" Our goal is to provide a solution of travel with the current resources, including bus, car, walk, scooters... "})," ",Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{class:"services__cards",children:[Object(a.jsxs)("div",{class:"services__card",children:[Object(a.jsx)("span",{class:"services__card-icon",children:Object(a.jsx)("i",{class:"uil uil-layers-alt"})}),Object(a.jsx)("h5",{children:"Current problems"}),Object(a.jsxs)("a",{href:"",children:[" Discover more",Object(a.jsx)("i",{class:"uil uil-arrow-right"})]})]}),Object(a.jsxs)("div",{class:"services__card",children:[Object(a.jsx)("span",{class:"services__card-icon",children:Object(a.jsx)("i",{class:"uil uil-browser"})}),Object(a.jsx)("h5",{children:"Our solution"}),Object(a.jsxs)("a",{href:"",children:["Discover more ",Object(a.jsx)("i",{class:"uil uil-arrow-right"})]})]}),Object(a.jsxs)("div",{class:"services__card",children:[Object(a.jsx)("span",{class:"services__card-icon",children:Object(a.jsx)("i",{class:"uil uil-lightbulb"})}),Object(a.jsx)("h5",{children:"Future solution"}),Object(a.jsxs)("a",{href:"",children:["Discover more ",Object(a.jsx)("i",{class:"uil uil-arrow-right"})]})]})]})]})]})})})}function f(){return Object(a.jsx)("div",{children:Object(a.jsx)("footer",{children:Object(a.jsx)("small",{children:" Copyright \xa9 O(3) "})})})}function _(){return Object(a.jsx)("div",{children:Object(a.jsx)("section",{id:"aboutMe",children:Object(a.jsxs)("div",{class:"container services__container",children:[Object(a.jsxs)("div",{class:"services__left",children:[Object(a.jsx)("h1",{children:" Current "}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:" problem "}),Object(a.jsx)("br",{})]}),Object(a.jsx)("div",{class:"services__right",children:Object(a.jsxs)("h2",{children:["The current problem is: ",Object(a.jsx)("br",{}),Object(a.jsxs)("b",{children:["For those who are handicapped, google map may not be able to provide them with an optimal solution.",Object(a.jsx)("br",{})]}),"We have designed a website in order to help people travel more convenient. When people enter their information, we will pick the optimal routes for them."]})})]})})})}function g(){return Object(a.jsx)("div",{children:Object(a.jsx)("section",{id:"aboutMe",children:Object(a.jsxs)("div",{class:"container services__container",children:[Object(a.jsxs)("div",{class:"services__left",children:[Object(a.jsx)("h1",{children:" Our "}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:" Solution  "}),Object(a.jsx)("br",{})]}),Object(a.jsx)("div",{class:"services__right",children:Object(a.jsx)("h2",{children:"By importing google map data to support our application, we made it simpler for users to enter their starting point and destination, and our algorithm is able to generate the optimal solution for our users. Our algorithm to sorts routes based on time, cost, and users' personal choice, especailly for those who are handicapped, we realize that several travelling options may not apply to them, so our algorithm is designed to be able to fullfill their needs. In our sorting algorithm, we build a linked list to store each separate route, and use an array to store all routes. When user enter their start position, goal location, and their travelling habits, our website will list all the routes based on the priority."})})]})})})}function y(){return Object(a.jsx)("div",{children:Object(a.jsx)("section",{id:"aboutMe",children:Object(a.jsxs)("div",{class:"container services__container",children:[Object(a.jsxs)("div",{class:"services__left",children:[Object(a.jsx)("h1",{children:" Future "}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:" problems "}),Object(a.jsx)("br",{})]}),Object(a.jsx)("div",{class:"services__right",children:Object(a.jsxs)("h2",{children:["The problems remained are:",Object(a.jsx)("br",{}),Object(a.jsxs)("b",{children:["1. For those who live far away and can't drive, we'll need more accommodations for them.",Object(a.jsx)("br",{})]}),Object(a.jsxs)("b",{children:[" 2. Waiting buses takes students too much time(unpunctuality, waiting on pedestrians...)",Object(a.jsx)("br",{})]}),Object(a.jsxs)("b",{children:[" 3. There are only a few options for people to travel on campus(especially for medium to short distance)",Object(a.jsx)("br",{})]})]})})]})})})}function w(){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(o,{}),Object(a.jsx)(m,{}),Object(a.jsx)(p,{}),Object(a.jsx)(_,{}),Object(a.jsx)(g,{}),Object(a.jsx)(y,{}),Object(a.jsx)(f,{})]})}var S=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(l.c,{children:Object(a.jsx)(l.a,{path:"/",element:Object(a.jsx)(w,{})})})})},k=s(39);n.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(k.a,{children:Object(a.jsx)(S,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.e50d2adf.chunk.js.map