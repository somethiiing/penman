define('common/listener',function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var $Events = require('more/events');
	// Listener
	// -----------------
	// 用于全局广播的白名单控制机制

	var Listener = function(events){
		this._whiteList = {};
		this._receiver = new $Events();
		if(Array.isArray(events)){
			events.forEach(this.define.bind(this));
		}
	};

	//事件添加，移除，激发的调用方法参考Events，下面是方法名对照表：
	//Events.on : Listener.add
	//Events.off : Listener.remove
	//Events.trigger : Listener.fire
	Listener.prototype = {
		constructor : Listener,
		//在白名单上定义一个事件名称
		define : function(eventName){
			this._whiteList[eventName] = true;
		},
		//取消白名单上的事件名称
		undefine : function(eventName){
			delete this._whiteList[eventName];
		},
		//添加事件
		add : function(){
			this._receiver.on.apply(this._receiver, arguments);
		},
		//激发事件
		fire : function(events){
			var i,
				len,
				args,
				rest = [];

			//据说要比Array.prototype.slice快
			for (i = 1, len = arguments.length; i < len; i++) {
				rest[i - 1] = arguments[i];
			}

			//按照Events.trigger的调用方式，第一个参数是用空格分隔的事件名称列表
			events = events.split(/\s+/);

			//遍历事件列表，依据白名单决定事件是否激发
			events.forEach(function(evtName){
				if(this._whiteList[evtName]){
					this._receiver.trigger.apply(this._receiver, [evtName].concat(rest));
				}
			}.bind(this));
		},
		//移除事件
		remove : function(){
			this._receiver.off.apply(this._receiver, arguments);
		}
	};

	module.exports = Listener;

});
