import{s as on,n as Ne,c as Bu,o as Hu,j as Vu}from"../chunks/scheduler.JgTxvg8Y.js";import{S as cn,i as ln,e as oe,s as Gr,t as nt,c as ce,a as Ie,q as qr,f as Kr,b as at,d as ae,l as se,g as Tt,h as te,o as Jr,p as Yr,r as Xr,n as mt,x as zu,m as bt,v as Qr,z as ju,j as Wu,C as Gu}from"../chunks/index.natcDwZ0.js";import{b as zt,g as jt}from"../chunks/entry.5xFTDOZs.js";import{P as Ti,j as qu,a as Be,H as Ku,A as Ju,I as Ur,m as xr,f as Yu}from"../chunks/head.9VgDrf0p.js";const Xa="0.1.0";function Xu(r){let e,t,a="Make sure you're not blocking popups on this page.",s,c,h,g,m="Fireguard",E,A;return{c(){e=oe("div"),t=oe("p"),t.textContent=a,s=Gr(),c=oe("p"),h=nt("Powered by "),g=oe("a"),g.textContent=m,E=nt(`
		v`),A=nt(Xa),this.h()},l(D){e=ce(D,"DIV",{class:!0});var L=Ie(e);t=ce(L,"P",{class:!0,"data-svelte-h":!0}),qr(t)!=="svelte-1c9v7w"&&(t.textContent=a),s=Kr(L),c=ce(L,"P",{class:!0});var J=Ie(c);h=at(J,"Powered by "),g=ce(J,"A",{target:!0,href:!0,class:!0,"data-svelte-h":!0}),qr(g)!=="svelte-11txfr0"&&(g.textContent=m),E=at(J,`
		v`),A=at(J,Xa),J.forEach(ae),L.forEach(ae),this.h()},h(){se(t,"class","foot__note svelte-ie8q7y"),se(g,"target","_blank"),se(g,"href","https://github.com/EOussama/fireguard"),se(g,"class","svelte-ie8q7y"),se(c,"class","foot__note svelte-ie8q7y"),se(e,"class","foot svelte-ie8q7y")},m(D,L){Tt(D,e,L),te(e,t),te(e,s),te(e,c),te(c,h),te(c,g),te(c,E),te(c,A)},p:Ne,i:Ne,o:Ne,d(D){D&&ae(e)}}}class Qu extends cn{constructor(e){super(),ln(this,e,null,Xu,on,{})}}function Zu(r){let e,t='<div class="dots svelte-19glvgs"></div>';return{c(){e=oe("div"),e.innerHTML=t,this.h()},l(a){e=ce(a,"DIV",{class:!0,"data-svelte-h":!0}),qr(e)!=="svelte-fszn9n"&&(e.innerHTML=t),this.h()},h(){se(e,"class","loader svelte-19glvgs")},m(a,s){Tt(a,e,s)},p:Ne,i:Ne,o:Ne,d(a){a&&ae(e)}}}class eh extends cn{constructor(e){super(),ln(this,e,null,Zu,on,{})}}var _t=(r=>(r.Index="/",r.Success="/success",r.Failure="/failure",r))(_t||{}),Qa={};/**
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
 */const Si=function(r){const e=[];let t=0;for(let a=0;a<r.length;a++){let s=r.charCodeAt(a);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++a)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},th=function(r){const e=[];let t=0,a=0;for(;t<r.length;){const s=r[t++];if(s<128)e[a++]=String.fromCharCode(s);else if(s>191&&s<224){const c=r[t++];e[a++]=String.fromCharCode((s&31)<<6|c&63)}else if(s>239&&s<365){const c=r[t++],h=r[t++],g=r[t++],m=((s&7)<<18|(c&63)<<12|(h&63)<<6|g&63)-65536;e[a++]=String.fromCharCode(55296+(m>>10)),e[a++]=String.fromCharCode(56320+(m&1023))}else{const c=r[t++],h=r[t++];e[a++]=String.fromCharCode((s&15)<<12|(c&63)<<6|h&63)}}return e.join("")},Ci={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let s=0;s<r.length;s+=3){const c=r[s],h=s+1<r.length,g=h?r[s+1]:0,m=s+2<r.length,E=m?r[s+2]:0,A=c>>2,D=(c&3)<<4|g>>4;let L=(g&15)<<2|E>>6,J=E&63;m||(J=64,h||(L=64)),a.push(t[A],t[D],t[L],t[J])}return a.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Si(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):th(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let s=0;s<r.length;){const c=t[r.charAt(s++)],g=s<r.length?t[r.charAt(s)]:0;++s;const E=s<r.length?t[r.charAt(s)]:64;++s;const D=s<r.length?t[r.charAt(s)]:64;if(++s,c==null||g==null||E==null||D==null)throw new rh;const L=c<<2|g>>4;if(a.push(L),E!==64){const J=g<<4&240|E>>2;if(a.push(J),D!==64){const B=E<<6&192|D;a.push(B)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class rh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nh=function(r){const e=Si(r);return Ci.encodeByteArray(e,!0)},Ai=function(r){return nh(r).replace(/\./g,"")},Ri=function(r){try{return Ci.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ah(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ih=()=>ah().__FIREBASE_DEFAULTS__,sh=()=>{if(typeof process>"u"||typeof Qa>"u")return;const r=Qa.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},oh=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Ri(r[1]);return e&&JSON.parse(e)},un=()=>{try{return ih()||sh()||oh()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ch=r=>{var e,t;return(t=(e=un())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Pi=()=>{var r;return(r=un())===null||r===void 0?void 0:r.config},Oi=r=>{var e;return(e=un())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class lh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,a))}}}/**
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
 */function re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function hh(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function dh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fh(){const r=re();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function ph(){try{return typeof indexedDB=="object"}catch{return!1}}function vh(){return new Promise((r,e)=>{try{let t=!0;const a="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(a);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(a),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var c;e(((c=s.error)===null||c===void 0?void 0:c.message)||"")}}catch(t){e(t)}})}/**
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
 */const gh="FirebaseError";class $e extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name=gh,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,St.prototype.create)}}class St{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},s=`${this.service}/${e}`,c=this.errors[e],h=c?mh(c,a):"Error",g=`${this.serviceName}: ${h} (${s}).`;return new $e(s,g,a)}}function mh(r,e){return r.replace(bh,(t,a)=>{const s=e[a];return s!=null?String(s):`<${a}?>`})}const bh=/\{\$([^}]+)}/g;function _h(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Yt(r,e){if(r===e)return!0;const t=Object.keys(r),a=Object.keys(e);for(const s of t){if(!a.includes(s))return!1;const c=r[s],h=e[s];if(Za(c)&&Za(h)){if(!Yt(c,h))return!1}else if(c!==h)return!1}for(const s of a)if(!t.includes(s))return!1;return!0}function Za(r){return r!==null&&typeof r=="object"}/**
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
 */function Ct(r){const e=[];for(const[t,a]of Object.entries(r))Array.isArray(a)?a.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function yh(r,e){const t=new wh(r,e);return t.subscribe.bind(t)}class wh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let s;if(e===void 0&&t===void 0&&a===void 0)throw new Error("Missing Observer.");Ih(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:a},s.next===void 0&&(s.next=Fr),s.error===void 0&&(s.error=Fr),s.complete===void 0&&(s.complete=Fr);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ih(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Fr(){}/**
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
 */function ut(r){return r&&r._delegate?r._delegate:r}class ct{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const He="[DEFAULT]";/**
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
 */class Eh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const a=new lh;if(this.instancesDeferred.set(t,a),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&a.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const a=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(c){if(s)return null;throw c}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Th(e))try{this.getOrInitializeService({instanceIdentifier:He})}catch{}for(const[t,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:s});a.resolve(c)}catch{}}}}clearInstance(e=He){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=He){return this.instances.has(e)}getOptions(e=He){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[c,h]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);a===g&&h.resolve(s)}return s}onInit(e,t){var a;const s=this.normalizeInstanceIdentifier(t),c=(a=this.onInitCallbacks.get(s))!==null&&a!==void 0?a:new Set;c.add(e),this.onInitCallbacks.set(s,c);const h=this.instances.get(s);return h&&e(h,s),()=>{c.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const s of a)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:kh(e),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=He){return this.component?this.component.multipleInstances?e:He:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kh(r){return r===He?void 0:r}function Th(r){return r.instantiationMode==="EAGER"}/**
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
 */class Sh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Eh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(G||(G={}));const Ch={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Ah=G.INFO,Rh={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Ph=(r,e,...t)=>{if(e<r.logLevel)return;const a=new Date().toISOString(),s=Rh[e];if(s)console[s](`[${a}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ni{constructor(e){this.name=e,this._logLevel=Ah,this._logHandler=Ph,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ch[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Oh=(r,e)=>e.some(t=>r instanceof t);let ei,ti;function Nh(){return ei||(ei=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dh(){return ti||(ti=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Di=new WeakMap,Zr=new WeakMap,Mi=new WeakMap,Br=new WeakMap,hn=new WeakMap;function Mh(r){const e=new Promise((t,a)=>{const s=()=>{r.removeEventListener("success",c),r.removeEventListener("error",h)},c=()=>{t(De(r.result)),s()},h=()=>{a(r.error),s()};r.addEventListener("success",c),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Di.set(t,r)}).catch(()=>{}),hn.set(e,r),e}function $h(r){if(Zr.has(r))return;const e=new Promise((t,a)=>{const s=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",h),r.removeEventListener("abort",h)},c=()=>{t(),s()},h=()=>{a(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",c),r.addEventListener("error",h),r.addEventListener("abort",h)});Zr.set(r,e)}let en={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Zr.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Mi.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return De(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Lh(r){en=r(en)}function Uh(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=r.call(Hr(this),e,...t);return Mi.set(a,e.sort?e.sort():[e]),De(a)}:Dh().includes(r)?function(...e){return r.apply(Hr(this),e),De(Di.get(this))}:function(...e){return De(r.apply(Hr(this),e))}}function xh(r){return typeof r=="function"?Uh(r):(r instanceof IDBTransaction&&$h(r),Oh(r,Nh())?new Proxy(r,en):r)}function De(r){if(r instanceof IDBRequest)return Mh(r);if(Br.has(r))return Br.get(r);const e=xh(r);return e!==r&&(Br.set(r,e),hn.set(e,r)),e}const Hr=r=>hn.get(r);function Fh(r,e,{blocked:t,upgrade:a,blocking:s,terminated:c}={}){const h=indexedDB.open(r,e),g=De(h);return a&&h.addEventListener("upgradeneeded",m=>{a(De(h.result),m.oldVersion,m.newVersion,De(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),g.then(m=>{c&&m.addEventListener("close",()=>c()),s&&m.addEventListener("versionchange",E=>s(E.oldVersion,E.newVersion,E))}).catch(()=>{}),g}const Bh=["get","getKey","getAll","getAllKeys","count"],Hh=["put","add","delete","clear"],Vr=new Map;function ri(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Vr.get(e))return Vr.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,s=Hh.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(s||Bh.includes(t)))return;const c=async function(h,...g){const m=this.transaction(h,s?"readwrite":"readonly");let E=m.store;return a&&(E=E.index(g.shift())),(await Promise.all([E[t](...g),s&&m.done]))[0]};return Vr.set(e,c),c}Lh(r=>({...r,get:(e,t,a)=>ri(e,t)||r.get(e,t,a),has:(e,t)=>!!ri(e,t)||r.has(e,t)}));/**
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
 */class Vh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zh(t)){const a=t.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(t=>t).join(" ")}}function zh(r){const e=r.getComponent();return e?.type==="VERSION"}const tn="@firebase/app",ni="0.9.25";/**
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
 */const je=new Ni("@firebase/app"),jh="@firebase/app-compat",Wh="@firebase/analytics-compat",Gh="@firebase/analytics",qh="@firebase/app-check-compat",Kh="@firebase/app-check",Jh="@firebase/auth",Yh="@firebase/auth-compat",Xh="@firebase/database",Qh="@firebase/database-compat",Zh="@firebase/functions",ed="@firebase/functions-compat",td="@firebase/installations",rd="@firebase/installations-compat",nd="@firebase/messaging",ad="@firebase/messaging-compat",id="@firebase/performance",sd="@firebase/performance-compat",od="@firebase/remote-config",cd="@firebase/remote-config-compat",ld="@firebase/storage",ud="@firebase/storage-compat",hd="@firebase/firestore",dd="@firebase/firestore-compat",fd="firebase",pd="10.7.1";/**
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
 */const rn="[DEFAULT]",vd={[tn]:"fire-core",[jh]:"fire-core-compat",[Gh]:"fire-analytics",[Wh]:"fire-analytics-compat",[Kh]:"fire-app-check",[qh]:"fire-app-check-compat",[Jh]:"fire-auth",[Yh]:"fire-auth-compat",[Xh]:"fire-rtdb",[Qh]:"fire-rtdb-compat",[Zh]:"fire-fn",[ed]:"fire-fn-compat",[td]:"fire-iid",[rd]:"fire-iid-compat",[nd]:"fire-fcm",[ad]:"fire-fcm-compat",[id]:"fire-perf",[sd]:"fire-perf-compat",[od]:"fire-rc",[cd]:"fire-rc-compat",[ld]:"fire-gcs",[ud]:"fire-gcs-compat",[hd]:"fire-fst",[dd]:"fire-fst-compat","fire-js":"fire-js",[fd]:"fire-js-all"};/**
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
 */const Xt=new Map,nn=new Map;function gd(r,e){try{r.container.addComponent(e)}catch(t){je.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function wt(r){const e=r.name;if(nn.has(e))return je.debug(`There were multiple attempts to register component ${e}.`),!1;nn.set(e,r);for(const t of Xt.values())gd(t,r);return!0}function $i(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}/**
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
 */const md={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Me=new St("app","Firebase",md);/**
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
 */class bd{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Me.create("app-deleted",{appName:this._name})}}/**
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
 */const At=pd;function Li(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const a=Object.assign({name:rn,automaticDataCollectionEnabled:!1},e),s=a.name;if(typeof s!="string"||!s)throw Me.create("bad-app-name",{appName:String(s)});if(t||(t=Pi()),!t)throw Me.create("no-options");const c=Xt.get(s);if(c){if(Yt(t,c.options)&&Yt(a,c.config))return c;throw Me.create("duplicate-app",{appName:s})}const h=new Sh(s);for(const m of nn.values())h.addComponent(m);const g=new bd(t,a,h);return Xt.set(s,g),g}function _d(r=rn){const e=Xt.get(r);if(!e&&r===rn&&Pi())return Li();if(!e)throw Me.create("no-app",{appName:r});return e}function it(r,e,t){var a;let s=(a=vd[r])!==null&&a!==void 0?a:r;t&&(s+=`-${t}`);const c=s.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const g=[`Unable to register library "${s}" with version "${e}":`];c&&g.push(`library name "${s}" contains illegal characters (whitespace or "/")`),c&&h&&g.push("and"),h&&g.push(`version name "${e}" contains illegal characters (whitespace or "/")`),je.warn(g.join(" "));return}wt(new ct(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const yd="firebase-heartbeat-database",wd=1,It="firebase-heartbeat-store";let zr=null;function Ui(){return zr||(zr=Fh(yd,wd,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(It)}}}).catch(r=>{throw Me.create("idb-open",{originalErrorMessage:r.message})})),zr}async function Id(r){try{return await(await Ui()).transaction(It).objectStore(It).get(xi(r))}catch(e){if(e instanceof $e)je.warn(e.message);else{const t=Me.create("idb-get",{originalErrorMessage:e?.message});je.warn(t.message)}}}async function ai(r,e){try{const a=(await Ui()).transaction(It,"readwrite");await a.objectStore(It).put(e,xi(r)),await a.done}catch(t){if(t instanceof $e)je.warn(t.message);else{const a=Me.create("idb-set",{originalErrorMessage:t?.message});je.warn(a.message)}}}function xi(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Ed=1024,kd=30*24*60*60*1e3;class Td{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cd(t),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=ii();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c)))return this._heartbeatsCache.heartbeats.push({date:c,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const g=new Date(h.date).valueOf();return Date.now()-g<=kd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ii(),{heartbeatsToSend:a,unsentEntries:s}=Sd(this._heartbeatsCache.heartbeats),c=Ai(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}}function ii(){return new Date().toISOString().substring(0,10)}function Sd(r,e=Ed){const t=[];let a=r.slice();for(const s of r){const c=t.find(h=>h.agent===s.agent);if(c){if(c.dates.push(s.date),si(t)>e){c.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),si(t)>e){t.pop();break}a=a.slice(1)}return{heartbeatsToSend:t,unsentEntries:a}}class Cd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ph()?vh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Id(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ai(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ai(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function si(r){return Ai(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function Ad(r){wt(new ct("platform-logger",e=>new Vh(e),"PRIVATE")),wt(new ct("heartbeat",e=>new Td(e),"PRIVATE")),it(tn,ni,r),it(tn,ni,"esm2017"),it("fire-js","")}Ad("");function dn(r,e){var t={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(r);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(r,a[s])&&(t[a[s]]=r[a[s]]);return t}function Fi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rd=Fi,Bi=new St("auth","Firebase",Fi());/**
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
 */const Qt=new Ni("@firebase/auth");function Pd(r,...e){Qt.logLevel<=G.WARN&&Qt.warn(`Auth (${At}): ${r}`,...e)}function Gt(r,...e){Qt.logLevel<=G.ERROR&&Qt.error(`Auth (${At}): ${r}`,...e)}/**
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
 */function ve(r,...e){throw fn(r,...e)}function fe(r,...e){return fn(r,...e)}function Hi(r,e,t){const a=Object.assign(Object.assign({},Rd()),{[e]:t});return new St("auth","Firebase",a).create(e,{appName:r.name})}function Od(r,e,t){const a=t;if(!(e instanceof a))throw a.name!==e.constructor.name&&ve(r,"argument-error"),Hi(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fn(r,...e){if(typeof r!="string"){const t=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(t,...a)}return Bi.create(r,...e)}function P(r,e,...t){if(!r)throw fn(e,...t)}function ye(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Gt(e),new Error(e)}function Ee(r,e){r||ye(e)}/**
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
 */function an(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Nd(){return oi()==="http:"||oi()==="https:"}function oi(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Dd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nd()||hh()||"connection"in navigator)?navigator.onLine:!0}function Md(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Rt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ee(t>e,"Short delay should be less than long delay!"),this.isMobile=uh()||dh()}get(){return Dd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pn(r,e){Ee(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Vi{static initialize(e,t,a){this.fetchImpl=e,t&&(this.headersImpl=t),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $d={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ld=new Rt(3e4,6e4);function vn(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ht(r,e,t,a,s={}){return zi(r,s,async()=>{let c={},h={};a&&(e==="GET"?h=a:c={body:JSON.stringify(a)});const g=Ct(Object.assign({key:r.config.apiKey},h)).slice(1),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode),Vi.fetch()(ji(r,r.config.apiHost,t,g),Object.assign({method:e,headers:m,referrerPolicy:"no-referrer"},c))})}async function zi(r,e,t){r._canInitEmulator=!1;const a=Object.assign(Object.assign({},$d),e);try{const s=new xd(r),c=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Wt(r,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const g=c.ok?h.errorMessage:h.error.message,[m,E]=g.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wt(r,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Wt(r,"email-already-in-use",h);if(m==="USER_DISABLED")throw Wt(r,"user-disabled",h);const A=a[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw Hi(r,A,E);ve(r,A)}}catch(s){if(s instanceof $e)throw s;ve(r,"network-request-failed",{message:String(s)})}}async function Ud(r,e,t,a,s={}){const c=await ht(r,e,t,a,s);return"mfaPendingCredential"in c&&ve(r,"multi-factor-auth-required",{_serverResponse:c}),c}function ji(r,e,t,a){const s=`${e}${t}?${a}`;return r.config.emulator?pn(r.config,s):`${r.config.apiScheme}://${s}`}class xd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,a)=>{this.timer=setTimeout(()=>a(fe(this.auth,"network-request-failed")),Ld.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wt(r,e,t){const a={appName:r.name};t.email&&(a.email=t.email),t.phoneNumber&&(a.phoneNumber=t.phoneNumber);const s=fe(r,e,a);return s.customData._tokenResponse=t,s}/**
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
 */async function Fd(r,e){return ht(r,"POST","/v1/accounts:delete",e)}async function Bd(r,e){return ht(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function yt(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hd(r,e=!1){const t=ut(r),a=await t.getIdToken(e),s=gn(a);P(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const c=typeof s.firebase=="object"?s.firebase:void 0,h=c?.sign_in_provider;return{claims:s,token:a,authTime:yt(jr(s.auth_time)),issuedAtTime:yt(jr(s.iat)),expirationTime:yt(jr(s.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function jr(r){return Number(r)*1e3}function gn(r){const[e,t,a]=r.split(".");if(e===void 0||t===void 0||a===void 0)return Gt("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ri(t);return s?JSON.parse(s):(Gt("Failed to decode base64 JWT payload"),null)}catch(s){return Gt("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Vd(r){const e=gn(r);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Et(r,e,t=!1){if(t)return e;try{return await e}catch(a){throw a instanceof $e&&zd(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function zd({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class jd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yt(this.lastLoginAt),this.creationTime=yt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zt(r){var e;const t=r.auth,a=await r.getIdToken(),s=await Et(r,Bd(t,{idToken:a}));P(s?.users.length,t,"internal-error");const c=s.users[0];r._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?qd(c.providerUserInfo):[],g=Gd(r.providerData,h),m=r.isAnonymous,E=!(r.email&&c.passwordHash)&&!g?.length,A=m?E:!1,D={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new Wi(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(r,D)}async function Wd(r){const e=ut(r);await Zt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gd(r,e){return[...r.filter(a=>!e.some(s=>s.providerId===a.providerId)),...e]}function qd(r){return r.map(e=>{var{providerId:t}=e,a=dn(e,["providerId"]);return{providerId:t,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function Kd(r,e){const t=await zi(r,{},async()=>{const a=Ct({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:c}=r.config,h=ji(r,s,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",Vi.fetch()(h,{method:"POST",headers:g,body:a})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Jd(r,e){return ht(r,"POST","/v2/accounts:revokeToken",vn(r,e))}/**
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
 */class kt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:a,refreshToken:s,expiresIn:c}=await Kd(e,t);this.updateTokensAndExpiration(a,s,Number(c))}updateTokensAndExpiration(e,t,a){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,t){const{refreshToken:a,accessToken:s,expirationTime:c}=t,h=new kt;return a&&(P(typeof a=="string","internal-error",{appName:e}),h.refreshToken=a),s&&(P(typeof s=="string","internal-error",{appName:e}),h.accessToken=s),c&&(P(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kt,this.toJSON())}_performRefresh(){return ye("not implemented")}}/**
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
 */function Ae(r,e){P(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ze{constructor(e){var{uid:t,auth:a,stsTokenManager:s}=e,c=dn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=a,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Wi(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const t=await Et(this,this.stsTokenManager.getToken(this.auth,e));return P(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Hd(this,e)}reload(){return Wd(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),t&&await Zt(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Et(this,Fd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var a,s,c,h,g,m,E,A;const D=(a=t.displayName)!==null&&a!==void 0?a:void 0,L=(s=t.email)!==null&&s!==void 0?s:void 0,J=(c=t.phoneNumber)!==null&&c!==void 0?c:void 0,B=(h=t.photoURL)!==null&&h!==void 0?h:void 0,I=(g=t.tenantId)!==null&&g!==void 0?g:void 0,j=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,ge=(E=t.createdAt)!==null&&E!==void 0?E:void 0,Nt=(A=t.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:Ge,emailVerified:de,isAnonymous:dt,providerData:R,stsTokenManager:Le}=t;P(Ge&&Le,e,"internal-error");const K=kt.fromJSON(this.name,Le);P(typeof Ge=="string",e,"internal-error"),Ae(D,e.name),Ae(L,e.name),P(typeof de=="boolean",e,"internal-error"),P(typeof dt=="boolean",e,"internal-error"),Ae(J,e.name),Ae(B,e.name),Ae(I,e.name),Ae(j,e.name),Ae(ge,e.name),Ae(Nt,e.name);const ft=new ze({uid:Ge,auth:e,email:L,emailVerified:de,displayName:D,isAnonymous:dt,photoURL:B,phoneNumber:J,tenantId:I,stsTokenManager:K,createdAt:ge,lastLoginAt:Nt});return R&&Array.isArray(R)&&(ft.providerData=R.map(Dt=>Object.assign({},Dt))),j&&(ft._redirectEventId=j),ft}static async _fromIdTokenResponse(e,t,a=!1){const s=new kt;s.updateFromServerResponse(t);const c=new ze({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:a});return await Zt(c),c}}/**
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
 */const ci=new Map;function we(r){Ee(r instanceof Function,"Expected a class definition");let e=ci.get(r);return e?(Ee(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ci.set(r,e),e)}/**
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
 */class Gi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gi.type="NONE";const li=Gi;/**
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
 */function qt(r,e,t){return`firebase:${r}:${e}:${t}`}class st{constructor(e,t,a){this.persistence=e,this.auth=t,this.userKey=a;const{config:s,name:c}=this.auth;this.fullUserKey=qt(this.userKey,s.apiKey,c),this.fullPersistenceKey=qt("persistence",s.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,a="authUser"){if(!t.length)return new st(we(li),e,a);const s=(await Promise.all(t.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=s[0]||we(li);const h=qt(a,e.config.apiKey,e.name);let g=null;for(const E of t)try{const A=await E._get(h);if(A){const D=ze._fromJSON(e,A);E!==c&&(g=D),c=E;break}}catch{}const m=s.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new st(c,e,a):(c=m[0],g&&await c._set(h,g.toJSON()),await Promise.all(t.map(async E=>{if(E!==c)try{await E._remove(h)}catch{}})),new st(c,e,a))}}/**
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
 */function ui(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ji(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xi(e))return"Blackberry";if(Qi(e))return"Webos";if(mn(e))return"Safari";if((e.includes("chrome/")||Ki(e))&&!e.includes("edge/"))return"Chrome";if(Yi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(t);if(a?.length===2)return a[1]}return"Other"}function qi(r=re()){return/firefox\//i.test(r)}function mn(r=re()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ki(r=re()){return/crios\//i.test(r)}function Ji(r=re()){return/iemobile/i.test(r)}function Yi(r=re()){return/android/i.test(r)}function Xi(r=re()){return/blackberry/i.test(r)}function Qi(r=re()){return/webos/i.test(r)}function nr(r=re()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Yd(r=re()){var e;return nr(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xd(){return fh()&&document.documentMode===10}function Zi(r=re()){return nr(r)||Yi(r)||Qi(r)||Xi(r)||/windows phone/i.test(r)||Ji(r)}function Qd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function es(r,e=[]){let t;switch(r){case"Browser":t=ui(re());break;case"Worker":t=`${ui(re())}-${r}`;break;default:t=r}const a=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${At}/${a}`}/**
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
 */class Zd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const a=c=>new Promise((h,g)=>{try{const m=e(c);h(m)}catch(m){g(m)}});a.onAbort=t,this.queue.push(a);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const a of this.queue)await a(e),a.onAbort&&t.push(a.onAbort)}catch(a){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
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
 */async function ef(r,e={}){return ht(r,"GET","/v2/passwordPolicy",vn(r,e))}/**
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
 */const tf=6;class rf{constructor(e){var t,a,s,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:tf,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,a,s,c,h,g;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(a=m.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(s=m.containsLowercaseLetter)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(c=m.containsUppercaseLetter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(g=m.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),m}validatePasswordLengthOptions(e,t){const a=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;a&&(t.meetsMinPasswordLength=e.length>=a),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let a;for(let s=0;s<e.length;s++)a=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,t,a,s,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class nf{constructor(e,t,a,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=a,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hi(this),this.idTokenSubscription=new hi(this),this.beforeStateQueue=new Zd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=we(t)),this._initializationPromise=this.queue(async()=>{var a,s;if(!this._deleted&&(this.persistenceManager=await st.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const a=await this.assertedPersistence.getCurrentUser();let s=a,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,g=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===g)&&m?.user&&(s=m.user,c=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zt(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Md()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ut(e):null;return t&&P(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(we(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ef(this),t=new rf(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new St("auth","Firebase",e())}onAuthStateChanged(e,t,a){return this.registerStateListener(this.authStateSubscription,e,t,a)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,a){return this.registerStateListener(this.idTokenSubscription,e,t,a)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(a.tenantId=this.tenantId),await Jd(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const a=await this.getOrInitRedirectPersistenceManager(t);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&we(e)||this._popupRedirectResolver;P(t,this,"argument-error"),this.redirectPersistenceManager=await st.create(this,[we(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,a;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,a,s){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(g,this,"internal-error"),g.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,a,s);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=es(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(t["X-Firebase-Client"]=a);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Pd(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ar(r){return ut(r)}class hi{constructor(e){this.auth=e,this.observer=null,this.addObserver=yh(t=>this.observer=t)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function af(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}function sf(r){return new Promise((e,t)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=e,a.onerror=s=>{const c=fe("internal-error");c.customData=s,t(c)},a.type="text/javascript",a.charset="UTF-8",af().appendChild(a)})}function of(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function cf(r,e){const t=$i(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),c=t.getOptions();if(Yt(c,e??{}))return s;ve(s,"already-initialized")}return t.initialize({options:e})}function lf(r,e){const t=e?.persistence||[],a=(Array.isArray(t)?t:[t]).map(we);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(a,e?.popupRedirectResolver)}function uf(r,e,t){const a=ar(r);P(a._canInitEmulator,a,"emulator-config-failed"),P(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const s=!!t?.disableWarnings,c=ts(e),{host:h,port:g}=hf(e),m=g===null?"":`:${g}`;a.config.emulator={url:`${c}//${h}${m}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:h,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||df()}function ts(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function hf(r){const e=ts(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const a=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(a);if(s){const c=s[1];return{host:c,port:di(a.substr(c.length+1))}}else{const[c,h]=a.split(":");return{host:c,port:di(h)}}}function di(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function df(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class rs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ye("not implemented")}_getIdTokenResponse(e){return ye("not implemented")}_linkToIdToken(e,t){return ye("not implemented")}_getReauthenticationResolver(e){return ye("not implemented")}}/**
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
 */async function ot(r,e){return Ud(r,"POST","/v1/accounts:signInWithIdp",vn(r,e))}/**
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
 */const ff="http://localhost";class We extends rs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new We(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ve("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:s}=t,c=dn(t,["providerId","signInMethod"]);if(!a||!s)return null;const h=new We(a,s);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ot(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,ot(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ot(e,t)}buildRequest(){const e={requestUri:ff,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ct(t)}return e}}/**
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
 */class bn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pt extends bn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Re extends Pt{constructor(){super("facebook.com")}static credential(e){return We._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.FACEBOOK_SIGN_IN_METHOD="facebook.com";Re.PROVIDER_ID="facebook.com";/**
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
 */class _e extends Pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return We._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a}=e;if(!t&&!a)return null;try{return _e.credential(t,a)}catch{return null}}}_e.GOOGLE_SIGN_IN_METHOD="google.com";_e.PROVIDER_ID="google.com";/**
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
 */class Pe extends Pt{constructor(){super("github.com")}static credential(e){return We._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.GITHUB_SIGN_IN_METHOD="github.com";Pe.PROVIDER_ID="github.com";/**
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
 */class Oe extends Pt{constructor(){super("twitter.com")}static credential(e,t){return We._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:a}=e;if(!t||!a)return null;try{return Oe.credential(t,a)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
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
 */class lt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,a,s=!1){const c=await ze._fromIdTokenResponse(e,a,s),h=fi(a);return new lt({user:c,providerId:h,_tokenResponse:a,operationType:t})}static async _forOperation(e,t,a){await e._updateTokensIfNecessary(a,!0);const s=fi(a);return new lt({user:e,providerId:s,_tokenResponse:a,operationType:t})}}function fi(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class er extends $e{constructor(e,t,a,s){var c;super(t.code,t.message),this.operationType=a,this.user=s,Object.setPrototypeOf(this,er.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:t.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,t,a,s){return new er(e,t,a,s)}}function ns(r,e,t,a){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?er._fromErrorAndOperation(r,c,e,a):c})}async function pf(r,e,t=!1){const a=await Et(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return lt._forOperation(r,"link",a)}/**
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
 */async function vf(r,e,t=!1){const{auth:a}=r,s="reauthenticate";try{const c=await Et(r,ns(a,s,e,r),t);P(c.idToken,a,"internal-error");const h=gn(c.idToken);P(h,a,"internal-error");const{sub:g}=h;return P(r.uid===g,a,"user-mismatch"),lt._forOperation(r,s,c)}catch(c){throw c?.code==="auth/user-not-found"&&ve(a,"user-mismatch"),c}}/**
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
 */async function gf(r,e,t=!1){const a="signIn",s=await ns(r,a,e),c=await lt._fromIdTokenResponse(r,a,s);return t||await r._updateCurrentUser(c.user),c}function mf(r,e,t,a){return ut(r).onIdTokenChanged(e,t,a)}function bf(r,e,t){return ut(r).beforeAuthStateChanged(e,t)}const tr="__sak";/**
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
 */class as{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tr,"1"),this.storage.removeItem(tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _f(){const r=re();return mn(r)||nr(r)}const yf=1e3,wf=10;class is extends as{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_f()&&Qd(),this.fallbackToPolling=Zi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const a=this.storage.getItem(t),s=this.localCache[t];a!==s&&e(t,s,a)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,g,m)=>{this.notifyListeners(h,m)});return}const a=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const h=this.storage.getItem(a);if(e.newValue!==h)e.newValue!==null?this.storage.setItem(a,e.newValue):this.storage.removeItem(a);else if(this.localCache[a]===e.newValue&&!t)return}const s=()=>{const h=this.storage.getItem(a);!t&&this.localCache[a]===h||this.notifyListeners(a,h)},c=this.storage.getItem(a);Xd()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wf):s()}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:a}),!0)})},yf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}is.type="LOCAL";const If=is;/**
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
 */class ss extends as{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ss.type="SESSION";const os=ss;/**
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
 */function Ef(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ir{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const a=new ir(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:a,eventType:s,data:c}=t.data,h=this.handlersMap[s];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:a,eventType:s});const g=Array.from(h).map(async E=>E(t.origin,c)),m=await Ef(g);t.ports[0].postMessage({status:"done",eventId:a,eventType:s,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ir.receivers=[];/**
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
 */function _n(r="",e=10){let t="";for(let a=0;a<e;a++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class kf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let c,h;return new Promise((g,m)=>{const E=_n("",20);s.port1.start();const A=setTimeout(()=>{m(new Error("unsupported_event"))},a);h={messageChannel:s,onMessage(D){const L=D;if(L.data.eventId===E)switch(L.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(L.data.response);break;default:clearTimeout(A),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(h),s.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:E,data:t},[s.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function pe(){return window}function Tf(r){pe().location.href=r}/**
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
 */function cs(){return typeof pe().WorkerGlobalScope<"u"&&typeof pe().importScripts=="function"}async function Sf(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cf(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Af(){return cs()?self:null}/**
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
 */const ls="firebaseLocalStorageDb",Rf=1,rr="firebaseLocalStorage",us="fbase_key";class Ot{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sr(r,e){return r.transaction([rr],e?"readwrite":"readonly").objectStore(rr)}function Pf(){const r=indexedDB.deleteDatabase(ls);return new Ot(r).toPromise()}function sn(){const r=indexedDB.open(ls,Rf);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(rr,{keyPath:us})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(rr)?e(a):(a.close(),await Pf(),e(await sn()))})})}async function pi(r,e,t){const a=sr(r,!0).put({[us]:e,value:t});return new Ot(a).toPromise()}async function Of(r,e){const t=sr(r,!1).get(e),a=await new Ot(t).toPromise();return a===void 0?null:a.value}function vi(r,e){const t=sr(r,!0).delete(e);return new Ot(t).toPromise()}const Nf=800,Df=3;class hs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(t++>Df)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ir._getInstance(Af()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Sf(),!this.activeServiceWorker)return;this.sender=new kf(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((t=a[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sn();return await pi(e,tr,"1"),await vi(e,tr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(a=>pi(a,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(a=>Of(a,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vi(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const c=sr(s,!1).getAll();return new Ot(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],a=new Set;if(e.length!==0)for(const{fbase_key:s,value:c}of e)a.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(c)&&(this.notifyListeners(s,c),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!a.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hs.type="LOCAL";const Mf=hs;new Rt(3e4,6e4);/**
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
 */function ds(r,e){return e?we(e):(P(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class yn extends rs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $f(r){return gf(r.auth,new yn(r),r.bypassAuthState)}function Lf(r){const{auth:e,user:t}=r;return P(t,e,"internal-error"),vf(t,new yn(r),r.bypassAuthState)}async function Uf(r){const{auth:e,user:t}=r;return P(t,e,"internal-error"),pf(t,new yn(r),r.bypassAuthState)}/**
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
 */class fs{constructor(e,t,a,s,c=!1){this.auth=e,this.resolver=a,this.user=s,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:a,postBody:s,tenantId:c,error:h,type:g}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:a,tenantId:c||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(m))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $f;case"linkViaPopup":case"linkViaRedirect":return Uf;case"reauthViaPopup":case"reauthViaRedirect":return Lf;default:ve(this.auth,"internal-error")}}resolve(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xf=new Rt(2e3,1e4);async function Ff(r,e,t){const a=ar(r);Od(r,e,bn);const s=ds(a,t);return new Ve(a,"signInViaPopup",e,s).executeNotNull()}class Ve extends fs{constructor(e,t,a,s,c){super(e,t,s,c),this.provider=a,this.authWindow=null,this.pollId=null,Ve.currentPopupAction&&Ve.currentPopupAction.cancel(),Ve.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const e=_n();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ve.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,a;if(!((a=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xf.get())};e()}}Ve.currentPopupAction=null;/**
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
 */const Bf="pendingRedirect",Kt=new Map;class Hf extends fs{constructor(e,t,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a),this.eventId=null}async execute(){let e=Kt.get(this.auth._key());if(!e){try{const a=await Vf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(t){e=()=>Promise.reject(t)}Kt.set(this.auth._key(),e)}return this.bypassAuthState||Kt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vf(r,e){const t=Wf(e),a=jf(r);if(!await a._isAvailable())return!1;const s=await a._get(t)==="true";return await a._remove(t),s}function zf(r,e){Kt.set(r._key(),e)}function jf(r){return we(r._redirectPersistence)}function Wf(r){return qt(Bf,r.config.apiKey,r.name)}async function Gf(r,e,t=!1){const a=ar(r),s=ds(a,e),h=await new Hf(a,s,t).execute();return h&&!t&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,e)),h}/**
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
 */const qf=10*60*1e3;class Kf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(t=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var a;if(e.error&&!ps(e)){const s=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";t.onError(fe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const a=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qf&&this.cachedEventUids.clear(),this.cachedEventUids.has(gi(e))}saveEventToCache(e){this.cachedEventUids.add(gi(e)),this.lastProcessedEventTime=Date.now()}}function gi(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function ps({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function Jf(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ps(r);default:return!1}}/**
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
 */async function Yf(r,e={}){return ht(r,"GET","/v1/projects",e)}/**
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
 */const Xf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qf=/^https?/;async function Zf(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Yf(r);for(const t of e)try{if(ep(t))return}catch{}ve(r,"unauthorized-domain")}function ep(r){const e=an(),{protocol:t,hostname:a}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&a===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===a}if(!Qf.test(t))return!1;if(Xf.test(r))return a===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(a)}/**
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
 */const tp=new Rt(3e4,6e4);function mi(){const r=pe().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function rp(r){return new Promise((e,t)=>{var a,s,c;function h(){mi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mi(),t(fe(r,"network-request-failed"))},timeout:tp.get()})}if(!((s=(a=pe().gapi)===null||a===void 0?void 0:a.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((c=pe().gapi)===null||c===void 0)&&c.load)h();else{const g=of("iframefcb");return pe()[g]=()=>{gapi.load?h():t(fe(r,"network-request-failed"))},sf(`https://apis.google.com/js/api.js?onload=${g}`).catch(m=>t(m))}}).catch(e=>{throw Jt=null,e})}let Jt=null;function np(r){return Jt=Jt||rp(r),Jt}/**
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
 */const ap=new Rt(5e3,15e3),ip="__/auth/iframe",sp="emulator/auth/iframe",op={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lp(r){const e=r.config;P(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?pn(e,sp):`https://${r.config.authDomain}/${ip}`,a={apiKey:e.apiKey,appName:r.name,v:At},s=cp.get(r.config.apiHost);s&&(a.eid=s);const c=r._getFrameworks();return c.length&&(a.fw=c.join(",")),`${t}?${Ct(a).slice(1)}`}async function up(r){const e=await np(r),t=pe().gapi;return P(t,r,"internal-error"),e.open({where:document.body,url:lp(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:op,dontclear:!0},a=>new Promise(async(s,c)=>{await a.restyle({setHideOnLeave:!1});const h=fe(r,"network-request-failed"),g=pe().setTimeout(()=>{c(h)},ap.get());function m(){pe().clearTimeout(g),s(a)}a.ping(m).then(m,()=>{c(h)})}))}/**
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
 */const hp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dp=500,fp=600,pp="_blank",vp="http://localhost";class bi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gp(r,e,t,a=dp,s=fp){const c=Math.max((window.screen.availHeight-s)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let g="";const m=Object.assign(Object.assign({},hp),{width:a.toString(),height:s.toString(),top:c,left:h}),E=re().toLowerCase();t&&(g=Ki(E)?pp:t),qi(E)&&(e=e||vp,m.scrollbars="yes");const A=Object.entries(m).reduce((L,[J,B])=>`${L}${J}=${B},`,"");if(Yd(E)&&g!=="_self")return mp(e||"",g),new bi(null);const D=window.open(e||"",g,A);P(D,r,"popup-blocked");try{D.focus()}catch{}return new bi(D)}function mp(r,e){const t=document.createElement("a");t.href=r,t.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(a)}/**
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
 */const bp="__/auth/handler",_p="emulator/auth/handler",yp=encodeURIComponent("fac");async function _i(r,e,t,a,s,c){P(r.config.authDomain,r,"auth-domain-config-required"),P(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:a,v:At,eventId:s};if(e instanceof bn){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",_h(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,D]of Object.entries(c||{}))h[A]=D}if(e instanceof Pt){const A=e.getScopes().filter(D=>D!=="");A.length>0&&(h.scopes=A.join(","))}r.tenantId&&(h.tid=r.tenantId);const g=h;for(const A of Object.keys(g))g[A]===void 0&&delete g[A];const m=await r._getAppCheckToken(),E=m?`#${yp}=${encodeURIComponent(m)}`:"";return`${wp(r)}?${Ct(g).slice(1)}${E}`}function wp({config:r}){return r.emulator?pn(r,_p):`https://${r.authDomain}/${bp}`}/**
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
 */const Wr="webStorageSupport";class Ip{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=os,this._completeRedirectFn=Gf,this._overrideRedirectResult=zf}async _openPopup(e,t,a,s){var c;Ee((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await _i(e,t,a,an(),s);return gp(e,h,_n())}async _openRedirect(e,t,a,s){await this._originValidation(e);const c=await _i(e,t,a,an(),s);return Tf(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:c}=this.eventManagers[t];return s?Promise.resolve(s):(Ee(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(e);return this.eventManagers[t]={promise:a},a.catch(()=>{delete this.eventManagers[t]}),a}async initAndGetManager(e){const t=await up(e),a=new Kf(e);return t.register("authEvent",s=>(P(s?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=t,a}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wr,{type:Wr},s=>{var c;const h=(c=s?.[0])===null||c===void 0?void 0:c[Wr];h!==void 0&&t(!!h),ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Zf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zi()||mn()||nr()}}const Ep=Ip;var yi="@firebase/auth",wi="1.5.1";/**
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
 */class kp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Tp(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sp(r){wt(new ct("auth",(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:g}=a.options;P(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const m={apiKey:h,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:es(r)},E=new nf(a,s,c,m);return lf(E,t),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider("auth-internal").initialize()})),wt(new ct("auth-internal",e=>{const t=ar(e.getProvider("auth").getImmediate());return(a=>new kp(a))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(yi,wi,Tp(r)),it(yi,wi,"esm2017")}/**
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
 */const Cp=5*60,Ap=Oi("authIdTokenMaxAge")||Cp;let Ii=null;const Rp=r=>async e=>{const t=e&&await e.getIdTokenResult(),a=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(a&&a>Ap)return;const s=t?.token;Ii!==s&&(Ii=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Pp(r=_d()){const e=$i(r,"auth");if(e.isInitialized())return e.getImmediate();const t=cf(r,{popupRedirectResolver:Ep,persistence:[Mf,If,os]}),a=Oi("authTokenSyncURL");if(a){const c=Rp(a);bf(t,c,()=>c(t.currentUser)),mf(t,h=>c(h))}const s=ch("auth");return s&&uf(t,`http://${s}`),t}Sp("Browser");var Op="firebase",Np="10.7.1";/**
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
 */it(Op,Np,"app");class Ei{cache;constructor(){this.cache={}}set(e,t){return this.has(e)?!1:(this.cache[e]=t,!0)}get(e){return this.cache[e]}has(e){return!!this.get(e)}delete(e){return this.has(e)?(delete this.cache[e],!0):!1}}class ki{static apps=new Ei;static auths=new Ei;static getApp(e){if(!this.apps.has(e.appId)){const t=Li(e);this.apps.set(e.appId,t)}return this.apps.get(e.appId)}static getAuth(e){try{if(!this.auths.has(e.appId)){const t=this.getApp(e);if(t){const a=Pp(t);this.auths.set(e.appId,a)}}return this.auths.get(e.appId)}catch{throw new Ti}}static getProvider(){const e=new _e;return e.setCustomParameters({prompt:"select_account"}),e}}class Dp{static login(e){return new Promise((t,a)=>{const s=ki.getAuth(e);if(!s)throw new Ti;const c=ki.getProvider();if(!c)throw new qu("unknown");Ff(s,c).then(h=>{const g=h._tokenResponse.oauthIdToken??"";t(g)}).catch(a)})}}var Mp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $p(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var vs={exports:{}};/**
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
 */(function(r,e){(function(t,a){r.exports=a()})(Mp,function(){for(var t=function(n,i,o){return i===void 0&&(i=0),o===void 0&&(o=1),n<i?i:n>o?o:n},a=t,s=function(n){n._clipped=!1,n._unclipped=n.slice(0);for(var i=0;i<=3;i++)i<3?((n[i]<0||n[i]>255)&&(n._clipped=!0),n[i]=a(n[i],0,255)):i===3&&(n[i]=a(n[i],0,1));return n},c={},h=0,g=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];h<g.length;h+=1){var m=g[h];c["[object "+m+"]"]=m.toLowerCase()}var E=function(n){return c[Object.prototype.toString.call(n)]||"object"},A=E,D=function(n,i){return i===void 0&&(i=null),n.length>=3?Array.prototype.slice.call(n):A(n[0])=="object"&&i?i.split("").filter(function(o){return n[0][o]!==void 0}).map(function(o){return n[0][o]}):n[0]},L=E,J=function(n){if(n.length<2)return null;var i=n.length-1;return L(n[i])=="string"?n[i].toLowerCase():null},B=Math.PI,I={clip_rgb:s,limit:t,type:E,unpack:D,last:J,PI:B,TWOPI:B*2,PITHIRD:B/3,DEG2RAD:B/180,RAD2DEG:180/B},j={format:{},autodetect:[]},ge=I.last,Nt=I.clip_rgb,Ge=I.type,de=j,dt=function(){for(var i=[],o=arguments.length;o--;)i[o]=arguments[o];var l=this;if(Ge(i[0])==="object"&&i[0].constructor&&i[0].constructor===this.constructor)return i[0];var d=ge(i),f=!1;if(!d){f=!0,de.sorted||(de.autodetect=de.autodetect.sort(function(_,k){return k.p-_.p}),de.sorted=!0);for(var u=0,p=de.autodetect;u<p.length;u+=1){var v=p[u];if(d=v.test.apply(v,i),d)break}}if(de.format[d]){var b=de.format[d].apply(null,f?i:i.slice(0,-1));l._rgb=Nt(b)}else throw new Error("unknown format: "+i);l._rgb.length===3&&l._rgb.push(1)};dt.prototype.toString=function(){return Ge(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var R=dt,Le=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Le.Color,[null].concat(n)))};Le.Color=R,Le.version="2.4.2";var K=Le,ft=I.unpack,Dt=Math.max,gs=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=ft(n,"rgb"),l=o[0],d=o[1],f=o[2];l=l/255,d=d/255,f=f/255;var u=1-Dt(l,Dt(d,f)),p=u<1?1/(1-u):0,v=(1-l-u)*p,b=(1-d-u)*p,_=(1-f-u)*p;return[v,b,_,u]},ms=gs,bs=I.unpack,_s=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=bs(n,"cmyk");var o=n[0],l=n[1],d=n[2],f=n[3],u=n.length>4?n[4]:1;return f===1?[0,0,0,u]:[o>=1?0:255*(1-o)*(1-f),l>=1?0:255*(1-l)*(1-f),d>=1?0:255*(1-d)*(1-f),u]},ys=_s,ws=K,wn=R,In=j,Is=I.unpack,Es=I.type,ks=ms;wn.prototype.cmyk=function(){return ks(this._rgb)},ws.cmyk=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(wn,[null].concat(n,["cmyk"])))},In.format.cmyk=ys,In.autodetect.push({p:2,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=Is(n,"cmyk"),Es(n)==="array"&&n.length===4)return"cmyk"}});var Ts=I.unpack,Ss=I.last,or=function(n){return Math.round(n*100)/100},Cs=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Ts(n,"hsla"),l=Ss(n)||"lsa";return o[0]=or(o[0]||0),o[1]=or(o[1]*100)+"%",o[2]=or(o[2]*100)+"%",l==="hsla"||o.length>3&&o[3]<1?(o[3]=o.length>3?o[3]:1,l="hsla"):o.length=3,l+"("+o.join(",")+")"},As=Cs,Rs=I.unpack,Ps=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=Rs(n,"rgba");var o=n[0],l=n[1],d=n[2];o/=255,l/=255,d/=255;var f=Math.min(o,l,d),u=Math.max(o,l,d),p=(u+f)/2,v,b;return u===f?(v=0,b=Number.NaN):v=p<.5?(u-f)/(u+f):(u-f)/(2-u-f),o==u?b=(l-d)/(u-f):l==u?b=2+(d-o)/(u-f):d==u&&(b=4+(o-l)/(u-f)),b*=60,b<0&&(b+=360),n.length>3&&n[3]!==void 0?[b,v,p,n[3]]:[b,v,p]},En=Ps,Os=I.unpack,Ns=I.last,Ds=As,Ms=En,cr=Math.round,$s=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Os(n,"rgba"),l=Ns(n)||"rgb";return l.substr(0,3)=="hsl"?Ds(Ms(o),l):(o[0]=cr(o[0]),o[1]=cr(o[1]),o[2]=cr(o[2]),(l==="rgba"||o.length>3&&o[3]<1)&&(o[3]=o.length>3?o[3]:1,l="rgba"),l+"("+o.slice(0,l==="rgb"?3:4).join(",")+")")},Ls=$s,Us=I.unpack,lr=Math.round,xs=function(){for(var n,i=[],o=arguments.length;o--;)i[o]=arguments[o];i=Us(i,"hsl");var l=i[0],d=i[1],f=i[2],u,p,v;if(d===0)u=p=v=f*255;else{var b=[0,0,0],_=[0,0,0],k=f<.5?f*(1+d):f+d-f*d,y=2*f-k,S=l/360;b[0]=S+1/3,b[1]=S,b[2]=S-1/3;for(var T=0;T<3;T++)b[T]<0&&(b[T]+=1),b[T]>1&&(b[T]-=1),6*b[T]<1?_[T]=y+(k-y)*6*b[T]:2*b[T]<1?_[T]=k:3*b[T]<2?_[T]=y+(k-y)*(2/3-b[T])*6:_[T]=y;n=[lr(_[0]*255),lr(_[1]*255),lr(_[2]*255)],u=n[0],p=n[1],v=n[2]}return i.length>3?[u,p,v,i[3]]:[u,p,v,1]},kn=xs,Tn=kn,Sn=j,Cn=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,An=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,Rn=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Pn=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,On=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Nn=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Dn=Math.round,Mn=function(n){n=n.toLowerCase().trim();var i;if(Sn.format.named)try{return Sn.format.named(n)}catch{}if(i=n.match(Cn)){for(var o=i.slice(1,4),l=0;l<3;l++)o[l]=+o[l];return o[3]=1,o}if(i=n.match(An)){for(var d=i.slice(1,5),f=0;f<4;f++)d[f]=+d[f];return d}if(i=n.match(Rn)){for(var u=i.slice(1,4),p=0;p<3;p++)u[p]=Dn(u[p]*2.55);return u[3]=1,u}if(i=n.match(Pn)){for(var v=i.slice(1,5),b=0;b<3;b++)v[b]=Dn(v[b]*2.55);return v[3]=+v[3],v}if(i=n.match(On)){var _=i.slice(1,4);_[1]*=.01,_[2]*=.01;var k=Tn(_);return k[3]=1,k}if(i=n.match(Nn)){var y=i.slice(1,4);y[1]*=.01,y[2]*=.01;var S=Tn(y);return S[3]=+i[4],S}};Mn.test=function(n){return Cn.test(n)||An.test(n)||Rn.test(n)||Pn.test(n)||On.test(n)||Nn.test(n)};var Fs=Mn,Bs=K,$n=R,Ln=j,Hs=I.type,Vs=Ls,Un=Fs;$n.prototype.css=function(n){return Vs(this._rgb,n)},Bs.css=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply($n,[null].concat(n,["css"])))},Ln.format.css=Un,Ln.autodetect.push({p:5,test:function(n){for(var i=[],o=arguments.length-1;o-- >0;)i[o]=arguments[o+1];if(!i.length&&Hs(n)==="string"&&Un.test(n))return"css"}});var xn=R,zs=K,js=j,Ws=I.unpack;js.format.gl=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Ws(n,"rgba");return o[0]*=255,o[1]*=255,o[2]*=255,o},zs.gl=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(xn,[null].concat(n,["gl"])))},xn.prototype.gl=function(){var n=this._rgb;return[n[0]/255,n[1]/255,n[2]/255,n[3]]};var Gs=I.unpack,qs=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Gs(n,"rgb"),l=o[0],d=o[1],f=o[2],u=Math.min(l,d,f),p=Math.max(l,d,f),v=p-u,b=v*100/255,_=u/(255-v)*100,k;return v===0?k=Number.NaN:(l===p&&(k=(d-f)/v),d===p&&(k=2+(f-l)/v),f===p&&(k=4+(l-d)/v),k*=60,k<0&&(k+=360)),[k,b,_]},Ks=qs,Js=I.unpack,Ys=Math.floor,Xs=function(){for(var n,i,o,l,d,f,u=[],p=arguments.length;p--;)u[p]=arguments[p];u=Js(u,"hcg");var v=u[0],b=u[1],_=u[2],k,y,S;_=_*255;var T=b*255;if(b===0)k=y=S=_;else{v===360&&(v=0),v>360&&(v-=360),v<0&&(v+=360),v/=60;var O=Ys(v),$=v-O,x=_*(1-b),H=x+T*(1-$),Z=x+T*$,Q=x+T;switch(O){case 0:n=[Q,Z,x],k=n[0],y=n[1],S=n[2];break;case 1:i=[H,Q,x],k=i[0],y=i[1],S=i[2];break;case 2:o=[x,Q,Z],k=o[0],y=o[1],S=o[2];break;case 3:l=[x,H,Q],k=l[0],y=l[1],S=l[2];break;case 4:d=[Z,x,Q],k=d[0],y=d[1],S=d[2];break;case 5:f=[Q,x,H],k=f[0],y=f[1],S=f[2];break}}return[k,y,S,u.length>3?u[3]:1]},Qs=Xs,Zs=I.unpack,eo=I.type,to=K,Fn=R,Bn=j,ro=Ks;Fn.prototype.hcg=function(){return ro(this._rgb)},to.hcg=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Fn,[null].concat(n,["hcg"])))},Bn.format.hcg=Qs,Bn.autodetect.push({p:1,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=Zs(n,"hcg"),eo(n)==="array"&&n.length===3)return"hcg"}});var no=I.unpack,ao=I.last,Mt=Math.round,io=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=no(n,"rgba"),l=o[0],d=o[1],f=o[2],u=o[3],p=ao(n)||"auto";u===void 0&&(u=1),p==="auto"&&(p=u<1?"rgba":"rgb"),l=Mt(l),d=Mt(d),f=Mt(f);var v=l<<16|d<<8|f,b="000000"+v.toString(16);b=b.substr(b.length-6);var _="0"+Mt(u*255).toString(16);switch(_=_.substr(_.length-2),p.toLowerCase()){case"rgba":return"#"+b+_;case"argb":return"#"+_+b;default:return"#"+b}},Hn=io,so=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,oo=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,co=function(n){if(n.match(so)){(n.length===4||n.length===7)&&(n=n.substr(1)),n.length===3&&(n=n.split(""),n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);var i=parseInt(n,16),o=i>>16,l=i>>8&255,d=i&255;return[o,l,d,1]}if(n.match(oo)){(n.length===5||n.length===9)&&(n=n.substr(1)),n.length===4&&(n=n.split(""),n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]);var f=parseInt(n,16),u=f>>24&255,p=f>>16&255,v=f>>8&255,b=Math.round((f&255)/255*100)/100;return[u,p,v,b]}throw new Error("unknown hex color: "+n)},Vn=co,lo=K,zn=R,uo=I.type,jn=j,ho=Hn;zn.prototype.hex=function(n){return ho(this._rgb,n)},lo.hex=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(zn,[null].concat(n,["hex"])))},jn.format.hex=Vn,jn.autodetect.push({p:4,test:function(n){for(var i=[],o=arguments.length-1;o-- >0;)i[o]=arguments[o+1];if(!i.length&&uo(n)==="string"&&[3,4,5,6,7,8,9].indexOf(n.length)>=0)return"hex"}});var fo=I.unpack,Wn=I.TWOPI,po=Math.min,vo=Math.sqrt,go=Math.acos,mo=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=fo(n,"rgb"),l=o[0],d=o[1],f=o[2];l/=255,d/=255,f/=255;var u,p=po(l,d,f),v=(l+d+f)/3,b=v>0?1-p/v:0;return b===0?u=NaN:(u=(l-d+(l-f))/2,u/=vo((l-d)*(l-d)+(l-f)*(d-f)),u=go(u),f>d&&(u=Wn-u),u/=Wn),[u*360,b,v]},bo=mo,_o=I.unpack,ur=I.limit,qe=I.TWOPI,hr=I.PITHIRD,Ke=Math.cos,yo=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=_o(n,"hsi");var o=n[0],l=n[1],d=n[2],f,u,p;return isNaN(o)&&(o=0),isNaN(l)&&(l=0),o>360&&(o-=360),o<0&&(o+=360),o/=360,o<1/3?(p=(1-l)/3,f=(1+l*Ke(qe*o)/Ke(hr-qe*o))/3,u=1-(p+f)):o<2/3?(o-=1/3,f=(1-l)/3,u=(1+l*Ke(qe*o)/Ke(hr-qe*o))/3,p=1-(f+u)):(o-=2/3,u=(1-l)/3,p=(1+l*Ke(qe*o)/Ke(hr-qe*o))/3,f=1-(u+p)),f=ur(d*f*3),u=ur(d*u*3),p=ur(d*p*3),[f*255,u*255,p*255,n.length>3?n[3]:1]},wo=yo,Io=I.unpack,Eo=I.type,ko=K,Gn=R,qn=j,To=bo;Gn.prototype.hsi=function(){return To(this._rgb)},ko.hsi=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Gn,[null].concat(n,["hsi"])))},qn.format.hsi=wo,qn.autodetect.push({p:2,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=Io(n,"hsi"),Eo(n)==="array"&&n.length===3)return"hsi"}});var So=I.unpack,Co=I.type,Ao=K,Kn=R,Jn=j,Ro=En;Kn.prototype.hsl=function(){return Ro(this._rgb)},Ao.hsl=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Kn,[null].concat(n,["hsl"])))},Jn.format.hsl=kn,Jn.autodetect.push({p:2,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=So(n,"hsl"),Co(n)==="array"&&n.length===3)return"hsl"}});var Po=I.unpack,Oo=Math.min,No=Math.max,Do=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=Po(n,"rgb");var o=n[0],l=n[1],d=n[2],f=Oo(o,l,d),u=No(o,l,d),p=u-f,v,b,_;return _=u/255,u===0?(v=Number.NaN,b=0):(b=p/u,o===u&&(v=(l-d)/p),l===u&&(v=2+(d-o)/p),d===u&&(v=4+(o-l)/p),v*=60,v<0&&(v+=360)),[v,b,_]},Mo=Do,$o=I.unpack,Lo=Math.floor,Uo=function(){for(var n,i,o,l,d,f,u=[],p=arguments.length;p--;)u[p]=arguments[p];u=$o(u,"hsv");var v=u[0],b=u[1],_=u[2],k,y,S;if(_*=255,b===0)k=y=S=_;else{v===360&&(v=0),v>360&&(v-=360),v<0&&(v+=360),v/=60;var T=Lo(v),O=v-T,$=_*(1-b),x=_*(1-b*O),H=_*(1-b*(1-O));switch(T){case 0:n=[_,H,$],k=n[0],y=n[1],S=n[2];break;case 1:i=[x,_,$],k=i[0],y=i[1],S=i[2];break;case 2:o=[$,_,H],k=o[0],y=o[1],S=o[2];break;case 3:l=[$,x,_],k=l[0],y=l[1],S=l[2];break;case 4:d=[H,$,_],k=d[0],y=d[1],S=d[2];break;case 5:f=[_,$,x],k=f[0],y=f[1],S=f[2];break}}return[k,y,S,u.length>3?u[3]:1]},xo=Uo,Fo=I.unpack,Bo=I.type,Ho=K,Yn=R,Xn=j,Vo=Mo;Yn.prototype.hsv=function(){return Vo(this._rgb)},Ho.hsv=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Yn,[null].concat(n,["hsv"])))},Xn.format.hsv=xo,Xn.autodetect.push({p:2,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=Fo(n,"hsv"),Bo(n)==="array"&&n.length===3)return"hsv"}});var $t={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},Je=$t,zo=I.unpack,Qn=Math.pow,jo=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=zo(n,"rgb"),l=o[0],d=o[1],f=o[2],u=Wo(l,d,f),p=u[0],v=u[1],b=u[2],_=116*v-16;return[_<0?0:_,500*(p-v),200*(v-b)]},dr=function(n){return(n/=255)<=.04045?n/12.92:Qn((n+.055)/1.055,2.4)},fr=function(n){return n>Je.t3?Qn(n,1/3):n/Je.t2+Je.t0},Wo=function(n,i,o){n=dr(n),i=dr(i),o=dr(o);var l=fr((.4124564*n+.3575761*i+.1804375*o)/Je.Xn),d=fr((.2126729*n+.7151522*i+.072175*o)/Je.Yn),f=fr((.0193339*n+.119192*i+.9503041*o)/Je.Zn);return[l,d,f]},Zn=jo,Ye=$t,Go=I.unpack,qo=Math.pow,Ko=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=Go(n,"lab");var o=n[0],l=n[1],d=n[2],f,u,p,v,b,_;return u=(o+16)/116,f=isNaN(l)?u:u+l/500,p=isNaN(d)?u:u-d/200,u=Ye.Yn*vr(u),f=Ye.Xn*vr(f),p=Ye.Zn*vr(p),v=pr(3.2404542*f-1.5371385*u-.4985314*p),b=pr(-.969266*f+1.8760108*u+.041556*p),_=pr(.0556434*f-.2040259*u+1.0572252*p),[v,b,_,n.length>3?n[3]:1]},pr=function(n){return 255*(n<=.00304?12.92*n:1.055*qo(n,1/2.4)-.055)},vr=function(n){return n>Ye.t1?n*n*n:Ye.t2*(n-Ye.t0)},ea=Ko,Jo=I.unpack,Yo=I.type,Xo=K,ta=R,ra=j,Qo=Zn;ta.prototype.lab=function(){return Qo(this._rgb)},Xo.lab=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(ta,[null].concat(n,["lab"])))},ra.format.lab=ea,ra.autodetect.push({p:2,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=Jo(n,"lab"),Yo(n)==="array"&&n.length===3)return"lab"}});var Zo=I.unpack,ec=I.RAD2DEG,tc=Math.sqrt,rc=Math.atan2,nc=Math.round,ac=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Zo(n,"lab"),l=o[0],d=o[1],f=o[2],u=tc(d*d+f*f),p=(rc(f,d)*ec+360)%360;return nc(u*1e4)===0&&(p=Number.NaN),[l,u,p]},na=ac,ic=I.unpack,sc=Zn,oc=na,cc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=ic(n,"rgb"),l=o[0],d=o[1],f=o[2],u=sc(l,d,f),p=u[0],v=u[1],b=u[2];return oc(p,v,b)},lc=cc,uc=I.unpack,hc=I.DEG2RAD,dc=Math.sin,fc=Math.cos,pc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=uc(n,"lch"),l=o[0],d=o[1],f=o[2];return isNaN(f)&&(f=0),f=f*hc,[l,fc(f)*d,dc(f)*d]},aa=pc,vc=I.unpack,gc=aa,mc=ea,bc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=vc(n,"lch");var o=n[0],l=n[1],d=n[2],f=gc(o,l,d),u=f[0],p=f[1],v=f[2],b=mc(u,p,v),_=b[0],k=b[1],y=b[2];return[_,k,y,n.length>3?n[3]:1]},ia=bc,_c=I.unpack,yc=ia,wc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=_c(n,"hcl").reverse();return yc.apply(void 0,o)},Ic=wc,Ec=I.unpack,kc=I.type,sa=K,Lt=R,gr=j,oa=lc;Lt.prototype.lch=function(){return oa(this._rgb)},Lt.prototype.hcl=function(){return oa(this._rgb).reverse()},sa.lch=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Lt,[null].concat(n,["lch"])))},sa.hcl=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(Lt,[null].concat(n,["hcl"])))},gr.format.lch=ia,gr.format.hcl=Ic,["lch","hcl"].forEach(function(n){return gr.autodetect.push({p:2,test:function(){for(var i=[],o=arguments.length;o--;)i[o]=arguments[o];if(i=Ec(i,n),kc(i)==="array"&&i.length===3)return n}})});var Tc={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},ca=Tc,Sc=R,la=j,Cc=I.type,pt=ca,Ac=Vn,Rc=Hn;Sc.prototype.name=function(){for(var n=Rc(this._rgb,"rgb"),i=0,o=Object.keys(pt);i<o.length;i+=1){var l=o[i];if(pt[l]===n)return l.toLowerCase()}return n},la.format.named=function(n){if(n=n.toLowerCase(),pt[n])return Ac(pt[n]);throw new Error("unknown color name: "+n)},la.autodetect.push({p:5,test:function(n){for(var i=[],o=arguments.length-1;o-- >0;)i[o]=arguments[o+1];if(!i.length&&Cc(n)==="string"&&pt[n.toLowerCase()])return"named"}});var Pc=I.unpack,Oc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=Pc(n,"rgb"),l=o[0],d=o[1],f=o[2];return(l<<16)+(d<<8)+f},Nc=Oc,Dc=I.type,Mc=function(n){if(Dc(n)=="number"&&n>=0&&n<=16777215){var i=n>>16,o=n>>8&255,l=n&255;return[i,o,l,1]}throw new Error("unknown num color: "+n)},$c=Mc,Lc=K,ua=R,ha=j,Uc=I.type,xc=Nc;ua.prototype.num=function(){return xc(this._rgb)},Lc.num=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(ua,[null].concat(n,["num"])))},ha.format.num=$c,ha.autodetect.push({p:5,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n.length===1&&Uc(n[0])==="number"&&n[0]>=0&&n[0]<=16777215)return"num"}});var Fc=K,mr=R,da=j,fa=I.unpack,pa=I.type,va=Math.round;mr.prototype.rgb=function(n){return n===void 0&&(n=!0),n===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(va)},mr.prototype.rgba=function(n){return n===void 0&&(n=!0),this._rgb.slice(0,4).map(function(i,o){return o<3?n===!1?i:va(i):i})},Fc.rgb=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(mr,[null].concat(n,["rgb"])))},da.format.rgb=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=fa(n,"rgba");return o[3]===void 0&&(o[3]=1),o},da.autodetect.push({p:3,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=fa(n,"rgba"),pa(n)==="array"&&(n.length===3||n.length===4&&pa(n[3])=="number"&&n[3]>=0&&n[3]<=1))return"rgb"}});var Ut=Math.log,Bc=function(n){var i=n/100,o,l,d;return i<66?(o=255,l=i<6?0:-155.25485562709179-.44596950469579133*(l=i-2)+104.49216199393888*Ut(l),d=i<20?0:-254.76935184120902+.8274096064007395*(d=i-10)+115.67994401066147*Ut(d)):(o=351.97690566805693+.114206453784165*(o=i-55)-40.25366309332127*Ut(o),l=325.4494125711974+.07943456536662342*(l=i-50)-28.0852963507957*Ut(l),d=255),[o,l,d,1]},ga=Bc,Hc=ga,Vc=I.unpack,zc=Math.round,jc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];for(var o=Vc(n,"rgb"),l=o[0],d=o[2],f=1e3,u=4e4,p=.4,v;u-f>p;){v=(u+f)*.5;var b=Hc(v);b[2]/b[0]>=d/l?u=v:f=v}return zc(v)},Wc=jc,br=K,xt=R,_r=j,Gc=Wc;xt.prototype.temp=xt.prototype.kelvin=xt.prototype.temperature=function(){return Gc(this._rgb)},br.temp=br.kelvin=br.temperature=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(xt,[null].concat(n,["temp"])))},_r.format.temp=_r.format.kelvin=_r.format.temperature=ga;var qc=I.unpack,yr=Math.cbrt,Kc=Math.pow,Jc=Math.sign,Yc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=qc(n,"rgb"),l=o[0],d=o[1],f=o[2],u=[wr(l/255),wr(d/255),wr(f/255)],p=u[0],v=u[1],b=u[2],_=yr(.4122214708*p+.5363325363*v+.0514459929*b),k=yr(.2119034982*p+.6806995451*v+.1073969566*b),y=yr(.0883024619*p+.2817188376*v+.6299787005*b);return[.2104542553*_+.793617785*k-.0040720468*y,1.9779984951*_-2.428592205*k+.4505937099*y,.0259040371*_+.7827717662*k-.808675766*y]},ma=Yc;function wr(n){var i=Math.abs(n);return i<.04045?n/12.92:(Jc(n)||1)*Kc((i+.055)/1.055,2.4)}var Xc=I.unpack,Ft=Math.pow,Qc=Math.sign,Zc=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=Xc(n,"lab");var o=n[0],l=n[1],d=n[2],f=Ft(o+.3963377774*l+.2158037573*d,3),u=Ft(o-.1055613458*l-.0638541728*d,3),p=Ft(o-.0894841775*l-1.291485548*d,3);return[255*Ir(4.0767416621*f-3.3077115913*u+.2309699292*p),255*Ir(-1.2684380046*f+2.6097574011*u-.3413193965*p),255*Ir(-.0041960863*f-.7034186147*u+1.707614701*p),n.length>3?n[3]:1]},ba=Zc;function Ir(n){var i=Math.abs(n);return i>.0031308?(Qc(n)||1)*(1.055*Ft(i,1/2.4)-.055):n*12.92}var el=I.unpack,tl=I.type,rl=K,_a=R,ya=j,nl=ma;_a.prototype.oklab=function(){return nl(this._rgb)},rl.oklab=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(_a,[null].concat(n,["oklab"])))},ya.format.oklab=ba,ya.autodetect.push({p:3,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=el(n,"oklab"),tl(n)==="array"&&n.length===3)return"oklab"}});var al=I.unpack,il=ma,sl=na,ol=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var o=al(n,"rgb"),l=o[0],d=o[1],f=o[2],u=il(l,d,f),p=u[0],v=u[1],b=u[2];return sl(p,v,b)},cl=ol,ll=I.unpack,ul=aa,hl=ba,dl=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];n=ll(n,"lch");var o=n[0],l=n[1],d=n[2],f=ul(o,l,d),u=f[0],p=f[1],v=f[2],b=hl(u,p,v),_=b[0],k=b[1],y=b[2];return[_,k,y,n.length>3?n[3]:1]},fl=dl,pl=I.unpack,vl=I.type,gl=K,wa=R,Ia=j,ml=cl;wa.prototype.oklch=function(){return ml(this._rgb)},gl.oklch=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];return new(Function.prototype.bind.apply(wa,[null].concat(n,["oklch"])))},Ia.format.oklch=fl,Ia.autodetect.push({p:3,test:function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n=pl(n,"oklch"),vl(n)==="array"&&n.length===3)return"oklch"}});var Ea=R,bl=I.type;Ea.prototype.alpha=function(n,i){return i===void 0&&(i=!1),n!==void 0&&bl(n)==="number"?i?(this._rgb[3]=n,this):new Ea([this._rgb[0],this._rgb[1],this._rgb[2],n],"rgb"):this._rgb[3]};var _l=R;_l.prototype.clipped=function(){return this._rgb._clipped||!1};var Ue=R,yl=$t;Ue.prototype.darken=function(n){n===void 0&&(n=1);var i=this,o=i.lab();return o[0]-=yl.Kn*n,new Ue(o,"lab").alpha(i.alpha(),!0)},Ue.prototype.brighten=function(n){return n===void 0&&(n=1),this.darken(-n)},Ue.prototype.darker=Ue.prototype.darken,Ue.prototype.brighter=Ue.prototype.brighten;var wl=R;wl.prototype.get=function(n){var i=n.split("."),o=i[0],l=i[1],d=this[o]();if(l){var f=o.indexOf(l)-(o.substr(0,2)==="ok"?2:0);if(f>-1)return d[f];throw new Error("unknown channel "+l+" in mode "+o)}else return d};var Xe=R,Il=I.type,El=Math.pow,kl=1e-7,Tl=20;Xe.prototype.luminance=function(n){if(n!==void 0&&Il(n)==="number"){if(n===0)return new Xe([0,0,0,this._rgb[3]],"rgb");if(n===1)return new Xe([255,255,255,this._rgb[3]],"rgb");var i=this.luminance(),o="rgb",l=Tl,d=function(u,p){var v=u.interpolate(p,.5,o),b=v.luminance();return Math.abs(n-b)<kl||!l--?v:b>n?d(u,v):d(v,p)},f=(i>n?d(new Xe([0,0,0]),this):d(this,new Xe([255,255,255]))).rgb();return new Xe(f.concat([this._rgb[3]]))}return Sl.apply(void 0,this._rgb.slice(0,3))};var Sl=function(n,i,o){return n=Er(n),i=Er(i),o=Er(o),.2126*n+.7152*i+.0722*o},Er=function(n){return n/=255,n<=.03928?n/12.92:El((n+.055)/1.055,2.4)},ie={},ka=R,Ta=I.type,Bt=ie,Sa=function(n,i,o){o===void 0&&(o=.5);for(var l=[],d=arguments.length-3;d-- >0;)l[d]=arguments[d+3];var f=l[0]||"lrgb";if(!Bt[f]&&!l.length&&(f=Object.keys(Bt)[0]),!Bt[f])throw new Error("interpolation mode "+f+" is not defined");return Ta(n)!=="object"&&(n=new ka(n)),Ta(i)!=="object"&&(i=new ka(i)),Bt[f](n,i,o).alpha(n.alpha()+o*(i.alpha()-n.alpha()))},Ca=R,Cl=Sa;Ca.prototype.mix=Ca.prototype.interpolate=function(n,i){i===void 0&&(i=.5);for(var o=[],l=arguments.length-2;l-- >0;)o[l]=arguments[l+2];return Cl.apply(void 0,[this,n,i].concat(o))};var Aa=R;Aa.prototype.premultiply=function(n){n===void 0&&(n=!1);var i=this._rgb,o=i[3];return n?(this._rgb=[i[0]*o,i[1]*o,i[2]*o,o],this):new Aa([i[0]*o,i[1]*o,i[2]*o,o],"rgb")};var kr=R,Al=$t;kr.prototype.saturate=function(n){n===void 0&&(n=1);var i=this,o=i.lch();return o[1]+=Al.Kn*n,o[1]<0&&(o[1]=0),new kr(o,"lch").alpha(i.alpha(),!0)},kr.prototype.desaturate=function(n){return n===void 0&&(n=1),this.saturate(-n)};var Ra=R,Pa=I.type;Ra.prototype.set=function(n,i,o){o===void 0&&(o=!1);var l=n.split("."),d=l[0],f=l[1],u=this[d]();if(f){var p=d.indexOf(f)-(d.substr(0,2)==="ok"?2:0);if(p>-1){if(Pa(i)=="string")switch(i.charAt(0)){case"+":u[p]+=+i;break;case"-":u[p]+=+i;break;case"*":u[p]*=+i.substr(1);break;case"/":u[p]/=+i.substr(1);break;default:u[p]=+i}else if(Pa(i)==="number")u[p]=i;else throw new Error("unsupported value for Color.set");var v=new Ra(u,d);return o?(this._rgb=v._rgb,this):v}throw new Error("unknown channel "+f+" in mode "+d)}else return u};var Rl=R,Pl=function(n,i,o){var l=n._rgb,d=i._rgb;return new Rl(l[0]+o*(d[0]-l[0]),l[1]+o*(d[1]-l[1]),l[2]+o*(d[2]-l[2]),"rgb")};ie.rgb=Pl;var Ol=R,Tr=Math.sqrt,Qe=Math.pow,Nl=function(n,i,o){var l=n._rgb,d=l[0],f=l[1],u=l[2],p=i._rgb,v=p[0],b=p[1],_=p[2];return new Ol(Tr(Qe(d,2)*(1-o)+Qe(v,2)*o),Tr(Qe(f,2)*(1-o)+Qe(b,2)*o),Tr(Qe(u,2)*(1-o)+Qe(_,2)*o),"rgb")};ie.lrgb=Nl;var Dl=R,Ml=function(n,i,o){var l=n.lab(),d=i.lab();return new Dl(l[0]+o*(d[0]-l[0]),l[1]+o*(d[1]-l[1]),l[2]+o*(d[2]-l[2]),"lab")};ie.lab=Ml;var Oa=R,Ze=function(n,i,o,l){var d,f,u,p;l==="hsl"?(u=n.hsl(),p=i.hsl()):l==="hsv"?(u=n.hsv(),p=i.hsv()):l==="hcg"?(u=n.hcg(),p=i.hcg()):l==="hsi"?(u=n.hsi(),p=i.hsi()):l==="lch"||l==="hcl"?(l="hcl",u=n.hcl(),p=i.hcl()):l==="oklch"&&(u=n.oklch().reverse(),p=i.oklch().reverse());var v,b,_,k,y,S;(l.substr(0,1)==="h"||l==="oklch")&&(d=u,v=d[0],_=d[1],y=d[2],f=p,b=f[0],k=f[1],S=f[2]);var T,O,$,x;return!isNaN(v)&&!isNaN(b)?(b>v&&b-v>180?x=b-(v+360):b<v&&v-b>180?x=b+360-v:x=b-v,O=v+o*x):isNaN(v)?isNaN(b)?O=Number.NaN:(O=b,(y==1||y==0)&&l!="hsv"&&(T=k)):(O=v,(S==1||S==0)&&l!="hsv"&&(T=_)),T===void 0&&(T=_+o*(k-_)),$=y+o*(S-y),l==="oklch"?new Oa([$,T,O],l):new Oa([O,T,$],l)},$l=Ze,Na=function(n,i,o){return $l(n,i,o,"lch")};ie.lch=Na,ie.hcl=Na;var Ll=R,Ul=function(n,i,o){var l=n.num(),d=i.num();return new Ll(l+o*(d-l),"num")};ie.num=Ul;var xl=Ze,Fl=function(n,i,o){return xl(n,i,o,"hcg")};ie.hcg=Fl;var Bl=Ze,Hl=function(n,i,o){return Bl(n,i,o,"hsi")};ie.hsi=Hl;var Vl=Ze,zl=function(n,i,o){return Vl(n,i,o,"hsl")};ie.hsl=zl;var jl=Ze,Wl=function(n,i,o){return jl(n,i,o,"hsv")};ie.hsv=Wl;var Gl=R,ql=function(n,i,o){var l=n.oklab(),d=i.oklab();return new Gl(l[0]+o*(d[0]-l[0]),l[1]+o*(d[1]-l[1]),l[2]+o*(d[2]-l[2]),"oklab")};ie.oklab=ql;var Kl=Ze,Jl=function(n,i,o){return Kl(n,i,o,"oklch")};ie.oklch=Jl;var Sr=R,Yl=I.clip_rgb,Cr=Math.pow,Ar=Math.sqrt,Rr=Math.PI,Da=Math.cos,Ma=Math.sin,Xl=Math.atan2,Ql=function(n,i,o){i===void 0&&(i="lrgb"),o===void 0&&(o=null);var l=n.length;o||(o=Array.from(new Array(l)).map(function(){return 1}));var d=l/o.reduce(function(O,$){return O+$});if(o.forEach(function(O,$){o[$]*=d}),n=n.map(function(O){return new Sr(O)}),i==="lrgb")return Zl(n,o);for(var f=n.shift(),u=f.get(i),p=[],v=0,b=0,_=0;_<u.length;_++)if(u[_]=(u[_]||0)*o[0],p.push(isNaN(u[_])?0:o[0]),i.charAt(_)==="h"&&!isNaN(u[_])){var k=u[_]/180*Rr;v+=Da(k)*o[0],b+=Ma(k)*o[0]}var y=f.alpha()*o[0];n.forEach(function(O,$){var x=O.get(i);y+=O.alpha()*o[$+1];for(var H=0;H<u.length;H++)if(!isNaN(x[H]))if(p[H]+=o[$+1],i.charAt(H)==="h"){var Z=x[H]/180*Rr;v+=Da(Z)*o[$+1],b+=Ma(Z)*o[$+1]}else u[H]+=x[H]*o[$+1]});for(var S=0;S<u.length;S++)if(i.charAt(S)==="h"){for(var T=Xl(b/p[S],v/p[S])/Rr*180;T<0;)T+=360;for(;T>=360;)T-=360;u[S]=T}else u[S]=u[S]/p[S];return y/=l,new Sr(u,i).alpha(y>.99999?1:y,!0)},Zl=function(n,i){for(var o=n.length,l=[0,0,0,0],d=0;d<n.length;d++){var f=n[d],u=i[d]/o,p=f._rgb;l[0]+=Cr(p[0],2)*u,l[1]+=Cr(p[1],2)*u,l[2]+=Cr(p[2],2)*u,l[3]+=p[3]*u}return l[0]=Ar(l[0]),l[1]=Ar(l[1]),l[2]=Ar(l[2]),l[3]>.9999999&&(l[3]=1),new Sr(Yl(l))},le=K,et=I.type,eu=Math.pow,Pr=function(n){var i="rgb",o=le("#ccc"),l=0,d=[0,1],f=[],u=[0,0],p=!1,v=[],b=!1,_=0,k=1,y=!1,S={},T=!0,O=1,$=function(w){if(w=w||["#fff","#000"],w&&et(w)==="string"&&le.brewer&&le.brewer[w.toLowerCase()]&&(w=le.brewer[w.toLowerCase()]),et(w)==="array"){w.length===1&&(w=[w[0],w[0]]),w=w.slice(0);for(var C=0;C<w.length;C++)w[C]=le(w[C]);f.length=0;for(var M=0;M<w.length;M++)f.push(M/(w.length-1))}return ne(),v=w},x=function(w){if(p!=null){for(var C=p.length-1,M=0;M<C&&w>=p[M];)M++;return M-1}return 0},H=function(w){return w},Z=function(w){return w},Q=function(w,C){var M,N;if(C==null&&(C=!1),isNaN(w)||w===null)return o;if(C)N=w;else if(p&&p.length>2){var ee=x(w);N=ee/(p.length-2)}else k!==_?N=(w-_)/(k-_):N=1;N=Z(N),C||(N=H(N)),O!==1&&(N=eu(N,O)),N=u[0]+N*(1-u[0]-u[1]),N=Math.min(1,Math.max(0,N));var q=Math.floor(N*1e4);if(T&&S[q])M=S[q];else{if(et(v)==="array")for(var F=0;F<f.length;F++){var V=f[F];if(N<=V){M=v[F];break}if(N>=V&&F===f.length-1){M=v[F];break}if(N>V&&N<f[F+1]){N=(N-V)/(f[F+1]-V),M=le.interpolate(v[F],v[F+1],N,i);break}}else et(v)==="function"&&(M=v(N));T&&(S[q]=M)}return M},ne=function(){return S={}};$(n);var U=function(w){var C=le(Q(w));return b&&C[b]?C[b]():C};return U.classes=function(w){if(w!=null){if(et(w)==="array")p=w,d=[w[0],w[w.length-1]];else{var C=le.analyze(d);w===0?p=[C.min,C.max]:p=le.limits(C,"e",w)}return U}return p},U.domain=function(w){if(!arguments.length)return d;_=w[0],k=w[w.length-1],f=[];var C=v.length;if(w.length===C&&_!==k)for(var M=0,N=Array.from(w);M<N.length;M+=1){var ee=N[M];f.push((ee-_)/(k-_))}else{for(var q=0;q<C;q++)f.push(q/(C-1));if(w.length>2){var F=w.map(function(z,W){return W/(w.length-1)}),V=w.map(function(z){return(z-_)/(k-_)});V.every(function(z,W){return F[W]===z})||(Z=function(z){if(z<=0||z>=1)return z;for(var W=0;z>=V[W+1];)W++;var he=(z-V[W])/(V[W+1]-V[W]),Se=F[W]+he*(F[W+1]-F[W]);return Se})}}return d=[_,k],U},U.mode=function(w){return arguments.length?(i=w,ne(),U):i},U.range=function(w,C){return $(w),U},U.out=function(w){return b=w,U},U.spread=function(w){return arguments.length?(l=w,U):l},U.correctLightness=function(w){return w==null&&(w=!0),y=w,ne(),y?H=function(C){for(var M=Q(0,!0).lab()[0],N=Q(1,!0).lab()[0],ee=M>N,q=Q(C,!0).lab()[0],F=M+(N-M)*C,V=q-F,z=0,W=1,he=20;Math.abs(V)>.01&&he-- >0;)(function(){return ee&&(V*=-1),V<0?(z=C,C+=(W-C)*.5):(W=C,C+=(z-C)*.5),q=Q(C,!0).lab()[0],V=q-F})();return C}:H=function(C){return C},U},U.padding=function(w){return w!=null?(et(w)==="number"&&(w=[w,w]),u=w,U):u},U.colors=function(w,C){arguments.length<2&&(C="hex");var M=[];if(arguments.length===0)M=v.slice(0);else if(w===1)M=[U(.5)];else if(w>1){var N=d[0],ee=d[1]-N;M=tu(0,w,!1).map(function(W){return U(N+W/(w-1)*ee)})}else{n=[];var q=[];if(p&&p.length>2)for(var F=1,V=p.length,z=1<=V;z?F<V:F>V;z?F++:F--)q.push((p[F-1]+p[F])*.5);else q=d;M=q.map(function(W){return U(W)})}return le[C]&&(M=M.map(function(W){return W[C]()})),M},U.cache=function(w){return w!=null?(T=w,U):T},U.gamma=function(w){return w!=null?(O=w,U):O},U.nodata=function(w){return w!=null?(o=le(w),U):o},U};function tu(n,i,o){for(var l=[],d=n<i,f=o?d?i+1:i-1:i,u=n;d?u<f:u>f;d?u++:u--)l.push(u);return l}var vt=R,ru=Pr,nu=function(n){for(var i=[1,1],o=1;o<n;o++){for(var l=[1],d=1;d<=i.length;d++)l[d]=(i[d]||0)+i[d-1];i=l}return i},au=function(n){var i,o,l,d,f,u,p;if(n=n.map(function(y){return new vt(y)}),n.length===2)i=n.map(function(y){return y.lab()}),f=i[0],u=i[1],d=function(y){var S=[0,1,2].map(function(T){return f[T]+y*(u[T]-f[T])});return new vt(S,"lab")};else if(n.length===3)o=n.map(function(y){return y.lab()}),f=o[0],u=o[1],p=o[2],d=function(y){var S=[0,1,2].map(function(T){return(1-y)*(1-y)*f[T]+2*(1-y)*y*u[T]+y*y*p[T]});return new vt(S,"lab")};else if(n.length===4){var v;l=n.map(function(y){return y.lab()}),f=l[0],u=l[1],p=l[2],v=l[3],d=function(y){var S=[0,1,2].map(function(T){return(1-y)*(1-y)*(1-y)*f[T]+3*(1-y)*(1-y)*y*u[T]+3*(1-y)*y*y*p[T]+y*y*y*v[T]});return new vt(S,"lab")}}else if(n.length>=5){var b,_,k;b=n.map(function(y){return y.lab()}),k=n.length-1,_=nu(k),d=function(y){var S=1-y,T=[0,1,2].map(function(O){return b.reduce(function($,x,H){return $+_[H]*Math.pow(S,k-H)*Math.pow(y,H)*x[O]},0)});return new vt(T,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return d},iu=function(n){var i=au(n);return i.scale=function(){return ru(i)},i},Or=K,ue=function(n,i,o){if(!ue[o])throw new Error("unknown blend mode "+o);return ue[o](n,i)},ke=function(n){return function(i,o){var l=Or(o).rgb(),d=Or(i).rgb();return Or.rgb(n(l,d))}},Te=function(n){return function(i,o){var l=[];return l[0]=n(i[0],o[0]),l[1]=n(i[1],o[1]),l[2]=n(i[2],o[2]),l}},su=function(n){return n},ou=function(n,i){return n*i/255},cu=function(n,i){return n>i?i:n},lu=function(n,i){return n>i?n:i},uu=function(n,i){return 255*(1-(1-n/255)*(1-i/255))},hu=function(n,i){return i<128?2*n*i/255:255*(1-2*(1-n/255)*(1-i/255))},du=function(n,i){return 255*(1-(1-i/255)/(n/255))},fu=function(n,i){return n===255?255:(n=255*(i/255)/(1-n/255),n>255?255:n)};ue.normal=ke(Te(su)),ue.multiply=ke(Te(ou)),ue.screen=ke(Te(uu)),ue.overlay=ke(Te(hu)),ue.darken=ke(Te(cu)),ue.lighten=ke(Te(lu)),ue.dodge=ke(Te(fu)),ue.burn=ke(Te(du));for(var pu=ue,Nr=I.type,vu=I.clip_rgb,gu=I.TWOPI,mu=Math.pow,bu=Math.sin,_u=Math.cos,$a=K,yu=function(n,i,o,l,d){n===void 0&&(n=300),i===void 0&&(i=-1.5),o===void 0&&(o=1),l===void 0&&(l=1),d===void 0&&(d=[0,1]);var f=0,u;Nr(d)==="array"?u=d[1]-d[0]:(u=0,d=[d,d]);var p=function(v){var b=gu*((n+120)/360+i*v),_=mu(d[0]+u*v,l),k=f!==0?o[0]+v*f:o,y=k*_*(1-_)/2,S=_u(b),T=bu(b),O=_+y*(-.14861*S+1.78277*T),$=_+y*(-.29227*S-.90649*T),x=_+y*(1.97294*S);return $a(vu([O*255,$*255,x*255,1]))};return p.start=function(v){return v==null?n:(n=v,p)},p.rotations=function(v){return v==null?i:(i=v,p)},p.gamma=function(v){return v==null?l:(l=v,p)},p.hue=function(v){return v==null?o:(o=v,Nr(o)==="array"?(f=o[1]-o[0],f===0&&(o=o[1])):f=0,p)},p.lightness=function(v){return v==null?d:(Nr(v)==="array"?(d=v,u=v[1]-v[0]):(d=[v,v],u=0),p)},p.scale=function(){return $a.scale(p)},p.hue(o),p},wu=R,Iu="0123456789abcdef",Eu=Math.floor,ku=Math.random,Tu=function(){for(var n="#",i=0;i<6;i++)n+=Iu.charAt(Eu(ku()*16));return new wu(n,"hex")},Dr=E,La=Math.log,Su=Math.pow,Cu=Math.floor,Au=Math.abs,Ua=function(n,i){i===void 0&&(i=null);var o={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return Dr(n)==="object"&&(n=Object.values(n)),n.forEach(function(l){i&&Dr(l)==="object"&&(l=l[i]),l!=null&&!isNaN(l)&&(o.values.push(l),o.sum+=l,l<o.min&&(o.min=l),l>o.max&&(o.max=l),o.count+=1)}),o.domain=[o.min,o.max],o.limits=function(l,d){return xa(o,l,d)},o},xa=function(n,i,o){i===void 0&&(i="equal"),o===void 0&&(o=7),Dr(n)=="array"&&(n=Ua(n));var l=n.min,d=n.max,f=n.values.sort(function($r,Lr){return $r-Lr});if(o===1)return[l,d];var u=[];if(i.substr(0,1)==="c"&&(u.push(l),u.push(d)),i.substr(0,1)==="e"){u.push(l);for(var p=1;p<o;p++)u.push(l+p/o*(d-l));u.push(d)}else if(i.substr(0,1)==="l"){if(l<=0)throw new Error("Logarithmic scales are only possible for values > 0");var v=Math.LOG10E*La(l),b=Math.LOG10E*La(d);u.push(l);for(var _=1;_<o;_++)u.push(Su(10,v+_/o*(b-v)));u.push(d)}else if(i.substr(0,1)==="q"){u.push(l);for(var k=1;k<o;k++){var y=(f.length-1)*k/o,S=Cu(y);if(S===y)u.push(f[S]);else{var T=y-S;u.push(f[S]*(1-T)+f[S+1]*T)}}u.push(d)}else if(i.substr(0,1)==="k"){var O,$=f.length,x=new Array($),H=new Array(o),Z=!0,Q=0,ne=null;ne=[],ne.push(l);for(var U=1;U<o;U++)ne.push(l+U/o*(d-l));for(ne.push(d);Z;){for(var w=0;w<o;w++)H[w]=0;for(var C=0;C<$;C++)for(var M=f[C],N=Number.MAX_VALUE,ee=void 0,q=0;q<o;q++){var F=Au(ne[q]-M);F<N&&(N=F,ee=q),H[ee]++,x[C]=ee}for(var V=new Array(o),z=0;z<o;z++)V[z]=null;for(var W=0;W<$;W++)O=x[W],V[O]===null?V[O]=f[W]:V[O]+=f[W];for(var he=0;he<o;he++)V[he]*=1/H[he];Z=!1;for(var Se=0;Se<o;Se++)if(V[Se]!==ne[Se]){Z=!0;break}ne=V,Q++,Q>200&&(Z=!1)}for(var Ce={},tt=0;tt<o;tt++)Ce[tt]=[];for(var rt=0;rt<$;rt++)O=x[rt],Ce[O].push(f[rt]);for(var be=[],xe=0;xe<o;xe++)be.push(Ce[xe][0]),be.push(Ce[xe][Ce[xe].length-1]);be=be.sort(function($r,Lr){return $r-Lr}),u.push(be[0]);for(var gt=1;gt<be.length;gt+=2){var Fe=be[gt];!isNaN(Fe)&&u.indexOf(Fe)===-1&&u.push(Fe)}}return u},Fa={analyze:Ua,limits:xa},Ba=R,Ru=function(n,i){n=new Ba(n),i=new Ba(i);var o=n.luminance(),l=i.luminance();return o>l?(o+.05)/(l+.05):(l+.05)/(o+.05)},Ha=R,me=Math.sqrt,Y=Math.pow,Pu=Math.min,Ou=Math.max,Va=Math.atan2,za=Math.abs,Ht=Math.cos,ja=Math.sin,Nu=Math.exp,Wa=Math.PI,Du=function(n,i,o,l,d){o===void 0&&(o=1),l===void 0&&(l=1),d===void 0&&(d=1);var f=function(Fe){return 360*Fe/(2*Wa)},u=function(Fe){return 2*Wa*Fe/360};n=new Ha(n),i=new Ha(i);var p=Array.from(n.lab()),v=p[0],b=p[1],_=p[2],k=Array.from(i.lab()),y=k[0],S=k[1],T=k[2],O=(v+y)/2,$=me(Y(b,2)+Y(_,2)),x=me(Y(S,2)+Y(T,2)),H=($+x)/2,Z=.5*(1-me(Y(H,7)/(Y(H,7)+Y(25,7)))),Q=b*(1+Z),ne=S*(1+Z),U=me(Y(Q,2)+Y(_,2)),w=me(Y(ne,2)+Y(T,2)),C=(U+w)/2,M=f(Va(_,Q)),N=f(Va(T,ne)),ee=M>=0?M:M+360,q=N>=0?N:N+360,F=za(ee-q)>180?(ee+q+360)/2:(ee+q)/2,V=1-.17*Ht(u(F-30))+.24*Ht(u(2*F))+.32*Ht(u(3*F+6))-.2*Ht(u(4*F-63)),z=q-ee;z=za(z)<=180?z:q<=ee?z+360:z-360,z=2*me(U*w)*ja(u(z)/2);var W=y-v,he=w-U,Se=1+.015*Y(O-50,2)/me(20+Y(O-50,2)),Ce=1+.045*C,tt=1+.015*C*V,rt=30*Nu(-Y((F-275)/25,2)),be=2*me(Y(C,7)/(Y(C,7)+Y(25,7))),xe=-be*ja(2*u(rt)),gt=me(Y(W/(o*Se),2)+Y(he/(l*Ce),2)+Y(z/(d*tt),2)+xe*(he/(l*Ce))*(z/(d*tt)));return Ou(0,Pu(100,gt))},Ga=R,Mu=function(n,i,o){o===void 0&&(o="lab"),n=new Ga(n),i=new Ga(i);var l=n.get(o),d=i.get(o),f=0;for(var u in l){var p=(l[u]||0)-(d[u]||0);f+=p*p}return Math.sqrt(f)},$u=R,Lu=function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];try{return new(Function.prototype.bind.apply($u,[null].concat(n))),!0}catch{return!1}},qa=K,Ka=Pr,Uu={cool:function(){return Ka([qa.hsl(180,1,.9),qa.hsl(250,.7,.4)])},hot:function(){return Ka(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Vt={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Mr=0,Ja=Object.keys(Vt);Mr<Ja.length;Mr+=1){var Ya=Ja[Mr];Vt[Ya.toLowerCase()]=Vt[Ya]}var xu=Vt,X=K;X.average=Ql,X.bezier=iu,X.blend=pu,X.cubehelix=yu,X.mix=X.interpolate=Sa,X.random=Tu,X.scale=Pr,X.analyze=Fa.analyze,X.contrast=Ru,X.deltaE=Du,X.distance=Mu,X.limits=Fa.limits,X.valid=Lu,X.scales=Uu,X.colors=ca,X.brewer=xu;var Fu=X;return Fu})})(vs);var Lp=vs.exports;const Up=$p(Lp);class xp{static loadColor(e,t){const a=document.querySelector(":root"),s=Up(t);if(a){const c=s.hex(),h=s.rgb(),g=s.hsl();a.style.setProperty(`--color-${e}`,c),a.style.setProperty(`--color-${e}-rgb`,h.join(",")),a.style.setProperty(`--color-${e}-hsl`,`${g[0]}, ${g[1]*100}%`)}}static load(e){["primary","secondary","text"].forEach(a=>this.loadColor(a,e.theme[a])),Be.loadConfig(e)}}function Fp(r){let e,t,a,s,c=r[0].config?.name+"",h,g,m;return{c(){e=oe("div"),t=oe("p"),a=nt("Google Authentication for "),s=oe("b"),h=nt(c),g=nt("..."),this.h()},l(E){e=ce(E,"DIV",{class:!0});var A=Ie(e);t=ce(A,"P",{});var D=Ie(t);a=at(D,"Google Authentication for "),s=ce(D,"B",{class:!0});var L=Ie(s);h=at(L,c),L.forEach(ae),g=at(D,"..."),D.forEach(ae),A.forEach(ae),this.h()},h(){se(s,"class","svelte-xzzxnu"),se(e,"class","content__message svelte-xzzxnu")},m(E,A){Tt(E,e,A),te(e,t),te(t,a),te(t,s),te(s,h),te(t,g)},p(E,A){A&1&&c!==(c=E[0].config?.name+"")&&Wu(h,c)},i(E){E&&(m||Vu(()=>{m=Gu(e,Yu,{y:5,duration:1e3}),m.start()}))},o:Ne,d(E){E&&ae(e)}}}function Bp(r){let e,t,a;return t=new eh({}),{c(){e=oe("div"),Jr(t.$$.fragment),this.h()},l(s){e=ce(s,"DIV",{class:!0});var c=Ie(e);Yr(t.$$.fragment,c),c.forEach(ae),this.h()},h(){se(e,"class","content__loader")},m(s,c){Tt(s,e,c),Xr(t,e,null),a=!0},p:Ne,i(s){a||(bt(t.$$.fragment,s),a=!0)},o(s){mt(t.$$.fragment,s),a=!1},d(s){s&&ae(e),Qr(t)}}}function Hp(r){let e,t,a,s,c,h,g,m,E,A;a=new Ku({props:{status:Ju.Pending}});const D=[Bp,Fp],L=[];function J(B,I){return B[0].loading?0:1}return h=J(r),g=L[h]=D[h](r),E=new Qu({}),{c(){e=oe("div"),t=oe("div"),Jr(a.$$.fragment),s=Gr(),c=oe("div"),g.c(),m=Gr(),Jr(E.$$.fragment),this.h()},l(B){e=ce(B,"DIV",{class:!0});var I=Ie(e);t=ce(I,"DIV",{class:!0});var j=Ie(t);Yr(a.$$.fragment,j),j.forEach(ae),s=Kr(I),c=ce(I,"DIV",{class:!0});var ge=Ie(c);g.l(ge),m=Kr(ge),Yr(E.$$.fragment,ge),ge.forEach(ae),I.forEach(ae),this.h()},h(){se(t,"class","content__head"),se(c,"class","content__body"),se(e,"class","content svelte-xzzxnu")},m(B,I){Tt(B,e,I),te(e,t),Xr(a,t,null),te(e,s),te(e,c),L[h].m(c,null),te(c,m),Xr(E,c,null),A=!0},p(B,[I]){let j=h;h=J(B),h===j?L[h].p(B,I):(ju(),mt(L[j],1,1,()=>{L[j]=null}),zu(),g=L[h],g?g.p(B,I):(g=L[h]=D[h](B),g.c()),bt(g,1),g.m(c,m))},i(B){A||(bt(a.$$.fragment,B),bt(g),bt(E.$$.fragment,B),A=!0)},o(B){mt(a.$$.fragment,B),mt(g),mt(E.$$.fragment,B),A=!1},d(B){B&&ae(e),Qr(a),L[h].d(),Qr(E)}}}function Vp(r,e,t){let a;Bu(r,Be,h=>t(0,a=h));const s=h=>{Be.stopLoader(),Be.raiseError(h),zt.length>0?jt(`${zt}/${_t.Failure}`):jt(_t.Failure)},c=h=>{Be.clearError(),Be.registerToken(h),zt.length>0?jt(`${zt}/${_t.Success}`):jt(_t.Success)};return Hu(()=>{Ur.init(window.opener)?Ur.send(xr.Loaded).on(xr.Config,async h=>{try{if(h){xp.load(h),Be.stopLoader();const g=await Dp.login(h.firebase);c(g)}}catch(g){const m=g;s(m.message),Ur.send(xr.AuthFailed,{error:m.toObject()})}}):s("Fireguard has to be opened by an external page.")}),[a]}class qp extends cn{constructor(e){super(),ln(this,e,Vp,Hp,on,{})}}export{qp as component};
