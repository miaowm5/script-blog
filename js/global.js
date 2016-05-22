/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

// Array.prototype.uniq
if (!Array.prototype.uniq) {
  Array.prototype.uniq = function() {
    var result = []
    for(var i = 0,len = this.length;i < len;i++){
      ! RegExp(this[i],"g").test(result.join(",")) && (result.push(this[i]));
    }
    return result
  }
}
// Array.prototype.index
if (!Array.prototype.index) {
  Array.prototype.index = function(value) {
    for(var i = 0,len = this.length;i < len;i++){ if(value == this[i]) return i }
    return -1
  }
}
// getUrlParam
(function($){
  $.getUrlParam = function(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    var r = window.location.search.substr(1).match(reg)
    if (r!=null) return unescape(r[2])
    return null
  }
})(jQuery)

// favico.js
!function(){var e=function(e){"use strict";function t(e){if(e.paused||e.ended||g)return!1;try{f.clearRect(0,0,s,l),f.drawImage(e,0,0,s,l)}catch(o){}p=setTimeout(function(){t(e)},S.duration),O.setIcon(h)}function o(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,function(e,t,o,n){return t+t+o+o+n+n});var o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:!1}function n(e,t){var o,n={};for(o in e)n[o]=e[o];for(o in t)n[o]=t[o];return n}function r(){return b.hidden||b.msHidden||b.webkitHidden||b.mozHidden}e=e?e:{};var i,a,l,s,h,f,c,d,u,y,w,g,x,m,p,b,v={bgColor:"#d00",textColor:"#fff",fontFamily:"sans-serif",fontStyle:"bold",type:"circle",position:"down",animation:"slide",elementId:!1,dataUrl:!1,win:window};x={},x.ff="undefined"!=typeof InstallTrigger,x.chrome=!!window.chrome,x.opera=!!window.opera||navigator.userAgent.indexOf("Opera")>=0,x.ie=/*@cc_on!@*/!1,x.safari=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0,x.supported=x.chrome||x.ff||x.opera;var C=[];w=function(){},d=g=!1;var E=function(){i=n(v,e),i.bgColor=o(i.bgColor),i.textColor=o(i.textColor),i.position=i.position.toLowerCase(),i.animation=S.types[""+i.animation]?i.animation:v.animation,b=i.win.document;var t=i.position.indexOf("up")>-1,r=i.position.indexOf("left")>-1;if(t||r)for(var d=0;d<S.types[""+i.animation].length;d++){var u=S.types[""+i.animation][d];t&&(u.y=u.y<.6?u.y-.4:u.y-2*u.y+(1-u.w)),r&&(u.x=u.x<.6?u.x-.4:u.x-2*u.x+(1-u.h)),S.types[""+i.animation][d]=u}i.type=A[""+i.type]?i.type:v.type,a=O.getIcon(),h=document.createElement("canvas"),c=document.createElement("img"),a.hasAttribute("href")?(c.setAttribute("crossOrigin","anonymous"),c.onload=function(){l=c.height>0?c.height:32,s=c.width>0?c.width:32,h.height=l,h.width=s,f=h.getContext("2d"),M.ready()},c.setAttribute("src",a.getAttribute("href"))):(c.onload=function(){l=32,s=32,c.height=l,c.width=s,h.height=l,h.width=s,f=h.getContext("2d"),M.ready()},c.setAttribute("src",""))},M={};M.ready=function(){d=!0,M.reset(),w()},M.reset=function(){d&&(C=[],u=!1,y=!1,f.clearRect(0,0,s,l),f.drawImage(c,0,0,s,l),O.setIcon(h),window.clearTimeout(m),window.clearTimeout(p))},M.start=function(){if(d&&!y){var e=function(){u=C[0],y=!1,C.length>0&&(C.shift(),M.start())};if(C.length>0){y=!0;var t=function(){["type","animation","bgColor","textColor","fontFamily","fontStyle"].forEach(function(e){e in C[0].options&&(i[e]=C[0].options[e])}),S.run(C[0].options,function(){e()},!1)};u?S.run(u.options,function(){t()},!0):t()}}};var A={},I=function(e){return e.n="number"==typeof e.n?Math.abs(0|e.n):e.n,e.x=s*e.x,e.y=l*e.y,e.w=s*e.w,e.h=l*e.h,e.len=(""+e.n).length,e};A.circle=function(e){e=I(e);var t=!1;2===e.len?(e.x=e.x-.4*e.w,e.w=1.4*e.w,t=!0):e.len>=3&&(e.x=e.x-.65*e.w,e.w=1.65*e.w,t=!0),f.clearRect(0,0,s,l),f.drawImage(c,0,0,s,l),f.beginPath(),f.font=i.fontStyle+" "+Math.floor(e.h*(e.n>99?.85:1))+"px "+i.fontFamily,f.textAlign="center",t?(f.moveTo(e.x+e.w/2,e.y),f.lineTo(e.x+e.w-e.h/2,e.y),f.quadraticCurveTo(e.x+e.w,e.y,e.x+e.w,e.y+e.h/2),f.lineTo(e.x+e.w,e.y+e.h-e.h/2),f.quadraticCurveTo(e.x+e.w,e.y+e.h,e.x+e.w-e.h/2,e.y+e.h),f.lineTo(e.x+e.h/2,e.y+e.h),f.quadraticCurveTo(e.x,e.y+e.h,e.x,e.y+e.h-e.h/2),f.lineTo(e.x,e.y+e.h/2),f.quadraticCurveTo(e.x,e.y,e.x+e.h/2,e.y)):f.arc(e.x+e.w/2,e.y+e.h/2,e.h/2,0,2*Math.PI),f.fillStyle="rgba("+i.bgColor.r+","+i.bgColor.g+","+i.bgColor.b+","+e.o+")",f.fill(),f.closePath(),f.beginPath(),f.stroke(),f.fillStyle="rgba("+i.textColor.r+","+i.textColor.g+","+i.textColor.b+","+e.o+")","number"==typeof e.n&&e.n>999?f.fillText((e.n>9999?9:Math.floor(e.n/1e3))+"k+",Math.floor(e.x+e.w/2),Math.floor(e.y+e.h-.2*e.h)):f.fillText(e.n,Math.floor(e.x+e.w/2),Math.floor(e.y+e.h-.15*e.h)),f.closePath()},A.rectangle=function(e){e=I(e);var t=!1;2===e.len?(e.x=e.x-.4*e.w,e.w=1.4*e.w,t=!0):e.len>=3&&(e.x=e.x-.65*e.w,e.w=1.65*e.w,t=!0),f.clearRect(0,0,s,l),f.drawImage(c,0,0,s,l),f.beginPath(),f.font=i.fontStyle+" "+Math.floor(e.h*(e.n>99?.9:1))+"px "+i.fontFamily,f.textAlign="center",f.fillStyle="rgba("+i.bgColor.r+","+i.bgColor.g+","+i.bgColor.b+","+e.o+")",f.fillRect(e.x,e.y,e.w,e.h),f.fillStyle="rgba("+i.textColor.r+","+i.textColor.g+","+i.textColor.b+","+e.o+")","number"==typeof e.n&&e.n>999?f.fillText((e.n>9999?9:Math.floor(e.n/1e3))+"k+",Math.floor(e.x+e.w/2),Math.floor(e.y+e.h-.2*e.h)):f.fillText(e.n,Math.floor(e.x+e.w/2),Math.floor(e.y+e.h-.15*e.h)),f.closePath()};var T=function(e,t){t=("string"==typeof t?{animation:t}:t)||{},w=function(){try{if("number"==typeof e?e>0:""!==e){var n={type:"badge",options:{n:e}};if("animation"in t&&S.types[""+t.animation]&&(n.options.animation=""+t.animation),"type"in t&&A[""+t.type]&&(n.options.type=""+t.type),["bgColor","textColor"].forEach(function(e){e in t&&(n.options[e]=o(t[e]))}),["fontStyle","fontFamily"].forEach(function(e){e in t&&(n.options[e]=t[e])}),C.push(n),C.length>100)throw new Error("Too many badges requests in queue.");M.start()}else M.reset()}catch(r){throw new Error("Error setting badge. Message: "+r.message)}},d&&w()},U=function(e){w=function(){try{var t=e.width,o=e.height,n=document.createElement("img"),r=o/l>t/s?t/s:o/l;n.setAttribute("crossOrigin","anonymous"),n.onload=function(){f.clearRect(0,0,s,l),f.drawImage(n,0,0,s,l),O.setIcon(h)},n.setAttribute("src",e.getAttribute("src")),n.height=o/r,n.width=t/r}catch(i){throw new Error("Error setting image. Message: "+i.message)}},d&&w()},R=function(e){w=function(){try{if("stop"===e)return g=!0,M.reset(),void(g=!1);e.addEventListener("play",function(){t(this)},!1)}catch(o){throw new Error("Error setting video. Message: "+o.message)}},d&&w()},L=function(e){if(window.URL&&window.URL.createObjectURL||(window.URL=window.URL||{},window.URL.createObjectURL=function(e){return e}),x.supported){var o=!1;navigator.getUserMedia=navigator.getUserMedia||navigator.oGetUserMedia||navigator.msGetUserMedia||navigator.mozGetUserMedia||navigator.webkitGetUserMedia,w=function(){try{if("stop"===e)return g=!0,M.reset(),void(g=!1);o=document.createElement("video"),o.width=s,o.height=l,navigator.getUserMedia({video:!0,audio:!1},function(e){o.src=URL.createObjectURL(e),o.play(),t(o)},function(){})}catch(n){throw new Error("Error setting webcam. Message: "+n.message)}},d&&w()}},O={};O.getIcon=function(){var e=!1,t=function(){for(var e=b.getElementsByTagName("head")[0].getElementsByTagName("link"),t=e.length,o=t-1;o>=0;o--)if(/(^|\s)icon(\s|$)/i.test(e[o].getAttribute("rel")))return e[o];return!1};return i.element?e=i.element:i.elementId?(e=b.getElementById(i.elementId),e.setAttribute("href",e.getAttribute("src"))):(e=t(),e===!1&&(e=b.createElement("link"),e.setAttribute("rel","icon"),b.getElementsByTagName("head")[0].appendChild(e))),e.setAttribute("type","image/png"),e},O.setIcon=function(e){var t=e.toDataURL("image/png");if(i.dataUrl&&i.dataUrl(t),i.element)i.element.setAttribute("href",t),i.element.setAttribute("src",t);else if(i.elementId){var o=b.getElementById(i.elementId);o.setAttribute("href",t),o.setAttribute("src",t)}else if(x.ff||x.opera){var n=a;a=b.createElement("link"),x.opera&&a.setAttribute("rel","icon"),a.setAttribute("rel","icon"),a.setAttribute("type","image/png"),b.getElementsByTagName("head")[0].appendChild(a),a.setAttribute("href",t),n.parentNode&&n.parentNode.removeChild(n)}else a.setAttribute("href",t)};var S={};return S.duration=40,S.types={},S.types.fade=[{x:.4,y:.4,w:.6,h:.6,o:0},{x:.4,y:.4,w:.6,h:.6,o:.1},{x:.4,y:.4,w:.6,h:.6,o:.2},{x:.4,y:.4,w:.6,h:.6,o:.3},{x:.4,y:.4,w:.6,h:.6,o:.4},{x:.4,y:.4,w:.6,h:.6,o:.5},{x:.4,y:.4,w:.6,h:.6,o:.6},{x:.4,y:.4,w:.6,h:.6,o:.7},{x:.4,y:.4,w:.6,h:.6,o:.8},{x:.4,y:.4,w:.6,h:.6,o:.9},{x:.4,y:.4,w:.6,h:.6,o:1}],S.types.none=[{x:.4,y:.4,w:.6,h:.6,o:1}],S.types.pop=[{x:1,y:1,w:0,h:0,o:1},{x:.9,y:.9,w:.1,h:.1,o:1},{x:.8,y:.8,w:.2,h:.2,o:1},{x:.7,y:.7,w:.3,h:.3,o:1},{x:.6,y:.6,w:.4,h:.4,o:1},{x:.5,y:.5,w:.5,h:.5,o:1},{x:.4,y:.4,w:.6,h:.6,o:1}],S.types.popFade=[{x:.75,y:.75,w:0,h:0,o:0},{x:.65,y:.65,w:.1,h:.1,o:.2},{x:.6,y:.6,w:.2,h:.2,o:.4},{x:.55,y:.55,w:.3,h:.3,o:.6},{x:.5,y:.5,w:.4,h:.4,o:.8},{x:.45,y:.45,w:.5,h:.5,o:.9},{x:.4,y:.4,w:.6,h:.6,o:1}],S.types.slide=[{x:.4,y:1,w:.6,h:.6,o:1},{x:.4,y:.9,w:.6,h:.6,o:1},{x:.4,y:.9,w:.6,h:.6,o:1},{x:.4,y:.8,w:.6,h:.6,o:1},{x:.4,y:.7,w:.6,h:.6,o:1},{x:.4,y:.6,w:.6,h:.6,o:1},{x:.4,y:.5,w:.6,h:.6,o:1},{x:.4,y:.4,w:.6,h:.6,o:1}],S.run=function(e,t,o,a){var l=S.types[r()?"none":i.animation];return a=o===!0?"undefined"!=typeof a?a:l.length-1:"undefined"!=typeof a?a:0,t=t?t:function(){},a<l.length&&a>=0?(A[i.type](n(e,l[a])),m=setTimeout(function(){o?a-=1:a+=1,S.run(e,t,o,a)},S.duration),O.setIcon(h),void 0):void t()},E(),{badge:T,video:R,image:U,webcam:L,reset:M.reset,browser:{supported:x.supported}}};"undefined"!=typeof define&&define.amd?define([],function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:this.Favico=e}();

