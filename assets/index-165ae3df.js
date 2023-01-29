(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Gg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ma={},Wg={get exports(){return Ma},set exports(t){Ma=t}},Ka={},Zr={},Hg={get exports(){return Zr},set exports(t){Zr=t}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),jg=Symbol.for("react.portal"),Xg=Symbol.for("react.fragment"),qg=Symbol.for("react.strict_mode"),$g=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Zg=Symbol.for("react.context"),Kg=Symbol.for("react.forward_ref"),Qg=Symbol.for("react.suspense"),Jg=Symbol.for("react.memo"),e0=Symbol.for("react.lazy"),Nf=Symbol.iterator;function t0(t){return t===null||typeof t!="object"?null:(t=Nf&&t[Nf]||t["@@iterator"],typeof t=="function"?t:null)}var rp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sp=Object.assign,op={};function ls(t,e,n){this.props=t,this.context=e,this.refs=op,this.updater=n||rp}ls.prototype.isReactComponent={};ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ap(){}ap.prototype=ls.prototype;function Lc(t,e,n){this.props=t,this.context=e,this.refs=op,this.updater=n||rp}var Pc=Lc.prototype=new ap;Pc.constructor=Lc;sp(Pc,ls.prototype);Pc.isPureReactComponent=!0;var Ff=Array.isArray,lp=Object.prototype.hasOwnProperty,Dc={current:null},up={key:!0,ref:!0,__self:!0,__source:!0};function cp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)lp.call(e,i)&&!up.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:vo,type:t,key:s,ref:o,props:r,_owner:Dc.current}}function n0(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rc(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function i0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zf=/\/+/g;function yl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?i0(""+t.key):e.toString(36)}function la(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vo:case jg:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+yl(o,0):i,Ff(r)?(n="",t!=null&&(n=t.replace(zf,"$&/")+"/"),la(r,e,n,"",function(u){return u})):r!=null&&(Rc(r)&&(r=n0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(zf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ff(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+yl(s,a);o+=la(s,e,n,l,r)}else if(l=t0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+yl(s,a++),o+=la(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Co(t,e,n){if(t==null)return t;var i=[],r=0;return la(t,i,"","",function(s){return e.call(n,s,r++)}),i}function r0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},ua={transition:null},s0={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:ua,ReactCurrentOwner:Dc};Ae.Children={map:Co,forEach:function(t,e,n){Co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Co(t,function(){e++}),e},toArray:function(t){return Co(t,function(e){return e})||[]},only:function(t){if(!Rc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ae.Component=ls;Ae.Fragment=Xg;Ae.Profiler=$g;Ae.PureComponent=Lc;Ae.StrictMode=qg;Ae.Suspense=Qg;Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0;Ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=sp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)lp.call(e,l)&&!up.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:vo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ae.createContext=function(t){return t={$$typeof:Zg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yg,_context:t},t.Consumer=t};Ae.createElement=cp;Ae.createFactory=function(t){var e=cp.bind(null,t);return e.type=t,e};Ae.createRef=function(){return{current:null}};Ae.forwardRef=function(t){return{$$typeof:Kg,render:t}};Ae.isValidElement=Rc;Ae.lazy=function(t){return{$$typeof:e0,_payload:{_status:-1,_result:t},_init:r0}};Ae.memo=function(t,e){return{$$typeof:Jg,type:t,compare:e===void 0?null:e}};Ae.startTransition=function(t){var e=ua.transition;ua.transition={};try{t()}finally{ua.transition=e}};Ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ae.useCallback=function(t,e){return Nt.current.useCallback(t,e)};Ae.useContext=function(t){return Nt.current.useContext(t)};Ae.useDebugValue=function(){};Ae.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};Ae.useEffect=function(t,e){return Nt.current.useEffect(t,e)};Ae.useId=function(){return Nt.current.useId()};Ae.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};Ae.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};Ae.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};Ae.useMemo=function(t,e){return Nt.current.useMemo(t,e)};Ae.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};Ae.useRef=function(t){return Nt.current.useRef(t)};Ae.useState=function(t){return Nt.current.useState(t)};Ae.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};Ae.useTransition=function(){return Nt.current.useTransition()};Ae.version="18.2.0";(function(t){t.exports=Ae})(Hg);const o0=Gg(Zr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0=Zr,l0=Symbol.for("react.element"),u0=Symbol.for("react.fragment"),c0=Object.prototype.hasOwnProperty,f0=a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d0={key:!0,ref:!0,__self:!0,__source:!0};function fp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)c0.call(e,i)&&!d0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:l0,type:t,key:s,ref:o,props:r,_owner:f0.current}}Ka.Fragment=u0;Ka.jsx=fp;Ka.jsxs=fp;(function(t){t.exports=Ka})(Wg);const Yn=Ma.jsx,h0=Ma.jsxs;var Cu={},bu={},p0={get exports(){return bu},set exports(t){bu=t}},sn={},Au={},m0={get exports(){return Au},set exports(t){Au=t}},dp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,O){var B=D.length;D.push(O);e:for(;0<B;){var ne=B-1>>>1,F=D[ne];if(0<r(F,O))D[ne]=O,D[B]=F,B=ne;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var O=D[0],B=D.pop();if(B!==O){D[0]=B;e:for(var ne=0,F=D.length,X=F>>>1;ne<X;){var te=2*(ne+1)-1,re=D[te],U=te+1,xe=D[U];if(0>r(re,B))U<F&&0>r(xe,re)?(D[ne]=xe,D[U]=B,ne=U):(D[ne]=re,D[te]=B,ne=te);else if(U<F&&0>r(xe,B))D[ne]=xe,D[U]=B,ne=U;else break e}}return O}function r(D,O){var B=D.sortIndex-O.sortIndex;return B!==0?B:D.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=D)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function S(D){if(h=!1,v(D),!x)if(n(l)!==null)x=!0,K(M);else{var O=n(u);O!==null&&Q(S,O.startTime-D)}}function M(D,O){x=!1,h&&(h=!1,m(y),y=-1),g=!0;var B=f;try{for(v(O),d=n(l);d!==null&&(!(d.expirationTime>O)||D&&!$());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var F=ne(d.expirationTime<=O);O=t.unstable_now(),typeof F=="function"?d.callback=F:d===n(l)&&i(l),v(O)}else i(l);d=n(l)}if(d!==null)var X=!0;else{var te=n(u);te!==null&&Q(S,te.startTime-O),X=!1}return X}finally{d=null,f=B,g=!1}}var b=!1,A=null,y=-1,C=5,L=-1;function $(){return!(t.unstable_now()-L<C)}function Z(){if(A!==null){var D=t.unstable_now();L=D;var O=!0;try{O=A(!0,D)}finally{O?z():(b=!1,A=null)}}else b=!1}var z;if(typeof _=="function")z=function(){_(Z)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,j=N.port2;N.port1.onmessage=Z,z=function(){j.postMessage(null)}}else z=function(){p(Z,0)};function K(D){A=D,b||(b=!0,z())}function Q(D,O){y=p(function(){D(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,K(M))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var B=f;f=O;try{return D()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,O){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=f;f=D;try{return O()}finally{f=B}},t.unstable_scheduleCallback=function(D,O,B){var ne=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ne+B:ne):B=ne,D){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=B+F,D={id:c++,callback:O,priorityLevel:D,startTime:B,expirationTime:F,sortIndex:-1},B>ne?(D.sortIndex=B,e(u,D),n(l)===null&&D===n(u)&&(h?(m(y),y=-1):h=!0,Q(S,B-ne))):(D.sortIndex=F,e(l,D),x||g||(x=!0,K(M))),D},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(D){var O=f;return function(){var B=f;f=O;try{return D.apply(this,arguments)}finally{f=B}}}})(dp);(function(t){t.exports=dp})(m0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp=Zr,rn=Au;function Y(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pp=new Set,Zs={};function fr(t,e){Kr(t,e),Kr(t+"Capture",e)}function Kr(t,e){for(Zs[t]=e,t=0;t<e.length;t++)pp.add(e[t])}var ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,g0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kf={},Uf={};function _0(t){return Lu.call(Uf,t)?!0:Lu.call(kf,t)?!1:g0.test(t)?Uf[t]=!0:(kf[t]=!0,!1)}function v0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x0(t,e,n,i){if(e===null||typeof e>"u"||v0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ic=/[\-:]([a-z])/g;function Nc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ic,Nc);xt[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ic,Nc);xt[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ic,Nc);xt[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fc(t,e,n,i){var r=xt.hasOwnProperty(e)?xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(x0(e,n,r,i)&&(n=null),i||r===null?_0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var si=hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),Lr=Symbol.for("react.portal"),Pr=Symbol.for("react.fragment"),zc=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),gp=Symbol.for("react.context"),kc=Symbol.for("react.forward_ref"),Du=Symbol.for("react.suspense"),Ru=Symbol.for("react.suspense_list"),Uc=Symbol.for("react.memo"),di=Symbol.for("react.lazy"),_p=Symbol.for("react.offscreen"),Of=Symbol.iterator;function ms(t){return t===null||typeof t!="object"?null:(t=Of&&t[Of]||t["@@iterator"],typeof t=="function"?t:null)}var Ke=Object.assign,Sl;function Rs(t){if(Sl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sl=e&&e[1]||""}return`
`+Sl+t}var Ml=!1;function wl(t,e){if(!t||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Rs(t):""}function y0(t){switch(t.tag){case 5:return Rs(t.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 2:case 15:return t=wl(t.type,!1),t;case 11:return t=wl(t.type.render,!1),t;case 1:return t=wl(t.type,!0),t;default:return""}}function Iu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pr:return"Fragment";case Lr:return"Portal";case Pu:return"Profiler";case zc:return"StrictMode";case Du:return"Suspense";case Ru:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gp:return(t.displayName||"Context")+".Consumer";case mp:return(t._context.displayName||"Context")+".Provider";case kc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uc:return e=t.displayName||null,e!==null?e:Iu(t.type)||"Memo";case di:e=t._payload,t=t._init;try{return Iu(t(e))}catch{}}return null}function S0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(e);case 8:return e===zc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ai(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function M0(t){var e=vp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ao(t){t._valueTracker||(t._valueTracker=M0(t))}function xp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nu(t,e){var n=e.checked;return Ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ai(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yp(t,e){e=e.checked,e!=null&&Fc(t,"checked",e,!1)}function Fu(t,e){yp(t,e);var n=Ai(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&zu(t,e.type,Ai(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zu(t,e,n){(e!=="number"||wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Is=Array.isArray;function Gr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ai(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ku(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Y(91));return Ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Y(92));if(Is(n)){if(1<n.length)throw Error(Y(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ai(n)}}function Sp(t,e){var n=Ai(e.value),i=Ai(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,wp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w0=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(t){w0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Os[e]=Os[t]})});function Ep(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Os.hasOwnProperty(t)&&Os[t]?(""+e).trim():e+"px"}function Tp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ep(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var E0=Ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ou(t,e){if(e){if(E0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Y(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Y(62))}}function Bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vu=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gu=null,Wr=null,Hr=null;function Hf(t){if(t=So(t)){if(typeof Gu!="function")throw Error(Y(280));var e=t.stateNode;e&&(e=nl(e),Gu(t.stateNode,t.type,e))}}function Cp(t){Wr?Hr?Hr.push(t):Hr=[t]:Wr=t}function bp(){if(Wr){var t=Wr,e=Hr;if(Hr=Wr=null,Hf(t),e)for(t=0;t<e.length;t++)Hf(e[t])}}function Ap(t,e){return t(e)}function Lp(){}var El=!1;function Pp(t,e,n){if(El)return t(e,n);El=!0;try{return Ap(t,e,n)}finally{El=!1,(Wr!==null||Hr!==null)&&(Lp(),bp())}}function Qs(t,e){var n=t.stateNode;if(n===null)return null;var i=nl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Y(231,e,typeof n));return n}var Wu=!1;if(ti)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){Wu=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{Wu=!1}function T0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Bs=!1,Ea=null,Ta=!1,Hu=null,C0={onError:function(t){Bs=!0,Ea=t}};function b0(t,e,n,i,r,s,o,a,l){Bs=!1,Ea=null,T0.apply(C0,arguments)}function A0(t,e,n,i,r,s,o,a,l){if(b0.apply(this,arguments),Bs){if(Bs){var u=Ea;Bs=!1,Ea=null}else throw Error(Y(198));Ta||(Ta=!0,Hu=u)}}function dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jf(t){if(dr(t)!==t)throw Error(Y(188))}function L0(t){var e=t.alternate;if(!e){if(e=dr(t),e===null)throw Error(Y(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return jf(r),t;if(s===i)return jf(r),e;s=s.sibling}throw Error(Y(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Y(189))}}if(n.alternate!==i)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?t:e}function Rp(t){return t=L0(t),t!==null?Ip(t):null}function Ip(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ip(t);if(e!==null)return e;t=t.sibling}return null}var Np=rn.unstable_scheduleCallback,Xf=rn.unstable_cancelCallback,P0=rn.unstable_shouldYield,D0=rn.unstable_requestPaint,Je=rn.unstable_now,R0=rn.unstable_getCurrentPriorityLevel,Bc=rn.unstable_ImmediatePriority,Fp=rn.unstable_UserBlockingPriority,Ca=rn.unstable_NormalPriority,I0=rn.unstable_LowPriority,zp=rn.unstable_IdlePriority,Qa=null,zn=null;function N0(t){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(Qa,t,void 0,(t.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:k0,F0=Math.log,z0=Math.LN2;function k0(t){return t>>>=0,t===0?32:31-(F0(t)/z0|0)|0}var Po=64,Do=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ns(a):(s&=o,s!==0&&(i=Ns(s)))}else o=n&~r,o!==0?i=Ns(o):s!==0&&(i=Ns(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-An(e),r=1<<n,i|=t[n],e&=~r;return i}function U0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-An(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=U0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kp(){var t=Po;return Po<<=1,!(Po&4194240)&&(Po=64),t}function Tl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-An(e),t[e]=n}function B0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-An(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-An(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ue=0;function Up(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Op,Gc,Bp,Vp,Gp,Xu=!1,Ro=[],xi=null,yi=null,Si=null,Js=new Map,eo=new Map,pi=[],V0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qf(t,e){switch(t){case"focusin":case"focusout":xi=null;break;case"dragenter":case"dragleave":yi=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(e.pointerId)}}function _s(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=So(e),e!==null&&Gc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function G0(t,e,n,i,r){switch(e){case"focusin":return xi=_s(xi,t,e,n,i,r),!0;case"dragenter":return yi=_s(yi,t,e,n,i,r),!0;case"mouseover":return Si=_s(Si,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Js.set(s,_s(Js.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,eo.set(s,_s(eo.get(s)||null,t,e,n,i,r)),!0}return!1}function Wp(t){var e=Xi(t.target);if(e!==null){var n=dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Dp(n),e!==null){t.blockedOn=e,Gp(t.priority,function(){Bp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Vu=i,n.target.dispatchEvent(i),Vu=null}else return e=So(n),e!==null&&Gc(e),t.blockedOn=n,!1;e.shift()}return!0}function $f(t,e,n){ca(t)&&n.delete(e)}function W0(){Xu=!1,xi!==null&&ca(xi)&&(xi=null),yi!==null&&ca(yi)&&(yi=null),Si!==null&&ca(Si)&&(Si=null),Js.forEach($f),eo.forEach($f)}function vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Xu||(Xu=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,W0)))}function to(t){function e(r){return vs(r,t)}if(0<Ro.length){vs(Ro[0],t);for(var n=1;n<Ro.length;n++){var i=Ro[n];i.blockedOn===t&&(i.blockedOn=null)}}for(xi!==null&&vs(xi,t),yi!==null&&vs(yi,t),Si!==null&&vs(Si,t),Js.forEach(e),eo.forEach(e),n=0;n<pi.length;n++)i=pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<pi.length&&(n=pi[0],n.blockedOn===null);)Wp(n),n.blockedOn===null&&pi.shift()}var jr=si.ReactCurrentBatchConfig,Aa=!0;function H0(t,e,n,i){var r=Ue,s=jr.transition;jr.transition=null;try{Ue=1,Wc(t,e,n,i)}finally{Ue=r,jr.transition=s}}function j0(t,e,n,i){var r=Ue,s=jr.transition;jr.transition=null;try{Ue=4,Wc(t,e,n,i)}finally{Ue=r,jr.transition=s}}function Wc(t,e,n,i){if(Aa){var r=qu(t,e,n,i);if(r===null)Fl(t,e,i,La,n),qf(t,i);else if(G0(r,t,e,n,i))i.stopPropagation();else if(qf(t,i),e&4&&-1<V0.indexOf(t)){for(;r!==null;){var s=So(r);if(s!==null&&Op(s),s=qu(t,e,n,i),s===null&&Fl(t,e,i,La,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fl(t,e,i,null,n)}}var La=null;function qu(t,e,n,i){if(La=null,t=Oc(i),t=Xi(t),t!==null)if(e=dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return La=t,null}function Hp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R0()){case Bc:return 1;case Fp:return 4;case Ca:case I0:return 16;case zp:return 536870912;default:return 16}default:return 16}}var gi=null,Hc=null,fa=null;function jp(){if(fa)return fa;var t,e=Hc,n=e.length,i,r="value"in gi?gi.value:gi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fa=r.slice(t,1<i?1-i:void 0)}function da(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function Yf(){return!1}function on(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Io:Yf,this.isPropagationStopped=Yf,this}return Ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=on(us),yo=Ke({},us,{view:0,detail:0}),X0=on(yo),Cl,bl,xs,Ja=Ke({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xs&&(xs&&t.type==="mousemove"?(Cl=t.screenX-xs.screenX,bl=t.screenY-xs.screenY):bl=Cl=0,xs=t),Cl)},movementY:function(t){return"movementY"in t?t.movementY:bl}}),Zf=on(Ja),q0=Ke({},Ja,{dataTransfer:0}),$0=on(q0),Y0=Ke({},yo,{relatedTarget:0}),Al=on(Y0),Z0=Ke({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),K0=on(Z0),Q0=Ke({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),J0=on(Q0),e_=Ke({},us,{data:0}),Kf=on(e_),t_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=i_[t])?!!e[t]:!1}function Xc(){return r_}var s_=Ke({},yo,{key:function(t){if(t.key){var e=t_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?n_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(t){return t.type==="keypress"?da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),o_=on(s_),a_=Ke({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=on(a_),l_=Ke({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),u_=on(l_),c_=Ke({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),f_=on(c_),d_=Ke({},Ja,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h_=on(d_),p_=[9,13,27,32],qc=ti&&"CompositionEvent"in window,Vs=null;ti&&"documentMode"in document&&(Vs=document.documentMode);var m_=ti&&"TextEvent"in window&&!Vs,Xp=ti&&(!qc||Vs&&8<Vs&&11>=Vs),Jf=String.fromCharCode(32),ed=!1;function qp(t,e){switch(t){case"keyup":return p_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function g_(t,e){switch(t){case"compositionend":return $p(e);case"keypress":return e.which!==32?null:(ed=!0,Jf);case"textInput":return t=e.data,t===Jf&&ed?null:t;default:return null}}function __(t,e){if(Dr)return t==="compositionend"||!qc&&qp(t,e)?(t=jp(),fa=Hc=gi=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xp&&e.locale!=="ko"?null:e.data;default:return null}}var v_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v_[t.type]:e==="textarea"}function Yp(t,e,n,i){Cp(i),e=Pa(e,"onChange"),0<e.length&&(n=new jc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Gs=null,no=null;function x_(t){om(t,0)}function el(t){var e=Nr(t);if(xp(e))return t}function y_(t,e){if(t==="change")return e}var Zp=!1;if(ti){var Ll;if(ti){var Pl="oninput"in document;if(!Pl){var nd=document.createElement("div");nd.setAttribute("oninput","return;"),Pl=typeof nd.oninput=="function"}Ll=Pl}else Ll=!1;Zp=Ll&&(!document.documentMode||9<document.documentMode)}function id(){Gs&&(Gs.detachEvent("onpropertychange",Kp),no=Gs=null)}function Kp(t){if(t.propertyName==="value"&&el(no)){var e=[];Yp(e,no,t,Oc(t)),Pp(x_,e)}}function S_(t,e,n){t==="focusin"?(id(),Gs=e,no=n,Gs.attachEvent("onpropertychange",Kp)):t==="focusout"&&id()}function M_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return el(no)}function w_(t,e){if(t==="click")return el(e)}function E_(t,e){if(t==="input"||t==="change")return el(e)}function T_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:T_;function io(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Lu.call(e,r)||!Pn(t[r],e[r]))return!1}return!0}function rd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sd(t,e){var n=rd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rd(n)}}function Qp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jp(){for(var t=window,e=wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wa(t.document)}return e}function $c(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function C_(t){var e=Jp(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qp(n.ownerDocument.documentElement,n)){if(i!==null&&$c(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sd(n,s);var o=sd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b_=ti&&"documentMode"in document&&11>=document.documentMode,Rr=null,$u=null,Ws=null,Yu=!1;function od(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||Rr==null||Rr!==wa(i)||(i=Rr,"selectionStart"in i&&$c(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ws&&io(Ws,i)||(Ws=i,i=Pa($u,"onSelect"),0<i.length&&(e=new jc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Rr)))}function No(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ir={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},Dl={},em={};ti&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function tl(t){if(Dl[t])return Dl[t];if(!Ir[t])return t;var e=Ir[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in em)return Dl[t]=e[n];return t}var tm=tl("animationend"),nm=tl("animationiteration"),im=tl("animationstart"),rm=tl("transitionend"),sm=new Map,ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Di(t,e){sm.set(t,e),fr(e,[t])}for(var Rl=0;Rl<ad.length;Rl++){var Il=ad[Rl],A_=Il.toLowerCase(),L_=Il[0].toUpperCase()+Il.slice(1);Di(A_,"on"+L_)}Di(tm,"onAnimationEnd");Di(nm,"onAnimationIteration");Di(im,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(rm,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function ld(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,A0(i,e,void 0,t),t.currentTarget=null}function om(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ld(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ld(r,a,u),s=l}}}if(Ta)throw t=Hu,Ta=!1,Hu=null,t}function Ge(t,e){var n=e[ec];n===void 0&&(n=e[ec]=new Set);var i=t+"__bubble";n.has(i)||(am(e,t,2,!1),n.add(i))}function Nl(t,e,n){var i=0;e&&(i|=4),am(n,t,i,e)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[Fo]){t[Fo]=!0,pp.forEach(function(n){n!=="selectionchange"&&(P_.has(n)||Nl(n,!1,t),Nl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fo]||(e[Fo]=!0,Nl("selectionchange",!1,e))}}function am(t,e,n,i){switch(Hp(e)){case 1:var r=H0;break;case 4:r=j0;break;default:r=Wc}n=r.bind(null,e,n,t),r=void 0,!Wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Fl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Xi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Pp(function(){var u=s,c=Oc(n),d=[];e:{var f=sm.get(t);if(f!==void 0){var g=jc,x=t;switch(t){case"keypress":if(da(n)===0)break e;case"keydown":case"keyup":g=o_;break;case"focusin":x="focus",g=Al;break;case"focusout":x="blur",g=Al;break;case"beforeblur":case"afterblur":g=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=u_;break;case tm:case nm:case im:g=K0;break;case rm:g=f_;break;case"scroll":g=X0;break;case"wheel":g=h_;break;case"copy":case"cut":case"paste":g=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qf}var h=(e&4)!==0,p=!h&&t==="scroll",m=h?f!==null?f+"Capture":null:f;h=[];for(var _=u,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,m!==null&&(S=Qs(_,m),S!=null&&h.push(so(_,S,v)))),p)break;_=_.return}0<h.length&&(f=new g(f,x,null,n,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Vu&&(x=n.relatedTarget||n.fromElement)&&(Xi(x)||x[ni]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?Xi(x):null,x!==null&&(p=dr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(h=Zf,S="onMouseLeave",m="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(h=Qf,S="onPointerLeave",m="onPointerEnter",_="pointer"),p=g==null?f:Nr(g),v=x==null?f:Nr(x),f=new h(S,_+"leave",g,n,c),f.target=p,f.relatedTarget=v,S=null,Xi(c)===u&&(h=new h(m,_+"enter",x,n,c),h.target=v,h.relatedTarget=p,S=h),p=S,g&&x)t:{for(h=g,m=x,_=0,v=h;v;v=hr(v))_++;for(v=0,S=m;S;S=hr(S))v++;for(;0<_-v;)h=hr(h),_--;for(;0<v-_;)m=hr(m),v--;for(;_--;){if(h===m||m!==null&&h===m.alternate)break t;h=hr(h),m=hr(m)}h=null}else h=null;g!==null&&ud(d,f,g,h,!1),x!==null&&p!==null&&ud(d,p,x,h,!0)}}e:{if(f=u?Nr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var M=y_;else if(td(f))if(Zp)M=E_;else{M=M_;var b=S_}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=w_);if(M&&(M=M(t,u))){Yp(d,M,n,c);break e}b&&b(t,f,u),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&zu(f,"number",f.value)}switch(b=u?Nr(u):window,t){case"focusin":(td(b)||b.contentEditable==="true")&&(Rr=b,$u=u,Ws=null);break;case"focusout":Ws=$u=Rr=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,od(d,n,c);break;case"selectionchange":if(b_)break;case"keydown":case"keyup":od(d,n,c)}var A;if(qc)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Dr?qp(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Xp&&n.locale!=="ko"&&(Dr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Dr&&(A=jp()):(gi=c,Hc="value"in gi?gi.value:gi.textContent,Dr=!0)),b=Pa(u,y),0<b.length&&(y=new Kf(y,t,null,n,c),d.push({event:y,listeners:b}),A?y.data=A:(A=$p(n),A!==null&&(y.data=A)))),(A=m_?g_(t,n):__(t,n))&&(u=Pa(u,"onBeforeInput"),0<u.length&&(c=new Kf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}om(d,e)})}function so(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qs(t,n),s!=null&&i.unshift(so(t,s,r)),s=Qs(t,e),s!=null&&i.push(so(t,s,r))),t=t.return}return i}function hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ud(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Qs(n,s),l!=null&&o.unshift(so(n,l,a))):r||(l=Qs(n,s),l!=null&&o.push(so(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var D_=/\r\n?/g,R_=/\u0000|\uFFFD/g;function cd(t){return(typeof t=="string"?t:""+t).replace(D_,`
`).replace(R_,"")}function zo(t,e,n){if(e=cd(e),cd(t)!==e&&n)throw Error(Y(425))}function Da(){}var Zu=null,Ku=null;function Qu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,I_=typeof clearTimeout=="function"?clearTimeout:void 0,fd=typeof Promise=="function"?Promise:void 0,N_=typeof queueMicrotask=="function"?queueMicrotask:typeof fd<"u"?function(t){return fd.resolve(null).then(t).catch(F_)}:Ju;function F_(t){setTimeout(function(){throw t})}function zl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),to(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);to(e)}function Mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),Fn="__reactFiber$"+cs,oo="__reactProps$"+cs,ni="__reactContainer$"+cs,ec="__reactEvents$"+cs,z_="__reactListeners$"+cs,k_="__reactHandles$"+cs;function Xi(t){var e=t[Fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ni]||n[Fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dd(t);t!==null;){if(n=t[Fn])return n;t=dd(t)}return e}t=n,n=t.parentNode}return null}function So(t){return t=t[Fn]||t[ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Nr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Y(33))}function nl(t){return t[oo]||null}var tc=[],Fr=-1;function Ri(t){return{current:t}}function He(t){0>Fr||(t.current=tc[Fr],tc[Fr]=null,Fr--)}function Ve(t,e){Fr++,tc[Fr]=t.current,t.current=e}var Li={},Ct=Ri(Li),Bt=Ri(!1),tr=Li;function Qr(t,e){var n=t.type.contextTypes;if(!n)return Li;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Vt(t){return t=t.childContextTypes,t!=null}function Ra(){He(Bt),He(Ct)}function hd(t,e,n){if(Ct.current!==Li)throw Error(Y(168));Ve(Ct,e),Ve(Bt,n)}function lm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Y(108,S0(t)||"Unknown",r));return Ke({},n,i)}function Ia(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Li,tr=Ct.current,Ve(Ct,t),Ve(Bt,Bt.current),!0}function pd(t,e,n){var i=t.stateNode;if(!i)throw Error(Y(169));n?(t=lm(t,e,tr),i.__reactInternalMemoizedMergedChildContext=t,He(Bt),He(Ct),Ve(Ct,t)):He(Bt),Ve(Bt,n)}var $n=null,il=!1,kl=!1;function um(t){$n===null?$n=[t]:$n.push(t)}function U_(t){il=!0,um(t)}function Ii(){if(!kl&&$n!==null){kl=!0;var t=0,e=Ue;try{var n=$n;for(Ue=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}$n=null,il=!1}catch(r){throw $n!==null&&($n=$n.slice(t+1)),Np(Bc,Ii),r}finally{Ue=e,kl=!1}}return null}var zr=[],kr=0,Na=null,Fa=0,fn=[],dn=0,nr=null,Kn=1,Qn="";function Vi(t,e){zr[kr++]=Fa,zr[kr++]=Na,Na=t,Fa=e}function cm(t,e,n){fn[dn++]=Kn,fn[dn++]=Qn,fn[dn++]=nr,nr=t;var i=Kn;t=Qn;var r=32-An(i)-1;i&=~(1<<r),n+=1;var s=32-An(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Kn=1<<32-An(e)+r|n<<r|i,Qn=s+t}else Kn=1<<s|n<<r|i,Qn=t}function Yc(t){t.return!==null&&(Vi(t,1),cm(t,1,0))}function Zc(t){for(;t===Na;)Na=zr[--kr],zr[kr]=null,Fa=zr[--kr],zr[kr]=null;for(;t===nr;)nr=fn[--dn],fn[dn]=null,Qn=fn[--dn],fn[dn]=null,Kn=fn[--dn],fn[dn]=null}var en=null,Qt=null,qe=!1,Tn=null;function fm(t,e){var n=pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function md(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,en=t,Qt=Mi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,en=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=nr!==null?{id:Kn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,en=t,Qt=null,!0):!1;default:return!1}}function nc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ic(t){if(qe){var e=Qt;if(e){var n=e;if(!md(t,e)){if(nc(t))throw Error(Y(418));e=Mi(n.nextSibling);var i=en;e&&md(t,e)?fm(i,n):(t.flags=t.flags&-4097|2,qe=!1,en=t)}}else{if(nc(t))throw Error(Y(418));t.flags=t.flags&-4097|2,qe=!1,en=t}}}function gd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;en=t}function ko(t){if(t!==en)return!1;if(!qe)return gd(t),qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qu(t.type,t.memoizedProps)),e&&(e=Qt)){if(nc(t))throw dm(),Error(Y(418));for(;e;)fm(t,e),e=Mi(e.nextSibling)}if(gd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Y(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=Mi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=en?Mi(t.stateNode.nextSibling):null;return!0}function dm(){for(var t=Qt;t;)t=Mi(t.nextSibling)}function Jr(){Qt=en=null,qe=!1}function Kc(t){Tn===null?Tn=[t]:Tn.push(t)}var O_=si.ReactCurrentBatchConfig;function wn(t,e){if(t&&t.defaultProps){e=Ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var za=Ri(null),ka=null,Ur=null,Qc=null;function Jc(){Qc=Ur=ka=null}function ef(t){var e=za.current;He(za),t._currentValue=e}function rc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Xr(t,e){ka=t,Qc=Ur=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function gn(t){var e=t._currentValue;if(Qc!==t)if(t={context:t,memoizedValue:e,next:null},Ur===null){if(ka===null)throw Error(Y(308));Ur=t,ka.dependencies={lanes:0,firstContext:t}}else Ur=Ur.next=t;return e}var qi=null;function tf(t){qi===null?qi=[t]:qi.push(t)}function hm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,tf(e)):(n.next=r.next,r.next=n),e.interleaved=n,ii(t,i)}function ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hi=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Re&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ii(t,n)}return r=i.interleaved,r===null?(e.next=e,tf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ii(t,n)}function ha(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vc(t,n)}}function _d(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ua(t,e,n,i){var r=t.updateQueue;hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,h=a;switch(f=e,g=n,h.tag){case 1:if(x=h.payload,typeof x=="function"){d=x.call(g,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,f=typeof x=="function"?x.call(g,d,f):x,f==null)break e;d=Ke({},d,f);break e;case 2:hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);rr|=o,t.lanes=o,t.memoizedState=d}}function vd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Y(191,r));r.call(i)}}}var mm=new hp.Component().refs;function sc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rl={isMounted:function(t){return(t=t._reactInternals)?dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=It(),r=Ti(t),s=Jn(i,r);s.payload=e,n!=null&&(s.callback=n),e=wi(t,s,r),e!==null&&(Ln(e,t,r,i),ha(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=It(),r=Ti(t),s=Jn(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wi(t,s,r),e!==null&&(Ln(e,t,r,i),ha(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),i=Ti(t),r=Jn(n,i);r.tag=2,e!=null&&(r.callback=e),e=wi(t,r,i),e!==null&&(Ln(e,t,i,n),ha(e,t,i))}};function xd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!io(n,i)||!io(r,s):!0}function gm(t,e,n){var i=!1,r=Li,s=e.contextType;return typeof s=="object"&&s!==null?s=gn(s):(r=Vt(e)?tr:Ct.current,i=e.contextTypes,s=(i=i!=null)?Qr(t,r):Li),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function yd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&rl.enqueueReplaceState(e,e.state,null)}function oc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=mm,nf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=gn(s):(s=Vt(e)?tr:Ct.current,r.context=Qr(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&rl.enqueueReplaceState(r,r.state,null),Ua(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var i=n.stateNode}if(!i)throw Error(Y(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===mm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,t))}return t}function Uo(t,e){throw t=Object.prototype.toString.call(e),Error(Y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sd(t){var e=t._init;return e(t._payload)}function _m(t){function e(m,_){if(t){var v=m.deletions;v===null?(m.deletions=[_],m.flags|=16):v.push(_)}}function n(m,_){if(!t)return null;for(;_!==null;)e(m,_),_=_.sibling;return null}function i(m,_){for(m=new Map;_!==null;)_.key!==null?m.set(_.key,_):m.set(_.index,_),_=_.sibling;return m}function r(m,_){return m=Ci(m,_),m.index=0,m.sibling=null,m}function s(m,_,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<_?(m.flags|=2,_):v):(m.flags|=2,_)):(m.flags|=1048576,_)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,_,v,S){return _===null||_.tag!==6?(_=Hl(v,m.mode,S),_.return=m,_):(_=r(_,v),_.return=m,_)}function l(m,_,v,S){var M=v.type;return M===Pr?c(m,_,v.props.children,S,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===di&&Sd(M)===_.type)?(S=r(_,v.props),S.ref=ys(m,_,v),S.return=m,S):(S=xa(v.type,v.key,v.props,null,m.mode,S),S.ref=ys(m,_,v),S.return=m,S)}function u(m,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=jl(v,m.mode,S),_.return=m,_):(_=r(_,v.children||[]),_.return=m,_)}function c(m,_,v,S,M){return _===null||_.tag!==7?(_=Qi(v,m.mode,S,M),_.return=m,_):(_=r(_,v),_.return=m,_)}function d(m,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Hl(""+_,m.mode,v),_.return=m,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case bo:return v=xa(_.type,_.key,_.props,null,m.mode,v),v.ref=ys(m,null,_),v.return=m,v;case Lr:return _=jl(_,m.mode,v),_.return=m,_;case di:var S=_._init;return d(m,S(_._payload),v)}if(Is(_)||ms(_))return _=Qi(_,m.mode,v,null),_.return=m,_;Uo(m,_)}return null}function f(m,_,v,S){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(m,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:return v.key===M?l(m,_,v,S):null;case Lr:return v.key===M?u(m,_,v,S):null;case di:return M=v._init,f(m,_,M(v._payload),S)}if(Is(v)||ms(v))return M!==null?null:c(m,_,v,S,null);Uo(m,v)}return null}function g(m,_,v,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(v)||null,a(_,m,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case bo:return m=m.get(S.key===null?v:S.key)||null,l(_,m,S,M);case Lr:return m=m.get(S.key===null?v:S.key)||null,u(_,m,S,M);case di:var b=S._init;return g(m,_,v,b(S._payload),M)}if(Is(S)||ms(S))return m=m.get(v)||null,c(_,m,S,M,null);Uo(_,S)}return null}function x(m,_,v,S){for(var M=null,b=null,A=_,y=_=0,C=null;A!==null&&y<v.length;y++){A.index>y?(C=A,A=null):C=A.sibling;var L=f(m,A,v[y],S);if(L===null){A===null&&(A=C);break}t&&A&&L.alternate===null&&e(m,A),_=s(L,_,y),b===null?M=L:b.sibling=L,b=L,A=C}if(y===v.length)return n(m,A),qe&&Vi(m,y),M;if(A===null){for(;y<v.length;y++)A=d(m,v[y],S),A!==null&&(_=s(A,_,y),b===null?M=A:b.sibling=A,b=A);return qe&&Vi(m,y),M}for(A=i(m,A);y<v.length;y++)C=g(A,m,y,v[y],S),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?y:C.key),_=s(C,_,y),b===null?M=C:b.sibling=C,b=C);return t&&A.forEach(function($){return e(m,$)}),qe&&Vi(m,y),M}function h(m,_,v,S){var M=ms(v);if(typeof M!="function")throw Error(Y(150));if(v=M.call(v),v==null)throw Error(Y(151));for(var b=M=null,A=_,y=_=0,C=null,L=v.next();A!==null&&!L.done;y++,L=v.next()){A.index>y?(C=A,A=null):C=A.sibling;var $=f(m,A,L.value,S);if($===null){A===null&&(A=C);break}t&&A&&$.alternate===null&&e(m,A),_=s($,_,y),b===null?M=$:b.sibling=$,b=$,A=C}if(L.done)return n(m,A),qe&&Vi(m,y),M;if(A===null){for(;!L.done;y++,L=v.next())L=d(m,L.value,S),L!==null&&(_=s(L,_,y),b===null?M=L:b.sibling=L,b=L);return qe&&Vi(m,y),M}for(A=i(m,A);!L.done;y++,L=v.next())L=g(A,m,y,L.value,S),L!==null&&(t&&L.alternate!==null&&A.delete(L.key===null?y:L.key),_=s(L,_,y),b===null?M=L:b.sibling=L,b=L);return t&&A.forEach(function(Z){return e(m,Z)}),qe&&Vi(m,y),M}function p(m,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Pr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:e:{for(var M=v.key,b=_;b!==null;){if(b.key===M){if(M=v.type,M===Pr){if(b.tag===7){n(m,b.sibling),_=r(b,v.props.children),_.return=m,m=_;break e}}else if(b.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===di&&Sd(M)===b.type){n(m,b.sibling),_=r(b,v.props),_.ref=ys(m,b,v),_.return=m,m=_;break e}n(m,b);break}else e(m,b);b=b.sibling}v.type===Pr?(_=Qi(v.props.children,m.mode,S,v.key),_.return=m,m=_):(S=xa(v.type,v.key,v.props,null,m.mode,S),S.ref=ys(m,_,v),S.return=m,m=S)}return o(m);case Lr:e:{for(b=v.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(m,_.sibling),_=r(_,v.children||[]),_.return=m,m=_;break e}else{n(m,_);break}else e(m,_);_=_.sibling}_=jl(v,m.mode,S),_.return=m,m=_}return o(m);case di:return b=v._init,p(m,_,b(v._payload),S)}if(Is(v))return x(m,_,v,S);if(ms(v))return h(m,_,v,S);Uo(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(m,_.sibling),_=r(_,v),_.return=m,m=_):(n(m,_),_=Hl(v,m.mode,S),_.return=m,m=_),o(m)):n(m,_)}return p}var es=_m(!0),vm=_m(!1),Mo={},kn=Ri(Mo),ao=Ri(Mo),lo=Ri(Mo);function $i(t){if(t===Mo)throw Error(Y(174));return t}function rf(t,e){switch(Ve(lo,e),Ve(ao,t),Ve(kn,Mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uu(e,t)}He(kn),Ve(kn,e)}function ts(){He(kn),He(ao),He(lo)}function xm(t){$i(lo.current);var e=$i(kn.current),n=Uu(e,t.type);e!==n&&(Ve(ao,t),Ve(kn,n))}function sf(t){ao.current===t&&(He(kn),He(ao))}var Ye=Ri(0);function Oa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ul=[];function of(){for(var t=0;t<Ul.length;t++)Ul[t]._workInProgressVersionPrimary=null;Ul.length=0}var pa=si.ReactCurrentDispatcher,Ol=si.ReactCurrentBatchConfig,ir=0,Ze=null,at=null,mt=null,Ba=!1,Hs=!1,uo=0,B_=0;function Mt(){throw Error(Y(321))}function af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function lf(t,e,n,i,r,s){if(ir=s,Ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pa.current=t===null||t.memoizedState===null?H_:j_,t=n(i,r),Hs){s=0;do{if(Hs=!1,uo=0,25<=s)throw Error(Y(301));s+=1,mt=at=null,e.updateQueue=null,pa.current=X_,t=n(i,r)}while(Hs)}if(pa.current=Va,e=at!==null&&at.next!==null,ir=0,mt=at=Ze=null,Ba=!1,e)throw Error(Y(300));return t}function uf(){var t=uo!==0;return uo=0,t}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Ze.memoizedState=mt=t:mt=mt.next=t,mt}function _n(){if(at===null){var t=Ze.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=mt===null?Ze.memoizedState:mt.next;if(e!==null)mt=e,at=t;else{if(t===null)throw Error(Y(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},mt===null?Ze.memoizedState=mt=t:mt=mt.next=t}return mt}function co(t,e){return typeof e=="function"?e(t):e}function Bl(t){var e=_n(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var i=at,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ir&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ze.lanes|=c,rr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Pn(i,e.memoizedState)||(Ot=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ze.lanes|=s,rr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vl(t){var e=_n(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Pn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ym(){}function Sm(t,e){var n=Ze,i=_n(),r=e(),s=!Pn(i.memoizedState,r);if(s&&(i.memoizedState=r,Ot=!0),i=i.queue,cf(Em.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||mt!==null&&mt.memoizedState.tag&1){if(n.flags|=2048,fo(9,wm.bind(null,n,i,r,e),void 0,null),gt===null)throw Error(Y(349));ir&30||Mm(n,e,r)}return r}function Mm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ze.updateQueue,e===null?(e={lastEffect:null,stores:null},Ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wm(t,e,n,i){e.value=n,e.getSnapshot=i,Tm(e)&&Cm(t)}function Em(t,e,n){return n(function(){Tm(e)&&Cm(t)})}function Tm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function Cm(t){var e=ii(t,1);e!==null&&Ln(e,t,1,-1)}function Md(t){var e=Rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:t},e.queue=t,t=t.dispatch=W_.bind(null,Ze,t),[e.memoizedState,t]}function fo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ze.updateQueue,e===null?(e={lastEffect:null,stores:null},Ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function bm(){return _n().memoizedState}function ma(t,e,n,i){var r=Rn();Ze.flags|=t,r.memoizedState=fo(1|e,n,void 0,i===void 0?null:i)}function sl(t,e,n,i){var r=_n();i=i===void 0?null:i;var s=void 0;if(at!==null){var o=at.memoizedState;if(s=o.destroy,i!==null&&af(i,o.deps)){r.memoizedState=fo(e,n,s,i);return}}Ze.flags|=t,r.memoizedState=fo(1|e,n,s,i)}function wd(t,e){return ma(8390656,8,t,e)}function cf(t,e){return sl(2048,8,t,e)}function Am(t,e){return sl(4,2,t,e)}function Lm(t,e){return sl(4,4,t,e)}function Pm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dm(t,e,n){return n=n!=null?n.concat([t]):null,sl(4,4,Pm.bind(null,e,t),n)}function ff(){}function Rm(t,e){var n=_n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&af(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Im(t,e){var n=_n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&af(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Nm(t,e,n){return ir&21?(Pn(n,e)||(n=kp(),Ze.lanes|=n,rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function V_(t,e){var n=Ue;Ue=n!==0&&4>n?n:4,t(!0);var i=Ol.transition;Ol.transition={};try{t(!1),e()}finally{Ue=n,Ol.transition=i}}function Fm(){return _n().memoizedState}function G_(t,e,n){var i=Ti(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},zm(t))km(e,n);else if(n=hm(t,e,n,i),n!==null){var r=It();Ln(n,t,i,r),Um(n,e,i)}}function W_(t,e,n){var i=Ti(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(zm(t))km(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Pn(a,o)){var l=e.interleaved;l===null?(r.next=r,tf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=hm(t,e,r,i),n!==null&&(r=It(),Ln(n,t,i,r),Um(n,e,i))}}function zm(t){var e=t.alternate;return t===Ze||e!==null&&e===Ze}function km(t,e){Hs=Ba=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Um(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vc(t,n)}}var Va={readContext:gn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},H_={readContext:gn,useCallback:function(t,e){return Rn().memoizedState=[t,e===void 0?null:e],t},useContext:gn,useEffect:wd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ma(4194308,4,Pm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ma(4194308,4,t,e)},useInsertionEffect:function(t,e){return ma(4,2,t,e)},useMemo:function(t,e){var n=Rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Rn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=G_.bind(null,Ze,t),[i.memoizedState,t]},useRef:function(t){var e=Rn();return t={current:t},e.memoizedState=t},useState:Md,useDebugValue:ff,useDeferredValue:function(t){return Rn().memoizedState=t},useTransition:function(){var t=Md(!1),e=t[0];return t=V_.bind(null,t[1]),Rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ze,r=Rn();if(qe){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=e(),gt===null)throw Error(Y(349));ir&30||Mm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,wd(Em.bind(null,i,s,t),[t]),i.flags|=2048,fo(9,wm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Rn(),e=gt.identifierPrefix;if(qe){var n=Qn,i=Kn;n=(i&~(1<<32-An(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=B_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},j_={readContext:gn,useCallback:Rm,useContext:gn,useEffect:cf,useImperativeHandle:Dm,useInsertionEffect:Am,useLayoutEffect:Lm,useMemo:Im,useReducer:Bl,useRef:bm,useState:function(){return Bl(co)},useDebugValue:ff,useDeferredValue:function(t){var e=_n();return Nm(e,at.memoizedState,t)},useTransition:function(){var t=Bl(co)[0],e=_n().memoizedState;return[t,e]},useMutableSource:ym,useSyncExternalStore:Sm,useId:Fm,unstable_isNewReconciler:!1},X_={readContext:gn,useCallback:Rm,useContext:gn,useEffect:cf,useImperativeHandle:Dm,useInsertionEffect:Am,useLayoutEffect:Lm,useMemo:Im,useReducer:Vl,useRef:bm,useState:function(){return Vl(co)},useDebugValue:ff,useDeferredValue:function(t){var e=_n();return at===null?e.memoizedState=t:Nm(e,at.memoizedState,t)},useTransition:function(){var t=Vl(co)[0],e=_n().memoizedState;return[t,e]},useMutableSource:ym,useSyncExternalStore:Sm,useId:Fm,unstable_isNewReconciler:!1};function ns(t,e){try{var n="",i=e;do n+=y0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Gl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ac(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var q_=typeof WeakMap=="function"?WeakMap:Map;function Om(t,e,n){n=Jn(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Wa||(Wa=!0,_c=i),ac(t,e)},n}function Bm(t,e,n){n=Jn(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ac(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ac(t,e),typeof i!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ed(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new q_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=av.bind(null,t,e,n),e.then(t,t))}function Td(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jn(-1,1),e.tag=2,wi(n,e,1))),n.lanes|=1),t)}var $_=si.ReactCurrentOwner,Ot=!1;function Dt(t,e,n,i){e.child=t===null?vm(e,null,n,i):es(e,t.child,n,i)}function bd(t,e,n,i,r){n=n.render;var s=e.ref;return Xr(e,r),i=lf(t,e,n,i,s,r),n=uf(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ri(t,e,r)):(qe&&n&&Yc(e),e.flags|=1,Dt(t,e,i,r),e.child)}function Ad(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vm(t,e,s,i,r)):(t=xa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(o,i)&&t.ref===e.ref)return ri(t,e,r)}return e.flags|=1,t=Ci(s,i),t.ref=e.ref,t.return=e,e.child=t}function Vm(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(io(s,i)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,ri(t,e,r)}return lc(t,e,n,i,r)}function Gm(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(Br,Yt),Yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ve(Br,Yt),Yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ve(Br,Yt),Yt|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ve(Br,Yt),Yt|=i;return Dt(t,e,r,n),e.child}function Wm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lc(t,e,n,i,r){var s=Vt(n)?tr:Ct.current;return s=Qr(e,s),Xr(e,r),n=lf(t,e,n,i,s,r),i=uf(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ri(t,e,r)):(qe&&i&&Yc(e),e.flags|=1,Dt(t,e,n,r),e.child)}function Ld(t,e,n,i,r){if(Vt(n)){var s=!0;Ia(e)}else s=!1;if(Xr(e,r),e.stateNode===null)ga(t,e),gm(e,n,i),oc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Vt(n)?tr:Ct.current,u=Qr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&yd(e,o,i,u),hi=!1;var f=e.memoizedState;o.state=f,Ua(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Bt.current||hi?(typeof c=="function"&&(sc(e,n,c,i),l=e.memoizedState),(a=hi||xd(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,pm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:wn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=gn(l):(l=Vt(n)?tr:Ct.current,l=Qr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&yd(e,o,i,l),hi=!1,f=e.memoizedState,o.state=f,Ua(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||Bt.current||hi?(typeof g=="function"&&(sc(e,n,g,i),x=e.memoizedState),(u=hi||xd(e,n,u,i,f,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return uc(t,e,n,i,s,r)}function uc(t,e,n,i,r,s){Wm(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&pd(e,n,!1),ri(t,e,s);i=e.stateNode,$_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=es(e,t.child,null,s),e.child=es(e,null,a,s)):Dt(t,e,a,s),e.memoizedState=i.state,r&&pd(e,n,!0),e.child}function Hm(t){var e=t.stateNode;e.pendingContext?hd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hd(t,e.context,!1),rf(t,e.containerInfo)}function Pd(t,e,n,i,r){return Jr(),Kc(r),e.flags|=256,Dt(t,e,n,i),e.child}var cc={dehydrated:null,treeContext:null,retryLane:0};function fc(t){return{baseLanes:t,cachePool:null,transitions:null}}function jm(t,e,n){var i=e.pendingProps,r=Ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ve(Ye,r&1),t===null)return ic(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ll(o,i,0,null),t=Qi(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fc(n),e.memoizedState=cc,t):df(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Y_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ci(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ci(a,s):(s=Qi(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?fc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cc,i}return s=t.child,t=s.sibling,i=Ci(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function df(t,e){return e=ll({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oo(t,e,n,i){return i!==null&&Kc(i),es(e,t.child,null,n),t=df(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Y_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Gl(Error(Y(422))),Oo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ll({mode:"visible",children:i.children},r,0,null),s=Qi(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&es(e,t.child,null,o),e.child.memoizedState=fc(o),e.memoizedState=cc,s);if(!(e.mode&1))return Oo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Y(419)),i=Gl(s,i,void 0),Oo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Ot||a){if(i=gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ii(t,r),Ln(i,t,r,-1))}return vf(),i=Gl(Error(Y(421))),Oo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=lv.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Qt=Mi(r.nextSibling),en=e,qe=!0,Tn=null,t!==null&&(fn[dn++]=Kn,fn[dn++]=Qn,fn[dn++]=nr,Kn=t.id,Qn=t.overflow,nr=e),e=df(e,i.children),e.flags|=4096,e)}function Dd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rc(t.return,e,n)}function Wl(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Xm(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Dt(t,e,i.children,n),i=Ye.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dd(t,n,e);else if(t.tag===19)Dd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ve(Ye,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Oa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Wl(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Oa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Wl(e,!0,n,null,s);break;case"together":Wl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Y(153));if(e.child!==null){for(t=e.child,n=Ci(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ci(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Z_(t,e,n){switch(e.tag){case 3:Hm(e),Jr();break;case 5:xm(e);break;case 1:Vt(e.type)&&Ia(e);break;case 4:rf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ve(za,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ve(Ye,Ye.current&1),e.flags|=128,null):n&e.child.childLanes?jm(t,e,n):(Ve(Ye,Ye.current&1),t=ri(t,e,n),t!==null?t.sibling:null);Ve(Ye,Ye.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Xm(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ve(Ye,Ye.current),i)break;return null;case 22:case 23:return e.lanes=0,Gm(t,e,n)}return ri(t,e,n)}var qm,dc,$m,Ym;qm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dc=function(){};$m=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,$i(kn.current);var s=null;switch(n){case"input":r=Nu(t,r),i=Nu(t,i),s=[];break;case"select":r=Ke({},r,{value:void 0}),i=Ke({},i,{value:void 0}),s=[];break;case"textarea":r=ku(t,r),i=ku(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Da)}Ou(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ge("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ym=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ss(t,e){if(!qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function K_(t,e,n){var i=e.pendingProps;switch(Zc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return Vt(e.type)&&Ra(),wt(e),null;case 3:return i=e.stateNode,ts(),He(Bt),He(Ct),of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ko(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tn!==null&&(yc(Tn),Tn=null))),dc(t,e),wt(e),null;case 5:sf(e);var r=$i(lo.current);if(n=e.type,t!==null&&e.stateNode!=null)$m(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Y(166));return wt(e),null}if(t=$i(kn.current),ko(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Fn]=e,i[oo]=s,t=(e.mode&1)!==0,n){case"dialog":Ge("cancel",i),Ge("close",i);break;case"iframe":case"object":case"embed":Ge("load",i);break;case"video":case"audio":for(r=0;r<Fs.length;r++)Ge(Fs[r],i);break;case"source":Ge("error",i);break;case"img":case"image":case"link":Ge("error",i),Ge("load",i);break;case"details":Ge("toggle",i);break;case"input":Bf(i,s),Ge("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ge("invalid",i);break;case"textarea":Gf(i,s),Ge("invalid",i)}Ou(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,t),r=["children",""+a]):Zs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ge("scroll",i)}switch(n){case"input":Ao(i),Vf(i,s,!0);break;case"textarea":Ao(i),Wf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Da)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Fn]=e,t[oo]=i,qm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bu(n,i),n){case"dialog":Ge("cancel",t),Ge("close",t),r=i;break;case"iframe":case"object":case"embed":Ge("load",t),r=i;break;case"video":case"audio":for(r=0;r<Fs.length;r++)Ge(Fs[r],t);r=i;break;case"source":Ge("error",t),r=i;break;case"img":case"image":case"link":Ge("error",t),Ge("load",t),r=i;break;case"details":Ge("toggle",t),r=i;break;case"input":Bf(t,i),r=Nu(t,i),Ge("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ke({},i,{value:void 0}),Ge("invalid",t);break;case"textarea":Gf(t,i),r=ku(t,i),Ge("invalid",t);break;default:r=i}Ou(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Tp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ks(t,l):typeof l=="number"&&Ks(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ge("scroll",t):l!=null&&Fc(t,s,l,o))}switch(n){case"input":Ao(t),Vf(t,i,!1);break;case"textarea":Ao(t),Wf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ai(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Gr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Gr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Da)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(t&&e.stateNode!=null)Ym(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Y(166));if(n=$i(lo.current),$i(kn.current),ko(e)){if(i=e.stateNode,n=e.memoizedProps,i[Fn]=e,(s=i.nodeValue!==n)&&(t=en,t!==null))switch(t.tag){case 3:zo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Fn]=e,e.stateNode=i}return wt(e),null;case 13:if(He(Ye),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(qe&&Qt!==null&&e.mode&1&&!(e.flags&128))dm(),Jr(),e.flags|=98560,s=!1;else if(s=ko(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Y(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Y(317));s[Fn]=e}else Jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else Tn!==null&&(yc(Tn),Tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ye.current&1?lt===0&&(lt=3):vf())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return ts(),dc(t,e),t===null&&ro(e.stateNode.containerInfo),wt(e),null;case 10:return ef(e.type._context),wt(e),null;case 17:return Vt(e.type)&&Ra(),wt(e),null;case 19:if(He(Ye),s=e.memoizedState,s===null)return wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ss(s,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Oa(t),o!==null){for(e.flags|=128,Ss(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ve(Ye,Ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Je()>is&&(e.flags|=128,i=!0,Ss(s,!1),e.lanes=4194304)}else{if(!i)if(t=Oa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ss(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!qe)return wt(e),null}else 2*Je()-s.renderingStartTime>is&&n!==1073741824&&(e.flags|=128,i=!0,Ss(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Je(),e.sibling=null,n=Ye.current,Ve(Ye,i?n&1|2:n&1),e):(wt(e),null);case 22:case 23:return _f(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Yt&1073741824&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(Y(156,e.tag))}function Q_(t,e){switch(Zc(e),e.tag){case 1:return Vt(e.type)&&Ra(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ts(),He(Bt),He(Ct),of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sf(e),null;case 13:if(He(Ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Y(340));Jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return He(Ye),null;case 4:return ts(),null;case 10:return ef(e.type._context),null;case 22:case 23:return _f(),null;case 24:return null;default:return null}}var Bo=!1,Tt=!1,J_=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Or(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Qe(t,e,i)}else n.current=null}function hc(t,e,n){try{n()}catch(i){Qe(t,e,i)}}var Rd=!1;function ev(t,e){if(Zu=Aa,t=Jp(),$c(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ku={focusedElem:t,selectionRange:n},Aa=!1,ue=e;ue!==null;)if(e=ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ue=t;else for(;ue!==null;){e=ue;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,m=e.stateNode,_=m.getSnapshotBeforeUpdate(e.elementType===e.type?h:wn(e.type,h),p);m.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(S){Qe(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}return x=Rd,Rd=!1,x}function js(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hc(e,n,s)}r=r.next}while(r!==i)}}function ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function pc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Zm(t){var e=t.alternate;e!==null&&(t.alternate=null,Zm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fn],delete e[oo],delete e[ec],delete e[z_],delete e[k_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Km(t){return t.tag===5||t.tag===3||t.tag===4}function Id(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Da));else if(i!==4&&(t=t.child,t!==null))for(mc(t,e,n),t=t.sibling;t!==null;)mc(t,e,n),t=t.sibling}function gc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gc(t,e,n),t=t.sibling;t!==null;)gc(t,e,n),t=t.sibling}var _t=null,En=!1;function ai(t,e,n){for(n=n.child;n!==null;)Qm(t,e,n),n=n.sibling}function Qm(t,e,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:Tt||Or(n,e);case 6:var i=_t,r=En;_t=null,ai(t,e,n),_t=i,En=r,_t!==null&&(En?(t=_t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_t.removeChild(n.stateNode));break;case 18:_t!==null&&(En?(t=_t,n=n.stateNode,t.nodeType===8?zl(t.parentNode,n):t.nodeType===1&&zl(t,n),to(t)):zl(_t,n.stateNode));break;case 4:i=_t,r=En,_t=n.stateNode.containerInfo,En=!0,ai(t,e,n),_t=i,En=r;break;case 0:case 11:case 14:case 15:if(!Tt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hc(n,e,o),r=r.next}while(r!==i)}ai(t,e,n);break;case 1:if(!Tt&&(Or(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Qe(n,e,a)}ai(t,e,n);break;case 21:ai(t,e,n);break;case 22:n.mode&1?(Tt=(i=Tt)||n.memoizedState!==null,ai(t,e,n),Tt=i):ai(t,e,n);break;default:ai(t,e,n)}}function Nd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new J_),e.forEach(function(i){var r=uv.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_t=a.stateNode,En=!1;break e;case 3:_t=a.stateNode.containerInfo,En=!0;break e;case 4:_t=a.stateNode.containerInfo,En=!0;break e}a=a.return}if(_t===null)throw Error(Y(160));Qm(s,o,r),_t=null,En=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Qe(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jm(e,t),e=e.sibling}function Jm(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(e,t),Dn(t),i&4){try{js(3,t,t.return),ol(3,t)}catch(h){Qe(t,t.return,h)}try{js(5,t,t.return)}catch(h){Qe(t,t.return,h)}}break;case 1:xn(e,t),Dn(t),i&512&&n!==null&&Or(n,n.return);break;case 5:if(xn(e,t),Dn(t),i&512&&n!==null&&Or(n,n.return),t.flags&32){var r=t.stateNode;try{Ks(r,"")}catch(h){Qe(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yp(r,s),Bu(a,o);var u=Bu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Tp(r,d):c==="dangerouslySetInnerHTML"?wp(r,d):c==="children"?Ks(r,d):Fc(r,c,d,u)}switch(a){case"input":Fu(r,s);break;case"textarea":Sp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Gr(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Gr(r,!!s.multiple,s.defaultValue,!0):Gr(r,!!s.multiple,s.multiple?[]:"",!1))}r[oo]=s}catch(h){Qe(t,t.return,h)}}break;case 6:if(xn(e,t),Dn(t),i&4){if(t.stateNode===null)throw Error(Y(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(h){Qe(t,t.return,h)}}break;case 3:if(xn(e,t),Dn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(h){Qe(t,t.return,h)}break;case 4:xn(e,t),Dn(t);break;case 13:xn(e,t),Dn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(mf=Je())),i&4&&Nd(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Tt=(u=Tt)||c,xn(e,t),Tt=u):xn(e,t),Dn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ue=t,c=t.child;c!==null;){for(d=ue=c;ue!==null;){switch(f=ue,g=f.child,f.tag){case 0:case 11:case 14:case 15:js(4,f,f.return);break;case 1:Or(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){Qe(i,n,h)}}break;case 5:Or(f,f.return);break;case 22:if(f.memoizedState!==null){zd(d);continue}}g!==null?(g.return=f,ue=g):zd(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ep("display",o))}catch(h){Qe(t,t.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){Qe(t,t.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:xn(e,t),Dn(t),i&4&&Nd(t);break;case 21:break;default:xn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Km(n)){var i=n;break e}n=n.return}throw Error(Y(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ks(r,""),i.flags&=-33);var s=Id(t);gc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Id(t);mc(t,a,o);break;default:throw Error(Y(161))}}catch(l){Qe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tv(t,e,n){ue=t,eg(t)}function eg(t,e,n){for(var i=(t.mode&1)!==0;ue!==null;){var r=ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Bo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Tt;a=Bo;var u=Tt;if(Bo=o,(Tt=l)&&!u)for(ue=r;ue!==null;)o=ue,l=o.child,o.tag===22&&o.memoizedState!==null?kd(r):l!==null?(l.return=o,ue=l):kd(r);for(;s!==null;)ue=s,eg(s),s=s.sibling;ue=r,Bo=a,Tt=u}Fd(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ue=s):Fd(t)}}function Fd(t){for(;ue!==null;){var e=ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Tt||ol(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Tt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&to(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Tt||e.flags&512&&pc(e)}catch(f){Qe(e,e.return,f)}}if(e===t){ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,ue=n;break}ue=e.return}}function zd(t){for(;ue!==null;){var e=ue;if(e===t){ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ue=n;break}ue=e.return}}function kd(t){for(;ue!==null;){var e=ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ol(4,e)}catch(l){Qe(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Qe(e,r,l)}}var s=e.return;try{pc(e)}catch(l){Qe(e,s,l)}break;case 5:var o=e.return;try{pc(e)}catch(l){Qe(e,o,l)}}}catch(l){Qe(e,e.return,l)}if(e===t){ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ue=a;break}ue=e.return}}var nv=Math.ceil,Ga=si.ReactCurrentDispatcher,hf=si.ReactCurrentOwner,mn=si.ReactCurrentBatchConfig,Re=0,gt=null,it=null,vt=0,Yt=0,Br=Ri(0),lt=0,ho=null,rr=0,al=0,pf=0,Xs=null,kt=null,mf=0,is=1/0,qn=null,Wa=!1,_c=null,Ei=null,Vo=!1,_i=null,Ha=0,qs=0,vc=null,_a=-1,va=0;function It(){return Re&6?Je():_a!==-1?_a:_a=Je()}function Ti(t){return t.mode&1?Re&2&&vt!==0?vt&-vt:O_.transition!==null?(va===0&&(va=kp()),va):(t=Ue,t!==0||(t=window.event,t=t===void 0?16:Hp(t.type)),t):1}function Ln(t,e,n,i){if(50<qs)throw qs=0,vc=null,Error(Y(185));xo(t,n,i),(!(Re&2)||t!==gt)&&(t===gt&&(!(Re&2)&&(al|=n),lt===4&&mi(t,vt)),Gt(t,i),n===1&&Re===0&&!(e.mode&1)&&(is=Je()+500,il&&Ii()))}function Gt(t,e){var n=t.callbackNode;O0(t,e);var i=ba(t,t===gt?vt:0);if(i===0)n!==null&&Xf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xf(n),e===1)t.tag===0?U_(Ud.bind(null,t)):um(Ud.bind(null,t)),N_(function(){!(Re&6)&&Ii()}),n=null;else{switch(Up(i)){case 1:n=Bc;break;case 4:n=Fp;break;case 16:n=Ca;break;case 536870912:n=zp;break;default:n=Ca}n=lg(n,tg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tg(t,e){if(_a=-1,va=0,Re&6)throw Error(Y(327));var n=t.callbackNode;if(qr()&&t.callbackNode!==n)return null;var i=ba(t,t===gt?vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ja(t,i);else{e=i;var r=Re;Re|=2;var s=ig();(gt!==t||vt!==e)&&(qn=null,is=Je()+500,Ki(t,e));do try{sv();break}catch(a){ng(t,a)}while(1);Jc(),Ga.current=s,Re=r,it!==null?e=0:(gt=null,vt=0,e=lt)}if(e!==0){if(e===2&&(r=ju(t),r!==0&&(i=r,e=xc(t,r))),e===1)throw n=ho,Ki(t,0),mi(t,i),Gt(t,Je()),n;if(e===6)mi(t,i);else{if(r=t.current.alternate,!(i&30)&&!iv(r)&&(e=ja(t,i),e===2&&(s=ju(t),s!==0&&(i=s,e=xc(t,s))),e===1))throw n=ho,Ki(t,0),mi(t,i),Gt(t,Je()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Y(345));case 2:Gi(t,kt,qn);break;case 3:if(mi(t,i),(i&130023424)===i&&(e=mf+500-Je(),10<e)){if(ba(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){It(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ju(Gi.bind(null,t,kt,qn),e);break}Gi(t,kt,qn);break;case 4:if(mi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-An(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Je()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nv(i/1960))-i,10<i){t.timeoutHandle=Ju(Gi.bind(null,t,kt,qn),i);break}Gi(t,kt,qn);break;case 5:Gi(t,kt,qn);break;default:throw Error(Y(329))}}}return Gt(t,Je()),t.callbackNode===n?tg.bind(null,t):null}function xc(t,e){var n=Xs;return t.current.memoizedState.isDehydrated&&(Ki(t,e).flags|=256),t=ja(t,e),t!==2&&(e=kt,kt=n,e!==null&&yc(e)),t}function yc(t){kt===null?kt=t:kt.push.apply(kt,t)}function iv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Pn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mi(t,e){for(e&=~pf,e&=~al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-An(e),i=1<<n;t[n]=-1,e&=~i}}function Ud(t){if(Re&6)throw Error(Y(327));qr();var e=ba(t,0);if(!(e&1))return Gt(t,Je()),null;var n=ja(t,e);if(t.tag!==0&&n===2){var i=ju(t);i!==0&&(e=i,n=xc(t,i))}if(n===1)throw n=ho,Ki(t,0),mi(t,e),Gt(t,Je()),n;if(n===6)throw Error(Y(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gi(t,kt,qn),Gt(t,Je()),null}function gf(t,e){var n=Re;Re|=1;try{return t(e)}finally{Re=n,Re===0&&(is=Je()+500,il&&Ii())}}function sr(t){_i!==null&&_i.tag===0&&!(Re&6)&&qr();var e=Re;Re|=1;var n=mn.transition,i=Ue;try{if(mn.transition=null,Ue=1,t)return t()}finally{Ue=i,mn.transition=n,Re=e,!(Re&6)&&Ii()}}function _f(){Yt=Br.current,He(Br)}function Ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,I_(n)),it!==null)for(n=it.return;n!==null;){var i=n;switch(Zc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ra();break;case 3:ts(),He(Bt),He(Ct),of();break;case 5:sf(i);break;case 4:ts();break;case 13:He(Ye);break;case 19:He(Ye);break;case 10:ef(i.type._context);break;case 22:case 23:_f()}n=n.return}if(gt=t,it=t=Ci(t.current,null),vt=Yt=e,lt=0,ho=null,pf=al=rr=0,kt=Xs=null,qi!==null){for(e=0;e<qi.length;e++)if(n=qi[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}qi=null}return t}function ng(t,e){do{var n=it;try{if(Jc(),pa.current=Va,Ba){for(var i=Ze.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ba=!1}if(ir=0,mt=at=Ze=null,Hs=!1,uo=0,hf.current=null,n===null||n.return===null){lt=1,ho=e,it=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Td(o);if(g!==null){g.flags&=-257,Cd(g,o,a,s,e),g.mode&1&&Ed(s,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){Ed(s,u,e),vf();break e}l=Error(Y(426))}}else if(qe&&a.mode&1){var p=Td(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Cd(p,o,a,s,e),Kc(ns(l,a));break e}}s=l=ns(l,a),lt!==4&&(lt=2),Xs===null?Xs=[s]:Xs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Om(s,l,e);_d(s,m);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ei===null||!Ei.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Bm(s,a,e);_d(s,S);break e}}s=s.return}while(s!==null)}sg(n)}catch(M){e=M,it===n&&n!==null&&(it=n=n.return);continue}break}while(1)}function ig(){var t=Ga.current;return Ga.current=Va,t===null?Va:t}function vf(){(lt===0||lt===3||lt===2)&&(lt=4),gt===null||!(rr&268435455)&&!(al&268435455)||mi(gt,vt)}function ja(t,e){var n=Re;Re|=2;var i=ig();(gt!==t||vt!==e)&&(qn=null,Ki(t,e));do try{rv();break}catch(r){ng(t,r)}while(1);if(Jc(),Re=n,Ga.current=i,it!==null)throw Error(Y(261));return gt=null,vt=0,lt}function rv(){for(;it!==null;)rg(it)}function sv(){for(;it!==null&&!P0();)rg(it)}function rg(t){var e=ag(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,e===null?sg(t):it=e,hf.current=null}function sg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Q_(n,e),n!==null){n.flags&=32767,it=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{lt=6,it=null;return}}else if(n=K_(n,e,Yt),n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);lt===0&&(lt=5)}function Gi(t,e,n){var i=Ue,r=mn.transition;try{mn.transition=null,Ue=1,ov(t,e,n,i)}finally{mn.transition=r,Ue=i}return null}function ov(t,e,n,i){do qr();while(_i!==null);if(Re&6)throw Error(Y(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Y(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(B0(t,s),t===gt&&(it=gt=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,lg(Ca,function(){return qr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=mn.transition,mn.transition=null;var o=Ue;Ue=1;var a=Re;Re|=4,hf.current=null,ev(t,n),Jm(n,t),C_(Ku),Aa=!!Zu,Ku=Zu=null,t.current=n,tv(n),D0(),Re=a,Ue=o,mn.transition=s}else t.current=n;if(Vo&&(Vo=!1,_i=t,Ha=r),s=t.pendingLanes,s===0&&(Ei=null),N0(n.stateNode),Gt(t,Je()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wa)throw Wa=!1,t=_c,_c=null,t;return Ha&1&&t.tag!==0&&qr(),s=t.pendingLanes,s&1?t===vc?qs++:(qs=0,vc=t):qs=0,Ii(),null}function qr(){if(_i!==null){var t=Up(Ha),e=mn.transition,n=Ue;try{if(mn.transition=null,Ue=16>t?16:t,_i===null)var i=!1;else{if(t=_i,_i=null,Ha=0,Re&6)throw Error(Y(331));var r=Re;for(Re|=4,ue=t.current;ue!==null;){var s=ue,o=s.child;if(ue.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ue=u;ue!==null;){var c=ue;switch(c.tag){case 0:case 11:case 15:js(8,c,s)}var d=c.child;if(d!==null)d.return=c,ue=d;else for(;ue!==null;){c=ue;var f=c.sibling,g=c.return;if(Zm(c),c===u){ue=null;break}if(f!==null){f.return=g,ue=f;break}ue=g}}}var x=s.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}ue=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ue=o;else e:for(;ue!==null;){if(s=ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:js(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,ue=m;break e}ue=s.return}}var _=t.current;for(ue=_;ue!==null;){o=ue;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ue=v;else e:for(o=_;ue!==null;){if(a=ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ol(9,a)}}catch(M){Qe(a,a.return,M)}if(a===o){ue=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ue=S;break e}ue=a.return}}if(Re=r,Ii(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(Qa,t)}catch{}i=!0}return i}finally{Ue=n,mn.transition=e}}return!1}function Od(t,e,n){e=ns(n,e),e=Om(t,e,1),t=wi(t,e,1),e=It(),t!==null&&(xo(t,1,e),Gt(t,e))}function Qe(t,e,n){if(t.tag===3)Od(t,t,n);else for(;e!==null;){if(e.tag===3){Od(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ei===null||!Ei.has(i))){t=ns(n,t),t=Bm(e,t,1),e=wi(e,t,1),t=It(),e!==null&&(xo(e,1,t),Gt(e,t));break}}e=e.return}}function av(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,gt===t&&(vt&n)===n&&(lt===4||lt===3&&(vt&130023424)===vt&&500>Je()-mf?Ki(t,0):pf|=n),Gt(t,e)}function og(t,e){e===0&&(t.mode&1?(e=Do,Do<<=1,!(Do&130023424)&&(Do=4194304)):e=1);var n=It();t=ii(t,e),t!==null&&(xo(t,e,n),Gt(t,n))}function lv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),og(t,n)}function uv(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Y(314))}i!==null&&i.delete(e),og(t,n)}var ag;ag=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,Z_(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,qe&&e.flags&1048576&&cm(e,Fa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ga(t,e),t=e.pendingProps;var r=Qr(e,Ct.current);Xr(e,n),r=lf(null,e,i,t,r,n);var s=uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(i)?(s=!0,Ia(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nf(e),r.updater=rl,e.stateNode=r,r._reactInternals=e,oc(e,i,t,n),e=uc(null,e,i,!0,s,n)):(e.tag=0,qe&&s&&Yc(e),Dt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ga(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fv(i),t=wn(i,t),r){case 0:e=lc(null,e,i,t,n);break e;case 1:e=Ld(null,e,i,t,n);break e;case 11:e=bd(null,e,i,t,n);break e;case 14:e=Ad(null,e,i,wn(i.type,t),n);break e}throw Error(Y(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),lc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),Ld(t,e,i,r,n);case 3:e:{if(Hm(e),t===null)throw Error(Y(387));i=e.pendingProps,s=e.memoizedState,r=s.element,pm(t,e),Ua(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ns(Error(Y(423)),e),e=Pd(t,e,i,n,r);break e}else if(i!==r){r=ns(Error(Y(424)),e),e=Pd(t,e,i,n,r);break e}else for(Qt=Mi(e.stateNode.containerInfo.firstChild),en=e,qe=!0,Tn=null,n=vm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),i===r){e=ri(t,e,n);break e}Dt(t,e,i,n)}e=e.child}return e;case 5:return xm(e),t===null&&ic(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Qu(i,r)?o=null:s!==null&&Qu(i,s)&&(e.flags|=32),Wm(t,e),Dt(t,e,o,n),e.child;case 6:return t===null&&ic(e),null;case 13:return jm(t,e,n);case 4:return rf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=es(e,null,i,n):Dt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),bd(t,e,i,r,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ve(za,i._currentValue),i._currentValue=o,s!==null)if(Pn(s.value,o)){if(s.children===r.children&&!Bt.current){e=ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Jn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Y(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Xr(e,n),r=gn(r),i=i(r),e.flags|=1,Dt(t,e,i,n),e.child;case 14:return i=e.type,r=wn(i,e.pendingProps),r=wn(i.type,r),Ad(t,e,i,r,n);case 15:return Vm(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),ga(t,e),e.tag=1,Vt(i)?(t=!0,Ia(e)):t=!1,Xr(e,n),gm(e,i,r),oc(e,i,r,n),uc(null,e,i,!0,t,n);case 19:return Xm(t,e,n);case 22:return Gm(t,e,n)}throw Error(Y(156,e.tag))};function lg(t,e){return Np(t,e)}function cv(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,e,n,i){return new cv(t,e,n,i)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fv(t){if(typeof t=="function")return xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kc)return 11;if(t===Uc)return 14}return 2}function Ci(t,e){var n=t.alternate;return n===null?(n=pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Pr:return Qi(n.children,r,s,e);case zc:o=8,r|=8;break;case Pu:return t=pn(12,n,e,r|2),t.elementType=Pu,t.lanes=s,t;case Du:return t=pn(13,n,e,r),t.elementType=Du,t.lanes=s,t;case Ru:return t=pn(19,n,e,r),t.elementType=Ru,t.lanes=s,t;case _p:return ll(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mp:o=10;break e;case gp:o=9;break e;case kc:o=11;break e;case Uc:o=14;break e;case di:o=16,i=null;break e}throw Error(Y(130,t==null?t:typeof t,""))}return e=pn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qi(t,e,n,i){return t=pn(7,t,i,e),t.lanes=n,t}function ll(t,e,n,i){return t=pn(22,t,i,e),t.elementType=_p,t.lanes=n,t.stateNode={isHidden:!1},t}function Hl(t,e,n){return t=pn(6,t,null,e),t.lanes=n,t}function jl(t,e,n){return e=pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dv(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yf(t,e,n,i,r,s,o,a,l){return t=new dv(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(s),t}function hv(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ug(t){if(!t)return Li;t=t._reactInternals;e:{if(dr(t)!==t||t.tag!==1)throw Error(Y(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Y(171))}if(t.tag===1){var n=t.type;if(Vt(n))return lm(t,n,e)}return e}function cg(t,e,n,i,r,s,o,a,l){return t=yf(n,i,!0,t,r,s,o,a,l),t.context=ug(null),n=t.current,i=It(),r=Ti(n),s=Jn(i,r),s.callback=e??null,wi(n,s,r),t.current.lanes=r,xo(t,r,i),Gt(t,i),t}function ul(t,e,n,i){var r=e.current,s=It(),o=Ti(r);return n=ug(n),e.context===null?e.context=n:e.pendingContext=n,e=Jn(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=wi(r,e,o),t!==null&&(Ln(t,r,o,s),ha(t,r,o)),o}function Xa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sf(t,e){Bd(t,e),(t=t.alternate)&&Bd(t,e)}function pv(){return null}var fg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mf(t){this._internalRoot=t}cl.prototype.render=Mf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Y(409));ul(t,e,null,null)};cl.prototype.unmount=Mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;sr(function(){ul(null,t,null,null)}),e[ni]=null}};function cl(t){this._internalRoot=t}cl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pi.length&&e!==0&&e<pi[n].priority;n++);pi.splice(n,0,t),n===0&&Wp(t)}};function wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vd(){}function mv(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Xa(o);s.call(u)}}var o=cg(e,i,t,0,null,!1,!1,"",Vd);return t._reactRootContainer=o,t[ni]=o.current,ro(t.nodeType===8?t.parentNode:t),sr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Xa(l);a.call(u)}}var l=yf(t,0,!1,null,null,!1,!1,"",Vd);return t._reactRootContainer=l,t[ni]=l.current,ro(t.nodeType===8?t.parentNode:t),sr(function(){ul(e,l,n,i)}),l}function dl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Xa(o);a.call(l)}}ul(e,o,t,r)}else o=mv(n,e,t,r,i);return Xa(o)}Op=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(Vc(e,n|1),Gt(e,Je()),!(Re&6)&&(is=Je()+500,Ii()))}break;case 13:sr(function(){var i=ii(t,1);if(i!==null){var r=It();Ln(i,t,1,r)}}),Sf(t,1)}};Gc=function(t){if(t.tag===13){var e=ii(t,134217728);if(e!==null){var n=It();Ln(e,t,134217728,n)}Sf(t,134217728)}};Bp=function(t){if(t.tag===13){var e=Ti(t),n=ii(t,e);if(n!==null){var i=It();Ln(n,t,e,i)}Sf(t,e)}};Vp=function(){return Ue};Gp=function(t,e){var n=Ue;try{return Ue=t,e()}finally{Ue=n}};Gu=function(t,e,n){switch(e){case"input":if(Fu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nl(i);if(!r)throw Error(Y(90));xp(i),Fu(i,r)}}}break;case"textarea":Sp(t,n);break;case"select":e=n.value,e!=null&&Gr(t,!!n.multiple,e,!1)}};Ap=gf;Lp=sr;var gv={usingClientEntryPoint:!1,Events:[So,Nr,nl,Cp,bp,gf]},Ms={findFiberByHostInstance:Xi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_v={bundleType:Ms.bundleType,version:Ms.version,rendererPackageName:Ms.rendererPackageName,rendererConfig:Ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ms.findFiberByHostInstance||pv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Qa=Go.inject(_v),zn=Go}catch{}}sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv;sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wf(e))throw Error(Y(200));return hv(t,e,null,n)};sn.createRoot=function(t,e){if(!wf(t))throw Error(Y(299));var n=!1,i="",r=fg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yf(t,1,!1,null,null,n,!1,i,r),t[ni]=e.current,ro(t.nodeType===8?t.parentNode:t),new Mf(e)};sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Y(188)):(t=Object.keys(t).join(","),Error(Y(268,t)));return t=Rp(e),t=t===null?null:t.stateNode,t};sn.flushSync=function(t){return sr(t)};sn.hydrate=function(t,e,n){if(!fl(e))throw Error(Y(200));return dl(null,t,e,!0,n)};sn.hydrateRoot=function(t,e,n){if(!wf(t))throw Error(Y(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=fg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cg(e,null,t,1,n??null,r,!1,s,o),t[ni]=e.current,ro(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cl(e)};sn.render=function(t,e,n){if(!fl(e))throw Error(Y(200));return dl(null,t,e,!1,n)};sn.unmountComponentAtNode=function(t){if(!fl(t))throw Error(Y(40));return t._reactRootContainer?(sr(function(){dl(null,null,t,!1,function(){t._reactRootContainer=null,t[ni]=null})}),!0):!1};sn.unstable_batchedUpdates=gf;sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fl(n))throw Error(Y(200));if(t==null||t._reactInternals===void 0)throw Error(Y(38));return dl(t,e,n,!1,i)};sn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=sn})(p0);var Gd=bu;Cu.createRoot=Gd.createRoot,Cu.hydrateRoot=Gd.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ef="149",vv=0,Wd=1,xv=2,dg=1,yv=2,zs=3,Pi=0,tn=1,vi=2,bi=0,$r=1,Hd=2,jd=3,Xd=4,Sv=5,Ar=100,Mv=101,wv=102,qd=103,$d=104,Ev=200,Tv=201,Cv=202,bv=203,hg=204,pg=205,Av=206,Lv=207,Pv=208,Dv=209,Rv=210,Iv=0,Nv=1,Fv=2,Sc=3,zv=4,kv=5,Uv=6,Ov=7,mg=0,Bv=1,Vv=2,ei=0,Gv=1,Wv=2,Hv=3,jv=4,Xv=5,gg=300,rs=301,ss=302,Mc=303,wc=304,hl=306,Ec=1e3,Cn=1001,Tc=1002,Rt=1003,Yd=1004,Xl=1005,hn=1006,qv=1007,po=1008,or=1009,$v=1010,Yv=1011,_g=1012,Zv=1013,Yi=1014,Zi=1015,mo=1016,Kv=1017,Qv=1018,Yr=1020,Jv=1021,bn=1023,ex=1024,tx=1025,Ji=1026,os=1027,nx=1028,ix=1029,rx=1030,sx=1031,ox=1033,ql=33776,$l=33777,Yl=33778,Zl=33779,Zd=35840,Kd=35841,Qd=35842,Jd=35843,ax=36196,eh=37492,th=37496,nh=37808,ih=37809,rh=37810,sh=37811,oh=37812,ah=37813,lh=37814,uh=37815,ch=37816,fh=37817,dh=37818,hh=37819,ph=37820,mh=37821,Kl=36492,lx=36283,gh=36284,_h=36285,vh=36286,ar=3e3,We=3001,ux=3200,cx=3201,vg=0,fx=1,In="srgb",go="srgb-linear",Ql=7680,dx=519,xh=35044,yh="300 es",Cc=1035;class fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sh=1234567;const $s=Math.PI/180,qa=180/Math.PI;function ds(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[t&255]+Et[t>>8&255]+Et[t>>16&255]+Et[t>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[n&63|128]+Et[n>>8&255]+"-"+Et[n>>16&255]+Et[n>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Ut(t,e,n){return Math.max(e,Math.min(n,t))}function Tf(t,e){return(t%e+e)%e}function hx(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function px(t,e,n){return t!==e?(n-t)/(e-t):0}function Ys(t,e,n){return(1-n)*t+n*e}function mx(t,e,n,i){return Ys(t,e,1-Math.exp(-n*i))}function gx(t,e=1){return e-Math.abs(Tf(t,e*2)-e)}function _x(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function vx(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function xx(t,e){return t+Math.floor(Math.random()*(e-t+1))}function yx(t,e){return t+Math.random()*(e-t)}function Sx(t){return t*(.5-Math.random())}function Mx(t){t!==void 0&&(Sh=t);let e=Sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wx(t){return t*$s}function Ex(t){return t*qa}function bc(t){return(t&t-1)===0&&t!==0}function Tx(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function $a(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Cx(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),g=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*d,l*f,a*u);break;case"YZY":t.set(l*f,a*c,l*d,a*u);break;case"ZXZ":t.set(l*d,l*f,a*c,a*u);break;case"XZX":t.set(a*c,l*x,l*g,a*u);break;case"YXY":t.set(l*g,a*c,l*x,a*u);break;case"ZYZ":t.set(l*x,l*g,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var bx=Object.freeze({__proto__:null,DEG2RAD:$s,RAD2DEG:qa,ceilPowerOfTwo:Tx,clamp:Ut,damp:mx,degToRad:wx,denormalize:ks,euclideanModulo:Tf,floorPowerOfTwo:$a,generateUUID:ds,inverseLerp:px,isPowerOfTwo:bc,lerp:Ys,mapLinear:hx,normalize:zt,pingpong:gx,radToDeg:Ex,randFloat:yx,randFloatSpread:Sx,randInt:xx,seededRandom:Mx,setQuaternionFromProperEuler:Cx,smootherstep:vx,smoothstep:_x});class ze{constructor(e=0,n=0){ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],x=i[8],h=r[0],p=r[3],m=r[6],_=r[1],v=r[4],S=r[7],M=r[2],b=r[5],A=r[8];return s[0]=o*h+a*_+l*M,s[3]=o*p+a*v+l*b,s[6]=o*m+a*S+l*A,s[1]=u*h+c*_+d*M,s[4]=u*p+c*v+d*b,s[7]=u*m+c*S+d*A,s[2]=f*h+g*_+x*M,s[5]=f*p+g*v+x*b,s[8]=f*m+g*S+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,g=u*s-o*l,x=n*d+i*f+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*n-r*l)*h,e[5]=(r*s-a*n)*h,e[6]=g*h,e[7]=(i*l-u*n)*h,e[8]=(o*n-i*s)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Jl.makeScale(e,n)),this}rotate(e){return this.premultiply(Jl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Jl.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jl=new Jt;function xg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _o(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function er(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ya(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const eu={[In]:{[go]:er},[go]:{[In]:ya}},Lt={legacyMode:!0,get workingColorSpace(){return go},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(eu[e]&&eu[e][n]!==void 0){const i=eu[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ot={r:0,g:0,b:0},yn={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function tu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Ho(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Lt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Lt.workingColorSpace){if(e=Tf(e,1),n=Ut(n,0,1),i=Ut(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=tu(o,s,e+1/3),this.g=tu(o,s,e),this.b=tu(o,s,e-1/3)}return Lt.toWorkingColorSpace(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Lt.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Lt.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Lt.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Lt.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=In){const i=yg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Lt.fromWorkingColorSpace(Ho(this,ot),e),Ut(ot.r*255,0,255)<<16^Ut(ot.g*255,0,255)<<8^Ut(ot.b*255,0,255)<<0}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Ho(this,ot),n);const i=ot.r,r=ot.g,s=ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Ho(this,ot),n),e.r=ot.r,e.g=ot.g,e.b=ot.b,e}getStyle(e=In){return Lt.fromWorkingColorSpace(Ho(this,ot),e),e!==In?`color(${e} ${ot.r} ${ot.g} ${ot.b})`:`rgb(${ot.r*255|0},${ot.g*255|0},${ot.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(yn),yn.h+=e,yn.s+=n,yn.l+=i,this.setHSL(yn.h,yn.s,yn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(yn),e.getHSL(Wo);const i=Ys(yn.h,Wo.h,n),r=Ys(yn.s,Wo.s,n),s=Ys(yn.l,Wo.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Be.NAMES=yg;let pr;class Sg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pr===void 0&&(pr=_o("canvas")),pr.width=e.width,pr.height=e.height;const i=pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=pr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_o("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=er(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(er(n[i]/255)*255):n[i]=er(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Mg{constructor(e=null){this.isSource=!0,this.uuid=ds(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nu(r[o].image)):s.push(nu(r[o]))}else s=nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Sg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ax=0;class Wt extends fs{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,i=Cn,r=Cn,s=hn,o=po,a=bn,l=or,u=Wt.DEFAULT_ANISOTROPY,c=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=ds(),this.name="",this.source=new Mg(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ec:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ec:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=gg;Wt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,n=0,i=0,r=1){$e.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],x=l[9],h=l[2],p=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(x+p)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(g+1)/2,M=(m+1)/2,b=(c+f)/4,A=(d+h)/4,y=(x+p)/4;return v>S&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=A/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=y/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-x)*(p-x)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(d-h)/_,this.z=(f-c)/_,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lr extends fs{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new $e(0,0,e,n),this.scissorTest=!1,this.viewport=new $e(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:hn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Mg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wg extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lx extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],x=s[o+2],h=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=x,e[n+3]=h;return}if(d!==h||l!==f||u!==g||c!==x){let p=1-a;const m=l*f+u*g+c*x+d*h,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const M=Math.sqrt(v),b=Math.atan2(M,m*_);p=Math.sin(p*b)/M,a=Math.sin(a*b)/M}const S=a*_;if(l=l*p+f*S,u=u*p+g*S,c=c*p+x*S,d=d*p+h*S,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+c*d+l*g-u*f,e[n+1]=l*x+c*f+u*d-a*g,e[n+2]=u*x+c*g+a*f-l*d,e[n+3]=c*x-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d-f*g*x;break;case"YXZ":this._x=f*c*d+u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d+f*g*x;break;case"ZXY":this._x=f*c*d-u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d-f*g*x;break;case"ZYX":this._x=f*c*d-u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d+f*g*x;break;case"YZX":this._x=f*c*d+u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d-f*g*x;break;case"XZY":this._x=f*c*d-u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const iu=new I,Mh=new wo;class Eo{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Ui.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ui)}else i.boundingBox===null&&i.computeBoundingBox(),ru.copy(i.boundingBox),ru.applyMatrix4(e.matrixWorld),this.union(ru);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),jo.subVectors(this.max,ws),mr.subVectors(e.a,ws),gr.subVectors(e.b,ws),_r.subVectors(e.c,ws),li.subVectors(gr,mr),ui.subVectors(_r,gr),Oi.subVectors(mr,_r);let n=[0,-li.z,li.y,0,-ui.z,ui.y,0,-Oi.z,Oi.y,li.z,0,-li.x,ui.z,0,-ui.x,Oi.z,0,-Oi.x,-li.y,li.x,0,-ui.y,ui.x,0,-Oi.y,Oi.x,0];return!su(n,mr,gr,_r,jo)||(n=[1,0,0,0,1,0,0,0,1],!su(n,mr,gr,_r,jo))?!1:(Xo.crossVectors(li,ui),n=[Xo.x,Xo.y,Xo.z],su(n,mr,gr,_r,jo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ui.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new I,new I,new I,new I,new I,new I,new I,new I],Ui=new I,ru=new Eo,mr=new I,gr=new I,_r=new I,li=new I,ui=new I,Oi=new I,ws=new I,jo=new I,Xo=new I,Bi=new I;function su(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Bi.fromArray(t,s);const a=r.x*Math.abs(Bi.x)+r.y*Math.abs(Bi.y)+r.z*Math.abs(Bi.z),l=e.dot(Bi),u=n.dot(Bi),c=i.dot(Bi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Px=new Eo,Es=new I,ou=new I;class Cf{constructor(e=new I,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Px.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const n=Es.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Es,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(ou)),this.expandByPoint(Es.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new I,au=new I,qo=new I,ci=new I,lu=new I,$o=new I,uu=new I;class Dx{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wn.copy(this.direction).multiplyScalar(n).add(this.origin),Wn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){au.copy(e).add(n).multiplyScalar(.5),qo.copy(n).sub(e).normalize(),ci.copy(this.origin).sub(au);const s=e.distanceTo(n)*.5,o=-this.direction.dot(qo),a=ci.dot(this.direction),l=-ci.dot(qo),u=ci.lengthSq(),c=Math.abs(1-o*o);let d,f,g,x;if(c>0)if(d=o*l-a,f=o*a-l,x=s*c,d>=0)if(f>=-x)if(f<=x){const h=1/c;d*=h,f*=h,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(qo).multiplyScalar(f).add(au),g}intersectSphere(e,n){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,n,i,r,s){lu.subVectors(n,e),$o.subVectors(i,e),uu.crossVectors(lu,$o);let o=this.direction.dot(uu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const l=a*this.direction.dot($o.crossVectors(ci,$o));if(l<0)return null;const u=a*this.direction.dot(lu.cross(ci));if(u<0||l+u>o)return null;const c=-a*ci.dot(uu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,d,f,g,x,h,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=g,m[7]=x,m[11]=h,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vr.setFromMatrixColumn(e,0).length(),s=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,x=a*c,h=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=g+x*u,n[5]=f-h*u,n[9]=-a*l,n[2]=h-f*u,n[6]=x+g*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,x=u*c,h=u*d;n[0]=f+h*a,n[4]=x*a-g,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=g*a-x,n[6]=h+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,x=u*c,h=u*d;n[0]=f-h*a,n[4]=-o*d,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*c,n[9]=h-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,g=o*d,x=a*c,h=a*d;n[0]=l*c,n[4]=x*u-g,n[8]=f*u+h,n[1]=l*d,n[5]=h*u+f,n[9]=g*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,x=a*l,h=a*u;n[0]=l*c,n[4]=h-f*d,n[8]=x*d+g,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*d+x,n[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,g=o*u,x=a*l,h=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+h,n[5]=o*c,n[9]=g*d-x,n[2]=x*d-g,n[6]=a*c,n[10]=h*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rx,e,Ix)}lookAt(e,n,i){const r=this.elements;return qt.subVectors(e,n),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),fi.crossVectors(i,qt),fi.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),fi.crossVectors(i,qt)),fi.normalize(),Yo.crossVectors(qt,fi),r[0]=fi.x,r[4]=Yo.x,r[8]=qt.x,r[1]=fi.y,r[5]=Yo.y,r[9]=qt.y,r[2]=fi.z,r[6]=Yo.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],x=i[2],h=i[6],p=i[10],m=i[14],_=i[3],v=i[7],S=i[11],M=i[15],b=r[0],A=r[4],y=r[8],C=r[12],L=r[1],$=r[5],Z=r[9],z=r[13],N=r[2],j=r[6],K=r[10],Q=r[14],D=r[3],O=r[7],B=r[11],ne=r[15];return s[0]=o*b+a*L+l*N+u*D,s[4]=o*A+a*$+l*j+u*O,s[8]=o*y+a*Z+l*K+u*B,s[12]=o*C+a*z+l*Q+u*ne,s[1]=c*b+d*L+f*N+g*D,s[5]=c*A+d*$+f*j+g*O,s[9]=c*y+d*Z+f*K+g*B,s[13]=c*C+d*z+f*Q+g*ne,s[2]=x*b+h*L+p*N+m*D,s[6]=x*A+h*$+p*j+m*O,s[10]=x*y+h*Z+p*K+m*B,s[14]=x*C+h*z+p*Q+m*ne,s[3]=_*b+v*L+S*N+M*D,s[7]=_*A+v*$+S*j+M*O,s[11]=_*y+v*Z+S*K+M*B,s[15]=_*C+v*z+S*Q+M*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],x=e[3],h=e[7],p=e[11],m=e[15];return x*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*g-i*l*g)+h*(+n*l*g-n*u*f+s*o*f-r*o*g+r*u*c-s*l*c)+p*(+n*u*d-n*a*g-s*o*d+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-n*l*d+n*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],x=e[12],h=e[13],p=e[14],m=e[15],_=d*p*u-h*f*u+h*l*g-a*p*g-d*l*m+a*f*m,v=x*f*u-c*p*u-x*l*g+o*p*g+c*l*m-o*f*m,S=c*h*u-x*d*u+x*a*g-o*h*g-c*a*m+o*d*m,M=x*d*l-c*h*l-x*a*f+o*h*f+c*a*p-o*d*p,b=n*_+i*v+r*S+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=_*A,e[1]=(h*f*s-d*p*s-h*r*g+i*p*g+d*r*m-i*f*m)*A,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*m+i*l*m)*A,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*g-i*l*g)*A,e[4]=v*A,e[5]=(c*p*s-x*f*s+x*r*g-n*p*g-c*r*m+n*f*m)*A,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*m-n*l*m)*A,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*g+n*l*g)*A,e[8]=S*A,e[9]=(x*d*s-c*h*s-x*i*g+n*h*g+c*i*m-n*d*m)*A,e[10]=(o*h*s-x*a*s+x*i*u-n*h*u-o*i*m+n*a*m)*A,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*g-n*a*g)*A,e[12]=M*A,e[13]=(c*h*r-x*d*r+x*i*f-n*h*f-c*i*p+n*d*p)*A,e[14]=(x*a*r-o*h*r-x*i*l+n*h*l+o*i*p-n*a*p)*A,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,g=s*c,x=s*d,h=o*c,p=o*d,m=a*d,_=l*u,v=l*c,S=l*d,M=i.x,b=i.y,A=i.z;return r[0]=(1-(h+m))*M,r[1]=(g+S)*M,r[2]=(x-v)*M,r[3]=0,r[4]=(g-S)*b,r[5]=(1-(f+m))*b,r[6]=(p+_)*b,r[7]=0,r[8]=(x+v)*A,r[9]=(p-_)*A,r[10]=(1-(f+h))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vr.set(r[0],r[1],r[2]).length();const o=vr.set(r[4],r[5],r[6]).length(),a=vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const u=1/s,c=1/o,d=1/a;return Sn.elements[0]*=u,Sn.elements[1]*=u,Sn.elements[2]*=u,Sn.elements[4]*=c,Sn.elements[5]*=c,Sn.elements[6]*=c,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,n.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),d=(n+e)*l,f=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vr=new I,Sn=new rt,Rx=new I(0,0,0),Ix=new I(1,1,1),fi=new I,Yo=new I,qt=new I,wh=new rt,Eh=new wo;class pl{constructor(e=0,n=0,i=0,r=pl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pl.DEFAULT_ORDER="XYZ";class Eg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nx=0;const Th=new I,xr=new wo,Hn=new rt,Zo=new I,Ts=new I,Fx=new I,zx=new wo,Ch=new I(1,0,0),bh=new I(0,1,0),Ah=new I(0,0,1),kx={type:"added"},Lh={type:"removed"};class Ht extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new I,n=new pl,i=new wo,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Jt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Eg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xr.setFromAxisAngle(e,n),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,n){return xr.setFromAxisAngle(e,n),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,n){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Zo.copy(e):Zo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ts,Zo,this.up):Hn.lookAt(Zo,Ts,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),xr.setFromRotationMatrix(Hn),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Lh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Lh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,Fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,zx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new I(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new I,jn=new I,cu=new I,Xn=new I,yr=new I,Sr=new I,Ph=new I,fu=new I,du=new I,hu=new I;class Zn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Mn.subVectors(e,n),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Mn.subVectors(r,n),jn.subVectors(i,n),cu.subVectors(e,n);const o=Mn.dot(Mn),a=Mn.dot(jn),l=Mn.dot(cu),u=jn.dot(jn),c=jn.dot(cu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,x=(o*c-a*l)*f;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Xn),Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Xn),l.set(0,0),l.addScaledVector(s,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l}static isFrontFacing(e,n,i,r){return Mn.subVectors(i,n),jn.subVectors(e,n),Mn.cross(jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Mn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Zn.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;yr.subVectors(r,i),Sr.subVectors(s,i),fu.subVectors(e,i);const l=yr.dot(fu),u=Sr.dot(fu);if(l<=0&&u<=0)return n.copy(i);du.subVectors(e,r);const c=yr.dot(du),d=Sr.dot(du);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(yr,o);hu.subVectors(e,s);const g=yr.dot(hu),x=Sr.dot(hu);if(x>=0&&g<=x)return n.copy(s);const h=g*u-l*x;if(h<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Sr,a);const p=c*x-g*d;if(p<=0&&d-c>=0&&g-x>=0)return Ph.subVectors(s,r),a=(d-c)/(d-c+(g-x)),n.copy(r).addScaledVector(Ph,a);const m=1/(p+h+f);return o=h*m,a=f*m,n.copy(i).addScaledVector(yr,o).addScaledVector(Sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ux=0;class To extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=$r,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hg,this.blendDst=pg,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ql,this.stencilZFail=Ql,this.stencilZPass=Ql,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ya extends To{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new I,Ko=new ze;class Un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ko.fromBufferAttribute(this,n),Ko.applyMatrix3(e),this.setXY(n,Ko.x,Ko.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)nt.fromBufferAttribute(this,n),nt.applyMatrix3(e),this.setXYZ(n,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)nt.fromBufferAttribute(this,n),nt.applyMatrix4(e),this.setXYZ(n,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nt.fromBufferAttribute(this,n),nt.applyNormalMatrix(e),this.setXYZ(n,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nt.fromBufferAttribute(this,n),nt.transformDirection(e),this.setXYZ(n,nt.x,nt.y,nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Tg extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Cg extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class nn extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ox=0;const cn=new rt,pu=new Ht,Mr=new I,$t=new Eo,Cs=new Eo,pt=new I;class oi extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xg(e)?Cg:Tg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Jt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,n,i){return cn.makeTranslation(e,n,i),this.applyMatrix4(cn),this}scale(e,n,i){return cn.makeScale(e,n,i),this.applyMatrix4(cn),this}lookAt(e){return pu.lookAt(e),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors($t.min,Cs.min),$t.expandByPoint(pt),pt.addVectors($t.max,Cs.max),$t.expandByPoint(pt)):($t.expandByPoint(Cs.min),$t.expandByPoint(Cs.max))}$t.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)pt.fromBufferAttribute(a,u),l&&(Mr.fromBufferAttribute(e,u),pt.add(Mr)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let L=0;L<a;L++)u[L]=new I,c[L]=new I;const d=new I,f=new I,g=new I,x=new ze,h=new ze,p=new ze,m=new I,_=new I;function v(L,$,Z){d.fromArray(r,L*3),f.fromArray(r,$*3),g.fromArray(r,Z*3),x.fromArray(o,L*2),h.fromArray(o,$*2),p.fromArray(o,Z*2),f.sub(d),g.sub(d),h.sub(x),p.sub(x);const z=1/(h.x*p.y-p.x*h.y);isFinite(z)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(g,-h.y).multiplyScalar(z),_.copy(g).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(z),u[L].add(m),u[$].add(m),u[Z].add(m),c[L].add(_),c[$].add(_),c[Z].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let L=0,$=S.length;L<$;++L){const Z=S[L],z=Z.start,N=Z.count;for(let j=z,K=z+N;j<K;j+=3)v(i[j+0],i[j+1],i[j+2])}const M=new I,b=new I,A=new I,y=new I;function C(L){A.fromArray(s,L*3),y.copy(A);const $=u[L];M.copy($),M.sub(A.multiplyScalar(A.dot($))).normalize(),b.crossVectors(y,$);const z=b.dot(c[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=z}for(let L=0,$=S.length;L<$;++L){const Z=S[L],z=Z.start,N=Z.count;for(let j=z,K=z+N;j<K;j+=3)C(i[j+0]),C(i[j+1]),C(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,u=new I,c=new I,d=new I;if(e)for(let f=0,g=e.count;f<g;f+=3){const x=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,h),o.fromBufferAttribute(n,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)pt.fromBufferAttribute(e,n),pt.normalize(),e.setXYZ(n,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?g=l[h]*a.data.stride+a.offset:g=l[h]*c;for(let m=0;m<c;m++)f[x++]=u[g++]}return new Un(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new oi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dh=new rt,wr=new Dx,mu=new Cf,bs=new I,As=new I,Ls=new I,gu=new I,Qo=new I,Jo=new ze,ea=new ze,ta=new ze,_u=new I,na=new I;class Kt extends Ht{constructor(e=new oi,n=new Ya){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(gu.fromBufferAttribute(d,e),o?Qo.addScaledVector(gu,c):Qo.addScaledVector(gu.sub(n),c))}n.add(Qo)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),mu.copy(i.boundingSphere),mu.applyMatrix4(s),e.ray.intersectsSphere(mu)===!1)||(Dh.copy(s).invert(),wr.copy(e.ray).applyMatrix4(Dh),i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const h=d[g],p=r[h.materialIndex],m=Math.max(h.start,f.start),_=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let v=m,S=_;v<S;v+=3){const M=a.getX(v),b=a.getX(v+1),A=a.getX(v+2);o=ia(this,p,e,wr,u,c,M,b,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let h=g,p=x;h<p;h+=3){const m=a.getX(h),_=a.getX(h+1),v=a.getX(h+2);o=ia(this,r,e,wr,u,c,m,_,v),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const h=d[g],p=r[h.materialIndex],m=Math.max(h.start,f.start),_=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let v=m,S=_;v<S;v+=3){const M=v,b=v+1,A=v+2;o=ia(this,p,e,wr,u,c,M,b,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let h=g,p=x;h<p;h+=3){const m=h,_=h+1,v=h+2;o=ia(this,r,e,wr,u,c,m,_,v),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}}}function Bx(t,e,n,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Pi,a),l===null)return null;na.copy(a),na.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(na);return u<n.near||u>n.far?null:{distance:u,point:na.clone(),object:t}}function ia(t,e,n,i,r,s,o,a,l){t.getVertexPosition(o,bs),t.getVertexPosition(a,As),t.getVertexPosition(l,Ls);const u=Bx(t,e,n,i,bs,As,Ls,_u);if(u){r&&(Jo.fromBufferAttribute(r,o),ea.fromBufferAttribute(r,a),ta.fromBufferAttribute(r,l),u.uv=Zn.getUV(_u,bs,As,Ls,Jo,ea,ta,new ze)),s&&(Jo.fromBufferAttribute(s,o),ea.fromBufferAttribute(s,a),ta.fromBufferAttribute(s,l),u.uv2=Zn.getUV(_u,bs,As,Ls,Jo,ea,ta,new ze));const c={a:o,b:a,c:l,normal:new I,materialIndex:0};Zn.getNormal(bs,As,Ls,c.normal),u.face=c}return u}class ur extends oi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nn(u,3)),this.setAttribute("normal",new nn(c,3)),this.setAttribute("uv",new nn(d,2));function x(h,p,m,_,v,S,M,b,A,y,C){const L=S/A,$=M/y,Z=S/2,z=M/2,N=b/2,j=A+1,K=y+1;let Q=0,D=0;const O=new I;for(let B=0;B<K;B++){const ne=B*$-z;for(let F=0;F<j;F++){const X=F*L-Z;O[h]=X*_,O[p]=ne*v,O[m]=N,u.push(O.x,O.y,O.z),O[h]=0,O[p]=0,O[m]=b>0?1:-1,c.push(O.x,O.y,O.z),d.push(F/A),d.push(1-B/y),Q+=1}}for(let B=0;B<y;B++)for(let ne=0;ne<A;ne++){const F=f+ne+j*B,X=f+ne+j*(B+1),te=f+(ne+1)+j*(B+1),re=f+(ne+1)+j*B;l.push(F,X,re),l.push(X,te,re),D+=6}a.addGroup(g,D,C),g+=D,f+=Q}}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Pt(t){const e={};for(let n=0;n<t.length;n++){const i=as(t[n]);for(const r in i)e[r]=i[r]}return e}function Vx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function bg(t){return t.getRenderTarget()===null&&t.outputEncoding===We?In:go}const Gx={clone:as,merge:Pt};var Wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends To{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wx,this.fragmentShader=Hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=Vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ag extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zt extends Ag{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($s*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Er=-90,Tr=1;class jx extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Zt(Er,Tr,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Zt(Er,Tr,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Zt(Er,Tr,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Zt(Er,Tr,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Zt(Er,Tr,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Zt(Er,Tr,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=ei,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Lg extends Wt{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:rs,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xx extends lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ur(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:bi});s.uniforms.tEquirect.value=n;const o=new Kt(r,s),a=n.minFilter;return n.minFilter===po&&(n.minFilter=hn),new jx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const vu=new I,qx=new I,$x=new Jt;class Wi{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vu.subVectors(i,n).cross(qx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$x.getNormalMatrix(e),r=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new Cf,ra=new I;class bf{constructor(e=new Wi,n=new Wi,i=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],x=i[10],h=i[11],p=i[12],m=i[13],_=i[14],v=i[15];return n[0].setComponents(a-r,d-l,h-f,v-p).normalize(),n[1].setComponents(a+r,d+l,h+f,v+p).normalize(),n[2].setComponents(a+s,d+u,h+g,v+m).normalize(),n[3].setComponents(a-s,d-u,h-g,v-m).normalize(),n[4].setComponents(a-o,d-c,h-x,v-_).normalize(),n[5].setComponents(a+o,d+c,h+x,v+_).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ra.x=r.normal.x>0?e.max.x:e.min.x,ra.y=r.normal.y>0?e.max.y:e.min.y,ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Yx(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,g=c.updateRange;t.bindBuffer(d,u),g.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Af extends oi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,g=[],x=[],h=[],p=[];for(let m=0;m<c;m++){const _=m*f-o;for(let v=0;v<u;v++){const S=v*d-s;x.push(S,-_,0),h.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const v=_+u*m,S=_+u*(m+1),M=_+1+u*(m+1),b=_+1+u*m;g.push(v,S,b),g.push(S,M,b)}this.setIndex(g),this.setAttribute("position",new nn(x,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(p,2))}static fromJSON(e){return new Af(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ey=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ny="vec3 transformed = vec3( position );",iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ry=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,sy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,my=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,gy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_y=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,My="gl_FragColor = linearToOutputTexel( gl_FragColor );",wy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ey=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ny=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Oy=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,jy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Yy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,aS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,lS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,uS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,cS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,mS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,_S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,vS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,SS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ES=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,FS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,US=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,BS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,VS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,GS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,WS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,HS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,jS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,XS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,n1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,i1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,o1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E1=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,C1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:Zx,alphamap_pars_fragment:Kx,alphatest_fragment:Qx,alphatest_pars_fragment:Jx,aomap_fragment:ey,aomap_pars_fragment:ty,begin_vertex:ny,beginnormal_vertex:iy,bsdfs:ry,iridescence_fragment:sy,bumpmap_pars_fragment:oy,clipping_planes_fragment:ay,clipping_planes_pars_fragment:ly,clipping_planes_pars_vertex:uy,clipping_planes_vertex:cy,color_fragment:fy,color_pars_fragment:dy,color_pars_vertex:hy,color_vertex:py,common:my,cube_uv_reflection_fragment:gy,defaultnormal_vertex:_y,displacementmap_pars_vertex:vy,displacementmap_vertex:xy,emissivemap_fragment:yy,emissivemap_pars_fragment:Sy,encodings_fragment:My,encodings_pars_fragment:wy,envmap_fragment:Ey,envmap_common_pars_fragment:Ty,envmap_pars_fragment:Cy,envmap_pars_vertex:by,envmap_physical_pars_fragment:Oy,envmap_vertex:Ay,fog_vertex:Ly,fog_pars_vertex:Py,fog_fragment:Dy,fog_pars_fragment:Ry,gradientmap_pars_fragment:Iy,lightmap_fragment:Ny,lightmap_pars_fragment:Fy,lights_lambert_fragment:zy,lights_lambert_pars_fragment:ky,lights_pars_begin:Uy,lights_toon_fragment:By,lights_toon_pars_fragment:Vy,lights_phong_fragment:Gy,lights_phong_pars_fragment:Wy,lights_physical_fragment:Hy,lights_physical_pars_fragment:jy,lights_fragment_begin:Xy,lights_fragment_maps:qy,lights_fragment_end:$y,logdepthbuf_fragment:Yy,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Qy,map_fragment:Jy,map_pars_fragment:eS,map_particle_fragment:tS,map_particle_pars_fragment:nS,metalnessmap_fragment:iS,metalnessmap_pars_fragment:rS,morphcolor_vertex:sS,morphnormal_vertex:oS,morphtarget_pars_vertex:aS,morphtarget_vertex:lS,normal_fragment_begin:uS,normal_fragment_maps:cS,normal_pars_fragment:fS,normal_pars_vertex:dS,normal_vertex:hS,normalmap_pars_fragment:pS,clearcoat_normal_fragment_begin:mS,clearcoat_normal_fragment_maps:gS,clearcoat_pars_fragment:_S,iridescence_pars_fragment:vS,output_fragment:xS,packing:yS,premultiplied_alpha_fragment:SS,project_vertex:MS,dithering_fragment:wS,dithering_pars_fragment:ES,roughnessmap_fragment:TS,roughnessmap_pars_fragment:CS,shadowmap_pars_fragment:bS,shadowmap_pars_vertex:AS,shadowmap_vertex:LS,shadowmask_pars_fragment:PS,skinbase_vertex:DS,skinning_pars_vertex:RS,skinning_vertex:IS,skinnormal_vertex:NS,specularmap_fragment:FS,specularmap_pars_fragment:zS,tonemapping_fragment:kS,tonemapping_pars_fragment:US,transmission_fragment:OS,transmission_pars_fragment:BS,uv_pars_fragment:VS,uv_pars_vertex:GS,uv_vertex:WS,uv2_pars_fragment:HS,uv2_pars_vertex:jS,uv2_vertex:XS,worldpos_vertex:qS,background_vert:$S,background_frag:YS,backgroundCube_vert:ZS,backgroundCube_frag:KS,cube_vert:QS,cube_frag:JS,depth_vert:e1,depth_frag:t1,distanceRGBA_vert:n1,distanceRGBA_frag:i1,equirect_vert:r1,equirect_frag:s1,linedashed_vert:o1,linedashed_frag:a1,meshbasic_vert:l1,meshbasic_frag:u1,meshlambert_vert:c1,meshlambert_frag:f1,meshmatcap_vert:d1,meshmatcap_frag:h1,meshnormal_vert:p1,meshnormal_frag:m1,meshphong_vert:g1,meshphong_frag:_1,meshphysical_vert:v1,meshphysical_frag:x1,meshtoon_vert:y1,meshtoon_frag:S1,points_vert:M1,points_frag:w1,shadow_vert:E1,shadow_frag:T1,sprite_vert:C1,sprite_frag:b1},se={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Jt},uv2Transform:{value:new Jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}}},Nn={basic:{uniforms:Pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Pt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Pt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Pt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Pt([se.points,se.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Pt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Pt([se.common,se.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Pt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Pt([se.sprite,se.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Pt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Pt([se.lights,se.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Nn.physical={uniforms:Pt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const sa={r:0,b:0,g:0};function A1(t,e,n,i,r,s,o){const a=new Be(0);let l=s===!0?0:1,u,c,d=null,f=0,g=null;function x(p,m){let _=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?n:e).get(v));const S=t.xr,M=S.getSession&&S.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?h(a,l):v&&v.isColor&&(h(v,1),_=!0),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===hl)?(c===void 0&&(c=new Kt(new ur(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:as(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=v.encoding!==We,(d!==v||f!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Kt(new Af(2,2),new cr({name:"BackgroundMaterial",uniforms:as(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=v.encoding!==We,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,m){p.getRGB(sa,bg(t)),i.buffers.color.setClear(sa.r,sa.g,sa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function L1(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(N,j,K,Q,D){let O=!1;if(o){const B=h(Q,K,j);u!==B&&(u=B,g(u.object)),O=m(N,Q,K,D),O&&_(N,Q,K,D)}else{const B=j.wireframe===!0;(u.geometry!==Q.id||u.program!==K.id||u.wireframe!==B)&&(u.geometry=Q.id,u.program=K.id,u.wireframe=B,O=!0)}D!==null&&n.update(D,34963),(O||c)&&(c=!1,y(N,j,K,Q),D!==null&&t.bindBuffer(34963,n.get(D).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function h(N,j,K){const Q=K.wireframe===!0;let D=a[N.id];D===void 0&&(D={},a[N.id]=D);let O=D[j.id];O===void 0&&(O={},D[j.id]=O);let B=O[Q];return B===void 0&&(B=p(f()),O[Q]=B),B}function p(N){const j=[],K=[],Q=[];for(let D=0;D<r;D++)j[D]=0,K[D]=0,Q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:K,attributeDivisors:Q,object:N,attributes:{},index:null}}function m(N,j,K,Q){const D=u.attributes,O=j.attributes;let B=0;const ne=K.getAttributes();for(const F in ne)if(ne[F].location>=0){const te=D[F];let re=O[F];if(re===void 0&&(F==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),F==="instanceColor"&&N.instanceColor&&(re=N.instanceColor)),te===void 0||te.attribute!==re||re&&te.data!==re.data)return!0;B++}return u.attributesNum!==B||u.index!==Q}function _(N,j,K,Q){const D={},O=j.attributes;let B=0;const ne=K.getAttributes();for(const F in ne)if(ne[F].location>=0){let te=O[F];te===void 0&&(F==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),F==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));const re={};re.attribute=te,te&&te.data&&(re.data=te.data),D[F]=re,B++}u.attributes=D,u.attributesNum=B,u.index=Q}function v(){const N=u.newAttributes;for(let j=0,K=N.length;j<K;j++)N[j]=0}function S(N){M(N,0)}function M(N,j){const K=u.newAttributes,Q=u.enabledAttributes,D=u.attributeDivisors;K[N]=1,Q[N]===0&&(t.enableVertexAttribArray(N),Q[N]=1),D[N]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,j),D[N]=j)}function b(){const N=u.newAttributes,j=u.enabledAttributes;for(let K=0,Q=j.length;K<Q;K++)j[K]!==N[K]&&(t.disableVertexAttribArray(K),j[K]=0)}function A(N,j,K,Q,D,O){i.isWebGL2===!0&&(K===5124||K===5125)?t.vertexAttribIPointer(N,j,K,D,O):t.vertexAttribPointer(N,j,K,Q,D,O)}function y(N,j,K,Q){if(i.isWebGL2===!1&&(N.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=Q.attributes,O=K.getAttributes(),B=j.defaultAttributeValues;for(const ne in O){const F=O[ne];if(F.location>=0){let X=D[ne];if(X===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(X=N.instanceColor)),X!==void 0){const te=X.normalized,re=X.itemSize,U=n.get(X);if(U===void 0)continue;const xe=U.buffer,he=U.type,pe=U.bytesPerElement;if(X.isInterleavedBufferAttribute){const ce=X.data,Oe=ce.stride,Ee=X.offset;if(ce.isInstancedInterleavedBuffer){for(let Se=0;Se<F.locationSize;Se++)M(F.location+Se,ce.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Se=0;Se<F.locationSize;Se++)S(F.location+Se);t.bindBuffer(34962,xe);for(let Se=0;Se<F.locationSize;Se++)A(F.location+Se,re/F.locationSize,he,te,Oe*pe,(Ee+re/F.locationSize*Se)*pe)}else{if(X.isInstancedBufferAttribute){for(let ce=0;ce<F.locationSize;ce++)M(F.location+ce,X.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ce=0;ce<F.locationSize;ce++)S(F.location+ce);t.bindBuffer(34962,xe);for(let ce=0;ce<F.locationSize;ce++)A(F.location+ce,re/F.locationSize,he,te,re*pe,re/F.locationSize*ce*pe)}}else if(B!==void 0){const te=B[ne];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(F.location,te);break;case 3:t.vertexAttrib3fv(F.location,te);break;case 4:t.vertexAttrib4fv(F.location,te);break;default:t.vertexAttrib1fv(F.location,te)}}}}b()}function C(){Z();for(const N in a){const j=a[N];for(const K in j){const Q=j[K];for(const D in Q)x(Q[D].object),delete Q[D];delete j[K]}delete a[N]}}function L(N){if(a[N.id]===void 0)return;const j=a[N.id];for(const K in j){const Q=j[K];for(const D in Q)x(Q[D].object),delete Q[D];delete j[K]}delete a[N.id]}function $(N){for(const j in a){const K=a[j];if(K[N.id]===void 0)continue;const Q=K[N.id];for(const D in Q)x(Q[D].object),delete Q[D];delete K[N.id]}}function Z(){z(),c=!0,u!==l&&(u=l,g(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function P1(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=t,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function D1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),f=t.getParameter(35660),g=t.getParameter(3379),x=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),m=t.getParameter(36348),_=t.getParameter(36349),v=f>0,S=o||e.has("OES_texture_float"),M=v&&S,b=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:b}}function R1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Wi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,g){const x=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,m=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?c(null):u();else{const _=s?0:i,v=_*4;let S=m.clippingState||null;l.value=S,S=c(x,f,v,g);for(let M=0;M!==v;++M)S[M]=n[M];m.clippingState=S,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,x){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const m=g+h*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=g;v!==h;++v,S+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function I1(t){let e=new WeakMap;function n(o,a){return a===Mc?o.mapping=rs:a===wc&&(o.mapping=ss),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Mc||a===wc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Xx(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class N1 extends Ag{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vr=4,Rh=[.125,.215,.35,.446,.526,.582],ji=20,xu=new N1,Ih=new Be;let yu=null;const Hi=(1+Math.sqrt(5))/2,br=1/Hi,Nh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Hi,br),new I(0,Hi,-br),new I(br,0,Hi),new I(-br,0,Hi),new I(Hi,br,0),new I(-Hi,br,0)];class Fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){yu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yu),e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===rs||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:mo,format:bn,encoding:ar,depthBuffer:!1},r=zh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F1(s)),this._blurMaterial=z1(s,e,n)}return r}_compileMaterial(e){const n=new Kt(this._lodPlanes[0],e);this._renderer.compile(n,xu)}_sceneToCubeUV(e,n,i,r){const a=new Zt(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Ih),c.toneMapping=ei,c.autoClear=!1;const g=new Ya({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new Kt(new ur,g);let h=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,h=!0):(g.color.copy(Ih),h=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const v=this._cubeSize;oa(r,_*v,m>2?v:0,v,v),c.setRenderTarget(r),h&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===rs||e.mapping===ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;oa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,xu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nh[(r-1)%Nh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Kt(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ji-1),h=s/x,p=isFinite(s)?1+Math.floor(c*h):ji;p>ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ji}`);const m=[];let _=0;for(let A=0;A<ji;++A){const y=A/h,C=Math.exp(-y*y/2);m.push(C),A===0?_+=C:A<p&&(_+=2*C)}for(let A=0;A<m.length;A++)m[A]=m[A]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const S=this._sizeLods[r],M=3*S*(r>v-Vr?r-v+Vr:0),b=4*(this._cubeSize-S);oa(n,M,b,3*S,2*S),l.setRenderTarget(n),l.render(d,xu)}}function F1(t){const e=[],n=[],i=[];let r=t;const s=t-Vr+1+Rh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Vr?l=Rh[o-t+Vr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,x=6,h=3,p=2,m=1,_=new Float32Array(h*x*g),v=new Float32Array(p*x*g),S=new Float32Array(m*x*g);for(let b=0;b<g;b++){const A=b%3*2/3-1,y=b>2?0:-1,C=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];_.set(C,h*x*b),v.set(f,p*x*b);const L=[b,b,b,b,b,b];S.set(L,m*x*b)}const M=new oi;M.setAttribute("position",new Un(_,h)),M.setAttribute("uv",new Un(v,p)),M.setAttribute("faceIndex",new Un(S,m)),e.push(M),r>Vr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function zh(t,e,n){const i=new lr(t,e,n);return i.texture.mapping=hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function z1(t,e,n){const i=new Float32Array(ji),r=new I(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function kh(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Uh(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Lf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function k1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Mc||l===wc,c=l===rs||l===ss;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Fh(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Fh(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function U1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function O1(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const g=d.morphAttributes;for(const x in g){const h=g[x];for(let p=0,m=h.length;p<m;p++)e.update(h[p],34962)}}function u(d){const f=[],g=d.index,x=d.attributes.position;let h=0;if(g!==null){const _=g.array;h=g.version;for(let v=0,S=_.length;v<S;v+=3){const M=_[v+0],b=_[v+1],A=_[v+2];f.push(M,b,b,A,A,M)}}else{const _=x.array;h=x.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const M=v+0,b=v+1,A=v+2;f.push(M,b,b,A,A,M)}}const p=new(xg(f)?Cg:Tg)(f,1);p.version=h;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function B1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){t.drawElements(s,g,a,f*l),n.update(g,s,1)}function d(f,g,x){if(x===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,g,a,f*l,x),n.update(g,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function V1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function G1(t,e){return t[0]-e[0]}function W1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function H1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new $e,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let m=s.get(c);if(m===void 0||m.count!==p){let K=function(){N.dispose(),s.delete(c),c.removeEventListener("dispose",K)};var x=K;m!==void 0&&m.texture.dispose();const S=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let L=0;S===!0&&(L=1),M===!0&&(L=2),b===!0&&(L=3);let $=c.attributes.position.count*L,Z=1;$>e.maxTextureSize&&(Z=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const z=new Float32Array($*Z*4*p),N=new wg(z,$,Z,p);N.type=Zi,N.needsUpdate=!0;const j=L*4;for(let Q=0;Q<p;Q++){const D=A[Q],O=y[Q],B=C[Q],ne=$*Z*4*Q;for(let F=0;F<D.count;F++){const X=F*j;S===!0&&(o.fromBufferAttribute(D,F),z[ne+X+0]=o.x,z[ne+X+1]=o.y,z[ne+X+2]=o.z,z[ne+X+3]=0),M===!0&&(o.fromBufferAttribute(O,F),z[ne+X+4]=o.x,z[ne+X+5]=o.y,z[ne+X+6]=o.z,z[ne+X+7]=0),b===!0&&(o.fromBufferAttribute(B,F),z[ne+X+8]=o.x,z[ne+X+9]=o.y,z[ne+X+10]=o.z,z[ne+X+11]=B.itemSize===4?o.w:1)}}m={count:p,texture:N,size:new ze($,Z)},s.set(c,m),c.addEventListener("dispose",K)}let _=0;for(let S=0;S<g.length;S++)_+=g[S];const v=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",g),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const h=g===void 0?0:g.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let M=0;M<h;M++)p[M]=[M,0];i[c.id]=p}for(let M=0;M<h;M++){const b=p[M];b[0]=M,b[1]=g[M]}p.sort(W1);for(let M=0;M<8;M++)M<h&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(G1);const m=c.morphAttributes.position,_=c.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const b=a[M],A=b[0],y=b[1];A!==Number.MAX_SAFE_INTEGER&&y?(m&&c.getAttribute("morphTarget"+M)!==m[A]&&c.setAttribute("morphTarget"+M,m[A]),_&&c.getAttribute("morphNormal"+M)!==_[A]&&c.setAttribute("morphNormal"+M,_[A]),r[M]=y,v+=y):(m&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),_&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const S=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",S),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function j1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Dg=new Wt,Rg=new wg,Ig=new Lx,Ng=new Lg,Oh=[],Bh=[],Vh=new Float32Array(16),Gh=new Float32Array(9),Wh=new Float32Array(4);function hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Oh[r];if(s===void 0&&(s=new Float32Array(r),Oh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ml(t,e){let n=Bh[e];n===void 0&&(n=new Int32Array(e),Bh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function X1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ut(n,e))return;t.uniform2fv(this.addr,e),ct(n,e)}}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ut(n,e))return;t.uniform3fv(this.addr,e),ct(n,e)}}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ut(n,e))return;t.uniform4fv(this.addr,e),ct(n,e)}}function Z1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ct(n,e)}else{if(ut(n,i))return;Wh.set(i),t.uniformMatrix2fv(this.addr,!1,Wh),ct(n,i)}}function K1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ct(n,e)}else{if(ut(n,i))return;Gh.set(i),t.uniformMatrix3fv(this.addr,!1,Gh),ct(n,i)}}function Q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ct(n,e)}else{if(ut(n,i))return;Vh.set(i),t.uniformMatrix4fv(this.addr,!1,Vh),ct(n,i)}}function J1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ut(n,e))return;t.uniform2iv(this.addr,e),ct(n,e)}}function tM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ut(n,e))return;t.uniform3iv(this.addr,e),ct(n,e)}}function nM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ut(n,e))return;t.uniform4iv(this.addr,e),ct(n,e)}}function iM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ut(n,e))return;t.uniform2uiv(this.addr,e),ct(n,e)}}function sM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ut(n,e))return;t.uniform3uiv(this.addr,e),ct(n,e)}}function oM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ut(n,e))return;t.uniform4uiv(this.addr,e),ct(n,e)}}function aM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Dg,r)}function lM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ig,r)}function uM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ng,r)}function cM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Rg,r)}function fM(t){switch(t){case 5126:return X1;case 35664:return q1;case 35665:return $1;case 35666:return Y1;case 35674:return Z1;case 35675:return K1;case 35676:return Q1;case 5124:case 35670:return J1;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return rM;case 36295:return sM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return cM}}function dM(t,e){t.uniform1fv(this.addr,e)}function hM(t,e){const n=hs(e,this.size,2);t.uniform2fv(this.addr,n)}function pM(t,e){const n=hs(e,this.size,3);t.uniform3fv(this.addr,n)}function mM(t,e){const n=hs(e,this.size,4);t.uniform4fv(this.addr,n)}function gM(t,e){const n=hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _M(t,e){const n=hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vM(t,e){const n=hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xM(t,e){t.uniform1iv(this.addr,e)}function yM(t,e){t.uniform2iv(this.addr,e)}function SM(t,e){t.uniform3iv(this.addr,e)}function MM(t,e){t.uniform4iv(this.addr,e)}function wM(t,e){t.uniform1uiv(this.addr,e)}function EM(t,e){t.uniform2uiv(this.addr,e)}function TM(t,e){t.uniform3uiv(this.addr,e)}function CM(t,e){t.uniform4uiv(this.addr,e)}function bM(t,e,n){const i=this.cache,r=e.length,s=ml(n,r);ut(i,s)||(t.uniform1iv(this.addr,s),ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Dg,s[o])}function AM(t,e,n){const i=this.cache,r=e.length,s=ml(n,r);ut(i,s)||(t.uniform1iv(this.addr,s),ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ig,s[o])}function LM(t,e,n){const i=this.cache,r=e.length,s=ml(n,r);ut(i,s)||(t.uniform1iv(this.addr,s),ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ng,s[o])}function PM(t,e,n){const i=this.cache,r=e.length,s=ml(n,r);ut(i,s)||(t.uniform1iv(this.addr,s),ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Rg,s[o])}function DM(t){switch(t){case 5126:return dM;case 35664:return hM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return _M;case 35676:return vM;case 5124:case 35670:return xM;case 35667:case 35671:return yM;case 35668:case 35672:return SM;case 35669:case 35673:return MM;case 5125:return wM;case 36294:return EM;case 36295:return TM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return PM}}class RM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=fM(n.type)}}class IM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=DM(n.type)}}class NM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Su=/(\w+)(\])?(\[|\.)?/g;function Hh(t,e){t.seq.push(e),t.map[e.id]=e}function FM(t,e,n){const i=t.name,r=i.length;for(Su.lastIndex=0;;){const s=Su.exec(i),o=Su.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Hh(n,u===void 0?new RM(a,t,e):new IM(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new NM(a),Hh(n,d)),n=d}}}class Sa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);FM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function jh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let zM=0;function kM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function UM(t){switch(t){case ar:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Xh(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+kM(t.getShaderSource(e),o)}else return r}function OM(t,e){const n=UM(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function BM(t,e){let n;switch(e){case Gv:n="Linear";break;case Wv:n="Reinhard";break;case Hv:n="OptimizedCineon";break;case jv:n="ACESFilmic";break;case Xv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function VM(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function GM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WM(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Us(t){return t!==""}function qh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(t){return t.replace(HM,jM)}function jM(t,e){const n=Te[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Ac(n)}const XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(t){return t.replace(XM,qM)}function qM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zh(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $M(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===dg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===yv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===zs&&(e="SHADOWMAP_TYPE_VSM"),e}function YM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case rs:case ss:e="ENVMAP_TYPE_CUBE";break;case hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function KM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case mg:e="ENVMAP_BLENDING_MULTIPLY";break;case Bv:e="ENVMAP_BLENDING_MIX";break;case Vv:e="ENVMAP_BLENDING_ADD";break}return e}function QM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function JM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$M(n),u=YM(n),c=ZM(n),d=KM(n),f=QM(n),g=n.isWebGL2?"":VM(n),x=GM(s),h=r.createProgram();let p,m,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[x].filter(Us).join(`
`),p.length>0&&(p+=`
`),m=[g,x].filter(Us).join(`
`),m.length>0&&(m+=`
`)):(p=[Zh(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),m=[g,Zh(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ei?"#define TONE_MAPPING":"",n.toneMapping!==ei?Te.tonemapping_pars_fragment:"",n.toneMapping!==ei?BM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,OM("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Us).join(`
`)),o=Ac(o),o=qh(o,n),o=$h(o,n),a=Ac(a),a=qh(a,n),a=$h(a,n),o=Yh(o),a=Yh(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=_+p+o,S=_+m+a,M=jh(r,35633,v),b=jh(r,35632,S);if(r.attachShader(h,M),r.attachShader(h,b),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const C=r.getProgramInfoLog(h).trim(),L=r.getShaderInfoLog(M).trim(),$=r.getShaderInfoLog(b).trim();let Z=!0,z=!0;if(r.getProgramParameter(h,35714)===!1){Z=!1;const N=Xh(r,M,"vertex"),j=Xh(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+C+`
`+N+`
`+j)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(L===""||$==="")&&(z=!1);z&&(this.diagnostics={runnable:Z,programLog:C,vertexShader:{log:L,prefix:p},fragmentShader:{log:$,prefix:m}})}r.deleteShader(M),r.deleteShader(b);let A;this.getUniforms=function(){return A===void 0&&(A=new Sa(r,h)),A};let y;return this.getAttributes=function(){return y===void 0&&(y=WM(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=b,this}let ew=0;class tw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nw(e),n.set(e,i)),i}}class nw{constructor(e){this.id=ew++,this.code=e,this.usedTimes=0}}function iw(t,e,n,i,r,s,o){const a=new Eg,l=new tw,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,C,L,$,Z){const z=$.fog,N=Z.geometry,j=y.isMeshStandardMaterial?$.environment:null,K=(y.isMeshStandardMaterial?n:e).get(y.envMap||j),Q=K&&K.mapping===hl?K.image.height:null,D=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const O=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,B=O!==void 0?O.length:0;let ne=0;N.morphAttributes.position!==void 0&&(ne=1),N.morphAttributes.normal!==void 0&&(ne=2),N.morphAttributes.color!==void 0&&(ne=3);let F,X,te,re;if(D){const Oe=Nn[D];F=Oe.vertexShader,X=Oe.fragmentShader}else F=y.vertexShader,X=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),re=l.getFragmentShaderID(y);const U=t.getRenderTarget(),xe=y.alphaTest>0,he=y.clearcoat>0,pe=y.iridescence>0;return{isWebGL2:c,shaderID:D,shaderName:y.type,vertexShader:F,fragmentShader:X,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:U===null?t.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:ar,map:!!y.map,matcap:!!y.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:Q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===fx,tangentSpaceNormalMap:y.normalMapType===vg,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===We,clearcoat:he,clearcoatMap:he&&!!y.clearcoatMap,clearcoatRoughnessMap:he&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!y.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!y.iridescenceMap,iridescenceThicknessMap:pe&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===$r,alphaMap:!!y.alphaMap,alphaTest:xe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!N.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!z,useFog:y.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:ei,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===tn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)C.push(L),C.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(m(C,y),_(C,y),C.push(t.outputEncoding)),C.push(y.customProgramCacheKey),C.join()}function m(y,C){y.push(C.precision),y.push(C.outputEncoding),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.combine),y.push(C.vertexUvs),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function _(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),y.push(a.mask)}function v(y){const C=x[y.type];let L;if(C){const $=Nn[C];L=Gx.clone($.uniforms)}else L=y.uniforms;return L}function S(y,C){let L;for(let $=0,Z=u.length;$<Z;$++){const z=u[$];if(z.cacheKey===C){L=z,++L.usedTimes;break}}return L===void 0&&(L=new JM(t,C,y,s),u.push(L)),L}function M(y){if(--y.usedTimes===0){const C=u.indexOf(y);u[C]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function A(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:u,dispose:A}}function rw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function sw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Kh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,g,x,h,p){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:x,renderOrder:d.renderOrder,z:h,group:p},t[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=h,m.group=p),e++,m}function a(d,f,g,x,h,p){const m=o(d,f,g,x,h,p);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(d,f,g,x,h,p){const m=o(d,f,g,x,h,p);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,f){n.length>1&&n.sort(d||sw),i.length>1&&i.sort(f||Kh),r.length>1&&r.sort(f||Kh)}function c(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function ow(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Qh,t.set(i,[o])):r>=s.length?(o=new Qh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function aw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Be};break;case"SpotLight":n={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let uw=0;function cw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fw(t,e){const n=new aw,i=lw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new I);const s=new I,o=new rt,a=new rt;function l(c,d){let f=0,g=0,x=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let h=0,p=0,m=0,_=0,v=0,S=0,M=0,b=0,A=0,y=0;c.sort(cw);const C=d!==!0?Math.PI:1;for(let $=0,Z=c.length;$<Z;$++){const z=c[$],N=z.color,j=z.intensity,K=z.distance,Q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=N.r*j*C,g+=N.g*j*C,x+=N.b*j*C;else if(z.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(z.sh.coefficients[D],j);else if(z.isDirectionalLight){const D=n.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity*C),z.castShadow){const O=z.shadow,B=i.get(z);B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,r.directionalShadow[h]=B,r.directionalShadowMap[h]=Q,r.directionalShadowMatrix[h]=z.shadow.matrix,S++}r.directional[h]=D,h++}else if(z.isSpotLight){const D=n.get(z);D.position.setFromMatrixPosition(z.matrixWorld),D.color.copy(N).multiplyScalar(j*C),D.distance=K,D.coneCos=Math.cos(z.angle),D.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),D.decay=z.decay,r.spot[m]=D;const O=z.shadow;if(z.map&&(r.spotLightMap[A]=z.map,A++,O.updateMatrices(z),z.castShadow&&y++),r.spotLightMatrix[m]=O.matrix,z.castShadow){const B=i.get(z);B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,r.spotShadow[m]=B,r.spotShadowMap[m]=Q,b++}m++}else if(z.isRectAreaLight){const D=n.get(z);D.color.copy(N).multiplyScalar(j),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),r.rectArea[_]=D,_++}else if(z.isPointLight){const D=n.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity*C),D.distance=z.distance,D.decay=z.decay,z.castShadow){const O=z.shadow,B=i.get(z);B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,B.shadowCameraNear=O.camera.near,B.shadowCameraFar=O.camera.far,r.pointShadow[p]=B,r.pointShadowMap[p]=Q,r.pointShadowMatrix[p]=z.shadow.matrix,M++}r.point[p]=D,p++}else if(z.isHemisphereLight){const D=n.get(z);D.skyColor.copy(z.color).multiplyScalar(j*C),D.groundColor.copy(z.groundColor).multiplyScalar(j*C),r.hemi[v]=D,v++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=x;const L=r.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==m||L.rectAreaLength!==_||L.hemiLength!==v||L.numDirectionalShadows!==S||L.numPointShadows!==M||L.numSpotShadows!==b||L.numSpotMaps!==A)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=_,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=b+A-y,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=y,L.directionalLength=h,L.pointLength=p,L.spotLength=m,L.rectAreaLength=_,L.hemiLength=v,L.numDirectionalShadows=S,L.numPointShadows=M,L.numSpotShadows=b,L.numSpotMaps=A,r.version=uw++)}function u(c,d){let f=0,g=0,x=0,h=0,p=0;const m=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const S=c[_];if(S.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(S.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),x++}else if(S.isRectAreaLight){const M=r.rectArea[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),h++}else if(S.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),g++}else if(S.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:r}}function Jh(t,e){const n=new fw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function dw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Jh(t,e),n.set(s,[l])):o>=a.length?(l=new Jh(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class hw extends To{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pw extends To{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _w(t,e,n){let i=new bf;const r=new ze,s=new ze,o=new $e,a=new hw({depthPacking:cx}),l=new pw,u={},c=n.maxTextureSize,d={[Pi]:tn,[tn]:Pi,[vi]:vi},f=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:mw,fragmentShader:gw}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const x=new oi;x.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Kt(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dg,this.render=function(S,M,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const A=t.getRenderTarget(),y=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),L=t.state;L.setBlending(bi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let $=0,Z=S.length;$<Z;$++){const z=S[$],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const j=N.getFrameExtents();if(r.multiply(j),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/j.x),r.x=s.x*j.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/j.y),r.y=s.y*j.y,N.mapSize.y=s.y)),N.map===null){const Q=this.type!==zs?{minFilter:Rt,magFilter:Rt}:{};N.map=new lr(r.x,r.y,Q),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const K=N.getViewportCount();for(let Q=0;Q<K;Q++){const D=N.getViewport(Q);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),L.viewport(o),N.updateMatrices(z,Q),i=N.getFrustum(),v(M,b,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===zs&&m(N,b),N.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(A,y,C)};function m(S,M){const b=e.update(h);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new lr(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(M,null,b,f,h,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(M,null,b,g,h,null)}function _(S,M,b,A,y,C){let L=null;const $=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if($!==void 0)L=$;else if(L=b.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const Z=L.uuid,z=M.uuid;let N=u[Z];N===void 0&&(N={},u[Z]=N);let j=N[z];j===void 0&&(j=L.clone(),N[z]=j),L=j}return L.visible=M.visible,L.wireframe=M.wireframe,C===zs?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:d[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.map=M.map,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(b.matrixWorld),L.nearDistance=A,L.farDistance=y),L}function v(S,M,b,A,y){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===zs)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const $=e.update(S),Z=S.material;if(Array.isArray(Z)){const z=$.groups;for(let N=0,j=z.length;N<j;N++){const K=z[N],Q=Z[K.materialIndex];if(Q&&Q.visible){const D=_(S,Q,A,b.near,b.far,y);t.renderBufferDirect(b,null,$,D,S,K)}}}else if(Z.visible){const z=_(S,Z,A,b.near,b.far,y);t.renderBufferDirect(b,null,$,z,S,null)}}const L=S.children;for(let $=0,Z=L.length;$<Z;$++)v(L[$],M,b,A,y)}}function vw(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const V=new $e;let J=null;const le=new $e(0,0,0,0);return{setMask:function(de){J!==de&&!P&&(t.colorMask(de,de,de,de),J=de)},setLocked:function(de){P=de},setClear:function(de,Fe,dt,St,Ni){Ni===!0&&(de*=St,Fe*=St,dt*=St),V.set(de,Fe,dt,St),le.equals(V)===!1&&(t.clearColor(de,Fe,dt,St),le.copy(V))},reset:function(){P=!1,J=null,le.set(-1,0,0,0)}}}function s(){let P=!1,V=null,J=null,le=null;return{setTest:function(de){de?xe(2929):he(2929)},setMask:function(de){V!==de&&!P&&(t.depthMask(de),V=de)},setFunc:function(de){if(J!==de){switch(de){case Iv:t.depthFunc(512);break;case Nv:t.depthFunc(519);break;case Fv:t.depthFunc(513);break;case Sc:t.depthFunc(515);break;case zv:t.depthFunc(514);break;case kv:t.depthFunc(518);break;case Uv:t.depthFunc(516);break;case Ov:t.depthFunc(517);break;default:t.depthFunc(515)}J=de}},setLocked:function(de){P=de},setClear:function(de){le!==de&&(t.clearDepth(de),le=de)},reset:function(){P=!1,V=null,J=null,le=null}}}function o(){let P=!1,V=null,J=null,le=null,de=null,Fe=null,dt=null,St=null,Ni=null;return{setTest:function(Xe){P||(Xe?xe(2960):he(2960))},setMask:function(Xe){V!==Xe&&!P&&(t.stencilMask(Xe),V=Xe)},setFunc:function(Xe,Bn,un){(J!==Xe||le!==Bn||de!==un)&&(t.stencilFunc(Xe,Bn,un),J=Xe,le=Bn,de=un)},setOp:function(Xe,Bn,un){(Fe!==Xe||dt!==Bn||St!==un)&&(t.stencilOp(Xe,Bn,un),Fe=Xe,dt=Bn,St=un)},setLocked:function(Xe){P=Xe},setClear:function(Xe){Ni!==Xe&&(t.clearStencil(Xe),Ni=Xe)},reset:function(){P=!1,V=null,J=null,le=null,de=null,Fe=null,dt=null,St=null,Ni=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},g={},x=new WeakMap,h=[],p=null,m=!1,_=null,v=null,S=null,M=null,b=null,A=null,y=null,C=!1,L=null,$=null,Z=null,z=null,N=null;const j=t.getParameter(35661);let K=!1,Q=0;const D=t.getParameter(7938);D.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(D)[1]),K=Q>=1):D.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),K=Q>=2);let O=null,B={};const ne=t.getParameter(3088),F=t.getParameter(2978),X=new $e().fromArray(ne),te=new $e().fromArray(F);function re(P,V,J){const le=new Uint8Array(4),de=t.createTexture();t.bindTexture(P,de),t.texParameteri(P,10241,9728),t.texParameteri(P,10240,9728);for(let Fe=0;Fe<J;Fe++)t.texImage2D(V+Fe,0,6408,1,1,0,6408,5121,le);return de}const U={};U[3553]=re(3553,3553,1),U[34067]=re(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),xe(2929),l.setFunc(Sc),yt(!1),ln(Wd),xe(2884),bt(bi);function xe(P){f[P]!==!0&&(t.enable(P),f[P]=!0)}function he(P){f[P]!==!1&&(t.disable(P),f[P]=!1)}function pe(P,V){return g[P]!==V?(t.bindFramebuffer(P,V),g[P]=V,i&&(P===36009&&(g[36160]=V),P===36160&&(g[36009]=V)),!0):!1}function ce(P,V){let J=h,le=!1;if(P)if(J=x.get(V),J===void 0&&(J=[],x.set(V,J)),P.isWebGLMultipleRenderTargets){const de=P.texture;if(J.length!==de.length||J[0]!==36064){for(let Fe=0,dt=de.length;Fe<dt;Fe++)J[Fe]=36064+Fe;J.length=de.length,le=!0}}else J[0]!==36064&&(J[0]=36064,le=!0);else J[0]!==1029&&(J[0]=1029,le=!0);le&&(n.isWebGL2?t.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Oe(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const Ee={[Ar]:32774,[Mv]:32778,[wv]:32779};if(i)Ee[qd]=32775,Ee[$d]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ee[qd]=P.MIN_EXT,Ee[$d]=P.MAX_EXT)}const Se={[Ev]:0,[Tv]:1,[Cv]:768,[hg]:770,[Rv]:776,[Pv]:774,[Av]:772,[bv]:769,[pg]:771,[Dv]:775,[Lv]:773};function bt(P,V,J,le,de,Fe,dt,St){if(P===bi){m===!0&&(he(3042),m=!1);return}if(m===!1&&(xe(3042),m=!0),P!==Sv){if(P!==_||St!==C){if((v!==Ar||b!==Ar)&&(t.blendEquation(32774),v=Ar,b=Ar),St)switch(P){case $r:t.blendFuncSeparate(1,771,1,771);break;case Hd:t.blendFunc(1,1);break;case jd:t.blendFuncSeparate(0,769,0,1);break;case Xd:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case $r:t.blendFuncSeparate(770,771,1,771);break;case Hd:t.blendFunc(770,1);break;case jd:t.blendFuncSeparate(0,769,0,1);break;case Xd:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,M=null,A=null,y=null,_=P,C=St}return}de=de||V,Fe=Fe||J,dt=dt||le,(V!==v||de!==b)&&(t.blendEquationSeparate(Ee[V],Ee[de]),v=V,b=de),(J!==S||le!==M||Fe!==A||dt!==y)&&(t.blendFuncSeparate(Se[J],Se[le],Se[Fe],Se[dt]),S=J,M=le,A=Fe,y=dt),_=P,C=!1}function an(P,V){P.side===vi?he(2884):xe(2884);let J=P.side===tn;V&&(J=!J),yt(J),P.blending===$r&&P.transparent===!1?bt(bi):bt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const le=P.stencilWrite;u.setTest(le),le&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ke(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?xe(32926):he(32926)}function yt(P){L!==P&&(P?t.frontFace(2304):t.frontFace(2305),L=P)}function ln(P){P!==vv?(xe(2884),P!==$&&(P===Wd?t.cullFace(1029):P===xv?t.cullFace(1028):t.cullFace(1032))):he(2884),$=P}function st(P){P!==Z&&(K&&t.lineWidth(P),Z=P)}function ke(P,V,J){P?(xe(32823),(z!==V||N!==J)&&(t.polygonOffset(V,J),z=V,N=J)):he(32823)}function On(P){P?xe(3089):he(3089)}function vn(P){P===void 0&&(P=33984+j-1),O!==P&&(t.activeTexture(P),O=P)}function T(P,V,J){J===void 0&&(O===null?J=33984+j-1:J=O);let le=B[J];le===void 0&&(le={type:void 0,texture:void 0},B[J]=le),(le.type!==P||le.texture!==V)&&(O!==J&&(t.activeTexture(J),O=J),t.bindTexture(P,V||U[P]),le.type=P,le.texture=V)}function w(){const P=B[O];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function W(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(P){X.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),X.copy(P))}function me(P){te.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),te.copy(P))}function Ie(P,V){let J=d.get(V);J===void 0&&(J=new WeakMap,d.set(V,J));let le=J.get(P);le===void 0&&(le=t.getUniformBlockIndex(V,P.name),J.set(P,le))}function je(P,V){const le=d.get(V).get(P);c.get(V)!==le&&(t.uniformBlockBinding(V,le,P.__bindingPointIndex),c.set(V,le))}function ft(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},O=null,B={},g={},x=new WeakMap,h=[],p=null,m=!1,_=null,v=null,S=null,M=null,b=null,A=null,y=null,C=!1,L=null,$=null,Z=null,z=null,N=null,X.set(0,0,t.canvas.width,t.canvas.height),te.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:xe,disable:he,bindFramebuffer:pe,drawBuffers:ce,useProgram:Oe,setBlending:bt,setMaterial:an,setFlipSided:yt,setCullFace:ln,setLineWidth:st,setPolygonOffset:ke,setScissorTest:On,activeTexture:vn,bindTexture:T,unbindTexture:w,compressedTexImage2D:W,compressedTexImage3D:ee,texImage2D:ye,texImage3D:fe,updateUBOMapping:Ie,uniformBlockBinding:je,texStorage2D:q,texStorage3D:_e,texSubImage2D:ie,texSubImage3D:oe,compressedTexSubImage2D:Me,compressedTexSubImage3D:ae,scissor:ve,viewport:me,reset:ft}}function xw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,w){return m?new OffscreenCanvas(T,w):_o("canvas")}function v(T,w,W,ee){let ie=1;if((T.width>ee||T.height>ee)&&(ie=ee/Math.max(T.width,T.height)),ie<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const oe=w?$a:Math.floor,Me=oe(ie*T.width),ae=oe(ie*T.height);h===void 0&&(h=_(Me,ae));const q=W?_(Me,ae):h;return q.width=Me,q.height=ae,q.getContext("2d").drawImage(T,0,0,Me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Me+"x"+ae+")."),q}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function S(T){return bc(T.width)&&bc(T.height)}function M(T){return a?!1:T.wrapS!==Cn||T.wrapT!==Cn||T.minFilter!==Rt&&T.minFilter!==hn}function b(T,w){return T.generateMipmaps&&w&&T.minFilter!==Rt&&T.minFilter!==hn}function A(T){t.generateMipmap(T)}function y(T,w,W,ee,ie=!1){if(a===!1)return w;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let oe=w;return w===6403&&(W===5126&&(oe=33326),W===5131&&(oe=33325),W===5121&&(oe=33321)),w===33319&&(W===5126&&(oe=33328),W===5131&&(oe=33327),W===5121&&(oe=33323)),w===6408&&(W===5126&&(oe=34836),W===5131&&(oe=34842),W===5121&&(oe=ee===We&&ie===!1?35907:32856),W===32819&&(oe=32854),W===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function C(T,w,W){return b(T,W)===!0||T.isFramebufferTexture&&T.minFilter!==Rt&&T.minFilter!==hn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function L(T){return T===Rt||T===Yd||T===Xl?9728:9729}function $(T){const w=T.target;w.removeEventListener("dispose",$),z(w),w.isVideoTexture&&x.delete(w)}function Z(T){const w=T.target;w.removeEventListener("dispose",Z),j(w)}function z(T){const w=i.get(T);if(w.__webglInit===void 0)return;const W=T.source,ee=p.get(W);if(ee){const ie=ee[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&N(T),Object.keys(ee).length===0&&p.delete(W)}i.remove(T)}function N(T){const w=i.get(T);t.deleteTexture(w.__webglTexture);const W=T.source,ee=p.get(W);delete ee[w.__cacheKey],o.memory.textures--}function j(T){const w=T.texture,W=i.get(T),ee=i.get(w);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)t.deleteFramebuffer(W.__webglFramebuffer[ie]),W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[ie]);else{if(t.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ie=0;ie<W.__webglColorRenderbuffer.length;ie++)W.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[ie]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ie=0,oe=w.length;ie<oe;ie++){const Me=i.get(w[ie]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(w[ie])}i.remove(w),i.remove(T)}let K=0;function Q(){K=0}function D(){const T=K;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),K+=1,T}function O(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.encoding),w.join()}function B(T,w){const W=i.get(T);if(T.isVideoTexture&&On(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(W,T,w);return}}n.bindTexture(3553,W.__webglTexture,33984+w)}function ne(T,w){const W=i.get(T);if(T.version>0&&W.__version!==T.version){he(W,T,w);return}n.bindTexture(35866,W.__webglTexture,33984+w)}function F(T,w){const W=i.get(T);if(T.version>0&&W.__version!==T.version){he(W,T,w);return}n.bindTexture(32879,W.__webglTexture,33984+w)}function X(T,w){const W=i.get(T);if(T.version>0&&W.__version!==T.version){pe(W,T,w);return}n.bindTexture(34067,W.__webglTexture,33984+w)}const te={[Ec]:10497,[Cn]:33071,[Tc]:33648},re={[Rt]:9728,[Yd]:9984,[Xl]:9986,[hn]:9729,[qv]:9985,[po]:9987};function U(T,w,W){if(W?(t.texParameteri(T,10242,te[w.wrapS]),t.texParameteri(T,10243,te[w.wrapT]),(T===32879||T===35866)&&t.texParameteri(T,32882,te[w.wrapR]),t.texParameteri(T,10240,re[w.magFilter]),t.texParameteri(T,10241,re[w.minFilter])):(t.texParameteri(T,10242,33071),t.texParameteri(T,10243,33071),(T===32879||T===35866)&&t.texParameteri(T,32882,33071),(w.wrapS!==Cn||w.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,10240,L(w.magFilter)),t.texParameteri(T,10241,L(w.minFilter)),w.minFilter!==Rt&&w.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Rt||w.minFilter!==Xl&&w.minFilter!==po||w.type===Zi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===mo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function xe(T,w){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",$));const ee=w.source;let ie=p.get(ee);ie===void 0&&(ie={},p.set(ee,ie));const oe=O(w);if(oe!==T.__cacheKey){ie[oe]===void 0&&(ie[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[oe].usedTimes++;const Me=ie[T.__cacheKey];Me!==void 0&&(ie[T.__cacheKey].usedTimes--,Me.usedTimes===0&&N(w)),T.__cacheKey=oe,T.__webglTexture=ie[oe].texture}return W}function he(T,w,W){let ee=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=35866),w.isData3DTexture&&(ee=32879);const ie=xe(T,w),oe=w.source;n.bindTexture(ee,T.__webglTexture,33984+W);const Me=i.get(oe);if(oe.version!==Me.__version||ie===!0){n.activeTexture(33984+W),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const ae=M(w)&&S(w.image)===!1;let q=v(w.image,ae,!1,c);q=vn(w,q);const _e=S(q)||a,ye=s.convert(w.format,w.encoding);let fe=s.convert(w.type),ve=y(w.internalFormat,ye,fe,w.encoding,w.isVideoTexture);U(ee,w,_e);let me;const Ie=w.mipmaps,je=a&&w.isVideoTexture!==!0,ft=Me.__version===void 0||ie===!0,P=C(w,q,_e);if(w.isDepthTexture)ve=6402,a?w.type===Zi?ve=36012:w.type===Yi?ve=33190:w.type===Yr?ve=35056:ve=33189:w.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ji&&ve===6402&&w.type!==_g&&w.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Yi,fe=s.convert(w.type)),w.format===os&&ve===6402&&(ve=34041,w.type!==Yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Yr,fe=s.convert(w.type))),ft&&(je?n.texStorage2D(3553,1,ve,q.width,q.height):n.texImage2D(3553,0,ve,q.width,q.height,0,ye,fe,null));else if(w.isDataTexture)if(Ie.length>0&&_e){je&&ft&&n.texStorage2D(3553,P,ve,Ie[0].width,Ie[0].height);for(let V=0,J=Ie.length;V<J;V++)me=Ie[V],je?n.texSubImage2D(3553,V,0,0,me.width,me.height,ye,fe,me.data):n.texImage2D(3553,V,ve,me.width,me.height,0,ye,fe,me.data);w.generateMipmaps=!1}else je?(ft&&n.texStorage2D(3553,P,ve,q.width,q.height),n.texSubImage2D(3553,0,0,0,q.width,q.height,ye,fe,q.data)):n.texImage2D(3553,0,ve,q.width,q.height,0,ye,fe,q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){je&&ft&&n.texStorage3D(35866,P,ve,Ie[0].width,Ie[0].height,q.depth);for(let V=0,J=Ie.length;V<J;V++)me=Ie[V],w.format!==bn?ye!==null?je?n.compressedTexSubImage3D(35866,V,0,0,0,me.width,me.height,q.depth,ye,me.data,0,0):n.compressedTexImage3D(35866,V,ve,me.width,me.height,q.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage3D(35866,V,0,0,0,me.width,me.height,q.depth,ye,fe,me.data):n.texImage3D(35866,V,ve,me.width,me.height,q.depth,0,ye,fe,me.data)}else{je&&ft&&n.texStorage2D(3553,P,ve,Ie[0].width,Ie[0].height);for(let V=0,J=Ie.length;V<J;V++)me=Ie[V],w.format!==bn?ye!==null?je?n.compressedTexSubImage2D(3553,V,0,0,me.width,me.height,ye,me.data):n.compressedTexImage2D(3553,V,ve,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage2D(3553,V,0,0,me.width,me.height,ye,fe,me.data):n.texImage2D(3553,V,ve,me.width,me.height,0,ye,fe,me.data)}else if(w.isDataArrayTexture)je?(ft&&n.texStorage3D(35866,P,ve,q.width,q.height,q.depth),n.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,ye,fe,q.data)):n.texImage3D(35866,0,ve,q.width,q.height,q.depth,0,ye,fe,q.data);else if(w.isData3DTexture)je?(ft&&n.texStorage3D(32879,P,ve,q.width,q.height,q.depth),n.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,ye,fe,q.data)):n.texImage3D(32879,0,ve,q.width,q.height,q.depth,0,ye,fe,q.data);else if(w.isFramebufferTexture){if(ft)if(je)n.texStorage2D(3553,P,ve,q.width,q.height);else{let V=q.width,J=q.height;for(let le=0;le<P;le++)n.texImage2D(3553,le,ve,V,J,0,ye,fe,null),V>>=1,J>>=1}}else if(Ie.length>0&&_e){je&&ft&&n.texStorage2D(3553,P,ve,Ie[0].width,Ie[0].height);for(let V=0,J=Ie.length;V<J;V++)me=Ie[V],je?n.texSubImage2D(3553,V,0,0,ye,fe,me):n.texImage2D(3553,V,ve,ye,fe,me);w.generateMipmaps=!1}else je?(ft&&n.texStorage2D(3553,P,ve,q.width,q.height),n.texSubImage2D(3553,0,0,0,ye,fe,q)):n.texImage2D(3553,0,ve,ye,fe,q);b(w,_e)&&A(ee),Me.__version=oe.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function pe(T,w,W){if(w.image.length!==6)return;const ee=xe(T,w),ie=w.source;n.bindTexture(34067,T.__webglTexture,33984+W);const oe=i.get(ie);if(ie.version!==oe.__version||ee===!0){n.activeTexture(33984+W),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const Me=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,q=[];for(let V=0;V<6;V++)!Me&&!ae?q[V]=v(w.image[V],!1,!0,u):q[V]=ae?w.image[V].image:w.image[V],q[V]=vn(w,q[V]);const _e=q[0],ye=S(_e)||a,fe=s.convert(w.format,w.encoding),ve=s.convert(w.type),me=y(w.internalFormat,fe,ve,w.encoding),Ie=a&&w.isVideoTexture!==!0,je=oe.__version===void 0||ee===!0;let ft=C(w,_e,ye);U(34067,w,ye);let P;if(Me){Ie&&je&&n.texStorage2D(34067,ft,me,_e.width,_e.height);for(let V=0;V<6;V++){P=q[V].mipmaps;for(let J=0;J<P.length;J++){const le=P[J];w.format!==bn?fe!==null?Ie?n.compressedTexSubImage2D(34069+V,J,0,0,le.width,le.height,fe,le.data):n.compressedTexImage2D(34069+V,J,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(34069+V,J,0,0,le.width,le.height,fe,ve,le.data):n.texImage2D(34069+V,J,me,le.width,le.height,0,fe,ve,le.data)}}}else{P=w.mipmaps,Ie&&je&&(P.length>0&&ft++,n.texStorage2D(34067,ft,me,q[0].width,q[0].height));for(let V=0;V<6;V++)if(ae){Ie?n.texSubImage2D(34069+V,0,0,0,q[V].width,q[V].height,fe,ve,q[V].data):n.texImage2D(34069+V,0,me,q[V].width,q[V].height,0,fe,ve,q[V].data);for(let J=0;J<P.length;J++){const de=P[J].image[V].image;Ie?n.texSubImage2D(34069+V,J+1,0,0,de.width,de.height,fe,ve,de.data):n.texImage2D(34069+V,J+1,me,de.width,de.height,0,fe,ve,de.data)}}else{Ie?n.texSubImage2D(34069+V,0,0,0,fe,ve,q[V]):n.texImage2D(34069+V,0,me,fe,ve,q[V]);for(let J=0;J<P.length;J++){const le=P[J];Ie?n.texSubImage2D(34069+V,J+1,0,0,fe,ve,le.image[V]):n.texImage2D(34069+V,J+1,me,fe,ve,le.image[V])}}}b(w,ye)&&A(34067),oe.__version=ie.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function ce(T,w,W,ee,ie){const oe=s.convert(W.format,W.encoding),Me=s.convert(W.type),ae=y(W.internalFormat,oe,Me,W.encoding);i.get(w).__hasExternalTextures||(ie===32879||ie===35866?n.texImage3D(ie,0,ae,w.width,w.height,w.depth,0,oe,Me,null):n.texImage2D(ie,0,ae,w.width,w.height,0,oe,Me,null)),n.bindFramebuffer(36160,T),ke(w)?f.framebufferTexture2DMultisampleEXT(36160,ee,ie,i.get(W).__webglTexture,0,st(w)):(ie===3553||ie>=34069&&ie<=34074)&&t.framebufferTexture2D(36160,ee,ie,i.get(W).__webglTexture,0),n.bindFramebuffer(36160,null)}function Oe(T,w,W){if(t.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let ee=33189;if(W||ke(w)){const ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Zi?ee=36012:ie.type===Yi&&(ee=33190));const oe=st(w);ke(w)?f.renderbufferStorageMultisampleEXT(36161,oe,ee,w.width,w.height):t.renderbufferStorageMultisample(36161,oe,ee,w.width,w.height)}else t.renderbufferStorage(36161,ee,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){const ee=st(w);W&&ke(w)===!1?t.renderbufferStorageMultisample(36161,ee,35056,w.width,w.height):ke(w)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,T)}else{const ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0;ie<ee.length;ie++){const oe=ee[ie],Me=s.convert(oe.format,oe.encoding),ae=s.convert(oe.type),q=y(oe.internalFormat,Me,ae,oe.encoding),_e=st(w);W&&ke(w)===!1?t.renderbufferStorageMultisample(36161,_e,q,w.width,w.height):ke(w)?f.renderbufferStorageMultisampleEXT(36161,_e,q,w.width,w.height):t.renderbufferStorage(36161,q,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function Ee(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,ie=st(w);if(w.depthTexture.format===Ji)ke(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):t.framebufferTexture2D(36160,36096,3553,ee,0);else if(w.depthTexture.format===os)ke(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):t.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function Se(T){const w=i.get(T),W=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ee(w.__webglFramebuffer,T)}else if(W){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(36160,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=t.createRenderbuffer(),Oe(w.__webglDepthbuffer[ee],T,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Oe(w.__webglDepthbuffer,T,!1);n.bindFramebuffer(36160,null)}function bt(T,w,W){const ee=i.get(T);w!==void 0&&ce(ee.__webglFramebuffer,T,T.texture,36064,3553),W!==void 0&&Se(T)}function an(T){const w=T.texture,W=i.get(T),ee=i.get(w);T.addEventListener("dispose",Z),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=w.version,o.memory.textures++);const ie=T.isWebGLCubeRenderTarget===!0,oe=T.isWebGLMultipleRenderTargets===!0,Me=S(T)||a;if(ie){W.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)W.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(W.__webglFramebuffer=t.createFramebuffer(),oe)if(r.drawBuffers){const ae=T.texture;for(let q=0,_e=ae.length;q<_e;q++){const ye=i.get(ae[q]);ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ke(T)===!1){const ae=oe?w:[w];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let q=0;q<ae.length;q++){const _e=ae[q];W.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(36161,W.__webglColorRenderbuffer[q]);const ye=s.convert(_e.format,_e.encoding),fe=s.convert(_e.type),ve=y(_e.internalFormat,ye,fe,_e.encoding,T.isXRRenderTarget===!0),me=st(T);t.renderbufferStorageMultisample(36161,me,ve,T.width,T.height),t.framebufferRenderbuffer(36160,36064+q,36161,W.__webglColorRenderbuffer[q])}t.bindRenderbuffer(36161,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(W.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(36160,null)}}if(ie){n.bindTexture(34067,ee.__webglTexture),U(34067,w,Me);for(let ae=0;ae<6;ae++)ce(W.__webglFramebuffer[ae],T,w,36064,34069+ae);b(w,Me)&&A(34067),n.unbindTexture()}else if(oe){const ae=T.texture;for(let q=0,_e=ae.length;q<_e;q++){const ye=ae[q],fe=i.get(ye);n.bindTexture(3553,fe.__webglTexture),U(3553,ye,Me),ce(W.__webglFramebuffer,T,ye,36064+q,3553),b(ye,Me)&&A(3553)}n.unbindTexture()}else{let ae=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ae=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ae,ee.__webglTexture),U(ae,w,Me),ce(W.__webglFramebuffer,T,w,36064,ae),b(w,Me)&&A(ae),n.unbindTexture()}T.depthBuffer&&Se(T)}function yt(T){const w=S(T)||a,W=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,ie=W.length;ee<ie;ee++){const oe=W[ee];if(b(oe,w)){const Me=T.isWebGLCubeRenderTarget?34067:3553,ae=i.get(oe).__webglTexture;n.bindTexture(Me,ae),A(Me),n.unbindTexture()}}}function ln(T){if(a&&T.samples>0&&ke(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],W=T.width,ee=T.height;let ie=16384;const oe=[],Me=T.stencilBuffer?33306:36096,ae=i.get(T),q=T.isWebGLMultipleRenderTargets===!0;if(q)for(let _e=0;_e<w.length;_e++)n.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+_e,36161,null),n.bindFramebuffer(36160,ae.__webglFramebuffer),t.framebufferTexture2D(36009,36064+_e,3553,null,0);n.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,ae.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){oe.push(36064+_e),T.depthBuffer&&oe.push(Me);const ye=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ye===!1&&(T.depthBuffer&&(ie|=256),T.stencilBuffer&&(ie|=1024)),q&&t.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[_e]),ye===!0&&(t.invalidateFramebuffer(36008,[Me]),t.invalidateFramebuffer(36009,[Me])),q){const fe=i.get(w[_e]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,fe,0)}t.blitFramebuffer(0,0,W,ee,0,0,W,ee,ie,9728),g&&t.invalidateFramebuffer(36008,oe)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),q)for(let _e=0;_e<w.length;_e++){n.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+_e,36161,ae.__webglColorRenderbuffer[_e]);const ye=i.get(w[_e]).__webglTexture;n.bindFramebuffer(36160,ae.__webglFramebuffer),t.framebufferTexture2D(36009,36064+_e,3553,ye,0)}n.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function st(T){return Math.min(d,T.samples)}function ke(T){const w=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function On(T){const w=o.render.frame;x.get(T)!==w&&(x.set(T,w),T.update())}function vn(T,w){const W=T.encoding,ee=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Cc||W!==ar&&(W===We?a===!1?e.has("EXT_sRGB")===!0&&ee===bn?(T.format=Cc,T.minFilter=hn,T.generateMipmaps=!1):w=Sg.sRGBToLinear(w):(ee!==bn||ie!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),w}this.allocateTextureUnit=D,this.resetTextureUnits=Q,this.setTexture2D=B,this.setTexture2DArray=ne,this.setTexture3D=F,this.setTextureCube=X,this.rebindTextures=bt,this.setupRenderTarget=an,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ke}function yw(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===or)return 5121;if(s===Kv)return 32819;if(s===Qv)return 32820;if(s===$v)return 5120;if(s===Yv)return 5122;if(s===_g)return 5123;if(s===Zv)return 5124;if(s===Yi)return 5125;if(s===Zi)return 5126;if(s===mo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Jv)return 6406;if(s===bn)return 6408;if(s===ex)return 6409;if(s===tx)return 6410;if(s===Ji)return 6402;if(s===os)return 34041;if(s===Cc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===nx)return 6403;if(s===ix)return 36244;if(s===rx)return 33319;if(s===sx)return 33320;if(s===ox)return 36249;if(s===ql||s===$l||s===Yl||s===Zl)if(o===We)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ql)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ql)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$l)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zd||s===Kd||s===Qd||s===Jd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ax)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===eh||s===th)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===eh)return o===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===th)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===uh||s===ch||s===fh||s===dh||s===hh||s===ph||s===mh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===nh)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ih)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rh)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sh)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oh)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ah)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lh)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===uh)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ch)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fh)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dh)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hh)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ph)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mh)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Kl)return o===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===lx||s===gh||s===_h||s===vh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Kl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===gh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_h)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Sw extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class aa extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mw={type:"move"};class Mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i),m=this._getHandJoint(u,h);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,x=.005;u.inputState.pinching&&f>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ww extends Wt{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Ji,c!==Ji&&c!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ji&&(i=Yi),i===void 0&&c===os&&(i=Yr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1}}class Ew extends fs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,g=null,x=null;const h=n.getContextAttributes();let p=null,m=null;const _=[],v=[],S=new Set,M=new Map,b=new Zt;b.layers.enable(1),b.viewport=new $e;const A=new Zt;A.layers.enable(2),A.viewport=new $e;const y=[b,A],C=new Sw;C.layers.enable(1),C.layers.enable(2);let L=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let X=_[F];return X===void 0&&(X=new Mu,_[F]=X),X.getTargetRaySpace()},this.getControllerGrip=function(F){let X=_[F];return X===void 0&&(X=new Mu,_[F]=X),X.getGripSpace()},this.getHand=function(F){let X=_[F];return X===void 0&&(X=new Mu,_[F]=X),X.getHandSpace()};function Z(F){const X=v.indexOf(F.inputSource);if(X===-1)return;const te=_[X];te!==void 0&&te.dispatchEvent({type:F.type,data:F.inputSource})}function z(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",N);for(let F=0;F<_.length;F++){const X=v[F];X!==null&&(v[F]=null,_[F].disconnect(X))}L=null,$=null,e.setRenderTarget(p),g=null,f=null,d=null,r=null,m=null,ne.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(F){u=F},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",z),r.addEventListener("inputsourceschange",N),h.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,X),r.updateRenderState({baseLayer:g}),m=new lr(g.framebufferWidth,g.framebufferHeight,{format:bn,type:or,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let X=null,te=null,re=null;h.depth&&(re=h.stencil?35056:33190,X=h.stencil?os:Ji,te=h.stencil?Yr:Yi);const U={colorFormat:32856,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(U),r.updateRenderState({layers:[f]}),m=new lr(f.textureWidth,f.textureHeight,{format:bn,type:or,depthTexture:new ww(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const xe=e.properties.get(m);xe.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(F){for(let X=0;X<F.removed.length;X++){const te=F.removed[X],re=v.indexOf(te);re>=0&&(v[re]=null,_[re].disconnect(te))}for(let X=0;X<F.added.length;X++){const te=F.added[X];let re=v.indexOf(te);if(re===-1){for(let xe=0;xe<_.length;xe++)if(xe>=v.length){v.push(te),re=xe;break}else if(v[xe]===null){v[xe]=te,re=xe;break}if(re===-1)break}const U=_[re];U&&U.connect(te)}}const j=new I,K=new I;function Q(F,X,te){j.setFromMatrixPosition(X.matrixWorld),K.setFromMatrixPosition(te.matrixWorld);const re=j.distanceTo(K),U=X.projectionMatrix.elements,xe=te.projectionMatrix.elements,he=U[14]/(U[10]-1),pe=U[14]/(U[10]+1),ce=(U[9]+1)/U[5],Oe=(U[9]-1)/U[5],Ee=(U[8]-1)/U[0],Se=(xe[8]+1)/xe[0],bt=he*Ee,an=he*Se,yt=re/(-Ee+Se),ln=yt*-Ee;X.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ln),F.translateZ(yt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const st=he+yt,ke=pe+yt,On=bt-ln,vn=an+(re-ln),T=ce*pe/ke*st,w=Oe*pe/ke*st;F.projectionMatrix.makePerspective(On,vn,T,w,st,ke)}function D(F,X){X===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(X.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;C.near=A.near=b.near=F.near,C.far=A.far=b.far=F.far,(L!==C.near||$!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,$=C.far);const X=F.parent,te=C.cameras;D(C,X);for(let U=0;U<te.length;U++)D(te[U],X);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),F.matrix.copy(C.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const re=F.children;for(let U=0,xe=re.length;U<xe;U++)re[U].updateMatrixWorld(!0);te.length===2?Q(C,b,A):C.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=F)},this.getPlanes=function(){return S};let O=null;function B(F,X){if(c=X.getViewerPose(u||o),x=X,c!==null){const te=c.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let re=!1;te.length!==C.cameras.length&&(C.cameras.length=0,re=!0);for(let U=0;U<te.length;U++){const xe=te[U];let he=null;if(g!==null)he=g.getViewport(xe);else{const ce=d.getViewSubImage(f,xe);he=ce.viewport,U===0&&(e.setRenderTargetTextures(m,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(m))}let pe=y[U];pe===void 0&&(pe=new Zt,pe.layers.enable(U),pe.viewport=new $e,y[U]=pe),pe.matrix.fromArray(xe.transform.matrix),pe.projectionMatrix.fromArray(xe.projectionMatrix),pe.viewport.set(he.x,he.y,he.width,he.height),U===0&&C.matrix.copy(pe.matrix),re===!0&&C.cameras.push(pe)}}for(let te=0;te<_.length;te++){const re=v[te],U=_[te];re!==null&&U!==void 0&&U.update(re,X,u||o)}if(O&&O(F,X),X.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:X.detectedPlanes});let te=null;for(const re of S)X.detectedPlanes.has(re)||(te===null&&(te=[]),te.push(re));if(te!==null)for(const re of te)S.delete(re),M.delete(re),i.dispatchEvent({type:"planeremoved",data:re});for(const re of X.detectedPlanes)if(!S.has(re))S.add(re),M.set(re,X.lastChangedTime),i.dispatchEvent({type:"planeadded",data:re});else{const U=M.get(re);re.lastChangedTime>U&&(M.set(re,re.lastChangedTime),i.dispatchEvent({type:"planechanged",data:re}))}}x=null}const ne=new Pg;ne.setAnimationLoop(B),this.setAnimationLoop=function(F){O=F},this.dispose=function(){}}}function Tw(t,e){function n(h,p){p.color.getRGB(h.fogColor.value,bg(t)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,m,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,v)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,m,_):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===tn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===tn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const m=e.get(p).envMap;if(m&&(h.envMap.value=m,h.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const S=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uv2Transform.value.copy(v.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,m,_){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*m,h.scale.value=_*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let m;p.map?m=p.map:p.alphaMap&&(m=p.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),h.uvTransform.value.copy(m.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,m){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===tn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function u(_,v){let S=r[_.id];S===void 0&&(x(_),S=c(_),r[_.id]=S,_.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(_,M);const b=e.render.frame;s[_.id]!==b&&(f(_),s[_.id]=b)}function c(_){const v=d();_.__bindingPointIndex=v;const S=t.createBuffer(),M=_.__size,b=_.usage;return t.bindBuffer(35345,S),t.bufferData(35345,M,b),t.bindBuffer(35345,null),t.bindBufferBase(35345,v,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],S=_.uniforms,M=_.__cache;t.bindBuffer(35345,v);for(let b=0,A=S.length;b<A;b++){const y=S[b];if(g(y,b,M)===!0){const C=y.__offset,L=Array.isArray(y.value)?y.value:[y.value];let $=0;for(let Z=0;Z<L.length;Z++){const z=L[Z],N=h(z);typeof z=="number"?(y.__data[0]=z,t.bufferSubData(35345,C+$,y.__data)):z.isMatrix3?(y.__data[0]=z.elements[0],y.__data[1]=z.elements[1],y.__data[2]=z.elements[2],y.__data[3]=z.elements[0],y.__data[4]=z.elements[3],y.__data[5]=z.elements[4],y.__data[6]=z.elements[5],y.__data[7]=z.elements[0],y.__data[8]=z.elements[6],y.__data[9]=z.elements[7],y.__data[10]=z.elements[8],y.__data[11]=z.elements[0]):(z.toArray(y.__data,$),$+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,C,y.__data)}}t.bindBuffer(35345,null)}function g(_,v,S){const M=_.value;if(S[v]===void 0){if(typeof M=="number")S[v]=M;else{const b=Array.isArray(M)?M:[M],A=[];for(let y=0;y<b.length;y++)A.push(b[y].clone());S[v]=A}return!0}else if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{const b=Array.isArray(S[v])?S[v]:[S[v]],A=Array.isArray(M)?M:[M];for(let y=0;y<b.length;y++){const C=b[y];if(C.equals(A[y])===!1)return C.copy(A[y]),!0}}return!1}function x(_){const v=_.uniforms;let S=0;const M=16;let b=0;for(let A=0,y=v.length;A<y;A++){const C=v[A],L={boundary:0,storage:0},$=Array.isArray(C.value)?C.value:[C.value];for(let Z=0,z=$.length;Z<z;Z++){const N=$[Z],j=h(N);L.boundary+=j.boundary,L.storage+=j.storage}if(C.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,A>0){b=S%M;const Z=M-b;b!==0&&Z-L.boundary<0&&(S+=M-b,C.__offset=S)}S+=L.storage}return b=S%M,b>0&&(S+=M-b),_.__size=S,_.__cache={},this}function h(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function bw(){const t=_o("canvas");return t.style.display="block",t}function Fg(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:bw(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let d=null,f=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ar,this.physicallyCorrectLights=!1,this.toneMapping=ei,this.toneMappingExposure=1;const h=this;let p=!1,m=0,_=0,v=null,S=-1,M=null;const b=new $e,A=new $e;let y=null,C=e.width,L=e.height,$=1,Z=null,z=null;const N=new $e(0,0,C,L),j=new $e(0,0,C,L);let K=!1;const Q=new bf;let D=!1,O=!1,B=null;const ne=new rt,F=new ze,X=new I,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return v===null?$:1}let U=n;function xe(E,k){for(let G=0;G<E.length;G++){const R=E[G],H=e.getContext(R,k);if(H!==null)return H}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ef}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),U===null){const k=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&k.shift(),U=xe(k,E),U===null)throw xe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let he,pe,ce,Oe,Ee,Se,bt,an,yt,ln,st,ke,On,vn,T,w,W,ee,ie,oe,Me,ae,q,_e;function ye(){he=new U1(U),pe=new D1(U,he,t),he.init(pe),ae=new yw(U,he,pe),ce=new vw(U,he,pe),Oe=new V1,Ee=new rw,Se=new xw(U,he,ce,Ee,pe,ae,Oe),bt=new I1(h),an=new k1(h),yt=new Yx(U,pe),q=new L1(U,he,yt,pe),ln=new O1(U,yt,Oe,q),st=new j1(U,ln,yt,Oe),ie=new H1(U,pe,Se),w=new R1(Ee),ke=new iw(h,bt,an,he,pe,q,w),On=new Tw(h,Ee),vn=new ow,T=new dw(he,pe),ee=new A1(h,bt,an,ce,st,c,o),W=new _w(h,st,pe),_e=new Cw(U,Oe,pe,ce),oe=new P1(U,he,Oe,pe),Me=new B1(U,he,Oe,pe),Oe.programs=ke.programs,h.capabilities=pe,h.extensions=he,h.properties=Ee,h.renderLists=vn,h.shadowMap=W,h.state=ce,h.info=Oe}ye();const fe=new Ew(h,U);this.xr=fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(C,L,!1))},this.getSize=function(E){return E.set(C,L)},this.setSize=function(E,k,G){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,L=k,e.width=Math.floor(E*$),e.height=Math.floor(k*$),G!==!1&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(C*$,L*$).floor()},this.setDrawingBufferSize=function(E,k,G){C=E,L=k,$=G,e.width=Math.floor(E*G),e.height=Math.floor(k*G),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,k,G,R){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,k,G,R),ce.viewport(b.copy(N).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,k,G,R){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,k,G,R),ce.scissor(A.copy(j).multiplyScalar($).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(E){ce.setScissorTest(K=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,k=!0,G=!0){let R=0;E&&(R|=16384),k&&(R|=256),G&&(R|=1024),U.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),vn.dispose(),T.dispose(),Ee.dispose(),bt.dispose(),an.dispose(),st.dispose(),q.dispose(),_e.dispose(),ke.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",le),fe.removeEventListener("sessionend",de),B&&(B.dispose(),B=null),Fe.stop()};function ve(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Oe.autoReset,k=W.enabled,G=W.autoUpdate,R=W.needsUpdate,H=W.type;ye(),Oe.autoReset=E,W.enabled=k,W.autoUpdate=G,W.needsUpdate=R,W.type=H}function Ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function je(E){const k=E.target;k.removeEventListener("dispose",je),ft(k)}function ft(E){P(E),Ee.remove(E)}function P(E){const k=Ee.get(E).programs;k!==void 0&&(k.forEach(function(G){ke.releaseProgram(G)}),E.isShaderMaterial&&ke.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,G,R,H,ge){k===null&&(k=te);const we=H.isMesh&&H.matrixWorld.determinant()<0,Ce=Ug(E,k,G,R,H);ce.setMaterial(R,we);let be=G.index,Ne=1;R.wireframe===!0&&(be=ln.getWireframeAttribute(G),Ne=2);const Le=G.drawRange,Pe=G.attributes.position;let et=Le.start*Ne,jt=(Le.start+Le.count)*Ne;ge!==null&&(et=Math.max(et,ge.start*Ne),jt=Math.min(jt,(ge.start+ge.count)*Ne)),be!==null?(et=Math.max(et,0),jt=Math.min(jt,be.count)):Pe!=null&&(et=Math.max(et,0),jt=Math.min(jt,Pe.count));const Vn=jt-et;if(Vn<0||Vn===1/0)return;q.setup(H,R,Ce,G,be);let Fi,tt=oe;if(be!==null&&(Fi=yt.get(be),tt=Me,tt.setIndex(Fi)),H.isMesh)R.wireframe===!0?(ce.setLineWidth(R.wireframeLinewidth*re()),tt.setMode(1)):tt.setMode(4);else if(H.isLine){let De=R.linewidth;De===void 0&&(De=1),ce.setLineWidth(De*re()),H.isLineSegments?tt.setMode(1):H.isLineLoop?tt.setMode(2):tt.setMode(3)}else H.isPoints?tt.setMode(0):H.isSprite&&tt.setMode(4);if(H.isInstancedMesh)tt.renderInstances(et,Vn,H.count);else if(G.isInstancedBufferGeometry){const De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gl=Math.min(G.instanceCount,De);tt.renderInstances(et,Vn,gl)}else tt.render(et,Vn)},this.compile=function(E,k){function G(R,H,ge){R.transparent===!0&&R.side===vi&&R.forceSinglePass===!1?(R.side=tn,R.needsUpdate=!0,un(R,H,ge),R.side=Pi,R.needsUpdate=!0,un(R,H,ge),R.side=vi):un(R,H,ge)}f=T.get(E),f.init(),x.push(f),E.traverseVisible(function(R){R.isLight&&R.layers.test(k.layers)&&(f.pushLight(R),R.castShadow&&f.pushShadow(R))}),f.setupLights(h.physicallyCorrectLights),E.traverse(function(R){const H=R.material;if(H)if(Array.isArray(H))for(let ge=0;ge<H.length;ge++){const we=H[ge];G(we,E,R)}else G(H,E,R)}),x.pop(),f=null};let V=null;function J(E){V&&V(E)}function le(){Fe.stop()}function de(){Fe.start()}const Fe=new Pg;Fe.setAnimationLoop(J),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(E){V=E,fe.setAnimationLoop(E),E===null?Fe.stop():Fe.start()},fe.addEventListener("sessionstart",le),fe.addEventListener("sessionend",de),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(k),k=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,k,v),f=T.get(E,x.length),f.init(),x.push(f),ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(ne),O=this.localClippingEnabled,D=w.init(this.clippingPlanes,O),d=vn.get(E,g.length),d.init(),g.push(d),dt(E,k,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(Z,z),D===!0&&w.beginShadows();const G=f.state.shadowsArray;if(W.render(G,E,k),D===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,E),f.setupLights(h.physicallyCorrectLights),k.isArrayCamera){const R=k.cameras;for(let H=0,ge=R.length;H<ge;H++){const we=R[H];St(d,E,we,we.viewport)}}else St(d,E,k);v!==null&&(Se.updateMultisampleRenderTarget(v),Se.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(h,E,k),q.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function dt(E,k,G,R){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){R&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ne);const we=st.update(E),Ce=E.material;Ce.visible&&d.push(E,we,Ce,G,X.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Oe.render.frame&&(E.skeleton.update(),E.skeleton.frame=Oe.render.frame),!E.frustumCulled||Q.intersectsObject(E))){R&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ne);const we=st.update(E),Ce=E.material;if(Array.isArray(Ce)){const be=we.groups;for(let Ne=0,Le=be.length;Ne<Le;Ne++){const Pe=be[Ne],et=Ce[Pe.materialIndex];et&&et.visible&&d.push(E,we,et,G,X.z,Pe)}}else Ce.visible&&d.push(E,we,Ce,G,X.z,null)}}const ge=E.children;for(let we=0,Ce=ge.length;we<Ce;we++)dt(ge[we],k,G,R)}function St(E,k,G,R){const H=E.opaque,ge=E.transmissive,we=E.transparent;f.setupLightsView(G),D===!0&&w.setGlobalState(h.clippingPlanes,G),ge.length>0&&Ni(H,k,G),R&&ce.viewport(b.copy(R)),H.length>0&&Xe(H,k,G),ge.length>0&&Xe(ge,k,G),we.length>0&&Xe(we,k,G),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Ni(E,k,G){const R=pe.isWebGL2;B===null&&(B=new lr(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?mo:or,minFilter:po,samples:R&&s===!0?4:0})),h.getDrawingBufferSize(F),R?B.setSize(F.x,F.y):B.setSize($a(F.x),$a(F.y));const H=h.getRenderTarget();h.setRenderTarget(B),h.clear();const ge=h.toneMapping;h.toneMapping=ei,Xe(E,k,G),h.toneMapping=ge,Se.updateMultisampleRenderTarget(B),Se.updateRenderTargetMipmap(B),h.setRenderTarget(H)}function Xe(E,k,G){const R=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ge=E.length;H<ge;H++){const we=E[H],Ce=we.object,be=we.geometry,Ne=R===null?we.material:R,Le=we.group;Ce.layers.test(G.layers)&&Bn(Ce,k,G,be,Ne,Le)}}function Bn(E,k,G,R,H,ge){E.onBeforeRender(h,k,G,R,H,ge),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(h,k,G,R,E,ge),H.transparent===!0&&H.side===vi&&H.forceSinglePass===!1?(H.side=tn,H.needsUpdate=!0,h.renderBufferDirect(G,k,R,H,E,ge),H.side=Pi,H.needsUpdate=!0,h.renderBufferDirect(G,k,R,H,E,ge),H.side=vi):h.renderBufferDirect(G,k,R,H,E,ge),E.onAfterRender(h,k,G,R,H,ge)}function un(E,k,G){k.isScene!==!0&&(k=te);const R=Ee.get(E),H=f.state.lights,ge=f.state.shadowsArray,we=H.state.version,Ce=ke.getParameters(E,H.state,ge,k,G),be=ke.getProgramCacheKey(Ce);let Ne=R.programs;R.environment=E.isMeshStandardMaterial?k.environment:null,R.fog=k.fog,R.envMap=(E.isMeshStandardMaterial?an:bt).get(E.envMap||R.environment),Ne===void 0&&(E.addEventListener("dispose",je),Ne=new Map,R.programs=Ne);let Le=Ne.get(be);if(Le!==void 0){if(R.currentProgram===Le&&R.lightsStateVersion===we)return Df(E,Ce),Le}else Ce.uniforms=ke.getUniforms(E),E.onBuild(G,Ce,h),E.onBeforeCompile(Ce,h),Le=ke.acquireProgram(Ce,be),Ne.set(be,Le),R.uniforms=Ce.uniforms;const Pe=R.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=w.uniform),Df(E,Ce),R.needsLights=Bg(E),R.lightsStateVersion=we,R.needsLights&&(Pe.ambientLightColor.value=H.state.ambient,Pe.lightProbe.value=H.state.probe,Pe.directionalLights.value=H.state.directional,Pe.directionalLightShadows.value=H.state.directionalShadow,Pe.spotLights.value=H.state.spot,Pe.spotLightShadows.value=H.state.spotShadow,Pe.rectAreaLights.value=H.state.rectArea,Pe.ltc_1.value=H.state.rectAreaLTC1,Pe.ltc_2.value=H.state.rectAreaLTC2,Pe.pointLights.value=H.state.point,Pe.pointLightShadows.value=H.state.pointShadow,Pe.hemisphereLights.value=H.state.hemi,Pe.directionalShadowMap.value=H.state.directionalShadowMap,Pe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pe.spotShadowMap.value=H.state.spotShadowMap,Pe.spotLightMatrix.value=H.state.spotLightMatrix,Pe.spotLightMap.value=H.state.spotLightMap,Pe.pointShadowMap.value=H.state.pointShadowMap,Pe.pointShadowMatrix.value=H.state.pointShadowMatrix);const et=Le.getUniforms(),jt=Sa.seqWithValue(et.seq,Pe);return R.currentProgram=Le,R.uniformsList=jt,Le}function Df(E,k){const G=Ee.get(E);G.outputEncoding=k.outputEncoding,G.instancing=k.instancing,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function Ug(E,k,G,R,H){k.isScene!==!0&&(k=te),Se.resetTextureUnits();const ge=k.fog,we=R.isMeshStandardMaterial?k.environment:null,Ce=v===null?h.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:ar,be=(R.isMeshStandardMaterial?an:bt).get(R.envMap||we),Ne=R.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!R.normalMap&&!!G.attributes.tangent,Pe=!!G.morphAttributes.position,et=!!G.morphAttributes.normal,jt=!!G.morphAttributes.color,Vn=R.toneMapped?h.toneMapping:ei,Fi=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,tt=Fi!==void 0?Fi.length:0,De=Ee.get(R),gl=f.state.lights;if(D===!0&&(O===!0||E!==M)){const Xt=E===M&&R.id===S;w.setState(R,E,Xt)}let ht=!1;R.version===De.__version?(De.needsLights&&De.lightsStateVersion!==gl.state.version||De.outputEncoding!==Ce||H.isInstancedMesh&&De.instancing===!1||!H.isInstancedMesh&&De.instancing===!0||H.isSkinnedMesh&&De.skinning===!1||!H.isSkinnedMesh&&De.skinning===!0||De.envMap!==be||R.fog===!0&&De.fog!==ge||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==w.numPlanes||De.numIntersection!==w.numIntersection)||De.vertexAlphas!==Ne||De.vertexTangents!==Le||De.morphTargets!==Pe||De.morphNormals!==et||De.morphColors!==jt||De.toneMapping!==Vn||pe.isWebGL2===!0&&De.morphTargetsCount!==tt)&&(ht=!0):(ht=!0,De.__version=R.version);let zi=De.currentProgram;ht===!0&&(zi=un(R,k,H));let Rf=!1,ps=!1,_l=!1;const At=zi.getUniforms(),ki=De.uniforms;if(ce.useProgram(zi.program)&&(Rf=!0,ps=!0,_l=!0),R.id!==S&&(S=R.id,ps=!0),Rf||M!==E){if(At.setValue(U,"projectionMatrix",E.projectionMatrix),pe.logarithmicDepthBuffer&&At.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,ps=!0,_l=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const Xt=At.map.cameraPosition;Xt!==void 0&&Xt.setValue(U,X.setFromMatrixPosition(E.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&At.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||H.isSkinnedMesh)&&At.setValue(U,"viewMatrix",E.matrixWorldInverse)}if(H.isSkinnedMesh){At.setOptional(U,H,"bindMatrix"),At.setOptional(U,H,"bindMatrixInverse");const Xt=H.skeleton;Xt&&(pe.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),At.setValue(U,"boneTexture",Xt.boneTexture,Se),At.setValue(U,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vl=G.morphAttributes;if((vl.position!==void 0||vl.normal!==void 0||vl.color!==void 0&&pe.isWebGL2===!0)&&ie.update(H,G,R,zi),(ps||De.receiveShadow!==H.receiveShadow)&&(De.receiveShadow=H.receiveShadow,At.setValue(U,"receiveShadow",H.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(ki.envMap.value=be,ki.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),ps&&(At.setValue(U,"toneMappingExposure",h.toneMappingExposure),De.needsLights&&Og(ki,_l),ge&&R.fog===!0&&On.refreshFogUniforms(ki,ge),On.refreshMaterialUniforms(ki,R,$,L,B),Sa.upload(U,De.uniformsList,ki,Se)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Sa.upload(U,De.uniformsList,ki,Se),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&At.setValue(U,"center",H.center),At.setValue(U,"modelViewMatrix",H.modelViewMatrix),At.setValue(U,"normalMatrix",H.normalMatrix),At.setValue(U,"modelMatrix",H.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const Xt=R.uniformsGroups;for(let xl=0,Vg=Xt.length;xl<Vg;xl++)if(pe.isWebGL2){const If=Xt[xl];_e.update(If,zi),_e.bind(If,zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zi}function Og(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Bg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,k,G){Ee.get(E.texture).__webglTexture=k,Ee.get(E.depthTexture).__webglTexture=G;const R=Ee.get(E);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=G===void 0,R.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const G=Ee.get(E);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,G=0){v=E,m=k,_=G;let R=!0,H=null,ge=!1,we=!1;if(E){const be=Ee.get(E);be.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),R=!1):be.__webglFramebuffer===void 0?Se.setupRenderTarget(E):be.__hasExternalTextures&&Se.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(we=!0);const Le=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(H=Le[k],ge=!0):pe.isWebGL2&&E.samples>0&&Se.useMultisampledRTT(E)===!1?H=Ee.get(E).__webglMultisampledFramebuffer:H=Le,b.copy(E.viewport),A.copy(E.scissor),y=E.scissorTest}else b.copy(N).multiplyScalar($).floor(),A.copy(j).multiplyScalar($).floor(),y=K;if(ce.bindFramebuffer(36160,H)&&pe.drawBuffers&&R&&ce.drawBuffers(E,H),ce.viewport(b),ce.scissor(A),ce.setScissorTest(y),ge){const be=Ee.get(E.texture);U.framebufferTexture2D(36160,36064,34069+k,be.__webglTexture,G)}else if(we){const be=Ee.get(E.texture),Ne=k||0;U.framebufferTextureLayer(36160,36064,be.__webglTexture,G||0,Ne)}S=-1},this.readRenderTargetPixels=function(E,k,G,R,H,ge,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){ce.bindFramebuffer(36160,Ce);try{const be=E.texture,Ne=be.format,Le=be.type;if(Ne!==bn&&ae.convert(Ne)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Le===mo&&(he.has("EXT_color_buffer_half_float")||pe.isWebGL2&&he.has("EXT_color_buffer_float"));if(Le!==or&&ae.convert(Le)!==U.getParameter(35738)&&!(Le===Zi&&(pe.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-R&&G>=0&&G<=E.height-H&&U.readPixels(k,G,R,H,ae.convert(Ne),ae.convert(Le),ge)}finally{const be=v!==null?Ee.get(v).__webglFramebuffer:null;ce.bindFramebuffer(36160,be)}}},this.copyFramebufferToTexture=function(E,k,G=0){const R=Math.pow(2,-G),H=Math.floor(k.image.width*R),ge=Math.floor(k.image.height*R);Se.setTexture2D(k,0),U.copyTexSubImage2D(3553,G,0,0,E.x,E.y,H,ge),ce.unbindTexture()},this.copyTextureToTexture=function(E,k,G,R=0){const H=k.image.width,ge=k.image.height,we=ae.convert(G.format),Ce=ae.convert(G.type);Se.setTexture2D(G,0),U.pixelStorei(37440,G.flipY),U.pixelStorei(37441,G.premultiplyAlpha),U.pixelStorei(3317,G.unpackAlignment),k.isDataTexture?U.texSubImage2D(3553,R,E.x,E.y,H,ge,we,Ce,k.image.data):k.isCompressedTexture?U.compressedTexSubImage2D(3553,R,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,we,k.mipmaps[0].data):U.texSubImage2D(3553,R,E.x,E.y,we,Ce,k.image),R===0&&G.generateMipmaps&&U.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,k,G,R,H=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,Ce=E.max.z-E.min.z+1,be=ae.convert(R.format),Ne=ae.convert(R.type);let Le;if(R.isData3DTexture)Se.setTexture3D(R,0),Le=32879;else if(R.isDataArrayTexture)Se.setTexture2DArray(R,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,R.flipY),U.pixelStorei(37441,R.premultiplyAlpha),U.pixelStorei(3317,R.unpackAlignment);const Pe=U.getParameter(3314),et=U.getParameter(32878),jt=U.getParameter(3316),Vn=U.getParameter(3315),Fi=U.getParameter(32877),tt=G.isCompressedTexture?G.mipmaps[0]:G.image;U.pixelStorei(3314,tt.width),U.pixelStorei(32878,tt.height),U.pixelStorei(3316,E.min.x),U.pixelStorei(3315,E.min.y),U.pixelStorei(32877,E.min.z),G.isDataTexture||G.isData3DTexture?U.texSubImage3D(Le,H,k.x,k.y,k.z,ge,we,Ce,be,Ne,tt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Le,H,k.x,k.y,k.z,ge,we,Ce,be,tt.data)):U.texSubImage3D(Le,H,k.x,k.y,k.z,ge,we,Ce,be,Ne,tt),U.pixelStorei(3314,Pe),U.pixelStorei(32878,et),U.pixelStorei(3316,jt),U.pixelStorei(3315,Vn),U.pixelStorei(32877,Fi),H===0&&R.generateMipmaps&&U.generateMipmap(Le),ce.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Se.setTextureCube(E,0):E.isData3DTexture?Se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Se.setTexture2DArray(E,0):Se.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){m=0,_=0,v=null,ce.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Aw extends Fg{}Aw.prototype.isWebGL1Renderer=!0;class Lw extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Za extends oi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new I,f=new I,g=[],x=[],h=[],p=[];for(let m=0;m<=i;m++){const _=[],v=m/i;let S=0;m==0&&o==0?S=.5/n:m==i&&l==Math.PI&&(S=-.5/n);for(let M=0;M<=n;M++){const b=M/n;d.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),h.push(f.x,f.y,f.z),p.push(b+S,1-v),_.push(u++)}c.push(_)}for(let m=0;m<i;m++)for(let _=0;_<n;_++){const v=c[m][_+1],S=c[m][_],M=c[m+1][_],b=c[m+1][_+1];(m!==0||o>0)&&g.push(v,S,b),(m!==i-1||l<Math.PI)&&g.push(S,M,b)}this.setIndex(g),this.setAttribute("position",new nn(x,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(p,2))}static fromJSON(e){return new Za(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pf extends oi{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new I,d=new I,f=new I;for(let g=0;g<=i;g++)for(let x=0;x<=r;x++){const h=x/r*s,p=g/i*Math.PI*2;d.x=(e+n*Math.cos(p))*Math.cos(h),d.y=(e+n*Math.cos(p))*Math.sin(h),d.z=n*Math.sin(p),a.push(d.x,d.y,d.z),c.x=e*Math.cos(h),c.y=e*Math.sin(h),f.subVectors(d,c).normalize(),l.push(f.x,f.y,f.z),u.push(x/r),u.push(g/i)}for(let g=1;g<=i;g++)for(let x=1;x<=r;x++){const h=(r+1)*g+x-1,p=(r+1)*(g-1)+x-1,m=(r+1)*(g-1)+x,_=(r+1)*g+x;o.push(h,p,_),o.push(p,m,_)}this.setIndex(o),this.setAttribute("position",new nn(a,3)),this.setAttribute("normal",new nn(l,3)),this.setAttribute("uv",new nn(u,2))}static fromJSON(e){return new Pf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wu extends To{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vg,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ep={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Pw{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const g=u[d],x=u[d+1];if(g.global&&(g.lastIndex=0),g.test(c))return x}return null}}}const Dw=new Pw;class zg{constructor(e){this.manager=e!==void 0?e:Dw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Rw extends zg{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ep.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=_o("img");function l(){c(),ep.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ps extends zg{constructor(e){super(e)}load(e,n,i,r){const s=new Wt,o=new Rw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class kg extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Eu=new rt,tp=new I,np=new I;class Iw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bf,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;tp.setFromMatrixPosition(e.matrixWorld),n.position.copy(tp),np.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(np),n.updateMatrixWorld(),Eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ip=new rt,Ds=new I,Tu=new I;class Nw extends Iw{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ds.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ds),Tu.copy(i.position),Tu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Tu),i.updateMatrixWorld(),r.makeTranslation(-Ds.x,-Ds.y,-Ds.z),ip.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ip)}}class Fw extends kg{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Nw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zw extends kg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);const kw="/assets/space-ca17ac07.jpg",Uw="/assets/moon-b246064f.jpg",Ow="/assets/donut2-ff557831.jpeg",Bw="/assets/donut3-26dd3dae.jpg",Vw="/assets/pasha-3465bb12.jpg",Gw=()=>(Zr.useEffect(()=>{const t=new Lw,e=new Zt(75,window.innerWidth/window.innerHeight,.1,1e3),n=document.getElementById("bg"),i=new Fg({canvas:n});i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,400),e.position.setZ(30);const r=new Ps().load(kw),s=new Ps().load(Uw),o=new Ps().load(Ow),a=new Ps().load(Bw),l=new Ps().load(Vw);t.background=r;const u=new Pf(10,3,16,100),c=new wu({map:o,normalMap:a}),d=new Kt(u,c);t.add(d);const f=new Fw(16777215);f.position.set(5,5,5);const g=new zw(16777215);t.add(f,g);function x(){const v=new Za(.25,24,24),S=new wu({color:14136621}),M=new Kt(v,S),[b,A,y]=Array(3).fill().map(()=>bx.randFloatSpread(100));M.position.set(b,A,y),t.add(M)}Array(200).fill().forEach(x);const h=new Kt(new ur(5,5,5),new Ya({map:l}));h.position.set(-10,10,10),t.add(h);const p=new Kt(new ur(5,5,5),new Ya({map:l}));h.position.set(-10,-10,10),t.add(p);const m=new Kt(new Za(3,32,32),new wu({map:s}));m.position.set(10,10,10),t.add(m);function _(){requestAnimationFrame(_),d.rotation.x+=.01,d.rotation.y+=.003,d.rotation.z+=.01,h.rotation.x+=-.01,h.rotation.y+=-.005,h.rotation.z+=-.01,m.rotation.x+=-.02,m.rotation.y+=-.01,m.rotation.z+=-.01,i.render(t,e)}_()},[]),Yn("section",{children:Yn("canvas",{id:"bg"})}));function Ww(){return h0("div",{className:"App",children:[Yn("section",{children:Yn("h1",{children:"Hello World"})}),Yn(Gw,{}),Yn("section",{children:Yn("h2",{children:"Good Bye World"})})]})}Cu.createRoot(document.getElementById("root")).render(Yn(o0.StrictMode,{children:Yn(Ww,{})}));
