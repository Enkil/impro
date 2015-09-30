/*! lazyload 1.5.5 by Andrea "verlok" Verlicchi*/
!function(a,b){"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.LazyLoad=b()}(this,function(){function a(a,b,c){return m?void a.addEventListener(b,c):void(n&&(a.attachEvent("on"+b,function(a){return function(){c.call(a,window.event)}}(a)),a=null))}function b(a,b,c){return m?void a.removeEventListener(b,c):void(n&&a.detachEvent("on"+b,c))}function c(a,b,c){function d(){return window.innerWidth||l.documentElement.clientWidth||document.body.clientWidth}function e(){return window.innerHeight||l.documentElement.clientHeight||document.body.clientHeight}function f(a){return a.getBoundingClientRect().top+m-l.documentElement.clientTop}function g(a){return a.getBoundingClientRect().left+n-l.documentElement.clientLeft}function h(){var d;return d=b===window?e()+m:f(b)+b.offsetHeight,d<=f(a)-c}function i(){var e;return e=b===window?d()+window.pageXOffset:g(b)+d(),e<=g(a)-c}function j(){var d;return d=b===window?m:f(b),d>=f(a)+c+a.offsetHeight}function k(){var d;return d=b===window?n:g(b),d>=g(a)+c+a.offsetWidth}var l,m,n;return l=a.ownerDocument,m=window.pageYOffset||l.body.scrollTop,n=window.pageXOffset||l.body.scrollLeft,!(h()||j()||i()||k())}function d(){var a=new Date;return a.getTime()}function e(a,b){var c,d={};for(c in a)a.hasOwnProperty(c)&&(d[c]=a[c]);for(c in b)b.hasOwnProperty(c)&&(d[c]=b[c]);return d}function f(a){try{return Array.prototype.slice.call(a)}catch(b){var c,d=[],e=a.length;for(c=0;e>c;c++)d.push(a[c]);return d}}function g(a,b){return o?void a.classList.add(b):void(a.className+=(a.className?" ":"")+b)}function h(a,b){return o?void a.classList.remove(b):void(a.className=a.className.replace(new RegExp("(^|\\s+)"+b+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,""))}function i(a,b,c,d){var e=b.getAttribute("data-"+c),f=b.getAttribute("data-"+d);e&&a.setAttribute("srcset",e),f&&a.setAttribute("src",f)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(b){this._settings=e(l,b),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._handleScrollFn=j(this.handleScroll,this),a(window,"resize",this._handleScrollFn),this.update()}var l={elements_selector:"img",container:window,threshold:300,throttle:50,data_src:"original",data_srcset:"original-set",class_loading:"loading",class_loaded:"loaded",skip_invisible:!0,show_while_loading:!1,callback_load:null,callback_set:null,callback_processed:null,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},m=!!window.addEventListener,n=!!window.attachEvent,o=!!document.body.classList;return k.prototype._showOnLoad=function(c){function d(){null!==f&&(f.callback_load&&f.callback_load(c),i(c,c,f.data_srcset,f.data_src),f.callback_set&&f.callback_set(c),h(c,f.class_loading),g(c,f.class_loaded),b(e,"load",d))}var e,f=this._settings;c.getAttribute("src")||c.setAttribute("src",f.placeholder),e=document.createElement("img"),a(e,"load",d),g(c,f.class_loading),i(e,c,f.data_srcset,f.data_src)},k.prototype._showOnAppear=function(c){function d(){null!==e&&(e.callback_load&&e.callback_load(c),h(c,e.class_loading),g(c,e.class_loaded),b(c,"load",d))}var e=this._settings;a(c,"load",d),g(c,e.class_loading),i(c,c,e.data_srcset,e.data_src),e.callback_set&&e.callback_set(c)},k.prototype._loopThroughElements=function(){var a,b,d=this._settings,e=this._elements,f=e?e.length:0,g=[];for(a=0;f>a;a++)b=e[a],d.skip_invisible&&null===b.offsetParent||c(b,d.container,d.threshold)&&(d.show_while_loading?this._showOnAppear(b):this._showOnLoad(b),g.push(a),b.wasProcessed=!0);for(;g.length>0;)e.splice(g.pop(),1),d.callback_processed&&d.callback_processed(e.length);0===f&&this._stopScrollHandler()},k.prototype._purgeElements=function(){var a,b,c=this._elements,d=c.length,e=[];for(a=0;d>a;a++)b=c[a],b.wasProcessed&&e.push(a);for(;e.length>0;)c.splice(e.pop(),1)},k.prototype._startScrollHandler=function(){this._isHandlingScroll||(this._isHandlingScroll=!0,a(this._settings.container,"scroll",this._handleScrollFn))},k.prototype._stopScrollHandler=function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,b(this._settings.container,"scroll",this._handleScrollFn))},k.prototype.handleScroll=function(){var a,b,c;this._settings&&(b=d(),c=this._settings.throttle,0!==c?(a=c-(b-this._previousLoopTime),0>=a||a>c?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=b,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(j(function(){this._previousLoopTime=d(),this._loopTimeout=null,this._loopThroughElements()},this),a))):this._loopThroughElements())},k.prototype.update=function(){this._elements=f(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},k.prototype.destroy=function(){b(window,"resize",this._handleScrollFn),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},k});
//# sourceMappingURL=lazyload.min.js.map