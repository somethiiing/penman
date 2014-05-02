define('ui/dialog',function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var $Overlay = require('ui/overlay');
	var $parseDom = require('kit/dom/parseDom');

	//对话框
	var Dialog = $Overlay.extend({
		conf : {
			template : '<div><button data-role="ok">ok</button></div>',	//对话框模板
			parent : null,				//对话框插入到哪个元素
			styles : {					//对话框样式
				'z-index' : 100,
				'position' : 'absolute',
				'display' : 'none'
			}
		},
		parseDom : function(){
			this.nodes = $parseDom(this.conf.template, {
				log : false,
				roles : ['ok', 'cancel']
			});
		},
		build : function(){
			this.setStyles();
			this.insert();
		},
		setBound : function(){
			var that = this;
			this.bound = {
				ok : function(){
					that.ok();
				},
				cancel : function(){
					that.cancel();
				},
				onResize : function(){
					that.onResize();
				},
				onTouchMove : function(evt){
					that.onTouchMove(evt);
				}
			};
		},
		setDomEvents : function(action){
			var conf = this.conf;
			var nodes = this.nodes;
			var bound = this.bound;
			var delegate = action === 'add' ? 'delegate' : 'undelegate';
			action = action === 'add' ? 'bind' : 'unbind';

			nodes.root[action]('touchmove', bound.onTouchMove);

			$(window)[action]('resize', bound.onResize);

			nodes.root[delegate]('[data-role="ok"]', 'tap', bound.ok);
			nodes.root[delegate]('[data-role="ok"]', 'click', bound.ok);
			nodes.root[delegate]('[data-role="cancel"]', 'tap', bound.cancel);
			nodes.root[delegate]('[data-role="cancel"]', 'click', bound.cancel);
		},
		onTouchMove : function(evt){
			evt.preventDefault();
		},
		onResize : function(){
			this.setPosition();
		},
		insert : function(){
			var conf = this.conf;
			var nodes = this.nodes;
			var parent = conf.parent ? $(conf.parent) : $('body');
			nodes.root.appendTo(parent);
		},
		setStyles : function(styles){
			var conf = this.conf;
			var nodes = this.nodes;
			styles = styles || conf.styles || {};
			nodes.root.css(styles);
		},
		setPosition : function(){
			var conf = this.conf;
			var nodes = this.nodes;
			var prevDisplay = nodes.root.css('display');
			var top = conf.parent ? '50%' : $(window).scrollTop() + $(window).height() / 2 + 'px' ;
			nodes.root.css({
				'visibility' : 'hidden',
				'display' : 'block'
			});
			nodes.root.css({
				'visibility' : '',
				'display' : prevDisplay,
				'top' : top,
				'left' : '50%',
				'margin-left' : 0 - nodes.root.width() / 2 + 'px',
				'margin-top' : 0 - nodes.root.height() / 2 + 'px'
			});
		},
		validate : function(){
			return true;
		},
		ok : function(){
			this.trigger('ok');
			if(this.validate()){
				this.hide();
			}
		},
		cancel : function(){
			this.trigger('cancel');
			this.hide();
		}
	});

	module.exports = Dialog;

});


