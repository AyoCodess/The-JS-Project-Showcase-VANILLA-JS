parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kIyj":[function(require,module,exports) {
"use strict";var e,t,n=document.getElementById("input-container"),o=document.getElementById("countdownForm"),c=document.getElementById("date-picker"),d=document.getElementById("countdown"),a=document.getElementById("countdown-title"),l=document.getElementById("countdown-button"),i=document.querySelectorAll("span"),m=document.getElementById("complete"),r=document.getElementById("complete-info"),u=document.getElementById("complete-button"),g="",s="",I=new Date,h=1e3,f=60*h,w=60*f,E=24*w,v=(new Date).toISOString().split("T")[0];function y(){e=setInterval(function(){var t=(new Date).getTime(),o=I-t,c=Math.floor(o/E),l=Math.floor(o%E/w),u=Math.floor(o%w/f),v=Math.floor(o%f/h);n.hidden=!0,o<0?(d.hidden=!0,clearInterval(e),r.textContent="".concat(g," finished on ").concat(s),m.hidden=!1):(a.textContent="".concat(g),i[0].textContent="".concat(c),i[1].textContent="".concat(l),i[2].textContent="".concat(u),i[3].textContent="".concat(v),m.hidden=!0,d.hidden=!1)},1e3)}function p(e){e.preventDefault(),g=e.srcElement[0].value,s=e.srcElement[1].value,t={title:g,date:s},localStorage.setItem("countdown",JSON.stringify(t)),""===s?alert("Please select the date for the countdown."):(I=new Date(s).getTime(),y())}function B(){d.hidden=!0,n.hidden=!1,m.hidden=!0,clearInterval(e),g="",s="",localStorage.removeItem("countdown")}function S(){localStorage.getItem("countdown")&&(n.hidden=!0,t=JSON.parse(localStorage.getItem("countdown")),g=t.title,s=t.date,I=new Date(s).getTime(),y())}o.addEventListener("submit",p),l.addEventListener("click",B),u.addEventListener("click",B),S();
},{}]},{},["kIyj"], null)
//# sourceMappingURL=/your-countdown.39b029e6.js.map