"use strict";(self.webpackChunkkdz_portal=self.webpackChunkkdz_portal||[]).push([[233],{4044:(Q,I,s)=>{s.d(I,{$:()=>M});var e=s(4006),C=s(7641),v=s(8924),f=s(2340),d=s(4650),P=s(1305),E=s(529);let T=(()=>{class r{constructor(a){this._httpClient=a,this._url=f.N.url+"/api/v1/files/upload"}uploadFile(a,h,g,m){const b=new FormData;return b.append("file",a),b.append("fileType",h),b.append("eventType",g),b.append("nationalCode",m),this._httpClient.post(this._url,b)}}return r.\u0275fac=function(a){return new(a||r)(d.\u0275\u0275inject(E.eN))},r.\u0275prov=d.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var D=s(867),w=s(9078);const S=["*"];let M=(()=>{class r{constructor(a,h,g){this._lightbox=a,this._uploadService=h,this._authSerivce=g,this.maxSize=100,this.nationalCode=this._authSerivce.getTokenItem("nationalCode"),this.isUploading=!1,this.onChange=m=>{},this.onTouched=()=>{},this.touched=!1,this.disabled=!1}writeValue(a){(0,C.Z)(a)||(this.src=f.N.url+"/api/v1/files/show/"+a)}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}validate(a){return a.hasValidator(e.kI.required)&&(0,v.Z)(this.src)?{required:!0}:null}markAsTouched(){this.touched||(this.onTouched(),this.touched=!0)}setDisabledState(a){this.disabled=a}ngOnChanges(a){this.src=f.N.url+"/api/v1/files/show/"+this.lastImageid}onSelectedFile(a){this.markAsTouched();const h=a.target.files[0];this.isUploading=!0,this._uploadService.uploadFile(h,this.fileType,this.eventType,this.nationalCode).subscribe(g=>{this.onChange(g.entity.fileId),this.isUploading=!1,this.src=g.entity.filePath},()=>{this.isUploading=!1})}onOpenImage(a){this._lightbox.open([{src:a.target.src,thumb:""}])}}return r.\u0275fac=function(a){return new(a||r)(d.\u0275\u0275directiveInject(P.ey),d.\u0275\u0275directiveInject(T),d.\u0275\u0275directiveInject(D.$))},r.\u0275cmp=d.\u0275\u0275defineComponent({type:r,selectors:[["app-image-uploader"]],inputs:{maxSize:"maxSize",accept:"accept",lastImageid:"lastImageid",fileType:"fileType",eventType:"eventType",nationalCode:"nationalCode"},features:[d.\u0275\u0275ProvidersFeature([{provide:e.JU,multi:!0,useExisting:r},{provide:e.Cf,multi:!0,useExisting:r}]),d.\u0275\u0275NgOnChangesFeature],ngContentSelectors:S,decls:5,vars:3,consts:[[1,"upload-btn-wrapper",3,"largeLoading"],["type","file","name","myfile",3,"accept","change"],["onError","this.src= 'https://file.behroozbc.ir/no_logo.png'","alt","",3,"src","click"]],template:function(a,h){1&a&&(d.\u0275\u0275projectionDef(),d.\u0275\u0275elementStart(0,"div",0)(1,"label"),d.\u0275\u0275projection(2),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(3,"input",1),d.\u0275\u0275listener("change",function(m){return h.onSelectedFile(m)}),d.\u0275\u0275elementEnd()(),d.\u0275\u0275elementStart(4,"img",2),d.\u0275\u0275listener("click",function(m){return h.onOpenImage(m)}),d.\u0275\u0275elementEnd()),2&a&&(d.\u0275\u0275property("largeLoading",h.isUploading),d.\u0275\u0275advance(3),d.\u0275\u0275property("accept",h.accept),d.\u0275\u0275advance(1),d.\u0275\u0275property("src",h.src,d.\u0275\u0275sanitizeUrl))},dependencies:[w.M],styles:["img[_ngcontent-%COMP%]{display:inline;max-width:3rem;float:left}div[_ngcontent-%COMP%]{display:inline}"]}),r})()},7084:(Q,I,s)=>{s.d(I,{pp:()=>ie,To:()=>oe,ib:()=>U,u4:()=>te,yz:()=>B,yK:()=>ne});var e=s(4650),C=s(5017),v=s(1281),f=s(8929),d=s(4096);let P=0;const E=new e.InjectionToken("CdkAccordion");let T=(()=>{class n{constructor(){this._stateChanges=new f.xQ,this._openCloseAllActions=new f.xQ,this.id="cdk-accordion-"+P++,this._multi=!1}get multi(){return this._multi}set multi(t){this._multi=(0,v.Ig)(t)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[e.\u0275\u0275ProvidersFeature([{provide:E,useExisting:n}]),e.\u0275\u0275NgOnChangesFeature]}),n})(),D=0,w=(()=>{class n{get expanded(){return this._expanded}set expanded(t){t=(0,v.Ig)(t),this._expanded!==t&&(this._expanded=t,this.expandedChange.emit(t),t?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,v.Ig)(t)}constructor(t,i,l){this.accordion=t,this._changeDetectorRef=i,this._expansionDispatcher=l,this._openCloseAllSubscription=d.w.EMPTY,this.closed=new e.EventEmitter,this.opened=new e.EventEmitter,this.destroyed=new e.EventEmitter,this.expandedChange=new e.EventEmitter,this.id="cdk-accordion-child-"+D++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=l.listen((c,_)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===_&&this.id!==c&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(E,12),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(C.A8))},n.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[e.\u0275\u0275ProvidersFeature([{provide:E,useValue:void 0}])]}),n})(),S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({}),n})();var M=s(4080),r=s(6895),y=s(3238),a=s(2687),h=s(5778),g=s(1059),m=s(2198),b=s(2986),j=s(9521),z=s(8896),L=s(6787),p=s(7340);const V=["body"];function $(n,o){}const X=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],K=["mat-expansion-panel-header","*","mat-action-row"];function Y(n,o){if(1&n&&e.\u0275\u0275element(0,"span",2),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("@indicatorRotate",t._getExpandedState())}}const W=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Z=["mat-panel-title","mat-panel-description","*"],H=new e.InjectionToken("MAT_ACCORDION"),N="225ms cubic-bezier(0.4,0.0,0.2,1)",F={indicatorRotate:(0,p.X$)("indicatorRotate",[(0,p.SB)("collapsed, void",(0,p.oB)({transform:"rotate(0deg)"})),(0,p.SB)("expanded",(0,p.oB)({transform:"rotate(180deg)"})),(0,p.eR)("expanded <=> collapsed, void => collapsed",(0,p.jt)(N))]),bodyExpansion:(0,p.X$)("bodyExpansion",[(0,p.SB)("collapsed, void",(0,p.oB)({height:"0px",visibility:"hidden"})),(0,p.SB)("expanded",(0,p.oB)({height:"*",visibility:"visible"})),(0,p.eR)("expanded <=> collapsed, void => collapsed",(0,p.jt)(N))])},k=new e.InjectionToken("MAT_EXPANSION_PANEL");let G=(()=>{class n{constructor(t,i){this._template=t,this._expansionPanel=i}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(e.TemplateRef),e.\u0275\u0275directiveInject(k,8))},n.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]}),n})(),J=0;const R=new e.InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let U=(()=>{class n extends w{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=(0,v.Ig)(t)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}constructor(t,i,l,c,_,O,A){super(t,i,l),this._viewContainerRef=c,this._animationMode=O,this._hideToggle=!1,this.afterExpand=new e.EventEmitter,this.afterCollapse=new e.EventEmitter,this._inputChanges=new f.xQ,this._headerId="mat-expansion-panel-header-"+J++,this._bodyAnimationDone=new f.xQ,this.accordion=t,this._document=_,this._bodyAnimationDone.pipe((0,h.x)((x,u)=>x.fromState===u.fromState&&x.toState===u.toState)).subscribe(x=>{"void"!==x.fromState&&("expanded"===x.toState?this.afterExpand.emit():"collapsed"===x.toState&&this.afterCollapse.emit())}),A&&(this.hideToggle=A.hideToggle)}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe((0,g.O)(null),(0,m.h)(()=>this.expanded&&!this._portal),(0,b.q)(1)).subscribe(()=>{this._portal=new M.UE(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const t=this._document.activeElement,i=this._body.nativeElement;return t===i||i.contains(t)}return!1}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(H,12),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(C.A8),e.\u0275\u0275directiveInject(e.ViewContainerRef),e.\u0275\u0275directiveInject(r.DOCUMENT),e.\u0275\u0275directiveInject(e.ANIMATION_MODULE_TYPE,8),e.\u0275\u0275directiveInject(R,8))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,i,l){if(1&t&&e.\u0275\u0275contentQuery(l,G,5),2&t){let c;e.\u0275\u0275queryRefresh(c=e.\u0275\u0275loadQuery())&&(i._lazyContent=c.first)}},viewQuery:function(t,i){if(1&t&&e.\u0275\u0275viewQuery(V,5),2&t){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(i._body=l.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(t,i){2&t&&e.\u0275\u0275classProp("mat-expanded",i.expanded)("_mat-animation-noopable","NoopAnimations"===i._animationMode)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[e.\u0275\u0275ProvidersFeature([{provide:H,useValue:void 0},{provide:k,useExisting:n}]),e.\u0275\u0275InheritDefinitionFeature,e.\u0275\u0275NgOnChangesFeature],ngContentSelectors:K,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,i){1&t&&(e.\u0275\u0275projectionDef(X),e.\u0275\u0275projection(0),e.\u0275\u0275elementStart(1,"div",0,1),e.\u0275\u0275listener("@bodyExpansion.done",function(c){return i._bodyAnimationDone.next(c)}),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275projection(4,1),e.\u0275\u0275template(5,$,0,0,"ng-template",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275projection(6,2),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("@bodyExpansion",i._getExpandedState())("id",i.id),e.\u0275\u0275attribute("aria-labelledby",i._headerId),e.\u0275\u0275advance(4),e.\u0275\u0275property("cdkPortalOutlet",i._portal))},dependencies:[M.Pl],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[F.bodyExpansion]},changeDetection:0}),n})();class q{}const ee=(0,y.sb)(q);let B=(()=>{class n extends ee{constructor(t,i,l,c,_,O,A){super(),this.panel=t,this._element=i,this._focusMonitor=l,this._changeDetectorRef=c,this._animationMode=O,this._parentChangeSubscription=d.w.EMPTY;const x=t.accordion?t.accordion._stateChanges.pipe((0,m.h)(u=>!(!u.hideToggle&&!u.togglePosition))):z.E;this.tabIndex=parseInt(A||"")||0,this._parentChangeSubscription=(0,L.T)(t.opened,t.closed,x,t._inputChanges.pipe((0,m.h)(u=>!!(u.hideToggle||u.disabled||u.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe((0,m.h)(()=>t._containsFocus())).subscribe(()=>l.focusVia(i,"program")),_&&(this.expandedHeight=_.expandedHeight,this.collapsedHeight=_.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case j.L_:case j.K5:(0,j.Vb)(t)||(t.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t))}}focus(t,i){t?this._focusMonitor.focusVia(this._element,t,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(U,1),e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(a.tE),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(R,8),e.\u0275\u0275directiveInject(e.ANIMATION_MODULE_TYPE,8),e.\u0275\u0275injectAttribute("tabindex"))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(t,i){1&t&&e.\u0275\u0275listener("click",function(){return i._toggle()})("keydown",function(c){return i._keydown(c)}),2&t&&(e.\u0275\u0275attribute("id",i.panel._headerId)("tabindex",i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),e.\u0275\u0275styleProp("height",i._getHeaderHeight()),e.\u0275\u0275classProp("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after","after"===i._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===i._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===i._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:Z,decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(t,i){1&t&&(e.\u0275\u0275projectionDef(W),e.\u0275\u0275elementStart(0,"span",0),e.\u0275\u0275projection(1),e.\u0275\u0275projection(2,1),e.\u0275\u0275projection(3,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,Y,1,1,"span",1)),2&t&&(e.\u0275\u0275classProp("mat-content-hide-toggle",!i._showToggle()),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",i._showToggle()))},dependencies:[r.NgIf],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[F.indicatorRotate]},changeDetection:0}),n})(),te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),n})(),ne=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),n})(),ie=(()=>{class n extends T{constructor(){super(...arguments),this._ownHeaders=new e.QueryList,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(t){this._hideToggle=(0,v.Ig)(t)}ngAfterContentInit(){this._headers.changes.pipe((0,g.O)(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new a.Em(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=e.\u0275\u0275getInheritedFactory(n)))(i||n)}}(),n.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["mat-accordion"]],contentQueries:function(t,i,l){if(1&t&&e.\u0275\u0275contentQuery(l,B,5),2&t){let c;e.\u0275\u0275queryRefresh(c=e.\u0275\u0275loadQuery())&&(i._headers=c)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,i){2&t&&e.\u0275\u0275classProp("mat-accordion-multi",i.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[e.\u0275\u0275ProvidersFeature([{provide:H,useExisting:n}]),e.\u0275\u0275InheritDefinitionFeature]}),n})(),oe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[r.CommonModule,y.BQ,S,M.eL]}),n})()}}]);