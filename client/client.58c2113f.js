function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function c(t,e,n,s,r,o,a){const c=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(c){const r=i(e,n,s,a);t.p(r,c)}}function l(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t){return null==t?"":t}let f=!1;const d=new Set;function h(t,e){f&&d.delete(e),e.parentNode!==t&&t.appendChild(e)}function p(t,e,n){f&&d.delete(e),(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function m(t){f?d.add(t):t.parentNode&&t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function $(){return v(" ")}function y(){return v("")}function _(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function E(t){return function(e){return e.preventDefault(),t.call(this,e)}}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:S(t,s,e[s])}function A(t){return Array.from(t.childNodes)}function T(t,e,n,s){for(;t.length>0;){const s=t.shift();if(s.nodeName===e){let t=0;const e=[];for(;t<s.attributes.length;){const r=s.attributes[t++];n[r.name]||e.push(r.name)}for(let t=0;t<e.length;t++)s.removeAttribute(e[t]);return s}m(s)}return s?w(e):b(e)}function N(t,e){for(let n=0;n<t.length;n+=1){const s=t[n];if(3===s.nodeType)return s.data=""+e,t.shift()}return v(e)}function L(t){return N(t," ")}function P(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function I(t,e){t.value=null==e?"":e}let R,O;function k(){if(void 0===R){R=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){R=!0}}return R}function U(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=b("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=k();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=_(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=_(n.contentWindow,"resize",e)}),h(t,n),()=>{(s||r&&n.contentWindow)&&r(),m(n)}}function C(t,e=document.body){return Array.from(e.querySelectorAll(t))}class H{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=b(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)p(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(m)}}function j(t){O=t}function M(){if(!O)throw new Error("Function called outside component initialization");return O}function D(t){M().$$.on_mount.push(t)}function G(t){M().$$.after_update.push(t)}function q(t){M().$$.on_destroy.push(t)}const z=[],B=[],K=[],J=[],V=Promise.resolve();let W=!1;function F(t){K.push(t)}let Y=!1;const Q=new Set;function X(){if(!Y){Y=!0;do{for(let t=0;t<z.length;t+=1){const e=z[t];j(e),Z(e.$$)}for(j(null),z.length=0;B.length;)B.pop()();for(let t=0;t<K.length;t+=1){const e=K[t];Q.has(e)||(Q.add(e),e())}K.length=0}while(z.length);for(;J.length;)J.pop()();W=!1,Y=!1,Q.clear()}}function Z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const tt=new Set;let et;function nt(){et={r:0,c:[],p:et}}function st(){et.r||r(et.c),et=et.p}function rt(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,n,s){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push((()=>{tt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function at(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function it(t){return"object"==typeof t&&null!==t?t:{}}function ct(t){t&&t.c()}function lt(t,e){t&&t.l(e)}function ut(t,e,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,s),a||F((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(F)}function ft(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){-1===t.$$.dirty[0]&&(z.push(t),W||(W=!0,V.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ht(e,n,o,a,i,c,l=[-1]){const u=O;j(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:l,skip_bound:!1};let p=!1;if(h.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return h.ctx&&i(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&dt(e,t)),n})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){f=!0;const t=A(n.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();n.intro&&rt(e.$$.fragment),ut(e,n.target,n.anchor,n.customElement),function(){f=!1;for(const t of d)t.parentNode.removeChild(t);d.clear()}(),X()}j(u)}class pt{$destroy(){ft(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const mt=[];function gt(e,n=t){let s;const r=[];function o(t){if(a(e,t)&&(e=t,s)){const t=!mt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),mt.push(n,e)}if(t){for(let t=0;t<mt.length;t+=2)mt[t][0](mt[t+1]);mt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.push(c),1===r.length&&(s=n(o)||t),a(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const bt={};var wt={owner:"alaoweb",repo:"status","status-website":{baseUrl:"/status",logoUrl:"https://raw.githubusercontent.com/alaoweb/status/main/img/ALAO-logo-standard.svg",name:"Status Report",introTitle:"",introMessage:null,navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},sites:[{name:"ALAO Website",url:"https://www.derekzoladz.com/",icon:"https://raw.githubusercontent.com/alaoweb/status/main/img/alao-icon.png"},{name:"ALAO 2020",url:"https://2020.alaoweb.org/",icon:"https://raw.githubusercontent.com/alaoweb/status/main/img/alao-icon.png"},{name:"TEDSIG 2020",url:"https://tedsig.alaoweb.org/",icon:"https://raw.githubusercontent.com/alaoweb/status/main/img/icon.png"},{name:"TEDSIG Speculative Library Futures",url:"https://futures.alaoweb.org/",icon:"https://raw.githubusercontent.com/alaoweb/status/main/img/icon.png"}],path:"https://alaoweb.github.io/status",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function vt(t,e,n){const s=t.slice();return s[1]=e[n],s}function $t(e){let n,s,r,o=wt["status-website"]&&!wt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=b("img"),this.h()},l(t){n=T(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){S(n,"alt",""),n.src!==(s=wt["status-website"].logoUrl)&&S(n,"src",s),S(n,"class","svelte-a08hsz")},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}(),a=wt["status-website"]&&!wt["status-website"].hideNavTitle&&function(e){let n,s,r=wt["status-website"].name+"";return{c(){n=b("div"),s=v(r)},l(t){n=T(t,"DIV",{});var e=A(n);s=N(e,r),e.forEach(m)},m(t,e){p(t,n,e),h(n,s)},p:t,d(t){t&&m(n)}}}();return{c(){n=b("div"),s=b("a"),o&&o.c(),r=$(),a&&a.c(),this.h()},l(t){n=T(t,"DIV",{});var e=A(n);s=T(e,"A",{href:!0,class:!0});var i=A(s);o&&o.l(i),r=L(i),a&&a.l(i),i.forEach(m),e.forEach(m),this.h()},h(){S(s,"href",wt["status-website"].logoHref||wt.path),S(s,"class","logo svelte-a08hsz")},m(t,e){p(t,n,e),h(n,s),o&&o.m(s,null),h(s,r),a&&a.m(s,null)},p(t,e){wt["status-website"]&&!wt["status-website"].hideNavLogo&&o.p(t,e),wt["status-website"]&&!wt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&m(n),o&&o.d(),a&&a.d()}}}function yt(t){let e,n,s,r,o,a=t[1].title+"";return{c(){e=b("li"),n=b("a"),s=v(a),o=$(),this.h()},l(t){e=T(t,"LI",{});var r=A(e);n=T(r,"A",{"aria-current":!0,href:!0,class:!0});var i=A(n);s=N(i,a),i.forEach(m),o=L(r),r.forEach(m),this.h()},h(){S(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),S(n,"href",t[1].href.replace("$OWNER",wt.owner).replace("$REPO",wt.repo)),S(n,"class","svelte-a08hsz")},m(t,r){p(t,e,r),h(e,n),h(n,s),h(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&S(n,"aria-current",r)},d(t){t&&m(e)}}}function _t(e){let n,s,r,o,a,i=wt["status-website"]&&wt["status-website"].logoUrl&&$t(),c=wt["status-website"]&&wt["status-website"].navbar&&function(t){let e,n=wt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=yt(vt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=y()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=y()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);p(t,e,n)},p(t,r){if(1&r){let o;for(n=wt["status-website"].navbar,o=0;o<n.length;o+=1){const a=vt(t,n,o);s[o]?s[o].p(a,r):(s[o]=yt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){g(s,t),t&&m(e)}}}(e),l=wt["status-website"]&&wt["status-website"].navbarGitHub&&!wt["status-website"].navbar&&function(e){let n,s,r,o=wt.i18n.navGitHub+"";return{c(){n=b("li"),s=b("a"),r=v(o),this.h()},l(t){n=T(t,"LI",{});var e=A(n);s=T(e,"A",{href:!0,class:!0});var a=A(s);r=N(a,o),a.forEach(m),e.forEach(m),this.h()},h(){S(s,"href",`https://github.com/${wt.owner}/${wt.repo}`),S(s,"class","svelte-a08hsz")},m(t,e){p(t,n,e),h(n,s),h(s,r)},p:t,d(t){t&&m(n)}}}();return{c(){n=b("nav"),s=b("div"),i&&i.c(),r=$(),o=b("ul"),c&&c.c(),a=$(),l&&l.c(),this.h()},l(t){n=T(t,"NAV",{class:!0});var e=A(n);s=T(e,"DIV",{class:!0});var u=A(s);i&&i.l(u),r=L(u),o=T(u,"UL",{class:!0});var f=A(o);c&&c.l(f),a=L(f),l&&l.l(f),f.forEach(m),u.forEach(m),e.forEach(m),this.h()},h(){S(o,"class","svelte-a08hsz"),S(s,"class","container svelte-a08hsz"),S(n,"class","svelte-a08hsz")},m(t,e){p(t,n,e),h(n,s),i&&i.m(s,null),h(s,r),h(s,o),c&&c.m(o,null),h(o,a),l&&l.m(o,null)},p(t,[e]){wt["status-website"]&&wt["status-website"].logoUrl&&i.p(t,e),wt["status-website"]&&wt["status-website"].navbar&&c.p(t,e),wt["status-website"]&&wt["status-website"].navbarGitHub&&!wt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&m(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function Et(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class St extends pt{constructor(t){super(),ht(this,t,Et,_t,a,{segment:0})}}var xt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function At(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Tt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Nt(t,e){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=xt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(t);)s=t.substring(f,r.index),f=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+At(Tt(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Nt(At(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Tt(r[8])+'" alt="'+Tt(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Tt(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Nt(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Tt(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Lt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Pt(t,e,n){const s=t.slice();return s[3]=e[n],s}function It(t,e,n){const s=t.slice();return s[8]=e[n],s}function Rt(e){let n;return{c(){n=b("link"),this.h()},l(t){n=T(t,"LINK",{rel:!0,href:!0}),this.h()},h(){S(n,"rel","stylesheet"),S(n,"href",`${wt.path}/themes/${(wt["status-website"]||{}).theme||"light"}.css`)},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}function Ot(e){let n;return{c(){n=b("link"),this.h()},l(t){n=T(t,"LINK",{rel:!0,href:!0}),this.h()},h(){S(n,"rel","stylesheet"),S(n,"href",(wt["status-website"]||{}).themeUrl)},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}function kt(e){let n,s;return{c(){n=b("script"),this.h()},l(t){n=T(t,"SCRIPT",{src:!0,async:!0,defer:!0}),A(n).forEach(m),this.h()},h(){n.src!==(s=e[8].src)&&S(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}function Ut(e){let n;return{c(){n=b("link"),this.h()},l(t){n=T(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){S(n,"rel",e[3].rel),S(n,"href",e[3].href),S(n,"media",e[3].media)},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}function Ct(e){let n;return{c(){n=b("meta"),this.h()},l(t){n=T(t,"META",{name:!0,content:!0}),this.h()},h(){S(n,"name",e[3].name),S(n,"content",e[3].content)},m(t,e){p(t,n,e)},p:t,d(t){t&&m(n)}}}function Ht(e){let n,s,r,o,a,l,u,f,d,w,v,_,E,x,N,P,I,R,O=Nt(wt.i18n.footer.replace(/\$REPO/,`https://github.com/${wt.owner}/${wt.repo}`))+"",k=(wt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(wt["status-website"]||{}).customHeadHtml+"";return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new H(s)},m(t,e){n.m(r,t,e),p(t,s,e)},p:t,d(t){t&&m(s),t&&n.d()}}}();let U=((wt["status-website"]||{}).themeUrl?Ot:Rt)(e),j=(wt["status-website"]||{}).scripts&&function(t){let e,n=(wt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=kt(It(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=y()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=y()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);p(t,e,n)},p(t,r){if(0&r){let o;for(n=(wt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=It(t,n,o);s[o]?s[o].p(a,r):(s[o]=kt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){g(s,t),t&&m(e)}}}(e),M=(wt["status-website"]||{}).links&&function(t){let e,n=(wt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Ut(Pt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=y()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=y()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);p(t,e,n)},p(t,r){if(0&r){let o;for(n=(wt["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Pt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Ut(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){g(s,t),t&&m(e)}}}(e),D=(wt["status-website"]||{}).metaTags&&function(t){let e,n=(wt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Ct(Lt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=y()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=y()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);p(t,e,n)},p(t,r){if(0&r){let o;for(n=(wt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Lt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Ct(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){g(s,t),t&&m(e)}}}(e),G=wt["status-website"].css&&function(e){let n,s,r=`<style>${wt["status-website"].css}</style>`;return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new H(s)},m(t,e){n.m(r,t,e),p(t,s,e)},p:t,d(t){t&&m(s),t&&n.d()}}}(),q=wt["status-website"].js&&function(e){let n,s,r=`<script>${wt["status-website"].js}<\/script>`;return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new H(s)},m(t,e){n.m(r,t,e),p(t,s,e)},p:t,d(t){t&&m(s),t&&n.d()}}}(),z=(wt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(wt["status-website"]||{}).customBodyHtml+"";return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new H(s)},m(t,e){n.m(r,t,e),p(t,s,e)},p:t,d(t){t&&m(s),t&&n.d()}}}();_=new St({props:{segment:e[0]}});const B=e[2].default,K=function(t,e,n,s){if(t){const r=i(t,e,n,s);return t[0](r)}}(B,e,e[1],null);return{c(){k&&k.c(),n=y(),U.c(),s=b("link"),r=b("link"),o=b("link"),j&&j.c(),a=y(),M&&M.c(),l=y(),D&&D.c(),u=y(),G&&G.c(),f=y(),q&&q.c(),d=y(),w=$(),z&&z.c(),v=$(),ct(_.$$.fragment),E=$(),x=b("main"),K&&K.c(),N=$(),P=b("footer"),I=b("p"),this.h()},l(t){const e=C('[data-svelte="svelte-ri9y7q"]',document.head);k&&k.l(e),n=y(),U.l(e),s=T(e,"LINK",{rel:!0,href:!0}),r=T(e,"LINK",{rel:!0,type:!0,href:!0}),o=T(e,"LINK",{rel:!0,type:!0,href:!0}),j&&j.l(e),a=y(),M&&M.l(e),l=y(),D&&D.l(e),u=y(),G&&G.l(e),f=y(),q&&q.l(e),d=y(),e.forEach(m),w=L(t),z&&z.l(t),v=L(t),lt(_.$$.fragment,t),E=L(t),x=T(t,"MAIN",{class:!0});var i=A(x);K&&K.l(i),i.forEach(m),N=L(t),P=T(t,"FOOTER",{class:!0});var c=A(P);I=T(c,"P",{}),A(I).forEach(m),c.forEach(m),this.h()},h(){S(s,"rel","stylesheet"),S(s,"href",`${wt.path}/global.css`),S(r,"rel","icon"),S(r,"type","image/svg"),S(r,"href",(wt["status-website"]||{}).faviconSvg||(wt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),S(o,"rel","icon"),S(o,"type","image/png"),S(o,"href",(wt["status-website"]||{}).favicon||"/logo-192.png"),S(x,"class","container"),S(P,"class","svelte-jbr799")},m(t,e){k&&k.m(document.head,null),h(document.head,n),U.m(document.head,null),h(document.head,s),h(document.head,r),h(document.head,o),j&&j.m(document.head,null),h(document.head,a),M&&M.m(document.head,null),h(document.head,l),D&&D.m(document.head,null),h(document.head,u),G&&G.m(document.head,null),h(document.head,f),q&&q.m(document.head,null),h(document.head,d),p(t,w,e),z&&z.m(t,e),p(t,v,e),ut(_,t,e),p(t,E,e),p(t,x,e),K&&K.m(x,null),p(t,N,e),p(t,P,e),h(P,I),I.innerHTML=O,R=!0},p(t,[e]){(wt["status-website"]||{}).customHeadHtml&&k.p(t,e),U.p(t,e),(wt["status-website"]||{}).scripts&&j.p(t,e),(wt["status-website"]||{}).links&&M.p(t,e),(wt["status-website"]||{}).metaTags&&D.p(t,e),wt["status-website"].css&&G.p(t,e),wt["status-website"].js&&q.p(t,e),(wt["status-website"]||{}).customBodyHtml&&z.p(t,e);const n={};1&e&&(n.segment=t[0]),_.$set(n),K&&K.p&&(!R||2&e)&&c(K,B,t,t[1],e,null,null)},i(t){R||(rt(_.$$.fragment,t),rt(K,t),R=!0)},o(t){ot(_.$$.fragment,t),ot(K,t),R=!1},d(t){k&&k.d(t),m(n),U.d(t),m(s),m(r),m(o),j&&j.d(t),m(a),M&&M.d(t),m(l),D&&D.d(t),m(u),G&&G.d(t),m(f),q&&q.d(t),m(d),t&&m(w),z&&z.d(t),t&&m(v),ft(_,t),t&&m(E),t&&m(x),K&&K.d(t),t&&m(N),t&&m(P)}}}function jt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Mt extends pt{constructor(t){super(),ht(this,t,jt,Ht,a,{segment:0})}}function Dt(t){let e,n,s=t[1].stack+"";return{c(){e=b("pre"),n=v(s)},l(t){e=T(t,"PRE",{});var r=A(e);n=N(r,s),r.forEach(m)},m(t,s){p(t,e,s),h(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&P(n,s)},d(t){t&&m(e)}}}function Gt(e){let n,s,r,o,a,i,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Dt(e);return{c(){s=$(),r=b("h1"),o=v(e[0]),a=$(),i=b("p"),c=v(f),l=$(),d&&d.c(),u=y(),this.h()},l(t){C('[data-svelte="svelte-1moakz"]',document.head).forEach(m),s=L(t),r=T(t,"H1",{class:!0});var n=A(r);o=N(n,e[0]),n.forEach(m),a=L(t),i=T(t,"P",{class:!0});var h=A(i);c=N(h,f),h.forEach(m),l=L(t),d&&d.l(t),u=y(),this.h()},h(){S(r,"class","svelte-17w3omn"),S(i,"class","svelte-17w3omn")},m(t,e){p(t,s,e),p(t,r,e),h(r,o),p(t,a,e),p(t,i,e),h(i,c),p(t,l,e),d&&d.m(t,e),p(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&P(o,t[0]),2&e&&f!==(f=t[1].message+"")&&P(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Dt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&m(s),t&&m(r),t&&m(a),t&&m(i),t&&m(l),d&&d.d(t),t&&m(u)}}}function qt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class zt extends pt{constructor(t){super(),ht(this,t,qt,Gt,a,{status:0,error:1})}}function Bt(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ct(n.$$.fragment),s=y()},l(t){n&&lt(n.$$.fragment,t),s=y()},m(t,e){n&&ut(n,t,e),p(t,s,e),r=!0},p(t,e){const r=16&e?at(o,[it(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){nt();const t=n;ot(t.$$.fragment,1,0,(()=>{ft(t,1)})),st()}a?(n=new a(i()),ct(n.$$.fragment),rt(n.$$.fragment,1),ut(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&rt(n.$$.fragment,t),r=!0)},o(t){n&&ot(n.$$.fragment,t),r=!1},d(t){t&&m(s),n&&ft(n,t)}}}function Kt(t){let e,n;return e=new zt({props:{error:t[0],status:t[1]}}),{c(){ct(e.$$.fragment)},l(t){lt(e.$$.fragment,t)},m(t,s){ut(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(rt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){ft(e,t)}}}function Jt(t){let e,n,s,r;const o=[Kt,Bt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=y()},l(t){n.l(t),s=y()},m(t,n){a[e].m(t,n),p(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(nt(),ot(a[c],1,1,(()=>{a[c]=null})),st(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),rt(n,1),n.m(s.parentNode,s))},i(t){r||(rt(n),r=!0)},o(t){ot(n),r=!1},d(t){a[e].d(t),t&&m(s)}}}function Vt(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Jt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Mt({props:o}),{c(){ct(n.$$.fragment)},l(t){lt(n.$$.fragment,t)},m(t,e){ut(n,t,e),s=!0},p(t,[e]){const s=12&e?at(r,[4&e&&{segment:t[2][0]},8&e&&it(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(rt(n.$$.fragment,t),s=!0)},o(t){ot(n.$$.fragment,t),s=!1},d(t){ft(n,t)}}}function Wt(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return G(l),u=bt,f=s,M().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,a,i,c,s,l]}class Ft extends pt{constructor(t){super(),ht(this,t,Wt,Vt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Yt=[],Qt=[{js:()=>Promise.all([import("./index.bfec9ee7.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.54f737e8.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].5b43d007.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].e68dd04a.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-49f387e2.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.9bcf37e5.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],Xt=(Zt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:Zt(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:Zt(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Zt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function te(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function i(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((s=s.apply(t,e||[])).next())}))}function ee(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ne,se=1;const re="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},oe={};let ae,ie;function ce(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function le(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ae))return null;let e=t.pathname.slice(ae.length);if(""===e&&(e="/"),!Yt.some((t=>t.test(e))))for(let n=0;n<Xt.length;n+=1){const s=Xt[n],r=s.pattern.exec(e);if(r){const n=ce(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function ue(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ee(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=le(r);if(o){he(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),re.pushState({id:ne},"",r.href)}}function fe(){return{x:pageXOffset,y:pageYOffset}}function de(t){if(oe[ne]=fe(),t.state){const e=le(new URL(location.href));e?he(e,t.state.id):location.href=location.href}else!function(t){se=t}(se+1),function(t){ne=t}(se),re.replaceState({id:ne},"",location.href)}function he(t,e,n,s){return te(this,void 0,void 0,(function*(){const r=!!e;if(r)ne=e;else{const t=fe();oe[ne]=t,ne=e=++se,oe[ne]=n?t:{x:0,y:0}}if(yield ie(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=oe[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),oe[ne]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function pe(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let me,ge=null;function be(t){const e=ee(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=le(new URL(t,pe(document)));if(e)ge&&t===ge.href||(ge={href:t,promise:ke(e)}),ge.promise}(e.href)}function we(t){clearTimeout(me),me=setTimeout((()=>{be(t)}),20)}function ve(t,e={noscroll:!1,replaceState:!1}){const n=le(new URL(t,pe(document)));if(n){const s=he(n,null,e.noscroll);return re[e.replaceState?"replaceState":"pushState"]({id:ne},"",t),s}return location.href=t,new Promise((()=>{}))}const $e="undefined"!=typeof __SAPPER__&&__SAPPER__;let ye,_e,Ee,Se=!1,xe=[],Ae="{}";const Te={page:function(t){const e=gt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:gt(null),session:gt($e&&$e.session)};let Ne,Le,Pe;function Ie(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Re(t){return te(this,void 0,void 0,(function*(){ye&&Te.preloading.set(!0);const e=function(t){return ge&&ge.href===t.href?ge.promise:ke(t)}(t),n=_e={},s=yield e,{redirect:r}=s;if(n===_e)if(r)yield ve(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Oe(n,e,Ie(e,t.page))}}))}function Oe(t,e,n){return te(this,void 0,void 0,(function*(){Te.page.set(n),Te.preloading.set(!1),ye?ye.$set(e):(e.stores={page:{subscribe:Te.page.subscribe},preloading:{subscribe:Te.preloading.subscribe},session:Te.session},e.level0={props:yield Ee},e.notify=Te.page.notify,ye=new Ft({target:Pe,props:e,hydrate:!0})),xe=t,Ae=JSON.stringify(n.query),Se=!0,Le=!1}))}function ke(t){return te(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ee){const t=()=>({});Ee=$e.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ne)}let i,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>te(this,void 0,void 0,(function*(){const f=s[i];if(function(t,e,n,s){if(s!==Ae)return!0;const r=xe[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,l,r)&&(u=!0),o.segments[c]=s[i+1],!e)return{segment:f};const d=c++;let h;if(Le||u||!xe[i]||xe[i].part!==e.i){u=!1;const{default:s,preload:r}=yield Qt[e.i].js();let o;o=Se||!$e.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ne):{}:$e.preloaded[i+1],h={component:s,props:o,segment:f,match:l,part:e.i}}else h=xe[i];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Ue,Ce,He;Te.session.subscribe((t=>te(void 0,void 0,void 0,(function*(){if(Ne=t,!Se)return;Le=!0;const e=le(new URL(location.href)),n=_e={},{redirect:s,props:r,branch:o}=yield ke(e);n===_e&&(s?yield ve(s.location,{replaceState:!0}):yield Oe(o,r,Ie(r,e.page)))})))),Ue={target:document.querySelector("#sapper")},Ce=Ue.target,Pe=Ce,He=$e.baseUrl,ae=He,ie=Re,"scrollRestoration"in re&&(re.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{re.scrollRestoration="auto"})),addEventListener("load",(()=>{re.scrollRestoration="manual"})),addEventListener("click",ue),addEventListener("popstate",de),addEventListener("touchstart",be),addEventListener("mousemove",we),$e.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=$e;Ee||(Ee=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Ee},level1:{props:{status:o,error:a},component:zt},segments:r},c=ce(n);Oe([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;re.replaceState({id:se},"",e);const n=le(new URL(location.href));if(n)return he(n,se,!0,t)}));export{ft as A,_ as B,r as C,B as D,u as E,C as F,Nt as G,H,w as I,ve as J,I as K,E as L,e as M,x as N,at as O,G as P,q as Q,l as R,pt as S,it as T,F as U,U as V,A as a,N as b,T as c,m as d,b as e,S as f,p as g,h,ht as i,$ as j,L as k,nt as l,ot as m,t as n,st as o,rt as p,D as q,wt as r,a as s,v as t,P as u,y as v,g as w,ct as x,lt as y,ut as z};

import __inject_styles from './inject_styles.5607aec6.js';