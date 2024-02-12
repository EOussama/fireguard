import{s as fi,e as Ce,c as Ae,l as $u,m as Fe,i as Xt,n as ft,f as oe,a as Lu,b as Be,g as Uu,h as Ee,k as xu,o as Fu,t as Nr,d as Dr,j as Bu,J as Hu}from"../chunks/scheduler.v_3Bvi2u.js";import{S as pi,i as vi,c as gi,a as mi,m as bi,b as xt,e as Vu,t as Ft,d as _i,g as zu,h as ju}from"../chunks/index.2dk0jcgb.js";import{P as yi,j as Wu,a as Le,H as Gu,A as qu,I as Mr,m as $r,F as xa,f as Ku}from"../chunks/fireguard.helper.BNvKc7US.js";import{P as Fa}from"../chunks/page.enum.S7N6-Nd5.js";function Ju(r){let e,t='<div class="dots svelte-19glvgs"></div>';return{c(){e=Ce("div"),e.innerHTML=t,this.h()},l(a){e=Ae(a,"DIV",{class:!0,"data-svelte-h":!0}),$u(e)!=="svelte-fszn9n"&&(e.innerHTML=t),this.h()},h(){Fe(e,"class","loader svelte-19glvgs")},m(a,s){Xt(a,e,s)},p:ft,i:ft,o:ft,d(a){a&&oe(e)}}}class Yu extends pi{constructor(e){super(),vi(this,e,null,Ju,fi,{})}}var Ba={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=function(r){const e=[];let t=0;for(let a=0;a<r.length;a++){let s=r.charCodeAt(a);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++a)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Xu=function(r){const e=[];let t=0,a=0;for(;t<r.length;){const s=r[t++];if(s<128)e[a++]=String.fromCharCode(s);else if(s>191&&s<224){const c=r[t++];e[a++]=String.fromCharCode((s&31)<<6|c&63)}else if(s>239&&s<365){const c=r[t++],h=r[t++],g=r[t++],m=((s&7)<<18|(c&63)<<12|(h&63)<<6|g&63)-65536;e[a++]=String.fromCharCode(55296+(m>>10)),e[a++]=String.fromCharCode(56320+(m&1023))}else{const c=r[t++],h=r[t++];e[a++]=String.fromCharCode((s&15)<<12|(c&63)<<6|h&63)}}return e.join("")},Ii={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let s=0;s<r.length;s+=3){const c=r[s],h=s+1<r.length,g=h?r[s+1]:0,m=s+2<r.length,k=m?r[s+2]:0,A=c>>2,F=(c&3)<<4|g>>4;let $=(g&15)<<2|k>>6,G=k&63;m||(G=64,h||($=64)),a.push(t[A],t[F],t[$],t[G])}return a.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(wi(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Xu(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let s=0;s<r.length;){const c=t[r.charAt(s++)],g=s<r.length?t[r.charAt(s)]:0;++s;const k=s<r.length?t[r.charAt(s)]:64;++s;const F=s<r.length?t[r.charAt(s)]:64;if(++s,c==null||g==null||k==null||F==null)throw new Qu;const $=c<<2|g>>4;if(a.push($),k!==64){const G=g<<4&240|k>>2;if(a.push(G),F!==64){const Y=k<<6&192|F;a.push(Y)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Qu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zu=function(r){const e=wi(r);return Ii.encodeByteArray(e,!0)},Ei=function(r){return Zu(r).replace(/\./g,"")},ki=function(r){try{return Ii.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=()=>eh().__FIREBASE_DEFAULTS__,rh=()=>{if(typeof process>"u"||typeof Ba>"u")return;const r=Ba.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},nh=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ki(r[1]);return e&&JSON.parse(e)},Yr=()=>{try{return th()||rh()||nh()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ah=r=>{var e,t;return(t=(e=Yr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Ti=()=>{var r;return(r=Yr())===null||r===void 0?void 0:r.config},Si=r=>{var e;return(e=Yr())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,a))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function oh(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ch(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lh(){const r=te();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function uh(){try{return typeof indexedDB=="object"}catch{return!1}}function hh(){return new Promise((r,e)=>{try{let t=!0;const a="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(a);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(a),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var c;e(((c=s.error)===null||c===void 0?void 0:c.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="FirebaseError";class Oe extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name=dh,Object.setPrototypeOf(this,Oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_t.prototype.create)}}class _t{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},s=`${this.service}/${e}`,c=this.errors[e],h=c?fh(c,a):"Error",g=`${this.serviceName}: ${h} (${s}).`;return new Oe(s,g,a)}}function fh(r,e){return r.replace(ph,(t,a)=>{const s=e[a];return s!=null?String(s):`<${a}?>`})}const ph=/\{\$([^}]+)}/g;function vh(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function jt(r,e){if(r===e)return!0;const t=Object.keys(r),a=Object.keys(e);for(const s of t){if(!a.includes(s))return!1;const c=r[s],h=e[s];if(Ha(c)&&Ha(h)){if(!jt(c,h))return!1}else if(c!==h)return!1}for(const s of a)if(!t.includes(s))return!1;return!0}function Ha(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(r){const e=[];for(const[t,a]of Object.entries(r))Array.isArray(a)?a.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function gh(r,e){const t=new mh(r,e);return t.subscribe.bind(t)}class mh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let s;if(e===void 0&&t===void 0&&a===void 0)throw new Error("Missing Observer.");bh(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:a},s.next===void 0&&(s.next=Lr),s.error===void 0&&(s.error=Lr),s.complete===void 0&&(s.complete=Lr);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bh(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Lr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(r){return r&&r._delegate?r._delegate:r}class at{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const a=new ih;if(this.instancesDeferred.set(t,a),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&a.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const a=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(c){if(s)return null;throw c}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wh(e))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[t,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:s});a.resolve(c)}catch{}}}}clearInstance(e=Ue){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ue){return this.instances.has(e)}getOptions(e=Ue){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[c,h]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);a===g&&h.resolve(s)}return s}onInit(e,t){var a;const s=this.normalizeInstanceIdentifier(t),c=(a=this.onInitCallbacks.get(s))!==null&&a!==void 0?a:new Set;c.add(e),this.onInitCallbacks.set(s,c);const h=this.instances.get(s);return h&&e(h,s),()=>{c.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const s of a)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:yh(e),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Ue){return this.component?this.component.multipleInstances?e:Ue:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yh(r){return r===Ue?void 0:r}function wh(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _h(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(j||(j={}));const Eh={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},kh=j.INFO,Th={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Sh=(r,e,...t)=>{if(e<r.logLevel)return;const a=new Date().toISOString(),s=Th[e];if(s)console[s](`[${a}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ci{constructor(e){this.name=e,this._logLevel=kh,this._logHandler=Sh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Eh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Ch=(r,e)=>e.some(t=>r instanceof t);let Va,za;function Ah(){return Va||(Va=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rh(){return za||(za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ai=new WeakMap,zr=new WeakMap,Ri=new WeakMap,Ur=new WeakMap,Xr=new WeakMap;function Ph(r){const e=new Promise((t,a)=>{const s=()=>{r.removeEventListener("success",c),r.removeEventListener("error",h)},c=()=>{t(Re(r.result)),s()},h=()=>{a(r.error),s()};r.addEventListener("success",c),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Ai.set(t,r)}).catch(()=>{}),Xr.set(e,r),e}function Oh(r){if(zr.has(r))return;const e=new Promise((t,a)=>{const s=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",h),r.removeEventListener("abort",h)},c=()=>{t(),s()},h=()=>{a(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",c),r.addEventListener("error",h),r.addEventListener("abort",h)});zr.set(r,e)}let jr={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return zr.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Ri.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Re(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Nh(r){jr=r(jr)}function Dh(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=r.call(xr(this),e,...t);return Ri.set(a,e.sort?e.sort():[e]),Re(a)}:Rh().includes(r)?function(...e){return r.apply(xr(this),e),Re(Ai.get(this))}:function(...e){return Re(r.apply(xr(this),e))}}function Mh(r){return typeof r=="function"?Dh(r):(r instanceof IDBTransaction&&Oh(r),Ch(r,Ah())?new Proxy(r,jr):r)}function Re(r){if(r instanceof IDBRequest)return Ph(r);if(Ur.has(r))return Ur.get(r);const e=Mh(r);return e!==r&&(Ur.set(r,e),Xr.set(e,r)),e}const xr=r=>Xr.get(r);function $h(r,e,{blocked:t,upgrade:a,blocking:s,terminated:c}={}){const h=indexedDB.open(r,e),g=Re(h);return a&&h.addEventListener("upgradeneeded",m=>{a(Re(h.result),m.oldVersion,m.newVersion,Re(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),g.then(m=>{c&&m.addEventListener("close",()=>c()),s&&m.addEventListener("versionchange",k=>s(k.oldVersion,k.newVersion,k))}).catch(()=>{}),g}const Lh=["get","getKey","getAll","getAllKeys","count"],Uh=["put","add","delete","clear"],Fr=new Map;function ja(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Fr.get(e))return Fr.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,s=Uh.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(s||Lh.includes(t)))return;const c=async function(h,...g){const m=this.transaction(h,s?"readwrite":"readonly");let k=m.store;return a&&(k=k.index(g.shift())),(await Promise.all([k[t](...g),s&&m.done]))[0]};return Fr.set(e,c),c}Nh(r=>({...r,get:(e,t,a)=>ja(e,t)||r.get(e,t,a),has:(e,t)=>!!ja(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Fh(t)){const a=t.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(t=>t).join(" ")}}function Fh(r){const e=r.getComponent();return e?.type==="VERSION"}const Wr="@firebase/app",Wa="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Ci("@firebase/app"),Bh="@firebase/app-compat",Hh="@firebase/analytics-compat",Vh="@firebase/analytics",zh="@firebase/app-check-compat",jh="@firebase/app-check",Wh="@firebase/auth",Gh="@firebase/auth-compat",qh="@firebase/database",Kh="@firebase/database-compat",Jh="@firebase/functions",Yh="@firebase/functions-compat",Xh="@firebase/installations",Qh="@firebase/installations-compat",Zh="@firebase/messaging",ed="@firebase/messaging-compat",td="@firebase/performance",rd="@firebase/performance-compat",nd="@firebase/remote-config",ad="@firebase/remote-config-compat",id="@firebase/storage",sd="@firebase/storage-compat",od="@firebase/firestore",cd="@firebase/firestore-compat",ld="firebase",ud="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="[DEFAULT]",hd={[Wr]:"fire-core",[Bh]:"fire-core-compat",[Vh]:"fire-analytics",[Hh]:"fire-analytics-compat",[jh]:"fire-app-check",[zh]:"fire-app-check-compat",[Wh]:"fire-auth",[Gh]:"fire-auth-compat",[qh]:"fire-rtdb",[Kh]:"fire-rtdb-compat",[Jh]:"fire-fn",[Yh]:"fire-fn-compat",[Xh]:"fire-iid",[Qh]:"fire-iid-compat",[Zh]:"fire-fcm",[ed]:"fire-fcm-compat",[td]:"fire-perf",[rd]:"fire-perf-compat",[nd]:"fire-rc",[ad]:"fire-rc-compat",[id]:"fire-gcs",[sd]:"fire-gcs-compat",[od]:"fire-fst",[cd]:"fire-fst-compat","fire-js":"fire-js",[ld]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Map,qr=new Map;function dd(r,e){try{r.container.addComponent(e)}catch(t){Ve.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function vt(r){const e=r.name;if(qr.has(e))return Ve.debug(`There were multiple attempts to register component ${e}.`),!1;qr.set(e,r);for(const t of Wt.values())dd(t,r);return!0}function Pi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pe=new _t("app","Firebase",fd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=ud;function Oi(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const a=Object.assign({name:Gr,automaticDataCollectionEnabled:!1},e),s=a.name;if(typeof s!="string"||!s)throw Pe.create("bad-app-name",{appName:String(s)});if(t||(t=Ti()),!t)throw Pe.create("no-options");const c=Wt.get(s);if(c){if(jt(t,c.options)&&jt(a,c.config))return c;throw Pe.create("duplicate-app",{appName:s})}const h=new Ih(s);for(const m of qr.values())h.addComponent(m);const g=new pd(t,a,h);return Wt.set(s,g),g}function vd(r=Gr){const e=Wt.get(r);if(!e&&r===Gr&&Ti())return Oi();if(!e)throw Pe.create("no-app",{appName:r});return e}function tt(r,e,t){var a;let s=(a=hd[r])!==null&&a!==void 0?a:r;t&&(s+=`-${t}`);const c=s.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const g=[`Unable to register library "${s}" with version "${e}":`];c&&g.push(`library name "${s}" contains illegal characters (whitespace or "/")`),c&&h&&g.push("and"),h&&g.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ve.warn(g.join(" "));return}vt(new at(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="firebase-heartbeat-database",md=1,gt="firebase-heartbeat-store";let Br=null;function Ni(){return Br||(Br=$h(gd,md,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(gt)}}}).catch(r=>{throw Pe.create("idb-open",{originalErrorMessage:r.message})})),Br}async function bd(r){try{return await(await Ni()).transaction(gt).objectStore(gt).get(Di(r))}catch(e){if(e instanceof Oe)Ve.warn(e.message);else{const t=Pe.create("idb-get",{originalErrorMessage:e?.message});Ve.warn(t.message)}}}async function Ga(r,e){try{const a=(await Ni()).transaction(gt,"readwrite");await a.objectStore(gt).put(e,Di(r)),await a.done}catch(t){if(t instanceof Oe)Ve.warn(t.message);else{const a=Pe.create("idb-set",{originalErrorMessage:t?.message});Ve.warn(a.message)}}}function Di(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=1024,yd=30*24*60*60*1e3;class wd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ed(t),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=qa();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c)))return this._heartbeatsCache.heartbeats.push({date:c,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const g=new Date(h.date).valueOf();return Date.now()-g<=yd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qa(),{heartbeatsToSend:a,unsentEntries:s}=Id(this._heartbeatsCache.heartbeats),c=Ei(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}}function qa(){return new Date().toISOString().substring(0,10)}function Id(r,e=_d){const t=[];let a=r.slice();for(const s of r){const c=t.find(h=>h.agent===s.agent);if(c){if(c.dates.push(s.date),Ka(t)>e){c.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ka(t)>e){t.pop();break}a=a.slice(1)}return{heartbeatsToSend:t,unsentEntries:a}}class Ed{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uh()?hh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bd(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ga(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ga(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ka(r){return Ei(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(r){vt(new at("platform-logger",e=>new xh(e),"PRIVATE")),vt(new at("heartbeat",e=>new wd(e),"PRIVATE")),tt(Wr,Wa,r),tt(Wr,Wa,"esm2017"),tt("fire-js","")}kd("");function Qr(r,e){var t={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(r);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(r,a[s])&&(t[a[s]]=r[a[s]]);return t}function Mi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Td=Mi,$i=new _t("auth","Firebase",Mi());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Ci("@firebase/auth");function Sd(r,...e){Gt.logLevel<=j.WARN&&Gt.warn(`Auth (${wt}): ${r}`,...e)}function Bt(r,...e){Gt.logLevel<=j.ERROR&&Gt.error(`Auth (${wt}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(r,...e){throw Zr(r,...e)}function le(r,...e){return Zr(r,...e)}function Li(r,e,t){const a=Object.assign(Object.assign({},Td()),{[e]:t});return new _t("auth","Firebase",a).create(e,{appName:r.name})}function Cd(r,e,t){const a=t;if(!(e instanceof a))throw a.name!==e.constructor.name&&he(r,"argument-error"),Li(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zr(r,...e){if(typeof r!="string"){const t=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(t,...a)}return $i.create(r,...e)}function P(r,e,...t){if(!r)throw Zr(e,...t)}function ve(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Bt(e),new Error(e)}function me(r,e){r||ve(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Ad(){return Ja()==="http:"||Ja()==="https:"}function Ja(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ad()||oh()||"connection"in navigator)?navigator.onLine:!0}function Pd(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this.shortDelay=e,this.longDelay=t,me(t>e,"Short delay should be less than long delay!"),this.isMobile=sh()||ch()}get(){return Rd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(r,e){me(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{static initialize(e,t,a){this.fetchImpl=e,t&&(this.headersImpl=t),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new It(3e4,6e4);function tn(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ot(r,e,t,a,s={}){return xi(r,s,async()=>{let c={},h={};a&&(e==="GET"?h=a:c={body:JSON.stringify(a)});const g=yt(Object.assign({key:r.config.apiKey},h)).slice(1),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode),Ui.fetch()(Fi(r,r.config.apiHost,t,g),Object.assign({method:e,headers:m,referrerPolicy:"no-referrer"},c))})}async function xi(r,e,t){r._canInitEmulator=!1;const a=Object.assign(Object.assign({},Od),e);try{const s=new Md(r),c=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Ut(r,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const g=c.ok?h.errorMessage:h.error.message,[m,k]=g.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ut(r,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Ut(r,"email-already-in-use",h);if(m==="USER_DISABLED")throw Ut(r,"user-disabled",h);const A=a[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(k)throw Li(r,A,k);he(r,A)}}catch(s){if(s instanceof Oe)throw s;he(r,"network-request-failed",{message:String(s)})}}async function Dd(r,e,t,a,s={}){const c=await ot(r,e,t,a,s);return"mfaPendingCredential"in c&&he(r,"multi-factor-auth-required",{_serverResponse:c}),c}function Fi(r,e,t,a){const s=`${e}${t}?${a}`;return r.config.emulator?en(r.config,s):`${r.config.apiScheme}://${s}`}class Md{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,a)=>{this.timer=setTimeout(()=>a(le(this.auth,"network-request-failed")),Nd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ut(r,e,t){const a={appName:r.name};t.email&&(a.email=t.email),t.phoneNumber&&(a.phoneNumber=t.phoneNumber);const s=le(r,e,a);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $d(r,e){return ot(r,"POST","/v1/accounts:delete",e)}async function Ld(r,e){return ot(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ud(r,e=!1){const t=st(r),a=await t.getIdToken(e),s=rn(a);P(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const c=typeof s.firebase=="object"?s.firebase:void 0,h=c?.sign_in_provider;return{claims:s,token:a,authTime:pt(Hr(s.auth_time)),issuedAtTime:pt(Hr(s.iat)),expirationTime:pt(Hr(s.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Hr(r){return Number(r)*1e3}function rn(r){const[e,t,a]=r.split(".");if(e===void 0||t===void 0||a===void 0)return Bt("JWT malformed, contained fewer than 3 sections"),null;try{const s=ki(t);return s?JSON.parse(s):(Bt("Failed to decode base64 JWT payload"),null)}catch(s){return Bt("Caught error parsing JWT payload as JSON",s?.toString()),null}}function xd(r){const e=rn(r);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(r,e,t=!1){if(t)return e;try{return await e}catch(a){throw a instanceof Oe&&Fd(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function Fd({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pt(this.lastLoginAt),this.creationTime=pt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(r){var e;const t=r.auth,a=await r.getIdToken(),s=await mt(r,Ld(t,{idToken:a}));P(s?.users.length,t,"internal-error");const c=s.users[0];r._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?zd(c.providerUserInfo):[],g=Vd(r.providerData,h),m=r.isAnonymous,k=!(r.email&&c.passwordHash)&&!g?.length,A=m?k:!1,F={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new Bi(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(r,F)}async function Hd(r){const e=st(r);await qt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vd(r,e){return[...r.filter(a=>!e.some(s=>s.providerId===a.providerId)),...e]}function zd(r){return r.map(e=>{var{providerId:t}=e,a=Qr(e,["providerId"]);return{providerId:t,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jd(r,e){const t=await xi(r,{},async()=>{const a=yt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:c}=r.config,h=Fi(r,s,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",Ui.fetch()(h,{method:"POST",headers:g,body:a})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Wd(r,e){return ot(r,"POST","/v2/accounts:revokeToken",tn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:a,refreshToken:s,expiresIn:c}=await jd(e,t);this.updateTokensAndExpiration(a,s,Number(c))}updateTokensAndExpiration(e,t,a){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,t){const{refreshToken:a,accessToken:s,expirationTime:c}=t,h=new bt;return a&&(P(typeof a=="string","internal-error",{appName:e}),h.refreshToken=a),s&&(P(typeof s=="string","internal-error",{appName:e}),h.accessToken=s),c&&(P(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bt,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(r,e){P(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class He{constructor(e){var{uid:t,auth:a,stsTokenManager:s}=e,c=Qr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=a,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Bi(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const t=await mt(this,this.stsTokenManager.getToken(this.auth,e));return P(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ud(this,e)}reload(){return Hd(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new He(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),t&&await qt(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mt(this,$d(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var a,s,c,h,g,m,k,A;const F=(a=t.displayName)!==null&&a!==void 0?a:void 0,$=(s=t.email)!==null&&s!==void 0?s:void 0,G=(c=t.phoneNumber)!==null&&c!==void 0?c:void 0,Y=(h=t.photoURL)!==null&&h!==void 0?h:void 0,I=(g=t.tenantId)!==null&&g!==void 0?g:void 0,q=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,Tt=(k=t.createdAt)!==null&&k!==void 0?k:void 0,St=(A=t.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:je,emailVerified:ce,isAnonymous:ct,providerData:R,stsTokenManager:Ne}=t;P(je&&Ne,e,"internal-error");const K=bt.fromJSON(this.name,Ne);P(typeof je=="string",e,"internal-error"),Ie(F,e.name),Ie($,e.name),P(typeof ce=="boolean",e,"internal-error"),P(typeof ct=="boolean",e,"internal-error"),Ie(G,e.name),Ie(Y,e.name),Ie(I,e.name),Ie(q,e.name),Ie(Tt,e.name),Ie(St,e.name);const lt=new He({uid:je,auth:e,email:$,emailVerified:ce,displayName:F,isAnonymous:ct,photoURL:Y,phoneNumber:G,tenantId:I,stsTokenManager:K,createdAt:Tt,lastLoginAt:St});return R&&Array.isArray(R)&&(lt.providerData=R.map(Ct=>Object.assign({},Ct))),q&&(lt._redirectEventId=q),lt}static async _fromIdTokenResponse(e,t,a=!1){const s=new bt;s.updateFromServerResponse(t);const c=new He({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:a});return await qt(c),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new Map;function ge(r){me(r instanceof Function,"Expected a class definition");let e=Ya.get(r);return e?(me(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Ya.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hi.type="NONE";const Xa=Hi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(r,e,t){return`firebase:${r}:${e}:${t}`}class rt{constructor(e,t,a){this.persistence=e,this.auth=t,this.userKey=a;const{config:s,name:c}=this.auth;this.fullUserKey=Ht(this.userKey,s.apiKey,c),this.fullPersistenceKey=Ht("persistence",s.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?He._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,a="authUser"){if(!t.length)return new rt(ge(Xa),e,a);const s=(await Promise.all(t.map(async k=>{if(await k._isAvailable())return k}))).filter(k=>k);let c=s[0]||ge(Xa);const h=Ht(a,e.config.apiKey,e.name);let g=null;for(const k of t)try{const A=await k._get(h);if(A){const F=He._fromJSON(e,A);k!==c&&(g=F),c=k;break}}catch{}const m=s.filter(k=>k._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new rt(c,e,a):(c=m[0],g&&await c._set(h,g.toJSON()),await Promise.all(t.map(async k=>{if(k!==c)try{await k._remove(h)}catch{}})),new rt(c,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ji(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gi(e))return"Blackberry";if(qi(e))return"Webos";if(nn(e))return"Safari";if((e.includes("chrome/")||zi(e))&&!e.includes("edge/"))return"Chrome";if(Wi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(t);if(a?.length===2)return a[1]}return"Other"}function Vi(r=te()){return/firefox\//i.test(r)}function nn(r=te()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zi(r=te()){return/crios\//i.test(r)}function ji(r=te()){return/iemobile/i.test(r)}function Wi(r=te()){return/android/i.test(r)}function Gi(r=te()){return/blackberry/i.test(r)}function qi(r=te()){return/webos/i.test(r)}function Qt(r=te()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Gd(r=te()){var e;return Qt(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qd(){return lh()&&document.documentMode===10}function Ki(r=te()){return Qt(r)||Wi(r)||qi(r)||Gi(r)||/windows phone/i.test(r)||ji(r)}function Kd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(r,e=[]){let t;switch(r){case"Browser":t=Qa(te());break;case"Worker":t=`${Qa(te())}-${r}`;break;default:t=r}const a=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wt}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const a=c=>new Promise((h,g)=>{try{const m=e(c);h(m)}catch(m){g(m)}});a.onAbort=t,this.queue.push(a);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const a of this.queue)await a(e),a.onAbort&&t.push(a.onAbort)}catch(a){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yd(r,e={}){return ot(r,"GET","/v2/passwordPolicy",tn(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=6;class Qd{constructor(e){var t,a,s,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:Xd,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,a,s,c,h,g;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(a=m.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(s=m.containsLowercaseLetter)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(c=m.containsUppercaseLetter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(g=m.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),m}validatePasswordLengthOptions(e,t){const a=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;a&&(t.meetsMinPasswordLength=e.length>=a),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let a;for(let s=0;s<e.length;s++)a=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,t,a,s,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t,a,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=a,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Za(this),this.idTokenSubscription=new Za(this),this.beforeStateQueue=new Jd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$i,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ge(t)),this._initializationPromise=this.queue(async()=>{var a,s;if(!this._deleted&&(this.persistenceManager=await rt.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const a=await this.assertedPersistence.getCurrentUser();let s=a,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,g=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===g)&&m?.user&&(s=m.user,c=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qt(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?st(e):null;return t&&P(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yd(this),t=new Qd(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _t("auth","Firebase",e())}onAuthStateChanged(e,t,a){return this.registerStateListener(this.authStateSubscription,e,t,a)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,a){return this.registerStateListener(this.idTokenSubscription,e,t,a)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(a.tenantId=this.tenantId),await Wd(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const a=await this.getOrInitRedirectPersistenceManager(t);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ge(e)||this._popupRedirectResolver;P(t,this,"argument-error"),this.redirectPersistenceManager=await rt.create(this,[ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,a;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,a,s){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(g,this,"internal-error"),g.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,a,s);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ji(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(t["X-Firebase-Client"]=a);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Sd(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Zt(r){return st(r)}class Za{constructor(e){this.auth=e,this.observer=null,this.addObserver=gh(t=>this.observer=t)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}function tf(r){return new Promise((e,t)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=e,a.onerror=s=>{const c=le("internal-error");c.customData=s,t(c)},a.type="text/javascript",a.charset="UTF-8",ef().appendChild(a)})}function rf(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(r,e){const t=Pi(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),c=t.getOptions();if(jt(c,e??{}))return s;he(s,"already-initialized")}return t.initialize({options:e})}function af(r,e){const t=e?.persistence||[],a=(Array.isArray(t)?t:[t]).map(ge);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(a,e?.popupRedirectResolver)}function sf(r,e,t){const a=Zt(r);P(a._canInitEmulator,a,"emulator-config-failed"),P(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const s=!!t?.disableWarnings,c=Yi(e),{host:h,port:g}=of(e),m=g===null?"":`:${g}`;a.config.emulator={url:`${c}//${h}${m}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:h,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||cf()}function Yi(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function of(r){const e=Yi(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const a=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(a);if(s){const c=s[1];return{host:c,port:ei(a.substr(c.length+1))}}else{const[c,h]=a.split(":");return{host:c,port:ei(h)}}}function ei(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function cf(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ve("not implemented")}_getIdTokenResponse(e){return ve("not implemented")}_linkToIdToken(e,t){return ve("not implemented")}_getReauthenticationResolver(e){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(r,e){return Dd(r,"POST","/v1/accounts:signInWithIdp",tn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="http://localhost";class ze extends Xi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):he("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:s}=t,c=Qr(t,["providerId","signInMethod"]);if(!a||!s)return null;const h=new ze(a,s);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return nt(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,nt(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nt(e,t)}buildRequest(){const e={requestUri:lf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends an{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends Et{constructor(){super("facebook.com")}static credential(e){return ze._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ke.credential(e.oauthAccessToken)}catch{return null}}}ke.FACEBOOK_SIGN_IN_METHOD="facebook.com";ke.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends Et{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ze._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pe.credentialFromTaggedObject(e)}static credentialFromError(e){return pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a}=e;if(!t&&!a)return null;try{return pe.credential(t,a)}catch{return null}}}pe.GOOGLE_SIGN_IN_METHOD="google.com";pe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Et{constructor(){super("github.com")}static credential(e){return ze._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}Te.GITHUB_SIGN_IN_METHOD="github.com";Te.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Et{constructor(){super("twitter.com")}static credential(e,t){return ze._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:a}=e;if(!t||!a)return null;try{return Se.credential(t,a)}catch{return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com";Se.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,a,s=!1){const c=await He._fromIdTokenResponse(e,a,s),h=ti(a);return new it({user:c,providerId:h,_tokenResponse:a,operationType:t})}static async _forOperation(e,t,a){await e._updateTokensIfNecessary(a,!0);const s=ti(a);return new it({user:e,providerId:s,_tokenResponse:a,operationType:t})}}function ti(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Oe{constructor(e,t,a,s){var c;super(t.code,t.message),this.operationType=a,this.user=s,Object.setPrototypeOf(this,Kt.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:t.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,t,a,s){return new Kt(e,t,a,s)}}function Qi(r,e,t,a){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Kt._fromErrorAndOperation(r,c,e,a):c})}async function uf(r,e,t=!1){const a=await mt(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return it._forOperation(r,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hf(r,e,t=!1){const{auth:a}=r,s="reauthenticate";try{const c=await mt(r,Qi(a,s,e,r),t);P(c.idToken,a,"internal-error");const h=rn(c.idToken);P(h,a,"internal-error");const{sub:g}=h;return P(r.uid===g,a,"user-mismatch"),it._forOperation(r,s,c)}catch(c){throw c?.code==="auth/user-not-found"&&he(a,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function df(r,e,t=!1){const a="signIn",s=await Qi(r,a,e),c=await it._fromIdTokenResponse(r,a,s);return t||await r._updateCurrentUser(c.user),c}function ff(r,e,t,a){return st(r).onIdTokenChanged(e,t,a)}function pf(r,e,t){return st(r).beforeAuthStateChanged(e,t)}const Jt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jt,"1"),this.storage.removeItem(Jt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(){const r=te();return nn(r)||Qt(r)}const gf=1e3,mf=10;class es extends Zi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vf()&&Kd(),this.fallbackToPolling=Ki(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const a=this.storage.getItem(t),s=this.localCache[t];a!==s&&e(t,s,a)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,g,m)=>{this.notifyListeners(h,m)});return}const a=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const h=this.storage.getItem(a);if(e.newValue!==h)e.newValue!==null?this.storage.setItem(a,e.newValue):this.storage.removeItem(a);else if(this.localCache[a]===e.newValue&&!t)return}const s=()=>{const h=this.storage.getItem(a);!t&&this.localCache[a]===h||this.notifyListeners(a,h)},c=this.storage.getItem(a);qd()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mf):s()}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:a}),!0)})},gf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}es.type="LOCAL";const bf=es;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Zi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ts.type="SESSION";const rs=ts;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const a=new er(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:a,eventType:s,data:c}=t.data,h=this.handlersMap[s];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:a,eventType:s});const g=Array.from(h).map(async k=>k(t.origin,c)),m=await _f(g);t.ports[0].postMessage({status:"done",eventId:a,eventType:s,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}er.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(r="",e=10){let t="";for(let a=0;a<e;a++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let c,h;return new Promise((g,m)=>{const k=sn("",20);s.port1.start();const A=setTimeout(()=>{m(new Error("unsupported_event"))},a);h={messageChannel:s,onMessage(F){const $=F;if($.data.eventId===k)switch($.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g($.data.response);break;default:clearTimeout(A),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(h),s.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:k,data:t},[s.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return window}function wf(r){ue().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function If(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ef(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function kf(){return ns()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="firebaseLocalStorageDb",Tf=1,Yt="firebaseLocalStorage",is="fbase_key";class kt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tr(r,e){return r.transaction([Yt],e?"readwrite":"readonly").objectStore(Yt)}function Sf(){const r=indexedDB.deleteDatabase(as);return new kt(r).toPromise()}function Jr(){const r=indexedDB.open(as,Tf);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(Yt,{keyPath:is})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(Yt)?e(a):(a.close(),await Sf(),e(await Jr()))})})}async function ri(r,e,t){const a=tr(r,!0).put({[is]:e,value:t});return new kt(a).toPromise()}async function Cf(r,e){const t=tr(r,!1).get(e),a=await new kt(t).toPromise();return a===void 0?null:a.value}function ni(r,e){const t=tr(r,!0).delete(e);return new kt(t).toPromise()}const Af=800,Rf=3;class ss{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(t++>Rf)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ns()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=er._getInstance(kf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await If(),!this.activeServiceWorker)return;this.sender=new yf(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((t=a[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ef()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jr();return await ri(e,Jt,"1"),await ni(e,Jt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(a=>ri(a,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(a=>Cf(a,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ni(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const c=tr(s,!1).getAll();return new kt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],a=new Set;if(e.length!==0)for(const{fbase_key:s,value:c}of e)a.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(c)&&(this.notifyListeners(s,c),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!a.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Af)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ss.type="LOCAL";const Pf=ss;new It(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(r,e){return e?ge(e):(P(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Xi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Of(r){return df(r.auth,new on(r),r.bypassAuthState)}function Nf(r){const{auth:e,user:t}=r;return P(t,e,"internal-error"),hf(t,new on(r),r.bypassAuthState)}async function Df(r){const{auth:e,user:t}=r;return P(t,e,"internal-error"),uf(t,new on(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t,a,s,c=!1){this.auth=e,this.resolver=a,this.user=s,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:a,postBody:s,tenantId:c,error:h,type:g}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:a,tenantId:c||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(m))}catch(k){this.reject(k)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Of;case"linkViaPopup":case"linkViaRedirect":return Df;case"reauthViaPopup":case"reauthViaRedirect":return Nf;default:he(this.auth,"internal-error")}}resolve(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new It(2e3,1e4);async function $f(r,e,t){const a=Zt(r);Cd(r,e,an);const s=os(a,t);return new xe(a,"signInViaPopup",e,s).executeNotNull()}class xe extends cs{constructor(e,t,a,s,c){super(e,t,s,c),this.provider=a,this.authWindow=null,this.pollId=null,xe.currentPopupAction&&xe.currentPopupAction.cancel(),xe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){me(this.filter.length===1,"Popup operations only handle one event");const e=sn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,a;if(!((a=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mf.get())};e()}}xe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="pendingRedirect",Vt=new Map;class Uf extends cs{constructor(e,t,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a),this.eventId=null}async execute(){let e=Vt.get(this.auth._key());if(!e){try{const a=await xf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(t){e=()=>Promise.reject(t)}Vt.set(this.auth._key(),e)}return this.bypassAuthState||Vt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xf(r,e){const t=Hf(e),a=Bf(r);if(!await a._isAvailable())return!1;const s=await a._get(t)==="true";return await a._remove(t),s}function Ff(r,e){Vt.set(r._key(),e)}function Bf(r){return ge(r._redirectPersistence)}function Hf(r){return Ht(Lf,r.config.apiKey,r.name)}async function Vf(r,e,t=!1){const a=Zt(r),s=os(a,e),h=await new Uf(a,s,t).execute();return h&&!t&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=10*60*1e3;class jf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(t=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var a;if(e.error&&!ls(e)){const s=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";t.onError(le(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const a=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zf&&this.cachedEventUids.clear(),this.cachedEventUids.has(ai(e))}saveEventToCache(e){this.cachedEventUids.add(ai(e)),this.lastProcessedEventTime=Date.now()}}function ai(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function ls({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function Wf(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ls(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gf(r,e={}){return ot(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kf=/^https?/;async function Jf(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Gf(r);for(const t of e)try{if(Yf(t))return}catch{}he(r,"unauthorized-domain")}function Yf(r){const e=Kr(),{protocol:t,hostname:a}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&a===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===a}if(!Kf.test(t))return!1;if(qf.test(r))return a===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new It(3e4,6e4);function ii(){const r=ue().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Qf(r){return new Promise((e,t)=>{var a,s,c;function h(){ii(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ii(),t(le(r,"network-request-failed"))},timeout:Xf.get()})}if(!((s=(a=ue().gapi)===null||a===void 0?void 0:a.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((c=ue().gapi)===null||c===void 0)&&c.load)h();else{const g=rf("iframefcb");return ue()[g]=()=>{gapi.load?h():t(le(r,"network-request-failed"))},tf(`https://apis.google.com/js/api.js?onload=${g}`).catch(m=>t(m))}}).catch(e=>{throw zt=null,e})}let zt=null;function Zf(r){return zt=zt||Qf(r),zt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new It(5e3,15e3),tp="__/auth/iframe",rp="emulator/auth/iframe",np={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ap=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ip(r){const e=r.config;P(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?en(e,rp):`https://${r.config.authDomain}/${tp}`,a={apiKey:e.apiKey,appName:r.name,v:wt},s=ap.get(r.config.apiHost);s&&(a.eid=s);const c=r._getFrameworks();return c.length&&(a.fw=c.join(",")),`${t}?${yt(a).slice(1)}`}async function sp(r){const e=await Zf(r),t=ue().gapi;return P(t,r,"internal-error"),e.open({where:document.body,url:ip(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:np,dontclear:!0},a=>new Promise(async(s,c)=>{await a.restyle({setHideOnLeave:!1});const h=le(r,"network-request-failed"),g=ue().setTimeout(()=>{c(h)},ep.get());function m(){ue().clearTimeout(g),s(a)}a.ping(m).then(m,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cp=500,lp=600,up="_blank",hp="http://localhost";class si{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dp(r,e,t,a=cp,s=lp){const c=Math.max((window.screen.availHeight-s)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let g="";const m=Object.assign(Object.assign({},op),{width:a.toString(),height:s.toString(),top:c,left:h}),k=te().toLowerCase();t&&(g=zi(k)?up:t),Vi(k)&&(e=e||hp,m.scrollbars="yes");const A=Object.entries(m).reduce(($,[G,Y])=>`${$}${G}=${Y},`,"");if(Gd(k)&&g!=="_self")return fp(e||"",g),new si(null);const F=window.open(e||"",g,A);P(F,r,"popup-blocked");try{F.focus()}catch{}return new si(F)}function fp(r,e){const t=document.createElement("a");t.href=r,t.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="__/auth/handler",vp="emulator/auth/handler",gp=encodeURIComponent("fac");async function oi(r,e,t,a,s,c){P(r.config.authDomain,r,"auth-domain-config-required"),P(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:a,v:wt,eventId:s};if(e instanceof an){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",vh(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,F]of Object.entries(c||{}))h[A]=F}if(e instanceof Et){const A=e.getScopes().filter(F=>F!=="");A.length>0&&(h.scopes=A.join(","))}r.tenantId&&(h.tid=r.tenantId);const g=h;for(const A of Object.keys(g))g[A]===void 0&&delete g[A];const m=await r._getAppCheckToken(),k=m?`#${gp}=${encodeURIComponent(m)}`:"";return`${mp(r)}?${yt(g).slice(1)}${k}`}function mp({config:r}){return r.emulator?en(r,vp):`https://${r.authDomain}/${pp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="webStorageSupport";class bp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rs,this._completeRedirectFn=Vf,this._overrideRedirectResult=Ff}async _openPopup(e,t,a,s){var c;me((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await oi(e,t,a,Kr(),s);return dp(e,h,sn())}async _openRedirect(e,t,a,s){await this._originValidation(e);const c=await oi(e,t,a,Kr(),s);return wf(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:c}=this.eventManagers[t];return s?Promise.resolve(s):(me(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(e);return this.eventManagers[t]={promise:a},a.catch(()=>{delete this.eventManagers[t]}),a}async initAndGetManager(e){const t=await sp(e),a=new jf(e);return t.register("authEvent",s=>(P(s?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=t,a}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vr,{type:Vr},s=>{var c;const h=(c=s?.[0])===null||c===void 0?void 0:c[Vr];h!==void 0&&t(!!h),he(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ki()||nn()||Qt()}}const _p=bp;var ci="@firebase/auth",li="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ip(r){vt(new at("auth",(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:g}=a.options;P(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const m={apiKey:h,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ji(r)},k=new Zd(a,s,c,m);return af(k,t),k},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider("auth-internal").initialize()})),vt(new at("auth-internal",e=>{const t=Zt(e.getProvider("auth").getImmediate());return(a=>new yp(a))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(ci,li,wp(r)),tt(ci,li,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=5*60,kp=Si("authIdTokenMaxAge")||Ep;let ui=null;const Tp=r=>async e=>{const t=e&&await e.getIdTokenResult(),a=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(a&&a>kp)return;const s=t?.token;ui!==s&&(ui=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Sp(r=vd()){const e=Pi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=nf(r,{popupRedirectResolver:_p,persistence:[Pf,bf,rs]}),a=Si("authTokenSyncURL");if(a){const c=Tp(a);pf(t,c,()=>c(t.currentUser)),ff(t,h=>c(h))}const s=ah("auth");return s&&sf(t,`http://${s}`),t}Ip("Browser");var Cp="firebase",Ap="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(Cp,Ap,"app");class hi{cache;constructor(){this.cache={}}set(e,t){return this.has(e)?!1:(this.cache[e]=t,!0)}get(e){return this.cache[e]}has(e){return!!this.get(e)}delete(e){return this.has(e)?(delete this.cache[e],!0):!1}}class di{static apps=new hi;static auths=new hi;static getApp(e){if(!this.apps.has(e.appId)){const t=Oi(e);this.apps.set(e.appId,t)}return this.apps.get(e.appId)}static getAuth(e){try{if(!this.auths.has(e.appId)){const t=this.getApp(e);if(t){const a=Sp(t);this.auths.set(e.appId,a)}}return this.auths.get(e.appId)}catch{throw new yi}}static getProvider(){const e=new pe;return e.setCustomParameters({prompt:"select_account"}),e}}class Rp{static login(e){return new Promise((t,a)=>{const s=di.getAuth(e);if(!s)throw new yi;const c=di.getProvider();if(!c)throw new Wu("unknown");$f(s,c).then(h=>{const g=h._tokenResponse.oauthIdToken??"";t(g)}).catch(a)})}}var Pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Op(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var us={exports:{}};/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */(function(r,e){(function(t,a){r.exports=a()})(Pp,function(){for(var t=function(n,i,o){return i===void 0&&(i=0),o===void 0&&(o=1),n<i?i:n>o?o:n},a=t,s=function(n){n._clipped=!1,n._unclipped=n.slice(0);for(var i=0;i<=3;i++)i<3?((n[i]<0||n[i]>255)&&(n._clipped=!0),n[i]=a(n[i],0,255)):i===3&&(n[i]=a(n[i],0,1));return n},c={},h=0,g=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];h<g.length;h+=1){var m=g[h];c["[object "+m+"]"]=m.toLowerCase()}var k=function(n){return c[Object.prototype.toString.call(n)]||"object"},A=k,F=function(n,i){return i===void 0&&(i=null),n.length>=3?Array.prototype.slice.call(n):A(n[0])=="object"&&i?i.split("").filter(function(o){return n[0][o]!==void 0}).map(function(o){return n[0][o]}):n[0]},$=k,G=function(n){if(n.length<2)return null;var i=n.length-1;return $(n[i])=="string"?n[i].toLowerCase():null},Y=Math.PI,I={clip_rgb:s,limit:t,type:k,unpack:F,last:G,PI:Y,TWOPI:Y*2,PITHIRD:Y/3,DEG2RAD:Y/180,RAD2DEG:180/Y},q={format:{},autodetect:[]},Tt=I.last,St=I.clip_rgb,je=I.type,ce=q,ct=function(){for(var i=[],o=arguments.length;o--;)i[o]=arguments[o];var l=this;if(je(i[0])==="object"&&i[0].constructor&&i[0].constructor===this.constructor)return i[0];var d=Tt(i),f=!1;if(!d){f=!0,ce.sorted||(ce.autodetect=ce.autodetect.sort(function(_,E){return E.p-_.p}),ce.sorted=!0);for(var u=0,p=ce.autodetect;u<p.length;u+=1){var v=p[u];if(d=v.test.apply(v,i),d)break}}if(ce.format[d]){var b=ce.format[d].apply(null,f?i:i.slice(0,-1));l._rgb=St(b)}else throw new Error("unknown format: "+i);l._rgb.length===3&&l._rgb.push(1)};ct.prototype.toString=function(){return je(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var R=ct,Ne=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Ne.Color,[null].concat(n)))};Ne.Color=R,Ne.version="2.4.2";var K=Ne,lt=I.unpack,Ct=Math.max,hs=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=lt(n,"rgb"),l=o[0],d=o[1],f=o[2];l=l/255,d=d/255,f=f/255;var u=1-Ct(l,Ct(d,f)),p=u<1?1/(1-u):0,v=(1-l-u)*p,b=(1-d-u)*p,_=(1-f-u)*p;return[v,b,_,u]},ds=hs,fs=I.unpack,ps=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=fs(n,"cmyk");var o=n[0],l=n[1],d=n[2],f=n[3],u=n.length>4?n[4]:1;return f===1?[0,0,0,u]:[o>=1?0:255*(1-o)*(1-f),l>=1?0:255*(1-l)*(1-f),d>=1?0:255*(1-d)*(1-f),u]},vs=ps,gs=K,cn=R,ln=q,ms=I.unpack,bs=I.type,_s=ds;cn.prototype.cmyk=function(){return _s(this._rgb)},gs.cmyk=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(cn,[null].concat(n,["cmyk"])))},ln.format.cmyk=vs,ln.autodetect.push({p:2,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=ms(n,"cmyk"),bs(n)==="array"&&n.length===4)return"cmyk"}});var ys=I.unpack,ws=I.last,rr=function(n){return Math.round(n*100)/100},Is=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=ys(n,"hsla"),l=ws(n)||"lsa";return o[0]=rr(o[0]||0),o[1]=rr(o[1]*100)+"%",o[2]=rr(o[2]*100)+"%",l==="hsla"||o.length>3&&o[3]<1?(o[3]=o.length>3?o[3]:1,l="hsla"):o.length=3,l+"("+o.join(",")+")"},Es=Is,ks=I.unpack,Ts=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=ks(n,"rgba");var o=n[0],l=n[1],d=n[2];o/=255,l/=255,d/=255;var f=Math.min(o,l,d),u=Math.max(o,l,d),p=(u+f)/2,v,b;return u===f?(v=0,b=Number.NaN):v=p<.5?(u-f)/(u+f):(u-f)/(2-u-f),o==u?b=(l-d)/(u-f):l==u?b=2+(d-o)/(u-f):d==u&&(b=4+(o-l)/(u-f)),b*=60,b<0&&(b+=360),n.length>3&&n[3]!==void 0?[b,v,p,n[3]]:[b,v,p]},un=Ts,Ss=I.unpack,Cs=I.last,As=Es,Rs=un,nr=Math.round,Ps=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Ss(n,"rgba"),l=Cs(n)||"rgb";return l.substr(0,3)=="hsl"?As(Rs(o),l):(o[0]=nr(o[0]),o[1]=nr(o[1]),o[2]=nr(o[2]),(l==="rgba"||o.length>3&&o[3]<1)&&(o[3]=o.length>3?o[3]:1,l="rgba"),l+"("+o.slice(0,l==="rgb"?3:4).join(",")+")")},Os=Ps,Ns=I.unpack,ar=Math.round,Ds=function(){for(var n,i=[],o=arguments.length;o--;)i[o]=arguments[o];i=Ns(i,"hsl");var l=i[0],d=i[1],f=i[2],u,p,v;if(d===0)u=p=v=f*255;else{var b=[0,0,0],_=[0,0,0],E=f<.5?f*(1+d):f+d-f*d,y=2*f-E,S=l/360;b[0]=S+1/3,b[1]=S,b[2]=S-1/3;for(var T=0;T<3;T++)b[T]<0&&(b[T]+=1),b[T]>1&&(b[T]-=1),6*b[T]<1?_[T]=y+(E-y)*6*b[T]:2*b[T]<1?_[T]=E:3*b[T]<2?_[T]=y+(E-y)*(2/3-b[T])*6:_[T]=y;n=[ar(_[0]*255),ar(_[1]*255),ar(_[2]*255)],u=n[0],p=n[1],v=n[2]}return i.length>3?[u,p,v,i[3]]:[u,p,v,1]},hn=Ds,dn=hn,fn=q,pn=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,vn=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,gn=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,mn=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,bn=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,_n=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,yn=Math.round,wn=function(n){n=n.toLowerCase().trim();var i;if(fn.format.named)try{return fn.format.named(n)}catch{}if(i=n.match(pn)){for(var o=i.slice(1,4),l=0;l<3;l++)o[l]=+o[l];return o[3]=1,o}if(i=n.match(vn)){for(var d=i.slice(1,5),f=0;f<4;f++)d[f]=+d[f];return d}if(i=n.match(gn)){for(var u=i.slice(1,4),p=0;p<3;p++)u[p]=yn(u[p]*2.55);return u[3]=1,u}if(i=n.match(mn)){for(var v=i.slice(1,5),b=0;b<3;b++)v[b]=yn(v[b]*2.55);return v[3]=+v[3],v}if(i=n.match(bn)){var _=i.slice(1,4);_[1]*=.01,_[2]*=.01;var E=dn(_);return E[3]=1,E}if(i=n.match(_n)){var y=i.slice(1,4);y[1]*=.01,y[2]*=.01;var S=dn(y);return S[3]=+i[4],S}};wn.test=function(n){return pn.test(n)||vn.test(n)||gn.test(n)||mn.test(n)||bn.test(n)||_n.test(n)};var Ms=wn,$s=K,In=R,En=q,Ls=I.type,Us=Os,kn=Ms;In.prototype.css=function(n){return Us(this._rgb,n)},$s.css=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(In,[null].concat(n,["css"])))},En.format.css=kn,En.autodetect.push({p:5,test:function(n){for(var i=[],o=arguments.length-1;o-- >0;)i[o]=arguments[o+1];if(!i.length&&Ls(n)==="string"&&kn.test(n))return"css"}});var Tn=R,xs=K,Fs=q,Bs=I.unpack;Fs.format.gl=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Bs(n,"rgba");return o[0]*=255,o[1]*=255,o[2]*=255,o},xs.gl=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Tn,[null].concat(n,["gl"])))},Tn.prototype.gl=function(){var n=this._rgb;return[n[0]/255,n[1]/255,n[2]/255,n[3]]};var Hs=I.unpack,Vs=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Hs(n,"rgb"),l=o[0],d=o[1],f=o[2],u=Math.min(l,d,f),p=Math.max(l,d,f),v=p-u,b=v*100/255,_=u/(255-v)*100,E;return v===0?E=Number.NaN:(l===p&&(E=(d-f)/v),d===p&&(E=2+(f-l)/v),f===p&&(E=4+(l-d)/v),E*=60,E<0&&(E+=360)),[E,b,_]},zs=Vs,js=I.unpack,Ws=Math.floor,Gs=function(){for(var n,i,o,l,d,f,u=[],p=arguments.length;p--;)u[p]=arguments[p];u=js(u,"hcg");var v=u[0],b=u[1],_=u[2],E,y,S;_=_*255;var T=b*255;if(b===0)E=y=S=_;else{v===360&&(v=0),v>360&&(v-=360),v<0&&(v+=360),v/=60;var O=Ws(v),M=v-O,U=_*(1-b),B=U+T*(1-M),Z=U+T*M,Q=U+T;switch(O){case 0:n=[Q,Z,U],E=n[0],y=n[1],S=n[2];break;case 1:i=[B,Q,U],E=i[0],y=i[1],S=i[2];break;case 2:o=[U,Q,Z],E=o[0],y=o[1],S=o[2];break;case 3:l=[U,B,Q],E=l[0],y=l[1],S=l[2];break;case 4:d=[Z,U,Q],E=d[0],y=d[1],S=d[2];break;case 5:f=[Q,U,B],E=f[0],y=f[1],S=f[2];break}}return[E,y,S,u.length>3?u[3]:1]},qs=Gs,Ks=I.unpack,Js=I.type,Ys=K,Sn=R,Cn=q,Xs=zs;Sn.prototype.hcg=function(){return Xs(this._rgb)},Ys.hcg=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Sn,[null].concat(n,["hcg"])))},Cn.format.hcg=qs,Cn.autodetect.push({p:1,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=Ks(n,"hcg"),Js(n)==="array"&&n.length===3)return"hcg"}});var Qs=I.unpack,Zs=I.last,At=Math.round,eo=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Qs(n,"rgba"),l=o[0],d=o[1],f=o[2],u=o[3],p=Zs(n)||"auto";u===void 0&&(u=1),p==="auto"&&(p=u<1?"rgba":"rgb"),l=At(l),d=At(d),f=At(f);var v=l<<16|d<<8|f,b="000000"+v.toString(16);b=b.substr(b.length-6);var _="0"+At(u*255).toString(16);switch(_=_.substr(_.length-2),p.toLowerCase()){case"rgba":return"#"+b+_;case"argb":return"#"+_+b;default:return"#"+b}},An=eo,to=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,ro=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,no=function(n){if(n.match(to)){(n.length===4||n.length===7)&&(n=n.substr(1)),n.length===3&&(n=n.split(""),n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);var i=parseInt(n,16),o=i>>16,l=i>>8&255,d=i&255;return[o,l,d,1]}if(n.match(ro)){(n.length===5||n.length===9)&&(n=n.substr(1)),n.length===4&&(n=n.split(""),n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]);var f=parseInt(n,16),u=f>>24&255,p=f>>16&255,v=f>>8&255,b=Math.round((f&255)/255*100)/100;return[u,p,v,b]}throw new Error("unknown hex color: "+n)},Rn=no,ao=K,Pn=R,io=I.type,On=q,so=An;Pn.prototype.hex=function(n){return so(this._rgb,n)},ao.hex=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Pn,[null].concat(n,["hex"])))},On.format.hex=Rn,On.autodetect.push({p:4,test:function(n){for(var i=[],o=arguments.length-1;o-- >0;)i[o]=arguments[o+1];if(!i.length&&io(n)==="string"&&[3,4,5,6,7,8,9].indexOf(n.length)>=0)return"hex"}});var oo=I.unpack,Nn=I.TWOPI,co=Math.min,lo=Math.sqrt,uo=Math.acos,ho=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=oo(n,"rgb"),l=o[0],d=o[1],f=o[2];l/=255,d/=255,f/=255;var u,p=co(l,d,f),v=(l+d+f)/3,b=v>0?1-p/v:0;return b===0?u=NaN:(u=(l-d+(l-f))/2,u/=lo((l-d)*(l-d)+(l-f)*(d-f)),u=uo(u),f>d&&(u=Nn-u),u/=Nn),[u*360,b,v]},fo=ho,po=I.unpack,ir=I.limit,We=I.TWOPI,sr=I.PITHIRD,Ge=Math.cos,vo=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=po(n,"hsi");var o=n[0],l=n[1],d=n[2],f,u,p;return isNaN(o)&&(o=0),isNaN(l)&&(l=0),o>360&&(o-=360),o<0&&(o+=360),o/=360,o<1/3?(p=(1-l)/3,f=(1+l*Ge(We*o)/Ge(sr-We*o))/3,u=1-(p+f)):o<2/3?(o-=1/3,f=(1-l)/3,u=(1+l*Ge(We*o)/Ge(sr-We*o))/3,p=1-(f+u)):(o-=2/3,u=(1-l)/3,p=(1+l*Ge(We*o)/Ge(sr-We*o))/3,f=1-(u+p)),f=ir(d*f*3),u=ir(d*u*3),p=ir(d*p*3),[f*255,u*255,p*255,n.length>3?n[3]:1]},go=vo,mo=I.unpack,bo=I.type,_o=K,Dn=R,Mn=q,yo=fo;Dn.prototype.hsi=function(){return yo(this._rgb)},_o.hsi=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Dn,[null].concat(n,["hsi"])))},Mn.format.hsi=go,Mn.autodetect.push({p:2,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=mo(n,"hsi"),bo(n)==="array"&&n.length===3)return"hsi"}});var wo=I.unpack,Io=I.type,Eo=K,$n=R,Ln=q,ko=un;$n.prototype.hsl=function(){return ko(this._rgb)},Eo.hsl=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply($n,[null].concat(n,["hsl"])))},Ln.format.hsl=hn,Ln.autodetect.push({p:2,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=wo(n,"hsl"),Io(n)==="array"&&n.length===3)return"hsl"}});var To=I.unpack,So=Math.min,Co=Math.max,Ao=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=To(n,"rgb");var o=n[0],l=n[1],d=n[2],f=So(o,l,d),u=Co(o,l,d),p=u-f,v,b,_;return _=u/255,u===0?(v=Number.NaN,b=0):(b=p/u,o===u&&(v=(l-d)/p),l===u&&(v=2+(d-o)/p),d===u&&(v=4+(o-l)/p),v*=60,v<0&&(v+=360)),[v,b,_]},Ro=Ao,Po=I.unpack,Oo=Math.floor,No=function(){for(var n,i,o,l,d,f,u=[],p=arguments.length;p--;)u[p]=arguments[p];u=Po(u,"hsv");var v=u[0],b=u[1],_=u[2],E,y,S;if(_*=255,b===0)E=y=S=_;else{v===360&&(v=0),v>360&&(v-=360),v<0&&(v+=360),v/=60;var T=Oo(v),O=v-T,M=_*(1-b),U=_*(1-b*O),B=_*(1-b*(1-O));switch(T){case 0:n=[_,B,M],E=n[0],y=n[1],S=n[2];break;case 1:i=[U,_,M],E=i[0],y=i[1],S=i[2];break;case 2:o=[M,_,B],E=o[0],y=o[1],S=o[2];break;case 3:l=[M,U,_],E=l[0],y=l[1],S=l[2];break;case 4:d=[B,M,_],E=d[0],y=d[1],S=d[2];break;case 5:f=[_,M,U],E=f[0],y=f[1],S=f[2];break}}return[E,y,S,u.length>3?u[3]:1]},Do=No,Mo=I.unpack,$o=I.type,Lo=K,Un=R,xn=q,Uo=Ro;Un.prototype.hsv=function(){return Uo(this._rgb)},Lo.hsv=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Un,[null].concat(n,["hsv"])))},xn.format.hsv=Do,xn.autodetect.push({p:2,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=Mo(n,"hsv"),$o(n)==="array"&&n.length===3)return"hsv"}});var Rt={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},qe=Rt,xo=I.unpack,Fn=Math.pow,Fo=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=xo(n,"rgb"),l=o[0],d=o[1],f=o[2],u=Bo(l,d,f),p=u[0],v=u[1],b=u[2],_=116*v-16;return[_<0?0:_,500*(p-v),200*(v-b)]},or=function(n){return(n/=255)<=.04045?n/12.92:Fn((n+.055)/1.055,2.4)},cr=function(n){return n>qe.t3?Fn(n,1/3):n/qe.t2+qe.t0},Bo=function(n,i,o){n=or(n),i=or(i),o=or(o);var l=cr((.4124564*n+.3575761*i+.1804375*o)/qe.Xn),d=cr((.2126729*n+.7151522*i+.072175*o)/qe.Yn),f=cr((.0193339*n+.119192*i+.9503041*o)/qe.Zn);return[l,d,f]},Bn=Fo,Ke=Rt,Ho=I.unpack,Vo=Math.pow,zo=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=Ho(n,"lab");var o=n[0],l=n[1],d=n[2],f,u,p,v,b,_;return u=(o+16)/116,f=isNaN(l)?u:u+l/500,p=isNaN(d)?u:u-d/200,u=Ke.Yn*ur(u),f=Ke.Xn*ur(f),p=Ke.Zn*ur(p),v=lr(3.2404542*f-1.5371385*u-.4985314*p),b=lr(-.969266*f+1.8760108*u+.041556*p),_=lr(.0556434*f-.2040259*u+1.0572252*p),[v,b,_,n.length>3?n[3]:1]},lr=function(n){return 255*(n<=.00304?12.92*n:1.055*Vo(n,1/2.4)-.055)},ur=function(n){return n>Ke.t1?n*n*n:Ke.t2*(n-Ke.t0)},Hn=zo,jo=I.unpack,Wo=I.type,Go=K,Vn=R,zn=q,qo=Bn;Vn.prototype.lab=function(){return qo(this._rgb)},Go.lab=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Vn,[null].concat(n,["lab"])))},zn.format.lab=Hn,zn.autodetect.push({p:2,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=jo(n,"lab"),Wo(n)==="array"&&n.length===3)return"lab"}});var Ko=I.unpack,Jo=I.RAD2DEG,Yo=Math.sqrt,Xo=Math.atan2,Qo=Math.round,Zo=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Ko(n,"lab"),l=o[0],d=o[1],f=o[2],u=Yo(d*d+f*f),p=(Xo(f,d)*Jo+360)%360;return Qo(u*1e4)===0&&(p=Number.NaN),[l,u,p]},jn=Zo,ec=I.unpack,tc=Bn,rc=jn,nc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=ec(n,"rgb"),l=o[0],d=o[1],f=o[2],u=tc(l,d,f),p=u[0],v=u[1],b=u[2];return rc(p,v,b)},ac=nc,ic=I.unpack,sc=I.DEG2RAD,oc=Math.sin,cc=Math.cos,lc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=ic(n,"lch"),l=o[0],d=o[1],f=o[2];return isNaN(f)&&(f=0),f=f*sc,[l,cc(f)*d,oc(f)*d]},Wn=lc,uc=I.unpack,hc=Wn,dc=Hn,fc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=uc(n,"lch");var o=n[0],l=n[1],d=n[2],f=hc(o,l,d),u=f[0],p=f[1],v=f[2],b=dc(u,p,v),_=b[0],E=b[1],y=b[2];return[_,E,y,n.length>3?n[3]:1]},Gn=fc,pc=I.unpack,vc=Gn,gc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=pc(n,"hcl").reverse();return vc.apply(void 0,o)},mc=gc,bc=I.unpack,_c=I.type,qn=K,Pt=R,hr=q,Kn=ac;Pt.prototype.lch=function(){return Kn(this._rgb)},Pt.prototype.hcl=function(){return Kn(this._rgb).reverse()},qn.lch=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Pt,[null].concat(n,["lch"])))},qn.hcl=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Pt,[null].concat(n,["hcl"])))},hr.format.lch=Gn,hr.format.hcl=mc,["lch","hcl"].forEach(function(n){return hr.autodetect.push({p:2,test:function(){for(var i=[],o=arguments.length;o--;)i[o]=arguments[o];if(i=bc(i,n),_c(i)==="array"&&i.length===3)return n}})});var yc={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Jn=yc,wc=R,Yn=q,Ic=I.type,ut=Jn,Ec=Rn,kc=An;wc.prototype.name=function(){for(var n=kc(this._rgb,"rgb"),i=0,o=Object.keys(ut);i<o.length;i+=1){var l=o[i];if(ut[l]===n)return l.toLowerCase()}return n},Yn.format.named=function(n){if(n=n.toLowerCase(),ut[n])return Ec(ut[n]);throw new Error("unknown color name: "+n)},Yn.autodetect.push({p:5,test:function(n){for(var i=[],o=arguments.length-1;o-- >0;)i[o]=arguments[o+1];if(!i.length&&Ic(n)==="string"&&ut[n.toLowerCase()])return"named"}});var Tc=I.unpack,Sc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Tc(n,"rgb"),l=o[0],d=o[1],f=o[2];return(l<<16)+(d<<8)+f},Cc=Sc,Ac=I.type,Rc=function(n){if(Ac(n)=="number"&&n>=0&&n<=16777215){var i=n>>16,o=n>>8&255,l=n&255;return[i,o,l,1]}throw new Error("unknown num color: "+n)},Pc=Rc,Oc=K,Xn=R,Qn=q,Nc=I.type,Dc=Cc;Xn.prototype.num=function(){return Dc(this._rgb)},Oc.num=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Xn,[null].concat(n,["num"])))},Qn.format.num=Pc,Qn.autodetect.push({p:5,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n.length===1&&Nc(n[0])==="number"&&n[0]>=0&&n[0]<=16777215)return"num"}});var Mc=K,dr=R,Zn=q,ea=I.unpack,ta=I.type,ra=Math.round;dr.prototype.rgb=function(n){return n===void 0&&(n=!0),n===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(ra)},dr.prototype.rgba=function(n){return n===void 0&&(n=!0),this._rgb.slice(0,4).map(function(i,o){return o<3?n===!1?i:ra(i):i})},Mc.rgb=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(dr,[null].concat(n,["rgb"])))},Zn.format.rgb=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=ea(n,"rgba");return o[3]===void 0&&(o[3]=1),o},Zn.autodetect.push({p:3,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=ea(n,"rgba"),ta(n)==="array"&&(n.length===3||n.length===4&&ta(n[3])=="number"&&n[3]>=0&&n[3]<=1))return"rgb"}});var Ot=Math.log,$c=function(n){var i=n/100,o,l,d;return i<66?(o=255,l=i<6?0:-155.25485562709179-.44596950469579133*(l=i-2)+104.49216199393888*Ot(l),d=i<20?0:-254.76935184120902+.8274096064007395*(d=i-10)+115.67994401066147*Ot(d)):(o=351.97690566805693+.114206453784165*(o=i-55)-40.25366309332127*Ot(o),l=325.4494125711974+.07943456536662342*(l=i-50)-28.0852963507957*Ot(l),d=255),[o,l,d,1]},na=$c,Lc=na,Uc=I.unpack,xc=Math.round,Fc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];for(var o=Uc(n,"rgb"),l=o[0],d=o[2],f=1e3,u=4e4,p=.4,v;u-f>p;){v=(u+f)*.5;var b=Lc(v);b[2]/b[0]>=d/l?u=v:f=v}return xc(v)},Bc=Fc,fr=K,Nt=R,pr=q,Hc=Bc;Nt.prototype.temp=Nt.prototype.kelvin=Nt.prototype.temperature=function(){return Hc(this._rgb)},fr.temp=fr.kelvin=fr.temperature=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Nt,[null].concat(n,["temp"])))},pr.format.temp=pr.format.kelvin=pr.format.temperature=na;var Vc=I.unpack,vr=Math.cbrt,zc=Math.pow,jc=Math.sign,Wc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Vc(n,"rgb"),l=o[0],d=o[1],f=o[2],u=[gr(l/255),gr(d/255),gr(f/255)],p=u[0],v=u[1],b=u[2],_=vr(.4122214708*p+.5363325363*v+.0514459929*b),E=vr(.2119034982*p+.6806995451*v+.1073969566*b),y=vr(.0883024619*p+.2817188376*v+.6299787005*b);return[.2104542553*_+.793617785*E-.0040720468*y,1.9779984951*_-2.428592205*E+.4505937099*y,.0259040371*_+.7827717662*E-.808675766*y]},aa=Wc;function gr(n){var i=Math.abs(n);return i<.04045?n/12.92:(jc(n)||1)*zc((i+.055)/1.055,2.4)}var Gc=I.unpack,Dt=Math.pow,qc=Math.sign,Kc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=Gc(n,"lab");var o=n[0],l=n[1],d=n[2],f=Dt(o+.3963377774*l+.2158037573*d,3),u=Dt(o-.1055613458*l-.0638541728*d,3),p=Dt(o-.0894841775*l-1.291485548*d,3);return[255*mr(4.0767416621*f-3.3077115913*u+.2309699292*p),255*mr(-1.2684380046*f+2.6097574011*u-.3413193965*p),255*mr(-.0041960863*f-.7034186147*u+1.707614701*p),n.length>3?n[3]:1]},ia=Kc;function mr(n){var i=Math.abs(n);return i>.0031308?(qc(n)||1)*(1.055*Dt(i,1/2.4)-.055):n*12.92}var Jc=I.unpack,Yc=I.type,Xc=K,sa=R,oa=q,Qc=aa;sa.prototype.oklab=function(){return Qc(this._rgb)},Xc.oklab=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(sa,[null].concat(n,["oklab"])))},oa.format.oklab=ia,oa.autodetect.push({p:3,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=Jc(n,"oklab"),Yc(n)==="array"&&n.length===3)return"oklab"}});var Zc=I.unpack,el=aa,tl=jn,rl=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Zc(n,"rgb"),l=o[0],d=o[1],f=o[2],u=el(l,d,f),p=u[0],v=u[1],b=u[2];return tl(p,v,b)},nl=rl,al=I.unpack,il=Wn,sl=ia,ol=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=al(n,"lch");var o=n[0],l=n[1],d=n[2],f=il(o,l,d),u=f[0],p=f[1],v=f[2],b=sl(u,p,v),_=b[0],E=b[1],y=b[2];return[_,E,y,n.length>3?n[3]:1]},cl=ol,ll=I.unpack,ul=I.type,hl=K,ca=R,la=q,dl=nl;ca.prototype.oklch=function(){return dl(this._rgb)},hl.oklch=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(ca,[null].concat(n,["oklch"])))},la.format.oklch=cl,la.autodetect.push({p:3,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=ll(n,"oklch"),ul(n)==="array"&&n.length===3)return"oklch"}});var ua=R,fl=I.type;ua.prototype.alpha=function(n,i){return i===void 0&&(i=!1),n!==void 0&&fl(n)==="number"?i?(this._rgb[3]=n,this):new ua([this._rgb[0],this._rgb[1],this._rgb[2],n],"rgb"):this._rgb[3]};var pl=R;pl.prototype.clipped=function(){return this._rgb._clipped||!1};var De=R,vl=Rt;De.prototype.darken=function(n){n===void 0&&(n=1);var i=this,o=i.lab();return o[0]-=vl.Kn*n,new De(o,"lab").alpha(i.alpha(),!0)},De.prototype.brighten=function(n){return n===void 0&&(n=1),this.darken(-n)},De.prototype.darker=De.prototype.darken,De.prototype.brighter=De.prototype.brighten;var gl=R;gl.prototype.get=function(n){var i=n.split("."),o=i[0],l=i[1],d=this[o]();if(l){var f=o.indexOf(l)-(o.substr(0,2)==="ok"?2:0);if(f>-1)return d[f];throw new Error("unknown channel "+l+" in mode "+o)}else return d};var Je=R,ml=I.type,bl=Math.pow,_l=1e-7,yl=20;Je.prototype.luminance=function(n){if(n!==void 0&&ml(n)==="number"){if(n===0)return new Je([0,0,0,this._rgb[3]],"rgb");if(n===1)return new Je([255,255,255,this._rgb[3]],"rgb");var i=this.luminance(),o="rgb",l=yl,d=function(u,p){var v=u.interpolate(p,.5,o),b=v.luminance();return Math.abs(n-b)<_l||!l--?v:b>n?d(u,v):d(v,p)},f=(i>n?d(new Je([0,0,0]),this):d(this,new Je([255,255,255]))).rgb();return new Je(f.concat([this._rgb[3]]))}return wl.apply(void 0,this._rgb.slice(0,3))};var wl=function(n,i,o){return n=br(n),i=br(i),o=br(o),.2126*n+.7152*i+.0722*o},br=function(n){return n/=255,n<=.03928?n/12.92:bl((n+.055)/1.055,2.4)},ne={},ha=R,da=I.type,Mt=ne,fa=function(n,i,o){o===void 0&&(o=.5);for(var l=[],d=arguments.length-3;d-- >0;)l[d]=arguments[d+3];var f=l[0]||"lrgb";if(!Mt[f]&&!l.length&&(f=Object.keys(Mt)[0]),!Mt[f])throw new Error("interpolation mode "+f+" is not defined");return da(n)!=="object"&&(n=new ha(n)),da(i)!=="object"&&(i=new ha(i)),Mt[f](n,i,o).alpha(n.alpha()+o*(i.alpha()-n.alpha()))},pa=R,Il=fa;pa.prototype.mix=pa.prototype.interpolate=function(n,i){i===void 0&&(i=.5);for(var o=[],l=arguments.length-2;l-- >0;)o[l]=arguments[l+2];return Il.apply(void 0,[this,n,i].concat(o))};var va=R;va.prototype.premultiply=function(n){n===void 0&&(n=!1);var i=this._rgb,o=i[3];return n?(this._rgb=[i[0]*o,i[1]*o,i[2]*o,o],this):new va([i[0]*o,i[1]*o,i[2]*o,o],"rgb")};var _r=R,El=Rt;_r.prototype.saturate=function(n){n===void 0&&(n=1);var i=this,o=i.lch();return o[1]+=El.Kn*n,o[1]<0&&(o[1]=0),new _r(o,"lch").alpha(i.alpha(),!0)},_r.prototype.desaturate=function(n){return n===void 0&&(n=1),this.saturate(-n)};var ga=R,ma=I.type;ga.prototype.set=function(n,i,o){o===void 0&&(o=!1);var l=n.split("."),d=l[0],f=l[1],u=this[d]();if(f){var p=d.indexOf(f)-(d.substr(0,2)==="ok"?2:0);if(p>-1){if(ma(i)=="string")switch(i.charAt(0)){case"+":u[p]+=+i;break;case"-":u[p]+=+i;break;case"*":u[p]*=+i.substr(1);break;case"/":u[p]/=+i.substr(1);break;default:u[p]=+i}else if(ma(i)==="number")u[p]=i;else throw new Error("unsupported value for Color.set");var v=new ga(u,d);return o?(this._rgb=v._rgb,this):v}throw new Error("unknown channel "+f+" in mode "+d)}else return u};var kl=R,Tl=function(n,i,o){var l=n._rgb,d=i._rgb;return new kl(l[0]+o*(d[0]-l[0]),l[1]+o*(d[1]-l[1]),l[2]+o*(d[2]-l[2]),"rgb")};ne.rgb=Tl;var Sl=R,yr=Math.sqrt,Ye=Math.pow,Cl=function(n,i,o){var l=n._rgb,d=l[0],f=l[1],u=l[2],p=i._rgb,v=p[0],b=p[1],_=p[2];return new Sl(yr(Ye(d,2)*(1-o)+Ye(v,2)*o),yr(Ye(f,2)*(1-o)+Ye(b,2)*o),yr(Ye(u,2)*(1-o)+Ye(_,2)*o),"rgb")};ne.lrgb=Cl;var Al=R,Rl=function(n,i,o){var l=n.lab(),d=i.lab();return new Al(l[0]+o*(d[0]-l[0]),l[1]+o*(d[1]-l[1]),l[2]+o*(d[2]-l[2]),"lab")};ne.lab=Rl;var ba=R,Xe=function(n,i,o,l){var d,f,u,p;l==="hsl"?(u=n.hsl(),p=i.hsl()):l==="hsv"?(u=n.hsv(),p=i.hsv()):l==="hcg"?(u=n.hcg(),p=i.hcg()):l==="hsi"?(u=n.hsi(),p=i.hsi()):l==="lch"||l==="hcl"?(l="hcl",u=n.hcl(),p=i.hcl()):l==="oklch"&&(u=n.oklch().reverse(),p=i.oklch().reverse());var v,b,_,E,y,S;(l.substr(0,1)==="h"||l==="oklch")&&(d=u,v=d[0],_=d[1],y=d[2],f=p,b=f[0],E=f[1],S=f[2]);var T,O,M,U;return!isNaN(v)&&!isNaN(b)?(b>v&&b-v>180?U=b-(v+360):b<v&&v-b>180?U=b+360-v:U=b-v,O=v+o*U):isNaN(v)?isNaN(b)?O=Number.NaN:(O=b,(y==1||y==0)&&l!="hsv"&&(T=E)):(O=v,(S==1||S==0)&&l!="hsv"&&(T=_)),T===void 0&&(T=_+o*(E-_)),M=y+o*(S-y),l==="oklch"?new ba([M,T,O],l):new ba([O,T,M],l)},Pl=Xe,_a=function(n,i,o){return Pl(n,i,o,"lch")};ne.lch=_a,ne.hcl=_a;var Ol=R,Nl=function(n,i,o){var l=n.num(),d=i.num();return new Ol(l+o*(d-l),"num")};ne.num=Nl;var Dl=Xe,Ml=function(n,i,o){return Dl(n,i,o,"hcg")};ne.hcg=Ml;var $l=Xe,Ll=function(n,i,o){return $l(n,i,o,"hsi")};ne.hsi=Ll;var Ul=Xe,xl=function(n,i,o){return Ul(n,i,o,"hsl")};ne.hsl=xl;var Fl=Xe,Bl=function(n,i,o){return Fl(n,i,o,"hsv")};ne.hsv=Bl;var Hl=R,Vl=function(n,i,o){var l=n.oklab(),d=i.oklab();return new Hl(l[0]+o*(d[0]-l[0]),l[1]+o*(d[1]-l[1]),l[2]+o*(d[2]-l[2]),"oklab")};ne.oklab=Vl;var zl=Xe,jl=function(n,i,o){return zl(n,i,o,"oklch")};ne.oklch=jl;var wr=R,Wl=I.clip_rgb,Ir=Math.pow,Er=Math.sqrt,kr=Math.PI,ya=Math.cos,wa=Math.sin,Gl=Math.atan2,ql=function(n,i,o){i===void 0&&(i="lrgb"),o===void 0&&(o=null);var l=n.length;o||(o=Array.from(new Array(l)).map(function(){return 1}));var d=l/o.reduce(function(O,M){return O+M});if(o.forEach(function(O,M){o[M]*=d}),n=n.map(function(O){return new wr(O)}),i==="lrgb")return Kl(n,o);for(var f=n.shift(),u=f.get(i),p=[],v=0,b=0,_=0;_<u.length;_++)if(u[_]=(u[_]||0)*o[0],p.push(isNaN(u[_])?0:o[0]),i.charAt(_)==="h"&&!isNaN(u[_])){var E=u[_]/180*kr;v+=ya(E)*o[0],b+=wa(E)*o[0]}var y=f.alpha()*o[0];n.forEach(function(O,M){var U=O.get(i);y+=O.alpha()*o[M+1];for(var B=0;B<u.length;B++)if(!isNaN(U[B]))if(p[B]+=o[M+1],i.charAt(B)==="h"){var Z=U[B]/180*kr;v+=ya(Z)*o[M+1],b+=wa(Z)*o[M+1]}else u[B]+=U[B]*o[M+1]});for(var S=0;S<u.length;S++)if(i.charAt(S)==="h"){for(var T=Gl(b/p[S],v/p[S])/kr*180;T<0;)T+=360;for(;T>=360;)T-=360;u[S]=T}else u[S]=u[S]/p[S];return y/=l,new wr(u,i).alpha(y>.99999?1:y,!0)},Kl=function(n,i){for(var o=n.length,l=[0,0,0,0],d=0;d<n.length;d++){var f=n[d],u=i[d]/o,p=f._rgb;l[0]+=Ir(p[0],2)*u,l[1]+=Ir(p[1],2)*u,l[2]+=Ir(p[2],2)*u,l[3]+=p[3]*u}return l[0]=Er(l[0]),l[1]=Er(l[1]),l[2]=Er(l[2]),l[3]>.9999999&&(l[3]=1),new wr(Wl(l))},ae=K,Qe=I.type,Jl=Math.pow,Tr=function(n){var i="rgb",o=ae("#ccc"),l=0,d=[0,1],f=[],u=[0,0],p=!1,v=[],b=!1,_=0,E=1,y=!1,S={},T=!0,O=1,M=function(w){if(w=w||["#fff","#000"],w&&Qe(w)==="string"&&ae.brewer&&ae.brewer[w.toLowerCase()]&&(w=ae.brewer[w.toLowerCase()]),Qe(w)==="array"){w.length===1&&(w=[w[0],w[0]]),w=w.slice(0);for(var C=0;C<w.length;C++)w[C]=ae(w[C]);f.length=0;for(var D=0;D<w.length;D++)f.push(D/(w.length-1))}return re(),v=w},U=function(w){if(p!=null){for(var C=p.length-1,D=0;D<C&&w>=p[D];)D++;return D-1}return 0},B=function(w){return w},Z=function(w){return w},Q=function(w,C){var D,N;if(C==null&&(C=!1),isNaN(w)||w===null)return o;if(C)N=w;else if(p&&p.length>2){var ee=U(w);N=ee/(p.length-2)}else E!==_?N=(w-_)/(E-_):N=1;N=Z(N),C||(N=B(N)),O!==1&&(N=Jl(N,O)),N=u[0]+N*(1-u[0]-u[1]),N=Math.min(1,Math.max(0,N));var W=Math.floor(N*1e4);if(T&&S[W])D=S[W];else{if(Qe(v)==="array")for(var x=0;x<f.length;x++){var H=f[x];if(N<=H){D=v[x];break}if(N>=H&&x===f.length-1){D=v[x];break}if(N>H&&N<f[x+1]){N=(N-H)/(f[x+1]-H),D=ae.interpolate(v[x],v[x+1],N,i);break}}else Qe(v)==="function"&&(D=v(N));T&&(S[W]=D)}return D},re=function(){return S={}};M(n);var L=function(w){var C=ae(Q(w));return b&&C[b]?C[b]():C};return L.classes=function(w){if(w!=null){if(Qe(w)==="array")p=w,d=[w[0],w[w.length-1]];else{var C=ae.analyze(d);w===0?p=[C.min,C.max]:p=ae.limits(C,"e",w)}return L}return p},L.domain=function(w){if(!arguments.length)return d;_=w[0],E=w[w.length-1],f=[];var C=v.length;if(w.length===C&&_!==E)for(var D=0,N=Array.from(w);D<N.length;D+=1){var ee=N[D];f.push((ee-_)/(E-_))}else{for(var W=0;W<C;W++)f.push(W/(C-1));if(w.length>2){var x=w.map(function(V,z){return z/(w.length-1)}),H=w.map(function(V){return(V-_)/(E-_)});H.every(function(V,z){return x[z]===V})||(Z=function(V){if(V<=0||V>=1)return V;for(var z=0;V>=H[z+1];)z++;var se=(V-H[z])/(H[z+1]-H[z]),ye=x[z]+se*(x[z+1]-x[z]);return ye})}}return d=[_,E],L},L.mode=function(w){return arguments.length?(i=w,re(),L):i},L.range=function(w,C){return M(w),L},L.out=function(w){return b=w,L},L.spread=function(w){return arguments.length?(l=w,L):l},L.correctLightness=function(w){return w==null&&(w=!0),y=w,re(),y?B=function(C){for(var D=Q(0,!0).lab()[0],N=Q(1,!0).lab()[0],ee=D>N,W=Q(C,!0).lab()[0],x=D+(N-D)*C,H=W-x,V=0,z=1,se=20;Math.abs(H)>.01&&se-- >0;)(function(){return ee&&(H*=-1),H<0?(V=C,C+=(z-C)*.5):(z=C,C+=(V-C)*.5),W=Q(C,!0).lab()[0],H=W-x})();return C}:B=function(C){return C},L},L.padding=function(w){return w!=null?(Qe(w)==="number"&&(w=[w,w]),u=w,L):u},L.colors=function(w,C){arguments.length<2&&(C="hex");var D=[];if(arguments.length===0)D=v.slice(0);else if(w===1)D=[L(.5)];else if(w>1){var N=d[0],ee=d[1]-N;D=Yl(0,w,!1).map(function(z){return L(N+z/(w-1)*ee)})}else{n=[];var W=[];if(p&&p.length>2)for(var x=1,H=p.length,V=1<=H;V?x<H:x>H;V?x++:x--)W.push((p[x-1]+p[x])*.5);else W=d;D=W.map(function(z){return L(z)})}return ae[C]&&(D=D.map(function(z){return z[C]()})),D},L.cache=function(w){return w!=null?(T=w,L):T},L.gamma=function(w){return w!=null?(O=w,L):O},L.nodata=function(w){return w!=null?(o=ae(w),L):o},L};function Yl(n,i,o){for(var l=[],d=n<i,f=o?d?i+1:i-1:i,u=n;d?u<f:u>f;d?u++:u--)l.push(u);return l}var ht=R,Xl=Tr,Ql=function(n){for(var i=[1,1],o=1;o<n;o++){for(var l=[1],d=1;d<=i.length;d++)l[d]=(i[d]||0)+i[d-1];i=l}return i},Zl=function(n){var i,o,l,d,f,u,p;if(n=n.map(function(y){return new ht(y)}),n.length===2)i=n.map(function(y){return y.lab()}),f=i[0],u=i[1],d=function(y){var S=[0,1,2].map(function(T){return f[T]+y*(u[T]-f[T])});return new ht(S,"lab")};else if(n.length===3)o=n.map(function(y){return y.lab()}),f=o[0],u=o[1],p=o[2],d=function(y){var S=[0,1,2].map(function(T){return(1-y)*(1-y)*f[T]+2*(1-y)*y*u[T]+y*y*p[T]});return new ht(S,"lab")};else if(n.length===4){var v;l=n.map(function(y){return y.lab()}),f=l[0],u=l[1],p=l[2],v=l[3],d=function(y){var S=[0,1,2].map(function(T){return(1-y)*(1-y)*(1-y)*f[T]+3*(1-y)*(1-y)*y*u[T]+3*(1-y)*y*y*p[T]+y*y*y*v[T]});return new ht(S,"lab")}}else if(n.length>=5){var b,_,E;b=n.map(function(y){return y.lab()}),E=n.length-1,_=Ql(E),d=function(y){var S=1-y,T=[0,1,2].map(function(O){return b.reduce(function(M,U,B){return M+_[B]*Math.pow(S,E-B)*Math.pow(y,B)*U[O]},0)});return new ht(T,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return d},eu=function(n){var i=Zl(n);return i.scale=function(){return Xl(i)},i},Sr=K,ie=function(n,i,o){if(!ie[o])throw new Error("unknown blend mode "+o);return ie[o](n,i)},be=function(n){return function(i,o){var l=Sr(o).rgb(),d=Sr(i).rgb();return Sr.rgb(n(l,d))}},_e=function(n){return function(i,o){var l=[];return l[0]=n(i[0],o[0]),l[1]=n(i[1],o[1]),l[2]=n(i[2],o[2]),l}},tu=function(n){return n},ru=function(n,i){return n*i/255},nu=function(n,i){return n>i?i:n},au=function(n,i){return n>i?n:i},iu=function(n,i){return 255*(1-(1-n/255)*(1-i/255))},su=function(n,i){return i<128?2*n*i/255:255*(1-2*(1-n/255)*(1-i/255))},ou=function(n,i){return 255*(1-(1-i/255)/(n/255))},cu=function(n,i){return n===255?255:(n=255*(i/255)/(1-n/255),n>255?255:n)};ie.normal=be(_e(tu)),ie.multiply=be(_e(ru)),ie.screen=be(_e(iu)),ie.overlay=be(_e(su)),ie.darken=be(_e(nu)),ie.lighten=be(_e(au)),ie.dodge=be(_e(cu)),ie.burn=be(_e(ou));for(var lu=ie,Cr=I.type,uu=I.clip_rgb,hu=I.TWOPI,du=Math.pow,fu=Math.sin,pu=Math.cos,Ia=K,vu=function(n,i,o,l,d){n===void 0&&(n=300),i===void 0&&(i=-1.5),o===void 0&&(o=1),l===void 0&&(l=1),d===void 0&&(d=[0,1]);var f=0,u;Cr(d)==="array"?u=d[1]-d[0]:(u=0,d=[d,d]);var p=function(v){var b=hu*((n+120)/360+i*v),_=du(d[0]+u*v,l),E=f!==0?o[0]+v*f:o,y=E*_*(1-_)/2,S=pu(b),T=fu(b),O=_+y*(-.14861*S+1.78277*T),M=_+y*(-.29227*S-.90649*T),U=_+y*(1.97294*S);return Ia(uu([O*255,M*255,U*255,1]))};return p.start=function(v){return v==null?n:(n=v,p)},p.rotations=function(v){return v==null?i:(i=v,p)},p.gamma=function(v){return v==null?l:(l=v,p)},p.hue=function(v){return v==null?o:(o=v,Cr(o)==="array"?(f=o[1]-o[0],f===0&&(o=o[1])):f=0,p)},p.lightness=function(v){return v==null?d:(Cr(v)==="array"?(d=v,u=v[1]-v[0]):(d=[v,v],u=0),p)},p.scale=function(){return Ia.scale(p)},p.hue(o),p},gu=R,mu="0123456789abcdef",bu=Math.floor,_u=Math.random,yu=function(){for(var n="#",i=0;i<6;i++)n+=mu.charAt(bu(_u()*16));return new gu(n,"hex")},Ar=k,Ea=Math.log,wu=Math.pow,Iu=Math.floor,Eu=Math.abs,ka=function(n,i){i===void 0&&(i=null);var o={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return Ar(n)==="object"&&(n=Object.values(n)),n.forEach(function(l){i&&Ar(l)==="object"&&(l=l[i]),l!=null&&!isNaN(l)&&(o.values.push(l),o.sum+=l,l<o.min&&(o.min=l),l>o.max&&(o.max=l),o.count+=1)}),o.domain=[o.min,o.max],o.limits=function(l,d){return Ta(o,l,d)},o},Ta=function(n,i,o){i===void 0&&(i="equal"),o===void 0&&(o=7),Ar(n)=="array"&&(n=ka(n));var l=n.min,d=n.max,f=n.values.sort(function(Pr,Or){return Pr-Or});if(o===1)return[l,d];var u=[];if(i.substr(0,1)==="c"&&(u.push(l),u.push(d)),i.substr(0,1)==="e"){u.push(l);for(var p=1;p<o;p++)u.push(l+p/o*(d-l));u.push(d)}else if(i.substr(0,1)==="l"){if(l<=0)throw new Error("Logarithmic scales are only possible for values > 0");var v=Math.LOG10E*Ea(l),b=Math.LOG10E*Ea(d);u.push(l);for(var _=1;_<o;_++)u.push(wu(10,v+_/o*(b-v)));u.push(d)}else if(i.substr(0,1)==="q"){u.push(l);for(var E=1;E<o;E++){var y=(f.length-1)*E/o,S=Iu(y);if(S===y)u.push(f[S]);else{var T=y-S;u.push(f[S]*(1-T)+f[S+1]*T)}}u.push(d)}else if(i.substr(0,1)==="k"){var O,M=f.length,U=new Array(M),B=new Array(o),Z=!0,Q=0,re=null;re=[],re.push(l);for(var L=1;L<o;L++)re.push(l+L/o*(d-l));for(re.push(d);Z;){for(var w=0;w<o;w++)B[w]=0;for(var C=0;C<M;C++)for(var D=f[C],N=Number.MAX_VALUE,ee=void 0,W=0;W<o;W++){var x=Eu(re[W]-D);x<N&&(N=x,ee=W),B[ee]++,U[C]=ee}for(var H=new Array(o),V=0;V<o;V++)H[V]=null;for(var z=0;z<M;z++)O=U[z],H[O]===null?H[O]=f[z]:H[O]+=f[z];for(var se=0;se<o;se++)H[se]*=1/B[se];Z=!1;for(var ye=0;ye<o;ye++)if(H[ye]!==re[ye]){Z=!0;break}re=H,Q++,Q>200&&(Z=!1)}for(var we={},Ze=0;Ze<o;Ze++)we[Ze]=[];for(var et=0;et<M;et++)O=U[et],we[O].push(f[et]);for(var fe=[],Me=0;Me<o;Me++)fe.push(we[Me][0]),fe.push(we[Me][we[Me].length-1]);fe=fe.sort(function(Pr,Or){return Pr-Or}),u.push(fe[0]);for(var dt=1;dt<fe.length;dt+=2){var $e=fe[dt];!isNaN($e)&&u.indexOf($e)===-1&&u.push($e)}}return u},Sa={analyze:ka,limits:Ta},Ca=R,ku=function(n,i){n=new Ca(n),i=new Ca(i);var o=n.luminance(),l=i.luminance();return o>l?(o+.05)/(l+.05):(l+.05)/(o+.05)},Aa=R,de=Math.sqrt,J=Math.pow,Tu=Math.min,Su=Math.max,Ra=Math.atan2,Pa=Math.abs,$t=Math.cos,Oa=Math.sin,Cu=Math.exp,Na=Math.PI,Au=function(n,i,o,l,d){o===void 0&&(o=1),l===void 0&&(l=1),d===void 0&&(d=1);var f=function($e){return 360*$e/(2*Na)},u=function($e){return 2*Na*$e/360};n=new Aa(n),i=new Aa(i);var p=Array.from(n.lab()),v=p[0],b=p[1],_=p[2],E=Array.from(i.lab()),y=E[0],S=E[1],T=E[2],O=(v+y)/2,M=de(J(b,2)+J(_,2)),U=de(J(S,2)+J(T,2)),B=(M+U)/2,Z=.5*(1-de(J(B,7)/(J(B,7)+J(25,7)))),Q=b*(1+Z),re=S*(1+Z),L=de(J(Q,2)+J(_,2)),w=de(J(re,2)+J(T,2)),C=(L+w)/2,D=f(Ra(_,Q)),N=f(Ra(T,re)),ee=D>=0?D:D+360,W=N>=0?N:N+360,x=Pa(ee-W)>180?(ee+W+360)/2:(ee+W)/2,H=1-.17*$t(u(x-30))+.24*$t(u(2*x))+.32*$t(u(3*x+6))-.2*$t(u(4*x-63)),V=W-ee;V=Pa(V)<=180?V:W<=ee?V+360:V-360,V=2*de(L*w)*Oa(u(V)/2);var z=y-v,se=w-L,ye=1+.015*J(O-50,2)/de(20+J(O-50,2)),we=1+.045*C,Ze=1+.015*C*H,et=30*Cu(-J((x-275)/25,2)),fe=2*de(J(C,7)/(J(C,7)+J(25,7))),Me=-fe*Oa(2*u(et)),dt=de(J(z/(o*ye),2)+J(se/(l*we),2)+J(V/(d*Ze),2)+Me*(se/(l*we))*(V/(d*Ze)));return Su(0,Tu(100,dt))},Da=R,Ru=function(n,i,o){o===void 0&&(o="lab"),n=new Da(n),i=new Da(i);var l=n.get(o),d=i.get(o),f=0;for(var u in l){var p=(l[u]||0)-(d[u]||0);f+=p*p}return Math.sqrt(f)},Pu=R,Ou=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];try{return new(Function.prototype.bind.apply(Pu,[null].concat(n))),!0}catch{return!1}},Ma=K,$a=Tr,Nu={cool:function(){return $a([Ma.hsl(180,1,.9),Ma.hsl(250,.7,.4)])},hot:function(){return $a(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Lt={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Rr=0,La=Object.keys(Lt);Rr<La.length;Rr+=1){var Ua=La[Rr];Lt[Ua.toLowerCase()]=Lt[Ua]}var Du=Lt,X=K;X.average=ql,X.bezier=eu,X.blend=lu,X.cubehelix=vu,X.mix=X.interpolate=fa,X.random=yu,X.scale=Tr,X.analyze=Sa.analyze,X.contrast=ku,X.deltaE=Au,X.distance=Ru,X.limits=Sa.limits,X.valid=Ou,X.scales=Nu,X.colors=Jn,X.brewer=Du;var Mu=X;return Mu})})(us);var Np=us.exports;const Dp=Op(Np);class Mp{static loadColor(e,t){const a=document.querySelector(":root"),s=Dp(t);if(a){const c=s.hex(),h=s.rgb(),g=s.hsl();a.style.setProperty(`--color-${e}`,c),a.style.setProperty(`--color-${e}-rgb`,h.join(",")),a.style.setProperty(`--color-${e}-hsl`,`${g[0]}, ${g[1]*100}%`)}}static load(e){["primary","secondary","text"].forEach(a=>this.loadColor(a,e.theme[a])),Le.loadConfig(e)}}function $p(r){let e,t,a,s,c=r[0].config?.name+"",h,g,m;return{c(){e=Ce("div"),t=Ce("p"),a=Nr("Google Authentication for "),s=Ce("b"),h=Nr(c),g=Nr("..."),this.h()},l(k){e=Ae(k,"DIV",{class:!0});var A=Be(e);t=Ae(A,"P",{});var F=Be(t);a=Dr(F,"Google Authentication for "),s=Ae(F,"B",{class:!0});var $=Be(s);h=Dr($,c),$.forEach(oe),g=Dr(F,"..."),F.forEach(oe),A.forEach(oe),this.h()},h(){Fe(s,"class","svelte-1erxzqn"),Fe(e,"class","content__message svelte-1erxzqn")},m(k,A){Xt(k,e,A),Ee(e,t),Ee(t,a),Ee(t,s),Ee(s,h),Ee(t,g)},p(k,A){A&1&&c!==(c=k[0].config?.name+"")&&Bu(h,c)},i(k){k&&(m||Hu(()=>{m=ju(e,Ku,{y:5,duration:1e3}),m.start()}))},o:ft,d(k){k&&oe(e)}}}function Lp(r){let e,t,a;return t=new Yu({}),{c(){e=Ce("div"),gi(t.$$.fragment),this.h()},l(s){e=Ae(s,"DIV",{class:!0});var c=Be(e);mi(t.$$.fragment,c),c.forEach(oe),this.h()},h(){Fe(e,"class","content__loader")},m(s,c){Xt(s,e,c),bi(t,e,null),a=!0},p:ft,i(s){a||(Ft(t.$$.fragment,s),a=!0)},o(s){xt(t.$$.fragment,s),a=!1},d(s){s&&oe(e),_i(t)}}}function Up(r){let e,t,a,s,c,h,g,m;a=new Gu({props:{status:qu.Pending}});const k=[Lp,$p],A=[];function F($,G){return $[0].loading?0:1}return h=F(r),g=A[h]=k[h](r),{c(){e=Ce("div"),t=Ce("div"),gi(a.$$.fragment),s=Lu(),c=Ce("div"),g.c(),this.h()},l($){e=Ae($,"DIV",{class:!0});var G=Be(e);t=Ae(G,"DIV",{class:!0});var Y=Be(t);mi(a.$$.fragment,Y),Y.forEach(oe),s=Uu(G),c=Ae(G,"DIV",{class:!0});var I=Be(c);g.l(I),I.forEach(oe),G.forEach(oe),this.h()},h(){Fe(t,"class","content__head"),Fe(c,"class","content__body"),Fe(e,"class","content svelte-1erxzqn")},m($,G){Xt($,e,G),Ee(e,t),bi(a,t,null),Ee(e,s),Ee(e,c),A[h].m(c,null),m=!0},p($,[G]){let Y=h;h=F($),h===Y?A[h].p($,G):(zu(),xt(A[Y],1,1,()=>{A[Y]=null}),Vu(),g=A[h],g?g.p($,G):(g=A[h]=k[h]($),g.c()),Ft(g,1),g.m(c,null))},i($){m||(Ft(a.$$.fragment,$),Ft(g),m=!0)},o($){xt(a.$$.fragment,$),xt(g),m=!1},d($){$&&oe(e),_i(a),A[h].d()}}}function xp(r,e,t){let a;xu(r,Le,h=>t(0,a=h));const s=h=>{Le.stopLoader(),Le.raiseError(h),xa.navigate(Fa.Failure)},c=h=>{Le.clearError(),Le.registerToken(h),xa.navigate(Fa.Success)};return Fu(()=>{Mr.init(window.opener)?Mr.send($r.Loaded).on($r.Config,async h=>{try{if(h){Mp.load(h),Le.stopLoader();const g=await Rp.login(h.firebase);c(g)}}catch(g){const m=g;s(m.message),Mr.send($r.AuthFailed,{error:m.toObject()})}}):s("Fireguard has to be opened by an external page.")}),[a]}class zp extends pi{constructor(e){super(),vi(this,e,xp,Up,fi,{})}}export{zp as component};
