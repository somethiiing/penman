define('common/channel',function(require,exports,module){

	var $Listener = require('common/listener');
	module.exports = new $Listener([
		'needLogin',
		'needRegister',
		'locationChange',
		'changeLocation'
	]);
});
