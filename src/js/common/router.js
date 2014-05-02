define('common/router',function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var $parseURL = require('kit/str/parseURL');
	var $historyM = require('common/historyM');
	var $pageletM = require('common/pageletM');
	var $channel = require('common/channel');

	//路由器对象 - 页面模块管理器
	//检查页面链接点击，监听popstate。
	//根据路由表，判断模块的加载与拆卸
	//路由表是一个数组，是一个对应当前地址的模块名称列表
	var Router = {
		conf : {},
		routeList : {},
		matchList : {},
		init : function(options){
			var that = this;
			this.setOptions(options);
			this.build();
			this.setBound();
			$(function(){
				that.setDomEvents('add');
			});
			this.setCustEvents('add');
		},
		setOptions : function(options){
			this.conf = $.extend(true,{
				pushState : true,	//是否使用pushState方法
				pageletM : {
					log : false		//日否显示模块加载日志
				}
			}, options);
		},
		build : function(){
			var conf = this.conf;
			$pageletM.init(conf.pageletM);
			this.updateRoute();
		},
		setBound : function(){
			var that = this;
			this.bound = {
				checkLink : function(evt){
					that.checkLink($(this), evt);
				},
				updateRoute : function(){
					that.updateRoute();
				}
			};
		},
		//路由器将会监听整个页面的链接点击事件
		setDomEvents : function(action){
			var bound = this.bound;
			var doc = $(document);
			action = action === 'add' ? 'delegate' : 'undelegate';
			//不要使用tap，无法阻止链接被点击的默认事件
			doc[action]('a', 'touchend', bound.checkLink);
			doc[action]('a', 'click', bound.checkLink);
		},
		setCustEvents : function(action){
			var bound = this.bound;
			action = action === 'add' ? 'on' : 'off';
			$historyM[action + 'Popstate']( bound.updateRoute );
		},
		//检查链接元素的href，判断是否跳转
		checkLink : function(link, evt){
			var conf = this.conf;
			var href = link.attr('href');
			var target = link.attr('target');
			if(conf.pushState && !target){
				this.setLocation(href, evt);
			}
		},
		//获取格式化后的地址
		//解析出错的地址返回空字符串
		getFormatedUrl : function(url){
			var formatedUrl = '';
			try{
				var loc = url ? $parseURL(url) : $historyM.parseURL() ;
				var port = loc.port && loc.port !== '80' ? ':' + loc.port : '';
				formatedUrl = loc.url.replace(loc.scheme + '://' + loc.host + port, '');
				if (formatedUrl.indexOf('/') !== 0) {
					formatedUrl = '/' + formatedUrl;
				}
			}catch(e){
				formatedUrl = '/';
			}
			return formatedUrl;
		},
		//检查链接，如果匹配了路由列表，就阻止默认事件
		//使用 pushState 变更页面地址
		setLocation : function(url, evt){
			var routeName = this.getrouteName(url);
			url = this.getFormatedUrl(url);
			// if(routeName && url){
			if(routeName){
				if(evt){
					evt.preventDefault();
				}
				$historyM.pushState(url);
			}
		},
		//注册路由
		//{String} routeName 路由列表名称，应该为路由列表模块 define 的第一个参数
		//{Mixed} rule 匹配URL地址的规则
		register : function(routeName, rule){
			var match;
			if( routeName && $.type(routeName) === 'string'){
				//规则可以是字符串，或者正则表达式，或者函数
				if($.type(rule) === 'function'){
					match = rule;
				}else if($.type(rule) === 'string'){
					match = function(url){
						return url === rule;
					};
				}else if($.type(rule) === 'regexp'){
					match = function(url){
						return rule.test(url);
					};
				}else{
					return;
				}

				//最终规则都被转变为函数
				if(!this.matchList[routeName]){
					this.matchList[routeName] = match;
				}
			}
		},
		//更新当前页面的路由列表
		updateRoute : function(){
			var url = this.getFormatedUrl();
			var routeName = this.getrouteName(url);
			if(routeName){
				this.loadRoute(routeName);
			}
			$channel.fire('locationChange');
		},
		//根据url获取对应的路由列表名称
		getrouteName : function(url){
			url = this.getFormatedUrl(url);
			var routeName = '';
			if(url){
				//遍历地址匹配列表，取得匹配当前地址的路由名称
				$.each(this.matchList, function(name, match){
					if(match(url)){
						routeName = name;
						return false;
					}
				});
			}
			return routeName;
		},
		//加载路由列表文件
		loadRoute : function(routeName){
			if(!routeName){return;}
			var that = this;
			var route = this.routeList[routeName];
			if(!route){
				require([routeName], function(list){
					route = list;
					that.routeList[routeName] = route;
					$pageletM.updatePagelets(route);
				});
			}else{
				$pageletM.updatePagelets(route);
			}
		},
		destroy : function(){
			this.setDomEvents('remove');
			this.setCustEvents('remove');
			$pageletM.destroy();
		}
	};

	module.exports = Router;

});


