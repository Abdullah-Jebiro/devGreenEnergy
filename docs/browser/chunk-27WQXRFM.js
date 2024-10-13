import{a as Re,c as ke,k as Y,q as ct}from"./chunk-7DZNVVJB.js";import{a as ut}from"./chunk-4XBZLK6L.js";import"./chunk-AXPFAJA2.js";import{a as H}from"./chunk-2Q5GMZLP.js";import{a as lt}from"./chunk-3Z2KSGKD.js";import{$a as j,Db as Oe,Ea as P,Eb as Ve,Ec as st,Fb as Be,Fc as mt,Gb as $e,Gc as q,Ha as R,Hb as je,Ib as Ge,Ja as U,La as k,Lb as qe,Ma as O,Mb as He,Nb as Le,Ob as ze,Qa as De,Rb as Qe,Sa as V,Sb as Ke,Tb as We,Ua as Ne,Ub as Ze,Va as B,Vb as Ye,Wb as Je,Xb as Xe,Ya as $,Yb as et,Zb as tt,_b as it,ac as nt,bb as Ae,cb as W,dc as G,eb as Te,fa as K,fc as rt,ha as A,hb as Pe,hc as J,ic as ot,jc as X,ka as ye,kc as ee,lc as at,mc as te,nc as ie,ob as Z,oc as ne,rb as le,xa as T,ya as Fe}from"./chunk-QYZWJ7ML.js";import{$b as h,Ac as we,Bc as Ee,Ea as S,Fa as v,Fb as f,Gb as Ue,Hb as d,M as he,Sb as a,Tb as o,Ub as C,Vb as M,Wb as b,Yb as y,a as de,bc as g,ca as ge,ed as Q,fd as N,ga as _e,hc as oe,ib as l,ic as ae,id as Ie,ja as Ce,jb as p,jc as se,lb as be,mc as me,nc as s,oa as Se,oc as F,pa as ve,pc as _,ta as I,uc as D,v as pe,va as Me,wb as xe,y as z,z as fe}from"./chunk-WSHGJWKC.js";var L=(()=>{let r=class r{constructor(i){this.customService=i,this.baseUrl=`${le.apiUrl}/Users`}getStations(){return this.customService.getRequests(`${le.apiUrl}/Stations?Category=${lt.Stations}`)}getUsers(i,n,t,c){let u=new URLSearchParams;return n&&u.append("firstName",n),t&&u.append("lastName",t),c&&u.append("email",c),u.append("stationId",i.toString()),this.customService.getRequests(`${this.baseUrl}/allUsers?${u.toString()}`)}getUsersWithStations(i,n,t,c){return fe([this.getStations(),this.getUsers(i,n,t,c)]).pipe(z(([u,x])=>x.map(E=>{let ue=u.find(xt=>xt.id===E.stationId);return{id:E.id,email:E.email,firstName:E.firstName,lastName:E.lastName,stationId:ue?.id??0,station:ue?.title??"",emailConfirmed:E.emailConfirmed,roles:E.roles}})),_e(u=>console.table(u)),he(u=>(this.handleError(u),[])))}deleteUser(i){return this.customService.deleteRequest(`${this.baseUrl}/${i}`)}updateUser(i){return this.customService.putRequest(`${this.baseUrl}/${i.id}/update`,i)}getRoles(){return this.customService.getRequests(`${this.baseUrl}/roles`)}createUser(i){return this.customService.postRequest(`${this.baseUrl}`,i)}handleError(i){return console.error("An error occurred:",i),pe(i)}};r.\u0275fac=function(n){return new(n||r)(Se(Oe))},r.\u0275prov=Ce({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();var w=function(e){return e.SuperAdmin="SuperAdmin",e.Admin="Admin",e.Employee="Employee",e.SuperEmployee="SuperEmployee",e.Guest="Guest",e}(w||{});function It(e,r){if(e&1&&(a(0,"mat-option",18),s(1),o()),e&2){let m=r.$implicit;d("value",m.id),l(),_(" ",m.title," ")}}function yt(e,r){if(e&1){let m=y();a(0,"mat-chip-row",19),h("removed",function(){let n=S(m).$implicit,t=g();return v(t.remove(n))}),s(1),a(2,"button",20)(3,"mat-icon"),s(4,"cancel"),o()()()}if(e&2){let m=r.$implicit;l(),_(" ",m," "),l(),Ue("aria-label","\u0625\u0632\u0627\u0644\u0629 "+m)}}function Ft(e,r){if(e&1&&(a(0,"mat-option",18),s(1),o()),e&2){let m=r.$implicit;d("value",m),l(),_(" ",m," ")}}function Dt(e,r){e&1&&(M(0),a(1,"mat-checkbox",21),s(2,"\u062A\u0646\u0634\u064A\u0637 \u0627\u0644\u062D\u0633\u0627\u0628 "),o(),b())}var St=(()=>{let r=class r{constructor(i,n,t,c){this.snackBar=i,this.dialogRef=n,this.userService=t,this.data=c,this.fb=ve(j),this.roleCtrl=new De(""),this.availableRoles=[],this.separatorKeysCodes=[13,188],this.availableRoles=this.data.roles,this.stations=this.data.stations,this.updateUserForm=this.initForm(c.user),this.filteredRoles=this.roleCtrl.valueChanges.pipe(ge(""),z(u=>this._filter(u||"")))}ngOnInit(){}initForm(i){return this.fb.nonNullable.group(de({id:[i.id,U.required],firstName:[i.firstName],lastName:[i.lastName],stationId:[i.stationId],roles:[i.roles||[]]},this.data.currentUserIsAdmin&&{emailConfirmed:[i.emailConfirmed||!1]}))}_filter(i){let n=i.toLowerCase();return this.availableRoles.filter(t=>t.toLowerCase().includes(n))}onSubmit(){this.updateUserForm.valid?(this.updateUser=this.updateUserForm.value,this.userService.updateUser(this.updateUser).subscribe(()=>{this.dialogRef.close({clicked:"submit",form:this.updateUser}),this.snackBar.showSuccess("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0646\u062C\u0627\u062D")},i=>{console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645: ",i),this.snackBar.showError("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645")})):this.snackBar.showError("\u064A\u0631\u062C\u0649 \u0645\u0644\u0621 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629")}onCancel(){this.dialogRef.close({clicked:"cancel"})}add(i){let n=i.input,t=i.value?.trim();if(t&&!this.updateUserForm.get("roles")?.value.includes(t)){let c=this.updateUserForm.get("roles")?.value||[];c.push(t),this.updateUserForm.get("roles")?.setValue(c)}n&&(n.value=""),this.roleCtrl.setValue(null)}remove(i){let n=this.updateUserForm.get("roles")?.value||[],t=n.indexOf(i);t>=0&&(n.splice(t,1),this.updateUserForm.get("roles")?.setValue(n))}selected(i){let n=i.option.viewValue,t=this.updateUserForm.get("roles")?.value||[];t.includes(n)||(t.push(n),this.updateUserForm.get("roles")?.setValue(t)),this.roleCtrl.setValue(null)}};r.\u0275fac=function(n){return new(n||r)(p(H),p(X),p(L),p(ee))},r.\u0275cmp=I({type:r,selectors:[["app-update-user"]],standalone:!0,features:[D],decls:34,vars:11,consts:[["chipGrid",""],["auto","matAutocomplete"],["mat-dialog-title",""],[1,"center-content"],[3,"formGroup"],["appearance","fill"],["matInput","","formControlName","firstName"],["matInput","","formControlName","lastName"],["formControlName","stationId"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill",1,"example-chip-list"],["aria-label","\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062F\u0648\u0631"],[3,"removed",4,"ngFor","ngForOf"],["placeholder","\u0625\u0636\u0627\u0641\u0629 \u062F\u0648\u0631 \u062C\u062F\u064A\u062F...",3,"matChipInputTokenEnd","formControl","matChipInputFor","matAutocomplete","matChipInputSeparatorKeyCodes"],[3,"optionSelected"],[4,"ngIf"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"],[3,"value"],[3,"removed"],["matChipRemove",""],["formControlName","emailConfirmed"]],template:function(n,t){if(n&1){let c=y();a(0,"h2",2),s(1,"\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"),o(),a(2,"mat-dialog-content",3)(3,"form",4)(4,"mat-form-field",5)(5,"mat-label"),s(6,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644"),o(),C(7,"input",6),o(),a(8,"mat-form-field",5)(9,"mat-label"),s(10,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u062E\u064A\u0631"),o(),C(11,"input",7),o(),a(12,"mat-form-field",5)(13,"mat-label"),s(14,"(\u0627\u0644\u0645\u062D\u0637\u0629) \u0645\u0643\u0627\u0646 \u0627\u0644\u0639\u0645\u0644"),o(),a(15,"mat-select",8),f(16,It,2,2,"mat-option",9),o()(),a(17,"mat-form-field",10)(18,"mat-label"),s(19,"\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0645\u0641\u0636\u0644\u0629"),o(),a(20,"mat-chip-grid",11,0),f(22,yt,5,2,"mat-chip-row",12),o(),a(23,"input",13),h("matChipInputTokenEnd",function(x){return S(c),v(t.add(x))}),o(),a(24,"mat-autocomplete",14,1),h("optionSelected",function(x){return S(c),v(t.selected(x))}),f(26,Ft,2,2,"mat-option",9),we(27,"async"),o()(),f(28,Dt,3,0,"ng-container",15),o()(),a(29,"mat-dialog-actions")(30,"button",16),h("click",function(){return S(c),v(t.onCancel())}),s(31,"\u0625\u0644\u063A\u0627\u0621"),o(),a(32,"button",17),h("click",function(){return S(c),v(t.onSubmit())}),s(33,"\u0625\u0631\u0633\u0627\u0644"),o()()}if(n&2){let c,u=me(21),x=me(25);l(3),d("formGroup",t.updateUserForm),l(13),d("ngForOf",t.stations),l(6),d("ngForOf",(c=t.updateUserForm.get("roles"))==null?null:c.value),l(),d("formControl",t.roleCtrl)("matChipInputFor",u)("matAutocomplete",x)("matChipInputSeparatorKeyCodes",t.separatorKeysCodes),l(3),d("ngForOf",Ee(27,9,t.filteredRoles)),l(2),d("ngIf",t.data.currentUserIsAdmin)}},dependencies:[q,Q,N,G,P,T,rt,A,Z,V,R,k,O,Ne,B,$,te,ne,ie,W,K,Le,ze,qe,He,st,mt,Ie],styles:[".center-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}mat-form-field[_ngcontent-%COMP%]{width:100%;max-width:400px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}"]});let e=r;return e})();var vt=(()=>{let r=class r{set appHasPermission(i){this.authService.hasPermission(i)?this.viewContainer.createEmbeddedView(this.templateRef):this.viewContainer.clear()}constructor(i,n,t){this.templateRef=i,this.viewContainer=n,this.authService=t}};r.\u0275fac=function(n){return new(n||r)(p(be),p(xe),p(Y))},r.\u0275dir=Me({type:r,selectors:[["","appHasPermission",""]],inputs:{appHasPermission:"appHasPermission"},standalone:!0});let e=r;return e})();function Nt(e,r){if(e&1&&(a(0,"mat-error"),s(1),o()),e&2){let m=g();l(),_(" ",m.ValidatorsMsg.required," ")}}function At(e,r){if(e&1&&(a(0,"mat-error"),s(1),o()),e&2){let m=g();l(),_(" ",m.ValidatorsMsg.email," ")}}function Tt(e,r){if(e&1&&(a(0,"mat-error"),s(1),o()),e&2){let m=g();l(),_(" ",m.ValidatorsMsg.required," ")}}function Pt(e,r){if(e&1&&(a(0,"mat-error"),s(1),o()),e&2){let m=g();l(),_(" ",m.ValidatorsMsg.minLength," ")}}function Rt(e,r){if(e&1&&(a(0,"mat-error"),s(1),o()),e&2){let m=g();l(),_(" ",m.ValidatorsMsg.passwordErrorMessage," ")}}var Mt=(()=>{let r=class r{constructor(i,n,t,c,u){this.userService=i,this.fb=n,this.notificationSnackBarService=t,this.dialogRef=u,this.ValidatorsMsg={required:"\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",email:"\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u064A\u0645\u064A\u0644",passwordErrorMessage:"\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0631\u0642\u0645 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0648\u0623\u0646 \u062A\u0643\u0648\u0646 \u0623\u062D\u0631\u0641\u0647\u0627 \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0641\u0642\u0637",minLength:"\u064A\u062C\u0628 \u0627\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0627\u0642\u0644 8 \u0631\u0645\u0648\u0632"},this.addUser=this.fb.group({email:["",[U.required,U.email]],password:["",[U.required,U.minLength(8),U.pattern(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?]*$/)]]})}submit(){if(!this.addUser.valid){this.notificationSnackBarService.showError("\u064A\u0631\u062C\u0649 \u0645\u0644\u0621 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");return}let i=this.addUser.value;this.userService.createUser(i).subscribe({next:n=>{let t={id:Number.parseInt(n.id),email:i.email,emailConfirmed:!0,firstName:"",lastName:"",stationId:0,roles:[]};this.dialogRef.close({clicked:"submit",form:i,newUser:t}),this.notificationSnackBarService.showSuccess("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0628\u0646\u062C\u0627\u062D")},error:n=>{console.error("Error:",n),this.notificationSnackBarService.showError(`Error Code: ${n.status}
\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0625\u0636\u0627\u0641\u0629: ${n.message}`)},complete:()=>{console.log("Request complete")}})}};r.\u0275fac=function(n){return new(n||r)(p(L),p(j),p(H),p(ee),p(X))},r.\u0275cmp=I({type:r,selectors:[["app-add-user"]],standalone:!0,features:[D],decls:25,vars:7,consts:[[1,"form-container"],["mat-dialog-title",""],[1,"dialog-content"],[3,"ngSubmit","formGroup"],["appearance","fill",1,"user-details-input"],["matInput","","placeholder","\u0627\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645","formControlName","email"],[4,"ngIf"],["matInput","","type","password","placeholder","\u0627\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631","formControlName","password"],["mat-raised-button","","type","button","color","primary",3,"click"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(n,t){n&1&&(a(0,"div",0)(1,"h2",1),s(2,"\u0625\u0636\u0627\u0641\u0629 \u0645\u062D\u0637\u0629 \u062C\u062F\u064A\u062F\u0629"),o(),a(3,"mat-dialog-content",2)(4,"form",3),h("ngSubmit",function(){return t.submit()}),a(5,"mat-form-field",4)(6,"mat-label"),s(7,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"),o(),C(8,"input",5),a(9,"div"),f(10,Nt,2,1,"mat-error",6)(11,At,2,1,"mat-error",6),o()(),a(12,"mat-form-field",4)(13,"mat-label"),s(14,"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"),o(),C(15,"input",7),o(),a(16,"div"),f(17,Tt,2,1,"mat-error",6)(18,Pt,2,1,"mat-error",6)(19,Rt,2,1,"mat-error",6),o(),a(20,"mat-dialog-actions")(21,"button",8),h("click",function(){return t.dialogRef.close(!1)}),s(22," \u0625\u063A\u0644\u0627\u0642 "),o(),a(23,"button",9),s(24," \u0625\u0631\u0633\u0627\u0644 "),o()()()()()),n&2&&(l(4),d("formGroup",t.addUser),l(6),d("ngIf",t.addUser.get("email").hasError("required")&&t.addUser.get("email").touched),l(),d("ngIf",t.addUser.get("email").hasError("email")&&t.addUser.get("email").touched),l(6),d("ngIf",t.addUser.get("password").hasError("required")&&t.addUser.get("password").touched),l(),d("ngIf",t.addUser.get("password").hasError("minlength")&&t.addUser.get("password").touched),l(),d("ngIf",t.addUser.get("password").hasError("pattern")&&t.addUser.get("password").touched),l(4),d("disabled",t.addUser.invalid))},dependencies:[q,N,G,P,T,Fe,A,V,R,k,O,B,$,te,ne,ie,Ae],styles:[".user-details-input[_ngcontent-%COMP%]{width:95%}"]});let e=r;return e})();function kt(e,r){if(e&1&&(a(0,"mat-option",27),s(1),o()),e&2){let m=r.$implicit;d("value",m.id),l(),_(" ",m.title," ")}}function Ot(e,r){e&1&&(a(0,"th",28),s(1,"First Name"),o())}function Vt(e,r){if(e&1&&(a(0,"td",29),s(1),o()),e&2){let m=r.$implicit;l(),F(m.firstName)}}function Bt(e,r){e&1&&(a(0,"th",28),s(1,"Last Name"),o())}function $t(e,r){if(e&1&&(a(0,"td",29),s(1),o()),e&2){let m=r.$implicit;l(),F(m.lastName)}}function jt(e,r){e&1&&(a(0,"th",28),s(1,"Email"),o())}function Gt(e,r){if(e&1&&(a(0,"td",29),s(1),o()),e&2){let m=r.$implicit;l(),F(m.email)}}function qt(e,r){e&1&&(a(0,"th",28),s(1,"station"),o())}function Ht(e,r){if(e&1&&(a(0,"td",29),s(1),o()),e&2){let m=r.$implicit;l(),F(m.station)}}function Lt(e,r){e&1&&(a(0,"th",28),s(1,"Email Confirmed"),o())}function zt(e,r){if(e&1&&(a(0,"td",29),s(1),o()),e&2){let m=r.$implicit;l(),F(m.emailConfirmed?"Yes":"No")}}function Qt(e,r){e&1&&(M(0,30),f(1,Lt,2,0,"th",16)(2,zt,2,1,"td",17),b())}function Kt(e,r){e&1&&(a(0,"th",28),s(1,"Roles"),o())}function Wt(e,r){if(e&1&&(a(0,"div"),s(1),o()),e&2){let m=r.$implicit;l(),_("",m," ")}}function Zt(e,r){if(e&1&&(a(0,"td",29),f(1,Wt,2,1,"div",31),o()),e&2){let m=r.$implicit;l(),d("ngForOf",m.roles)}}function Yt(e,r){e&1&&(a(0,"th",32),s(1,"Actions"),o())}function Jt(e,r){if(e&1){let m=y();a(0,"button",36),h("click",function(){S(m);let n=g().$implicit,t=g();return v(t.openChangePassword(n.email))}),a(1,"mat-icon"),s(2,"lock"),o()()}}function Xt(e,r){if(e&1){let m=y();a(0,"td",29)(1,"button",33),h("click",function(){let n=S(m).$implicit,t=g();return v(t.confirmDeleteUser(n.id,n.username))}),a(2,"mat-icon"),s(3,"delete"),o()(),a(4,"button",34),h("click",function(){let n=S(m).$implicit,t=g();return v(t.openEditUserDialog(n))}),a(5,"mat-icon"),s(6,"edit"),o()(),f(7,Jt,3,0,"button",35),o()}e&2&&(l(7),d("appHasPermission","canChangePassword"))}function ei(e,r){e&1&&C(0,"tr",37)}function ti(e,r){e&1&&C(0,"tr",38)}var bt=(()=>{let r=class r{constructor(i,n,t,c,u,x){this.userService=i,this.formBuilder=n,this.dialog=t,this.snackBar=c,this.authService=u,this.permissionsService=x,this.displayedColumns=["firstName","lastName","email","station","roles","actions"],this.userDataSource=new nt([]),this.availableRoles=[],this.stations=[],this.currentUserIsAdmin=!1,this.canShowButton=!1,this.filterForm=this.formBuilder.group({firstName:[],lastName:[],email:[],stationId:[-1]})}ngOnInit(){this.initializeTable(),this.checkUserRole(),this.fetchUsers(-1),this.fetchRoles(),this.loadStations(),this.permissionsService.hasPermission("canChangePassword").then(i=>{i?(console.log("Permissions"),this.canShowButton=!0):(this.canShowButton=!1,console.log("No permissions"))}),console.log(this.userDataSource.data)}initializeTable(){this.userDataSource.paginator=this.paginator,this.userDataSource.sort=this.sort}checkUserRole(){this.authService.user().subscribe(i=>{this.currentUserIsAdmin=i.roles?.includes(w.Admin)||i.roles?.includes(w.SuperAdmin)||!1,this.currentUserIsAdmin&&this.displayedColumns.splice(4,0,"emailConfirmed")})}fetchUsers(i,n,t,c){this.userService.getUsersWithStations(i,n,t,c).subscribe(u=>{this.userDataSource.data=u})}loadStations(){this.userService.getStations().subscribe(i=>{this.stations=[{id:-1,title:"All"},{id:0,title:"None"},...i]},i=>{this.snackBar.showError("Error occurred while loading stations")})}applyFilters(){let{stationId:i,firstName:n,lastName:t,email:c}=this.filterForm.value;this.fetchUsers(i,n,t,c)}confirmDeleteUser(i,n){this.dialog.open(ut,{data:{id:i,name:n}}).afterClosed().subscribe(c=>{c&&this.userService.deleteUser(i).subscribe({next:()=>{this.userDataSource.data=this.userDataSource.data.filter(u=>u.id!==i),this.snackBar.showSuccess("User deleted successfully")},error:()=>{this.snackBar.showError("Error occurred while deleting the user")}})})}openEditUserDialog(i){this.dialog.open(St,{width:"350px",height:"600px",disableClose:!0,data:{user:i,roles:this.availableRoles,currentUserIsAdmin:this.currentUserIsAdmin,stations:this.stations}}).afterClosed().subscribe(t=>{t&&this.fetchUsers(-1)})}fetchRoles(){this.authService.user().subscribe(i=>{let n=i.roles||[];this.userService.getRoles().subscribe(t=>{let c=t.map(u=>u.title??"");n.includes(w.SuperAdmin)?this.availableRoles=c:n.includes(w.Admin)?this.availableRoles=c.filter(u=>u!==w.Admin&&u!==w.SuperAdmin):this.availableRoles=[]})})}openChangePassword(i){this.dialog.open(ct,{width:"350px",height:"500px",disableClose:!0,data:{email:i}}).afterClosed().subscribe(t=>{t&&this.fetchUsers(-1)})}createUser(){this.dialog.open(Mt,{width:"320px",disableClose:!0,height:"350px"}).afterClosed().subscribe(n=>{n?.clicked==="submit"&&n.newUser&&(this.userDataSource.data=[...this.userDataSource.data,n.newUser])})}};r.\u0275fac=function(n){return new(n||r)(p(L),p(j),p(at),p(H),p(Y),p(Re))},r.\u0275cmp=I({type:r,selectors:[["app-user-management"]],viewQuery:function(n,t){if(n&1&&(oe(J,5),oe(Pe,5)),n&2){let c;ae(c=se())&&(t.sort=c.first),ae(c=se())&&(t.paginator=c.first)}},standalone:!0,features:[D],decls:55,vars:6,consts:[[1,"header-content"],[1,"details-table"],[2,"margin-bottom","10px"],[1,"filter-container"],[1,"filter-form",3,"ngSubmit","formGroup"],["appearance","fill"],["matInput","","formControlName","firstName"],["matInput","","formControlName","lastName"],["matInput","","formControlName","email"],["formControlName","stationId"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","type","submit"],["matTooltip","\u0625\u0636\u0627\u0641\u0629 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F","aria-hidden","true","aria-label","Add new station",1,"add-icon",3,"click"],[1,"table-wrapper"],["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","firstName"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","lastName"],["matColumnDef","email"],["matColumnDef","station"],["matColumnDef","emailConfirmed",4,"ngIf"],["matColumnDef","roles"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"value"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["matColumnDef","emailConfirmed"],[4,"ngFor","ngForOf"],["mat-header-cell",""],["mat-icon-button","",1,"delete-icon",3,"click"],["mat-icon-button","",1,"edit-icon",3,"click"],["mat-icon-button","","class","lock-icon",3,"click",4,"appHasPermission"],["mat-icon-button","",1,"lock-icon",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(n,t){n&1&&(a(0,"mat-card")(1,"mat-card-header")(2,"div",0)(3,"div",1)(4,"mat-card-title"),s(5,"User Management"),o(),a(6,"mat-card-subtitle",2),s(7,"Manage Users"),o()()()(),a(8,"mat-card-content")(9,"div",3)(10,"form",4),h("ngSubmit",function(){return t.applyFilters()}),a(11,"mat-form-field",5)(12,"mat-label"),s(13,"First Name"),o(),C(14,"input",6),o(),a(15,"mat-form-field",5)(16,"mat-label"),s(17,"Last Name"),o(),C(18,"input",7),o(),a(19,"mat-form-field",5)(20,"mat-label"),s(21,"Email"),o(),C(22,"input",8),o(),a(23,"mat-form-field",5)(24,"mat-label"),s(25,"station"),o(),a(26,"mat-select",9),f(27,kt,2,2,"mat-option",10),o()(),a(28,"button",11),s(29,"Apply Filters"),o(),a(30,"mat-icon",12),h("click",function(){return t.createUser()}),s(31," add "),o()()(),a(32,"div",13)(33,"table",14),M(34,15),f(35,Ot,2,0,"th",16)(36,Vt,2,1,"td",17),b(),M(37,18),f(38,Bt,2,0,"th",16)(39,$t,2,1,"td",17),b(),M(40,19),f(41,jt,2,0,"th",16)(42,Gt,2,1,"td",17),b(),M(43,20),f(44,qt,2,0,"th",16)(45,Ht,2,1,"td",17),b(),f(46,Qt,3,0,"ng-container",21),M(47,22),f(48,Kt,2,0,"th",16)(49,Zt,2,1,"td",17),b(),M(50,23),f(51,Yt,2,0,"th",24)(52,Xt,8,1,"td",17),b(),f(53,ei,1,0,"tr",25)(54,ti,1,0,"tr",26),o()()()()),n&2&&(l(10),d("formGroup",t.filterForm),l(17),d("ngForOf",t.stations),l(6),d("dataSource",t.userDataSource),l(13),d("ngIf",t.displayedColumns.includes("emailConfirmed")),l(7),d("matHeaderRowDef",t.displayedColumns),l(),d("matRowDefColumns",t.displayedColumns))},dependencies:[q,Q,N,G,P,T,Qe,We,Xe,Ze,Ke,et,Ye,Je,tt,it,J,ot,A,ye,Te,Ve,$e,Ge,je,Be,Z,V,R,k,O,B,$,W,K,ke,vt],styles:["[_nghost-%COMP%]{display:block;padding:16px}mat-card[_ngcontent-%COMP%]{margin:20px auto;max-width:1200px}.header-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.details-table[_ngcontent-%COMP%]{display:flex;flex-direction:column}.filter-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px}.filter-container[_ngcontent-%COMP%]   .filter-form[_ngcontent-%COMP%]{display:flex;gap:18px;flex-wrap:wrap;align-items:center}.filter-container[_ngcontent-%COMP%]   .filter-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:200px}.filter-container[_ngcontent-%COMP%]   .filter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:8px}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto}table[_ngcontent-%COMP%]{width:100%}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.coulmnName[_ngcontent-%COMP%]{text-align:center}td.td-data[_ngcontent-%COMP%]{color:#fefefe;font-size:15px;text-align:right}.icon-btn[_ngcontent-%COMP%]{display:inline-flex;width:50px;height:50px;background-color:#1a5878;border-radius:50%;align-items:center;justify-content:center}.icon-btn[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%]{cursor:pointer;font-size:30px;color:#fff;margin-right:5px;margin-bottom:3px}  .delete-icon .mat-icon{color:red}.mat-sort-header-content[_ngcontent-%COMP%]{width:60px!important}mat-table[_ngcontent-%COMP%]{width:100%}mat-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]{background-color:#1a5878;color:#333;text-transform:uppercase}mat-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]{padding:16px;vertical-align:middle;color:#333;font-size:15px}mat-table[_ngcontent-%COMP%]   .delete-icon[_ngcontent-%COMP%]{color:red}mat-table[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%]{color:var(--second-color)}mat-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:4px 0}.pagination-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:20px 0}.lock-icon[_ngcontent-%COMP%]{cursor:pointer;color:#345892}"]});let e=r;return e})();var fn=[{path:"",component:bt}];export{fn as routes};
