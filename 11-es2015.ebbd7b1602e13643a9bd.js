(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2tqA":function(t,e,c){"use strict";c.r(e),c.d(e,"SalaryModule",(function(){return It}));var a=c("ofXK"),i=c("tyNb"),r=c("fXoL"),s=c("3Pt+"),n=c("FtGj"),o=c("JX91"),l=c("lJxs"),u=c("dNgK"),d=c("tk/3"),h=c("z6cu"),m=c("JIr8"),p=c("AytR");let f=(()=>{class t{constructor(t){this._http=t,this._apiUrl=p.a.apiBaseUrl,this.httpOptions={headers:new d.d({"Content-Type":"Application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),crossDomain:!0}}handleError(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Back-end returned code ${t.status}, body was: `+t.error),Object(h.a)("Something bad happened; please try again later.")}extractData(t){return t||{}}getSalryType(){return this._http.get(this._apiUrl+"setup/getsalarytypes").pipe(Object(l.a)(this.extractData),Object(m.a)(this.handleError))}getSalaryDetails(t){return this._http.get(this._apiUrl+"accounts/getsalarydetails?id="+t).pipe(Object(l.a)(this.extractData),Object(m.a)(this.handleError))}getAllTransaction(t){return this._http.get(this._apiUrl+"accounts/getsalarytransaction?teacherid="+t).pipe(Object(l.a)(this.extractData),Object(m.a)(this.handleError))}getAllSalaryDetails(t){return this._http.get(this._apiUrl+"accounts/getallsalarydetails?id="+t).pipe(Object(l.a)(this.extractData),Object(m.a)(this.handleError))}saveSalary(t){return this._http.post(this._apiUrl+"accounts/addsalary",t).pipe(Object(l.a)(this.extractData),Object(m.a)(this.handleError))}searchTeacher(){return this._http.get(this._apiUrl+"teacher/GetTeacherSearch").pipe(Object(l.a)(this.extractData),Object(m.a)(this.handleError))}updateSalary(t,e){return this._http.put(this._apiUrl+"accounts/updatesalary",e).pipe(Object(m.a)(this.handleError))}deleteSalary(t){return this._http.delete(`${this._apiUrl}accounts/deletesalary?id=${t}`).pipe(Object(m.a)(this.handleError))}}return t.\u0275fac=function(e){return new(e||t)(r.rc(d.b))},t.\u0275prov=r.Zb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var y=c("kmnG"),b=c("qFsG"),g=c("/1cH"),j=c("bTqV"),S=c("Wp6s"),E=c("FKr1"),w=c("d3UM"),I=c("iadO"),D=c("bSwM"),v=c("+0xr"),P=c("0EQZ"),L=c("Dh3D"),W=c("M9IT"),C=c("NFeN"),F=c("1kSV");function U(t,e){1&t&&(r.jc(0,"div",26),r.ec(1,"img",27),r.jc(2,"p",28),r.Wc(3,"loading..."),r.ic(),r.ic())}function k(t,e){if(1&t){const t=r.kc();r.jc(0,"th",29),r.jc(1,"mat-checkbox",30),r.uc("change",(function(e){r.Oc(t);const c=r.yc();return e?c.masterToggle():null})),r.ic(),r.ic()}if(2&t){const t=r.yc();r.Pb(1),r.Ec("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("aria-label",t.checkboxLabel())}}function _(t,e){if(1&t){const t=r.kc();r.jc(0,"td",31),r.jc(1,"mat-checkbox",32),r.uc("click",(function(e){return r.Oc(t),e.stopPropagation()}))("change",(function(c){r.Oc(t);const a=e.$implicit,i=r.yc();return c?i.selection.toggle(a):null})),r.ic(),r.ic()}if(2&t){const t=e.$implicit,c=r.yc();r.Pb(1),r.Ec("checked",c.selection.isSelected(t))("aria-label",c.checkboxLabel(t))}}function O(t,e){1&t&&(r.jc(0,"th",33),r.Wc(1,"Name"),r.ic())}function A(t,e){if(1&t&&(r.jc(0,"span"),r.Wc(1),r.ic()),2&t){const t=r.yc().$implicit;r.Pb(1),r.Xc(t.name)}}function N(t,e){if(1&t&&(r.jc(0,"td",31),r.Uc(1,A,2,1,"span",34),r.ic()),2&t){const t=e.$implicit;r.yc();const c=r.Mc(47);r.Pb(1),r.Ec("ngIf",t.name)("ngIfElse",c)}}function T(t,e){1&t&&(r.jc(0,"th",33),r.Wc(1,"Gross Salary"),r.ic())}function x(t,e){if(1&t&&(r.jc(0,"span"),r.Wc(1),r.zc(2,"currency"),r.ic()),2&t){const t=r.yc().$implicit;r.Pb(1),r.Xc(r.Bc(2,1,t.grosssalary,"INR"))}}function R(t,e){if(1&t&&(r.jc(0,"td",31),r.Uc(1,x,3,4,"span",34),r.ic()),2&t){const t=e.$implicit;r.yc();const c=r.Mc(47);r.Pb(1),r.Ec("ngIf",t.grosssalary)("ngIfElse",c)}}function q(t,e){1&t&&(r.jc(0,"th",33),r.Wc(1,"Net Salary"),r.ic())}function $(t,e){if(1&t&&(r.jc(0,"span"),r.Wc(1),r.zc(2,"currency"),r.ic()),2&t){const t=r.yc().$implicit;r.Pb(1),r.Xc(r.Bc(2,1,t.netsalary,"INR"))}}function M(t,e){if(1&t&&(r.jc(0,"td",31),r.Uc(1,$,3,4,"span",34),r.ic()),2&t){const t=e.$implicit;r.yc();const c=r.Mc(47);r.Pb(1),r.Ec("ngIf",t.netsalary)("ngIfElse",c)}}function B(t,e){1&t&&(r.jc(0,"th",33),r.Wc(1,"Pay Amount "),r.ic())}function z(t,e){if(1&t&&(r.jc(0,"span",36),r.Wc(1),r.zc(2,"currency"),r.ic()),2&t){const t=r.yc().$implicit;r.Pb(1),r.Yc(" ",r.Bc(2,1,t.payamount,"INR")," ")}}function X(t,e){if(1&t&&(r.jc(0,"td",31),r.Uc(1,z,3,4,"span",35),r.ic()),2&t){const t=e.$implicit;r.yc();const c=r.Mc(47);r.Pb(1),r.Ec("ngIf",t.payamount)("ngIfElse",c)}}function G(t,e){1&t&&(r.jc(0,"th",33),r.Wc(1,"PF Amount "),r.ic())}function V(t,e){if(1&t&&(r.jc(0,"span",36),r.Wc(1),r.zc(2,"currency"),r.ic()),2&t){const t=r.yc().$implicit;r.Pb(1),r.Yc(" ",r.Bc(2,1,t.PFamount,"INR")," ")}}function H(t,e){if(1&t&&(r.jc(0,"td",31),r.Uc(1,V,3,4,"span",35),r.ic()),2&t){const t=e.$implicit;r.yc();const c=r.Mc(47);r.Pb(1),r.Ec("ngIf",t.PFamount)("ngIfElse",c)}}function J(t,e){1&t&&(r.jc(0,"th",33),r.Wc(1,"Pay Date "),r.ic())}function Z(t,e){if(1&t&&(r.jc(0,"span",36),r.Wc(1),r.zc(2,"date"),r.ic()),2&t){const t=r.yc().$implicit;r.Pb(1),r.Yc(" ",r.Bc(2,1,t.paydate,"MM/dd/yyyy")," ")}}function K(t,e){if(1&t&&(r.jc(0,"td",31),r.Uc(1,Z,3,4,"span",35),r.ic()),2&t){const t=e.$implicit;r.yc();const c=r.Mc(47);r.Pb(1),r.Ec("ngIf",t.paydate)("ngIfElse",c)}}function Y(t,e){1&t&&r.ec(0,"th",37)}function Q(t,e){if(1&t){const t=r.kc();r.jc(0,"td",31),r.jc(1,"div",38),r.jc(2,"div",39),r.ec(3,"span",40),r.jc(4,"div",41),r.jc(5,"button",42),r.uc("click",(function(){r.Oc(t);const c=e.$implicit;return r.yc().onEdit(c)})),r.ec(6,"span",43),r.Wc(7,"\xa0\xa0\xa0Edit"),r.ic(),r.jc(8,"button",42),r.uc("click",(function(){r.Oc(t);const c=e.$implicit;return r.yc().onDelete(c)})),r.ec(9,"span",44),r.Wc(10,"\xa0\xa0\xa0Delete"),r.ic(),r.ic(),r.ic(),r.ic(),r.ic()}}function tt(t,e){1&t&&r.ec(0,"tr",45)}function et(t,e){1&t&&r.ec(0,"tr",46)}function ct(t,e){1&t&&r.Wc(0,"---")}let at=(()=>{class t{constructor(t,e){this._ss=t,this._router=e,this.salaryList=[],this.onEditSalary=new r.r,this.onDeleteSalary=new r.r,this.displayedColumns=["name","grosssalary","netsalary","payamount","paydate","PFamount","actions"],this.filterData="",this.isLoading=!0,this.selection=new P.c(!0,[]),this.showForm=!1,this.isCreate=!1}ngOnInit(){this.getFeeList(),this.applyFilter()}getFeeList(){this.salaryList&&this.salaryList.length&&(this.recordLength=this.salaryList.length,console.log("this.salaryList",this.salaryList),this.feeList=new v.k(this.salaryList),this.feeList.sort=this.TSort,this.feeList.paginator=this.paginator),this.isLoading=!1}isAllSelected(){return this.selection.selected.length===this.feeList.data.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.feeList.data.forEach(t=>this.selection.select(t))}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:(this.isAllSelected()?"select":"deselect")+" all"}applyFilter(){this._ss.searchTeacher().subscribe(t=>{console.log("data",t)})}onEdit(t){console.log("row",t),t&&this.onEditSalary.emit(t)}onDelete(t){console.log("row",t),confirm("Are sure you want to delete this salary record?")&&this._ss.deleteSalary(t.id).subscribe(t=>{this.onDeleteSalary.emit(!0)})}getTransactions(){this._router.navigate(["accounts/salary/transactions"],{queryParams:{techerID:this.teacherID}})}}return t.\u0275fac=function(e){return new(e||t)(r.dc(f),r.dc(i.g))},t.\u0275cmp=r.Xb({type:t,selectors:[["app-salary-list"]],viewQuery:function(t,e){var c;1&t&&(r.Sc(W.a,!0),r.Sc(L.a,!0)),2&t&&(r.Lc(c=r.vc())&&(e.paginator=c.first),r.Lc(c=r.vc())&&(e.TSort=c.first))},inputs:{salaryList:"salaryList",teacherID:"teacherID"},outputs:{onEditSalary:"onEditSalary",onDeleteSalary:"onDeleteSalary"},decls:48,vars:5,consts:[[1,"list-container"],["class","no-record",4,"ngIf"],[1,"s-list"],[1,"list-head"],[3,"click"],[1,"d-flex","align-items-center"],["appearance","outline",1,"col-12","p-0"],["matInput","","placeholder","Search...",3,"ngModel","keyup","ngModelChange"],["matSuffix",""],[1,"pt-4"],["mat-table","","matSort","",1,"col-12",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","grosssalary"],["matColumnDef","netsalary"],["matColumnDef","payamount"],["matColumnDef","PFamount"],["matColumnDef","paydate"],["matColumnDef","actions"],["mat-header-cell","","style","width: 50px;",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["dash",""],[1,"no-record"],["src","assets/images/page-loader.gif","alt",""],[1,"m-0"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-cell","","mat-sort-header",""],[4,"ngIf","ngIfElse"],["class","p-0 m-0",4,"ngIf","ngIfElse"],[1,"p-0","m-0"],["mat-header-cell","",2,"width","50px"],[1,"col"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"flaticon-more-button-of-three-dots"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem","",3,"click"],[1,"fa","fa-cogs",2,"color","#00c853"],[1,"fa","fa-trash",2,"color","#f00"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(r.jc(0,"div",0),r.Uc(1,U,4,0,"div",1),r.jc(2,"div",2),r.jc(3,"mat-card"),r.jc(4,"div",3),r.jc(5,"mat-card-title"),r.Wc(6,"Student Fee Data ("),r.jc(7,"a",4),r.uc("click",(function(){return e.getTransactions()})),r.Wc(8,"Get all transactions"),r.ic(),r.Wc(9,")"),r.ic(),r.jc(10,"div",5),r.jc(11,"div"),r.jc(12,"mat-form-field",6),r.jc(13,"mat-label"),r.Wc(14,"Filter"),r.ic(),r.jc(15,"input",7),r.uc("keyup",(function(){return e.applyFilter()}))("ngModelChange",(function(t){return e.searchString=t})),r.ic(),r.jc(16,"mat-icon",8),r.Wc(17,"search"),r.ic(),r.ic(),r.ic(),r.ic(),r.ic(),r.jc(18,"mat-card-content",9),r.jc(19,"table",10),r.hc(20,11),r.Uc(21,k,2,3,"th",12),r.Uc(22,_,2,2,"td",13),r.gc(),r.hc(23,14),r.Uc(24,O,2,0,"th",15),r.Uc(25,N,2,2,"td",13),r.gc(),r.hc(26,16),r.Uc(27,T,2,0,"th",15),r.Uc(28,R,2,2,"td",13),r.gc(),r.hc(29,17),r.Uc(30,q,2,0,"th",15),r.Uc(31,M,2,2,"td",13),r.gc(),r.hc(32,18),r.Uc(33,B,2,0,"th",15),r.Uc(34,X,2,2,"td",13),r.gc(),r.hc(35,19),r.Uc(36,G,2,0,"th",15),r.Uc(37,H,2,2,"td",13),r.gc(),r.hc(38,20),r.Uc(39,J,2,0,"th",15),r.Uc(40,K,2,2,"td",13),r.gc(),r.hc(41,21),r.Uc(42,Y,1,0,"th",22),r.Uc(43,Q,11,0,"td",13),r.gc(),r.Uc(44,tt,1,0,"tr",23),r.Uc(45,et,1,0,"tr",24),r.ic(),r.ic(),r.ic(),r.ic(),r.ic(),r.Uc(46,ct,1,0,"ng-template",null,25,r.Vc)),2&t&&(r.Pb(1),r.Ec("ngIf",e.isLoading),r.Pb(14),r.Ec("ngModel",e.searchString),r.Pb(4),r.Ec("dataSource",e.salaryList),r.Pb(25),r.Ec("matHeaderRowDef",e.displayedColumns),r.Pb(1),r.Ec("matRowDefColumns",e.displayedColumns))},directives:[a.n,S.a,S.d,y.c,y.f,b.b,s.c,s.q,s.t,C.a,y.g,S.b,v.j,L.a,v.c,v.e,v.b,v.g,v.i,v.d,D.a,v.a,L.b,F.a,F.e,F.c,F.b,v.f,v.h],pipes:[a.d,a.f],styles:[""]}),t})();function it(t,e){if(1&t&&(r.jc(0,"mat-option",17),r.Wc(1),r.ic()),2&t){const t=e.$implicit;r.Ec("value",t),r.Pb(1),r.Yc(" ",t.name," ")}}function rt(t,e){1&t&&(r.jc(0,"mat-error"),r.Wc(1," Name is "),r.jc(2,"strong"),r.Wc(3,"required"),r.ic(),r.ic())}function st(t,e){1&t&&(r.jc(0,"mat-error"),r.Wc(1," Gross salary is "),r.jc(2,"strong"),r.Wc(3,"required"),r.ic(),r.ic())}function nt(t,e){1&t&&(r.jc(0,"mat-error"),r.Wc(1," Net salary is "),r.jc(2,"strong"),r.Wc(3,"required"),r.ic(),r.ic())}function ot(t,e){1&t&&(r.jc(0,"mat-error"),r.Wc(1," Absent days is "),r.jc(2,"strong"),r.Wc(3,"required"),r.ic(),r.ic())}function lt(t,e){if(1&t&&(r.jc(0,"mat-option",17),r.Wc(1),r.ic()),2&t){const t=e.$implicit;r.Ec("value",t.salarytype),r.Pb(1),r.Xc(t.salarytype)}}function ut(t,e){1&t&&(r.jc(0,"mat-error"),r.Wc(1," Salary type is "),r.jc(2,"strong"),r.Wc(3,"required"),r.ic(),r.ic())}function dt(t,e){1&t&&(r.jc(0,"mat-error"),r.Wc(1," Pay date is "),r.jc(2,"strong"),r.Wc(3,"required"),r.ic(),r.ic())}function ht(t,e){if(1&t){const t=r.kc();r.jc(0,"button",39),r.uc("click",(function(e){return r.Oc(t),r.yc(2).onCancel(e)})),r.Wc(1,"Cancel"),r.ic()}}function mt(t,e){if(1&t){const t=r.kc();r.jc(0,"button",39),r.uc("click",(function(e){return r.Oc(t),r.yc(2).onFormReset(e)})),r.Wc(1,"Reset"),r.ic()}}function pt(t,e){if(1&t){const t=r.kc();r.jc(0,"form",18),r.uc("ngSubmit",(function(){return r.Oc(t),r.yc().onSubmit()})),r.jc(1,"div",3),r.jc(2,"div",4),r.jc(3,"mat-form-field",5),r.jc(4,"mat-label"),r.Wc(5,"Name"),r.ic(),r.ec(6,"input",19),r.Uc(7,rt,4,0,"mat-error",15),r.ic(),r.ic(),r.jc(8,"div",4),r.jc(9,"mat-form-field",5),r.jc(10,"mat-label"),r.Wc(11,"Gross Salary"),r.ic(),r.ec(12,"input",20),r.Uc(13,st,4,0,"mat-error",15),r.ic(),r.ic(),r.jc(14,"div",4),r.jc(15,"mat-form-field",5),r.jc(16,"mat-label"),r.Wc(17,"Net Salary"),r.ic(),r.ec(18,"input",21),r.Uc(19,nt,4,0,"mat-error",15),r.ic(),r.ic(),r.jc(20,"div",4),r.jc(21,"mat-form-field",5),r.jc(22,"mat-label"),r.Wc(23,"Absent Days"),r.ic(),r.ec(24,"input",22),r.Uc(25,ot,4,0,"mat-error",15),r.ic(),r.ic(),r.jc(26,"div",4),r.jc(27,"mat-form-field",5),r.jc(28,"mat-label"),r.Wc(29,"Salary Type"),r.ic(),r.jc(30,"mat-select",23),r.Uc(31,lt,2,2,"mat-option",9),r.ic(),r.Uc(32,ut,4,0,"mat-error",15),r.ic(),r.ic(),r.jc(33,"div",4),r.jc(34,"mat-form-field",5),r.jc(35,"mat-label"),r.Wc(36,"Pay Date"),r.ic(),r.ec(37,"input",24),r.ec(38,"mat-datepicker-toggle",25),r.ec(39,"mat-datepicker",null,26),r.Uc(41,dt,4,0,"mat-error",15),r.ic(),r.ic(),r.jc(42,"div",4),r.jc(43,"mat-form-field",5),r.jc(44,"mat-label"),r.Wc(45,"Pay Amount"),r.ic(),r.ec(46,"input",27),r.ic(),r.ic(),r.jc(47,"div",4),r.jc(48,"mat-form-field",5),r.jc(49,"mat-label"),r.Wc(50,"PF"),r.ic(),r.ec(51,"input",28),r.ic(),r.ic(),r.jc(52,"div",4),r.jc(53,"mat-form-field",5),r.jc(54,"mat-label"),r.Wc(55,"PF Amount"),r.ic(),r.ec(56,"input",29),r.ic(),r.ic(),r.jc(57,"div",4),r.jc(58,"mat-form-field",5),r.jc(59,"mat-label"),r.Wc(60,"ESI"),r.ic(),r.ec(61,"input",30),r.ic(),r.ic(),r.jc(62,"div",4),r.jc(63,"mat-form-field",5),r.jc(64,"mat-label"),r.Wc(65,"ESI Amount"),r.ic(),r.ec(66,"input",31),r.ic(),r.ic(),r.jc(67,"div",4),r.jc(68,"mat-form-field",5),r.jc(69,"mat-label"),r.Wc(70,"Salary After Added"),r.ic(),r.ec(71,"input",32),r.ic(),r.ic(),r.jc(72,"div",4),r.jc(73,"mat-checkbox",33),r.Wc(74,"Status"),r.ic(),r.ic(),r.jc(75,"div",4),r.jc(76,"mat-form-field",5),r.jc(77,"mat-label"),r.Wc(78,"Pending Amount"),r.ic(),r.ec(79,"input",34),r.ic(),r.ic(),r.jc(80,"div",4),r.jc(81,"mat-form-field",5),r.jc(82,"mat-label"),r.Wc(83,"Description"),r.ic(),r.ec(84,"textarea",35),r.ic(),r.ic(),r.ic(),r.jc(85,"div",36),r.jc(86,"button",37),r.Wc(87),r.ic(),r.Uc(88,ht,2,0,"button",38),r.Uc(89,mt,2,0,"button",38),r.ic(),r.ic()}if(2&t){const t=r.Mc(40),e=r.yc();r.Ec("formGroup",e.salaryForm),r.Pb(7),r.Ec("ngIf",e.submitted&&e.f.name.hasError("required")),r.Pb(6),r.Ec("ngIf",e.submitted&&e.f.grosssalary.hasError("required")),r.Pb(6),r.Ec("ngIf",e.submitted&&e.f.netsalary.hasError("required")),r.Pb(6),r.Ec("ngIf",e.submitted&&e.f.absentdays.hasError("required")),r.Pb(6),r.Ec("ngForOf",e.salarytypesList),r.Pb(1),r.Ec("ngIf",e.submitted&&e.f.salarytype.hasError("required")),r.Pb(5),r.Ec("matDatepicker",t),r.Pb(1),r.Ec("for",t),r.Pb(3),r.Ec("ngIf",e.submitted&&e.f.paydate.hasError("required")),r.Pb(46),r.Xc(e.buttonLabel),r.Pb(1),r.Ec("ngIf",e.showButtons),r.Pb(1),r.Ec("ngIf",!e.showButtons)}}function ft(t,e){if(1&t){const t=r.kc();r.hc(0),r.jc(1,"app-salary-list",40),r.uc("onEditSalary",(function(e){return r.Oc(t),r.yc().onEditRecord(e)}))("onDeleteSalary",(function(e){return r.Oc(t),r.yc().onDeleteSalary(e)})),r.ic(),r.gc()}if(2&t){const t=r.yc();r.Pb(1),r.Ec("salaryList",t.salaryList)("teacherID",t.teacherID)}}function yt(t,e){1&t&&r.Wc(0,"---")}let bt=(()=>{class t{constructor(t,e,c,a,i){this._ar=t,this._router=e,this._snackBar=c,this._fs=a,this._date=i,this.formCancel=new r.r,this.formSubmit=new r.r,this.loading=!1,this.submitted=!1,this.ShowList=!1,this.error="",this.cardTitle="Add/Update salary",this.showButtons=!1,this.showForm=!0,this.buttonLabel="Submit",this.salaryList=[],this.teacherName=new s.g,this.teacherRecordList=[],this._phonePattern="^[0-9-+s()]*$",this._emailPattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",this.horizontalPosition="start",this.verticalPosition="bottom",this.visible=!0,this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[n.g,n.c],this.salarytypesList=[]}ngOnInit(){this.salaryForm=new s.j({name:new s.g(null,s.x.required),grosssalary:new s.g(null,s.x.required),netsalary:new s.g(null,s.x.required),absentdays:new s.g(new Date,s.x.required),salarytype:new s.g(new Date,s.x.required),paydate:new s.g(new Date(""),s.x.required),payamount:new s.g(null),PF:new s.g(null),PFamount:new s.g(null),ESI:new s.g(null),ESIamount:new s.g(null),salaryafterded:new s.g(null),status:new s.g(null),pendingamount:new s.g(null),description:new s.g(null)}),this.getSalaryTypes(),this.getTeacherRecord()}get f(){return this.salaryForm.controls}getSalaryTypes(){this._fs.getSalryType().subscribe(t=>{t&&(this.salarytypesList=t)})}getSalaryDetails(){this._fs.getSalaryDetails(this.teacherID?this.teacherID:1).subscribe(t=>{t&&this.salaryForm.patchValue(t[0])})}getAllSalaryList(){this._fs.getAllSalaryDetails(this.teacherID?this.teacherID:1).subscribe(t=>{t&&(this.salaryList=t,console.log("this.SalaryList",this.salaryList),this.ShowList=!0)})}getOptionText(t){if(t)return t.name}getTeacherRecord(){this._fs.searchTeacher().subscribe(t=>{this.teacherRecordList=t,this.teacherFilteredList=this.teacherName.valueChanges.pipe(Object(o.a)(""),Object(l.a)(t=>this._filter(t)))})}_filter(t){const e=t;return this.teacherRecordList.filter(t=>t.name.toLowerCase().includes(e))}onOptionSelection(t){this.teacherID=t.option.value.id,this.teacherID&&(this.getSalaryDetails(),this.getAllSalaryList())}onEditRecord(t){t&&(this.salaryRecord=t,this.salaryForm.patchValue(t),this.buttonLabel="Update")}onSubmit(){if(this.submitted=!0,this.salaryForm.value&&(this.salaryForm.value.paydate=this._date.transform(this.salaryForm.value.paydate,"MM/dd/yyyy")),this.salaryForm.invalid)return;let t={};Object.assign(t,this.salaryForm.value),this.loading=!0,this.salaryRecord&&this.salaryRecord.id?(t.id=this.salaryRecord.id,t.teacherid=this.salaryRecord.id,this._fs.updateSalary(this.salaryRecord.id,t).subscribe(t=>{this.showNotification("Updated Successfully!!"),this.salaryForm&&this.salaryForm.reset(),this.showForm=!1,setTimeout(()=>{this.showForm=!0},50),this.getAllSalaryList()},t=>{this.error=t,this.loading=!1,console.error(this.error)})):this._fs.saveSalary(t).subscribe(t=>{this.showNotification("Submitted Successfully!!"),this.salaryForm&&this.salaryForm.reset(),this.showForm=!1,setTimeout(()=>{this.showForm=!0},50),this.getAllSalaryList()},t=>{this.error=t,this.loading=!1,console.error(this.error)})}showNotification(t){this._snackBar.open(t,"",{duration:2e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["success-snackbar"]})}onFormReset(t){t&&this.salaryForm&&this.salaryForm.reset()}onCancel(t){t&&this.formCancel.emit(!0)}onDeleteSalary(t){t&&this.getAllSalaryList()}}return t.\u0275fac=function(e){return new(e||t)(r.dc(i.a),r.dc(i.g),r.dc(u.a),r.dc(f),r.dc(a.f))},t.\u0275cmp=r.Xb({type:t,selectors:[["app-add-salary"]],inputs:{salaryDetails:"salaryDetails"},outputs:{formCancel:"formCancel",formSubmit:"formSubmit"},features:[r.Ob([a.f])],decls:28,vars:9,consts:[[1,"form-container"],[1,"page-title"],[1,"form-fields"],[1,"row"],[1,"col-4"],["appearance","outline",1,"p-0"],["matInput","","placeholder","Select student","aria-label","Number",3,"formControl","matAutocomplete"],["autoActiveFirstOption","",3,"displayWith","optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"col-2","pt-1","mt-1"],["mat-raised-button","","color","primary","type","button",3,"click"],[1,"pt-2"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,""],[4,"ngIf"],["dash",""],[3,"value"],[3,"formGroup","ngSubmit"],["matInput","","placeholder","Enter Last Name","formControlName","name"],["matInput","","placeholder","Enter gross salary","formControlName","grosssalary"],["matInput","","placeholder","Enter net salary","formControlName","netsalary"],["matInput","","placeholder","Enter absent days","formControlName","absentdays"],["placeholder","Select salarytype","formControlName","salarytype"],["matInput","","placeholder","Select date","formControlName","paydate",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["type","number","matInput","","placeholder","Enter amount","formControlName","payamount"],["type","number","matInput","","placeholder","Enter PF","formControlName","PF"],["type","number","matInput","","placeholder","Enter discount","formControlName","PFamount"],["type","number","matInput","","placeholder","Enter ESI","formControlName","ESI"],["type","number","matInput","","placeholder","Enter ESI amount","formControlName","ESIamount"],["type","number","matInput","","placeholder","Enter after added","formControlName","salaryafterded"],["formControlName","status"],["type","number","matInput","","placeholder","Enter amount","formControlName","pendingamount"],["matInput","","placeholder","Description","rows","3","formControlName","description"],[1,"example-button-row","pt-3","text-center"],["mat-raised-button","","color","primary","type","submit"],["mat-raised-button","","class","ml-3 mat-secondary",3,"click",4,"ngIf"],["mat-raised-button","",1,"ml-3","mat-secondary",3,"click"],[3,"salaryList","teacherID","onEditSalary","onDeleteSalary"]],template:function(t,e){if(1&t&&(r.jc(0,"div",0),r.jc(1,"div",1),r.jc(2,"h3"),r.Wc(3,"Salary"),r.ic(),r.ic(),r.jc(4,"div",2),r.jc(5,"div",3),r.jc(6,"div",4),r.jc(7,"mat-form-field",5),r.jc(8,"mat-label"),r.Wc(9,"Search"),r.ic(),r.ec(10,"input",6),r.jc(11,"mat-autocomplete",7,8),r.uc("optionSelected",(function(t){return e.onOptionSelection(t)})),r.Uc(13,it,2,2,"mat-option",9),r.zc(14,"async"),r.ic(),r.ic(),r.ic(),r.jc(15,"div",10),r.jc(16,"button",11),r.uc("click",(function(){return e.getAllSalaryList()})),r.Wc(17,"Search"),r.ic(),r.ic(),r.ic(),r.jc(18,"mat-card"),r.jc(19,"mat-card-title"),r.Wc(20),r.ic(),r.jc(21,"mat-card-content",12),r.Uc(22,pt,90,13,"form",13),r.ic(),r.ic(),r.ic(),r.ic(),r.jc(23,"div",0),r.jc(24,"div",14),r.Uc(25,ft,2,2,"ng-container",15),r.ic(),r.ic(),r.Uc(26,yt,1,0,"ng-template",null,16,r.Vc)),2&t){const t=r.Mc(12);r.Pb(10),r.Ec("formControl",e.teacherName)("matAutocomplete",t),r.Pb(1),r.Ec("displayWith",e.getOptionText),r.Pb(2),r.Ec("ngForOf",r.Ac(14,7,e.teacherFilteredList)),r.Pb(7),r.Xc(e.cardTitle),r.Pb(2),r.Ec("ngIf",e.showForm),r.Pb(3),r.Ec("ngIf",e.ShowList)}},directives:[y.c,y.f,b.b,s.c,g.c,s.q,s.h,g.a,a.m,j.a,S.a,S.d,S.b,a.n,E.n,s.z,s.r,s.k,s.i,w.a,I.b,I.d,y.g,I.a,s.v,D.a,y.b,at],pipes:[a.b],styles:[""]}),t})();var gt=c("NUHZ");function jt(t,e){if(1&t&&(r.hc(0),r.ec(1,"app-transactions",1),r.gc()),2&t){const t=r.yc();r.Pb(1),r.Ec("transactionsList",t.transactionList)("displayedColumns",t.displayedColumns)}}const St=[{path:"",component:bt},{path:"transactions",component:(()=>{class t{constructor(t,e){this._ss=t,this._route=e,this.showTransaction=!1,this._route.queryParamMap.subscribe(t=>{this.teacherID=t.params.techerID})}ngOnInit(){this.displayedColumns=["salarytype","paidamount","paiddate","discription"],this._ss.getAllTransaction(this.teacherID).subscribe(t=>{t&&(this.transactionList=t,this.showTransaction=!0,console.log("this.transactionList",this.transactionList))})}}return t.\u0275fac=function(e){return new(e||t)(r.dc(f),r.dc(i.a))},t.\u0275cmp=r.Xb({type:t,selectors:[["app-salary-transactions"]],inputs:{displayedColumns:"displayedColumns",transactionList:"transactionList"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"transactionsList","displayedColumns"]],template:function(t,e){1&t&&r.Uc(0,jt,2,2,"ng-container",0),2&t&&r.Ec("ngIf",e.showTransaction)},directives:[a.n,gt.a],styles:[""]}),t})()}];let Et=(()=>{class t{}return t.\u0275mod=r.bc({type:t}),t.\u0275inj=r.ac({factory:function(e){return new(e||t)},imports:[[i.i.forChild(St)],i.i]}),t})();var wt=c("Jn5T");let It=(()=>{class t{}return t.\u0275mod=r.bc({type:t}),t.\u0275inj=r.ac({factory:function(e){return new(e||t)},imports:[[a.c,Et,s.m,s.w,F.d,wt.a]]}),t})()}}]);