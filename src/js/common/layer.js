define('common/layer',function(require,exports,module){

	//弹出alert窗口
	exports.alert = function(str, options){
		options = options || {};
		options.message = str;
		$.log(str, options);
	};

	//弹出确认窗口
	exports.confirm = function(str, options){
		options = options || {};
		options.message = str;
		$.log(str, options);
	};

});

