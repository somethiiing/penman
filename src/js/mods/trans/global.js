define('mods/trans/global',function(require,exports,module){
	var $Transmission = require('common/transmission');

	//以下面的方式注册接口
	var trans = new $Transmission();
	var g = trans.register.bind(trans);

	// //顶部导航轮询请求
	// g('getRemind', {url:'/api/remind/get_remind', autoExecuteError:false, autoExecuteFailure : false});
	// g('getNotify', {url:'/api/notify/index', autoExecuteError:false, autoExecuteFailure : false});

	// //登出
	// g('logout', {url:'/api/auth/logout'});

	module.exports = trans;

});
