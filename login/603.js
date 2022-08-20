"use strict";(self.webpackChunkng=self.webpackChunkng||[]).push([[603],{3603:(S,f,s)=>{s.r(f),s.d(f,{DashboardModule:()=>O});var u=s(84719),T=s(89215),h=s(70853),Z=s(15671),c=s(43144),e=s(55062),U={provide:u.JU,useExisting:(0,e.Gpc)(function(){return y}),multi:!0},y=function(){var t=function(){function r(){(0,Z.Z)(this,r),this.btnCheckboxTrue=!0,this.btnCheckboxFalse=!1,this.state=!1,this.onChange=Function.prototype,this.onTouched=Function.prototype}return(0,c.Z)(r,[{key:"onClick",value:function(){this.isDisabled||(this.toggle(!this.state),this.onChange(this.value))}},{key:"ngOnInit",value:function(){this.toggle(this.trueValue===this.value)}},{key:"trueValue",get:function(){return!(typeof this.btnCheckboxTrue<"u")||this.btnCheckboxTrue}},{key:"falseValue",get:function(){return typeof this.btnCheckboxFalse<"u"&&this.btnCheckboxFalse}},{key:"toggle",value:function(a){this.state=a,this.value=this.state?this.trueValue:this.falseValue}},{key:"writeValue",value:function(a){this.state=this.trueValue===a,this.value=a?this.trueValue:this.falseValue}},{key:"setDisabledState",value:function(a){this.isDisabled=a}},{key:"registerOnChange",value:function(a){this.onChange=a}},{key:"registerOnTouched",value:function(a){this.onTouched=a}}]),r}();return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=e.lG2({type:t,selectors:[["","btnCheckbox",""]],hostVars:3,hostBindings:function(i,a){1&i&&e.NdJ("click",function(){return a.onClick()}),2&i&&(e.uIk("aria-pressed",a.state),e.ekj("active",a.state))},inputs:{btnCheckboxTrue:"btnCheckboxTrue",btnCheckboxFalse:"btnCheckboxFalse"},features:[e._Bn([U])]}),t}(),q={provide:u.JU,useExisting:(0,e.Gpc)(function(){return b}),multi:!0},b=function(){var t=function(){function r(i,a,o,n){(0,Z.Z)(this,r),this.el=i,this.cdr=a,this.renderer=o,this.group=n,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radio",this._hasFocus=!1}return(0,c.Z)(r,[{key:"value",get:function(){return this.group?this.group.value:this._value},set:function(a){this.group?this.group.value=a:this._value=a}},{key:"disabled",get:function(){return this._disabled},set:function(a){this.setDisabledState(a)}},{key:"controlOrGroupDisabled",get:function(){return!!(this.disabled||this.group&&this.group.disabled)||void 0}},{key:"hasDisabledClass",get:function(){return this.controlOrGroupDisabled&&!this.isActive}},{key:"isActive",get:function(){return this.btnRadio===this.value}},{key:"tabindex",get:function(){if(!this.controlOrGroupDisabled)return this.isActive||null==this.group?0:-1}},{key:"hasFocus",get:function(){return this._hasFocus}},{key:"toggleIfAllowed",value:function(){!this.canToggle()||(this.value=this.uncheckable&&this.btnRadio===this.value?void 0:this.btnRadio,this._onChange(this.value))}},{key:"onSpacePressed",value:function(a){this.toggleIfAllowed(),a.preventDefault()}},{key:"focus",value:function(){this.el.nativeElement.focus()}},{key:"onFocus",value:function(){this._hasFocus=!0}},{key:"onBlur",value:function(){this._hasFocus=!1,this.onTouched()}},{key:"canToggle",value:function(){return!this.controlOrGroupDisabled&&(this.uncheckable||this.btnRadio!==this.value)}},{key:"ngOnInit",value:function(){this.uncheckable=typeof this.uncheckable<"u"}},{key:"_onChange",value:function(a){this.group?this.group.value=a:(this.onTouched(),this.onChange(a))}},{key:"writeValue",value:function(a){this.value=a,this.cdr.markForCheck()}},{key:"registerOnChange",value:function(a){this.onChange=a}},{key:"registerOnTouched",value:function(a){this.onTouched=a}},{key:"setDisabledState",value:function(a){this._disabled=a,a?this.renderer.setAttribute(this.el.nativeElement,"disabled","disabled"):this.renderer.removeAttribute(this.el.nativeElement,"disabled")}}]),r}();return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(e.Qsj),e.Y36((0,e.Gpc)(function(){return m}),8))},t.\u0275dir=e.lG2({type:t,selectors:[["","btnRadio",""]],hostVars:8,hostBindings:function(i,a){1&i&&e.NdJ("click",function(){return a.toggleIfAllowed()})("keydown.space",function(n){return a.onSpacePressed(n)})("focus",function(){return a.onFocus()})("blur",function(){return a.onBlur()}),2&i&&(e.uIk("role",a.role)("aria-disabled",a.controlOrGroupDisabled)("aria-checked",a.isActive)("tabindex",a.tabindex),e.ekj("disabled",a.hasDisabledClass)("active",a.isActive))},inputs:{value:"value",disabled:"disabled",uncheckable:"uncheckable",btnRadio:"btnRadio"},features:[e._Bn([q])]}),t}(),w={provide:u.JU,useExisting:(0,e.Gpc)(function(){return m}),multi:!0},m=function(){var t=function(){function r(i){(0,Z.Z)(this,r),this.cdr=i,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radiogroup"}return(0,c.Z)(r,[{key:"value",get:function(){return this._value},set:function(a){this._value=a,this.onChange(a)}},{key:"tabindex",get:function(){return this._disabled?null:0}},{key:"writeValue",value:function(a){this._value=a,this.cdr.markForCheck()}},{key:"registerOnChange",value:function(a){this.onChange=a}},{key:"registerOnTouched",value:function(a){this.onTouched=a}},{key:"setDisabledState",value:function(a){this.radioButtons&&(this._disabled=a,this.radioButtons.forEach(function(o){o.setDisabledState(a)}),this.cdr.markForCheck())}},{key:"onFocus",value:function(){if(!this._disabled){var a=this.getActiveOrFocusedRadio();if(a)a.focus();else{var o=this.radioButtons.find(function(n){return!n.disabled});o&&o.focus()}}}},{key:"onBlur",value:function(){this.onTouched&&this.onTouched()}},{key:"selectNext",value:function(a){this.selectInDirection("next"),a.preventDefault()}},{key:"selectPrevious",value:function(a){this.selectInDirection("previous"),a.preventDefault()}},{key:"disabled",get:function(){return this._disabled}},{key:"selectInDirection",value:function(a){if(!this._disabled){var n=this.getActiveOrFocusedRadio();if(n)for(var g=this.radioButtons.toArray(),_=g.indexOf(n),v=o(_,g);v!==_;v=o(v,g))if(g[v].canToggle()){g[v].toggleIfAllowed(),g[v].focus();break}}function o(J,C){var p=(J+("next"===a?1:-1))%C.length;return p<0&&(p=C.length-1),p}}},{key:"getActiveOrFocusedRadio",value:function(){return this.radioButtons.find(function(a){return a.isActive})||this.radioButtons.find(function(a){return a.hasFocus})}}]),r}();return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.sBO))},t.\u0275dir=e.lG2({type:t,selectors:[["","btnRadioGroup",""]],contentQueries:function(i,a,o){var n;1&i&&e.Suo(o,b,4),2&i&&e.iGM(n=e.CRH())&&(a.radioButtons=n)},hostVars:2,hostBindings:function(i,a){1&i&&e.NdJ("focus",function(){return a.onFocus()})("blur",function(){return a.onBlur()})("keydown.ArrowRight",function(n){return a.selectNext(n)})("keydown.ArrowDown",function(n){return a.selectNext(n)})("keydown.ArrowLeft",function(n){return a.selectPrevious(n)})("keydown.ArrowUp",function(n){return a.selectPrevious(n)}),2&i&&e.uIk("role",a.role)("tabindex",a.tabindex)},features:[e._Bn([w])]}),t}(),k=function(){var t=function(){function r(){(0,Z.Z)(this,r)}return(0,c.Z)(r,null,[{key:"forRoot",value:function(){return{ngModule:r,providers:[]}}}]),r}();return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t}(),A=s(11738),d=s(58852),l=s(53025);function B(t,r){1&t&&(e.TgZ(0,"div",134)(1,"a",135),e._uU(2,"Action"),e.qZA(),e.TgZ(3,"a",135),e._uU(4,"Another action"),e.qZA(),e.TgZ(5,"a",135),e._uU(6,"Something else here"),e.qZA(),e.TgZ(7,"a",135),e._uU(8,"Something else here"),e.qZA()())}function D(t,r){1&t&&(e.TgZ(0,"div",134)(1,"a",135),e._uU(2,"Action"),e.qZA(),e.TgZ(3,"a",135),e._uU(4,"Another action"),e.qZA(),e.TgZ(5,"a",135),e._uU(6,"Something else here"),e.qZA()())}function x(t,r){1&t&&(e.TgZ(0,"div",134)(1,"a",135),e._uU(2,"Action"),e.qZA(),e.TgZ(3,"a",135),e._uU(4,"Another action"),e.qZA(),e.TgZ(5,"a",135),e._uU(6,"Something else here"),e.qZA()())}const R=[{path:"",component:(()=>{class t{constructor(){this.radioModel="Month",this.lineChart1Data=[{data:[65,59,84,84,51,55,40],label:"Series A"}],this.lineChart1Labels=["January","February","March","April","May","June","July"],this.lineChart1Options={tooltips:{enabled:!1,custom:l.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:35,max:89}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart1Colours=[{backgroundColor:(0,d.getStyle)("--primary"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart1Legend=!1,this.lineChart1Type="line",this.lineChart2Data=[{data:[1,18,9,17,34,22,11],label:"Series A"}],this.lineChart2Labels=["January","February","March","April","May","June","July"],this.lineChart2Options={tooltips:{enabled:!1,custom:l.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:-4,max:39}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart2Colours=[{backgroundColor:(0,d.getStyle)("--info"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart2Legend=!1,this.lineChart2Type="line",this.lineChart3Data=[{data:[78,81,80,45,34,12,40],label:"Series A"}],this.lineChart3Labels=["January","February","March","April","May","June","July"],this.lineChart3Options={tooltips:{enabled:!1,custom:l.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart3Colours=[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)"}],this.lineChart3Legend=!1,this.lineChart3Type="line",this.barChart1Data=[{data:[78,81,80,45,34,12,40,78,81,80,45,34,12,40,12,40],label:"Series A",barPercentage:.6}],this.barChart1Labels=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],this.barChart1Options={tooltips:{enabled:!1,custom:l.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1}},this.barChart1Colours=[{backgroundColor:"rgba(255,255,255,.3)",borderWidth:0}],this.barChart1Legend=!1,this.barChart1Type="bar",this.mainChartElements=27,this.mainChartData1=[],this.mainChartData2=[],this.mainChartData3=[],this.mainChartData=[{data:this.mainChartData1,label:"Current"},{data:this.mainChartData2,label:"Previous"},{data:this.mainChartData3,label:"BEP"}],this.mainChartLabels=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Thursday","Wednesday","Thursday","Friday","Saturday","Sunday"],this.mainChartOptions={tooltips:{enabled:!1,custom:l.CustomTooltips,intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(i,a){return{backgroundColor:a.data.datasets[i.datasetIndex].borderColor}}}},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{drawOnChartArea:!1},ticks:{callback:function(i){return i.charAt(0)}}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.mainChartColours=[{backgroundColor:(0,d.hexToRgba)((0,d.getStyle)("--info"),10),borderColor:(0,d.getStyle)("--info"),pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:(0,d.getStyle)("--success"),pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:(0,d.getStyle)("--danger"),pointHoverBackgroundColor:"#fff",borderWidth:1,borderDash:[8,5]}],this.mainChartLegend=!1,this.mainChartType="line",this.brandBoxChartData1=[{data:[65,59,84,84,51,55,40],label:"Facebook"}],this.brandBoxChartData2=[{data:[1,13,9,17,34,41,38],label:"Twitter"}],this.brandBoxChartData3=[{data:[78,81,80,45,34,12,40],label:"LinkedIn"}],this.brandBoxChartData4=[{data:[35,23,56,22,97,23,64],label:"Google+"}],this.brandBoxChartLabels=["January","February","March","April","May","June","July"],this.brandBoxChartOptions={tooltips:{enabled:!1,custom:l.CustomTooltips},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.brandBoxChartColours=[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff"}],this.brandBoxChartLegend=!1,this.brandBoxChartType="line"}random(i,a){return Math.floor(Math.random()*(a-i+1)+i)}ngOnInit(){for(let i=0;i<=this.mainChartElements;i++)this.mainChartData1.push(this.random(50,200)),this.mainChartData2.push(this.random(80,100)),this.mainChartData3.push(65)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:553,vars:57,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-6","col-lg-3"],[1,"card","text-white","bg-info"],[1,"card-body","pb-0"],["type","button",1,"btn","btn-transparent","p-0","float-right"],[1,"icon-location-pin"],[1,"text-value"],[1,"chart-wrapper","mt-3","mx-3",2,"height","70px"],["baseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType"],[1,"card","text-white","bg-primary"],["dropdown","",1,"btn-group","float-right"],["type","button","dropdownToggle","",1,"btn","btn-transparent","dropdown-toggle","p-0"],[1,"icon-settings"],["class","dropdown-menu dropdown-menu-right",4,"dropdownMenu"],[1,"card","text-white","bg-warning"],[1,"chart-wrapper","mt-3",2,"height","70px"],[1,"card","text-white","bg-danger"],[1,"card"],[1,"card-body"],[1,"col-sm-5"],[1,"card-title","mb-0"],[1,"small","text-muted"],[1,"col-sm-7","d-none","d-md-block"],["type","button",1,"btn","btn-primary","float-right"],[1,"icon-cloud-download"],["data-toggle","buttons",1,"btn-group","btn-group-toggle","float-right","mr-3"],["btnRadio","Day","id","option1",1,"btn","btn-outline-secondary",3,"ngModel","ngModelChange"],["btnRadio","Month","id","option2",1,"btn","btn-outline-secondary",3,"ngModel","ngModelChange"],["btnRadio","Year","id","option3",1,"btn","btn-outline-secondary",3,"ngModel","ngModelChange"],[1,"chart-wrapper",2,"height","300px","margin-top","40px"],[1,"card-footer"],[1,"row","text-center"],[1,"col-sm-12","col-md","mb-sm-2","mb-0"],[1,"text-muted"],[1,"progress","progress-xs","mt-2"],["role","progressbar","aria-valuenow","40","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","40%"],["role","progressbar","aria-valuenow","20","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","20%"],["role","progressbar","aria-valuenow","60","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","60%"],["role","progressbar","aria-valuenow","80","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","80%"],["role","progressbar","aria-valuenow","40","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","40%"],[1,"brand-card"],[1,"brand-card-header","bg-facebook"],[1,"fa","fa-facebook"],[1,"chart-wrapper"],[1,"brand-card-body"],[1,"text-uppercase","text-muted","small"],[1,"brand-card-header","bg-twitter"],[1,"fa","fa-twitter"],[1,"brand-card-header","bg-linkedin"],[1,"fa","fa-linkedin"],[1,"brand-card-header","bg-google-plus"],[1,"fa","fa-google-plus"],[1,"col-md-12"],[1,"card-header"],[1,"col-sm-6"],[1,"callout","callout-info"],[1,"h4"],[1,"callout","callout-danger"],[1,"mt-0"],[1,"progress-group","mb-4"],[1,"progress-group-prepend"],[1,"progress-group-text"],[1,"progress-group-bars"],[1,"progress","progress-xs"],["role","progressbar","aria-valuenow","34","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","34%"],["role","progressbar","aria-valuenow","78","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","78%"],["role","progressbar","aria-valuenow","56","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","56%"],["role","progressbar","aria-valuenow","94","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","94%"],["role","progressbar","aria-valuenow","12","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","12%"],["role","progressbar","aria-valuenow","67","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","67%"],["role","progressbar","aria-valuenow","43","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","43%"],["role","progressbar","aria-valuenow","91","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","91%"],["role","progressbar","aria-valuenow","22","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","22%"],["role","progressbar","aria-valuenow","73","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","73%"],["role","progressbar","aria-valuenow","53","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","53%"],["role","progressbar","aria-valuenow","82","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","82%"],["role","progressbar","aria-valuenow","9","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","9%"],["role","progressbar","aria-valuenow","69","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","69%"],[1,"callout","callout-warning"],[1,"callout","callout-success"],[1,"progress-group"],[1,"progress-group-header"],[1,"icon-user","progress-group-icon"],[1,"ml-auto","font-weight-bold"],["role","progressbar","aria-valuenow","43","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","43%"],[1,"progress-group","mb-5"],[1,"icon-user-female","progress-group-icon"],[1,"progress-group-header","align-items-end"],[1,"icon-globe","progress-group-icon"],[1,"ml-auto","font-weight-bold","mr-2"],[1,"text-muted","small"],["role","progressbar","aria-valuenow","56","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","56%"],[1,"icon-social-facebook","progress-group-icon"],["role","progressbar","aria-valuenow","15","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","15%"],[1,"icon-social-twitter","progress-group-icon"],["role","progressbar","aria-valuenow","11","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","11%"],[1,"icon-social-linkedin","progress-group-icon"],["role","progressbar","aria-valuenow","8","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","8%"],[1,"table","table-responsive-sm","table-hover","table-outline","mb-0"],[1,"thead-light"],[1,"text-center"],[1,"icon-people"],[1,"avatar"],["src","assets/img/avatars/1.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],[1,"avatar-status","badge-success"],["title","us","id","us",1,"flag-icon","flag-icon-us","h4","mb-0"],[1,"clearfix"],[1,"float-left"],[1,"float-right"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","50%"],[1,"fa","fa-cc-mastercard",2,"font-size","24px"],["src","assets/img/avatars/2.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],[1,"avatar-status","badge-danger"],["title","br","id","br",1,"flag-icon","flag-icon-br","h4","mb-0"],["role","progressbar","aria-valuenow","10","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","10%"],[1,"fa","fa-cc-visa",2,"font-size","24px"],["src","assets/img/avatars/3.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],[1,"avatar-status","badge-warning"],["title","in","id","in",1,"flag-icon","flag-icon-in","h4","mb-0"],["role","progressbar","aria-valuenow","74","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","74%"],[1,"fa","fa-cc-stripe",2,"font-size","24px"],["src","assets/img/avatars/4.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],[1,"avatar-status","badge-secondary"],["title","fr","id","fr",1,"flag-icon","flag-icon-fr","h4","mb-0"],["role","progressbar","aria-valuenow","98","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","98%"],[1,"fa","fa-paypal",2,"font-size","24px"],["src","assets/img/avatars/5.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],["title","es","id","es",1,"flag-icon","flag-icon-es","h4","mb-0"],[1,"fa","fa-google-wallet",2,"font-size","24px"],["src","assets/img/avatars/6.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],["title","pl","id","pl",1,"flag-icon","flag-icon-pl","h4","mb-0"],["role","progressbar","aria-valuenow","43","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","43%"],[1,"fa","fa-cc-amex",2,"font-size","24px"],[1,"dropdown-menu","dropdown-menu-right"],["href","#",1,"dropdown-item"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"button",5),e._UZ(6,"i",6),e.qZA(),e.TgZ(7,"div",7),e._uU(8,"9.823"),e.qZA(),e.TgZ(9,"div"),e._uU(10,"Members online"),e.qZA()(),e.TgZ(11,"div",8),e._UZ(12,"canvas",9),e.qZA()()(),e.TgZ(13,"div",2)(14,"div",10)(15,"div",4)(16,"div",11)(17,"button",12),e._UZ(18,"i",13),e.qZA(),e.YNc(19,B,9,0,"div",14),e.qZA(),e.TgZ(20,"div",7),e._uU(21,"9.823"),e.qZA(),e.TgZ(22,"div"),e._uU(23,"Members online"),e.qZA()(),e.TgZ(24,"div",8),e._UZ(25,"canvas",9),e.qZA()()(),e.TgZ(26,"div",2)(27,"div",15)(28,"div",4)(29,"div",11)(30,"button",12),e._UZ(31,"i",13),e.qZA(),e.YNc(32,D,7,0,"div",14),e.qZA(),e.TgZ(33,"div",7),e._uU(34,"9.823"),e.qZA(),e.TgZ(35,"div"),e._uU(36,"Members online"),e.qZA()(),e.TgZ(37,"div",16),e._UZ(38,"canvas",9),e.qZA()()(),e.TgZ(39,"div",2)(40,"div",17)(41,"div",4)(42,"div",11)(43,"button",12),e._UZ(44,"i",13),e.qZA(),e.YNc(45,x,7,0,"div",14),e.qZA(),e.TgZ(46,"div",7),e._uU(47,"9.823"),e.qZA(),e.TgZ(48,"div"),e._uU(49,"Members online"),e.qZA()(),e.TgZ(50,"div",8),e._UZ(51,"canvas",9),e.qZA()()()(),e.TgZ(52,"div",18)(53,"div",19)(54,"div",1)(55,"div",20)(56,"h4",21),e._uU(57,"Traffic"),e.qZA(),e.TgZ(58,"div",22),e._uU(59,"November 2017"),e.qZA()(),e.TgZ(60,"div",23)(61,"button",24),e._UZ(62,"i",25),e.qZA(),e.TgZ(63,"div",26)(64,"label",27),e.NdJ("ngModelChange",function(n){return a.radioModel=n}),e._uU(65,"Day"),e.qZA(),e.TgZ(66,"label",28),e.NdJ("ngModelChange",function(n){return a.radioModel=n}),e._uU(67,"Month"),e.qZA(),e.TgZ(68,"label",29),e.NdJ("ngModelChange",function(n){return a.radioModel=n}),e._uU(69,"Year"),e.qZA()()()(),e.TgZ(70,"div",30),e._UZ(71,"canvas",9),e.qZA()(),e.TgZ(72,"div",31)(73,"div",32)(74,"div",33)(75,"div",34),e._uU(76,"Visits"),e.qZA(),e.TgZ(77,"strong"),e._uU(78,"29.703 Users (40%)"),e.qZA(),e.TgZ(79,"div",35),e._UZ(80,"div",36),e.qZA()(),e.TgZ(81,"div",33)(82,"div",34),e._uU(83,"Unique"),e.qZA(),e.TgZ(84,"strong"),e._uU(85,"24.093 Users (20%)"),e.qZA(),e.TgZ(86,"div",35),e._UZ(87,"div",37),e.qZA()(),e.TgZ(88,"div",33)(89,"div",34),e._uU(90,"Pageviews"),e.qZA(),e.TgZ(91,"strong"),e._uU(92,"78.706 Views (60%)"),e.qZA(),e.TgZ(93,"div",35),e._UZ(94,"div",38),e.qZA()(),e.TgZ(95,"div",33)(96,"div",34),e._uU(97,"New Users"),e.qZA(),e.TgZ(98,"strong"),e._uU(99,"22.123 Users (80%)"),e.qZA(),e.TgZ(100,"div",35),e._UZ(101,"div",39),e.qZA()(),e.TgZ(102,"div",33)(103,"div",34),e._uU(104,"Bounce Rate"),e.qZA(),e.TgZ(105,"strong"),e._uU(106,"40.15%"),e.qZA(),e.TgZ(107,"div",35),e._UZ(108,"div",40),e.qZA()()()()(),e.TgZ(109,"div",1)(110,"div",2)(111,"div",41)(112,"div",42),e._UZ(113,"i",43),e.TgZ(114,"div",44),e._UZ(115,"canvas",9),e.qZA()(),e.TgZ(116,"div",45)(117,"div")(118,"div",7),e._uU(119,"89k"),e.qZA(),e.TgZ(120,"div",46),e._uU(121,"friends"),e.qZA()(),e.TgZ(122,"div")(123,"div",7),e._uU(124,"459"),e.qZA(),e.TgZ(125,"div",46),e._uU(126,"feeds"),e.qZA()()()()(),e.TgZ(127,"div",2)(128,"div",41)(129,"div",47),e._UZ(130,"i",48),e.TgZ(131,"div",44),e._UZ(132,"canvas",9),e.qZA()(),e.TgZ(133,"div",45)(134,"div")(135,"div",7),e._uU(136,"973k"),e.qZA(),e.TgZ(137,"div",46),e._uU(138,"followers"),e.qZA()(),e.TgZ(139,"div")(140,"div",7),e._uU(141,"1.792"),e.qZA(),e.TgZ(142,"div",46),e._uU(143,"tweets"),e.qZA()()()()(),e.TgZ(144,"div",2)(145,"div",41)(146,"div",49),e._UZ(147,"i",50),e.TgZ(148,"div",44),e._UZ(149,"canvas",9),e.qZA()(),e.TgZ(150,"div",45)(151,"div")(152,"div",7),e._uU(153,"500+"),e.qZA(),e.TgZ(154,"div",46),e._uU(155,"contacts"),e.qZA()(),e.TgZ(156,"div")(157,"div",7),e._uU(158,"292"),e.qZA(),e.TgZ(159,"div",46),e._uU(160,"feeds"),e.qZA()()()()(),e.TgZ(161,"div",2)(162,"div",41)(163,"div",51),e._UZ(164,"i",52),e.TgZ(165,"div",44),e._UZ(166,"canvas",9),e.qZA()(),e.TgZ(167,"div",45)(168,"div")(169,"div",7),e._uU(170,"894"),e.qZA(),e.TgZ(171,"div",46),e._uU(172,"followers"),e.qZA()(),e.TgZ(173,"div")(174,"div",7),e._uU(175,"92"),e.qZA(),e.TgZ(176,"div",46),e._uU(177,"circles"),e.qZA()()()()()(),e.TgZ(178,"div",1)(179,"div",53)(180,"div",18)(181,"div",54),e._uU(182," Traffic & Sales "),e.qZA(),e.TgZ(183,"div",19)(184,"div",1)(185,"div",55)(186,"div",1)(187,"div",55)(188,"div",56)(189,"small",34),e._uU(190,"New Clients"),e.qZA(),e._UZ(191,"br"),e.TgZ(192,"strong",57),e._uU(193,"9,123"),e.qZA()()(),e.TgZ(194,"div",55)(195,"div",58)(196,"small",34),e._uU(197,"Recuring Clients"),e.qZA(),e._UZ(198,"br"),e.TgZ(199,"strong",57),e._uU(200,"22,643"),e.qZA()()()(),e._UZ(201,"hr",59),e.TgZ(202,"div",60)(203,"div",61)(204,"span",62),e._uU(205," Monday "),e.qZA()(),e.TgZ(206,"div",63)(207,"div",64),e._UZ(208,"div",65),e.qZA(),e.TgZ(209,"div",64),e._UZ(210,"div",66),e.qZA()()(),e.TgZ(211,"div",60)(212,"div",61)(213,"span",62),e._uU(214," Tuesday "),e.qZA()(),e.TgZ(215,"div",63)(216,"div",64),e._UZ(217,"div",67),e.qZA(),e.TgZ(218,"div",64),e._UZ(219,"div",68),e.qZA()()(),e.TgZ(220,"div",60)(221,"div",61)(222,"span",62),e._uU(223," Wednesday "),e.qZA()(),e.TgZ(224,"div",63)(225,"div",64),e._UZ(226,"div",69),e.qZA(),e.TgZ(227,"div",64),e._UZ(228,"div",70),e.qZA()()(),e.TgZ(229,"div",60)(230,"div",61)(231,"span",62),e._uU(232," Thursday "),e.qZA()(),e.TgZ(233,"div",63)(234,"div",64),e._UZ(235,"div",71),e.qZA(),e.TgZ(236,"div",64),e._UZ(237,"div",72),e.qZA()()(),e.TgZ(238,"div",60)(239,"div",61)(240,"span",62),e._uU(241," Friday "),e.qZA()(),e.TgZ(242,"div",63)(243,"div",64),e._UZ(244,"div",73),e.qZA(),e.TgZ(245,"div",64),e._UZ(246,"div",74),e.qZA()()(),e.TgZ(247,"div",60)(248,"div",61)(249,"span",62),e._uU(250," Saturday "),e.qZA()(),e.TgZ(251,"div",63)(252,"div",64),e._UZ(253,"div",75),e.qZA(),e.TgZ(254,"div",64),e._UZ(255,"div",76),e.qZA()()(),e.TgZ(256,"div",60)(257,"div",61)(258,"span",62),e._uU(259," Sunday "),e.qZA()(),e.TgZ(260,"div",63)(261,"div",64),e._UZ(262,"div",77),e.qZA(),e.TgZ(263,"div",64),e._UZ(264,"div",78),e.qZA()()()(),e.TgZ(265,"div",55)(266,"div",1)(267,"div",55)(268,"div",79)(269,"small",34),e._uU(270,"Pageviews"),e.qZA(),e._UZ(271,"br"),e.TgZ(272,"strong",57),e._uU(273,"78,623"),e.qZA()()(),e.TgZ(274,"div",55)(275,"div",80)(276,"small",34),e._uU(277,"Organic"),e.qZA(),e._UZ(278,"br"),e.TgZ(279,"strong",57),e._uU(280,"49,123"),e.qZA()()()(),e._UZ(281,"hr",59),e.TgZ(282,"div",81)(283,"div",82),e._UZ(284,"i",83),e.TgZ(285,"div"),e._uU(286,"Male"),e.qZA(),e.TgZ(287,"div",84),e._uU(288,"43%"),e.qZA()(),e.TgZ(289,"div",63)(290,"div",64),e._UZ(291,"div",85),e.qZA()()(),e.TgZ(292,"div",86)(293,"div",82),e._UZ(294,"i",87),e.TgZ(295,"div"),e._uU(296,"Female"),e.qZA(),e.TgZ(297,"div",84),e._uU(298,"37%"),e.qZA()(),e.TgZ(299,"div",63)(300,"div",64),e._UZ(301,"div",85),e.qZA()()(),e.TgZ(302,"div",81)(303,"div",88),e._UZ(304,"i",89),e.TgZ(305,"div"),e._uU(306,"Organic Search"),e.qZA(),e.TgZ(307,"div",90),e._uU(308,"191.235"),e.qZA(),e.TgZ(309,"div",91),e._uU(310,"(56%)"),e.qZA()(),e.TgZ(311,"div",63)(312,"div",64),e._UZ(313,"div",92),e.qZA()()(),e.TgZ(314,"div",81)(315,"div",88),e._UZ(316,"i",93),e.TgZ(317,"div"),e._uU(318,"Facebook"),e.qZA(),e.TgZ(319,"div",90),e._uU(320,"51.223"),e.qZA(),e.TgZ(321,"div",91),e._uU(322,"(15%)"),e.qZA()(),e.TgZ(323,"div",63)(324,"div",64),e._UZ(325,"div",94),e.qZA()()(),e.TgZ(326,"div",81)(327,"div",88),e._UZ(328,"i",95),e.TgZ(329,"div"),e._uU(330,"Twitter"),e.qZA(),e.TgZ(331,"div",90),e._uU(332,"37.564"),e.qZA(),e.TgZ(333,"div",91),e._uU(334,"(11%)"),e.qZA()(),e.TgZ(335,"div",63)(336,"div",64),e._UZ(337,"div",96),e.qZA()()(),e.TgZ(338,"div",81)(339,"div",88),e._UZ(340,"i",97),e.TgZ(341,"div"),e._uU(342,"LinkedIn"),e.qZA(),e.TgZ(343,"div",90),e._uU(344,"27.319"),e.qZA(),e.TgZ(345,"div",91),e._uU(346,"(8%)"),e.qZA()(),e.TgZ(347,"div",63)(348,"div",64),e._UZ(349,"div",98),e.qZA()()()()(),e._UZ(350,"br"),e.TgZ(351,"table",99)(352,"thead",100)(353,"tr")(354,"th",101),e._UZ(355,"i",102),e.qZA(),e.TgZ(356,"th"),e._uU(357,"User"),e.qZA(),e.TgZ(358,"th",101),e._uU(359,"Country"),e.qZA(),e.TgZ(360,"th"),e._uU(361,"Usage"),e.qZA(),e.TgZ(362,"th",101),e._uU(363,"Payment Method"),e.qZA(),e.TgZ(364,"th"),e._uU(365,"Activity"),e.qZA()()(),e.TgZ(366,"tbody")(367,"tr")(368,"td",101)(369,"div",103),e._UZ(370,"img",104)(371,"span",105),e.qZA()(),e.TgZ(372,"td")(373,"div"),e._uU(374,"Yiorgos Avraamu"),e.qZA(),e.TgZ(375,"div",22)(376,"span"),e._uU(377,"New"),e.qZA(),e._uU(378," | Registered: Jan 1, 2015 "),e.qZA()(),e.TgZ(379,"td",101),e._UZ(380,"i",106),e.qZA(),e.TgZ(381,"td")(382,"div",107)(383,"div",108)(384,"strong"),e._uU(385,"50%"),e.qZA()(),e.TgZ(386,"div",109)(387,"small",34),e._uU(388,"Jun 11, 2015 - Jul 10, 2015"),e.qZA()()(),e.TgZ(389,"div",64),e._UZ(390,"div",110),e.qZA()(),e.TgZ(391,"td",101),e._UZ(392,"i",111),e.qZA(),e.TgZ(393,"td")(394,"div",22),e._uU(395,"Last login"),e.qZA(),e.TgZ(396,"strong"),e._uU(397,"10 sec ago"),e.qZA()()(),e.TgZ(398,"tr")(399,"td",101)(400,"div",103),e._UZ(401,"img",112)(402,"span",113),e.qZA()(),e.TgZ(403,"td")(404,"div"),e._uU(405,"Avram Tarasios"),e.qZA(),e.TgZ(406,"div",22)(407,"span"),e._uU(408,"Recurring"),e.qZA(),e._uU(409," | Registered: Jan 1, 2015 "),e.qZA()(),e.TgZ(410,"td",101),e._UZ(411,"i",114),e.qZA(),e.TgZ(412,"td")(413,"div",107)(414,"div",108)(415,"strong"),e._uU(416,"10%"),e.qZA()(),e.TgZ(417,"div",109)(418,"small",34),e._uU(419,"Jun 11, 2015 - Jul 10, 2015"),e.qZA()()(),e.TgZ(420,"div",64),e._UZ(421,"div",115),e.qZA()(),e.TgZ(422,"td",101),e._UZ(423,"i",116),e.qZA(),e.TgZ(424,"td")(425,"div",22),e._uU(426,"Last login"),e.qZA(),e.TgZ(427,"strong"),e._uU(428,"5 minutes ago"),e.qZA()()(),e.TgZ(429,"tr")(430,"td",101)(431,"div",103),e._UZ(432,"img",117)(433,"span",118),e.qZA()(),e.TgZ(434,"td")(435,"div"),e._uU(436,"Quintin Ed"),e.qZA(),e.TgZ(437,"div",22)(438,"span"),e._uU(439,"New"),e.qZA(),e._uU(440," | Registered: Jan 1, 2015 "),e.qZA()(),e.TgZ(441,"td",101),e._UZ(442,"i",119),e.qZA(),e.TgZ(443,"td")(444,"div",107)(445,"div",108)(446,"strong"),e._uU(447,"74%"),e.qZA()(),e.TgZ(448,"div",109)(449,"small",34),e._uU(450,"Jun 11, 2015 - Jul 10, 2015"),e.qZA()()(),e.TgZ(451,"div",64),e._UZ(452,"div",120),e.qZA()(),e.TgZ(453,"td",101),e._UZ(454,"i",121),e.qZA(),e.TgZ(455,"td")(456,"div",22),e._uU(457,"Last login"),e.qZA(),e.TgZ(458,"strong"),e._uU(459,"1 hour ago"),e.qZA()()(),e.TgZ(460,"tr")(461,"td",101)(462,"div",103),e._UZ(463,"img",122)(464,"span",123),e.qZA()(),e.TgZ(465,"td")(466,"div"),e._uU(467,"En\xe9as Kwadwo"),e.qZA(),e.TgZ(468,"div",22)(469,"span"),e._uU(470,"New"),e.qZA(),e._uU(471," | Registered: Jan 1, 2015 "),e.qZA()(),e.TgZ(472,"td",101),e._UZ(473,"i",124),e.qZA(),e.TgZ(474,"td")(475,"div",107)(476,"div",108)(477,"strong"),e._uU(478,"98%"),e.qZA()(),e.TgZ(479,"div",109)(480,"small",34),e._uU(481,"Jun 11, 2015 - Jul 10, 2015"),e.qZA()()(),e.TgZ(482,"div",64),e._UZ(483,"div",125),e.qZA()(),e.TgZ(484,"td",101),e._UZ(485,"i",126),e.qZA(),e.TgZ(486,"td")(487,"div",22),e._uU(488,"Last login"),e.qZA(),e.TgZ(489,"strong"),e._uU(490,"Last month"),e.qZA()()(),e.TgZ(491,"tr")(492,"td",101)(493,"div",103),e._UZ(494,"img",127)(495,"span",105),e.qZA()(),e.TgZ(496,"td")(497,"div"),e._uU(498,"Agapetus Tade\xe1\u0161"),e.qZA(),e.TgZ(499,"div",22)(500,"span"),e._uU(501,"New"),e.qZA(),e._uU(502," | Registered: Jan 1, 2015 "),e.qZA()(),e.TgZ(503,"td",101),e._UZ(504,"i",128),e.qZA(),e.TgZ(505,"td")(506,"div",107)(507,"div",108)(508,"strong"),e._uU(509,"22%"),e.qZA()(),e.TgZ(510,"div",109)(511,"small",34),e._uU(512,"Jun 11, 2015 - Jul 10, 2015"),e.qZA()()(),e.TgZ(513,"div",64),e._UZ(514,"div",73),e.qZA()(),e.TgZ(515,"td",101),e._UZ(516,"i",129),e.qZA(),e.TgZ(517,"td")(518,"div",22),e._uU(519,"Last login"),e.qZA(),e.TgZ(520,"strong"),e._uU(521,"Last week"),e.qZA()()(),e.TgZ(522,"tr")(523,"td",101)(524,"div",103),e._UZ(525,"img",130)(526,"span",113),e.qZA()(),e.TgZ(527,"td")(528,"div"),e._uU(529,"Friderik D\xe1vid"),e.qZA(),e.TgZ(530,"div",22)(531,"span"),e._uU(532,"New"),e.qZA(),e._uU(533," | Registered: Jan 1, 2015 "),e.qZA()(),e.TgZ(534,"td",101),e._UZ(535,"i",131),e.qZA(),e.TgZ(536,"td")(537,"div",107)(538,"div",108)(539,"strong"),e._uU(540,"43%"),e.qZA()(),e.TgZ(541,"div",109)(542,"small",34),e._uU(543,"Jun 11, 2015 - Jul 10, 2015"),e.qZA()()(),e.TgZ(544,"div",64),e._UZ(545,"div",132),e.qZA()(),e.TgZ(546,"td",101),e._UZ(547,"i",133),e.qZA(),e.TgZ(548,"td")(549,"div",22),e._uU(550,"Last login"),e.qZA(),e.TgZ(551,"strong"),e._uU(552,"Yesterday"),e.qZA()()()()()()()()()()),2&i&&(e.xp6(12),e.Q6J("datasets",a.lineChart2Data)("labels",a.lineChart2Labels)("options",a.lineChart2Options)("colors",a.lineChart2Colours)("legend",a.lineChart2Legend)("chartType",a.lineChart2Type),e.xp6(13),e.Q6J("datasets",a.lineChart1Data)("labels",a.lineChart1Labels)("options",a.lineChart1Options)("colors",a.lineChart1Colours)("legend",a.lineChart1Legend)("chartType",a.lineChart1Type),e.xp6(13),e.Q6J("datasets",a.lineChart3Data)("labels",a.lineChart3Labels)("options",a.lineChart3Options)("colors",a.lineChart3Colours)("legend",a.lineChart3Legend)("chartType",a.lineChart3Type),e.xp6(13),e.Q6J("datasets",a.barChart1Data)("labels",a.barChart1Labels)("options",a.barChart1Options)("colors",a.barChart1Colours)("legend",a.barChart1Legend)("chartType",a.barChart1Type),e.xp6(13),e.Q6J("ngModel",a.radioModel),e.xp6(2),e.Q6J("ngModel",a.radioModel),e.xp6(2),e.Q6J("ngModel",a.radioModel),e.xp6(3),e.Q6J("datasets",a.mainChartData)("labels",a.mainChartLabels)("options",a.mainChartOptions)("colors",a.mainChartColours)("legend",a.mainChartLegend)("chartType",a.mainChartType),e.xp6(44),e.Q6J("datasets",a.brandBoxChartData1)("labels",a.brandBoxChartLabels)("options",a.brandBoxChartOptions)("colors",a.brandBoxChartColours)("legend",a.brandBoxChartLegend)("chartType",a.brandBoxChartType),e.xp6(17),e.Q6J("datasets",a.brandBoxChartData2)("labels",a.brandBoxChartLabels)("options",a.brandBoxChartOptions)("colors",a.brandBoxChartColours)("legend",a.brandBoxChartLegend)("chartType",a.brandBoxChartType),e.xp6(17),e.Q6J("datasets",a.brandBoxChartData3)("labels",a.brandBoxChartLabels)("options",a.brandBoxChartOptions)("colors",a.brandBoxChartColours)("legend",a.brandBoxChartLegend)("chartType",a.brandBoxChartType),e.xp6(17),e.Q6J("datasets",a.brandBoxChartData4)("labels",a.brandBoxChartLabels)("options",a.brandBoxChartOptions)("colors",a.brandBoxChartColours)("legend",a.brandBoxChartLegend)("chartType",a.brandBoxChartType))},dependencies:[u.JJ,u.On,T.jh,h.Hz,h.Mq,h.TO,b],encapsulation:2}),t})(),data:{title:"Dashboard"}}];let M=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[A.Bz.forChild(R),A.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.u5,M,T.m9,h.mr,k.forRoot()]}),t})()}}]);