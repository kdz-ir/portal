"use strict";(self.webpackChunkkdz_portal=self.webpackChunkkdz_portal||[]).push([[956],{5980:(v,m,o)=>{o.d(m,{g:()=>n});var n=(()=>{return(u=n||(n={}))[u.all=0]="all",u[u.needed=1]="needed",u[u.base=2]="base",n;var u})()},3594:(v,m,o)=>{o.d(m,{v:()=>n});var n=(()=>{return(u=n||(n={}))[u.all=-1]="all",u[u.manthra=0]="manthra",u[u.ordoo=1]="ordoo",u[u.jam=2]="jam",n;var u})()},7846:(v,m,o)=>{o.d(m,{O:()=>u});var n=o(4650);let u=(()=>{class c{static nationalCodeChecker(a){if(!a.value)return null;if(!new RegExp("[0-9]{10}$").test(a.value))return{national:!0};if("0123456789"===a.value)return{national:!0};for(let p=0;p<10;p++)if(new RegExp(p+"{10}$").test(a.value))return{national:!0};let C=0;for(let p=0;p<9;p++)C+=(10-p)*+a.value.substr(p,1);const e=C%11,d=+a.value.substr(9,1);return e<2&&e===d||e>=2&&e===11-d?null:{national:!0}}static checkPasswords(a){return a.controls.password?.value===a.controls.confirmPassword?.value?null:{confirmPassword:!0}}constructor(){}SetStatus(a){return a.valid?"success":"error"}GetMessage(a){return a.getError("required")?"\u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f\u0627\u0644\u0632\u0627\u0645\u06cc \u0645\u06cc\u0628\u0627\u0634\u062f.":a.getError("ascii")?"\u062d\u0631\u0648\u0641 \u0644\u0627\u062a\u06cc\u0646 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f.":a.getError("national")?"\u06a9\u062f \u0645\u0644\u06cc \u0634\u0645\u0627 \u062f\u0631\u0633\u062a \u0646\u0645\u06cc \u0628\u0627\u0634\u062f.":a.getError("email")?"\u0627\u06cc\u0645\u06cc\u0644 \u0634\u0645\u0627 \u062f\u0631\u0633\u062a \u0646\u0645\u06cc \u0628\u0627\u0634\u062f.":a.getError("minlength")?" \u062d\u062f\u0627\u0642\u0644 \u0637\u0648\u0644 \u0645\u062c\u0627\u0632 \u0631\u0627 \u0631\u0639\u0627\u06cc\u062a \u0646\u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f.":a.getError("maxlength")?"\u062d\u062f\u0627\u06a9\u062b\u0631 \u0637\u0648\u0644 \u0645\u062c\u0627\u0632 \u0631\u0627 \u0631\u0639\u0627\u06cc\u062a \u0646\u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f":a.getError("pattern")?"\u0627\u0644\u06af\u0648 \u0634\u0645\u0627 \u062f\u0631\u0633\u062a \u0646\u0645\u06cc \u0628\u0627\u0634\u062f":a.getError("phoneNumber")?"\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646 \u0634\u0645\u0627 \u062f\u0631\u0633\u062a \u0646\u0645\u06cc \u0628\u0627\u0634\u062f.":a.parent.getError("confirmPassword")?"\u067e\u0633\u0648\u0631\u062f \u0634\u0645\u0627 \u062a\u0637\u0627\u0628\u0642 \u0646\u062f\u0627\u0631\u062f.":a.getError("max")?"\u0645\u0642\u062f\u0627\u0631 \u06a9\u0645\u062a\u0631\u06cc \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f":a.getError("min")?"\u0645\u0642\u062f\u0627\u0631 \u0628\u0627\u0644\u0627\u062a\u0631\u06cc \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f":""}}return c.\u0275fac=function(a){return new(a||c)},c.\u0275prov=n.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},1956:(v,m,o)=>{o.d(m,{p:()=>W});var n=o(4006),u=o(7641),c=o(8924),g=o(1441),a=o(3594),C=o(7846),e=o(4650),d=o(5412),p=o(9840),E=o(6842),y=o(5130),b=o(7210),j=o(5980),D=o(599),P=o(6895),x=o(4144),f=o(9549),k=o(4859),T=o(4385),N=o(3238),M=o(4044),I=o(9602);function F(r,s){if(1&r&&(e.\u0275\u0275elementStart(0,"mat-option",17),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&r){const t=s.$implicit;e.\u0275\u0275property("value",t.value),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.label," ")}}function V(r,s){if(1&r&&(e.\u0275\u0275elementStart(0,"mat-option",17),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&r){const t=s.$implicit;e.\u0275\u0275property("value",t.value),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.lable," ")}}let A=(()=>{class r{constructor(t,l,i,h){this.data=t,this._swalService=l,this._dialogRef=h,this._profileService=(0,e.inject)(E.x),this.cites=y.I,this.sexTypes=b.D,this.profile=t.profile,this.fGroup=i.group({nationalCode:i.control(this.profile.nationalCode,[n.kI.required]),name:i.control(this.profile.name,[n.kI.required]),family:i.control(this.profile.family,[n.kI.required]),sex:i.control(b.D.find(S=>S.lable==this.profile.sex)?.value??0,[n.kI.required]),birthday:i.control(p(this.profile.birthday,"jYYYY/jMM/jDD"),[n.kI.required]),IdCardPhoto:i.control(this.profile.idCardPhoto,[n.kI.required]),city:i.control(y.I.find(S=>S.label==this.profile.city)?.value??0,[n.kI.required]),sportInsurance:i.control(this.profile.sportInsurance),personalPhoto:i.control(this.profile.personalPhoto,[n.kI.required])}),this.data.mode==j.g.needed&&this.fGroup.controls.sportInsurance.addValidators(n.kI.required)}onSaveProfile(){const t=this.fGroup.value,l={nationalCode:t.nationalCode,sportInsurance:t.sportInsurance,name:t.name,family:t.family,city:t.city,birthday:t.birthday.format("jYYYY/jMM/jDD"),IdCardPhoto:t.IdCardPhoto,personalPhoto:t.personalPhoto,sex:t.sex};this._profileService.saveProfileWithNationalCode(l).subscribe(i=>{this._swalService.successFullSubmited(),this._dialogRef.close(!0)})}}return r.\u0275fac=function(t){return new(t||r)(e.\u0275\u0275directiveInject(d.WI),e.\u0275\u0275directiveInject(D.J),e.\u0275\u0275directiveInject(n.qu),e.\u0275\u0275directiveInject(d.so))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["app-set-minimum-profile-dialog"]],decls:42,vars:9,consts:[["mat-dialog-title",""],[1,"flex","flex-col",3,"formGroup"],["formControlName","name","matInput",""],["formControlName","family","matInput",""],["formControlName","birthday","matInput","",3,"matDatepicker","disabled"],["matSuffix","",3,"for"],["disabled","false"],["picker",""],["formControlName","city"],[3,"value",4,"ngFor","ngForOf"],["align","start"],["formControlName","sex"],["fileType","0","eventType","-1","accept","image/jpeg","formControlName","personalPhoto",3,"nationalCode"],["fileType","1","eventType","-1","accept","image/jpeg","formControlName","IdCardPhoto",3,"nationalCode"],["fileType","6","accept","image/jpeg","formControlName","sportInsurance","eventType","2",3,"nationalCode"],["mat-button","",3,"mat-dialog-close"],["mat-raised-button","","color","accent",3,"click"],[3,"value"]],template:function(t,l){if(1&t&&(e.\u0275\u0275elementStart(0,"h2",0),e.\u0275\u0275text(1,"Delete all elements?"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field")(5,"mat-label"),e.\u0275\u0275text(6," \u0646\u0627\u0645 "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"input",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"mat-form-field")(9,"mat-label"),e.\u0275\u0275text(10," \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"input",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"mat-form-field")(13,"mat-label"),e.\u0275\u0275text(14,"\u062a\u0627\u0631\u06cc\u062e \u062a\u0648\u0644\u062f"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(15,"input",4)(16,"mat-datepicker-toggle",5)(17,"mat-datepicker",6,7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"mat-form-field")(20,"mat-label"),e.\u0275\u0275text(21,"\u0634\u0647\u0631"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"mat-select",8),e.\u0275\u0275template(23,F,2,2,"mat-option",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"mat-hint",10),e.\u0275\u0275text(25,"\u0634\u0647\u0631 \u0645\u062d\u0644 \u0632\u0646\u062f\u06af\u06cc"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(26,"mat-form-field")(27,"mat-label"),e.\u0275\u0275text(28,"\u062c\u0646\u0633\u06cc\u062a"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"mat-select",11),e.\u0275\u0275template(30,V,2,2,"mat-option",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(31,"app-image-uploader",12),e.\u0275\u0275text(32," \u0639\u06a9\u0633 \u067e\u0631\u0633\u0646\u0644\u06cc"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(33,"app-image-uploader",13),e.\u0275\u0275text(34," \u0639\u06a9\u0633 \u0634\u0646\u0627\u0633\u0646\u0627\u0645\u0647"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"app-image-uploader",14),e.\u0275\u0275text(36,"\u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(37,"mat-dialog-actions")(38,"button",15),e.\u0275\u0275text(39,"\u0628\u0633\u062a\u0646"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(40,"button",16),e.\u0275\u0275listener("click",function(){return l.onSaveProfile()}),e.\u0275\u0275text(41,"\u0630\u062e\u06cc\u0631\u0647"),e.\u0275\u0275elementEnd()()),2&t){const i=e.\u0275\u0275reference(18);e.\u0275\u0275advance(3),e.\u0275\u0275property("formGroup",l.fGroup),e.\u0275\u0275advance(12),e.\u0275\u0275property("matDatepicker",i),e.\u0275\u0275advance(1),e.\u0275\u0275property("for",i),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",l.cites),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",l.sexTypes),e.\u0275\u0275advance(1),e.\u0275\u0275property("nationalCode",l.data.profile.nationalCode),e.\u0275\u0275advance(2),e.\u0275\u0275property("nationalCode",l.data.profile.nationalCode),e.\u0275\u0275advance(2),e.\u0275\u0275property("nationalCode",l.data.profile.nationalCode),e.\u0275\u0275advance(3),e.\u0275\u0275property("mat-dialog-close",!1)}},dependencies:[P.NgForOf,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,x.Nt,f.KE,f.hX,f.bx,f.R9,k.lW,T.gD,N.ey,d.ZT,d.uh,d.xY,d.H8,M.$,I.Mq,I.hl,I.nW]}),r})();var O=o(7392);function Y(r,s){1&r&&(e.\u0275\u0275elementStart(0,"mat-icon",1),e.\u0275\u0275text(1,"check"),e.\u0275\u0275elementEnd())}function R(r,s){1&r&&(e.\u0275\u0275elementStart(0,"mat-icon",1),e.\u0275\u0275text(1,"error"),e.\u0275\u0275elementEnd())}function G(r,s){if(1&r){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",6),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.onEditProfileClick())}),e.\u0275\u0275elementStart(1,"mat-icon"),e.\u0275\u0275text(2,"edit"),e.\u0275\u0275elementEnd()()}}const J=["*"];let W=(()=>{class r{constructor(t,l,i){this._profileService=t,this._dialog=l,this._fb=i,this.onTouched=()=>{},this.touched=!1,this.isDisabled=!1,this.fControl=i.nonNullable.control("",[C.O.nationalCodeChecker]),this.fControl.valueChanges.subscribe(()=>{this.markAsTouched()})}writeValue(t){(0,u.Z)(t)||this.fControl.setValue(t)}registerOnChange(t){this.fControl.valueChanges.subscribe(t)}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.isDisabled=t}validate(t){return t.hasValidator(n.kI.required)&&(0,c.Z)(this.fControl.value)?{required:!0}:0==this.profile?.isCompleted||(0,g.Z)(this.profile)?{inCompletedProfile:!0}:null}markAsTouched(){this.touched||(this.onTouched(),this.touched=!0)}onEditProfileClick(){this._dialog.open(A,{data:{profile:this.profile.profile,mode:this.profileMode},disableClose:!0}).afterClosed().subscribe(l=>{!0===l&&this.onSearchProfile()})}onSearchProfile(){this._profileService.getProfileWithNationalCode(this.fControl.value,a.v.jam,this.profileMode).subscribe(t=>{this.profile=t,this.fControl.setValue(this.profile.profile.nationalCode)})}}return r.\u0275fac=function(t){return new(t||r)(e.\u0275\u0275directiveInject(E.x),e.\u0275\u0275directiveInject(d.uw),e.\u0275\u0275directiveInject(n.qu))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["app-profile-check-input"]],inputs:{profileMode:"profileMode"},features:[e.\u0275\u0275ProvidersFeature([{provide:n.JU,multi:!0,useExisting:r},{provide:n.Cf,multi:!0,useExisting:r}])],ngContentSelectors:J,decls:15,vars:7,consts:[["matInput","",3,"formControl"],["matSuffix",""],["color","accent","matSuffix","","type","button","mat-icon-button","",3,"disabled","click"],["matSuffix","",4,"ngIf"],["mat-icon-button","","color","accent",3,"click",4,"ngIf"],[3,"innerText"],["mat-icon-button","","color","accent",3,"click"]],template:function(t,l){if(1&t&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"div")(1,"mat-form-field")(2,"mat-label"),e.\u0275\u0275projection(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"input",0),e.\u0275\u0275elementStart(5,"div",1)(6,"button",2),e.\u0275\u0275listener("click",function(){return l.onSearchProfile()}),e.\u0275\u0275elementStart(7,"mat-icon"),e.\u0275\u0275text(8,"search"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(9,Y,2,0,"mat-icon",3),e.\u0275\u0275template(10,R,2,0,"mat-icon",3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(11,G,3,0,"button",4),e.\u0275\u0275element(12,"span",5)(13,"span")(14,"span",5),e.\u0275\u0275elementEnd()),2&t){let i,h;e.\u0275\u0275advance(4),e.\u0275\u0275property("formControl",l.fControl),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",l.fControl.invalid),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",null==l.profile?null:l.profile.isCompleted),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!(null!=l.profile&&l.profile.isCompleted)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==l.profile?null:l.profile.editable),e.\u0275\u0275advance(1),e.\u0275\u0275property("innerText",null!==(i=null==l.profile||null==l.profile.profile?null:l.profile.profile.name)&&void 0!==i?i:"-"),e.\u0275\u0275advance(2),e.\u0275\u0275property("innerText",null!==(h=null==l.profile||null==l.profile.profile?null:l.profile.profile.family)&&void 0!==h?h:"-")}},dependencies:[P.NgIf,n.Fj,n.JJ,n.oH,x.Nt,f.KE,f.hX,f.R9,k.RK,O.Hw],styles:["span[_ngcontent-%COMP%]{display:inline}"]}),r})()},5130:(v,m,o)=>{o.d(m,{I:()=>n});const n=[{value:1,label:"\u062a\u0647\u0631\u0627\u0646"},{value:2,label:"\u06cc\u0632\u062f"},{value:3,label:"\u0634\u06cc\u0631\u0627\u0632"},{value:4,label:"\u0627\u0635\u0641\u0647\u0627\u0646"},{value:5,label:"\u06a9\u0631\u0645\u0627\u0646"},{value:6,label:"\u06a9\u0631\u062c"},{value:7,label:"\u0627\u0647\u0648\u0627\u0632"},{value:8,label:"\u0632\u0627\u0647\u062f\u0627\u0646"}]},7210:(v,m,o)=>{o.d(m,{D:()=>n});const n=[{value:1,lable:"\u0645\u0631\u062f"},{value:0,lable:"\u0632\u0646"}]}}]);