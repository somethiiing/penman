define('mods/staticpage',function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var $Base = require('more/base');
	var $channelCommon = require('common/channel');
	var $location = require('common/location');
	// var $contentM = require('mods/contentM');
	// var $channelstaticpage = require('mods/channel/staticpage');
	var $getFormatedUrl = require('mods/util/getFormatedUrl');
	var $trans = require('mods/trans/staticpage');
	var $hljs = require('vendor/highlight.pack');
	var $nprogress = require('vendor/bower/nprogress');

	//博客文章模块
	var StaticPage = $Base.extend({
		parseDom : function(){
			this.nodes = {
				root : $('section.posts')
			};
		},
		build : function(){
			var objs = this.objs;
			this.set('currentUrl', $location.get().url);

			var content = $('section.posts');
		},
		setBound : function(){
			var that = this;
			this.bound = {
				onAttach : function(){
					that.onAttach();
				},
				checkUpdate : function(){
					that.checkUpdate();
				},
				onDetach : function(){
					that.onDetach();
				}
			};
		},
		setListener : function(action){
			var bound = this.bound;
			action = action === 'add' ? 'add' : 'remove';
			$channelCommon[action]('locationChange', bound.checkUpdate);
		},
		setCustEvents : function(action){
			var bound = this.bound;
			action = action === 'add' ? 'on' : 'off';
			this[action]('attach', bound.onAttach);
			this[action]('detach', bound.onDetach);
		},
		//检查地址是否匹配博文页地址规则
		matchUrl : function(url){
			url = $getFormatedUrl(url);
			return (/^(\/(about|projects|links)\/|($)|\/)(\?.*|\#.*|$)/).test(url);
		},
		//根据当前链接检查内容更新
		checkUpdate : function(){
			var href = $location.get().url;
			var prevUrl = this.get('currentUrl');
			if(prevUrl !== href && this.matchUrl(href)){
				this.set('currentUrl', href);
				this.getContent(href);
			}
		},
		//获取博文内容
		getContent : function(url){
			var that = this;
			window.scrollTo(0,1);
			$nprogress.start();

			$trans.request('staticPageArticlecontent', {
				url: url,
				type: "get",
				dataType: 'html',
				onSuccess: function(res) {
					res = $(res).find('section.posts').html();
					that.nodes.root.html(res);
					$('pre code').each(function(i, e) {
						$hljs.highlightBlock(e);
					});
					$nprogress.done();
				},
				onFailure: function() {
					console.log("网络错误");
				}
			});
		},
		onAttach : function(){
			this.checkUpdate();

			this.set('currentUrl', $location.get().url);
			this.getContent( this.get('currentUrl') );
		},
		onDetach : function(){
			// this.nodes.root.html('');
		}
	});

	module.exports = StaticPage;

});


