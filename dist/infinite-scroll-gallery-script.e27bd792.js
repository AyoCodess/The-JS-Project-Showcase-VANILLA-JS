parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gnQY":[function(require,module,exports) {
function n(n,e,t,o,r,c,a){try{var i=n[c](a),l=i.value}catch(s){return void t(s)}i.done?e(l):Promise.resolve(l).then(o,r)}function e(e){return function(){var t=this,o=arguments;return new Promise(function(r,c){var a=e.apply(t,o);function i(e){n(a,r,c,i,l,"next",e)}function l(e){n(a,r,c,i,l,"throw",e)}i(void 0)})}}var t=config.MY_API_TOKEN,o=document.getElementById("image-container"),r=document.getElementById("loader3"),c=[],a=!1,i=0,l=15,s=!0,u="crypto",d="https://api.unsplash.com/photos/random/?client_id=".concat(t,"&query=").concat(u,"&count=").concat(l);function p(n){d="https://api.unsplash.com/photos/random/?client_id=".concat(t,"&query=").concat(u,"&count=").concat(n)}function f(){++i===l&&(a=!0,r.hidden=!0,l=30,console.log("images per page loaded",l))}function g(n,e){for(var t in e)n.setAttribute(t,e[t])}function h(){i=0,console.log("in the displayPhots function",i),l=c.length,console.log("total images",l),c.forEach(function(n){var e=document.createElement("a");g(e,{href:n.urls.regular,target:"_blank"});var t=document.createElement("img");g(t,{src:n.urls.regular,alt:n.alt_description,title:n.alt_description}),t.addEventListener("load",f),e.append(t),o.append(e)})}function m(){return v.apply(this,arguments)}function v(){return(v=e(regeneratorRuntime.mark(function n(){var e,t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log("original state",s),n.next=4,fetch(d);case 4:return e=n.sent,n.next=7,e.json();case 7:t=n.sent,s&&(p(30),s=!1),c=t,console.log(c),console.log("images per page loaded 2nd",l),h(),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),alert("".concat(n.t0));case 18:case"end":return n.stop()}},n,null,[[0,15]])}))).apply(this,arguments)}window.addEventListener("scroll",function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-1e3&&a&&(a=!1,m())}),m();
},{}]},{},["gnQY"], null)
//# sourceMappingURL=/infinite-scroll-gallery-script.e27bd792.js.map