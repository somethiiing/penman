define('more/base',function(require,exports,module){
	var $ = require('core/chaos/jquery');
	var $Class = require('more/class');
	var $Events = require('more/events');

	//遍历从属实例的方法
	//{String} name 要调用的子对象方法名称
	var traverse = function(name){
		if(this.objs){
			$.each(this.objs, function(k, o){
				if( o && $.isFunction(o[name])){
					o[name]();
				}
			});
		}
	};
    
    //业务对象的基类
	var Base = $Class.create({
		Implements : [$Events],
		//这里用来配置基础选项
		//虽然这个对象被绑定在原型上，但在setOptions函数中，
		//this.conf属性被覆盖为当前实例的一个新对象
		conf : {},
		//初始化
		initialize : function(options){
			this.objs = {};		//存放组件相关的对象实例
			this.nodes = {};	//存放组件相关的DOM元素
			this.data = {};		//存放组件相关数据
			this.bound = {};	//存放组件需要绑定的事件函数

			this.setOptions(options);	//设置选项
			this.prepare();				//解析DOM之前需要做的准备工作
			this.parseDom();			//解析DOM
			this.build();				//构造组件
			this.setBound();			//创建可绑定的事件函数
			this.attach();				//安装组件
		},
		//设置选项
		setOptions : function(options){
			this.conf = $.extend(true, {}, this.conf, options);
		},
		//解析DOM之前的准备
		prepare : $.noop,
		//解析DOM
		parseDom : $.noop,
		//构建模块
		build : $.noop,
		//把要绑定的事件函数添加到this.bound对象上
		setBound : function(){
			this.bound = {};
		},
		//设置DOM事件
		setDomEvents : $.noop,
		//设置自定义事件
		setCustEvents : $.noop,
		//设置广播事件
		setListener : $.noop,
		set : function(key, val){
			if(this.data){
				this.data[key] = val;
				this.trigger('change');
			}
		},
		get : function(key){
			if(this.data){
				return this.data[key];
			}
		},
		//安装组件
		attach : function(){
			if(this.get('attached')){return;}
			this.set('attached', true);		//标记组建状态为已加载
			this.setDomEvents('add');		//绑定DOM事件
			this.setCustEvents('add');		//绑定自定义事件
			this.setListener('add');		//绑定广播
			traverse.call(this, 'attach');	//遍历子对象的attach方法
			this.trigger('attach');			//绑定好事件后，触发attach事件
		},
		//拆卸组件
		detach : function(){
			if(!this.get('attached')){return;}
			this.set('attached', false);	//标记组件状态为已拆卸
			this.trigger('detach');			//在解绑事件前，触发detach事件
			traverse.call(this, 'detach');	//遍历子对象的detach方法
			this.setListener('remove');		//解除广播
			this.setCustEvents('remove');	//解除自定义事件
			this.setDomEvents('remove');	//解除DOM事件
		},
		//销毁组件
		destroy : function(){
			this.detach();
			$.each(this.nodes, function(key, node){
				$(node).remove();
			});
			traverse.call(this, 'destroy');
			this.conf = null;
			this.objs = null;
			this.nodes = null;
			this.data = null;
			this.bound = null;
			this.trigger('destroy');
		}
	});

	module.exports = Base;

});

