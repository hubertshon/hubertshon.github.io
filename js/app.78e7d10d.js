(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},o=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0aa1":function(t,e,s){"use strict";s("5d14")},"1d85":function(t,e,s){},4973:function(t,e,s){"use strict";s("6623")},"4b7f":function(t,e,s){},"514d":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e792"),s("0cdd");var n=s("2b0e"),a=s("5f5b");n["default"].use(a["a"]);var o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Nav"),e("div",{staticClass:"d-flex justify-content-between align-items-center",staticStyle:{height:"100%"}},[e("b-container",{staticClass:"container"},[e("transition",{attrs:{name:"router-anim","enter-active-class":"animated fadeIn","leave-active-class":"animated-out fadeOut"}},[e("router-view")],1)],1)],1)],1)},r=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-container"},[e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{staticClass:"d-flex justify-content-center align-content-middle"},[e("span",{staticClass:"nav-button"},[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)]),e("b-col",{staticClass:"d-flex justify-content-center align-content-middle"},[e("span",{staticClass:"nav-button"},[e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)]),e("b-col",{staticClass:"d-flex justify-content-center align-content-middle"},[e("span",{staticClass:"nav-button"},[e("router-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1)]),e("b-col",{staticClass:"d-flex justify-content-center align-content-middle"},[e("span",{staticClass:"nav-button"},[e("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])],1)],1)},c=[],l={name:"Nav",props:{},data:()=>({}),mounted(){},methods:{}},u=l,d=(s("8dfb"),s("2877")),f=Object(d["a"])(u,i,c,!1,null,"4a86ec7c",null),p=f.exports,m={name:"App",components:{Nav:p}},h=m,b=(s("4973"),Object(d["a"])(h,o,r,!1,null,null,null)),v=b.exports,g=s("8c4f"),w=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"d-flex align-self-center h-100",attrs:{fluid:"sm","align-v":"center"}},[e("div",[e("b-row",{staticClass:"justify-content-left ml-0 mb-3"},[e("h1",{staticClass:"display-4"},[t._v("About")])]),e("b-row",{staticClass:"justify-content-left align-items-center"},[e("b-col",{staticClass:"d-flex mb-4",attrs:{md:"4"}},[e("img",{staticClass:"headshot",attrs:{src:s("6437")}})]),e("b-col",{staticClass:"d-flex align-content-middle",attrs:{cols:"12",md:"8"}},[e("p",{staticClass:"text-left align-self-middle summary"},[t._v(" Full-stack engineer with almost 2 years of experience at a financial tech startup. Strong proclivity towards frontend applications and user experience. Highly motivated self-learner who is resolute in seeing tasks to completion. I take delight in empowering users and collaborating with teams that enable their users to do “more”. ")])])],1),e("b-row",{},[e("b-col",{staticClass:"d-flex flex-column justify-content-start",attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"my-3"},[e("a",{staticClass:"ml-2",attrs:{href:"/public/docs/HubertShon-Resume2022.pdf",download:""}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"fa-solid fa-file-download"}}),e("span",[t._v("Download Resume")])],1)]),e("div",{staticClass:"my-3"},[e("router-link",{staticClass:"ml-2",attrs:{to:"/contact"}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"fa-solid fa-envelope"}}),e("span",[t._v("Get In Touch")])],1)],1)]),e("b-col",{staticClass:"mt-2",attrs:{cols:"12",md:"8"}},[e("h2",[t._v("Skills")]),e("table",{staticClass:"table-responsive",staticStyle:{width:"100%"}},[e("tbody",[e("tr",[e("td",[t._v("Angular")]),e("td",[t._v("Node.js")]),e("td",[t._v("Stencil.js")])]),e("tr",[e("td",[t._v("Python")]),e("td",[t._v("Typescript")]),e("td",[t._v("Git/Github")])]),e("tr",[e("td",[t._v("Django")]),e("td",[t._v("Javascript")]),e("td",[t._v("Sentry")])]),e("tr",[e("td",[t._v("MongoDB")]),e("td",[t._v("HTML/CSS")]),e("td",[t._v("Adobe Suite")])]),e("tr",[e("td",[t._v("PostgreSQL")]),e("td",[t._v("Ruby")])]),e("tr",[e("td",[t._v("Vue.js")]),e("td",[t._v("Rails")])])])])])],1),e("div",{staticClass:"experience mt-1"},[e("b-row",{staticClass:"mt-5"}),e("b-row",[e("b-col",{attrs:{cols:"3"}}),e("b-col")],1)],1)],1)])},C=[],_={name:"About",props:{},methods:{downloadResume(){const t="public/docs/HubertShon-Resume2022.pdf";window.location.href=t}}},y=_,x=(s("88d5"),Object(d["a"])(y,w,C,!1,null,"ceb0200a",null)),j=x.exports,k=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"d-flex align-self-center hi5",attrs:{fluid:"lg","align-v":"center"}},[e("div",{staticClass:"align-self-center"},[e("b-row",{staticClass:"justify-content-left"},[e("h1",{staticClass:"display-2"},[t._v("Hubert Shon")])]),e("b-row",{staticClass:"justify-content-center"},[e("h4",{staticClass:"text-left"},[t._v(" I am a full stack engineer in the New York City area. Nice to meet you! ")])])],1)])},S=[],O={name:"Main",props:{msg:String}},N=O,I=(s("6297"),Object(d["a"])(N,k,S,!1,null,"36b55fe3",null)),P=I.exports,M=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"d-flex h-100",attrs:{fluid:"md","align-v":"center"}},[e("div",{staticClass:"align-self-center w-100"},[e("b-row",{staticClass:"justify-content-left header ml-0"},[e("h1",{staticClass:"display-4"},[t._v("Contact")])]),e("b-row",[e("b-col",{staticClass:"ml-0",attrs:{cols:"3"}},[e("p",{staticClass:"row-heading"},[t._v("Location")])]),e("b-col",{attrs:{cols:"0.5"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-location-dot"}})],1),e("b-col",{attrs:{cols:"8"}},[t._v("New York City Area")])],1),e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("p",{staticClass:"row-heading"},[t._v("Email")])]),e("b-col",{attrs:{cols:"0.5"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-envelope"}})],1),e("b-col",{attrs:{cols:"8"}},[e("a",{attrs:{href:"mailto:hubert.shon@gmail.com"}},[t._v("hubert.shon@gmail.com")])])],1),e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("p",{staticClass:"row-heading"},[t._v("Github")])]),e("b-col",{attrs:{cols:"0.5"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-github-square"}})],1),e("b-col",{attrs:{cols:"8"}},[e("a",{attrs:{href:"http://github.com/hubertshon"}},[t._v("github.com/hubertshon")])])],1),e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("p",{staticClass:"row-heading"},[t._v("LinkedIn")])]),e("b-col",{attrs:{cols:"0.5"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-linkedin"}})],1),e("b-col",{attrs:{cols:"8"}},[e("a",{attrs:{href:"http://linkedin.com/in/hubert-shon"}},[t._v("linkedin.com/in/hubert-shon")])])],1)],1)])},T=[],U={name:"Contact",props:{}},A=U,R=(s("77fc"),Object(d["a"])(A,M,T,!1,null,"3b4cad08",null)),L=R.exports,q=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:"md","align-v":"center"}},[e("div",{staticClass:"align-self-center h-100"},[e("b-row",[e("h1",{staticClass:"display-4 mb-4"},[t._v("Projects")])]),e("b-row",{staticClass:"mt-5 mb-2"},[e("h5",[t._v("Latest")])]),e("b-row",{staticClass:"justify-content-center"},[e("b-col",{staticClass:"d-flex justify-content-center m-3"},[e("InfoCard",{attrs:{text:"Casa Bar Menu",link:"https://angry-ritchie-9530d3.netlify.app/",imageUrl:"barmneu.png",description:"A menu of drinks I like to serve guests at home. Vue.js"}})],1),e("b-col",{staticClass:"d-flex justify-content-center m-3"},[e("InfoCard",{attrs:{text:"MeesterKeem Twitch",link:"https://twitch.tv/meesterkeem",imageUrl:"twitch.png",description:"Graphics and widgets for a Twitch channel."}})],1)],1),e("b-row",{staticClass:"mt-5 mb-2"},[e("h5",[t._v("Early Projects")])]),e("b-row",[e("b-col",{staticClass:"d-flex justify-content-center m-3"},[e("InfoCard",{attrs:{text:"Regulae",link:"https://www.youtube.com/watch?v=XUN3ksZ0bzU",imageUrl:"regulae.png",description:"Habit tracker that organizes habits into larger categories. Rails, Vue.js"}})],1),e("b-col",{staticClass:"d-flex justify-content-center m-3"},[e("InfoCard",{attrs:{text:"Grade My Professor",link:"https://peaceful-lowlands-22766.herokuapp.com/",imageUrl:"professor.png",description:"A mock educator rating site. Node/Express.js, Vue.js"}})],1)],1)],1)])},H=[],G={quotes:[{text:"Never tell me the odds!",author:"Han Solo",source:"The Empire Strikes Back"},{text:"All we have to decide is what to do with the time that is given us.",author:"Gandalf",source:"The Fellowship of the Ring"},{text:"Love is the strongest thing in the world.",author:"Rosie",source:"Jojo Rabbit"}]},E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-container d-flex justify-content-center",on:{click:t.goToLink,mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[t.hover?e("p",{staticClass:"text-description"},[t._v(t._s(t.description))]):t._e(),!1===t.hover?e("p",{staticClass:"centered"},[t._v(t._s(t.text))]):t._e(),e("div",{staticClass:"align-self-center thumbnail",class:{hoverimg:t.hover}},[t.imageUrl?e("img",{attrs:{src:t.getImgUrl(t.imageUrl)}}):t._e()])])},D=[],J={name:"InfoCard",props:{text:String,icon:String,category:String,link:String,imageUrl:String,description:String},data(){return{hover:!1}},methods:{goToLink(){window.open(this.link)},getImgUrl(t){return s("9851")("./"+t)}}},V=J,B=(s("0aa1"),Object(d["a"])(V,E,D,!1,null,"c6246e10",null)),F=B.exports,Q={name:"Life",components:{InfoCard:F},data:()=>({quoteNumber:0,selectQuote:G[(void 0).quoteNumber]}),created(){this.quoteNumber=Math.random()*G.quotes.length|0,this.selectQuote=G.quotes[this.quoteNumber]}},z=Q,Y=(s("c250"),Object(d["a"])(z,q,H,!1,null,"8e07c2fc",null)),K=Y.exports;n["default"].use(g["a"]);const X=[{path:"/",name:"Main",component:P},{path:"/about",name:"About",component:j},{path:"/contact",name:"Contact",component:L},{path:"/projects",name:"Projects",component:K}],Z=new g["a"]({mode:"history",routes:X});var $=Z,W=s("ecee"),tt=s("ad3d"),et=s("f2d1"),st=s("c074"),nt=s("b702");n["default"].config.productionTip=!1,W["c"].add(et["a"],st["g"],st["e"],et["b"],st["e"],nt["b"],st["f"],nt["a"],st["a"],st["b"],st["c"],st["d"]),n["default"].component("font-awesome-icon",tt["a"]),new n["default"]({router:$,render:t=>t(v)}).$mount("#app")},"5d14":function(t,e,s){},"5f78":function(t,e,s){t.exports=s.p+"img/barmneu.ec22a675.png"},6297:function(t,e,s){"use strict";s("1d85")},6437:function(t,e,s){t.exports=s.p+"img/hs_headshot.3afa4e09.jpg"},6623:function(t,e,s){},"77fc":function(t,e,s){"use strict";s("9e43")},"871a":function(t,e,s){t.exports=s.p+"img/professor.705dda68.png"},"88d5":function(t,e,s){"use strict";s("4b7f")},"8dfb":function(t,e,s){"use strict";s("514d")},9619:function(t,e,s){t.exports=s.p+"img/twitch.8a88a3f6.png"},9851:function(t,e,s){var n={"./barmneu.png":"5f78","./professor.png":"871a","./regulae.png":"f742","./twitch.png":"9619"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="9851"},"9e43":function(t,e,s){},c250:function(t,e,s){"use strict";s("d0ac")},d0ac:function(t,e,s){},f742:function(t,e,s){t.exports=s.p+"img/regulae.a1d04eed.png"}});
//# sourceMappingURL=app.78e7d10d.js.map