define('conf/pl/blog', function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var $Blog = require('mods/blog');

	module.exports = {
		init : function(){
			var objs = this.objs = {};
			objs.blog = new $Blog();
		},
		attach : function(){

		},
		detach : function(){

		},
		destroy : function(){

		}
	};
});

