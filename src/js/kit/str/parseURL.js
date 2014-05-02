define('kit/str/parseURL',function(require,exports,module){

/**
 * parse URL
 * @param {String} str
 * @return {Object} that
 * @example
	var $parseURL = require('kit/str/parseURL');
	assertEqual( $parseURL('http://jser.io/profile?beijing=huanyingni') , {
		hash : ''
		host : 'jser.io'
		path : 'profile'
		port : ''
		query : 'beijing=huanyingni'
		scheme : http
		slash : '//'
		url : 'http://jser.io/profile?beijing=huanyingni'
	});
 */

	module.exports = function(url){
		var parse_url = /^(?:([A-Za-z]+):(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
		var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
		var results = parse_url.exec(url);
		var that = {};
		for (var i = 0, len = names.length; i < len; i += 1) {
			that[names[i]] = results[i] || '';
		}
		return that;
	};

});
