(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1TsT":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("V+eJ"),n("2Spj"),n("8+KV"),n("HAE/");var o=!("undefined"==typeof window||!window.document||!window.document.createElement);var r=void 0;function a(){return void 0===r&&(r=function(){if(!o)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(r){}return e}()),r}function i(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function l(e){this.target=e,this.events={}}l.prototype.getEventHandlers=function(e,t){var n,o=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[o]||(this.events[o]={handlers:[],handleEvent:void 0},this.events[o].nextHandlers=this.events[o].handlers),this.events[o]},l.prototype.handleEvent=function(e,t,n){var o=this.getEventHandlers(e,t);o.handlers=o.nextHandlers,o.handlers.forEach((function(e){e&&e(n)}))},l.prototype.add=function(e,t,n){var o=this,r=this.getEventHandlers(e,n);i(r),0===r.nextHandlers.length&&(r.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,r.handleEvent,n)),r.nextHandlers.push(t);var a=!0;return function(){if(a){a=!1,i(r);var l=r.nextHandlers.indexOf(t);r.nextHandlers.splice(l,1),0===r.nextHandlers.length&&(o.target&&o.target.removeEventListener(e,r.handleEvent,n),r.handleEvent=void 0)}}};function s(e,t,n,o){e.__consolidated_events_handlers__||(e.__consolidated_events_handlers__=new l(e));var r=function(e){if(e)return a()?e:!!e.capture}(o);return e.__consolidated_events_handlers__.add(t,n,r)}},"40cp":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+"},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"9dAG":function(e,t,n){e.exports=n.p+"static/website-icon-80fbfdbdfa5cb7c905ad2ff9a54a7846.png"},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Fxm3:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+o?(clearTimeout(n),n=setTimeout((function(){t=r,e()}),o)):(t=r,e())}};t.default=o},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),a=n("Bnag");e.exports=function(e){return o(e)||r(e)||a()}},RXBc:function(e,t,n){"use strict";n.r(t);var o=n("Wbzz"),r=n("q1tI"),a=n.n(r),i=n("TJpk"),l=n.n(i),s=n("uuth"),c=n("9dAG"),u=n.n(c),f=(n("40cp"),function(e){return a.a.createElement("header",{id:"header",className:"alt"},a.a.createElement("h1",null,"build for Cause"),a.a.createElement("p",null,"helping nonprofits to inspire more via digital mediums",a.a.createElement("br",null),"by donating skills & hours."))}),p=n("Bl7J"),d=n("YIkO"),m=n.n(d),y=n("dwco"),h=n.n(y);var v=function(e){return e.children},w=function(e){var t,n;function o(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.componentDidMount=function(){h.a.polyfill()},r.handleClick=function(e){e.preventDefault();var t=0,n=!0,o=this.props,r=o.type,a=o.element,i=o.offset,l=o.timeout;if(r&&a)switch(r){case"class":n=!!(t=document.getElementsByClassName(a)[0]);break;case"id":n=!!(t=document.getElementById(a))}n?this.scrollTo(t,i,l):console.log("Element not found: "+a)},r.scrollTo=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),n):window.scroll({top:o+t,left:0,behavior:"smooth"})},r.render=function(){return a.a.createElement(v,null,"object"==typeof this.props.children?a.a.cloneElement(this.props.children,{onClick:this.handleClick}):a.a.createElement("span",{onClick:this.handleClick},this.props.children))},o}(a.a.Component),E=function(e){return a.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},a.a.createElement(m.a,{items:["intro","first","second","cta"],currentClassName:"is-active",offset:-300},a.a.createElement("li",null,a.a.createElement(w,{type:"id",element:"intro"},a.a.createElement("a",{href:"#"},"Introduction"))),a.a.createElement("li",null,a.a.createElement(w,{type:"id",element:"first"},a.a.createElement("a",{href:"#"},"Specialization"))),a.a.createElement("li",null,a.a.createElement(w,{type:"id",element:"second"},a.a.createElement("a",{href:"#"},"Impact"))),a.a.createElement("li",null,a.a.createElement(w,{type:"id",element:"cta"},a.a.createElement("a",{href:"#"},"Get Started")))))};var b=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this)._handleWaypointEnter=function(){n.setState((function(){return{stickyNav:!1}}))},n._handleWaypointLeave=function(){n.setState((function(){return{stickyNav:!0}}))},n.state={stickyNav:!1},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(p.a,null,a.a.createElement(l.a,{title:"buildforCause - helping nonprofits"}),a.a.createElement(f,null),a.a.createElement(s.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),a.a.createElement(E,{sticky:this.state.stickyNav}),a.a.createElement("div",{id:"main"},a.a.createElement("section",{id:"intro",className:"main"},a.a.createElement("div",{className:"spotlight"},a.a.createElement("div",{className:"content"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"One Cause at a Time")),a.a.createElement("p",null,'"build for Cause" is committed to help nonprofits by helping to inspire their audience/stakeholders via portraying the efforts in digital mediums and managing the data efficiently.'),a.a.createElement("ul",{className:"actions"},a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/generic",className:"button"},"Learn More")))),a.a.createElement("span",{className:"image"},a.a.createElement("img",{src:u.a,alt:""})))),a.a.createElement("section",{id:"first",className:"main special"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"We specialize in...")),a.a.createElement("ul",{className:"features"},a.a.createElement("li",null,a.a.createElement("span",{className:"icon major style1 fa-code"}),a.a.createElement("h3",null,"Website & Portals"),a.a.createElement("p",null,"Website to showcase the good deeds and Content management with required features - Portal, User System, eCommerce etc")),a.a.createElement("li",null,a.a.createElement("span",{className:"icon major style3 fas fa-gears"}),a.a.createElement("h3",null,"Campaign Automatoin"),a.a.createElement("p",null,"Setting up a smooth campaign automation (Newsletter, Social Media, Goal based etc.) system to easy to use tools.")),a.a.createElement("li",null,a.a.createElement("span",{className:"icon major style5 fas fa-money"}),a.a.createElement("h3",null,"Fundraising"),a.a.createElement("p",null,"A painless fundraising system with affordable tools with the features to integrate to all you existing mode of campaigns."))),a.a.createElement("footer",{className:"major"},a.a.createElement("ul",{className:"actions"},a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/generic",className:"button"},"Many More..."))))),a.a.createElement("section",{id:"second",className:"main special"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"Our Impact"),a.a.createElement("p",null,"We are trying to make good impact by supporting the nonprofit organizations",a.a.createElement("br",null),"who all are already or due for inspiring the world for the better.",a.a.createElement("br",null),"Since 2019, we’ve donated over 600 hours of skills.")),a.a.createElement("ul",{className:"statistics"},a.a.createElement("li",{className:"style1"},a.a.createElement("span",{className:"icon fa-code-fork"}),a.a.createElement("strong",null,"4")," Projects"),a.a.createElement("li",{className:"style2"},a.a.createElement("span",{className:"icon fa-users"}),a.a.createElement("strong",null,"3")," Volunteers"),a.a.createElement("li",{className:"style3"},a.a.createElement("span",{className:"icon fa-signal"}),a.a.createElement("strong",null,"600")," hours"),a.a.createElement("li",{className:"style4"},a.a.createElement("span",{className:"icon fa-laptop"}),a.a.createElement("strong",null,"4")," Servers"),a.a.createElement("li",{className:"style5"},a.a.createElement("span",{className:"icon fa-diamond"}),a.a.createElement("strong",null,"$1000+")," Funds Raised")),a.a.createElement("p",{className:"content"}),a.a.createElement("footer",{className:"major"},a.a.createElement("ul",{className:"actions"},a.a.createElement("li",null,"Mail us at ",a.a.createElement("a",{href:"mailto:hi@buildforcause.com"},"hi@buildforcause.com")," to know more.")))),a.a.createElement("section",{id:"cta",className:"main special"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"Say a hello!"),a.a.createElement("p",null,"Please contact buildforCause by sending an email to ",a.a.createElement("a",{href:"mailto:hi@buildforcause.com"},"hi@buildforcause.com")," explaining your needs.",a.a.createElement("br",null),"We'll make sure you're getting an reply as well as the help your organization requires. Best!")),a.a.createElement("footer",{className:"major"},a.a.createElement("ul",{className:"actions"},a.a.createElement("li",null,a.a.createElement("a",{href:"https://wa.me/14049414116",className:"button special"},a.a.createElement("span",{className:"icon fas fa-whatsapp"})," WhatsApp!")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://m.me/buildforcause",className:"button"},a.a.createElement("span",{className:"icon style5 fas fa-facebook"})," Messenger!")))))))},r}(a.a.Component);t.default=b},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},TSYQ:function(e,t,n){var o;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===a)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},YIkO:function(e,t,n){"use strict";n("V+eJ"),n("dZ+Y"),n("bWfx"),n("2Spj"),n("LK8F"),n("HAE/");var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("pVnL")),a=o(n("lSNA")),i=o(n("RIqP")),l=o(n("lwsE")),s=o(n("a1gu")),c=o(n("Nsbk")),u=o(n("PJYZ")),f=o(n("W8MJ")),p=o(n("7W2i")),d=o(n("17x9")),m=o(n("q1tI")),y=o(n("TSYQ")),h=o(n("Fxm3"));var v=function(e){function t(e){var n;return(0,l.default)(this,t),(n=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},n._handleSpy=n._handleSpy.bind((0,u.default)(n)),n}return(0,p.default)(t,e),(0,f.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.element]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var n=[],o=0,r=e.length;o<r;o++)n[o]=t;return n}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],n=[],o=[],r=e||this.state.targetItems,a=!1,l=0,s=r.length;l<s;l++){var c=r[l],u=!a&&this._isInView(c);u?(a=!0,t.push(c)):n.push(c);var f=l===s-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&f&&p&&(n.pop(),n.push.apply(n,(0,i.default)(t)),t=[c],o=this._fillArray(o,!1),u=!0),o.push(u)}return{inView:t,outView:n,viewStatusList:o,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(o)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,n=this.props,o=n.rootEl,r=n.offset;o&&(t=document.querySelector(o).getBoundingClientRect());var a=e.getBoundingClientRect(),i=o?t.height:window.innerHeight,l=this._getScrollDimension().scrollTop,s=l+i,c=o?a.top+l-t.top+r:a.top+l+r,u=c+e.offsetHeight;return c<s&&u>l}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),n=t.scrollTop,o=t.scrollHeight;return n+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=o}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,n=this._getElemsViewState(e),o=this.state.inViewState;this.setState({inViewState:n.viewStatusList,isScrolledPast:n.scrolledPast},(function(){t._update(o)}))}},{key:"_update",value:function(e){var t,n;(t=this.state.inViewState,n=e,t.length===n.length&&t.every((function(e,t){return e===n[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,h.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,n=this.props,o=n.children,i=n.className,l=n.scrolledPastClassName,s=n.style,c=0,u=m.default.Children.map(o,(function(t,n){var o;if(!t)return null;var i=t.type,s=l&&e.state.isScrolledPast[n],u=(0,y.default)((o={},(0,a.default)(o,"".concat(t.props.className),t.props.className),(0,a.default)(o,"".concat(e.props.currentClassName),e.state.inViewState[n]),(0,a.default)(o,"".concat(e.props.scrolledPastClassName),s),o));return m.default.createElement(i,(0,r.default)({},t.props,{className:u,key:c++}),t.props.children)})),f=(0,y.default)((0,a.default)({},"".concat(i),i));return m.default.createElement(t,{className:f,style:s},u)}}]),t}(m.default.Component);t.default=v},a1gu:function(e,t,n){var o=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},cDf5:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},dwco:function(e,t,n){n("Oyvg"),n("eM6i"),n("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var n,o=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||l,scrollIntoView:o.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?m.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;m.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var n=p(this),o=n.getBoundingClientRect(),a=this.getBoundingClientRect();n!==t.body?(m.call(this,n,n.scrollLeft+a.left-o.left,n.scrollTop+a.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function u(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function f(e){var t=c(e,"Y")&&u(e,"Y"),n=c(e,"X")&&u(e,"X");return t||n}function p(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function d(t){var n,o,r,i,l=(a()-t.startTime)/468;i=l=l>1?1:l,n=.5*(1-Math.cos(Math.PI*i)),o=t.startX+(t.x-t.startX)*n,r=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,o,r),o===t.x&&r===t.y||e.requestAnimationFrame(d.bind(e,t))}function m(n,o,i){var s,c,u,f,p=a();n===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=r.scroll):(s=n,c=n.scrollLeft,u=n.scrollTop,f=l),d({scrollable:s,method:f,startTime:p,startX:c,startY:u,x:o,y:i})}}}}()},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},qT12:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.suspense_list"):60120,h=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,w=o?Symbol.for("react.fundamental"):60117,E=o?Symbol.for("react.responder"):60118,b=o?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case p:case i:case s:case l:case m:return e;default:switch(e=e&&e.$$typeof){case u:case d:case v:case h:case c:return e;default:return t}}case a:return t}}}function M(e){return g(e)===p}t.typeOf=g,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=r,t.ForwardRef=d,t.Fragment=i,t.Lazy=v,t.Memo=h,t.Portal=a,t.Profiler=s,t.StrictMode=l,t.Suspense=m,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===l||e===m||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===d||e.$$typeof===w||e.$$typeof===E||e.$$typeof===b)},t.isAsyncMode=function(e){return M(e)||g(e)===f},t.isConcurrentMode=M,t.isContextConsumer=function(e){return g(e)===u},t.isContextProvider=function(e){return g(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return g(e)===d},t.isFragment=function(e){return g(e)===i},t.isLazy=function(e){return g(e)===v},t.isMemo=function(e){return g(e)===h},t.isPortal=function(e){return g(e)===a},t.isProfiler=function(e){return g(e)===s},t.isStrictMode=function(e){return g(e)===l},t.isSuspense=function(e){return g(e)===m}},uuth:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return v}));n("2Spj"),n("V+eJ"),n("/SS/"),n("hHhE"),n("HAE/");var o=n("1TsT"),r=(n("17x9"),n("q1tI")),a=n.n(r),i=n("TOwV");function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){var n,o=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"==typeof o)return o;var r=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof r?r*t:void 0}function p(e){return"string"==typeof e.type}var d;var m=[];function y(e){m.push(e),d||(d=setTimeout((function(){var e;for(d=null;e=m.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var n=m.indexOf(e);-1!==n&&(m.splice(n,1),!m.length&&d&&(clearTimeout(d),d=null))}}}var h={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},v=function(t){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=u(this,s(n).call(this,e))).refElement=function(e){t._ref=e},t}var r,d,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(n,t),r=n,(d=[{key:"componentDidMount",value:function(){var e=this;n.getWindow()&&(this.cancelOnNextTick=y((function(){e.cancelOnNextTick=null;var t=e.props,n=t.children;t.debug,function(e,t){if(e&&!p(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(n,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=Object(o.a)(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=Object(o.a)(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))}},{key:"componentDidUpdate",value:function(){var e=this;n.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=y((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))}},{key:"componentWillUnmount",value:function(){n.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var t=this.props,n=t.horizontal,o=t.scrollableAncestor;if(o)return function(t){return"window"===t?e.window:t}(o);for(var r=this._ref;r.parentNode;){if((r=r.parentNode)===document.body)return window;var a=window.getComputedStyle(r),i=(n?a.getPropertyValue("overflow-x"):a.getPropertyValue("overflow-y"))||a.getPropertyValue("overflow");if("auto"===i||"scroll"===i)return r}return window}},{key:"_handleScroll",value:function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop==0?"invisible":e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom?"inside":e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom?"inside":e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?"inside":e.viewportBottom<e.waypointTop?"below":e.waypointTop<e.viewportTop?"above":"invisible"}(t),o=this._previousPosition,r=this.props,a=(r.debug,r.onPositionChange),i=r.onEnter,l=r.onLeave,s=r.fireOnRapidScroll;if(this._previousPosition=n,o!==n){var c={currentPosition:n,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};a.call(this,c),"inside"===n?i.call(this,c):"inside"===o&&l.call(this,c),s&&("below"===o&&"above"===n||"above"===o&&"below"===n)&&(i.call(this,{currentPosition:"inside",previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),l.call(this,{currentPosition:n,previousPosition:"inside",event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}}},{key:"_getBounds",value:function(){var e,t,n=this.props,o=n.horizontal,r=(n.debug,this._ref.getBoundingClientRect()),a=r.left,i=r.top,l=r.right,s=r.bottom,c=o?a:i,u=o?l:s;this.scrollableAncestor===window?(e=o?window.innerWidth:window.innerHeight,t=0):(e=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var p=this.props,d=p.bottomOffset;return{waypointTop:c,waypointBottom:u,viewportTop:t+f(p.topOffset,e),viewportBottom:t+e-f(d,e)}}},{key:"render",value:function(){var e=this,t=this.props.children;return t?p(t)||Object(i.isForwardRef)(t)?a.a.cloneElement(t,{ref:function(n){e.refElement(n),t.ref&&("function"==typeof t.ref?t.ref(n):t.ref.current=n)}}):a.a.cloneElement(t,{innerRef:this.refElement}):a.a.createElement("span",{ref:this.refElement,style:{fontSize:0}})}}])&&l(r.prototype,d),m&&l(r,m),n}(a.a.PureComponent);v.above="above",v.below="below",v.inside="inside",v.invisible="invisible",v.getWindow=function(){if("undefined"!=typeof window)return window},v.defaultProps=h,v.displayName="Waypoint"}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-1ff55aa1889ae73f2f9d.js.map