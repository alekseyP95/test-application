"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[772],{1445:(A,g,d)=>{d.d(g,{Z:()=>y});const y=(e,u=document.body)=>{let r;return r=(e=>e.match(/^--.*/i))(e)&&Boolean(document.documentMode)&&document.documentMode>=10?(()=>{const e={},u=document.styleSheets;let r="";for(let i=u.length-1;i>-1;i--){const l=u[i].cssRules;for(let c=l.length-1;c>-1;c--)if(".ie-custom-properties"===l[c].selectorText){r=l[c].cssText;break}if(r)break}return r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}")),r.split(";").forEach(i=>{if(i){const l=i.split(": ")[0],c=i.split(": ")[1];l&&c&&(e[`--${l.trim()}`]=c.trim())}}),e})()[e]:window.getComputedStyle(u,null).getPropertyValue(e).replace(/^\s/,""),r}},5772:(A,g,d)=>{d.r(g),d.d(g,{ThemeModule:()=>f});var h=d(9808),s=d(3729),Z=d(1728),p=d(631),T=d(1445),e=d(4893);const u=["*"];let r=(()=>{class t{constructor(o,a){this.document=o,this.renderer=a}themeColors(){Array.from(this.document.querySelectorAll(".theme-color")).forEach(o=>{const a=(0,T.Z)("background-color",o),m=this.renderer.createElement("table");m.innerHTML=`\n          <table class='table w-100'>\n            <tr>\n              <td class='text-muted'>HEX:</td>\n              <td class='font-weight-bold'>${(t=>{if(void 0===t)throw new TypeError("Hex color is not defined");if("transparent"===t)return"#00000000";const n=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!n)throw new Error(`${t} is not a valid rgb color`);const o=`0${parseInt(n[1],10).toString(16)}`,a=`0${parseInt(n[2],10).toString(16)}`,m=`0${parseInt(n[3],10).toString(16)}`;return`#${o.slice(-2)}${a.slice(-2)}${m.slice(-2)}`})(a)}</td>\n            </tr>\n            <tr>\n              <td class='text-muted'>RGB:</td>\n              <td class='font-weight-bold'>${a}</td>\n            </tr>\n          </table>\n        `,this.renderer.appendChild(o.parentNode,m)})}ngOnInit(){}ngAfterViewInit(){this.themeColors()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(h.K0),e.Y36(e.Qsj))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:30,vars:0,consts:[[1,"fade-in"],[1,"mb-4"],["color","primary"],["color","secondary"],["color","success"],["color","danger"],["color","warning"],["color","info"],["color","light"],["color","dark"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"c-card",1)(2,"c-card-header"),e._uU(3," Theme colors "),e.qZA(),e.TgZ(4,"c-card-body")(5,"c-row")(6,"app-theme-color",2)(7,"h6"),e._uU(8,"Brand Primary Color"),e.qZA()(),e.TgZ(9,"app-theme-color",3)(10,"h6"),e._uU(11,"Brand Secondary Color"),e.qZA()(),e.TgZ(12,"app-theme-color",4)(13,"h6"),e._uU(14,"Brand Success Color"),e.qZA()(),e.TgZ(15,"app-theme-color",5)(16,"h6"),e._uU(17,"Brand Danger Color"),e.qZA()(),e.TgZ(18,"app-theme-color",6)(19,"h6"),e._uU(20,"Brand Warning Color"),e.qZA()(),e.TgZ(21,"app-theme-color",7)(22,"h6"),e._uU(23,"Brand Info Color"),e.qZA()(),e.TgZ(24,"app-theme-color",8)(25,"h6"),e._uU(26,"Brand Light Color"),e.qZA()(),e.TgZ(27,"app-theme-color",9)(28,"h6"),e._uU(29,"Brand Dark Color"),e.qZA()()()()()())},directives:function(){return[s.AkF,s.nkx,s.yue,s.iok,i]},encapsulation:2}),t})(),i=(()=>{class t{constructor(){this.color="",this.colorClasses={"theme-color w-75 rounded mb-3":!0},this.display="contents"}ngOnInit(){this.colorClasses=Object.assign(Object.assign({},this.colorClasses),{[`bg-${this.color}`]:!!this.color})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-theme-color"]],hostVars:2,hostBindings:function(o,a){2&o&&e.Udp("display",a.display)},inputs:{color:"color"},ngContentSelectors:u,decls:3,vars:1,consts:[["xl","2","md","4","sm","6","xs","12",1,"my-4","ms-4"],[2,"padding-top","75%",3,"ngClass"]],template:function(o,a){1&o&&(e.F$t(),e.TgZ(0,"c-col",0),e._UZ(1,"div",1),e.Hsn(2),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngClass",a.colorClasses))},directives:[s.Yp0,h.mk],encapsulation:2}),t})();const c=[{path:"",data:{title:"Theme"},children:[{path:"",redirectTo:"colors"},{path:"colors",component:r,data:{title:"Colors"}},{path:"typography",component:(()=>{class t{constructor(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:191,vars:0,consts:[[1,"fade-in"],[1,"mb-4"],[1,"table"],[1,"c-highlighter-rouge"],[1,"bd-example"],[1,"h1"],[1,"h2"],[1,"h3"],[1,"h4"],[1,"h5"],[1,"h6"],["id","someAnchorage",1,"mb-4"],[1,"bd-example","bd-example-type"],[1,"display-1"],[1,"display-2"],[1,"display-3"],[1,"display-4"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-9"],[1,"col-sm-3","c-d-block","c-text-truncate"],[1,"col-sm-9","c-d-block","c-text-truncate"],[1,"col-sm-4"],[1,"col-sm-8"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"c-card",1)(2,"c-card-header"),e._uU(3," Headings "),e.qZA(),e.TgZ(4,"c-card-body")(5,"p"),e._uU(6,"Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."),e.qZA(),e.TgZ(7,"table",2)(8,"thead")(9,"tr")(10,"th"),e._uU(11,"Heading"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Example"),e.qZA()()(),e.TgZ(14,"tbody")(15,"tr")(16,"td")(17,"p")(18,"code",3),e._uU(19,"<h1></h1>"),e.qZA()()(),e.TgZ(20,"td")(21,"h1"),e._uU(22,"h1. Bootstrap heading"),e.qZA()()(),e.TgZ(23,"tr")(24,"td")(25,"p")(26,"code",3),e._uU(27,"<h2></h2>"),e.qZA()()(),e.TgZ(28,"td")(29,"h2"),e._uU(30,"h2. Bootstrap heading"),e.qZA()()(),e.TgZ(31,"tr")(32,"td")(33,"p")(34,"code",3),e._uU(35,"<h3></h3>"),e.qZA()()(),e.TgZ(36,"td")(37,"h3"),e._uU(38,"h3. Bootstrap heading"),e.qZA()()(),e.TgZ(39,"tr")(40,"td")(41,"p")(42,"code",3),e._uU(43,"<h4></h4>"),e.qZA()()(),e.TgZ(44,"td")(45,"h4"),e._uU(46,"h4. Bootstrap heading"),e.qZA()()(),e.TgZ(47,"tr")(48,"td")(49,"p")(50,"code",3),e._uU(51,"<h5></h5>"),e.qZA()()(),e.TgZ(52,"td")(53,"h5"),e._uU(54,"h5. Bootstrap heading"),e.qZA()()(),e.TgZ(55,"tr")(56,"td")(57,"p")(58,"code",3),e._uU(59,"<h6></h6>"),e.qZA()()(),e.TgZ(60,"td")(61,"h6"),e._uU(62,"h6. Bootstrap heading"),e.qZA()()()()()()(),e.TgZ(63,"c-card",1)(64,"c-card-header"),e._uU(65," Headings "),e.qZA(),e.TgZ(66,"c-card-body")(67,"p")(68,"code",3),e._uU(69,".h1"),e.qZA(),e._uU(70," through "),e.TgZ(71,"code",3),e._uU(72,".h6"),e.qZA(),e._uU(73," classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),e.qZA(),e.TgZ(74,"div",4)(75,"p",5),e._uU(76,"h1. Bootstrap heading"),e.qZA(),e.TgZ(77,"p",6),e._uU(78,"h2. Bootstrap heading"),e.qZA(),e.TgZ(79,"p",7),e._uU(80,"h3. Bootstrap heading"),e.qZA(),e.TgZ(81,"p",8),e._uU(82,"h4. Bootstrap heading"),e.qZA(),e.TgZ(83,"p",9),e._uU(84,"h5. Bootstrap heading"),e.qZA(),e.TgZ(85,"p",10),e._uU(86,"h6. Bootstrap heading"),e.qZA()()()(),e.TgZ(87,"c-card",11)(88,"c-card-header"),e._uU(89," Display headings "),e.qZA(),e.TgZ(90,"c-card-body")(91,"p"),e._uU(92,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),e.TgZ(93,"strong"),e._uU(94,"display heading"),e.qZA(),e._uU(95,"\u2014a larger, slightly more opinionated heading style."),e.qZA(),e.TgZ(96,"div",12)(97,"table",2)(98,"tbody")(99,"tr")(100,"td")(101,"span",13),e._uU(102,"Display 1"),e.qZA()()(),e.TgZ(103,"tr")(104,"td")(105,"span",14),e._uU(106,"Display 2"),e.qZA()()(),e.TgZ(107,"tr")(108,"td")(109,"span",15),e._uU(110,"Display 3"),e.qZA()()(),e.TgZ(111,"tr")(112,"td")(113,"span",16),e._uU(114,"Display 4"),e.qZA()()()()()()()(),e.TgZ(115,"c-card",1)(116,"c-card-header"),e._uU(117," Inline text elements "),e.qZA(),e.TgZ(118,"c-card-body")(119,"p"),e._uU(120,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),e.TgZ(121,"strong"),e._uU(122,"display heading"),e.qZA(),e._uU(123,"\u2014a larger, slightly more opinionated heading style."),e.qZA(),e.TgZ(124,"div",4)(125,"p"),e._uU(126,"You can use the mark tag to "),e.TgZ(127,"mark"),e._uU(128,"highlight"),e.qZA(),e._uU(129," text."),e.qZA(),e.TgZ(130,"p")(131,"del"),e._uU(132,"This line of text is meant to be treated as deleted text."),e.qZA()(),e.TgZ(133,"p")(134,"s"),e._uU(135,"This line of text is meant to be treated as no longer accurate."),e.qZA()(),e.TgZ(136,"p")(137,"ins"),e._uU(138,"This line of text is meant to be treated as an addition to the document."),e.qZA()(),e.TgZ(139,"p")(140,"u"),e._uU(141,"This line of text will render as underlined"),e.qZA()(),e.TgZ(142,"p")(143,"small"),e._uU(144,"This line of text is meant to be treated as fine print."),e.qZA()(),e.TgZ(145,"p")(146,"strong"),e._uU(147,"This line rendered as bold text."),e.qZA()(),e.TgZ(148,"p")(149,"em"),e._uU(150,"This line rendered as italicized text."),e.qZA()()()()(),e.TgZ(151,"c-card",1)(152,"c-card-header"),e._uU(153," Description list alignment "),e.qZA(),e.TgZ(154,"c-card-body")(155,"p"),e._uU(156,"Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a "),e.TgZ(157,"code",3),e._uU(158,".text-truncate"),e.qZA(),e._uU(159," class to truncate the text with an ellipsis."),e.qZA(),e.TgZ(160,"div",4)(161,"dl",17)(162,"dt",18),e._uU(163,"Description lists"),e.qZA(),e.TgZ(164,"dd",19),e._uU(165,"A description list is perfect for defining terms."),e.qZA(),e.TgZ(166,"dt",18),e._uU(167,"Euismod"),e.qZA(),e.TgZ(168,"dd",19)(169,"p"),e._uU(170,"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),e.qZA(),e.TgZ(171,"p"),e._uU(172,"Donec id elit non mi porta gravida at eget metus."),e.qZA()(),e.TgZ(173,"dt",18),e._uU(174,"Malesuada porta"),e.qZA(),e.TgZ(175,"dd",19),e._uU(176,"Etiam porta sem malesuada magna mollis euismod."),e.qZA(),e.TgZ(177,"dt",20),e._uU(178,"Truncated term is truncated with "),e.TgZ(179,"code"),e._uU(180,"d-block"),e.qZA()(),e.TgZ(181,"dd",21),e._uU(182,"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),e.qZA(),e.TgZ(183,"dt",18),e._uU(184,"Nesting"),e.qZA(),e.TgZ(185,"dd",19)(186,"dl",17)(187,"dt",22),e._uU(188,"Nested definition list"),e.qZA(),e.TgZ(189,"dd",23),e._uU(190,"Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."),e.qZA()()()()()()()())},directives:[s.AkF,s.nkx,s.yue],encapsulation:2}),t})(),data:{title:"Typography"}}]}];let _=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(c)],p.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[h.ez,_,s.dTQ,s.zE6,s.gzQ,Z.QX,s.dGk,s.P4_]]}),t})()}}]);