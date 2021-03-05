import{r as t,e,h as i,H as s,i as n}from"./p-53b5a7f5.js";import{b as o}from"./p-275c7570.js";import{f as r,c as a,d as l}from"./p-a48a5ea6.js";import"./p-94c70170.js";import{c as d,b as p,a as h,s as c}from"./p-d18f4911.js";import{h as g,g as u}from"./p-11181cdf.js";const b=(t,e)=>{if(1===t.nodeType)return(t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e))).find((e=>e.value===t.value))},m=class{constructor(i){t(this,i),this.ionChange=e(this,"ionChange",7),this.ionCancel=e(this,"ionCancel",7),this.ionFocus=e(this,"ionFocus",7),this.ionBlur=e(this,"ionBlur",7),this.ionStyle=e(this,"ionStyle",7),this.inputId="ion-sel-"+C++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}async connectedCallback(){this.updateOverlayOptions(),this.emitStyle(),this.mutationO=((t,e,i)=>{if("undefined"==typeof MutationObserver)return;const s=new MutationObserver((t=>{i(((t,e)=>{let i;t.forEach((t=>{for(let s=0;s<t.addedNodes.length;s++)i=b(t.addedNodes[s],e)||i}))})(t,"ion-select-option"))}));return s.observe(t,{childList:!0,subtree:!0}),s})(this.el,0,(async()=>{this.updateOverlayOptions()}))}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}async open(t){if(this.disabled||this.isExpanded)return;const e=this.overlay=await this.createOverlay(t);return this.isExpanded=!0,e.onDidDismiss().then((()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()})),await e.present(),e}createOverlay(t){let e=this.interface;return"action-sheet"!==e&&"popover"!==e||!this.multiple||(console.warn(`Select interface cannot be "${e}" with a multi-value select. Using the "alert" interface instead.`),e="alert"),"popover"!==e||t||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),e="alert"),"popover"===e?this.openPopover(t):"action-sheet"===e?this.openActionSheet():this.openAlert()}updateOverlayOptions(){const t=this.overlay;if(!t)return;const e=this.childOpts,i=this.value;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(e,i);break;case"popover":const s=t.querySelector("ion-select-popover");s&&(s.options=this.createPopoverOptions(e,i));break;case"alert":t.inputs=this.createAlertInputs(e,this.multiple?"checkbox":"radio",i)}}createActionSheetButtons(t,e){const i=t.map((t=>{const i=f(t),s=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" "),n=`${O} ${s}`;return{role:v(i,e,this.compareWith)?"selected":"",text:t.textContent,cssClass:n,handler:()=>{this.value=i}}}));return i.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),i}createAlertInputs(t,e,i){return t.map((t=>{const s=f(t),n=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" ");return{type:e,cssClass:`${O} ${n}`,label:t.textContent||"",value:s,checked:v(s,i,this.compareWith),disabled:t.disabled}}))}createPopoverOptions(t,e){return t.map((t=>{const i=f(t),s=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" ");return{text:t.textContent||"",cssClass:`${O} ${s}`,value:i,checked:v(i,e,this.compareWith),disabled:t.disabled,handler:()=>{this.value=i,this.close()}}}))}async openPopover(t){const e=this.interfaceOptions,i=o(this),s=this.value,n=Object.assign(Object.assign({mode:i},e),{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],event:t,componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,value:s,options:this.createPopoverOptions(this.childOpts,s)}});return d.create(n)}async openActionSheet(){const t=o(this),e=this.interfaceOptions,i=Object.assign(Object.assign({mode:t},e),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",e.cssClass]});return p.create(i)}async openAlert(){const t=this.getLabel(),e=t?t.textContent:null,i=this.interfaceOptions,s=this.multiple?"checkbox":"radio",n=o(this),r=Object.assign(Object.assign({mode:n},i),{header:i.header?i.header:e,inputs:this.createAlertInputs(this.childOpts,s,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:t=>{this.value=t}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return h.create(r)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return r(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const t=this.selectedText;return null!=t&&""!==t?t:w(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{disabled:t,el:e,inputId:n,isExpanded:r,name:d,placeholder:p,value:h}=this,c=o(this),{labelText:u,labelId:b}=a(e,n);l(!0,e,d,x(h),t);let m=!1,v=this.getText();""===v&&null!=p&&(v=p,m=!0);const f={"select-text":!0,"select-placeholder":m},y=m?"placeholder":"text",w=void 0!==u?""!==v?`${v}, ${u}`:u:v;return i(s,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":t?"true":null,"aria-label":w,class:{[c]:!0,"in-item":g("ion-item",e),"select-disabled":t,"select-expanded":r}},i("div",{"aria-hidden":"true",class:f,part:y},v),i("div",{class:"select-icon",role:"presentation",part:"icon"},i("div",{class:"select-icon-inner"})),i("label",{id:b},w),i("button",{type:"button",disabled:t,id:n,"aria-labelledby":b,"aria-haspopup":"listbox","aria-expanded":""+r,onFocus:this.onFocus,onBlur:this.onBlur,ref:t=>this.focusEl=t}))}get el(){return n(this)}static get watchers(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}},v=(t,e,i)=>void 0!==t&&(Array.isArray(t)?t.some((t=>y(t,e,i))):y(t,e,i)),f=t=>{const e=t.value;return void 0===e?t.textContent||"":e},x=t=>{if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},y=(t,e,i)=>"function"==typeof i?i(t,e):"string"==typeof i?t[i]===e[i]:Array.isArray(e)?e.includes(t):t===e,w=(t,e,i)=>void 0===e?"":Array.isArray(e)?e.map((e=>k(t,e,i))).filter((t=>null!==t)).join(", "):k(t,e,i)||"",k=(t,e,i)=>{const s=t.find((t=>y(f(t),e,i)));return s?s.textContent:null};let C=0;const O="select-interface-option";m.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}"};const A=class{constructor(e){t(this,e),this.inputId="ion-selopt-"+j++,this.disabled=!1}render(){return i(s,{role:"option",id:this.inputId,class:o(this)})}get el(){return n(this)}};let j=0;A.style=":host{display:none}";const z=class{constructor(e){t(this,e),this.options=[]}onSelect(t){const e=this.options.find((e=>e.value===t.target.value));e&&c(e.handler)}render(){const t=this.options.find((t=>t.checked)),e=t?t.value:void 0;return i(s,{class:o(this)},i("ion-list",null,void 0!==this.header&&i("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&i("ion-item",null,i("ion-label",{class:"ion-text-wrap"},void 0!==this.subHeader&&i("h3",null,this.subHeader),void 0!==this.message&&i("p",null,this.message))),i("ion-radio-group",{value:e},this.options.map((t=>i("ion-item",{class:u(t.cssClass)},i("ion-label",null,t.text),i("ion-radio",{value:t.value,disabled:t.disabled})))))))}};z.style=".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";export{m as ion_select,A as ion_select_option,z as ion_select_popover}