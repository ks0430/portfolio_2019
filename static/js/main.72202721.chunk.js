(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(22),c=a.n(r),o=a(116),l=a(119),u=a(120),s=a(2),m=a(3),p=a(5),d=a(4),f=a(6),b=(a(43),a(46),function(e){var t="button";switch(e){case"border":t+=" button--border";break;default:t+=" button--link"}return t}),h=function(e){var t=e.children,a=e.btnStyle,n=e.onClick,r=b(a);return console.log("test",t),i.a.createElement("button",{className:r,"data-text":t,onClick:n},t)},g=a(112),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).navs=[{path:"home",value:"Home"},{path:"portfolio",value:"Portfolio"},{path:"contact",value:"Contact",style:"border"}],a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:"headerNav ml-auto"},this.navs.map(function(e){return i.a.createElement("li",{className:"headerNav__item",key:e.path},i.a.createElement(g.a,{"data-text":e.value,to:e.path},i.a.createElement(h,{btnStyle:e.style},e.value)))})))}}]),t}(n.Component),E=(a(51),function(e){return i.a.createElement("h1",{className:"headerBrand"})}),k=(a(53),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"header d-flex align-items-center"},i.a.createElement(E,null),i.a.createElement(v,null))}}]),t}(n.Component)),y=a(118),O=a(11),j=(a(63),n.Component,a(65),function(e){var t=e.title,a=e.path;return i.a.createElement("div",{className:"main-title"},i.a.createElement("h1",{className:"main-title__title","data-text":t},t),i.a.createElement("p",{className:"main-title__path"},a))}),w=(a(67),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"home page"},i.a.createElement(j,{title:"I'm Evelyn Chu",path:"Front-end developer"}))}}]),t}(n.Component)),N=a(21),_=a(113),x=a(114),C=a(117),T=(a(70),function(e){var t=e.onClick,a=e.data,n=e.currentData;return console.log("test123",n),i.a.createElement(_.a,{className:"sub-nav mb-5"},a.map(function(e){return i.a.createElement(x.a,{key:e.id,className:"sub-nav__item"},i.a.createElement(C.a,{className:"sub-nav__link"+(n.indexOf(e.id)>=0?" sub-nav__link--active":""),onClick:function(){return t(e)},href:"#","data-text":e.name},e.name))}))}),D=(a(72),function(e){var t=e.children;return i.a.createElement("h2",{className:"sub-title mb-5"},t)}),S=(a(74),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isOn,a=e.onToggle,n=e.data,r=n.title,c=n.imgUrl,o=n.type,l=n.text,u=n.link;return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.CSSTransition,{in:t,timeout:150,classNames:"popup"},function(e){return t?i.a.createElement("div",{className:"popup"},i.a.createElement("div",{className:"popup__bg",onClick:a}),i.a.createElement("div",{className:"popup__body"},i.a.createElement("button",{className:"popup__close",onClick:a}),i.a.createElement("img",{className:"popup__img mb-3",src:c,alt:""}),i.a.createElement("div",{className:"popup__content"},i.a.createElement("p",{className:"popup__type"},o),i.a.createElement("h3",{className:"popup__title mb-4"},r),i.a.createElement("p",{className:"popup__text mb-5"},l),i.a.createElement("a",{href:u,target:"_blank"},i.a.createElement(h,{btnStyle:"border"},"View Project"))))):null}))}}]),t}(n.Component)),M=(a(76),function(e){var t=e.imgUrl,a=e.title,n=e.type,r=e.onClick;return i.a.createElement("div",{className:"flex-card"},i.a.createElement("figure",{className:"flex-card__figure mb-4",onClick:r},i.a.createElement("img",{className:"flex-card__img",src:t,alt:""}),i.a.createElement("figcaption",{className:"flex-card__figcaption"})),i.a.createElement("div",{className:"flex-card__body"},i.a.createElement("h3",{className:"flex-card__type mb-3"},n),i.a.createElement("p",{className:"flex-card__title"},a)))}),W=a(19),H=(a(78),function(){return i.a.createElement("div",{className:"work-grid__nothing"},"Nothing Found!")}),q=function(e){var t=e.filteredWorksData,a=e.currentWorkToggleHandler,n=e.popupToggleHandler;return i.a.createElement("div",null,i.a.createElement(W.b,{className:"work-grid",flipKey:t.length>0?t.reduce(function(e,t){return e+"-"+t.id}):""},t.length>0?t.map(function(e){return i.a.createElement(W.a,{key:e.id,flipId:e.id},i.a.createElement("div",{key:e.id,className:"work-grid__item"},i.a.createElement(M,{imgUrl:e.imgUrl,type:e.type,title:e.title,onClick:function(){a(e),n()}})))}):i.a.createElement(H,null)))},A=a(10),U=a.n(A),B=a(36),I=a.n(B),L=[{id:U()(),title:"Music Store",type:"web app",tags:[{id:"65611c7c-3454-11e9-b210-d663bd873d93",name:"react"}],imgUrl:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",text:"A music store description. Sed nec ex malesuada, pulvinar mi at, faucibus arcu. Etiam nec ipsum sodales, aliquam arcu at, venenatis felis. Vivamus condimentum turpis enim, sit amet mollis est semper vel. Mauris sem dui.",link:"https://github.com/ks0430/react-music-store",githubLink:""},{id:U()(),title:"Weather App",type:"web app",tags:[{id:"65611c7c-3454-11e9-b210-d663bd873d93",name:"react"},{id:"65611f74-3454-11e9-b210-d663bd873d93",name:"nodejs"}],imgUrl:"https://images.unsplash.com/photo-1532300481631-0bc14f3b7699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",link:"https://www.moecoding.com/weather-app-react/",githubLink:""},{id:U()(),title:"VR SIMULATION TEACHING SOFTWARE",type:"unity",tags:[{id:"6561264a-3454-11e9-b210-d663bd873d93",name:"unity3d"}],imgUrl:I.a,text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",link:"https://www.moecoding.com/weather-app-react/",githubLink:""},{id:U()(),title:"Portfolio Theme",type:"web app",tags:[{id:"c123f872-3828-11e9-b210-d663bd873d93",name:"javascript"}],imgUrl:"https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80",text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",link:"https://www.moecoding.com/simple-js-responsive-blog",githubLink:""},{id:U()(),title:"Tour Booking Theme",type:"web app",tags:[{id:"65611c7c-3454-11e9-b210-d663bd873d93",name:"react"}],imgUrl:"https://images.unsplash.com/photo-1524527459261-54b703ac0fa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",link:"https://www.moecoding.com/css-theme-naturo",githubLink:""},{id:U()(),title:"Hotel Theme",type:"web app",tags:[{id:"65611c7c-3454-11e9-b210-d663bd873d93",name:"react"}],imgUrl:"https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",link:"https://www.moecoding.com/hotel-theme-trillo/",githubLink:""},{id:U()(),title:"Memmmm",type:"web game",tags:[{id:"c123f872-3828-11e9-b210-d663bd873d93",name:"javascript"}],imgUrl:"https://images.unsplash.com/photo-1522617804560-8454764f1815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80",text:"A weather app description. Ut leo quam, placerat porta faucibus eu, pulvinar non nisl. Maecenas dictum, risus at cursus elementum, mi lorem posuere tellus, ac viverra felis ligula quis libero. Morbi sollicitudin ac felis vitae tincidunt. ",link:"https://www.moecoding.com/memmmm/",githubLink:"https://github.com/ks0430/memmmm"}];var F=[{id:"c123f872-3828-11e9-b210-d663bd873d93",name:"javascript"},{id:"65611c7c-3454-11e9-b210-d663bd873d93",name:"react"},{id:"65611f74-3454-11e9-b210-d663bd873d93",name:"nodejs"},{id:"6561264a-3454-11e9-b210-d663bd873d93",name:"unity3d"}];var P=a(27),J=a.n(P),Q=(a(83),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={worksData:[],typesData:[],isPopupOn:!1,currentWork:"",currentTypeIDs:[]},a.onClick=function(e){var t=a.state.currentTypeIDs,n=e.id;if(""!==n){var i=t.indexOf(n)<0?[].concat(Object(N.a)(t),[n]):t.filter(function(e){return e!==n});a.setState({currentTypeIDs:i})}else a.setState({currentTypeIDs:[]})},a.popupToggleHandler=function(){a.setState(function(e){return{isPopupOn:!e.isPopupOn}})},a.currentWorkToggleHandler=function(e){a.state.currentWork;a.setState({currentWork:e})},a.getFilteredWorksData=function(){var e=a.state,t=e.worksData,n=e.currentTypeIDs;if(0===n.length)return t;var i=t.filter(function(e){var t=[].concat(Object(N.a)(n),Object(N.a)(J.a.map(e.tags,"id"))),a=t.length;return J.a.uniq(t).length<a});return J.a.orderBy(i,function(e){return e.tags.length},["desc"])},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=L;this.setState({worksData:e});var t=F,a=[{id:"",name:"All"}].concat(Object(N.a)(t));this.setState({typesData:a})}},{key:"render",value:function(){var e=this.getFilteredWorksData(),t=this.state,a=t.currentTypeIDs,n=t.typesData,r=t.isPopupOn,c=t.currentWork;return i.a.createElement("div",{className:"work"},i.a.createElement(D,null,"Recent Works"),i.a.createElement(T,{data:n,currentData:a,onClick:this.onClick}),i.a.createElement(q,{filteredWorksData:e,currentWorkToggleHandler:this.currentWorkToggleHandler,popupToggleHandler:this.popupToggleHandler}),i.a.createElement(S,{isOn:r,onToggle:this.popupToggleHandler,data:c}))}}]),t}(n.Component)),G=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"portfolio"},i.a.createElement(j,{title:"Portfolio",path:"Home / Portfolio"}),i.a.createElement(Q,null))}}]),t}(n.Component),z=(a(85),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("main",{className:"main-container"},i.a.createElement(O.TransitionGroup,null,i.a.createElement(O.CSSTransition,{classNames:"fade",timeout:300,key:this.props.location.pathname},i.a.createElement(l.a,null,i.a.createElement(u.a,{path:"/home",component:w}),i.a.createElement(u.a,{path:"/portfolio",component:G}),i.a.createElement(y.a,{from:"/",to:"/home"})))))}}]),t}(n.Component)),R=a(37),V=a.n(R),K=(a(88),[{iconName:"facebook",iconLink:"https://www.facebook.com/EvelynChu0430"},{iconName:"linkedin",iconLink:"https://www.linkedin.com/in/evelyn-chu/"},{iconName:"github",iconLink:"https://github.com/ks0430"},{iconName:"twitter",iconLink:"https://twitter.com/evelyn_0430"}]),X=function(){return i.a.createElement("ul",{className:"social-link d-flex"},K.map(function(e){return i.a.createElement("li",{className:"social-link__item",key:e.iconName},i.a.createElement("a",{href:e.iconLink,target:"_blank"},i.a.createElement("svg",{className:"social-link__icon"},i.a.createElement("use",{xlinkHref:"".concat(V.a,"#icon-").concat(e.iconName)}))))}))},$=(a(90),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{className:"footer d-flex align-items-center"},i.a.createElement("div",{className:"copyright mr-auto"},"\xa9 2019 Designed By Evelyn Chu."),i.a.createElement(X,null))}}]),t}(n.Component)),Y=(a(93),function(){return i.a.createElement("div",{className:"container-border"},i.a.createElement("div",{className:"container-border__line container-border--top"}),i.a.createElement("div",{className:"container-border__line container-border--bottom"}),i.a.createElement("div",{className:"container-border__line container-border--left"}),i.a.createElement("div",{className:"container-border__line container-border--right"}))}),Z=(a(95),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.location;return i.a.createElement("div",{className:"app"},i.a.createElement(k,null),i.a.createElement(z,{location:e}),i.a.createElement($,null),i.a.createElement(Y,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(97),a(99);var ee=a(14),te=a(23),ae=a.n(te),ne={transition:"background-color ".concat(3e3,"ms ease-in-out"),backgroundColor:"red"},ie={entering:{backgroundColor:"white"},entered:{backgroundColor:"blue"},exiting:{backgroundColor:"yellow"},exited:{backgroundColor:"purple"}},re=function(e){var t=e.id,a=e.in,n=e.onDelete;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ae.a,{in:a,timeout:3e3,mountOnEnter:!0},function(e){return i.a.createElement("div",{style:Object(ee.a)({},ne,ie[e])},e)}),i.a.createElement("button",{onClick:function(e){return n(t)}},"Delete"))},ce=(n.Component,a(102),n.Component,a(104),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={items:[{id:U()(),text:"Buy chiaki"},{id:U()(),text:"Buy midori"},{id:U()(),text:"Buy midochia"},{id:U()(),text:"Buy midochiaDoujinzhi"}]},a.deleteHandler=function(e){var t=a.state.items.filter(function(t){return t.id!==e});a.setState({items:t})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;console.log("render!");var t=this.state.items;return i.a.createElement("div",null,i.a.createElement(O.TransitionGroup,{className:"todo-list"},t.map(function(t){var a=t.id,n=t.text;return i.a.createElement(O.CSSTransition,{key:a,timeout:2e3,classNames:"group-item-anim",onExited:function(){return console.log(a,"exited")}},i.a.createElement("div",null,i.a.createElement("p",null,n),i.a.createElement("button",{onClick:function(){return e.deleteHandler(a)}},"Delete")))})))}}]),t}(n.Component));a(115),a(106);var oe={fill:{position:"absolute",left:0,right:0,top:0,bottom:0}};oe.content=Object(ee.a)({},oe.fill,{top:"40px",textAlign:"center"}),oe.nav={padding:0,margin:0,position:"absolute",top:0,height:"40px",width:"100%",display:"flex"},oe.navItem={textAlign:"center",flex:1,listStyleType:"none",padding:"10px"},oe.hsl=Object(ee.a)({},oe.fill,{color:"white",paddingTop:"20px",fontSize:"30px"}),oe.rgb=Object(ee.a)({},oe.fill,{color:"white",paddingTop:"20px",fontSize:"30px"});var le=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ce,null))}}]),t}(n.Component),ue=(a(108),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={data:[{id:"001",name:"one"},{id:"002",name:"two"},{id:"003",name:"one"},{id:"004",name:"one"}]},a.onClick=function(e){var t=a.state.data.filter(function(t){return t.id!==e});a.setState({data:t})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.data;return i.a.createElement(W.b,{flipKey:t.length>0?t.reduce(function(e,t){return e+"-"+t}):""},i.a.createElement("ul",{className:"react-flip"},t.map(function(t){return i.a.createElement(W.a,{key:t.id,flipId:t.id},i.a.createElement("li",{className:"react-flip__item"},i.a.createElement("button",{className:"react-flip__delete",onClick:function(){return e.onClick(t.id)}},"X"),i.a.createElement("p",null," Grid ",t.id)))})))}}]),t}(n.Component));c.a.render(i.a.createElement(o.a,null,i.a.createElement(l.a,null,i.a.createElement(u.a,{path:"/example",component:le}),i.a.createElement(u.a,{path:"/flip",component:ue}),i.a.createElement(u.a,{path:"/",component:Z}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,a){e.exports=a.p+"static/media/vrmainmed.04930ea3.png"},37:function(e,t,a){e.exports=a.p+"static/media/sprite.c30e4dd5.svg"},38:function(e,t,a){e.exports=a(110)},43:function(e,t,a){},46:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[38,2,1]]]);
//# sourceMappingURL=main.72202721.chunk.js.map