define('common/transmission',function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var	$Transport = require('common/transport');

	// Transmission
	// -----------------
	// 封装与后台的HTTP交互，提供一个统一的接口列表
	// 包含ajax，jsonp方式

	var Transmission = function(options){
		this._transports = {};
		this.conf = $.extend({}, options);
	};

	Transmission.prototype = {
		constructor : Transmission,
		register : function(name, options){
			if(!this._transports[name]){
				options = $.extend({
					name : name
				}, this.conf, options);
				this._transports[name] = new $Transport(options);
			}
		},
		remove : function(){
			if(this._transports[name]){
				this._transports[name].destroy();
				delete this._transports[name];
			}
		},
		request : function(name, options){
			var trans = this._transports[name];
			if(trans){
				return trans.request(options);
			}
		},
		cancel : function(name){
			var trans = this._transports[name];
			if(trans){
				trans.cancel();
			}
		},
		destroy : function(){
			$.each(this._transports, function(name, transport){
				transport.destroy();
			});
		}
	};

	module.exports = Transmission;

});