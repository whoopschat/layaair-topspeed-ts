!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(this,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),i=n(1),a=0,r=0,u=0,s=0,l=.01;e.initScreen=function(t,e,n){for(var c=[],f=3;f<arguments.length;f++)c[f-3]=arguments[f];u=e,s=n;var p=Laya.Browser.clientHeight/laya.utils.Browser.clientWidth,h=n/e,d=e,_=n;a=0,r=0,Math.abs(p/h-1)>l&&(p>h?r=((_=e*p)-n)/2:p<h&&(a=((d=n/p)-e)/2)),t?Laya3D.init.apply(this,[d,_].concat(c)):Laya.init.apply(this,[d,_].concat(c)),Laya.stage.scaleMode=Laya.Stage.SCALE_EXACTFIT,Laya.stage.alignH=Laya.Stage.ALIGN_CENTER,Laya.stage.alignV=Laya.Stage.ALIGN_MIDDLE,o.initBg(),i.initUI(a,r)},e.default={setDeviation:function(t){l=t},getWidth:function(){return Laya.stage.width},getHeight:function(){return Laya.stage.height},getOffestX:function(){return a},getOffestY:function(){return r},getDesignWidth:function(){return u},getDesignHeight:function(){return s}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i,a,r=n(2),u=n(6),s=!1,l=0,c=0;function f(){s||((o=new Laya.Sprite).name="_tape_stage",(i=new Laya.Sprite).name="_tape_main_layer",(a=new Laya.Sprite).name="_tape_top_layer",o.addChild(i),o.addChild(a),Laya.stage.addChild(o),s=!0),i.x=l,i.y=c,a.x=l,a.y=c}function p(){if(i.numChildren>0&&i.getChildAt(i.numChildren-1)instanceof u.default)return void r.setFocus(!0);r.setFocus(!1)}e.initUI=function(t,e){l=t,c=e,f()},e.default={checkFocus:p,moveTopToMainLayer:function(t){f(),t&&t.parent==i&&(i.removeChild(t),i.addChild(t)),p()},addViewToMainLayer:function(t){f(),t&&i.addChild(t),p()},addViewTopLayer:function(t){f(),t&&a.addChild(t),p()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),i=n(1),a=[],r=!1;function u(){return a}function s(){return a.length}function l(t){void 0===t&&(t=0);var e=s();return e>t?a[e-1-t]:null}function c(t,e,n){void 0===t&&(t=0),void 0===e&&(e=!1),void 0===n&&(n=null);var o=l(t);o&&o.show(e&&s()>1,n)}function f(t){c(0,!0,function(){var e=l(1);e&&(e.hide(),t&&t())})}function p(t){(t>=s()&&(t=s()-1),t<=0)||(a.splice(s()-t,t).forEach(function(t){t.hide(),t.exit()}),c(0))}e.setFocus=function(t){var e=l();e&&e.focus(t)},e.default={navigate:function(t,e,n,s){void 0===e&&(e=null),void 0===n&&(n=null),void 0===s&&(s=!1),e||(e={});var c,p,h=function(){new o.default({page:t,params:e,onShow:function(){f(function(){n&&n(!0)})},onLoaded:function(t){var e;r=!1,i.default.addViewToMainLayer(t),e=t,a.push(e)},onLoadProgress:function(t,e){if(r){var n=l();n&&n.nextProgress(e)}}})};if(s||t.single){var d=[];u().forEach(function(e){e.filter(t)&&d.push(e)}),d.length>0?(c=d.pop(),(p=a.indexOf(c))>=0&&(a.splice(p,1),a.push(c),f(null),i.default.moveTopToMainLayer(c))):h()}else h()},pop:function(t){void 0===t&&(t=1),p(t)},popToTop:function(){p(s())},finish:function(t,e){void 0===e&&(e=null);var n=[];u().forEach(function(o){o.filter(t,e)&&n.push(o)}),function(t){if(t&&!(t.length<=0)){for(var e=0;s()>1&&e<t.length;e++){var n=t[e];a.splice(a.indexOf(n),1),n.hide(),n.exit()}c(0)}}(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="4.0.0",i="${app_version}";var a=!0;var r="${env}";function u(){return 0===r.indexOf("${")?"development":r}e.default={isLayaApp:function(){return window.hasOwnProperty("Laya")},isConchApp:function(){return window.hasOwnProperty("conch")},getAppVersion:function(){return 0===i.indexOf("${")?"1.0.0":i},getVersion:function(){return 0===o.indexOf("${")?"1.0.0":o},setDebug:function(t){a=t},printError:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];a&&console.error.apply(console,["Tape:",t].concat(e))},printDebug:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];a&&console.log.apply(console,["Tape:",t].concat(e))},getEnv:u,setEnv:function(t){r=t},isDev:function(){return"production"!==u()},isProd:function(){return"production"===u()}}},function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=function(t){function e(e){void 0===e&&(e=null);var n=t.call(this)||this;return n._bgSprite=null,n._bgAlpha=.5,n._bgColor="#000000",n._isTranslucent=!0,n._isShow=!1,n._handleOnTouchOutside=null,n._canceledOnTouchOutside=!1,n._mask=!1,n._onEvent=null,n._handleOnTouchOutside=e,n._onEvent=function(t){n.isShow&&n.canceledOnTouchOutside&&n._handleOnTouchOutside&&n._handleOnTouchOutside(),t.stopPropagation()},setTimeout(function(){return n.initBg()},0),n}return i(e,t),Object.defineProperty(e.prototype,"ui",{get:function(){return this.getChildByName("_contentView")},set:function(t){this.removeChildByName("_contentView"),t.name="_contentView",this.addChild(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isShow",{get:function(){return this._isShow},set:function(t){this._isShow=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bgAlpha",{get:function(){return this._bgAlpha},set:function(t){this._bgAlpha=t,this.refreshBg()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bgColor",{get:function(){return this._bgColor},set:function(t){this._bgColor=t,this.refreshBg()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isTranslucent",{get:function(){return this._isTranslucent},set:function(t){this._isTranslucent=t,this.refreshBg()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"canceledOnTouchOutside",{get:function(){return this._canceledOnTouchOutside},set:function(t){this._canceledOnTouchOutside=t,this.refreshCanceledOnTouchOutside()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nonPenetrating",{get:function(){return this._mask},set:function(t){this._mask=t,this.refreshCanceledOnTouchOutside()},enumerable:!0,configurable:!0}),e.prototype.refreshBg=function(){this._bgSprite&&(this._bgSprite.alpha=this.bgAlpha,this._bgSprite.graphics.clear(),this.isTranslucent||this._bgSprite.graphics.drawRect(0,0,this._bgSprite.width,this._bgSprite.height,this.bgColor))},e.prototype.refreshCanceledOnTouchOutside=function(){this._bgSprite&&this._bgSprite.offAll(),(this.canceledOnTouchOutside||this.nonPenetrating)&&this.ui&&(this.ui.mouseThrough=!0,this._bgSprite&&this._bgSprite.on(Laya.Event.CLICK,this,this._onEvent))},e.prototype.initBg=function(){this._bgSprite||(this._bgSprite=new Laya.Sprite,this._bgSprite.x=-a.default.getOffestX(),this._bgSprite.y=-a.default.getOffestY(),this._bgSprite.width=a.default.getWidth(),this._bgSprite.height=a.default.getHeight(),this.addChildAt(this._bgSprite,0),this.refreshBg(),this.refreshCanceledOnTouchOutside())},e}(Laya.Component);e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=null,a=null,r=null,u=null;function s(){a&&r&&(a.skin=r),a.sizeGrid=a&&u?u:""}e.initBg=function(){(i=Laya.stage.getChildByName("_tape_bg_layer"))||((i=new Laya.Sprite).name="_tape_bg_layer",Laya.stage.addChild(i),(a=new Laya.Image).name="_bg_image",i.addChild(a)),i.width=o.default.getWidth(),i.height=o.default.getHeight(),a.width=o.default.getWidth(),a.height=o.default.getHeight(),s()},e.default={setBgSkin:function(t,e){void 0===e&&(e=null),r=t,u=e,s()},setBgColor:function(t){i&&(i.graphics.clear(),i.graphics.drawRect(0,0,i.width,i.height,t))},setBgTexture:function(t){i&&(i.graphics.clear(),Laya.loader.load(t,Laya.Handler.create(this,function(t){try{i.graphics.fillTexture(t,0,0,i.width,i.height,"repeat")}catch(t){}})))},getBgSprite:function(){return i}}},function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n(7),u=function(t){function e(e){var n=t.call(this)||this;n._options=null,n._activity=null,n._isShow=!1,n._isFocus=!1,n.visible=!1,n._options=e;var o=n._options.page.res;return o&&o.length>0?Laya.loader.load(o,Laya.Handler.create(n,function(){n._newActivity(),n._onLoaded()}),Laya.Handler.create(n,function(t){n._onLoadProgress(t)},null,!1)):(n._newActivity(),n._onLoaded()),n}return i(e,t),e.prototype._newActivity=function(){this._activity||(this._activity=new this._options.page({page:this._options.page,params:this._options.params}))},e.prototype._onLoaded=function(){var t=this;r.onNavigatorReady().then(function(){t._options.onLoaded&&t._options.onLoaded(t),t.addChild(t._activity),t._activity.onCreate&&t._activity.onCreate(),t._options.onShow&&t._options.onShow()})},e.prototype._onLoadProgress=function(t){this._options.onLoadProgress&&this._options.onLoadProgress(this,t)},e.prototype.nextProgress=function(t){this._activity.onNextProgress&&this._activity.onNextProgress(t)},e.prototype.filter=function(t,e){return t===this._options.page&&(!e||e===this._activity)},e.prototype.show=function(t,e){if(!this.visible&&!this._isShow){this._isShow=!0;var n=this._activity.easeIn||Laya.Ease.linearIn,o=this._activity.duration||0,i=this._activity.fromProps||{},r=this._activity.toProps||{};t&&n&&o>0?(Object.assign(this,i),this._activity.onResume&&this._activity.onResume(),this.visible=!0,Laya.Tween.to(this,r,o,n,Laya.Handler.create(this,function(){e&&e()}))):(this._activity.onResume&&this._activity.onResume(),this.visible=!0,e&&e()),a.default.checkFocus()}},e.prototype.hide=function(){this.visible&&this._isShow&&(this._isShow=!1,this._activity.onPause&&this._activity.onPause(),this.visible=!1,this.focus(!1))},e.prototype.exit=function(){this._activity.onDestroy&&this._activity.onDestroy(),this.destroy()},e.prototype.focus=function(t){this._isFocus!==t&&(this._isFocus=t,this._activity.onFocus&&this._activity.onFocus(t))},e}(Laya.Component);e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=null,a=!1,r=!1,u=null,s=new Promise(function(t){u=t});function l(){var t=i.commonRes||[];t.length>0?Laya.loader.load(t,Laya.Handler.create(null,function(){c(),i.onLoaded&&i.onLoaded()}),Laya.Handler.create(this,function(t){i.onLoadProgress&&i.onLoadProgress(t)},null,!1)):(i.onLoadProgress&&i.onLoadProgress(100),i.onLoaded&&i.onLoaded(),c())}function c(){i.mainPage&&o.default.navigate(i.mainPage)}e.initNavigator=function(t){t&&!a&&((i=t)&&i.fileVersion?(Laya.ResourceVersion.type=Laya.ResourceVersion.FILENAME_VERSION,Laya.ResourceVersion.enable(i.fileVersion,Laya.Handler.create(null,function(){l()}))):l(),a=!0)},e.onNavigatorReady=function(){return r?Promise.resolve():s},e.setNavigatorReady=function(){r||(r=!0,u(),u=null,s=null)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i={},a={alpha:0},r={alpha:1};function u(t,e){!function(t,e){var n=t.toProps||r||{},o=t.fromProps||a||{},i=t.easeOut||Laya.Ease.linearOut,u=t.duration||500;Object.assign(t,n),Laya.Tween.to(t,o,u,i,Laya.Handler.create(this,function(){e&&e(t)}))}(t,function(){t._onHide&&t._onHide(t.popup,e),t.isShow=!1,t.onHide&&t.onHide(t.popup,e),t.removeSelf&&t.removeSelf(),t.destroy&&t.destroy(),o.default.checkFocus()})}function s(t){!function(t,e){var n=t.fromProps||a||{},o=t.toProps||r||{},i=t.easeIn||Laya.Ease.linearIn,u=t.duration||500;Object.assign(t,n),Laya.Tween.to(t,o,u,i,Laya.Handler.create(this,function(){e&&e(t)}))}(t,function(){t.isShow=!0})}e.default={setDefaultAnim:function(t,e){a=t,r=e},showPopup:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=null);var a=i[t],r=new t;r.popup=t,r.params=e||{},r._onHide=n,a?a.push(r):i[t]=[r],o.default.addViewToMainLayer(r),r.onShow&&r.onShow(),s(r)},hidePopup:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=null);var o=i[t];if(e){var a=o?o.indexOf(e):-1;if(a<0)return;o.splice(a,1),u(e,n)}else o&&o.splice(0,o.length).forEach(function(t){u(t,n)})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i={};function a(t,e){if(!i[t])return[];if(e&&i[t].length>1)return i[t].splice(i[t].indexOf(e),1),[e];var n=i[t]||[];return delete i[t],n}e.default={showToast:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=null);var r=new t;r._on_hide=n,r.toast=t,r.params=e||{},r.onShow&&r.onShow();var u=r.fromProps||{alpha:0},s=r.toProps||{alpha:1},l=r.easeIn||Laya.Ease.linearIn,c=r.easeOut||Laya.Ease.linearOut,f=r.duration,p=r.displayDuration;Object.assign(r,u),Laya.Tween.to(r,s,f,l,Laya.Handler.create(this,function(){r.isShow=!0}),0),-1!=p&&Laya.Tween.to(r,u,f,c,Laya.Handler.create(this,function(){r&&(a(t,r),r._on_hide&&r._on_hide(r.toast),r.isShow=!1,r.onHide&&r.onHide(),r.destroy())}),p+f),function(t,e){i[t]?i[t].push(e):i[t]=[e]}(t,r),o.default.addViewTopLayer(r)},hideToast:function(t,e){void 0===e&&(e=null),a(t,e).forEach(function(t){t._on_hide&&t._on_hide(t.toast),t.isShow=!1,t.onHide&&t.onHide(),t.destroy()})}}},function(t,e,n){"use strict";n(11);var o=n(5),i=n(0),a=n(12),r=n(3),u=n(14),s=n(15),l=n(2),c=n(8),f=n(9),p=n(16),h=n(17),d=n(18),_=n(19),y={init:_.init,init3D:_.init3D,start:_.start,bg:o.default,screen:i.default,audio:a.default,env:r.default,runtime:u.default,utils:s.default,navigator:l.default,popup:c.default,toast:f.default,Activity:p.default,PopupView:h.default,ToastView:d.default};"undefined"!=typeof window&&(window.Tape=y),t.exports={Tape:y}},function(t,e){"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){"use strict";if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i)for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])}return n},writable:!0,configurable:!0})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(13);var a=function(){function t(t){this._auidoUrl="",this._chancel=null,this._playing=!1,this._onPlay=null,this._onPause=null,this._onStop=null,this._onError=null,this._onProgress=null,this._onComplete=null,this._position=-1,this._duration=-1,this._paused=!1,this._type="sound",this._playTime=0,this._type=t}return t.prototype._update=function(){this._chancel&&(this._position=this._chancel.position,this._duration=this._chancel.duration,!this._playing&&this._position>0&&(this._playing=!0,this._onPlay&&this._onPlay()),this._playing&&this._duration>0?this._onProgress&&this._onProgress({position:this.position,duration:this.duration}):Date.now()-this._playTime>2e3&&(this._onError&&this._onError(),this.stop()))},t.prototype.onPlay=function(t){this._onPlay=t},t.prototype.onStop=function(t){this._onStop=t},t.prototype.onPause=function(t){this._onPause=t},t.prototype.onProgress=function(t){this._onProgress=t},t.prototype.onComplete=function(t){this._onComplete=t},t.prototype.onError=function(t){this._onError=t},Object.defineProperty(t.prototype,"url",{get:function(){return this._auidoUrl},set:function(t){this._auidoUrl!=t&&(this._auidoUrl=t,this.stop())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this._type},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return this._position},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this._duration},enumerable:!0,configurable:!0}),t.prototype.isPaused=function(){return this._paused},t.prototype.isPlaying=function(){return this._playing},t.prototype.play=function(t){var e=this;void 0===t&&(t=1),function(t){if(window&&window.WeixinJSBridge)try{window.WeixinJSBridge.invoke("getNetworkType",{},function(){t&&t()})}catch(e){t&&t()}else t&&t()}(function(){if(e._auidoUrl){e.stop();var n=(a=e._auidoUrl,r=".ogg",u=Laya.Utils.getFileExtension(a),s=u?"."+u:"",o.default.isConchApp()&&".wav"!=s&&".ogg"!=s?a.substr(0,a.length-s.length)+r:a);e._playTime=Date.now(),e._chancel=Laya.SoundManager.playSound(n,t,Laya.Handler.create(e,function(){e._onComplete&&e._onComplete(),e.stop()}),null,0),i.default.loop(e,e._update)}var a,r,u,s})},t.prototype.pause=function(){this._chancel&&this._playing&&(this._onPause&&this._onPause(),this._chancel.pause(),this._paused=!0,this._playing=!1,i.default.clear(this,this._update))},t.prototype.resume=function(){this._chancel&&this._paused&&(this._paused=!1,this._chancel.resume(),i.default.loop(this,this._update))},t.prototype.stop=function(){this._chancel&&(this._onStop&&this._onStop(),this._chancel.stop(),this._chancel=null,this._paused=!1,this._playing=!1,Laya.SoundManager.removeChannel(this._chancel),Laya.SoundManager.destroySound(this._auidoUrl),i.default.clear(this,this._update))},t.prototype.destroy=function(){this.stop(),this._onComplete=null,this._onProgress=null,this._onPlay=null,this._onStop=null,this._onPause=null},t}(),r=new a("music");e.default={playMusic:function(t,e){return void 0===e&&(e=1),r.url=t,r.play(e),r},playSound:function(t,e){void 0===e&&(e=1);var n=new a("sound");return n.url=t,n.play(e),n},stopAll:function(){Laya.SoundManager.stopAll()},stopMusic:function(){r.stop()},stopAllSound:function(){Laya.SoundManager.stopAllSound()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this._tasks=[],this._hasLoop=!1}return t.prototype._checkLoop=function(){var t=this;this._tasks.length>0?this._hasLoop||(Laya.timer.frameLoop(1,this,function(){t._tasks.forEach(function(t){var e=t.caller;t.callback.apply(e)})}),this._hasLoop=!0):this._hasLoop&&(Laya.timer.clearAll(this),this._hasLoop=!1)},t.prototype.loop=function(t,e){0==this._tasks.filter(function(n){return n.caller==t&&n.callback==e}).length&&(this._tasks.push({caller:t,callback:e}),this._checkLoop())},t.prototype.clear=function(t,e){!function(t,e){if("function"==typeof e){var n=[];t.forEach(function(t,o){e(t)&&n.push(o)}),n.reverse(),n.forEach(function(e){t.splice(e,1)})}}(this._tasks,function(n){return n.caller==t&&(!e||n.callback==e)}),this._checkLoop()},t}();e.default=new o},function(t,e,n){"use strict";var o,i,a=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),function(t){function e(e,n){!function(t){t.x=t.x+t.width/2-t.pivotX,t.y=t.y+t.height/2-t.pivotY,t.pivot(t.width/2,t.height/2)}(e),Laya.Tween.to(e,{scaleX:n,scaleY:n},t.scaleTime)}function n(n){n.offAll(),n.on(Laya.Event.MOUSE_DOWN,n,function(){return e(n,t.scaleSmalValue)}),n.on(Laya.Event.MOUSE_UP,n,function(){return e(n,t.scaleBigValue)}),n.on(Laya.Event.MOUSE_OUT,n,function(){return e(n,t.scaleBigValue)}),n.on(Laya.Event.CLICK,n,function(){var e;(e=n.sound)?"none"!=e&&Laya.SoundManager.playSound(e,1):t.clickSound&&"none"!=t.clickSound&&Laya.SoundManager.playSound(t.clickSound,1)})}t.clickSound=null,t.scaleTime=100,t.scaleSmalValue=.8,t.scaleBigValue=1,t.bindClick=n;var o=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Button);t.btn=o;var i=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Image);t.btn_img=i;var r=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Label);t.btn_label=r;var u=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Sprite);t.btn_sprite=u;var s=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Box);t.btn_box=s}(i||(i={})),e.default=i},function(t,e,n){"use strict";function o(t){if(t.length>0)return t[Math.floor(Math.random()*t.length)]}function i(t){if("object"==typeof t)return t;try{return JSON.parse(t)}catch(e){return t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={randomUUID:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},randomInteger:function(t,e){switch(arguments.length){case 1:return Math.floor(Math.random()*t+1);case 2:return Math.floor(Math.random()*(e-t+1)+t);default:return 0}},randomNumber:function(t,e){switch(arguments.length){case 1:return Math.random()*t+1;case 2:return Math.random()*(e-t+1)+t;default:return 0}},randomArray:function(t,e){void 0===e&&(e=-1);var n=-1==e?t.length:e;n=Math.min(n,t.length);for(var i=t.concat([]),a=[];a.length<n;){var r=o(i);a.push(r),i.splice(i.indexOf(n),1)}return a},randomArrayItem:o,anyToArray:function(t){if(null===t||""===t||void 0===t)return[];var e=i(t);return"string"==typeof e?e.split(","):e instanceof Array?e:[e]},tryToObject:i}},function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),r=n(4),u=n(0),s=function(t){function e(e){var n=t.call(this,function(){n.back()})||this;return n.page=null,n.params={},n.duration=0,n.easeIn=null,n.easeOut=null,n.fromProps=null,n.toProps=null,n.width=u.default.getDesignWidth(),n.height=u.default.getDesignHeight(),n.params=Object.assign({},e.params||{}),n.page=e.page,n}return i(e,t),e.open=function(t,e){a.default.navigate(this,t,e)},e.finish=function(){a.default.finish(this)},e.prototype.redirectTo=function(t,e,n,o){var i=this;void 0===e&&(e={}),void 0===n&&(n=null),void 0===o&&(o=!1),this.navigate(t,e,function(){i.back(),n&&n()},o)},e.prototype.navigate=function(t,e,n,o){void 0===e&&(e={}),void 0===n&&(n=null),void 0===o&&(o=!1),a.default.navigate(t,e,n,o)},e.prototype.back=function(){a.default.finish(this.page,this)},e.prototype.finish=function(t,e){void 0===t&&(t=this.page),void 0===e&&(e=null),a.default.finish(t,e)},e.prototype.pop=function(t){void 0===t&&(t=1),a.default.pop(t)},e.prototype.popToTop=function(){a.default.popToTop()},e.res=[],e.single=!1,e}(r.default);e.default=s},function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),r=n(0),u=function(t){function e(){var e=t.call(this,function(){e.hide()})||this;return e.duration=500,e.easeIn=null,e.easeOut=null,e.fromProps=null,e.toProps=null,e.isTranslucent=!1,e.canceledOnTouchOutside=!1,e.nonPenetrating=!0,e.width=r.default.getDesignWidth(),e.height=r.default.getDesignHeight(),e}return i(e,t),e.show=function(t,e){a.default.showPopup(this,t,e)},e.hide=function(t){a.default.hidePopup(this,null,t)},e.prototype.hide=function(t){void 0===t&&(t=null),a.default.hidePopup(this.popup,this,t)},e}(n(4).default);e.default=u},function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(9),r=n(0),u=function(t){function e(){var e=t.call(this,function(){e.hide()})||this;return e.duration=200,e.displayDuration=1e3,e.easeIn=null,e.easeOut=null,e.fromProps=null,e.toProps=null,e.width=r.default.getDesignWidth(),e.height=r.default.getDesignHeight(),e}return i(e,t),e.show=function(t,e){a.default.showToast(this,t,e)},e.hide=function(){a.default.hideToast(this)},e.prototype.hide=function(){a.default.hideToast(this.toast,this)},e}(n(4).default);e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(0),a=n(7),r=!1;e.init=function(t,e){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];r||(o.default.isLayaApp()?(o.default.printDebug("init..."),o.default.printDebug("tape version: "+o.default.getVersion()),o.default.printDebug("app version: "+o.default.getAppVersion()),o.default.printDebug("env: "+o.default.getEnv()),i.initScreen.apply(void 0,[!1,t,e].concat(n)),r=!0):o.default.printError("Please ensure that the 'Laya' library has been introduced."))},e.init3D=function(t,e){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];r||(o.default.isLayaApp()?(o.default.printDebug("init3D..."),o.default.printDebug("tape version: "+o.default.getVersion()),o.default.printDebug("app version: "+o.default.getAppVersion()),o.default.printDebug("env: "+o.default.getEnv()),i.initScreen.apply(void 0,[!0,t,e].concat(n)),r=!0):o.default.printError("Please ensure that the 'Laya' library has been introduced."))},e.start=function(t,e){if(void 0===e&&(e=null),r){t||(t={});var n={mainPage:t.mainPage||null,commonRes:t.commonRes||[],fileVersion:t.fileVersion,onLoadProgress:function(e){t.onLoadProgress&&t.onLoadProgress(e)},onLoaded:function(){e&&e(),t.onLoaded&&t.onLoaded()}};alert("--------"),console.log(n),a.initNavigator(n)}else o.default.printError("Please complete the initialization of Tape first.")}}])});
//# sourceMappingURL=tape.js.map