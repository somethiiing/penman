define('conf/pl/bloglist', function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var $BlogList = require('mods/bloglist');

	module.exports = {
		init : function(){
			var objs = this.objs = {};
			objs.blog = new $BlogList();
		},
		attach : function(){

		},
		detach : function(){

		},
		destroy : function(){

		}
	};
});

