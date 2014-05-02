define('ui/mask',function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var $Overlay = require('ui/overlay');
	var $parseDom = require('kit/dom/parseDom');

	//遮罩
	var Mask = $Overlay.extend({
		conf : {
			target : 'screen',			//要遮挡的目标区域
			template : '<div></div>',	//遮罩的模板
			tapHide : true,				//点击/触摸后隐藏
			styles : {					//遮罩的样式
				'z-index' : 100,
				'position' : 'fixed',
				'background' : 'rgba(0,0,0,0.5)',
				'display' : 'none'
			}
		},
		parseDom : function(){
			this.nodes = $parseDom(this.conf.template);
		},
		build : function(){
			this.setStyles();
			this.insert();
		},
		setBound : function(){
			var that = this;
			this.bound = {
				onResize : function(){
					that.onResize();
				},
				close : function(){
					that.close();
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
			action = action === 'add' ? 'bind' : 'unbind';
			nodes.root[action]('touchmove', bound.onTouchMove);
			nodes.root[action]('tap', bound.close);
			nodes.root[action]('click', bound.close);

			var listen = conf.target === 'screen' ? $(window) : $(conf.target);
			listen[action]('resize', bound.onResize);
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
			var parent = conf.target === 'screen' ? $('body') : $(conf.target);
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
			var target = conf.target === 'screen' ? $('body') : $(conf.target);
			var styles = {
				'left' : target.scrollLeft() + 'px',
				'top' : target.scrollTop() + 'px',
				'width' : target.width() + 'px',
				'height' : target.height() + 'px'
			};
			nodes.root.css(styles);
		},
		close : function(){
			var conf = this.conf;
			if(conf.tapHide){
				this.hide();
			}
		}
	});

	module.exports = Mask;

});


