define('kit/evt/fireDelay',function(require,exports,module){

	//延迟激发事件
	//param {Function} fn 要延迟激发的事件
	//param {Number} delay 延迟时间[ms]
	//param {Object} bind 事件函数的this指向
	/* example:
	var comp = {
		countWords : function(){
			console.debug(this.length);
		}
	};
	$('#input').keydown(fireDelay(function(){
		this.length = $('#input').val().length;
	}, 200, comp));
	*/
	var fireDelay = function(fn, delay, bind){
		var timer = null;
		return function(){
			if(timer)clearTimeout(timer);
			var args = arguments;
			timer = setTimeout(function(){
				fn.apply(bind, args);
			}, delay);
		};
	};

	module.exports = fireDelay;
});

