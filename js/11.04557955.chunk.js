(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{219:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},220:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",function(){return l})},221:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return a})},222:function(e,t,n){"use strict";var a=n(1);n(223);t.a=function(e){return a.createElement("div",{className:"mobile-preview",key:e.link},a.createElement("header",null,e.link),a.createElement("main",null,a.createElement("iframe",{src:e.link,frameBorder:"0",seamless:!0,width:375,height:667})))}},223:function(e,t,n){},225:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function r(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",function(){return r})},226:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",function(){return l})},242:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(219),l=n(220),r=n(225),s=n(221),o=n(226),c=n(1),u=n(71),p=n.n(u),i=n(222),m=function(e){function t(){var e,n;Object(a.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={previewUrl:"http://localhost:3333/#/nav-bar"},n.onCodeClick=function(e){n.setState({previewUrl:"http://localhost:3333/#"+e})},n}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.createElement("div",null,c.createElement("div",{className:"markdown-content"},c.createElement("h1",null,"NavBar \u5bfc\u822a\u680f"),c.createElement("h2",null,"\u57fa\u672c\u4f7f\u7528"),c.createElement("div",{className:p()("code-box",{active:this.state.previewUrl.endsWith("/nav-bar")}),onClick:this.onCodeClick.bind(null,"/nav-bar")},c.createElement("header",null,"\u57fa\u672c\u4f7f\u7528"),c.createElement("div",{className:"bd"},c.createElement("pre",{className:"language-tsx"},c.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> NavBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>123<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token plain-text">;\n\nexport default Demo;\n</span>'}})))),c.createElement("h3",null,"\u652f\u6301\u5c5e\u6027"),c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"\u5c5e\u6027"),c.createElement("th",null,"\u8bf4\u660e"),c.createElement("th",null,"\u7c7b\u578b"),c.createElement("th",null,"\u9ed8\u8ba4\u503c"))),c.createElement("tbody",null,c.createElement("tr",null,c.createElement("td",null,"title"),c.createElement("td",null,"\u6807\u9898"),c.createElement("td",null,c.createElement("code",null,"ReactNode")),c.createElement("td",null,"''")),c.createElement("tr",null,c.createElement("td",null,"leftBtn"),c.createElement("td",null,"\u662f\u5426\u663e\u793a\u5de6\u4fa7\u6309\u94ae"),c.createElement("td",null,c.createElement("code",null,"ReactNode")),c.createElement("td",null,"false")),c.createElement("tr",null,c.createElement("td",null,"rightBtn"),c.createElement("td",null,"\u662f\u5426\u663e\u793a\u53f3\u4fa7\u6309\u94ae"),c.createElement("td",null,c.createElement("code",null,"ReactNode")),c.createElement("td",null,"false")),c.createElement("tr",null,c.createElement("td",null,"leftClick"),c.createElement("td",null,"\u70b9\u51fb\u5de6\u4fa7\u6309\u94ae\u89e6\u53d1"),c.createElement("td",null,c.createElement("code",null,"MouseEventHandler<HTMLDivElement>")),c.createElement("td",null,"\u8fd4\u56de\u4e0a\u4e00\u9875")),c.createElement("tr",null,c.createElement("td",null,"rightClick"),c.createElement("td",null,"\u70b9\u51fb\u53f3\u4fa7\u6309\u94ae\u89e6\u53d1"),c.createElement("td",null,c.createElement("code",null,"MouseEventHandler<HTMLDivElement>")),c.createElement("td",null,"M \u7ad9\u9996\u9875"))))),c.createElement(i.a,{link:this.state.previewUrl}))}}]),t}(c.PureComponent)}}]);
//# sourceMappingURL=11.04557955.chunk.js.map