// siteGlobal
function siteGlobal(){}
var duoshuoQuery = {short_name:"miaowm5"};
siteGlobal.favicon = new Favico({ animation:'fade' })
siteGlobal.loadState = 0
// loadPublicPage
siteGlobal.loadPublicPage = function(){
  $('#header').html([
    '<div class="viewport">',
      '<h1>喵呜喵5的原创脚本列表</h1>',
      '<ul>',
        '<li><a href="http://rm.66rpg.com/?291206">返回空间</a></li>',
        '<li><a href="list.html">脚本列表</a></li>',
        '<li><a href="order.html">脚本定制</a></li>',
      '</ul>',
    '</div>'
  ].join(''))
  $('#footer').html([
    '<div>',
      '<p>This page is designed by miaowm5(2016)</p>',
      '<a href="http://www.pixiv.net/member_illust.php?mode=medium&illust_id=40308808" target="_blank">',
        'Banner Picture: ポコ',
      '</a>',
    '</div>'
  ].join(''))
  siteGlobal.loadState += 1
}
// checkLoad
siteGlobal.checkLoad = function(targetState){
  if(siteGlobal.loadState >= targetState){
    $('#loading').fadeOut(300, function(){ $('#content').fadeIn(300) })
  }
  else{ setTimeout(function(){siteGlobal.checkLoad(targetState)}, 1000) }
}
// setCommentBox
siteGlobal.setCommentBox = function(){
  $('#comment').html([
    '<div class="big-title">',
      '<h1>发射言弹</h1>',
      '<p class="title-hint">您的留言将被公开展示在这里。</p>',
    '</div>',
    '<div class="card">',
      '<div class="ds-thread" data-thread-key="', siteGlobal.articleID, '"></div>',
    '</div>'
  ].join(''))
  var ds = document.createElement('script');
  ds.type = 'text/javascript';ds.async = true;
  ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
  ds.charset = 'UTF-8';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
}
// encode
siteGlobal.encode=function(str){function base64encode(str){var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var out,i,len;var c1,c2,c3;len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&255;if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&3)<<4);out+="==";break}c2=str.charCodeAt(i++);if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&3)<<4)|((c2&240)>>4));out+=base64EncodeChars.charAt((c2&15)<<2);out+="=";break}c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&3)<<4)|((c2&240)>>4));out+=base64EncodeChars.charAt(((c2&15)<<2)|((c3&192)>>6));out+=base64EncodeChars.charAt(c3&63)}return out}function utf16to8(str){var out,i,len,c;out="";len=str.length;for(i=0;i<len;i++){c=str.charCodeAt(i);if((c>=1)&&(c<=127)){out+=str.charAt(i)}else{if(c>2047){out+=String.fromCharCode(224|((c>>12)&15));out+=String.fromCharCode(128|((c>>6)&63));out+=String.fromCharCode(128|((c>>0)&63))}else{out+=String.fromCharCode(192|((c>>6)&31));out+=String.fromCharCode(128|((c>>0)&63))}}}return out}return base64encode(utf16to8(str))};
// decode
siteGlobal.decode=function(str){function base64decode(str){var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&255]}while(i<len&&c1==-1);if(c1==-1){break}do{c2=base64DecodeChars[str.charCodeAt(i++)&255]}while(i<len&&c2==-1);if(c2==-1){break}out+=String.fromCharCode((c1<<2)|((c2&48)>>4));do{c3=str.charCodeAt(i++)&255;if(c3==61){return out}c3=base64DecodeChars[c3]}while(i<len&&c3==-1);if(c3==-1){break}out+=String.fromCharCode(((c2&15)<<4)|((c3&60)>>2));do{c4=str.charCodeAt(i++)&255;if(c4==61){return out}c4=base64DecodeChars[c4]}while(i<len&&c4==-1);if(c4==-1){break}out+=String.fromCharCode(((c3&3)<<6)|c4)}return out}function utf8to16(str){var out,i,len,c;var char2,char3;out="";len=str.length;i=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out+=str.charAt(i-1);break;case 12:case 13:char2=str.charCodeAt(i++);out+=String.fromCharCode(((c&31)<<6)|(char2&63));break;case 14:char2=str.charCodeAt(i++);char3=str.charCodeAt(i++);out+=String.fromCharCode(((c&15)<<12)|((char2&63)<<6)|((char3&63)<<0));break}}return out}return utf8to16(base64decode(str))};