(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0f83":function(t,e,s){t.exports=s.p+"img/regards.2c49ba42.png"},"1caa":function(t,e,s){},"1d85":function(t,e,s){},"1f07":function(t,e,s){"use strict";s("b739")},"4eae":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e792"),s("0cdd");var n=s("2b0e"),a=s("5f5b");n["default"].use(a["a"]);var o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Nav"),e("b-container",{staticClass:"h-100",attrs:{fluid:""}},[e("transition",{attrs:{name:"router-anim","enter-active-class":"animated fadeIn","leave-active-class":"animated-out fadeOut"}},[e("router-view")],1)],1)],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-container"},[e("b-row",{staticClass:"d-flex align-content-middle",attrs:{"align-h":"center"}},[e("b-col",{staticClass:"d-flex justify-content-center"},[e("span",{staticClass:"nav-button"},[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)]),e("b-col",{staticClass:"d-flex justify-content-center"},[e("span",{staticClass:"nav-button"},[e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)]),e("b-col",{staticClass:"d-flex justify-content-center"},[e("span",{staticClass:"nav-button"},[e("router-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1)]),e("b-col",{staticClass:"d-flex justify-content-center"},[e("span",{staticClass:"nav-button"},[e("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])],1)],1)},c=[],l={name:"Nav",props:{},data:()=>({}),mounted(){},methods:{}},u=l,d=(s("aaf4"),s("2877")),f=Object(d["a"])(u,r,c,!1,null,"94b2cd88",null),p=f.exports,m={name:"App",components:{Nav:p}},b=m,g=(s("8a42"),Object(d["a"])(b,o,i,!1,null,null,null)),h=g.exports,v=s("8c4f"),_=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"d-flex align-self-center h-100",attrs:{fluid:"sm","align-v":"center"}},[e("div",{staticClass:"about-container"},[e("b-row",{staticClass:"justify-content-left ml-0 mb-3"},[e("h1",{staticClass:"display-4"},[t._v("About")])]),e("b-row",{staticClass:"justify-content-left align-items-center"},[e("b-col",{staticClass:"d-flex mb-4",attrs:{md:"4"}},[e("img",{staticClass:"headshot",attrs:{src:s("6437")}})]),e("b-col",{staticClass:"d-flex align-content-middle",attrs:{cols:"12",md:"8"}},[e("p",{staticClass:"text-left align-self-middle summary"},[t._v(" Full-stack engineer with almost 2 years of experience at a financial tech startup. Strong proclivity towards frontend applications and user experience. Highly motivated self-learner who is resolute in seeing tasks to completion. I take delight in empowering users and collaborating with teams that enable their users to do “more”. ")])])],1),e("b-row",{},[e("b-col",{staticClass:"d-flex flex-column justify-content-start",attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"my-3"},[e("a",{staticClass:"ml-2",attrs:{href:"/public/docs/HubertShon-Resume2022.pdf",download:""}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"fa-solid fa-file-download"}}),e("span",[t._v("Download Resume")])],1)]),e("div",{staticClass:"my-3"},[e("router-link",{staticClass:"ml-2",attrs:{to:"/contact"}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"fa-solid fa-envelope"}}),e("span",[t._v("Get In Touch")])],1)],1)]),e("b-col",{staticClass:"mt-2",attrs:{cols:"12",md:"8"}},[e("h2",[t._v("Skills")]),e("table",{staticClass:"table-responsive",staticStyle:{width:"100%"}},[e("tbody",[e("tr",[e("td",[t._v("Angular")]),e("td",[t._v("Node.js")]),e("td",[t._v("Stencil.js")])]),e("tr",[e("td",[t._v("Python")]),e("td",[t._v("Typescript")]),e("td",[t._v("Git/Github")])]),e("tr",[e("td",[t._v("Django")]),e("td",[t._v("Javascript")]),e("td",[t._v("Sentry")])]),e("tr",[e("td",[t._v("MongoDB")]),e("td",[t._v("HTML/CSS")]),e("td",[t._v("Adobe Suite")])]),e("tr",[e("td",[t._v("PostgreSQL")]),e("td",[t._v("Ruby")])]),e("tr",[e("td",[t._v("Vue.js")]),e("td",[t._v("Rails")])])])])])],1),e("div",{staticClass:"experience mt-1"},[e("b-row",{staticClass:"mt-5"}),e("b-row",[e("b-col",{attrs:{cols:"3"}}),e("b-col")],1)],1)],1)])},y=[],w={name:"About",props:{},methods:{downloadResume(){const t="public/docs/HubertShon-Resume2022.pdf";window.location.href=t}}},C=w,j=(s("8b80"),Object(d["a"])(C,_,y,!1,null,"7567a545",null)),k=j.exports,x=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"d-flex align-self-center hi5",attrs:{fluid:"lg","align-v":"center"}},[e("div",{staticClass:"align-self-center"},[e("b-row",{staticClass:"justify-content-left"},[e("h1",{staticClass:"display-2"},[t._v("Hubert Shon")])]),e("b-row",{staticClass:"justify-content-center"},[e("h4",{staticClass:"text-left"},[t._v(" I am a full stack engineer in the New York City area. Nice to meet you! ")])])],1)])},P=[],S={name:"Main",props:{msg:String}},O=S,A=(s("6297"),Object(d["a"])(O,x,P,!1,null,"36b55fe3",null)),U=A.exports,M=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"d-flex h-100",attrs:{fluid:"md","align-v":"center"}},[e("div",{staticClass:"align-self-center w-100"},[e("b-row",{staticClass:"justify-content-left header ml-0"},[e("h1",{staticClass:"display-4"},[t._v("Contact")])]),e("b-row",[e("b-col",{staticClass:"ml-0",attrs:{cols:"3"}},[e("p",{staticClass:"row-heading"},[t._v("Location")])]),e("b-col",{staticClass:"icon",attrs:{cols:"1"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-location-dot"}})],1),e("b-col",{attrs:{cols:"8"}},[t._v("New York City Area")])],1),e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("p",{staticClass:"row-heading"},[t._v("Email")])]),e("b-col",{staticClass:"icon",attrs:{cols:"1"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-envelope"}})],1),e("b-col",{attrs:{cols:"8"}},[e("a",{attrs:{href:"mailto:hubert.shon@gmail.com"}},[t._v("hubert.shon@gmail.com")])])],1),e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("p",{staticClass:"row-heading"},[t._v("Github")])]),e("b-col",{staticClass:"icon",attrs:{cols:"1"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-github-square"}})],1),e("b-col",{attrs:{cols:"8"}},[e("a",{attrs:{href:"http://github.com/hubertshon"}},[t._v("github.com/hubertshon")])])],1),e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("p",{staticClass:"row-heading"},[t._v("LinkedIn")])]),e("b-col",{staticClass:"icon",attrs:{cols:"1"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-linkedin"}})],1),e("b-col",{attrs:{cols:"8"}},[e("a",{attrs:{href:"http://linkedin.com/in/hubert-shon"}},[t._v("linkedin.com/in/hubert-shon")])])],1)],1)])},R=[],L={name:"Contact",props:{}},T=L,I=(s("a67e"),Object(d["a"])(T,M,R,!1,null,"3c019619",null)),D=I.exports,N=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"d-flex justify-content-center",attrs:{"align-v":"center"}},[e("div",{staticClass:"align-self-center justify-content-center h-100"},[e("b-row",[e("h1",{staticClass:"display-4 mb-4"},[t._v("Projects")])]),e("b-row",{staticClass:"mt-5 mb-2"},[e("h4",[t._v("Latest")])]),e("b-row",{staticClass:"latest-projects justify-content-left"},t._l(t.projects,(function(t,s){return e("Project",{key:s,attrs:{title:t.name,imageUrl:t.imageUrl,link:t.link,technologies:t.technologies,description:t.description}})})),1),e("b-row",{staticClass:"mt-5 mb-2"},[e("h4",[t._v("Early Projects")])]),e("b-row",{staticClass:"early-projects justify-content-left"},t._l(t.earlyProjects,(function(t,s){return e("Project",{key:s,attrs:{title:t.name,imageUrl:t.imageUrl,link:t.link,technologies:t.technologies,description:t.description}})})),1)],1)])},B=[],E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-container d-flex justify-content-start flex-column",on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1},click:t.goToLink}},[e("div",{staticClass:"align-self-start justify-items-start thumbnail",class:{hoverimg:t.hover}},[e("img",{attrs:{src:t.getImgUrl(t.imageUrl)}})]),e("div",{staticClass:"details"},[e("h2",[t._v(t._s(t.title))]),e("div",{staticClass:"description"},[t.hover?e("div",[e("span",[t._v("Made with:")]),e("ul",t._l(t.technologies,(function(s,n){return e("li",{key:n},[t._v(t._s(s)+" ")])})),0)]):t._e(),t.hover?t._e():e("span",[t._v(t._s(t.description))])])])])},H=[],J={name:"Project",props:{title:String,imageUrl:String,link:String,technologies:[],description:String},data(){return{hover:!1}},methods:{goToLink(){window.open(this.link)},getImgUrl(t){return s("9851")("./"+t)}}},G=J,F=(s("1f07"),Object(d["a"])(G,E,H,!1,null,"777ae2fe",null)),Q=F.exports,V={latestProjects:[{name:"Address Book",imageUrl:"address_book.png",link:"https://iridescent-marigold-e6ec59.netlify.app",technologies:["Angular"],description:"A mini mock address book app with a focus on mobile responsiveness"},{name:"Report Builder",imageUrl:"dashboard_builder.png",link:"https://youtu.be/xEU-Jp8gaiQ",technologies:["Angular, RxJs, SyncFusion, Django, MongoDB"],description:"Demo video of the report builder application built at my last company. This was an internal use tool to build client-facing dashboards."},{name:"Bar Menu",imageUrl:"bar_menu.png",link:"https://angry-ritchie-9530d3.netlify.app/",technologies:["Vue"],description:"A bar menu to help guests select their drink of choice. Yes, I know how to make these."},{name:"MeesterKeem",imageUrl:"twitch.png",link:"https://twitch.tv/meesterkeem",technologies:["Adobe Suite","Figma","Javascript"],description:"Designs for a friend's twitch channel"}],earlyProjects:[{name:"Grade My Professor",imageUrl:"professor.png",technologies:["Vue","Express.js","PostgreSQL"],description:"A mock educator grading site."},{name:"Regards",imageUrl:"regards.png",technologies:["React"],description:"A fun first venture in React. Allows users to retrieve images and begin making custom greeting cards. In this group project, I mainly contributed to the app's design."},{name:"Regulae",imageUrl:"regulae.png",link:"https://twitch.tv/meesterkeem",technologies:["Vue","Ruby on Rails","PostgreSQL"],description:"A habit tracker that groups categories of habits. This was the capstone project from Actualize Bootcamp"}]},Y={name:"Life",components:{Project:Q},data:()=>({projects:[],earlyProjects:[]}),created(){this.projects=V.latestProjects,this.earlyProjects=V.earlyProjects}},q=Y,z=(s("75e1"),Object(d["a"])(q,N,B,!1,null,"3e83be8d",null)),K=z.exports;n["default"].use(v["a"]);const $=[{path:"/",name:"Main",component:U},{path:"/about",name:"About",component:k},{path:"/contact",name:"Contact",component:D},{path:"/projects",name:"Projects",component:K}],W=new v["a"]({mode:"history",routes:$});var X=W,Z=s("ecee"),tt=s("ad3d"),et=s("f2d1"),st=s("c074"),nt=s("b702");n["default"].config.productionTip=!1,Z["c"].add(et["a"],st["g"],st["e"],et["b"],st["e"],nt["b"],st["f"],nt["a"],st["a"],st["b"],st["c"],st["d"]),n["default"].component("font-awesome-icon",tt["a"]),new n["default"]({router:X,render:t=>t(h)}).$mount("#app")},"585c":function(t,e,s){t.exports=s.p+"img/address_book.6b9fa92f.png"},"597e":function(t,e,s){},6297:function(t,e,s){"use strict";s("1d85")},6425:function(t,e,s){},6437:function(t,e,s){t.exports=s.p+"img/hs_headshot.3afa4e09.jpg"},"75e1":function(t,e,s){"use strict";s("4eae")},"871a":function(t,e,s){t.exports=s.p+"img/professor.705dda68.png"},"8a42":function(t,e,s){"use strict";s("cb85")},"8b80":function(t,e,s){"use strict";s("6425")},9619:function(t,e,s){t.exports=s.p+"img/twitch.8a88a3f6.png"},9851:function(t,e,s){var n={"./address_book.png":"585c","./bar_menu.png":"f03f","./dashboard_builder.png":"ca6c","./professor.png":"871a","./regards.png":"0f83","./regulae.png":"f742","./twitch.png":"9619"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="9851"},a67e:function(t,e,s){"use strict";s("1caa")},aaf4:function(t,e,s){"use strict";s("597e")},b739:function(t,e,s){},ca6c:function(t,e,s){t.exports=s.p+"img/dashboard_builder.c1e2c0bb.png"},cb85:function(t,e,s){},f03f:function(t,e,s){t.exports=s.p+"img/bar_menu.ec22a675.png"},f742:function(t,e,s){t.exports=s.p+"img/regulae.a1d04eed.png"}});
//# sourceMappingURL=app.d7f54010.js.map