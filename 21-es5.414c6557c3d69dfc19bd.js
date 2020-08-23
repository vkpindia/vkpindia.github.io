function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var c=0;c<e.length;c++){var i=e[c];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,c){return e&&_defineProperties(t.prototype,e),c&&_defineProperties(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{PGKz:function(t,e,c){"use strict";c.r(e),c.d(e,"ResultModule",(function(){return ce}));var i,a=c("ofXK"),n=c("tyNb"),r=c("M9IT"),s=c("Dh3D"),o=c("+0xr"),l=c("0EQZ"),u=c("3Pt+"),d=c("fXoL"),m=c("tk/3"),f=c("XNiG"),h=c("z6cu"),p=c("lJxs"),g=c("JIr8"),b=c("AytR"),v=((i=function(){function t(e){_classCallCheck(this,t),this._http=e,this._apiUrl=b.a.apiBaseUrl,this.dataSource=new f.a,this.httpOptions={headers:new m.d({"Content-Type":"Application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),crossDomain:!0}}return _createClass(t,[{key:"handleError",value:function(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error("Back-end returned code ".concat(t.status,", body was: ")+t.error),Object(h.a)("Something bad happened; please try again later.")}},{key:"extractData",value:function(t){return t||{}}},{key:"setExamRecord",value:function(t){this.dataSource.next(t)}},{key:"getExamRecord",value:function(){return this.dataSource.asObservable()}},{key:"getStudentRecord",value:function(t,e){return this._http.get(this._apiUrl+"/student/GetStudentSearch?classid=".concat(t,"&sectionid=").concat(e)).pipe(Object(p.a)(this.extractData),Object(g.a)(this.handleError))}},{key:"getExamResultByClassSection",value:function(t,e,c,i){return this._http.get("".concat(this._apiUrl,"results/getresultsbyclasssection?studentid=").concat(t,"&examid=").concat(e,"&classid=").concat(c,"&sectionid=").concat(i)).pipe(Object(p.a)(this.extractData),Object(g.a)(this.handleError))}},{key:"getExamResult",value:function(t,e){return this._http.get("".concat(this._apiUrl,"setup/getexamsbyclasssection?classid=").concat(t,"&sectionid=").concat(e)).pipe(Object(p.a)(this.extractData),Object(g.a)(this.handleError))}},{key:"getClassSection",value:function(){return this._http.get(this._apiUrl+"setup/getclassesandsections").pipe(Object(p.a)(this.extractData),Object(g.a)(this.handleError))}},{key:"getSections",value:function(t){return this._http.get("".concat(this._apiUrl,"setup/getsectionsforclass?id=").concat(t)).pipe(Object(p.a)(this.extractData),Object(g.a)(this.handleError))}},{key:"saveResult",value:function(t){return this._http.post(this._apiUrl+"results/addstudentresults",t).pipe(Object(p.a)(this.extractData),Object(g.a)(this.handleError))}},{key:"saveTotalResult",value:function(t){return this._http.post(this._apiUrl+"results/addstudentatendencetotals",t).pipe(Object(p.a)(this.extractData),Object(g.a)(this.handleError))}}]),t}()).\u0275fac=function(t){return new(t||i)(d.rc(m.b))},i.\u0275prov=d.Zb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),j=c("kmnG"),y=c("d3UM"),k=c("bTqV"),x=c("Wp6s"),E=c("qFsG"),R=c("NFeN"),w=c("FKr1"),S=c("bSwM"),C=c("1kSV");function I(t,e){if(1&t&&(d.jc(0,"mat-option",31),d.Wc(1),d.ic()),2&t){var c=e.$implicit;d.Ec("value",c.id),d.Pb(1),d.Xc(c.classname)}}function W(t,e){if(1&t&&(d.jc(0,"mat-option",31),d.Wc(1),d.ic()),2&t){var c=e.$implicit;d.Ec("value",c.id),d.Pb(1),d.Xc(c.sectionname)}}function P(t,e){if(1&t){var c=d.kc();d.jc(0,"th",32),d.jc(1,"mat-checkbox",33),d.uc("change",(function(t){d.Oc(c);var e=d.yc();return t?e.masterToggle():null})),d.ic(),d.ic()}if(2&t){var i=d.yc();d.Pb(1),d.Ec("checked",i.selection.hasValue()&&i.isAllSelected())("indeterminate",i.selection.hasValue()&&!i.isAllSelected())("aria-label",i.checkboxLabel())}}function L(t,e){if(1&t){var c=d.kc();d.jc(0,"td",34),d.jc(1,"mat-checkbox",35),d.uc("click",(function(t){return d.Oc(c),t.stopPropagation()}))("change",(function(t){d.Oc(c);var i=e.$implicit,a=d.yc();return t?a.selection.toggle(i):null})),d.ic(),d.ic()}if(2&t){var i=e.$implicit,a=d.yc();d.Pb(1),d.Ec("checked",a.selection.isSelected(i))("aria-label",a.checkboxLabel(i))}}function U(t,e){1&t&&(d.jc(0,"th",36),d.Wc(1," Exam Name "),d.ic())}function D(t,e){if(1&t&&(d.jc(0,"span"),d.Wc(1),d.zc(2,"titlecase"),d.ic()),2&t){var c=d.yc().$implicit;d.Pb(1),d.Xc(d.Ac(2,1,c.examname))}}function F(t,e){if(1&t&&(d.jc(0,"td",34),d.Uc(1,D,3,3,"span",37),d.ic()),2&t){var c=e.$implicit;d.yc();var i=d.Mc(56);d.Pb(1),d.Ec("ngIf",c.examname)("ngIfElse",i)}}function O(t,e){1&t&&(d.jc(0,"th",36),d.Wc(1," Start Date "),d.ic())}function _(t,e){if(1&t&&(d.jc(0,"span"),d.Wc(1),d.zc(2,"date"),d.ic()),2&t){var c=d.yc().$implicit;d.Pb(1),d.Xc(d.Bc(2,1,c.startdate,"dd/MM/yyy"))}}function T(t,e){if(1&t&&(d.jc(0,"td",34),d.Uc(1,_,3,4,"span",37),d.ic()),2&t){var c=e.$implicit;d.yc();var i=d.Mc(56);d.Pb(1),d.Ec("ngIf",c.startdate)("ngIfElse",i)}}function q(t,e){1&t&&(d.jc(0,"th",36),d.Wc(1," End date "),d.ic())}function A(t,e){if(1&t&&(d.jc(0,"span"),d.Wc(1),d.zc(2,"date"),d.ic()),2&t){var c=d.yc().$implicit;d.Pb(1),d.Xc(d.Bc(2,1,c.enddate,"dd/MM/yyy"))}}function M(t,e){if(1&t&&(d.jc(0,"td",34),d.Uc(1,A,3,4,"span",37),d.ic()),2&t){var c=e.$implicit;d.yc();var i=d.Mc(56);d.Pb(1),d.Ec("ngIf",c.enddate)("ngIfElse",i)}}function N(t,e){1&t&&(d.jc(0,"th",36),d.Wc(1," Description "),d.ic())}function $(t,e){if(1&t&&(d.jc(0,"span"),d.Wc(1),d.ic()),2&t){var c=d.yc().$implicit;d.Pb(1),d.Xc(c.examdescription)}}function X(t,e){if(1&t&&(d.jc(0,"td",34),d.Uc(1,$,2,1,"span",37),d.ic()),2&t){var c=e.$implicit;d.yc();var i=d.Mc(56);d.Pb(1),d.Ec("ngIf",c.examdescription)("ngIfElse",i)}}function z(t,e){1&t&&d.ec(0,"th",38)}function V(t,e){if(1&t){var c=d.kc();d.jc(0,"td",34),d.jc(1,"div",39),d.jc(2,"div",40),d.ec(3,"span",41),d.jc(4,"div",42),d.jc(5,"button",43),d.uc("click",(function(){d.Oc(c);var t=e.$implicit;return d.yc().addResult(t)})),d.ec(6,"span",44),d.Wc(7,"\xa0\xa0\xa0Add Result"),d.ic(),d.ic(),d.ic(),d.ic(),d.ic()}}function B(t,e){1&t&&d.ec(0,"tr",45)}function G(t,e){1&t&&d.ec(0,"tr",46)}function H(t,e){1&t&&d.Wc(0,"---")}var J,K=function(){return[5,10,25,100]},Q=((J=function(){function t(e,c,i){_classCallCheck(this,t),this._ss=e,this._router=c,this._activatedRout=i,this.displayedColumns=["select","examname","startdate","enddate","examdescription","actions"],this.filterData="",this.isLoading=!0,this.classList=[],this.sectionList=[],this.classID=new u.g,this.sectionID=new u.g,this.selection=new l.c(!0,[])}return _createClass(t,[{key:"ngOnInit",value:function(){this.getClassSection()}},{key:"getClassSection",value:function(){var t=this;this._ss.getClassSection().subscribe((function(e){e&&(t.classList=e)}))}},{key:"onClassChange",value:function(t){var e=this;t&&this._ss.getSections(t.value).subscribe((function(t){t&&(e.sectionList=t)}))}},{key:"getexamList",value:function(){var t=this;this._ss.getExamResult(this.classID.value,this.sectionID.value).subscribe((function(e){console.log("data",e),e&&(t.recordLength=e.length,t.examList=new o.k(e),t.examList.sort=t.TSort,t.examList.paginator=t.paginator),t.isLoading=!1}))}},{key:"isAllSelected",value:function(){if(this.examList&&this.examList.data)return this.selection.selected.length===this.examList.data.length}},{key:"masterToggle",value:function(){var t=this;this.examList&&this.examList.data&&(this.isAllSelected()?this.selection.clear():this.examList.data.forEach((function(e){return t.selection.select(e)})))}},{key:"checkboxLabel",value:function(t){return t?"".concat(this.selection.isSelected(t)?"deselect":"select"," row ").concat(t.position+1):(this.isAllSelected()?"select":"deselect")+" all"}},{key:"applyFilter",value:function(t){this.examList.filter=t.target.value.trim().toLowerCase(),this.examList.paginator&&this.examList.paginator.firstPage()}},{key:"addResult",value:function(t){t&&(console.log("row",t),this._ss.setExamRecord(t),this._router.navigate(["exam-result/add"],{queryParams:{examid:t.examid,sectionid:t.sectionid,classid:t.classid}}))}},{key:"onView",value:function(t){console.log("row",t),this._router.navigate(["students/details"],{queryParams:{id:t.id}})}}]),t}()).\u0275fac=function(t){return new(t||J)(d.dc(v),d.dc(n.g),d.dc(n.a))},J.\u0275cmp=d.Xb({type:J,selectors:[["app-result-list"]],viewQuery:function(t,e){var c;1&t&&(d.Sc(r.a,!0),d.Sc(s.a,!0)),2&t&&(d.Lc(c=d.vc())&&(e.paginator=c.first),d.Lc(c=d.vc())&&(e.TSort=c.first))},decls:57,vars:11,consts:[[1,"list-container"],[1,"page-title"],[1,"s-list"],[1,"row"],[1,"col-5"],["appearance","outline",1,"p-0","w-100"],["placeholder","Select Class",3,"formControl","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Select Section",3,"formControl"],[1,"col-2","pt-1","mt-1"],["mat-raised-button","","color","primary","type","button",3,"click"],[1,"list-head"],["appearance","outline",1,"col-12","p-0"],["matInput","","placeholder","Search...",3,"keyup"],["matSuffix",""],[1,"pt-4"],["mat-table","","matSort","",1,"col-12",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","examname"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","startdate"],["matColumnDef","enddate"],["matColumnDef","examdescription"],["matColumnDef","actions"],["mat-header-cell","","style","width: 50px;",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],["dash",""],[3,"value"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-cell","","mat-sort-header",""],[4,"ngIf","ngIfElse"],["mat-header-cell","",2,"width","50px"],[1,"col"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"flaticon-more-button-of-three-dots"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem","",3,"click"],[1,"fa","fa-cogs",2,"color","#00c853"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(d.jc(0,"div",0),d.jc(1,"div",1),d.jc(2,"h3"),d.Wc(3,"Scheduled Exam"),d.ic(),d.ic(),d.jc(4,"div",2),d.jc(5,"div",3),d.jc(6,"div",4),d.jc(7,"mat-form-field",5),d.jc(8,"mat-label"),d.Wc(9,"Class"),d.ic(),d.jc(10,"mat-select",6),d.uc("selectionChange",(function(t){return e.onClassChange(t)})),d.Uc(11,I,2,2,"mat-option",7),d.ic(),d.ic(),d.ic(),d.jc(12,"div",4),d.jc(13,"mat-form-field",5),d.jc(14,"mat-label"),d.Wc(15,"Section"),d.ic(),d.jc(16,"mat-select",8),d.Uc(17,W,2,2,"mat-option",7),d.ic(),d.ic(),d.ic(),d.jc(18,"div",9),d.jc(19,"button",10),d.uc("click",(function(){return e.getexamList()})),d.Wc(20,"Search"),d.ic(),d.ic(),d.ic(),d.jc(21,"mat-card"),d.jc(22,"div",11),d.jc(23,"mat-card-title"),d.Wc(24,"Scheduled Exam List"),d.ic(),d.jc(25,"div"),d.jc(26,"mat-form-field",12),d.jc(27,"mat-label"),d.Wc(28,"Filter"),d.ic(),d.jc(29,"input",13),d.uc("keyup",(function(t){return e.applyFilter(t)})),d.ic(),d.jc(30,"mat-icon",14),d.Wc(31,"search"),d.ic(),d.ic(),d.ic(),d.ic(),d.jc(32,"mat-card-content",15),d.jc(33,"table",16),d.hc(34,17),d.Uc(35,P,2,3,"th",18),d.Uc(36,L,2,2,"td",19),d.gc(),d.hc(37,20),d.Uc(38,U,2,0,"th",21),d.Uc(39,F,2,2,"td",19),d.gc(),d.hc(40,22),d.Uc(41,O,2,0,"th",21),d.Uc(42,T,2,2,"td",19),d.gc(),d.hc(43,23),d.Uc(44,q,2,0,"th",21),d.Uc(45,M,2,2,"td",19),d.gc(),d.hc(46,24),d.Uc(47,N,2,0,"th",21),d.Uc(48,X,2,2,"td",19),d.gc(),d.hc(49,25),d.Uc(50,z,1,0,"th",26),d.Uc(51,V,8,0,"td",19),d.gc(),d.Uc(52,B,1,0,"tr",27),d.Uc(53,G,1,0,"tr",28),d.ic(),d.ec(54,"mat-paginator",29),d.ic(),d.ic(),d.ic(),d.ic(),d.Uc(55,H,1,0,"ng-template",null,30,d.Vc)),2&t&&(d.Pb(10),d.Ec("formControl",e.classID),d.Pb(1),d.Ec("ngForOf",e.classList),d.Pb(5),d.Ec("formControl",e.sectionID),d.Pb(1),d.Ec("ngForOf",e.sectionList),d.Pb(16),d.Ec("dataSource",e.examList),d.Pb(19),d.Ec("matHeaderRowDef",e.displayedColumns),d.Pb(1),d.Ec("matRowDefColumns",e.displayedColumns),d.Pb(1),d.Ec("length",e.recordLength)("pageSize",10)("pageSizeOptions",d.Hc(10,K)))},directives:[j.c,j.f,y.a,u.q,u.h,a.m,k.a,x.a,x.d,E.b,R.a,j.g,x.b,o.j,s.a,o.c,o.e,o.b,o.g,o.i,r.a,w.n,o.d,S.a,o.a,s.b,a.n,C.a,C.e,C.c,C.b,o.f,o.h],pipes:[a.v,a.f],styles:[""]}),J),Z=c("JX91"),Y=c("dNgK"),tt=c("wZkO");function et(t,e){if(1&t){var c=d.kc();d.jc(0,"th",22),d.jc(1,"mat-checkbox",23),d.uc("change",(function(t){d.Oc(c);var e=d.yc();return t?e.masterToggle():null})),d.ic(),d.ic()}if(2&t){var i=d.yc();d.Pb(1),d.Ec("checked",i.selection.hasValue()&&i.isAllSelected())("indeterminate",i.selection.hasValue()&&!i.isAllSelected())("aria-label",i.checkboxLabel())}}function ct(t,e){if(1&t){var c=d.kc();d.jc(0,"td",24),d.jc(1,"mat-checkbox",25),d.uc("click",(function(t){return d.Oc(c),t.stopPropagation()}))("change",(function(t){d.Oc(c);var i=e.$implicit,a=d.yc();return t?a.selection.toggle(i):null})),d.ic(),d.ic()}if(2&t){var i=e.$implicit,a=d.yc();d.Pb(1),d.Ec("checked",a.selection.isSelected(i))("aria-label",a.checkboxLabel(i))}}function it(t,e){1&t&&(d.jc(0,"th",26),d.Wc(1," Exam ID "),d.ic())}function at(t,e){if(1&t&&(d.jc(0,"span"),d.Wc(1),d.ic()),2&t){var c=d.yc().$implicit;d.Pb(1),d.Xc(c.examid)}}function nt(t,e){if(1&t&&(d.jc(0,"td",24),d.Uc(1,at,2,1,"span",27),d.ic()),2&t){var c=e.$implicit;d.yc();var i=d.Mc(40);d.Pb(1),d.Ec("ngIf",c.examid)("ngIfElse",i)}}function rt(t,e){1&t&&(d.jc(0,"th",26),d.Wc(1," Student Name "),d.ic())}function st(t,e){if(1&t&&(d.jc(0,"span"),d.Wc(1),d.ic()),2&t){var c=d.yc().$implicit;d.Pb(1),d.Xc(c.studentid)}}function ot(t,e){if(1&t&&(d.jc(0,"td",24),d.Uc(1,st,2,1,"span",27),d.ic()),2&t){var c=e.$implicit;d.yc();var i=d.Mc(40);d.Pb(1),d.Ec("ngIf",c.studentid)("ngIfElse",i)}}function lt(t,e){1&t&&(d.jc(0,"th",26),d.Wc(1," Subject "),d.ic())}function ut(t,e){if(1&t&&(d.jc(0,"span"),d.Wc(1),d.ic()),2&t){var c=d.yc().$implicit;d.Pb(1),d.Xc(c.subject)}}function dt(t,e){if(1&t&&(d.jc(0,"td",24),d.Uc(1,ut,2,1,"span",27),d.ic()),2&t){var c=e.$implicit;d.yc();var i=d.Mc(40);d.Pb(1),d.Ec("ngIf",c.subject)("ngIfElse",i)}}function mt(t,e){1&t&&(d.jc(0,"th",26),d.Wc(1," Mark "),d.ic())}function ft(t,e){if(1&t&&(d.jc(0,"span"),d.Wc(1),d.ic()),2&t){var c=d.yc().$implicit;d.Pb(1),d.Xc(c.marks)}}function ht(t,e){if(1&t&&(d.jc(0,"td",24),d.Uc(1,ft,2,1,"span",27),d.ic()),2&t){var c=e.$implicit;d.yc();var i=d.Mc(40);d.Pb(1),d.Ec("ngIf",c.marks)("ngIfElse",i)}}function pt(t,e){1&t&&(d.jc(0,"th",26),d.Wc(1," Percentage "),d.ic())}function gt(t,e){if(1&t&&(d.jc(0,"span"),d.Wc(1),d.ic()),2&t){var c=d.yc().$implicit;d.Pb(1),d.Xc(c.percetage)}}function bt(t,e){if(1&t&&(d.jc(0,"td",24),d.Uc(1,gt,2,1,"span",27),d.ic()),2&t){var c=e.$implicit;d.yc();var i=d.Mc(40);d.Pb(1),d.Ec("ngIf",c.percetage)("ngIfElse",i)}}function vt(t,e){1&t&&(d.jc(0,"th",26),d.Wc(1," Grade "),d.ic())}function jt(t,e){if(1&t&&(d.jc(0,"span"),d.Wc(1),d.zc(2,"uppercase"),d.ic()),2&t){var c=d.yc().$implicit;d.Pb(1),d.Xc(d.Ac(2,1,c.grade))}}function yt(t,e){if(1&t&&(d.jc(0,"td",24),d.Uc(1,jt,3,3,"span",27),d.ic()),2&t){var c=e.$implicit;d.yc();var i=d.Mc(40);d.Pb(1),d.Ec("ngIf",c.grade)("ngIfElse",i)}}function kt(t,e){1&t&&d.ec(0,"tr",28)}function xt(t,e){1&t&&d.ec(0,"tr",29)}function Et(t,e){1&t&&d.Wc(0,"---")}var Rt,wt=function(){return[5,10,25,100]},St=((Rt=function(){function t(e,c,i){_classCallCheck(this,t),this._ss=e,this._router=c,this._activatedRout=i,this.studentResultList=[],this.displayedColumns=["select","examid","studentid","subject","marks","percetage","grade"],this.filterData="",this.isLoading=!0,this.classList=[],this.sectionList=[],this.classID=new u.g,this.sectionID=new u.g,this.selection=new l.c(!0,[])}return _createClass(t,[{key:"ngOnChanges",value:function(t){this.getexamList()}},{key:"ngOnInit",value:function(){this.getexamList()}},{key:"getexamList",value:function(){this.studentResultList&&this.studentResultList.length&&(this.recordLength=this.studentResultList.length,this.examList=new o.k(this.studentResultList),this.examList.sort=this.TSort,this.examList.paginator=this.paginator),this.isLoading=!1}},{key:"isAllSelected",value:function(){if(this.examList&&this.examList.data)return this.selection.selected.length===this.examList.data.length}},{key:"masterToggle",value:function(){var t=this;this.examList&&this.examList.data&&(this.isAllSelected()?this.selection.clear():this.examList.data.forEach((function(e){return t.selection.select(e)})))}},{key:"checkboxLabel",value:function(t){return t?"".concat(this.selection.isSelected(t)?"deselect":"select"," row ").concat(t.position+1):(this.isAllSelected()?"select":"deselect")+" all"}},{key:"applyFilter",value:function(t){this.examList.filter=t.target.value.trim().toLowerCase(),this.examList.paginator&&this.examList.paginator.firstPage()}}]),t}()).\u0275fac=function(t){return new(t||Rt)(d.dc(v),d.dc(n.g),d.dc(n.a))},Rt.\u0275cmp=d.Xb({type:Rt,selectors:[["app-student-result"]],viewQuery:function(t,e){var c;1&t&&(d.Sc(r.a,!0),d.Sc(s.a,!0)),2&t&&(d.Lc(c=d.vc())&&(e.paginator=c.first),d.Lc(c=d.vc())&&(e.TSort=c.first))},inputs:{studentResultList:"studentResultList",isResultReady:"isResultReady"},features:[d.Nb],decls:41,vars:7,consts:[[1,"list-container"],[1,"s-list"],[1,"list-head"],["appearance","outline",1,"col-12","p-0"],["matInput","","placeholder","Search...",3,"keyup"],["matSuffix",""],[1,"pt-4"],["mat-table","","matSort","",1,"col-12",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","examid"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","studentid"],["matColumnDef","subject"],["matColumnDef","marks"],["matColumnDef","percetage"],["matColumnDef","grade"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],["dash",""],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-header-cell","","mat-sort-header",""],[4,"ngIf","ngIfElse"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(d.jc(0,"div",0),d.jc(1,"div",1),d.jc(2,"mat-card"),d.jc(3,"div",2),d.jc(4,"mat-card-title"),d.Wc(5,"Exam Result"),d.ic(),d.jc(6,"div"),d.jc(7,"mat-form-field",3),d.jc(8,"mat-label"),d.Wc(9,"Filter"),d.ic(),d.jc(10,"input",4),d.uc("keyup",(function(t){return e.applyFilter(t)})),d.ic(),d.jc(11,"mat-icon",5),d.Wc(12,"search"),d.ic(),d.ic(),d.ic(),d.ic(),d.jc(13,"mat-card-content",6),d.jc(14,"table",7),d.hc(15,8),d.Uc(16,et,2,3,"th",9),d.Uc(17,ct,2,2,"td",10),d.gc(),d.hc(18,11),d.Uc(19,it,2,0,"th",12),d.Uc(20,nt,2,2,"td",10),d.gc(),d.hc(21,13),d.Uc(22,rt,2,0,"th",12),d.Uc(23,ot,2,2,"td",10),d.gc(),d.hc(24,14),d.Uc(25,lt,2,0,"th",12),d.Uc(26,dt,2,2,"td",10),d.gc(),d.hc(27,15),d.Uc(28,mt,2,0,"th",12),d.Uc(29,ht,2,2,"td",10),d.gc(),d.hc(30,16),d.Uc(31,pt,2,0,"th",12),d.Uc(32,bt,2,2,"td",10),d.gc(),d.hc(33,17),d.Uc(34,vt,2,0,"th",12),d.Uc(35,yt,2,2,"td",10),d.gc(),d.Uc(36,kt,1,0,"tr",18),d.Uc(37,xt,1,0,"tr",19),d.ic(),d.ec(38,"mat-paginator",20),d.ic(),d.ic(),d.ic(),d.ic(),d.Uc(39,Et,1,0,"ng-template",null,21,d.Vc)),2&t&&(d.Pb(14),d.Ec("dataSource",e.examList),d.Pb(22),d.Ec("matHeaderRowDef",e.displayedColumns),d.Pb(1),d.Ec("matRowDefColumns",e.displayedColumns),d.Pb(1),d.Ec("length",e.recordLength)("pageSize",10)("pageSizeOptions",d.Hc(6,wt)))},directives:[x.a,x.d,j.c,j.f,E.b,R.a,j.g,x.b,o.j,s.a,o.c,o.e,o.b,o.g,o.i,r.a,o.d,S.a,o.a,s.b,a.n,o.f,o.h],pipes:[a.x],styles:[""]}),Rt),Ct=c("/1cH");function It(t,e){1&t&&(d.jc(0,"mat-icon",9),d.Wc(1,"wc"),d.ic(),d.Wc(2," Add Result "))}function Wt(t,e){if(1&t&&(d.jc(0,"mat-option",29),d.Wc(1),d.ic()),2&t){var c=e.$implicit;d.Ec("value",c),d.Pb(1),d.Yc(" ",c.name," ")}}function Pt(t,e){1&t&&(d.jc(0,"mat-error"),d.Wc(1," Student name is "),d.jc(2,"strong"),d.Wc(3,"required"),d.ic(),d.ic())}function Lt(t,e){1&t&&(d.jc(0,"mat-error"),d.Wc(1," Exam ID is "),d.jc(2,"strong"),d.Wc(3,"required"),d.ic(),d.ic())}function Ut(t,e){1&t&&(d.jc(0,"mat-error"),d.Wc(1," Subject is "),d.jc(2,"strong"),d.Wc(3,"required"),d.ic(),d.ic())}function Dt(t,e){1&t&&(d.jc(0,"mat-error"),d.Wc(1," Actual mark is "),d.jc(2,"strong"),d.Wc(3,"required"),d.ic(),d.ic())}function Ft(t,e){1&t&&(d.jc(0,"mat-error"),d.Wc(1," Marks is "),d.jc(2,"strong"),d.Wc(3,"required"),d.ic(),d.ic())}function Ot(t,e){if(1&t){var c=d.kc();d.jc(0,"div",16),d.jc(1,"div",17),d.jc(2,"div",18),d.jc(3,"mat-form-field",19),d.jc(4,"mat-label"),d.Wc(5,"Student Name"),d.ic(),d.ec(6,"input",20),d.jc(7,"mat-autocomplete",21,22),d.uc("optionSelected",(function(t){d.Oc(c);var i=e.index;return d.yc(2).onOptionSelection(t,"ar",i)})),d.Uc(9,Wt,2,2,"mat-option",23),d.zc(10,"async"),d.Uc(11,Pt,4,0,"mat-error",24),d.ic(),d.ic(),d.ic(),d.jc(12,"div",18),d.jc(13,"mat-form-field",19),d.jc(14,"mat-label"),d.Wc(15,"Exam ID"),d.ic(),d.ec(16,"input",25),d.Uc(17,Lt,4,0,"mat-error",24),d.ic(),d.ic(),d.jc(18,"div",18),d.jc(19,"mat-form-field",19),d.jc(20,"mat-label"),d.Wc(21,"Subject"),d.ic(),d.ec(22,"input",26),d.Uc(23,Ut,4,0,"mat-error",24),d.ic(),d.ic(),d.jc(24,"div",18),d.jc(25,"mat-form-field",19),d.jc(26,"mat-label"),d.Wc(27,"Actual Mark"),d.ic(),d.ec(28,"input",27),d.Uc(29,Dt,4,0,"mat-error",24),d.ic(),d.ic(),d.jc(30,"div",18),d.jc(31,"mat-form-field",19),d.jc(32,"mat-label"),d.Wc(33,"Marks"),d.ic(),d.ec(34,"input",28),d.Uc(35,Ft,4,0,"mat-error",24),d.ic(),d.ic(),d.ic(),d.ic()}if(2&t){var i=e.$implicit,a=e.index,n=d.Mc(8),r=d.yc(2);d.Pb(1),d.Ec("formGroupName",a),d.Pb(5),d.Ec("formControl",r.studentID)("matAutocomplete",n),d.Pb(1),d.Ec("displayWith",r.getOptionText),d.Pb(2),d.Ec("ngForOf",d.Ac(10,10,r.studentFilteredList)),d.Pb(2),d.Ec("ngIf",r.submitted&&r.studentID.hasError("required")),d.Pb(6),d.Ec("ngIf",r.submitted&&i.get("examid").hasError("required")),d.Pb(6),d.Ec("ngIf",r.submitted&&i.get("subject").hasError("required")),d.Pb(6),d.Ec("ngIf",r.submitted&&i.get("actualmarks").hasError("required")),d.Pb(6),d.Ec("ngIf",r.submitted&&i.get("marks").hasError("required"))}}function _t(t,e){if(1&t){var c=d.kc();d.jc(0,"button",30),d.uc("click",(function(t){return d.Oc(c),d.yc(2).onFormReset(t,"addResult")})),d.Wc(1,"Reset"),d.ic()}}function Tt(t,e){if(1&t){var c=d.kc();d.jc(0,"form",10),d.uc("ngSubmit",(function(){return d.Oc(c),d.yc().onSubmit("addResult")})),d.Uc(1,Ot,36,12,"div",11),d.jc(2,"div",12),d.jc(3,"button",13),d.uc("click",(function(){return d.Oc(c),d.yc().addNextSubjectMark()})),d.Wc(4,"Add Next"),d.ic(),d.jc(5,"button",14),d.Wc(6,"Submit"),d.ic(),d.Uc(7,_t,2,0,"button",15),d.ic(),d.ic()}if(2&t){var i=d.yc();d.Ec("formGroup",i.addResultForm),d.Pb(1),d.Ec("ngForOf",i.f.items.controls),d.Pb(6),d.Ec("ngIf",!i.showButtons)}}function qt(t,e){1&t&&(d.jc(0,"mat-icon",31),d.Wc(1,"layers"),d.ic(),d.Wc(2," Add Total Result "))}function At(t,e){if(1&t&&(d.jc(0,"mat-option",29),d.Wc(1),d.ic()),2&t){var c=e.$implicit;d.Ec("value",c),d.Pb(1),d.Yc(" ",c.name," ")}}function Mt(t,e){1&t&&(d.jc(0,"mat-error"),d.Wc(1," Student name is "),d.jc(2,"strong"),d.Wc(3,"required"),d.ic(),d.ic())}function Nt(t,e){1&t&&(d.jc(0,"mat-error"),d.Wc(1," Exam ID is "),d.jc(2,"strong"),d.Wc(3,"required"),d.ic(),d.ic())}function $t(t,e){1&t&&(d.jc(0,"mat-error"),d.Wc(1," Total marks is "),d.jc(2,"strong"),d.Wc(3,"required"),d.ic(),d.ic())}function Xt(t,e){1&t&&(d.jc(0,"mat-error"),d.Wc(1," Actual Total is "),d.jc(2,"strong"),d.Wc(3,"required"),d.ic(),d.ic())}function zt(t,e){1&t&&(d.jc(0,"mat-error"),d.Wc(1," Grade is "),d.jc(2,"strong"),d.Wc(3,"required"),d.ic(),d.ic())}function Vt(t,e){1&t&&(d.jc(0,"mat-error"),d.Wc(1," Percent is "),d.jc(2,"strong"),d.Wc(3,"required"),d.ic(),d.ic())}function Bt(t,e){if(1&t){var c=d.kc();d.jc(0,"button",39),d.uc("click",(function(t){return d.Oc(c),d.yc(2).onCancel(t)})),d.Wc(1,"Cancel"),d.ic()}}function Gt(t,e){if(1&t){var c=d.kc();d.jc(0,"button",39),d.uc("click",(function(t){return d.Oc(c),d.yc(2).onFormReset(t)})),d.Wc(1,"Reset"),d.ic()}}function Ht(t,e){if(1&t){var c=d.kc();d.jc(0,"form",10),d.uc("ngSubmit",(function(){return d.Oc(c),d.yc().onSubmit()})),d.jc(1,"div",32),d.jc(2,"div",18),d.jc(3,"mat-form-field",19),d.jc(4,"mat-label"),d.Wc(5,"Student Name"),d.ic(),d.ec(6,"input",20),d.jc(7,"mat-autocomplete",21,22),d.uc("optionSelected",(function(t){return d.Oc(c),d.yc().onOptionSelection(t)})),d.Uc(9,At,2,2,"mat-option",23),d.zc(10,"async"),d.Uc(11,Mt,4,0,"mat-error",24),d.ic(),d.ic(),d.ic(),d.jc(12,"div",18),d.jc(13,"mat-form-field",19),d.jc(14,"mat-label"),d.Wc(15,"Exam ID"),d.ic(),d.ec(16,"input",25),d.Uc(17,Nt,4,0,"mat-error",24),d.ic(),d.ic(),d.jc(18,"div",18),d.jc(19,"mat-form-field",19),d.jc(20,"mat-label"),d.Wc(21,"Total Mark"),d.ic(),d.ec(22,"input",33),d.Uc(23,$t,4,0,"mat-error",24),d.ic(),d.ic(),d.jc(24,"div",18),d.jc(25,"mat-form-field",19),d.jc(26,"mat-label"),d.Wc(27,"Actual Total Mark"),d.ic(),d.ec(28,"input",34),d.Uc(29,Xt,4,0,"mat-error",24),d.ic(),d.ic(),d.jc(30,"div",18),d.jc(31,"mat-form-field",19),d.jc(32,"mat-label"),d.Wc(33,"Grade"),d.ic(),d.ec(34,"input",35),d.Uc(35,zt,4,0,"mat-error",24),d.ic(),d.ic(),d.jc(36,"div",18),d.jc(37,"mat-form-field",19),d.jc(38,"mat-label"),d.Wc(39,"Percent"),d.ic(),d.ec(40,"input",36),d.Uc(41,Vt,4,0,"mat-error",24),d.ic(),d.ic(),d.jc(42,"div",18),d.jc(43,"mat-form-field",19),d.jc(44,"mat-label"),d.Wc(45,"Comments"),d.ic(),d.ec(46,"textarea",37),d.ic(),d.ic(),d.ic(),d.jc(47,"div",12),d.jc(48,"button",14),d.Wc(49,"Submit"),d.ic(),d.Uc(50,Bt,2,0,"button",38),d.Uc(51,Gt,2,0,"button",38),d.ic(),d.ic()}if(2&t){var i=d.Mc(8),a=d.yc();d.Ec("formGroup",a.addTResultForm),d.Pb(6),d.Ec("formControl",a.studentTID)("matAutocomplete",i),d.Pb(1),d.Ec("displayWith",a.getOptionText),d.Pb(2),d.Ec("ngForOf",d.Ac(10,13,a.studentTFilteredList)),d.Pb(2),d.Ec("ngIf",a.submitted&&a.studentTID.hasError("required")),d.Pb(6),d.Ec("ngIf",a.submitted&&a.ff.examid.hasError("required")),d.Pb(6),d.Ec("ngIf",a.submitted&&a.ff.totalmarks.hasError("required")),d.Pb(6),d.Ec("ngIf",a.submitted&&a.ff.actualtotal.hasError("required")),d.Pb(6),d.Ec("ngIf",a.submitted&&a.ff.grade.hasError("required")),d.Pb(6),d.Ec("ngIf",a.submitted&&a.ff.percetage.hasError("required")),d.Pb(9),d.Ec("ngIf",a.showButtons),d.Pb(1),d.Ec("ngIf",!a.showButtons)}}function Jt(t,e){1&t&&d.Wc(0,"---")}var Kt,Qt,Zt,Yt=[{path:"",component:Q},{path:"add",component:(Kt=function(){function t(e,c,i,a,n,r){var s=this;_classCallCheck(this,t),this._route=e,this._ar=c,this._router=i,this._snackBar=a,this._ss=n,this._date=r,this.formCancel=new d.r,this.formSubmit=new d.r,this.loading=!1,this.submitted=!1,this.error="",this.cardTitle="Add New Students",this.showButtons=!1,this.showForm=!0,this.showTForm=!0,this.isResultReady=!1,this.buttonLabel="Next",this.studentID=new u.g,this.studentTID=new u.g,this.horizontalPosition="start",this.verticalPosition="bottom",this.classList=[],this.sectionList=[],this.studentRecordList=[],this.studentResultList=[],this.actualMark=0,this.mark=0,this.percent=0,this._ar.queryParamMap.subscribe((function(t){s.examRecord=t.params,console.log(" this.examRecord",s.examRecord)}))}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.addResultForm=new u.j({items:new u.d([this.createFields()])}),this.addTResultForm=new u.j({studentid:new u.g(null,u.x.required),examid:new u.g(this.examRecord.examid,u.x.required),actualtotal:new u.g(null,u.x.required),totalmarks:new u.g(null,u.x.required),grade:new u.g(null,u.x.required),percetage:new u.g(null,u.x.required),comments:new u.g(null)}),this.addResultForm.valueChanges.subscribe((function(e){t.getTotalMarks(e.items)})),this.getStudentsRecord(),this.examRecord&&this.studentid&&this.getResult()}},{key:"getTotalMarks",value:function(t){var e,c=0,i=0;console.log("formData",t),t.forEach((function(t){c+=t.actualmarks,i+=t.marks,e=i/c*100})),this.addTResultForm.get("actualtotal").setValue(c),this.addTResultForm.get("totalmarks").setValue(i),this.addTResultForm.get("percetage").setValue(e)}},{key:"createFields",value:function(){return new u.j({studentid:new u.g(null,u.x.required),examid:new u.g(this.examRecord.examid,u.x.required),subject:new u.g(null,u.x.required),actualmarks:new u.g(null,u.x.required),marks:new u.g(null,u.x.required)})}},{key:"addNextSubjectMark",value:function(){this.f.items.push(this.createFields()),this.controlIndex++,this.studentid&&this.addResultForm.get("items").at(this.controlIndex).get("studentid").patchValue(this.studentid)}},{key:"getStudentsRecord",value:function(){var t=this;this._ss.getStudentRecord(this.examRecord.classid,this.examRecord.sectionid).subscribe((function(e){e&&(t.studentRecordList=e,t.studentFilteredList=t.studentID.valueChanges.pipe(Object(Z.a)(""),Object(p.a)((function(e){return t._filter(e)}))),t.studentTFilteredList=t.studentTID.valueChanges.pipe(Object(Z.a)(""),Object(p.a)((function(e){return t._filter(e)}))))}))}},{key:"getOptionText",value:function(t){if(t)return t.name}},{key:"_filter",value:function(t){var e=t;return this.studentRecordList.filter((function(t){return t.name.toLowerCase().includes(e)}))}},{key:"onOptionSelection",value:function(t,e,c){console.log("event",t),"ar"==e?(this.studentid=t.option.value.id,this.controlIndex=c,this.addTResultForm.get("studentid").setValue(t.option.value.id),this.addResultForm.get("items").at(c).get("studentid").patchValue(t.option.value.id)):this.addTResultForm.patchValue({studentid:t.option.value.id}),this.getResult()}},{key:"getResult",value:function(){var t=this;this._ss.getExamResultByClassSection(this.studentid,this.examRecord.examid,this.examRecord.classid,this.examRecord.sectionid).subscribe((function(e){e&&(t.studentResultList=e,t.isResultReady=!0)}))}},{key:"onSubmit",value:function(t){var e=this;if("addResult"==t){if(this.submitted=!0,this.addResultForm.invalid)return;var c;c=this.addResultForm.value.items,this.loading=!0,console.log("payload",c),this._ss.saveResult(c).subscribe((function(t){e.showNotification("Submitted Successfully!!"),e.addResultForm.reset(),e.showForm=!1,setTimeout((function(){e.showForm=!0}),0),t.forEach((function(t,c){e.addResultForm.get("items").at(c).get("examid").patchValue(t.examid)})),e.getTotalMarks(t),e.getResult()}),(function(t){e.error=t,e.loading=!1,console.error(e.error)}))}else{if(this.submitted=!0,this.addTResultForm.invalid)return;this.addTResultForm.value.examid=parseInt(this.addTResultForm.value.examid);var i={};Object.assign(i,this.addTResultForm.value),this.loading=!0,this._ss.saveTotalResult(i).subscribe((function(t){console.log("data",t),e.showNotification("Submitted Successfully!!"),e.addTResultForm.reset(),e.showTForm=!1,setTimeout((function(){e.showTForm=!0}),0),e.addTResultForm.get("examid").patchValue(t.examid),e.getResult()}),(function(t){e.error=t,e.loading=!1,console.error(e.error)}))}}},{key:"showNotification",value:function(t){this._snackBar.open(t,"",{duration:2e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["success-snackbar"]})}},{key:"onFormReset",value:function(t,e){t&&"addResult"==e?this.addResultForm.reset():this.addTResultForm.reset()}},{key:"onCancel",value:function(t){t&&this.formCancel.emit(!0)}},{key:"f",get:function(){return this.addResultForm.controls}},{key:"fa",get:function(){return this.addResultForm.get("items")}},{key:"ff",get:function(){return this.addTResultForm.controls}}]),t}(),Kt.\u0275fac=function(t){return new(t||Kt)(d.dc(n.a),d.dc(n.a),d.dc(n.g),d.dc(Y.a),d.dc(v),d.dc(a.f))},Kt.\u0275cmp=d.Xb({type:Kt,selectors:[["app-add-result"]],inputs:{studentDetails:"studentDetails"},outputs:{formCancel:"formCancel",formSubmit:"formSubmit"},features:[d.Ob([a.f])],decls:20,vars:6,consts:[[1,"form-container"],[1,"page-title"],[1,"form-fields"],[1,"pt-2"],[3,"selectedIndex"],["mat-tab-label",""],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"studentResultList","isResultReady"],["dash",""],[1,"example-tab-icon"],[3,"formGroup","ngSubmit"],["formArrayName","items",4,"ngFor","ngForOf"],[1,"example-button-row","pt-3","text-center"],["mat-raised-button","","type","button",1,"mat-next","mt-2","mr-3",3,"click"],["mat-raised-button","","color","primary","type","submit"],["mat-raised-button","","color","warn","class","ml-3 mat-secondary",3,"click",4,"ngIf"],["formArrayName","items"],[1,"row","m-0","pt-4",3,"formGroupName"],[1,"col-4"],["appearance","outline",1,"p-0"],["matInput","","placeholder","Select student","aria-label","Number",3,"formControl","matAutocomplete"],["autoActiveFirstOption","",3,"displayWith","optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["matInput","","type","number","placeholder","Enter exam ID","formControlName","examid"],["matInput","","placeholder","Enter subject","formControlName","subject"],["type","number","matInput","","placeholder","Enter Actual smarks","formControlName","actualmarks"],["type","number","matInput","","placeholder","Enter smarks","formControlName","marks"],[3,"value"],["mat-raised-button","","color","warn",1,"ml-3","mat-secondary",3,"click"],[1,""],[1,"row","m-0","pt-4"],["matInput","","type","number","placeholder","Enter subject","formControlName","totalmarks"],["type","number","matInput","","placeholder","Enter Actual Total smarks","formControlName","actualtotal"],["matInput","","placeholder","Enter grade","formControlName","grade"],["type","number","matInput","","placeholder","Enter percent","formControlName","percetage"],["matInput","","placeholder","Enter percent","formControlName","comments","row","4"],["mat-raised-button","","class","ml-3 mat-secondary",3,"click",4,"ngIf"],["mat-raised-button","",1,"ml-3","mat-secondary",3,"click"]],template:function(t,e){1&t&&(d.jc(0,"div",0),d.jc(1,"div",1),d.jc(2,"h3"),d.Wc(3,"Add Result"),d.ic(),d.ic(),d.jc(4,"div",2),d.jc(5,"mat-card"),d.jc(6,"mat-card-title"),d.Wc(7),d.ic(),d.jc(8,"mat-card-content",3),d.jc(9,"mat-tab-group",4),d.jc(10,"mat-tab"),d.Uc(11,It,3,0,"ng-template",5),d.Uc(12,Tt,8,3,"form",6),d.ic(),d.jc(13,"mat-tab"),d.Uc(14,qt,3,0,"ng-template",5),d.Uc(15,Ht,52,15,"form",6),d.ic(),d.ic(),d.ic(),d.ic(),d.ic(),d.jc(16,"div"),d.ec(17,"app-student-result",7),d.ic(),d.ic(),d.Uc(18,Jt,1,0,"ng-template",null,8,d.Vc)),2&t&&(d.Pb(7),d.Xc(e.cardTitle),d.Pb(2),d.Ec("selectedIndex",e.selectedIndex),d.Pb(3),d.Ec("ngIf",e.showForm),d.Pb(3),d.Ec("ngIf",e.showTForm),d.Pb(2),d.Ec("studentResultList",e.studentResultList)("isResultReady",e.isResultReady))},directives:[x.a,x.d,x.b,tt.b,tt.a,tt.c,a.n,St,R.a,u.z,u.r,u.k,a.m,k.a,u.e,u.l,j.c,j.f,E.b,u.c,Ct.c,u.q,u.h,Ct.a,u.v,u.i,w.n,j.b],pipes:[a.b],styles:[""]}),Kt),data:{braedcrumb:"Add"}}],te=((Qt=function t(){_classCallCheck(this,t)}).\u0275mod=d.bc({type:Qt}),Qt.\u0275inj=d.ac({factory:function(t){return new(t||Qt)},imports:[[n.i.forChild(Yt)],n.i]}),Qt),ee=c("jAig"),ce=((Zt=function t(){_classCallCheck(this,t)}).\u0275mod=d.bc({type:Zt}),Zt.\u0275inj=d.ac({factory:function(t){return new(t||Zt)},imports:[[a.c,te,u.m,u.w,C.d,ee.a]]}),Zt)}}]);