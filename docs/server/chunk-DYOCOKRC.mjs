import './polyfills.server.mjs';
import{$ as He,A as l,B as u,C as E,D as Oe,E as m,F as ke,G as p,H as Pe,I as le,J as ue,K as de,L as ce,M as P,N as Te,P as je,U as Re,W as Ge,X as T,Y as M,Z as he,a as we,aa as Ue,b as Ae,ba as W,c as Ee,ca as Be,d as xe,da as Le,e as L,f as N,g as ie,ga as We,h as c,i as A,j as V,k as h,l as y,m as Fe,ma as fe,n as Ie,o as Se,p as re,q as b,r as oe,s as _,t as a,u as se,v as O,w as D,x as Ne,y as k,z as ae}from"./chunk-UUC3KYPK.mjs";import{a as f,b as v}from"./chunk-5XUXGTUW.mjs";var Et=[],$e=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=h({type:t});static \u0275inj=c({imports:[fe.forRoot(Et),fe]})}return t})();var d=[];for(let t=0;t<256;++t)d.push((t+256).toString(16).slice(1));function ze(t,e=0){return(d[t[e+0]]+d[t[e+1]]+d[t[e+2]]+d[t[e+3]]+"-"+d[t[e+4]]+d[t[e+5]]+"-"+d[t[e+6]]+d[t[e+7]]+"-"+d[t[e+8]]+d[t[e+9]]+"-"+d[t[e+10]]+d[t[e+11]]+d[t[e+12]]+d[t[e+13]]+d[t[e+14]]+d[t[e+15]]).toLowerCase()}import xt from"crypto";var z=new Uint8Array(256),$=z.length;function pe(){return $>z.length-16&&(xt.randomFillSync(z),$=0),z.slice($,$+=16)}import Ft from"crypto";var me={randomUUID:Ft.randomUUID};function It(t,e,i){if(me.randomUUID&&!e&&!t)return me.randomUUID();t=t||{};let n=t.random||(t.rng||pe)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){i=i||0;for(let r=0;r<16;++r)e[i+r]=n[r];return e}return ze(n)}var w=It;var qe=(()=>{class t{characters=[{id:w(),name:"Krillin",power:1e3},{id:w(),name:"Goku",power:9e3},{id:w(),name:"Vegeta",power:7900},{id:w(),name:"Bills",power:0}];onNewCharacter(i){let n=f({id:w()},i);this.characters.push(n)}deleteCharacterById(i){this.characters=this.characters.filter(n=>n.id!==i)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ie({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Nt=(t,e)=>({"bg-gradient-to-r from-amber-900 via-amber-600 to-orange-900":t,"bg-gradient-to-r from-indigo-700  to-rose-900":e});function Ot(t,e){if(t&1){let i=Oe();l(0,"li",3)(1,"div")(2,"strong",4),p(3),u(),l(4,"span")(5,"Strong"),p(6,"Name: "),u(),p(7),u(),l(8,"span",5)(9,"strong"),p(10,"Power: "),u(),p(11),u()(),l(12,"button",6),m("click",function(){let r=Ie(i).$implicit,o=ke();return Se(o.onDeleteCharacter(r.id))}),l(13,"strong"),p(14,"X"),u()()()}if(t&2){let i=e.$implicit,n=e.index,r=e.last,o=e.even;k("ngClass",Te(4,Nt,r,o)),_(3),le("",n+1,". - "),_(4),le("",i.name," - "),_(4),Pe(i.power)}}var Ze=(()=>{class t{onDeleteId=new b;caracterList=[{name:"Trunk",power:2e4}];onDeleteCharacter(i){i&&this.onDeleteId.emit(i)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["app-dbz-list"]],inputs:{caracterList:"caracterList"},outputs:{onDeleteId:"onDeleteId"},decls:4,vars:1,consts:[[1,"text-2xl","font-semibold","mb-4"],[1,"space-y-2"],["class",`flex justify-between items-center
           bg-gradient-to-r from-gray-700
           via-gray-600 to-gray-700 p-3
           rounded-md transform hover:scale-105
           transition duration-300
           `,3,"ngClass",4,"ngFor","ngForOf"],[1,"flex","justify-between","items-center","bg-gradient-to-r","from-gray-700","via-gray-600","to-gray-700","p-3","rounded-md","transform","hover:scale-105","transition","duration-300",3,"ngClass"],[1,""],[1,"text-yellow-400","font-semibold"],[1,"rounded-md","p-2","bg-red-700","hover:bg-white","text-white","hover:text-red-700",3,"click"]],template:function(n,r){n&1&&(l(0,"h4",0),p(1,"Listado"),u(),l(2,"ul",1),Ne(3,Ot,15,7,"li",2),u()),n&2&&(_(3),k("ngForOf",r.caracterList))},dependencies:[He,Ue],styles:["[_nghost-%COMP%]{display:block}"]})}return t})();var nt=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(a(se),a(oe))},e.\u0275dir=y({type:e});let t=e;return t})(),it=(()=>{let e=class e extends nt{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=re(e)))(o||e)}})(),e.\u0275dir=y({type:e,features:[D]});let t=e;return t})(),ve=new A("");var Pt={provide:ve,useExisting:N(()=>ee),multi:!0};function Tt(){let t=he()?he().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var jt=new A(""),ee=(()=>{let e=class e extends nt{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Tt())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(a(se),a(oe),a(jt,8))},e.\u0275dir=y({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&m("input",function(C){return o._handleInput(C.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(C){return o._compositionEnd(C.target.value)})},features:[P([Pt]),D]});let t=e;return t})();var rt=new A(""),ot=new A("");function st(t){return t!=null}function at(t){return je(t)?Ae(t):t}function lt(t){let e={};return t.forEach(i=>{e=i!=null?f(f({},e),i):e}),Object.keys(e).length===0?null:e}function ut(t,e){return e.map(i=>i(t))}function Rt(t){return!t.validate}function dt(t){return t.map(e=>Rt(e)?e:i=>e.validate(i))}function Gt(t){if(!t)return null;let e=t.filter(st);return e.length==0?null:function(i){return lt(ut(i,e))}}function ye(t){return t!=null?Gt(dt(t)):null}function Ht(t){if(!t)return null;let e=t.filter(st);return e.length==0?null:function(i){let n=ut(i,e).map(at);return xe(n).pipe(Ee(lt))}}function _e(t){return t!=null?Ht(dt(t)):null}function Xe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ut(t){return t._rawValidators}function Bt(t){return t._rawAsyncValidators}function ge(t){return t?Array.isArray(t)?t:[t]:[]}function Z(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ke(t,e){let i=ge(e);return ge(t).forEach(r=>{Z(i,r)||i.push(r)}),i}function Ye(t,e){return ge(e).filter(i=>!Z(t,i))}var X=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ye(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=_e(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},I=class extends X{get formDirective(){return null}get path(){return null}},B=class extends X{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},K=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Lt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Qn=v(f({},Lt),{"[class.ng-submitted]":"isSubmitted"}),ct=(()=>{let e=class e extends K{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(a(B,2))},e.\u0275dir=y({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ae("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[D]});let t=e;return t})(),ht=(()=>{let e=class e extends K{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(a(I,10))},e.\u0275dir=y({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ae("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[D]});let t=e;return t})();var j="VALID",q="INVALID",x="PENDING",R="DISABLED",S=class{},Y=class extends S{constructor(e,i){super(),this.value=e,this.source=i}},H=class extends S{constructor(e,i){super(),this.pristine=e,this.source=i}},U=class extends S{constructor(e,i){super(),this.touched=e,this.source=i}},F=class extends S{constructor(e,i){super(),this.status=e,this.source=i}};function ft(t){return(te(t)?t.validators:t)||null}function Wt(t){return Array.isArray(t)?ye(t):t||null}function pt(t,e){return(te(e)?e.asyncValidators:t)||null}function $t(t){return Array.isArray(t)?_e(t):t||null}function te(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function zt(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new L(1e3,"");if(!n[i])throw new L(1001,"")}function qt(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new L(1002,"")})}var J=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=T(()=>this.statusReactive()),this.statusReactive=O(void 0),this._pristine=T(()=>this.pristineReactive()),this.pristineReactive=O(!0),this._touched=T(()=>this.touchedReactive()),this.touchedReactive=O(!1),this._events=new we,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return M(this.statusReactive)}set status(e){M(()=>this.statusReactive.set(e))}get valid(){return this.status===j}get invalid(){return this.status===q}get pending(){return this.status==x}get disabled(){return this.status===R}get enabled(){return this.status!==R}get pristine(){return M(this.pristineReactive)}set pristine(e){M(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return M(this.touchedReactive)}set touched(e){M(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ke(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ke(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ye(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ye(e,this._rawAsyncValidators))}hasValidator(e){return Z(this._rawValidators,e)}hasAsyncValidator(e){return Z(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(v(f({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new U(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new U(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(v(f({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new H(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new H(!0,n))}markAsPending(e={}){this.status=x;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new F(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(v(f({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=R,this.errors=null,this._forEachChild(r=>{r.disable(v(f({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Y(this.value,n)),this._events.next(new F(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(v(f({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=j,this._forEachChild(n=>{n.enable(v(f({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(v(f({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===j||this.status===x)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Y(this.value,i)),this._events.next(new F(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(v(f({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?R:j}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=x,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=at(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new F(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?R:this.errors?q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(x)?x:this._anyControlsHaveStatus(q)?q:j}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new H(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new U(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){te(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Wt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=$t(this._rawAsyncValidators)}},Q=class extends J{constructor(e,i,n){super(ft(i),pt(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){qt(this,!0,e),Object.keys(e).forEach(n=>{zt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i,this),this._updateTouched(i,this),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,o)=>{n=i(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Ce=new A("CallSetDisabledState",{providedIn:"root",factory:()=>be}),be="always";function Zt(t,e){return[...e.path,t]}function mt(t,e,i=be){gt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Kt(t,e),Jt(t,e),Yt(t,e),Xt(t,e)}function Je(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Xt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function gt(t,e){let i=Ut(t);e.validator!==null?t.setValidators(Xe(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Bt(t);e.asyncValidator!==null?t.setAsyncValidators(Xe(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Je(e._rawValidators,r),Je(e._rawAsyncValidators,r)}function Kt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&vt(t,e)})}function Yt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&vt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function vt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Jt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Qt(t,e){t==null,gt(t,e)}function en(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function tn(t){return Object.getPrototypeOf(t.constructor)===it}function nn(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function rn(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===ee?i=o:tn(o)?n=o:r=o}),r||n||i||null}var on={provide:I,useExisting:N(()=>Ve)},G=Promise.resolve(),Ve=(()=>{let e=class e extends I{get submitted(){return M(this.submittedReactive)}constructor(n,r,o){super(),this.callSetDisabledState=o,this._submitted=T(()=>this.submittedReactive()),this.submittedReactive=O(!1),this._directives=new Set,this.ngSubmit=new b,this.form=new Q({},ye(n),_e(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(n){G.then(()=>{let r=this._findContainer(n.path);n.control=r.registerControl(n.name,n.control),mt(n.control,n,this.callSetDisabledState),n.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(n)})}getControl(n){return this.form.get(n.path)}removeControl(n){G.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name),this._directives.delete(n)})}addFormGroup(n){G.then(()=>{let r=this._findContainer(n.path),o=new Q({});Qt(o,n),r.registerControl(n.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(n){G.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name)})}getFormGroup(n){return this.form.get(n.path)}updateModel(n,r){G.then(()=>{this.form.get(n.path).setValue(r)})}setValue(n){this.control.setValue(n)}onSubmit(n){return this.submittedReactive.set(!0),nn(this.form,this._directives),this.ngSubmit.emit(n),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(n){return n.pop(),n.length?this.form.get(n):this.form}};e.\u0275fac=function(r){return new(r||e)(a(rt,10),a(ot,10),a(Ce,8))},e.\u0275dir=y({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&m("submit",function(C){return o.onSubmit(C)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[P([on]),D]});let t=e;return t})();function Qe(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function et(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var sn=class extends J{constructor(e=null,i,n){super(ft(i),pt(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),te(i)&&(i.nonNullable||i.initialValueIsDefault)&&(et(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Qe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Qe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){et(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var an={provide:B,useExisting:N(()=>De)},tt=Promise.resolve(),De=(()=>{let e=class e extends B{constructor(n,r,o,s,C,At){super(),this._changeDetectorRef=C,this.callSetDisabledState=At,this.control=new sn,this._registered=!1,this.name="",this.update=new b,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=rn(this,s)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),en(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){mt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){tt.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&Ge(r);tt.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Zt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(a(I,9),a(rt,10),a(ot,10),a(ve,10),a(Re,8),a(Ce,8))},e.\u0275dir=y({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[P([an]),D,Fe]});let t=e;return t})(),yt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=y({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})(),ln={provide:ve,useExisting:N(()=>Me),multi:!0},Me=(()=>{let e=class e extends it{writeValue(n){let r=n??"";this.setProperty("value",r)}registerOnChange(n){this.onChange=r=>{n(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=re(e)))(o||e)}})(),e.\u0275dir=y({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,o){r&1&&m("input",function(C){return o.onChange(C.target.value)})("blur",function(){return o.onTouched()})},features:[P([ln]),D]});let t=e;return t})();var un=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({});let t=e;return t})();var _t=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Ce,useValue:n.callSetDisabledState??be}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({imports:[un]});let t=e;return t})();var Ct=(()=>{class t{onNewCharacter=new b;character={name:"",power:0};emitCharacter(){this.character.name.length!==0&&(this.onNewCharacter.emit(this.character),this.character={name:"",power:0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["app-dbz-add-character"]],outputs:{onNewCharacter:"onNewCharacter"},decls:8,vars:2,consts:[[1,"text-2xl","font-semibold","mb-4"],[1,"space-y-4",3,"ngSubmit"],["name","name","type","text","placeholder","Nombre",1,"w-full","p-3","bg-gradient-to-r","from-gray-700","via-gray-600","to-gray-700","text-white","rounded-md","focus:outline-none","focus:ring-2","focus:ring-yellow-400","transform","hover:scale-105","transition","duration-300","ease-in-out",3,"ngModelChange","ngModel"],["name","power","type","number","placeholder","Poder",1,"w-full","p-3","bg-gradient-to-r","from-gray-700","via-gray-600","to-gray-700","text-white","rounded-md","focus:outline-none","focus:ring-2","focus:ring-yellow-400","transform","hover:scale-105","transition","duration-300","ease-in-out",3,"ngModelChange","ngModel"],["type","submit",1,"w-full","py-3","bg-gradient-to-r","from-yellow-500","via-yellow-400","to-yellow-500","text-gray-900","font-semibold","rounded-md","hover:bg-yellow-400","transform","hover:scale-105","transition","duration-300","ease-in-out"]],template:function(n,r){n&1&&(l(0,"h4",0),p(1,"Agregar Personaje"),u(),l(2,"form",1),m("ngSubmit",function(){return r.emitCharacter()}),l(3,"input",2),ce("ngModelChange",function(s){return de(r.character.name,s)||(r.character.name=s),s}),u(),l(4,"input",3),ce("ngModelChange",function(s){return de(r.character.power,s)||(r.character.power=s),s}),u(),l(5,"button",4),p(6," Agregar "),u()(),E(7,"strong")),n&2&&(_(3),ue("ngModel",r.character.name),_(),ue("ngModel",r.character.power))},dependencies:[yt,ee,Me,ct,ht,De,Ve],styles:["[_nghost-%COMP%]{display:block}"]})}return t})();var bt=(()=>{class t{dbzService;constructor(i){this.dbzService=i}get Characters(){return[...this.dbzService.characters]}onDeleteCharacter(i){this.dbzService.deleteCharacterById(i)}onNewCharacter(i){this.dbzService.onNewCharacter(i)}static \u0275fac=function(n){return new(n||t)(a(qe))};static \u0275cmp=V({type:t,selectors:[["app-dbz-main-page"]],decls:10,vars:1,consts:[[1,"bg-gradient-to-r","from-gray-900","via-gray-800","to-gray-900","text-white"],[1,"container","mx-auto","py-10"],[1,"text-4xl","font-bold","text-center","mb-8"],[1,"border-gray-700","mb-10"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-8"],[1,"bg-gradient-to-r","from-gray-800","via-gray-700","to-gray-800","p-6","rounded-lg","shadow-lg","transform","hover:scale-105","transition","duration-300","ease-in-out"],[3,"onDeleteId","caracterList"],[3,"onNewCharacter"]],template:function(n,r){n&1&&(l(0,"div",0)(1,"div",1)(2,"h1",2),p(3,"DBZ Main"),u(),E(4,"hr",3),l(5,"div",4)(6,"div",5)(7,"app-dbz-list",6),m("onDeleteId",function(s){return r.onDeleteCharacter(s)}),u()(),l(8,"div",5)(9,"app-dbz-add-character",7),m("onNewCharacter",function(s){return r.onNewCharacter(s)}),u()()()()()),n&2&&(_(7),k("caracterList",r.Characters))},dependencies:[Ze,Ct],encapsulation:2})}return t})();var ne=(()=>{class t{title="Mi primera App de Angular";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(n,r){n&1&&E(0,"app-dbz-main-page")},dependencies:[bt],encapsulation:2})}return t})();var Vt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=h({type:t});static \u0275inj=c({})}return t})();var Dt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=h({type:t});static \u0275inj=c({imports:[W]})}return t})();var Mt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=h({type:t});static \u0275inj=c({imports:[W,_t]})}return t})();var wt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=h({type:t,bootstrap:[ne]});static \u0275inj=c({providers:[Le()],imports:[Be,$e,Vt,Dt,Mt]})}return t})();var fn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=h({type:t,bootstrap:[ne]});static \u0275inj=c({imports:[wt,We]})}return t})();export{fn as a};
