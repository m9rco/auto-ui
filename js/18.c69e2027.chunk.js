(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{219:function(n,a,s){"use strict";function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}s.d(a,"a",function(){return t})},220:function(n,a,s){"use strict";function t(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function p(n,a,s){return a&&t(n.prototype,a),s&&t(n,s),n}s.d(a,"a",function(){return p})},221:function(n,a,s){"use strict";function t(n){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}s.d(a,"a",function(){return t})},222:function(n,a,s){"use strict";var t=s(1);s(223);a.a=function(n){return t.createElement("div",{className:"mobile-preview",key:n.link},t.createElement("header",null,n.link),t.createElement("main",null,t.createElement("iframe",{src:n.link,frameBorder:"0",seamless:!0,width:375,height:667})))}},223:function(n,a,s){},225:function(n,a,s){"use strict";function t(n){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n){return(p="function"===typeof Symbol&&"symbol"===t(Symbol.iterator)?function(n){return t(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)})(n)}function o(n,a){return!a||"object"!==p(a)&&"function"!==typeof a?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):a}s.d(a,"a",function(){return o})},226:function(n,a,s){"use strict";function t(n,a){return(t=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function p(n,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&t(n,a)}s.d(a,"a",function(){return p})},236:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return r});var t=s(219),p=s(220),o=s(225),e=s(221),c=s(226),l=s(1),u=s(71),i=s.n(u),k=s(222),r=function(n){function a(){var n,s;Object(t.a)(this,a);for(var p=arguments.length,c=new Array(p),l=0;l<p;l++)c[l]=arguments[l];return(s=Object(o.a)(this,(n=Object(e.a)(a)).call.apply(n,[this].concat(c)))).state={previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#/toast"},s.onCodeClick=function(n){s.setState({previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#"+n})},s}return Object(c.a)(a,n),Object(p.a)(a,[{key:"render",value:function(){return l.createElement("div",null,l.createElement("div",{className:"markdown-content"},l.createElement("h1",null,"Toast \u8f7b\u63d0\u793a"),l.createElement("h2",null,"\u57fa\u672c\u4f7f\u7528"),l.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/toast")}),onClick:this.onCodeClick.bind(null,"/toast")},l.createElement("header",null,"\u57fa\u672c\u4f7f\u7528"),l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">\'\u6211\u662f\u4e00\u4e2a\u8f7b\u63d0\u793a\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">onClick2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Toast</span><span class="token punctuation">(</span>\n      <span class="token string">\'\u6211\u662f\u4e00\u4e2a\u8f7b\u63d0\u793a\uff0c\u800c\u4e14\u6587\u5b57\u5185\u5bb9\u6709\u70b9\u591a\u3002\u6211\u662f\u4e00\u4e2a\u8f7b\u63d0\u793a\uff0c\u800c\u4e14\u6587\u5b57\u5185\u5bb9\u6709\u70b9\u591a\u3002\u6211\u662f\u4e00\u4e2a\u8f7b\u63d0\u793a\uff0c\u800c\u4e14\u6587\u5b57\u5185\u5bb9\u6709\u70b9\u591a\u3002\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u70b9\u51fb\u6253\u5f00</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick2<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u6587\u5b57\u6709\u70b9\u957f\u65f6</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token plain-text">;\n\nexport default Demo;\n</span>'}})))),l.createElement("h2",null,"\u81ea\u5b9a\u4e49\u663e\u793a\u65f6\u957f\uff0c\u9ed8\u8ba4 2 \u79d2"),l.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/toast_duration")}),onClick:this.onCodeClick.bind(null,"/toast_duration")},l.createElement("header",null,"duration"),l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">\'\u6211\u662f\u4e00\u4e2a\u663e\u793a5\u79d2\u7684\u8f7b\u63d0\u793a\'</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u70b9\u51fb\u6253\u5f00\u5e76\u663e\u793a5\u79d2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token plain-text">;\n\nexport default Demo;\n</span>'}})))),l.createElement("h2",null,"\u4e3b\u52a8\u5173\u95ed"),l.createElement("p",null,l.createElement("code",null,"Toast")," \u4f1a\u8fd4\u56de\u4e00\u4e2a ",l.createElement("code",null,"close")," \u65b9\u6cd5"),l.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/toast_close")}),onClick:this.onCodeClick.bind(null,"/toast_close")},l.createElement("header",null,"close"),l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">\'\u6211\u662f\u4e00\u4e2a\u4f1a\u663e\u793a\u5f88\u4e45\u7684\u8f7b\u63d0\u793a\uff0c\u4f463\u79d2\u540e\u88ab\u5f3a\u5236\u5173\u95ed\'</span><span class="token punctuation">,</span> <span class="token number">10000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      Toast<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u70b9\u51fb\u6253\u5f00</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token plain-text">;\n\nexport default Demo;\n</span>'}}))))),l.createElement(k.a,{link:this.state.previewUrl}))}}]),a}(l.PureComponent)}}]);
//# sourceMappingURL=18.c69e2027.chunk.js.map