define('conf/pl/staticpage', function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var $StaticPage = require('mods/staticpage');

	module.exports = {
		init : function(){
			var objs = this.objs = {};
			objs.staticpage = new $StaticPage();
		},
		attach : function(){

		},
		detach : function(){

		},
		destroy : function(){

		}
	};
});

