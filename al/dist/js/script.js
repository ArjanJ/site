/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.2 (modified for fullpage.js)
 *
 */
(function(f){jQuery.fn.extend({slimScroll:function(g){var a=f.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},g);this.each(function(){function s(d){d=d||window.event;
var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}function m(d,f,g){k=!1;var e=d,h=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),h),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());g&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),h),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);u();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",s,!1),this.addEventListener("mousewheel",s,!1)):document.attachEvent("onmousewheel",s)}function v(){r=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:r+"px"});var a=r==b.outerHeight()?"none":"block";c.css({display:a})}
function u(){v();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;r>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&h.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&w||x||y||(c.fadeOut("slow"),h.fadeOut("slow"))},1E3))}var w,x,y,A,z,r,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),c=b.parent().find("."+a.barClass),h=b.parent().find("."+
a.railClass);v();if(f.isPlainObject(g)){if("height"in g&&"auto"==g.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in g)n=parseInt(a.scrollTo);else if("scrollBy"in g)n+=parseInt(a.scrollBy);else if("destroy"in g){c.remove();h.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==g.height?b.parent().height():g.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var h=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};h.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(h);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});h.hover(function(){u()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){w=!0;u();p()},function(){w=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});v();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);
/**
 * fullPage 2.5.2
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(b){b.fn.fullpage=function(c){function ka(a){a.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');"#fff"!=c.controlArrowColor&&(a.find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+c.controlArrowColor),a.find(".fp-controlArrow.fp-prev").css("border-color","transparent "+c.controlArrowColor+" transparent transparent"));c.loopHorizontal||a.find(".fp-controlArrow.fp-prev").hide()}function la(){b("body").append('<div id="fp-nav"><ul></ul></div>');
n=b("#fp-nav");n.css("color",c.navigationColor);n.addClass(c.navigationPosition);for(var a=0;a<b(".fp-section").length;a++){var d="";c.anchors.length&&(d=c.anchors[a]);var d='<li><a href="#'+d+'"><span></span></a>',e=c.navigationTooltips[a];void 0!=e&&""!=e&&(d+='<div class="fp-tooltip '+c.navigationPosition+'">'+e+"</div>");d+="</li>";n.find("ul").append(d)}}function M(){b(".fp-section").each(function(){var a=b(this).find(".fp-slide");a.length?a.each(function(){x(b(this))}):x(b(this))});b.isFunction(c.afterRender)&&
c.afterRender.call(this)}function N(){if(!c.autoScrolling||c.scrollBar){var a=b(window).scrollTop(),d=0,e=Math.abs(a-b(".fp-section").first().offset().top);b(".fp-section").each(function(c){var f=Math.abs(a-b(this).offset().top);f<e&&(d=c,e=f)});var f=b(".fp-section").eq(d)}if(!c.autoScrolling&&!f.hasClass("active")){D=!0;var ma=b(".fp-section.active").index(".fp-section")+1,g=E(f),h=f.data("anchor");f.addClass("active").siblings().removeClass("active");k||(b.isFunction(c.onLeave)&&c.onLeave.call(this,
ma,f.index(".fp-section")+1,g),b.isFunction(c.afterLoad)&&c.afterLoad.call(this,h,f.index(".fp-section")+1));F(h,0);c.anchors.length&&!k&&(p=h,location.hash=h);clearTimeout(O);O=setTimeout(function(){D=!1},100)}c.scrollBar&&(clearTimeout(P),P=setTimeout(function(){k||l(f)},1E3))}function Q(a){return scrollable=a.find(".fp-slides").length?a.find(".fp-slide.active").find(".fp-scrollable"):a.find(".fp-scrollable")}function y(a,d){if(h[a]){if("down"==a)var c="bottom",f=b.fn.fullpage.moveSectionDown;else c=
"top",f=b.fn.fullpage.moveSectionUp;if(0<d.length)if(c="top"===c?!d.scrollTop():"bottom"===c?d.scrollTop()+1+d.innerHeight()>=d[0].scrollHeight:void 0,c)f();else return!0;else f()}}function na(a){var d=a.originalEvent;if(!R(a.target)){c.autoScrolling&&!c.scrollBar&&a.preventDefault();a=b(".fp-section.active");var e=Q(a);k||t||(d=S(d),s=d.y,z=d.x,a.find(".fp-slides").length&&Math.abs(A-z)>Math.abs(u-s)?Math.abs(A-z)>b(window).width()/100*c.touchSensitivity&&(A>z?h.right&&b.fn.fullpage.moveSlideRight():
h.left&&b.fn.fullpage.moveSlideLeft()):c.autoScrolling&&!c.scrollBar&&Math.abs(u-s)>b(window).height()/100*c.touchSensitivity&&(u>s?y("down",e):s>u&&y("up",e)))}}function R(a,d){d=d||0;var e=b(a).parent();return d<c.normalScrollElementTouchThreshold&&e.is(c.normalScrollElements)?!0:d==c.normalScrollElementTouchThreshold?!1:R(e,++d)}function oa(a){a=S(a.originalEvent);u=a.y;A=a.x}function q(a){if(c.autoScrolling){a=window.event||a;var d=Math.max(-1,Math.min(1,a.wheelDelta||-a.deltaY||-a.detail));c.scrollBar&&
(a.preventDefault?a.preventDefault():a.returnValue=!1);a=b(".fp-section.active");a=Q(a);k||(0>d?y("down",a):y("up",a));return!1}}function T(a){var d=b(".fp-section.active").find(".fp-slides");if(d.length&&!t){var e=d.find(".fp-slide.active"),f=null,f="prev"===a?e.prev(".fp-slide"):e.next(".fp-slide");if(!f.length){if(!c.loopHorizontal)return;f="prev"===a?e.siblings(":last"):e.siblings(":first")}t=!0;v(d,f)}}function U(){b(".fp-slide.active").each(function(){G(b(this))})}function l(a,d,e){var f=a.position();
if("undefined"!==typeof f&&(d={element:a,callback:d,isMovementUp:e,dest:f,dtop:f.top,yMovement:E(a),anchorLink:a.data("anchor"),sectionIndex:a.index(".fp-section"),activeSlide:a.find(".fp-slide.active"),activeSection:b(".fp-section.active"),leavingSection:b(".fp-section.active").index(".fp-section")+1,localIsResizing:w},!(d.activeSection.is(a)&&!w||c.scrollBar&&b(window).scrollTop()===d.dtop))){if(d.activeSlide.length)var g=d.activeSlide.data("anchor"),h=d.activeSlide.index();c.autoScrolling&&c.continuousVertical&&
"undefined"!==typeof d.isMovementUp&&(!d.isMovementUp&&"up"==d.yMovement||d.isMovementUp&&"down"==d.yMovement)&&(d.isMovementUp?b(".fp-section.active").before(d.activeSection.nextAll(".fp-section")):b(".fp-section.active").after(d.activeSection.prevAll(".fp-section").get().reverse()),r(b(".fp-section.active").position().top),U(),d.wrapAroundElements=d.activeSection,d.dest=d.element.position(),d.dtop=d.dest.top,d.yMovement=E(d.element));a.addClass("active").siblings().removeClass("active");k=!0;V(h,
g,d.anchorLink,d.sectionIndex);b.isFunction(c.onLeave)&&!d.localIsResizing&&c.onLeave.call(this,d.leavingSection,d.sectionIndex+1,d.yMovement);pa(d);p=d.anchorLink;c.autoScrolling&&F(d.anchorLink,d.sectionIndex)}}function pa(a){if(c.css3&&c.autoScrolling&&!c.scrollBar)W("translate3d(0px, -"+a.dtop+"px, 0px)",!0),setTimeout(function(){X(a)},c.scrollingSpeed);else{var d=qa(a);b(d.element).animate(d.options,c.scrollingSpeed,c.easing).promise().done(function(){X(a)})}}function qa(a){var b={};c.autoScrolling&&
!c.scrollBar?(b.options={top:-a.dtop},b.element="."+Y):(b.options={scrollTop:a.dtop},b.element="html, body");return b}function ra(a){a.wrapAroundElements&&a.wrapAroundElements.length&&(a.isMovementUp?b(".fp-section:first").before(a.wrapAroundElements):b(".fp-section:last").after(a.wrapAroundElements),r(b(".fp-section.active").position().top),U())}function X(a){ra(a);b.isFunction(c.afterLoad)&&!a.localIsResizing&&c.afterLoad.call(this,a.anchorLink,a.sectionIndex+1);setTimeout(function(){k=!1;b.isFunction(a.callback)&&
a.callback.call(this)},600)}function Z(){if(!D){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1];if(b.length){var c="undefined"===typeof p,f="undefined"===typeof p&&"undefined"===typeof a&&!t;(b&&b!==p&&!c||f||!t&&H!=a)&&I(b,a)}}}function v(a,d){var e=d.position(),f=a.find(".fp-slidesContainer").parent(),g=d.index(),h=a.closest(".fp-section"),k=h.index(".fp-section"),m=h.data("anchor"),n=h.find(".fp-slidesNav"),l=d.data("anchor"),r=w;if(c.onSlideLeave){var p=h.find(".fp-slide.active").index(),
q;q=p==g?"none":p>g?"left":"right";r||"none"===q||b.isFunction(c.onSlideLeave)&&c.onSlideLeave.call(this,m,k+1,p,q)}d.addClass("active").siblings().removeClass("active");"undefined"===typeof l&&(l=g);!c.loopHorizontal&&c.controlArrows&&(h.find(".fp-controlArrow.fp-prev").toggle(0!=g),h.find(".fp-controlArrow.fp-next").toggle(!d.is(":last-child")));h.hasClass("active")&&V(g,l,m,k);var s=function(){r||b.isFunction(c.afterSlideLoad)&&c.afterSlideLoad.call(this,m,k+1,l,g);t=!1};c.css3?(e="translate3d(-"+
e.left+"px, 0px, 0px)",$(a.find(".fp-slidesContainer"),0<c.scrollingSpeed).css(aa(e)),setTimeout(function(){s()},c.scrollingSpeed,c.easing)):f.animate({scrollLeft:e.left},c.scrollingSpeed,c.easing,function(){s()});n.find(".active").removeClass("active");n.find("li").eq(g).find("a").addClass("active")}function ba(){ca();if(J){if("text"!==b(document.activeElement).attr("type")){var a=b(window).height();Math.abs(a-K)>20*Math.max(K,a)/100&&(b.fn.fullpage.reBuild(!0),K=a)}}else clearTimeout(da),da=setTimeout(function(){b.fn.fullpage.reBuild(!0)},
500)}function ca(){if(c.responsive){var a=g.hasClass("fp-responsive");b(window).width()<c.responsive?a||(b.fn.fullpage.setAutoScrolling(!1),b("#fp-nav").hide(),g.addClass("fp-responsive")):a&&(b.fn.fullpage.setAutoScrolling(!0),b("#fp-nav").show(),g.removeClass("fp-responsive"))}}function $(a){var b="all "+c.scrollingSpeed+"ms "+c.easingcss3;a.removeClass("fp-notransition");return a.css({"-webkit-transition":b,transition:b})}function L(a){return a.addClass("fp-notransition")}function sa(a,d){if(825>
a||900>d){var c=Math.min(100*a/825,100*d/900).toFixed(2);b("body").css("font-size",c+"%")}else b("body").css("font-size","100%")}function F(a,d){c.menu&&(b(c.menu).find(".active").removeClass("active"),b(c.menu).find('[data-menuanchor="'+a+'"]').addClass("active"));c.navigation&&(b("#fp-nav").find(".active").removeClass("active"),a?b("#fp-nav").find('a[href="#'+a+'"]').addClass("active"):b("#fp-nav").find("li").eq(d).find("a").addClass("active"))}function E(a){var d=b(".fp-section.active").index(".fp-section");
a=a.index(".fp-section");return d==a?"none":d>a?"up":"down"}function x(a){a.css("overflow","hidden");var b=a.closest(".fp-section"),e=a.find(".fp-scrollable");if(e.length)var f=e.get(0).scrollHeight;else f=a.get(0).scrollHeight,c.verticalCentered&&(f=a.find(".fp-tableCell").get(0).scrollHeight);b=m-parseInt(b.css("padding-bottom"))-parseInt(b.css("padding-top"));f>b?e.length?e.css("height",b+"px").parent().css("height",b+"px"):(c.verticalCentered?a.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):
a.wrapInner('<div class="fp-scrollable" />'),a.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:b+"px",size:"10px",alwaysVisible:!0})):ea(a);a.css("overflow","")}function ea(a){a.find(".fp-scrollable").children().first().unwrap().unwrap();a.find(".slimScrollBar").remove();a.find(".slimScrollRail").remove()}function fa(a){a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+ga(a)+'px;" />')}function ga(a){var b=m;if(c.paddingTop||c.paddingBottom)b=a,b.hasClass("fp-section")||
(b=a.closest(".fp-section")),a=parseInt(b.css("padding-top"))+parseInt(b.css("padding-bottom")),b=m-a;return b}function W(a,b){b?$(g):L(g);g.css(aa(a));setTimeout(function(){g.removeClass("fp-notransition")},10)}function I(a,c){"undefined"===typeof c&&(c=0);var e=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".fp-section").eq(a-1);a===p||e.hasClass("active")?ha(e,c):l(e,function(){ha(e,c)})}function ha(a,b){if("undefined"!=typeof b){var c=a.find(".fp-slides"),f=c.find('[data-anchor="'+b+'"]');f.length||(f=
c.find(".fp-slide").eq(b));f.length&&v(c,f)}}function ta(a,b){a.append('<div class="fp-slidesNav"><ul></ul></div>');var e=a.find(".fp-slidesNav");e.addClass(c.slidesNavPosition);for(var f=0;f<b;f++)e.find("ul").append('<li><a href="#"><span></span></a></li>');e.css("margin-left","-"+e.width()/2+"px");e.find("li").first().find("a").addClass("active")}function V(a,b,e,f){var g="";c.anchors.length?(a?("undefined"!==typeof e&&(g=e),"undefined"===typeof b&&(b=a),H=b,location.hash=g+"/"+b):("undefined"!==
typeof a&&(H=b),location.hash=e),B(location.hash)):"undefined"!==typeof a?B(f+"-"+a):B(String(f))}function B(a){a=a.replace("/","-").replace("#","");b("body")[0].className=b("body")[0].className.replace(/\b\s?fp-viewing-[^\s]+\b/g,"");b("body").addClass("fp-viewing-"+a)}function ua(){var a=document.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(a,null);
for(var f in c)void 0!==a.style[f]&&(a.style[f]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[f]));document.body.removeChild(a);return void 0!==b&&0<b.length&&"none"!==b}function ia(){return window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function S(a){var b=[];b.y="undefined"!==typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY;b.x="undefined"!==typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX;
return b}function G(a){var d=c.scrollingSpeed;b.fn.fullpage.setScrollingSpeed(0);v(a.closest(".fp-slides"),a);b.fn.fullpage.setScrollingSpeed(d)}function r(a){c.scrollBar?g.scrollTop(a):c.css3?W("translate3d(0px, -"+a+"px, 0px)",!1):g.css("top",-a)}function aa(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function va(){r(0);b("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();b(".fp-section").css({height:"","background-color":"",padding:""});b(".fp-slide").css({width:""});
g.css({height:"",position:"","-ms-touch-action":"","touch-action":""});b(".fp-section, .fp-slide").each(function(){ea(b(this));b(this).removeClass("fp-table active")});L(g);L(g.find(".fp-easing"));g.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){b(this).replaceWith(this.childNodes)});b("html, body").scrollTop(0)}function C(a,b){console&&console[a]&&console[a]("fullPage: "+b)}c=b.extend({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],
slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,easing:"easeInQuart",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,sectionSelector:".section",
slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},c);(function(){c.continuousVertical&&(c.loopTop||c.loopBottom)&&(c.continuousVertical=!1,C("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));c.continuousVertical&&c.scrollBar&&(c.continuousVertical=!1,C("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));
b.each(c.anchors,function(a,c){(b("#"+c).length||b('[name="'+c+'"]').length)&&C("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})})();b.extend(b.easing,{easeInQuart:function(a,b,c,f,g){return f*(b/=g)*b*b*b+c}});b.fn.fullpage.setAutoScrolling=function(a){c.autoScrolling=a;a=b(".fp-section.active");c.autoScrolling&&!c.scrollBar?(b("html, body").css({overflow:"hidden",height:"100%"}),g.css({"-ms-touch-action":"none","touch-action":"none"}),
a.length&&r(a.position().top)):(b("html, body").css({overflow:"visible",height:"initial"}),g.css({"-ms-touch-action":"","touch-action":""}),r(0),b("html, body").scrollTop(a.position().top))};b.fn.fullpage.setScrollingSpeed=function(a){c.scrollingSpeed=a};b.fn.fullpage.setMouseWheelScrolling=function(a){a?document.addEventListener?(document.addEventListener("mousewheel",q,!1),document.addEventListener("wheel",q,!1)):document.attachEvent("onmousewheel",q):document.addEventListener?(document.removeEventListener("mousewheel",
q,!1),document.removeEventListener("wheel",q,!1)):document.detachEvent("onmousewheel",q)};b.fn.fullpage.setAllowScrolling=function(a,c){if("undefined"!=typeof c)c=c.replace(" ","").split(","),b.each(c,function(c,d){switch(d){case "up":h.up=a;break;case "down":h.down=a;break;case "left":h.left=a;break;case "right":h.right=a;break;case "all":b.fn.fullpage.setAllowScrolling(a)}console.log(h)});else if(a){if(b.fn.fullpage.setMouseWheelScrolling(!0),J||ja)MSPointer=ia(),b(document).off("touchstart "+MSPointer.down).on("touchstart "+
MSPointer.down,oa),b(document).off("touchmove "+MSPointer.move).on("touchmove "+MSPointer.move,na)}else if(b.fn.fullpage.setMouseWheelScrolling(!1),J||ja)MSPointer=ia(),b(document).off("touchstart "+MSPointer.down),b(document).off("touchmove "+MSPointer.move)};b.fn.fullpage.setKeyboardScrolling=function(a){c.keyboardScrolling=a};b.fn.fullpage.moveSectionUp=function(){var a=b(".fp-section.active").prev(".fp-section");a.length||!c.loopTop&&!c.continuousVertical||(a=b(".fp-section").last());a.length&&
l(a,null,!0)};b.fn.fullpage.moveSectionDown=function(){var a=b(".fp-section.active").next(".fp-section");a.length||!c.loopBottom&&!c.continuousVertical||(a=b(".fp-section").first());a.length&&l(a,null,!1)};b.fn.fullpage.moveTo=function(a,c){var e="",e=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".fp-section").eq(a-1);"undefined"!==typeof c?I(a,c):0<e.length&&l(e)};b.fn.fullpage.moveSlideRight=function(){T("next")};b.fn.fullpage.moveSlideLeft=function(){T("prev")};b.fn.fullpage.reBuild=function(a){w=!0;
var d=b(window).width();m=b(window).height();c.resize&&sa(m,d);b(".fp-section").each(function(){parseInt(b(this).css("padding-bottom"));parseInt(b(this).css("padding-top"));c.verticalCentered&&b(this).find(".fp-tableCell").css("height",ga(b(this))+"px");b(this).css("height",m+"px");if(c.scrollOverflow){var a=b(this).find(".fp-slide");a.length?a.each(function(){x(b(this))}):x(b(this))}a=b(this).find(".fp-slides");a.length&&v(a,a.find(".fp-slide.active"))});b(".fp-section.active").position();d=b(".fp-section.active");
d.index(".fp-section")&&l(d);w=!1;b.isFunction(c.afterResize)&&a&&c.afterResize.call(this);b.isFunction(c.afterReBuild)&&!a&&c.afterReBuild.call(this)};var t=!1,J=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),ja="ontouchstart"in window||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,g=b(this),m=b(window).height(),k=!1,w=!1,p,H,n,Y="fullpage-wrapper",h={up:!0,down:!0,left:!0,right:!0};b.fn.fullpage.setAllowScrolling(!0);c.css3&&(c.css3=ua());
b(this).length?(g.css({height:"100%",position:"relative"}),g.addClass(Y)):C("error","Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();");b(c.sectionSelector).each(function(){b(this).addClass("fp-section")});b(c.slideSelector).each(function(){b(this).addClass("fp-slide")});c.navigation&&la();b(".fp-section").each(function(a){var d=b(this),e=b(this).find(".fp-slide"),f=e.length;a||0!==b(".fp-section.active").length||b(this).addClass("active");b(this).css("height",
m+"px");(c.paddingTop||c.paddingBottom)&&b(this).css("padding",c.paddingTop+" 0 "+c.paddingBottom+" 0");"undefined"!==typeof c.sectionsColor[a]&&b(this).css("background-color",c.sectionsColor[a]);"undefined"!==typeof c.anchors[a]&&b(this).attr("data-anchor",c.anchors[a]);if(1<f){a=100*f;var g=100/f;e.wrapAll('<div class="fp-slidesContainer" />');e.parent().wrap('<div class="fp-slides" />');b(this).find(".fp-slidesContainer").css("width",a+"%");c.controlArrows&&ka(b(this));c.slidesNavigation&&ta(b(this),
f);e.each(function(a){b(this).css("width",g+"%");c.verticalCentered&&fa(b(this))});d=d.find(".fp-slide.active");0==d.length?e.eq(0).addClass("active"):G(d)}else c.verticalCentered&&fa(b(this))}).promise().done(function(){b.fn.fullpage.setAutoScrolling(c.autoScrolling);var a=b(".fp-section.active").find(".fp-slide.active");a.length&&(0!=b(".fp-section.active").index(".fp-section")||0==b(".fp-section.active").index(".fp-section")&&0!=a.index())&&G(a);c.fixedElements&&c.css3&&b(c.fixedElements).appendTo("body");
c.navigation&&(n.css("margin-top","-"+n.height()/2+"px"),n.find("li").eq(b(".fp-section.active").index(".fp-section")).find("a").addClass("active"));c.menu&&c.css3&&b(c.menu).closest(".fullpage-wrapper").length&&b(c.menu).appendTo("body");c.scrollOverflow?("complete"===document.readyState&&M(),b(window).on("load",M)):b.isFunction(c.afterRender)&&c.afterRender.call(this);ca();a=window.location.hash.replace("#","").split("/")[0];if(a.length){var d=b('[data-anchor="'+a+'"]');!c.animateAnchor&&d.length&&
(c.autoScrolling?r(d.position().top):(r(0),B(a),b("html, body").scrollTop(d.position().top)),F(a,null),b.isFunction(c.afterLoad)&&c.afterLoad.call(this,a,d.index(".fp-section")+1),d.addClass("active").siblings().removeClass("active"))}b(window).on("load",function(){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1];b&&I(b,a)})});var O,P,D=!1;b(window).on("scroll",N);var u=0,A=0,s=0,z=0;b(window).on("hashchange",Z);b(document).keydown(function(a){if(c.keyboardScrolling&&c.autoScrolling&&
(40!=a.which&&38!=a.which||a.preventDefault(),!k))switch(a.which){case 38:case 33:b.fn.fullpage.moveSectionUp();break;case 40:case 34:b.fn.fullpage.moveSectionDown();break;case 36:b.fn.fullpage.moveTo(1);break;case 35:b.fn.fullpage.moveTo(b(".fp-section").length);break;case 37:b.fn.fullpage.moveSlideLeft();break;case 39:b.fn.fullpage.moveSlideRight()}});b(document).on("click touchstart","#fp-nav a",function(a){a.preventDefault();a=b(this).parent().index();l(b(".fp-section").eq(a))});b(document).on("click touchstart",
".fp-slidesNav a",function(a){a.preventDefault();a=b(this).closest(".fp-section").find(".fp-slides");var c=a.find(".fp-slide").eq(b(this).closest("li").index());v(a,c)});c.normalScrollElements&&(b(document).on("mouseenter",c.normalScrollElements,function(){b.fn.fullpage.setMouseWheelScrolling(!1)}),b(document).on("mouseleave",c.normalScrollElements,function(){b.fn.fullpage.setMouseWheelScrolling(!0)}));b(".fp-section").on("click touchstart",".fp-controlArrow",function(){b(this).hasClass("fp-prev")?
b.fn.fullpage.moveSlideLeft():b.fn.fullpage.moveSlideRight()});b(window).resize(ba);var K=m,da;b.fn.fullpage.destroy=function(a){b.fn.fullpage.setAutoScrolling(!1);b.fn.fullpage.setAllowScrolling(!1);b.fn.fullpage.setKeyboardScrolling(!1);b(window).off("scroll",N).off("hashchange",Z).off("resize",ba);b(document).off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",c.normalScrollElements).off("mouseout",c.normalScrollElements);
b(".fp-section").off("click",".fp-controlArrow");a&&va()}}})(jQuery);
(function($, window, document, undefined) {
	// 'use strict';

	var toggleMenu = {

		elements: {
			hamburger:		$('#js-hamburger'),
			menu:					$('#js-menu'),
			overlay:			$('#js-overlay'),
			link:					$('#js-menu').find('a'),
			window:				$(window)
		},

		init: function() {
			e = this.elements;
			this.bindActions();
		},

		open: function() {
			e = this.elements;
			e.hamburger.toggleClass('c-hamburger--close');
			e.menu.toggleClass('menu--open');
			e.overlay.toggleClass('c-overlay--active');
			e.link.toggleClass('menu__link--active');
		},

		close: function() {
			e = this.elements;
			if (e.menu.hasClass('menu--open')) {
				e.hamburger.removeClass('c-hamburger--close');
				e.menu.removeClass('menu--open');
				e.overlay.removeClass('c-overlay--active');
				e.link.removeClass('menu__link--active');
			}
		},

		bindActions: function() {
			e.hamburger.on('click', function() {
				toggleMenu.open();
				return false;
			});
			e.window.on('click', function() {
				toggleMenu.close();
			});
		}
	};

	toggleMenu.init();

	var width = $(window).width();
		if (width < 768) {
			// For Mobile
			// Init FullPage Scrolling
			$('#fullpage').fullpage({
				navigation: true,
				resize: false,
				scrollbar: true,
				paddingTop: '69px',
				paddingBottom: '45px',
				autoScrolling: false,
				easecss3: 'ease-out',
				anchors: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fifthSlide']
			});
		}

		if (width > 768) {
			// For Desktop
			// Init FullPage Scrolling
			$('#fullpage').fullpage({
				navigation: true,
				resize: false,
				scrollbar: true,
				paddingTop: '83px',
				paddingBottom: '105px',
				autoScrolling: true,
				easecss3: 'ease-out',
				// normalScrollElements: '#pricing-table',
				anchors: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fifthSlide']
			});
		}

}(jQuery, window, document));