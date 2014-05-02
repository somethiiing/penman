define('mods/trans/staticpage', function(require, exports, module) {
	var $Transmission = require('common/transmission');

	//以下面的方式注册接口
	var trans = new $Transmission();
	var g = trans.register.bind(trans);

	g('staticPageArticlecontent', {
		url: '',
		cache: true
	});

	module.exports = trans;

});