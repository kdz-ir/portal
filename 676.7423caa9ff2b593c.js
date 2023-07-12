"use strict";(self.webpackChunkkdz_portal=self.webpackChunkkdz_portal||[]).push([[676],{5980:(h,p,a)=>{a.d(p,{g:()=>n});var n=(()=>{return(d=n||(n={}))[d.all=0]="all",d[d.needed=1]="needed",d[d.base=2]="base",n;var d})()},7846:(h,p,a)=>{a.d(p,{O:()=>d});var n=a(4650);let d=(()=>{class c{static nationalCodeChecker(i){if(!i.value)return null;if(!new RegExp("[0-9]{10}$").test(i.value))return{national:!0};if("0123456789"===i.value)return{national:!0};for(let m=0;m<10;m++)if(new RegExp(m+"{10}$").test(i.value))return{national:!0};let e=0;for(let m=0;m<9;m++)e+=(10-m)*+i.value.substr(m,1);const u=e%11,v=+i.value.substr(9,1);return u<2&&u===v||u>=2&&u===11-v?null:{national:!0}}static checkPasswords(i){return i.controls.password?.value===i.controls.confirmPassword?.value?null:{confirmPassword:!0}}constructor(){}SetStatus(i){return i.valid?"success":"error"}GetMessage(i){return i.getError("required")?"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f\u0627\u0644\u0632\u0627\u0645\u06cc \u0645\u06cc\u0628\u0627\u0634\u062f.":i.getError("ascii")?"\u062d\u0631\u0648\u0641 \u0644\u0627\u062a\u06cc\u0646 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f.":i.getError("national")?"\u06a9\u062f \u0645\u0644\u06cc \u0634\u0645\u0627 \u062f\u0631\u0633\u062a \u0646\u0645\u06cc \u0628\u0627\u0634\u062f.":i.getError("email")?"\u0627\u06cc\u0645\u06cc\u0644 \u0634\u0645\u0627 \u062f\u0631\u0633\u062a \u0646\u0645\u06cc \u0628\u0627\u0634\u062f.":i.getError("minlength")?" \u062d\u062f\u0627\u0642\u0644 \u0637\u0648\u0644 \u0645\u062c\u0627\u0632 \u0631\u0627 \u0631\u0639\u0627\u06cc\u062a \u0646\u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f.":i.getError("maxlength")?"\u062d\u062f\u0627\u06a9\u062b\u0631 \u0637\u0648\u0644 \u0645\u062c\u0627\u0632 \u0631\u0627 \u0631\u0639\u0627\u06cc\u062a \u0646\u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f":i.getError("pattern")?"\u0627\u0644\u06af\u0648 \u0634\u0645\u0627 \u062f\u0631\u0633\u062a \u0646\u0645\u06cc \u0628\u0627\u0634\u062f":i.getError("phoneNumber")?"\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646 \u0634\u0645\u0627 \u062f\u0631\u0633\u062a \u0646\u0645\u06cc \u0628\u0627\u0634\u062f.":i.parent.getError("confirmPassword")?"\u067e\u0633\u0648\u0631\u062f \u0634\u0645\u0627 \u062a\u0637\u0627\u0628\u0642 \u0646\u062f\u0627\u0631\u062f.":i.getError("max")?"\u0645\u0642\u062f\u0627\u0631 \u06a9\u0645\u062a\u0631\u06cc \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f":i.getError("min")?"\u0645\u0642\u062f\u0627\u0631 \u0628\u0627\u0644\u0627\u062a\u0631\u06cc \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f":""}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=n.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},2676:(h,p,a)=>{a.d(p,{p:()=>R});var n=a(4006),d=a(8924),c=a(1441),C=(()=>{return(o=C||(C={}))[o.all=-1]="all",o[o.manthra=0]="manthra",o[o.ordoo=1]="ordoo",o[o.jam=2]="jam",C;var o})(),i=a(7846),e=a(4650),u=a(5412),v=a(9840),m=a(6842),S=a(5130),E=a(7210),k=a(5980),x=a(599),y=a(6895),b=a(4144),f=a(9549),P=a(4859),j=a(4385),D=a(3238),T=a(4044),g=a(9602);function N(o,s){if(1&o&&(e.\u0275\u0275elementStart(0,"mat-option",17),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const t=s.$implicit;e.\u0275\u0275property("value",t.value),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.label," ")}}function F(o,s){if(1&o&&(e.\u0275\u0275elementStart(0,"mat-option",17),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const t=s.$implicit;e.\u0275\u0275property("value",t.value),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.lable," ")}}let M=(()=>{class o{constructor(t,l,r,J){this.data=t,this._swalService=l,this._dialogRef=J,this._profileService=(0,e.inject)(m.x),this.cites=S.I,this.sexTypes=E.D,this.profile=t.profile,this.fGroup=r.group({nationalCode:r.control(this.profile.nationalCode,[n.kI.required]),name:r.control(this.profile.name,[n.kI.required]),family:r.control(this.profile.family,[n.kI.required]),sex:r.control(E.D.find(I=>I.lable==this.profile.sex)?.value??0,[n.kI.required]),birthday:r.control(v(this.profile.birthday,"jYYYY/jMM/jDD"),[n.kI.required]),IdCardPhoto:r.control(this.profile.IdCardPhoto,[n.kI.required]),city:r.control(S.I.find(I=>I.label==this.profile.city)?.value??0,[n.kI.required]),sportInsurance:r.control(this.profile.sportInsurance),personalPhoto:r.control(this.profile.personalPhoto,[n.kI.required])}),this.data.mode==k.g.needed&&this.fGroup.controls.sportInsurance.addValidators(n.kI.required)}onSaveProfile(){const t=this.fGroup.value,l={nationalCode:t.nationalCode,sportInsurance:t.sportInsurance,name:t.name,family:t.family,city:t.city,birthday:t.birthday.format("jYYYY/jMM/jDD"),IdCardPhoto:t.IdCardPhoto,personalPhoto:t.personalPhoto,sex:t.sex};this._profileService.saveProfileWithNationalCode(l).subscribe(r=>{this._swalService.successFullSubmited(),this._dialogRef.close(!0)})}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(u.WI),e.\u0275\u0275directiveInject(x.J),e.\u0275\u0275directiveInject(n.qu),e.\u0275\u0275directiveInject(u.so))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-set-minimum-profile-dialog"]],decls:42,vars:10,consts:[["mat-dialog-title",""],[1,"flex","flex-col",3,"formGroup"],["formControlName","name","matInput",""],["formControlName","family","matInput",""],["formControlName","birthday","matInput","",3,"matDatepicker","disabled"],["matSuffix","",3,"for"],["disabled","false"],["picker",""],["formControlName","city"],[3,"value",4,"ngFor","ngForOf"],["align","start"],["formControlName","sex"],["fileType","0","eventType","-1","accept","image/jpeg","formControlName","personalPhoto",3,"nationalCode"],["fileType","1","eventType","-1","accept","image/jpeg","formControlName","IdCardPhoto",3,"nationalCode"],["fileType","6","accept","image/jpeg","formControlName","sportInsurance","eventType","2",3,"nationalCode"],["mat-button","",3,"mat-dialog-close"],["mat-raised-button","","color","accent",3,"disabled","click"],[3,"value"]],template:function(t,l){if(1&t&&(e.\u0275\u0275elementStart(0,"h2",0),e.\u0275\u0275text(1,"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u067e\u0631\u0648\u0641\u0627\u06cc\u0644 \u062c\u062f\u06cc\u062f"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field")(5,"mat-label"),e.\u0275\u0275text(6," \u0646\u0627\u0645 "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"input",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"mat-form-field")(9,"mat-label"),e.\u0275\u0275text(10," \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"input",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"mat-form-field")(13,"mat-label"),e.\u0275\u0275text(14,"\u062a\u0627\u0631\u06cc\u062e \u062a\u0648\u0644\u062f"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(15,"input",4)(16,"mat-datepicker-toggle",5)(17,"mat-datepicker",6,7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"mat-form-field")(20,"mat-label"),e.\u0275\u0275text(21,"\u0634\u0647\u0631"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"mat-select",8),e.\u0275\u0275template(23,N,2,2,"mat-option",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"mat-hint",10),e.\u0275\u0275text(25,"\u0634\u0647\u0631 \u0645\u062d\u0644 \u0632\u0646\u062f\u06af\u06cc"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(26,"mat-form-field")(27,"mat-label"),e.\u0275\u0275text(28,"\u062c\u0646\u0633\u06cc\u062a"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"mat-select",11),e.\u0275\u0275template(30,F,2,2,"mat-option",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(31,"app-image-uploader",12),e.\u0275\u0275text(32," \u0639\u06a9\u0633 \u067e\u0631\u0633\u0646\u0644\u06cc"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(33,"app-image-uploader",13),e.\u0275\u0275text(34," \u0639\u06a9\u0633 \u0634\u0646\u0627\u0633\u0646\u0627\u0645\u0647"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"app-image-uploader",14),e.\u0275\u0275text(36,"\u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(37,"mat-dialog-actions")(38,"button",15),e.\u0275\u0275text(39,"\u0628\u0633\u062a\u0646"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(40,"button",16),e.\u0275\u0275listener("click",function(){return l.onSaveProfile()}),e.\u0275\u0275text(41,"\u0630\u062e\u06cc\u0631\u0647"),e.\u0275\u0275elementEnd()()),2&t){const r=e.\u0275\u0275reference(18);e.\u0275\u0275advance(3),e.\u0275\u0275property("formGroup",l.fGroup),e.\u0275\u0275advance(12),e.\u0275\u0275property("matDatepicker",r),e.\u0275\u0275advance(1),e.\u0275\u0275property("for",r),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",l.cites),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",l.sexTypes),e.\u0275\u0275advance(1),e.\u0275\u0275property("nationalCode",l.data.profile.nationalCode),e.\u0275\u0275advance(2),e.\u0275\u0275property("nationalCode",l.data.profile.nationalCode),e.\u0275\u0275advance(2),e.\u0275\u0275property("nationalCode",l.data.profile.nationalCode),e.\u0275\u0275advance(3),e.\u0275\u0275property("mat-dialog-close",!1),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",l.fGroup.invalid)}},dependencies:[y.NgForOf,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,b.Nt,f.KE,f.hX,f.bx,f.R9,P.lW,j.gD,D.ey,u.ZT,u.uh,u.xY,u.H8,T.$,g.Mq,g.hl,g.nW]}),o})();var A=a(7392);function V(o,s){1&o&&(e.\u0275\u0275elementStart(0,"mat-icon",1),e.\u0275\u0275text(1,"check"),e.\u0275\u0275elementEnd())}function O(o,s){1&o&&(e.\u0275\u0275elementStart(0,"mat-icon",1),e.\u0275\u0275text(1,"error"),e.\u0275\u0275elementEnd())}function Y(o,s){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",6),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.onEditProfileClick())}),e.\u0275\u0275elementStart(1,"mat-icon"),e.\u0275\u0275text(2,"edit"),e.\u0275\u0275elementEnd()()}}const G=["*"];let R=(()=>{class o{constructor(t,l,r){this._profileService=t,this._dialog=l,this._fb=r,this.onTouched=()=>{},this.touched=!1,this.isDisabled=!1,this.fControl=r.nonNullable.control("",[i.O.nationalCodeChecker]),this.fControl.valueChanges.subscribe(()=>{this.markAsTouched()})}writeValue(t){this.fControl.setValue(t)}registerOnChange(t){this.fControl.valueChanges.subscribe(t)}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.isDisabled=t}validate(t){return t.hasValidator(n.kI.required)&&(0,d.Z)(this.fControl.value)?{required:!0}:0==this.profile?.isCompleted||(0,c.Z)(this.profile)?{inCompletedProfile:!0}:null}markAsTouched(){this.touched||(this.onTouched(),this.touched=!0)}onEditProfileClick(){this._dialog.open(M,{data:{profile:this.profile.profile,mode:this.profileMode},disableClose:!0}).afterClosed().subscribe(l=>{!0===l&&this.onSearchProfile()})}onSearchProfile(){this._profileService.getProfileWithNationalCode(this.fControl.value,C.jam,this.profileMode).subscribe(t=>{this.profile=t,this.fControl.setValue(this.profile.profile.nationalCode)})}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(m.x),e.\u0275\u0275directiveInject(u.uw),e.\u0275\u0275directiveInject(n.qu))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-profile-check-input"]],inputs:{profileMode:"profileMode"},features:[e.\u0275\u0275ProvidersFeature([{provide:n.JU,multi:!0,useExisting:o},{provide:n.Cf,multi:!0,useExisting:o}])],ngContentSelectors:G,decls:13,vars:6,consts:[["matInput","",3,"formControl"],["matSuffix",""],["color","accent","matSuffix","","type","button","mat-icon-button","",3,"disabled","click"],["matSuffix","",4,"ngIf"],["mat-icon-button","","type","button","color","accent",3,"click",4,"ngIf"],[3,"innerText"],["mat-icon-button","","type","button","color","accent",3,"click"]],template:function(t,l){if(1&t&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"div")(1,"mat-form-field")(2,"mat-label"),e.\u0275\u0275projection(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"input",0),e.\u0275\u0275elementStart(5,"div",1)(6,"button",2),e.\u0275\u0275listener("click",function(){return l.onSearchProfile()}),e.\u0275\u0275elementStart(7,"mat-icon"),e.\u0275\u0275text(8,"search"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(9,V,2,0,"mat-icon",3),e.\u0275\u0275template(10,O,2,0,"mat-icon",3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(11,Y,3,0,"button",4),e.\u0275\u0275element(12,"span",5),e.\u0275\u0275elementEnd()),2&t){let r;e.\u0275\u0275advance(4),e.\u0275\u0275property("formControl",l.fControl),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",l.fControl.invalid||l.fControl.untouched),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",null==l.profile?null:l.profile.isCompleted),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!(null!=l.profile&&l.profile.isCompleted)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==l.profile?null:l.profile.editable),e.\u0275\u0275advance(1),e.\u0275\u0275property("innerText",(null!==(r=null==l.profile||null==l.profile.profile?null:l.profile.profile.name)&&void 0!==r?r:"-")+" "+(null!==(r=null==l.profile||null==l.profile.profile?null:l.profile.profile.family)&&void 0!==r?r:"-"))}},dependencies:[y.NgIf,n.Fj,n.JJ,n.oH,b.Nt,f.KE,f.hX,f.R9,P.RK,A.Hw],styles:["span[_ngcontent-%COMP%]{display:inline}"]}),o})()},5130:(h,p,a)=>{a.d(p,{I:()=>n});const n=[{value:1,label:"\u062a\u0647\u0631\u0627\u0646"},{value:2,label:"\u06cc\u0632\u062f"},{value:3,label:"\u0634\u06cc\u0631\u0627\u0632"},{value:4,label:"\u0627\u0635\u0641\u0647\u0627\u0646"},{value:5,label:"\u06a9\u0631\u0645\u0627\u0646"},{value:6,label:"\u06a9\u0631\u062c"},{value:7,label:"\u0627\u0647\u0648\u0627\u0632"},{value:8,label:"\u0632\u0627\u0647\u062f\u0627\u0646"}]},7210:(h,p,a)=>{a.d(p,{D:()=>n});const n=[{value:1,lable:"\u0645\u0631\u062f"},{value:0,lable:"\u0632\u0646"}]}}]);