define('common/location',function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var $historyM = require('common/historyM');
	var $Router = require('common/router');
	var $channel = require('common/channel');

	var LocationM = {
		set : function(url){
			$Router.setLocation(url);
		},
		get : function(){
			return $historyM.parseURL();
		}
	};

	$channel.add('changeLocation', LocationM.set);

	module.exports = LocationM;
});

