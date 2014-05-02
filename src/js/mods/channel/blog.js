define('mods/channel/blog',function(require,exports,module){

	var $Listener = require('common/listener');
	module.exports = new $Listener([
		'bloglistUpdate',
		'contentUpdate'
	]);
});
