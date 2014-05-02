define('ui/overlay',function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var $Base = require('more/base');
	var $parseDom = require('kit/dom/parseDom');

	//覆盖物类
	var Overlay = $Base.extend({
		conf : {
			template : null
		},
		parseDom : function(){
			this.nodes = $parseDom(this.conf.template);
		},
		setPosition : $.noop,
		show : function(){
			this.setPosition();
			this.nodes.root.show();
			this.trigger('show');
		},
		hide : function(){
			this.nodes.root.hide();
			this.trigger('hide');
		}
	});

	module.exports = Overlay;

});


