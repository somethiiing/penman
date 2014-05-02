define('conf/global',function(require,exports,module){
	require('core/chaos/jquery');

	require('kit/dom/parseDom');
	
	require('more/es5-safe');
	require('more/class');
	require('more/events');
	require('more/base');
	require('more/querystring');
	require('more/mustache');

	require('common/historyM');
	require('common/listener');
	require('common/transmission');
	require('common/transport');
});
