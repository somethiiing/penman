define('kit/env/touch',function(require,exports,module){

	var touchEnable = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

	module.exports = {
		enable : touchEnable
	};

});


