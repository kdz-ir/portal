"use strict";(self.webpackChunkkdz_portal=self.webpackChunkkdz_portal||[]).push([[896],{2403:(N,h,r)=>{r.d(h,{J:()=>u});var l=r(2340),i=r(4650),f=r(529);let u=(()=>{class a{constructor(p){this._http=p,this._url=l.N.url+"/api/v1/account/jam/sport-insurance"}get sportInsurance(){return this._http.get(this._url)}check(p){return this._http.get(this._url+`/${p}`)}}return a.\u0275fac=function(p){return new(p||a)(i.LFG(f.eN))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},9896:(N,h,r)=>{r.r(h),r.d(h,{SingleModule:()=>nu});var l=r(7084),i=r(6630),f=r(5861),u=r(4650),a=r(4850),C=r(2403);const p=function(){var e=(0,f.Z)(function*(){const o=(0,u.f3M)(C.J),t=(0,u.f3M)(i.F0);return(yield o.sportInsurance.pipe((0,a.U)(s=>s.membershipIsExpired)).toPromise())||t.createUrlTree(["jam","register","single","sport-insurence"])});return function(){return e.apply(this,arguments)}}();var g=r(6895),d=r(4859);function y(e,o){1&e&&(u.TgZ(0,"button",19),u._uU(1,"\u062f\u0648\u0628\u0644"),u.qZA())}function k(e,o){1&e&&(u.TgZ(0,"button",20),u._uU(1,"\u0642\u0648\u0631\u0628\u0627\u063a\u0647"),u.qZA())}function L(e,o){1&e&&(u.TgZ(0,"button",21),u._uU(1,"\u06a9\u0631\u0627\u0644 \u067e\u0634\u062a"),u.qZA())}function E(e,o){1&e&&(u.TgZ(0,"button",22),u._uU(1,"\u0645\u062e\u062a\u0644\u0637"),u.qZA())}function P(e,o){1&e&&(u.TgZ(0,"button",23),u._uU(1,"\u0627\u0646\u0641\u0631\u0627\u062f\u06cc"),u.qZA())}let q=(()=>{class e{constructor(t){this._activatedRoute=t,this.gender=t.snapshot.data.gender,this.ageRange=t.snapshot.data.ageRange}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(i.gz))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-single-home-page"]],decls:66,vars:5,consts:[[1,"gap-2"],[1,"grid","grid-cols-2","gap-4"],["mat-flat-button","","routerLink","4/1","color","primary"],["mat-flat-button","","routerLink","double/4/4","color","accent"],["mat-flat-button","","routerLink","5/1","color","primary"],["mat-flat-button","","routerLink","double/5/2","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","double/5/4","color","accent"],["mat-flat-button","","routerLink","6/1","color","primary"],["mat-flat-button","","routerLink","double/6/2","color","accent"],["mat-flat-button","","routerLink","6/9","color","accent"],["mat-flat-button","","routerLink","6/5","color","accent"],["mat-flat-button","","routerLink","7/11","color","primary"],["mat-flat-button","","routerLink","7/12","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","7/14","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","7/13","color","accent",4,"ngIf"],["mat-flat-button","","routerLink","9/1","color","primary",4,"ngIf"],["mat-flat-button","","routerLink","8/8","color","primary"],["mat-flat-button","","routerLink","8/6","color","accent"],["mat-button","","routerLink","sport-insurence"],["mat-flat-button","","routerLink","double/5/2","color","accent"],["mat-flat-button","","routerLink","7/12","color","accent"],["mat-flat-button","","routerLink","7/14","color","accent"],["mat-flat-button","","routerLink","7/13","color","accent"],["mat-flat-button","","routerLink","9/1","color","primary"]],template:function(t,n){1&t&&(u.TgZ(0,"mat-accordion",0)(1,"mat-expansion-panel")(2,"mat-expansion-panel-header")(3,"mat-panel-title"),u._uU(4," \u0628\u062f\u0645\u06cc\u0646\u062a\u0648\u0646 "),u.qZA(),u._UZ(5,"mat-panel-description"),u.qZA(),u.TgZ(6,"div",1)(7,"a",2),u._uU(8,"\u0627\u0646\u0641\u0631\u0627\u062f\u06cc"),u.qZA(),u.TgZ(9,"a",3),u._uU(10,"\u062f\u0648\u0628\u0644 \u0645\u06cc\u06a9\u0633"),u.qZA()()(),u.TgZ(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),u._uU(14," \u062a\u0646\u06cc\u0633 \u0631\u0648\u06cc \u0645\u06cc\u0632 "),u.qZA(),u._UZ(15,"mat-panel-description"),u.qZA(),u.TgZ(16,"div",1)(17,"button",4),u._uU(18,"\u0627\u0646\u0641\u0631\u0627\u062f\u06cc"),u.qZA(),u.YNc(19,y,2,0,"button",5),u.TgZ(20,"button",6),u._uU(21,"\u062f\u0648\u0628\u0644 \u0645\u06cc\u06a9\u0633"),u.qZA()()(),u.TgZ(22,"mat-expansion-panel")(23,"mat-expansion-panel-header")(24,"mat-panel-title"),u._uU(25," \u0634\u0637\u0631\u0646\u062c "),u.qZA(),u._UZ(26,"mat-panel-description"),u.qZA(),u.TgZ(27,"div",1)(28,"button",7),u._uU(29,"\u0627\u0646\u0641\u0631\u0627\u062f\u06cc"),u.qZA(),u.TgZ(30,"button",8),u._uU(31,"\u062f\u0648\u0628\u0644"),u.qZA(),u.TgZ(32,"button",9),u._uU(33,"\u0645\u0637\u0631\u0646\u062c"),u.qZA(),u.TgZ(34,"button",10),u._uU(35,"\u0628\u0644\u06cc\u062a\u0633"),u.qZA()()(),u.TgZ(36,"mat-expansion-panel")(37,"mat-expansion-panel-header")(38,"mat-panel-title"),u._uU(39," \u0634\u0646\u0627 "),u.qZA(),u._UZ(40,"mat-panel-description"),u.qZA(),u.TgZ(41,"div",1)(42,"button",11),u._uU(43,"\u06a9\u0631\u0627\u0644 \u0633\u06cc\u0646\u0647"),u.qZA(),u.YNc(44,k,2,0,"button",12),u.YNc(45,L,2,0,"button",13),u.YNc(46,E,2,0,"button",14),u.qZA()(),u.TgZ(47,"mat-expansion-panel")(48,"mat-expansion-panel-header")(49,"mat-panel-title"),u._uU(50," \u0622\u0645\u0627\u062f\u06af\u06cc \u062c\u0633\u0645\u0627\u0646\u06cc "),u.qZA(),u._UZ(51,"mat-panel-description"),u.qZA(),u.TgZ(52,"div",1),u.YNc(53,P,2,0,"button",15),u.qZA()(),u.TgZ(54,"mat-expansion-panel")(55,"mat-expansion-panel-header")(56,"mat-panel-title"),u._uU(57," \u062f\u0648\u0686\u0631\u062e\u0647 \u0633\u0648\u0627\u0631\u06cc "),u.qZA(),u._UZ(58,"mat-panel-description"),u.qZA(),u.TgZ(59,"div",1)(60,"button",16),u._uU(61,"\u0627\u0633\u062a\u0642\u0627\u0645\u062a"),u.qZA(),u.TgZ(62,"button",17),u._uU(63,"\u062a\u0627\u06cc\u0645 \u062a\u0631\u06cc\u0644 \u0633\u0631\u0639\u062a"),u.qZA()()()(),u.TgZ(64,"a",18),u._uU(65," \u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc"),u.qZA()),2&t&&(u.xp6(19),u.Q6J("ngIf",1==n.gender),u.xp6(25),u.Q6J("ngIf",3==n.ageRange),u.xp6(1),u.Q6J("ngIf",3==n.ageRange&&0==n.gender),u.xp6(1),u.Q6J("ngIf",3!=n.ageRange),u.xp6(7),u.Q6J("ngIf",1==n.gender&&1==n.ageRange))},dependencies:[g.O5,d.zs,d.lW,i.rH,l.pp,l.ib,l.yz,l.yK,l.u4]}),e})();var M=r(9078),A=r(3472);function D(e,o){1&e&&(u.TgZ(0,"a",7),u._uU(1,"\u0633\u0627\u0645\u0627\u0646\u0647 \u0641\u062f\u0631\u0627\u0633\u06cc\u0648\u0646 \u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc"),u.qZA())}function J(e,o){1&e&&(u.TgZ(0,"button",8),u._uU(1,"\u0627\u062f\u0627\u0645\u0647 \u062b\u0628\u062a \u0646\u0627\u0645"),u.qZA())}let Y=(()=>{class e{constructor(t,n){this._route=t,this._sportInsuranceRepo=n,this.isLoading=!1}ngOnInit(){this.sportInsurance=this._route.snapshot.data.sportInsurance}onRefreshClicked(){this.isLoading=!0,this._sportInsuranceRepo.sportInsurance.subscribe(t=>{this.sportInsurance=t,this.isLoading=!1})}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(i.gz),u.Y36(C.J))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-sport-insurence-page"]],decls:17,vars:4,consts:[[1,"md:win-w-full","mt-10","flex","flex-col","gap-2","mx-3"],[1,"text-justify"],["href","http://ifsm.ir"],[3,"innerText"],["mat-flat-button","","color","primary","class","w-full","target","_blank","href","http://ifsm.ir",4,"ngIf"],["mat-flat-button","",1,"w-full",3,"largeLoading","click"],["mat-flat-button","","color","accent","routerLink","/jam/register/single","class","w-full",4,"ngIf"],["mat-flat-button","","color","primary","target","_blank","href","http://ifsm.ir",1,"w-full"],["mat-flat-button","","color","accent","routerLink","/jam/register/single",1,"w-full"]],template:function(t,n){if(1&t&&(u.TgZ(0,"div",0)(1,"p",1),u._uU(2,"\u0628\u06cc\u0645\u0647 \u0648\u0632\u0631\u0634\u06cc \u0645\u0639\u062a\u0628\u0631 \u0628\u0631\u0627\u06cc \u0634\u0631\u06a9\u062a \u062f\u0631 \u062c\u0627\u0645 \u062c\u0627\u0646\u0628\u0627\u062e\u062a\u06af\u0627\u0646 \u0636\u0631\u0648\u0631\u06cc \u0627\u0633\u062a. \u0627\u06cc\u0646 \u0633\u06cc\u0633\u062a\u0645 \u0628\u0647 \u0635\u0648\u0631\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0632 \u0633\u0627\u0645\u0627\u0646\u0647 \u0641\u062f\u0631\u0627\u0633\u06cc\u0648\u0646 \u0628\u06cc\u0645\u0647 \u0648\u0632\u0631\u0634\u06cc \u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0627\u0639\u062a\u0628\u0627\u0631 \u0628\u06cc\u0645\u0647 \u0634\u0645\u0627 \u0631\u0627 \u0645\u06cc\u06af\u06cc\u0631\u062f. \u062f\u0631 \u0635\u0648\u0631\u062a \u0646\u062f\u0627\u0634\u062a\u0646 \u0627\u0639\u062a\u0628\u0627\u0631 \u0634\u0645\u0627 \u0627\u0645\u06a9\u0627\u0646 \u062b\u0628\u062a \u0646\u0627\u0645 \u062f\u0631 \u067e\u06cc\u06a9\u0627\u0631 \u0647\u0627\u06cc \u0648\u0631\u0632\u0634\u06cc \u062c\u0627\u0645 \u062c\u0627\u0646\u0628\u0627\u062e\u062a\u06af\u0627\u0646 \u0631\u0627 \u0646\u062f\u0627\u0631\u06cc\u062f."),u.qZA(),u.TgZ(3,"p"),u._uU(4,"\u0628\u0631\u0627\u06cc \u062a\u0645\u062f\u06cc\u062f \u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc \u0627\u0632 \u0633\u0627\u0645\u0627\u0646\u0647 "),u.TgZ(5,"a",2),u._uU(6,"\u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc \u0628\u0627 \u0627\u062f\u0631\u0633 ifsm.ir "),u.qZA(),u._uU(7,"\u0627\u0642\u062f\u0627\u0645 \u0646\u0645\u0627\u06cc\u06cc\u062f."),u.qZA(),u.TgZ(8,"div")(9,"span"),u._uU(10,"\u062a\u0627\u0631\u06cc\u062e \u0627\u0639\u062a\u0628\u0627\u0631 \u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc \u0634\u0645\u0627: "),u.qZA(),u._UZ(11,"span",3),u.qZA(),u.YNc(12,D,2,0,"a",4),u.TgZ(13,"button",5),u.NdJ("click",function(){return n.onRefreshClicked()}),u._uU(14,"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0645\u0647 \u0648\u0631\u0632\u0634\u06cc"),u.qZA(),u.YNc(15,J,2,0,"button",6),u._UZ(16,"app-back-button"),u.qZA()),2&t){let s;u.xp6(11),u.Q6J("innerText",null!==(s=null==n.sportInsurance?null:n.sportInsurance.persianExpireDate)&&void 0!==s?s:"--"),u.xp6(1),u.Q6J("ngIf",!(null!=n.sportInsurance&&n.sportInsurance.membershipIsExpired)),u.xp6(1),u.Q6J("largeLoading",n.isLoading),u.xp6(2),u.Q6J("ngIf",null==n.sportInsurance?null:n.sportInsurance.membershipIsExpired)}},dependencies:[g.O5,d.zs,d.lW,M.M,A.W,i.rH]}),e})();var F=r(2340),b=r(6842);let S=(()=>{class e extends b.x{constructor(){super(),this._url=F.N.url+"/api/v1/account/jam/single"}register(t,n){return this.http.post(this._url+"/register",{field:t,subField:n})}getRegisteredStatus(t,n){return this.http.post(this._url+"/status",{field:t,subField:n})}delete(t,n){return this.http.post(this._url+"/delete",{field:t,subField:n})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var T=r(599),m=r(3546);function B(e,o){if(1&e){const t=u.EpF();u.TgZ(0,"div",2)(1,"p"),u._uU(2),u.qZA(),u.TgZ(3,"p"),u._uU(4,"\u0634\u0645\u0627 \u0628\u0627 \u062b\u0628\u062a \u0646\u0627\u0645 \u062f\u0631 \u0627\u06cc\u0646 \u0631\u0634\u062a\u0647 \u0642\u0628\u0648\u0644 \u06a9\u0631\u062f\u06cc\u062f \u06a9\u0647 "),u.TgZ(5,"a",3),u._uU(6,"\u0622\u06cc\u06cc\u0646 \u0646\u0627\u0645\u0647 \u062c\u0627\u0645 \u062c\u0627\u0646\u200c\u0628\u0627\u062e\u062a\u06af\u0627\u0646"),u.qZA(),u._uU(7),u.qZA(),u.TgZ(8,"button",4),u.NdJ("click",function(){u.CHM(t);const s=u.oxw();return u.KtG(s.onWantRegister())}),u._uU(9,"\u062b\u0628\u062a \u0646\u0627\u0645"),u.qZA()()}if(2&e){const t=u.oxw();u.xp6(2),u.AsE("\u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0638\u0631 \u0634\u0645\u0627 \u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a \u0646\u0627\u0645 \u062f\u0631 ",t.sportName," ",t.subFieldName," \u0647\u0633\u062a\u06cc\u062f."),u.xp6(5),u.hij(" \u0648 \u0622\u06cc\u06cc\u0646 \u0646\u0627\u0645\u0647 \u0631\u0634\u062a\u0647 ",t.sportName," \u0631\u0627 \u062e\u0648\u0627\u0646\u062f\u0647 \u0648 \u0642\u0628\u0648\u0644 \u062f\u0627\u0631\u06cc\u062f.")}}function W(e,o){if(1&e){const t=u.EpF();u.TgZ(0,"p"),u._uU(1),u.qZA(),u.TgZ(2,"button",5),u.NdJ("click",function(){u.CHM(t);const s=u.oxw();return u.KtG(s.onWantDelete())}),u._uU(3,"\u062d\u0630\u0641 \u062b\u0628\u062a \u0646\u0627\u0645"),u.qZA()}if(2&e){const t=u.oxw();u.xp6(1),u.AsE(" \u0634\u0645\u0627 \u062f\u0631 ",t.sportName," ",t.subFieldName," \u062b\u0628\u062a \u0646\u0627\u0645 \u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f. ")}}let O=(()=>{class e{constructor(t,n,s,_,Z){this._singleService=t,this._router=n,this._location=s,this._activetedRoute=_,this._swalService=Z,this.isLoading=!1,this._field=_.snapshot.params.field,this._subField=_.snapshot.params.subField,this.isRegistered=this._activetedRoute.snapshot.data.registeredStatus,this.sportName=this._activetedRoute.snapshot.data.sportName,this.subFieldName=this._activetedRoute.snapshot.data.subFieldName}onWantRegister(){1!=this.isLoading&&(this.isLoading=!0,this._singleService.register(this._field,this._subField).subscribe(t=>{this._swalService.successFullRegister(),this.isLoading=!1,this._location.back()}))}onWantDelete(){var t=this;return(0,f.Z)(function*(){(yield t._swalService.showWarnMessage()).isConfirmed&&t._singleService.delete(t._field,t._subField).subscribe(s=>{t._swalService.successFullSubmited(),t._location.back()})})()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(S),u.Y36(i.F0),u.Y36(g.Ye),u.Y36(i.gz),u.Y36(T.J))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-single-register-page"]],decls:8,vars:4,consts:[["class","flex flex-col gap-2",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"flex","flex-col","gap-2"],["target","_blank","href","https://kdz.ir/15605/"],["mat-raised-button","","color","accent",1,"w-full",3,"click"],["mat-raised-button","","color","warn",1,"w-full",3,"click"]],template:function(t,n){if(1&t&&(u.TgZ(0,"mat-card")(1,"mat-card-title"),u._uU(2),u.qZA(),u.YNc(3,B,10,3,"div",0),u.YNc(4,W,4,2,"ng-template",null,1,u.W1O),u.TgZ(6,"mat-card-actions"),u._UZ(7,"app-back-button"),u.qZA()()),2&t){const s=u.MAs(5);u.xp6(2),u.AsE(" ",n.sportName," ",n.subFieldName," "),u.xp6(1),u.Q6J("ngIf",!n.isRegistered.isRegistered)("ngIfElse",s)}},dependencies:[g.O5,d.lW,A.W,m.a8,m.hq,m.n5]}),e})();var c=r(4006),z=r(7846),G=r(5980);let R=(()=>{class e extends b.x{constructor(){super(),this._url=F.N.url+"/api/v1/account/jam/double"}register(t,n,s){return this.http.post(this._url,{field:t,subField:n,individuals:s})}individuals(t,n){return this.http.post(this._url+"/individuals",{field:t,subField:n})}delete(t,n){return this.http.post(this._url+"/delete",{field:t,subField:n})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Q=r(2676);function j(e,o){if(1&e&&(u.ynx(0),u.TgZ(1,"app-profile-check-input",7),u._uU(2),u.qZA(),u.BQk()),2&e){const t=o.index,n=u.oxw(2);u.xp6(1),u.Q6J("formControlName",t)("profileMode",n.profileMode.needed),u.xp6(1),u.hij("\u06a9\u062f \u0645\u0644\u06cc \u06cc\u0627\u0631 ",t+1,"")}}function H(e,o){if(1&e){const t=u.EpF();u.TgZ(0,"div")(1,"h3"),u._uU(2),u.qZA(),u.TgZ(3,"form",2),u.NdJ("submit",function(){u.CHM(t);const s=u.oxw();return u.KtG(s.onSubmited())}),u.TgZ(4,"div",3),u.YNc(5,j,3,3,"ng-container",4),u.qZA(),u.TgZ(6,"p"),u._uU(7,"\u062a\u0645\u0627\u0645 \u0627\u0641\u0631\u0627\u062f \u062a\u06cc\u0645 \u0634\u0645\u0627 \u0628\u0627 \u062b\u0628\u062a \u0646\u0627\u0645 \u062f\u0631 \u0627\u06cc\u0646 \u0631\u0634\u062a\u0647 \u0642\u0628\u0648\u0644 \u06a9\u0631\u062f\u06cc\u062f \u0627\u0646\u062f \u06a9\u0647 "),u.TgZ(8,"a",5),u._uU(9,"\u0622\u06cc\u06cc\u0646 \u0646\u0627\u0645\u0647 \u062c\u0627\u0645 \u062c\u0627\u0646\u200c\u0628\u0627\u062e\u062a\u06af\u0627\u0646"),u.qZA(),u._uU(10),u.qZA(),u.TgZ(11,"button",6),u._uU(12,"\u062b\u0628\u062a"),u.qZA()()()}if(2&e){const t=u.oxw();u.xp6(2),u.AsE("\u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0638\u0631 \u0634\u0645\u0627 \u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u0646\u0627\u0645 \u062f\u0631 ",t.sportName," ",t.subFieldName," \u0647\u0633\u062a\u06cc\u062f."),u.xp6(1),u.Q6J("formGroup",t.fGroup),u.xp6(2),u.Q6J("ngForOf",t.fGroup.controls.individuals.controls),u.xp6(5),u.hij(" \u0648 \u0622\u06cc\u06cc\u0646 \u0646\u0627\u0645\u0647 \u0631\u0634\u062a\u0647 ",t.sportName," \u0631\u0627 \u062e\u0648\u0646\u062f\u0647 \u0648 \u0642\u0628\u0648\u0644 \u062f\u0627\u0631\u0646\u062f."),u.xp6(1),u.Q6J("disabled",t.fGroup.invalid)}}function K(e,o){if(1&e){const t=u.EpF();u.TgZ(0,"p"),u._uU(1),u.qZA(),u.TgZ(2,"button",8),u.NdJ("click",function(){u.CHM(t);const s=u.oxw();return u.KtG(s.onWantDelete())}),u._uU(3,"\u062d\u0630\u0641 \u062b\u0628\u062a \u0646\u0627\u0645"),u.qZA()}if(2&e){const t=u.oxw();u.xp6(1),u.AsE(" \u0634\u0645\u0627 \u062f\u0631 ",t.sportName," ",t.subFieldName," \u062b\u0628\u062a \u0646\u0627\u0645 \u06a9\u0631\u062f\u0647 \u0627\u06cc\u062f. ")}}let X=(()=>{class e{constructor(t,n,s,_,Z){this._activetedRoute=t,this._fb=n,this._location=s,this._doubleService=_,this._swalService=Z,this.isLoading=!1,this.profileMode=G.g,this._field=t.snapshot.params.field,this._subField=t.snapshot.params.subField,this.isRegistered=this._activetedRoute.snapshot.data.registeredStatus,this.sportName=this._activetedRoute.snapshot.data.sportName,this.subFieldName=this._activetedRoute.snapshot.data.subFieldName,this.individual=this._activetedRoute.snapshot.data.individuals[0],this.isRegistered=this._activetedRoute.snapshot.data.registeredStatus}ngOnInit(){const t=[];for(let n=0;n<this.individual.min-1;n++)t.push(this._fb.control("",[c.kI.required,z.O.nationalCodeChecker]));this.fGroup=this._fb.group({individuals:this._fb.array(t)})}onSubmited(){1!=this.isLoading&&(this.isLoading=!0,this._doubleService.register(this._field,this._subField,this.fGroup.value.individuals).subscribe(()=>{this._swalService.successFullRegister(),this.isLoading=!1,this._location.back()}))}onWantDelete(){var t=this;return(0,f.Z)(function*(){(yield t._swalService.showWarnMessage()).isConfirmed&&t._doubleService.delete(t._field,t._subField).subscribe(s=>{t._swalService.successFullSubmited(),t._location.back()})})()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(i.gz),u.Y36(c.qu),u.Y36(g.Ye),u.Y36(R),u.Y36(T.J))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-double-register-page"]],decls:9,vars:4,consts:[[4,"ngIf","ngIfElse"],["elseBlock",""],[3,"formGroup","submit"],["formArrayName","individuals",1,"flex","m-3","flex-col","md:max-w-md"],[4,"ngFor","ngForOf"],["target","_blank","href","https://kdz.ir/15605/"],["type","submit","color","accent","mat-raised-button","",1,"w-full",3,"disabled"],[3,"formControlName","profileMode"],["mat-button","","color","warn",1,"w-full",3,"click"]],template:function(t,n){if(1&t&&(u.TgZ(0,"mat-card")(1,"mat-card-title"),u._uU(2),u.qZA(),u.TgZ(3,"mat-card-content"),u.YNc(4,H,13,6,"div",0),u.YNc(5,K,4,2,"ng-template",null,1,u.W1O),u.qZA(),u.TgZ(7,"mat-card-actions"),u._UZ(8,"app-back-button"),u.qZA()()),2&t){const s=u.MAs(6);u.xp6(2),u.AsE(" ",n.sportName," ",n.subFieldName," "),u.xp6(2),u.Q6J("ngIf",!n.isRegistered.isRegistered)("ngIfElse",s)}},dependencies:[g.sg,g.O5,c._Y,c.JJ,c.JL,c.sg,c.u,c.CE,d.lW,A.W,Q.p,m.a8,m.hq,m.dn,m.n5]}),e})();const x=e=>{const o=e.params.field,t=e.params.subField;return(0,u.f3M)(S).getRegisteredStatus(o,t)};var v=r(795);const I=e=>{const o=e.params.field;return(0,u.f3M)(v.e).getSportName(o)},U=e=>{const o=e.params.subField;return(0,u.f3M)(v.e).getSubSportName(o)},uu=[{path:"sport-insurence",component:Y,resolve:{sportInsurance:()=>(0,u.f3M)(C.J).sportInsurance}},{path:"",canActivate:[p],children:[{path:"",component:q,resolve:{gender:()=>(0,u.f3M)(b.x).profileData().pipe((0,a.U)(e=>e.entity.sexRaw)),ageRange:()=>(0,u.f3M)(v.e).ageRange.pipe((0,a.U)(e=>e.ageRange))}},{path:":field/:subField",component:O,resolve:{registeredStatus:x,sportName:I,subFieldName:U}},{path:"double/:field/:subField",component:X,resolve:{sportName:I,subFieldName:U,individuals:e=>{const o=e.params.field,t=e.params.subField;return(0,u.f3M)(R).individuals(o,t)},registeredStatus:x}}]}];let tu=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[i.Bz.forChild(uu),i.Bz]}),e})();var eu=r(35);let nu=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[eu._,tu,l.To]}),e})()}}]);