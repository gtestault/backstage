/*! For license information please see 69b24f90.8f1802b8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[831728],{374008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(824246),i=r(511151);const s={id:"plugin-cicd-statistics",title:"@backstage/plugin-cicd-statistics",description:"API Reference for @backstage/plugin-cicd-statistics"},c=void 0,a={unversionedId:"reference/plugin-cicd-statistics",id:"reference/plugin-cicd-statistics",title:"@backstage/plugin-cicd-statistics",description:"API Reference for @backstage/plugin-cicd-statistics",source:"@site/../docs/reference/plugin-cicd-statistics.md",sourceDirName:"reference",slug:"/reference/plugin-cicd-statistics",permalink:"/docs/reference/plugin-cicd-statistics",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-cicd-statistics.md",tags:[],version:"current",frontMatter:{id:"plugin-cicd-statistics",title:"@backstage/plugin-cicd-statistics",description:"API Reference for @backstage/plugin-cicd-statistics"}},o={},l=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-cicd-statistics"})})]}),"\n",(0,n.jsx)(t.h2,{id:"classes",children:"Classes"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Class"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.aborterror",children:"AbortError"})}),(0,n.jsx)(t.td,{children:"If the Api implements support for aborting the fetching of builds, throw an AbortError of this type (or any other error with name === 'AbortError')."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Function"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.entitypagecicdcharts",children:"EntityPageCicdCharts()"})}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Interface"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.build",children:"Build"})}),(0,n.jsxs)(t.td,{children:["Generic Build type.","A build has e.g. a build type (master/branch), a status and (possibly) sub stages."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.cicdconfiguration",children:"CicdConfiguration"})}),(0,n.jsxs)(t.td,{children:["A configuration interface which the Api must implement.","When the UI for the CI/CD Statistics is loaded, it begins with fetching the configuration before anything else.","All of these fields are optional though, and will fallback to hard-coded defaults."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.cicddefaults",children:"CicdDefaults"})}),(0,n.jsxs)(t.td,{children:["Default settings for the fetching options and view options.","These are all optional, but can be overridden from the Api to whatever makes most sense for that implementation."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.cicdstate",children:"CicdState"})}),(0,n.jsxs)(t.td,{children:["The result type for ","fetchBuilds","."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.cicdstatisticsapi",children:"CicdStatisticsApi"})}),(0,n.jsxs)(t.td,{children:["The interface which is mapped to the ","cicdStatisticsApiRef"," which is used by the UI."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.fetchbuildsoptions",children:"FetchBuildsOptions"})}),(0,n.jsxs)(t.td,{children:["When fetching, the Api should fetch build information about the ","entity"," and respect the ","timeFrom",", ","timeTo",", ","filterStatus"," and ","filterType",".","Optionally implement support for ","updateProgress"," and ","abortSignal"," if preferred.","When the UI re-fetches, it will abort any previous fetching, so polling ","abortSignal.aborted",", and possibly throwing an ","AbortError",", can be useful."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.getconfigurationoptions",children:"GetConfigurationOptions"})}),(0,n.jsx)(t.td,{children:"When reading configuration, the Api can return a custom settings depending on the entity being viewed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.stage",children:"Stage"})}),(0,n.jsxs)(t.td,{children:["A Stage is a part of either a Build or a parent Stage.","This may be called things like Stage or Step or Task in CI/CD systems, but is generic here. There's also no concept of parallelism which might exist within some stages."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.updateprogress",children:"UpdateProgress"})}),(0,n.jsxs)(t.td,{children:["When fetching, if applicable, the Api can feedback progress back to the UI.","Use the ","updateProgress(completed, total, started?)"," to signal that ","completed"," builds out of a ","total"," has finished. Optionally use the ","started"," to signal how many builds have been started in total (i.e. at least the amount of ","completed",").","This can be called at any rate. Rate limiting (debouncing) is implemented in the UI.","Optionally this can signal multiple progresses in several steps"]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"variables",children:"Variables"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.cicdstatisticsapiref",children:"cicdStatisticsApiRef"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.cicdstatisticsplugin",children:"cicdStatisticsPlugin"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.entitycicdstatisticscontent",children:"EntityCicdStatisticsContent"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.statustypes",children:"statusTypes"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.triggerreasons",children:"triggerReasons"})}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type Alias"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.buildwithraw",children:"BuildWithRaw"})}),(0,n.jsxs)(t.td,{children:["Helper type which is a Build with a certain typed 'raw' field.","This can be useful in an Api to use while mapping internal data structures (raw) into generic builds."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.charttype",children:"ChartType"})}),(0,n.jsxs)(t.td,{children:["Chart type.","Values are: * ","duration",": shows an area chart of the duration over time * ","count",": shows a bar chart of the number of build per day"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.charttypes",children:"ChartTypes"})}),(0,n.jsx)(t.td,{children:"Chart types."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.filterbranchtype",children:"FilterBranchType"})}),(0,n.jsxs)(t.td,{children:["The branch enum of either 'master' or 'branch' (or possibly the meta 'all').","The concept of what constitutes a master branch is generic. It might be called something like 'release' or 'main' or 'trunk' in the underlying CI/CD system, which is then up to the Api to map accordingly."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.filterstatustype",children:"FilterStatusType"})}),(0,n.jsxs)(t.td,{children:["This is a generic enum of build statuses.","If all of these aren't applicable to the underlying CI/CD, these can be configured to be hidden, using the ","availableStatuses"," in ","CicdConfiguration","."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.triggerreason",children:"TriggerReason"})}),(0,n.jsx)(t.td,{})]})]})]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var s,c,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),o=1;o<arguments.length;o++){for(var l in s=Object(arguments[o]))r.call(s,l)&&(a[l]=s[l]);if(t){c=t(s);for(var d=0;d<c.length;d++)n.call(s,c[d])&&(a[c[d]]=s[c[d]])}}return a}},371426:(e,t,r)=>{r(862525);var n=r(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;i=s("react.element"),t.Fragment=s("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!o.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:c.current}}t.jsx=l,t.jsxs=l},541535:(e,t,r)=>{var n=r(862525),i=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,a=60110,o=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;i=u("react.element"),s=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),c=u("react.provider"),a=u("react.context"),o=u("react.forward_ref"),t.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||p}function y(){}function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||p}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=j.prototype;var b=x.prototype=new y;b.constructor=x,n(b,j.prototype),b.isPureReactComponent=!0;var m={current:null},v=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,s={},c=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)v.call(t,n)&&!w.hasOwnProperty(n)&&(s[n]=t[n]);var o=arguments.length-2;if(1===o)s.children=r;else if(1<o){for(var l=Array(o),d=0;d<o;d++)l[d]=arguments[d+2];s.children=l}if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===s[n]&&(s[n]=o[n]);return{$$typeof:i,type:e,key:c,ref:a,props:s,_owner:m.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var k=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,n,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var o=!1;if(null===e)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case i:case s:o=!0}}if(o)return c=c(o=e),e=""===n?"."+S(o,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(k,"$&/")+"/"),O(c,t,r,"",(function(e){return e}))):null!=c&&(C(c)&&(c=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||o&&o.key===c.key?"":(""+c.key).replace(k,"$&/")+"/")+e)),t.push(c)),1;if(o=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=n+S(a=e[l],l);o+=O(a,t,r,d,c)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(a=e.next()).done;)o+=O(a=a.value,t,r,d=n+S(a,l++),c);else if("object"===a)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return o}function A(e,t,r){if(null==e)return e;var n=[],i=0;return O(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function P(){var e=R.current;if(null===e)throw Error(f(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:m,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:A,forEach:function(e,t,r){A(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(f(143));return e}},t.Component=j,t.PureComponent=x,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error(f(267,e));var s=n({},e.props),c=e.key,a=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,o=m.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)v.call(t,d)&&!w.hasOwnProperty(d)&&(s[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)s.children=r;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:i,type:e.type,key:c,ref:a,props:s,_owner:o}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:o,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>s});var n=r(667294);const i=n.createContext({});function s(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||c:s(e),n.createElement(i.Provider,{value:a},t)}}}]);