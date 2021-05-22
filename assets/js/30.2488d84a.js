(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{757:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"class-layoutreplacer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-layoutreplacer"}},[s._v("#")]),s._v(" Class LayoutReplacer")]),s._v(" "),a("Badge",{attrs:{text:"Class",type:"class"}}),s._v(" "),a("Badge",{attrs:{text:"private",title:"private",type:"private"}}),s._v(" "),a("section",{staticClass:"table-features"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[s._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { LayoutReplacer } "),a("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"token string"},[s._v('"@tsed/logger/src/layouts/class/LayoutReplacer"')])])])]),a("tr",[a("th",[s._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/tsedio/logger/blob/v5.14.0/packages/logger/src/layouts/class/LayoutReplacer.ts#L0-L0"}},[s._v("/packages/logger/src/layouts/class/LayoutReplacer.ts")])])])])])]),s._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" LayoutReplacer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[s._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>tokens<span class="token punctuation">:</span> <a href="/api/logger/layouts/interfaces/TokensHandlers.html"><span class="token">TokensHandlers</span></a><span class="token punctuation">,</span> timezoneOffset<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncategoryName<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">,</span> specifier<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nformatAsDate<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">,</span> specifier<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nhostname<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nformatMessage<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nendOfLine<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nlogLevel<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nstartTime<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nstartColour<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nendColour<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n\npercent<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n\npid<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent?<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a> | undefined<span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nclusterInfo<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">,</span> specifier<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nuserDefined<span class="token punctuation">:</span> <span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">,</span> specifier<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/logger/layouts/interfaces/IReplacers.html"><span class="token">IReplacers</span></a><span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("categoryName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" specifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("formatAsDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" specifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("formatMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("endOfLine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("logLevel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("startColour"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("endColour"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("percent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),s._v(" | undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("clusterInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" specifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("userDefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loggingEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("LogEvent")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" specifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/logger/layouts/interfaces/IReplacers.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("IReplacers")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);