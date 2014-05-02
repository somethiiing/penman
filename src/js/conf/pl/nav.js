define('conf/pl/nav', function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var $Nav = require('mods/nav');

	module.exports = {
		init : function(){
			var objs = this.objs = {};
			objs.nav = new $Nav();
		},
		attach : function(){

		},
		detach : function(){

		},
		destroy : function(){

		}
	};
});

