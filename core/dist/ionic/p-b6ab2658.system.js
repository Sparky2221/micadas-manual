var __awaiter=this&&this.__awaiter||function(n,e,r,t){function i(n){return n instanceof r?n:new r((function(e){e(n)}))}return new(r||(r=Promise))((function(r,a){function u(n){try{s(t.next(n))}catch(e){a(e)}}function o(n){try{s(t["throw"](n))}catch(e){a(e)}}function s(n){n.done?r(n.value):i(n.value).then(u,o)}s((t=t.apply(n,e||[])).next())}))};var __generator=this&&this.__generator||function(n,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,i,a,u;return u={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function o(n){return function(e){return s([n,e])}}function s(u){if(t)throw new TypeError("Generator is already executing.");while(r)try{if(t=1,i&&(a=u[0]&2?i["return"]:u[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;if(i=0,a)u=[u[0]&2,a.value];switch(u[0]){case 0:case 1:a=u;break;case 4:r.label++;return{value:u[1],done:false};case 5:r.label++;i=u[1];u=[0];continue;case 7:u=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){r.label=u[1];break}if(u[0]===6&&r.label<a[1]){r.label=a[1];a=u;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(u);break}if(a[2])r.ops.pop();r.trys.pop();continue}u=e.call(n,r)}catch(o){u=[6,o];i=0}finally{t=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-ef6c2508.system.js","./p-ca3589fa.system.js","./p-b5b01e2c.system.js"],(function(n){"use strict";var e,r,t;return{setters:[function(n){e=n.b},function(n){r=n.c},function(n){t=n.MENU_BACK_BUTTON_PRIORITY}],execute:function(){var i=this;var a=function(n){return r().duration(n?400:300)};var u=function(n){var t;var i;var u=n.width+8;var o=r();var s=r();if(n.isEndSide){t=u+"px";i="0px"}else{t=-u+"px";i="0px"}o.addElement(n.menuInnerEl).fromTo("transform","translateX("+t+")","translateX("+i+")");var c=e(n);var f=c==="ios";var l=f?.2:.25;s.addElement(n.backdropEl).fromTo("opacity",.01,l);return a(f).addAnimation([o,s])};var o=function(n){var t;var i;var u=e(n);var o=n.width;if(n.isEndSide){t=-o+"px";i=o+"px"}else{t=o+"px";i=-o+"px"}var s=r().addElement(n.menuInnerEl).fromTo("transform","translateX("+i+")","translateX(0px)");var c=r().addElement(n.contentEl).fromTo("transform","translateX(0px)","translateX("+t+")");var f=r().addElement(n.backdropEl).fromTo("opacity",.01,.32);return a(u==="ios").addAnimation([s,c,f])};var s=function(n){var t=e(n);var i=n.width*(n.isEndSide?-1:1)+"px";var u=r().addElement(n.contentEl).fromTo("transform","translateX(0px)","translateX("+i+")");return a(t==="ios").addAnimation(u)};var c=function(){var n=new Map;var e=[];var r=function(n){return __awaiter(i,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,_(n)];case 1:e=r.sent();if(e){return[2,e.open()]}return[2,false]}}))}))};var a=function(n){return __awaiter(i,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,n!==undefined?_(n):p()];case 1:e=r.sent();if(e!==undefined){return[2,e.close()]}return[2,false]}}))}))};var c=function(n){return __awaiter(i,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,_(n)];case 1:e=r.sent();if(e){return[2,e.toggle()]}return[2,false]}}))}))};var f=function(n,e){return __awaiter(i,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,_(e)];case 1:r=t.sent();if(r){r.disabled=!n}return[2,r]}}))}))};var l=function(n,e){return __awaiter(i,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,_(e)];case 1:r=t.sent();if(r){r.swipeGesture=n}return[2,r]}}))}))};var d=function(n){return __awaiter(i,void 0,void 0,(function(){var e,e;return __generator(this,(function(r){switch(r.label){case 0:if(!(n!=null))return[3,2];return[4,_(n)];case 1:e=r.sent();return[2,e!==undefined&&e.isOpen()];case 2:return[4,p()];case 3:e=r.sent();return[2,e!==undefined]}}))}))};var v=function(n){return __awaiter(i,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,_(n)];case 1:e=r.sent();if(e){return[2,!e.disabled]}return[2,false]}}))}))};var _=function(n){return __awaiter(i,void 0,void 0,(function(){var r,t;return __generator(this,(function(i){switch(i.label){case 0:return[4,X()];case 1:i.sent();if(n==="start"||n==="end"){r=S((function(e){return e.side===n&&!e.disabled}));if(r){return[2,r]}return[2,S((function(e){return e.side===n}))]}else if(n!=null){return[2,S((function(e){return e.menuId===n}))]}t=S((function(n){return!n.disabled}));if(t){return[2,t]}return[2,e.length>0?e[0].el:undefined]}}))}))};var p=function(){return __awaiter(i,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,X()];case 1:n.sent();return[2,O()]}}))}))};var h=function(){return __awaiter(i,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,X()];case 1:n.sent();return[2,A()]}}))}))};var m=function(){return __awaiter(i,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,X()];case 1:n.sent();return[2,T()]}}))}))};var w=function(e,r){n.set(e,r)};var b=function(n){if(e.indexOf(n)<0){if(!n.disabled){y(n)}e.push(n)}};var g=function(n){var r=e.indexOf(n);if(r>-1){e.splice(r,1)}};var y=function(n){var r=n.side;e.filter((function(e){return e.side===r&&e!==n})).forEach((function(n){return n.disabled=true}))};var E=function(n,e,r){return __awaiter(i,void 0,void 0,(function(){var t;return __generator(this,(function(i){switch(i.label){case 0:if(T()){return[2,false]}if(!e)return[3,3];return[4,p()];case 1:t=i.sent();if(!(t&&n.el!==t))return[3,3];return[4,t.setOpen(false,false)];case 2:i.sent();i.label=3;case 3:return[2,n._setOpen(e,r)]}}))}))};var x=function(e,r){var t=n.get(e);if(!t){throw new Error("animation not registered")}var i=t(r);return i};var O=function(){return S((function(n){return n._isOpen}))};var A=function(){return e.map((function(n){return n.el}))};var T=function(){return e.some((function(n){return n.isAnimating}))};var S=function(n){var r=e.find(n);if(r!==undefined){return r.el}return undefined};var X=function(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((function(n){return n.componentOnReady()})))};w("reveal",s);w("push",o);w("overlay",u);if(typeof document!=="undefined"){document.addEventListener("ionBackButton",(function(n){var e=O();if(e){n.detail.register(t,(function(){return e.close()}))}}))}return{registerAnimation:w,get:_,getMenus:h,getOpen:p,isEnabled:v,swipeGesture:l,isAnimating:m,isOpen:d,enable:f,toggle:c,close:a,open:r,_getOpenSync:O,_createAnimation:x,_register:b,_unregister:g,_setOpen:E,_setActiveMenu:y}};var f=n("m",c())}}}));