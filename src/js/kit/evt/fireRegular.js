define('kit/evt/fireRegular',function(require,exports,module){

	//规律激发事件
	//param {Function} fn 要延迟激发的事件
	//param {Number} delay 延迟时间[ms]
	//param {Object} bind 事件函数的this指向
	/* example:
	var comp = {
		countWords : function(){
			console.debug(this.length);
		}
	};
	$('#input').keydown(fireRegular(function(){
		this.length = $('#input').val().length;
	}, 200, comp));
	*/
	var fireRegular = function(fn, delay, bind){
		var enable = true,
			args = [],
			timer = null;
		return function(){
			enable = true;
			args = arguments;
			if(!timer){
				timer = setInterval(function(){
					fn.apply(bind, args);
					if(!enable){
						clearInterval(timer);
						timer = null;
					}
					enable = false;
				}, delay);
			}
		};
	};

	module.exports = fireRegular;
});
