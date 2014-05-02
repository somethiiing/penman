define('mods/blog',function(require,exports,module){

	var $ = require('core/chaos/jquery');
	var $Base = require('more/base');
	var $channelCommon = require('common/channel');
	var $location = require('common/location');
	// var $contentM = require('mods/contentM');
	var $channelBlog = require('mods/channel/blog');
	var $getFormatedUrl = require('mods/util/getFormatedUrl');
	var $trans = require('mods/trans/blog');
	var $hljs = require('vendor/highlight.pack');
	var $nprogress = require('vendor/bower/nprogress');

	//博客文章模块
	var Blog = $Base.extend({
		parseDom : function(){
			this.nodes = {
				root : $('section.posts')
			};
		},
		build : function(){
			// this.set('currentUrl', $location.get().url);
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
			// 下面的正则 也会匹配'/'
			if (url === '/' || url === '') {
				return false;
			}
			return (/^(\/\d{4}\/\d{2}\/\d{2}\/[^\/]+\/|($)|\/)(\?.*|\#.*|$)/).test(url);
		},
		//根据当前链接检查内容更新
		checkUpdate : function(){
			var that = this;
			var href = $location.get().url;
			var prevUrl = this.get('currentUrl');
			var firstLoad = that.nodes.root.attr('data-filled');
			that.nodes.root.removeAttr('data-filled');
			if(prevUrl !== href && this.matchUrl(href) && firstLoad !== 'true'){
				this.set('currentUrl', href);
				this.getContent(href);
			}
		},
		//获取博文内容
		getContent : function(url){
			var that = this;
			window.scrollTo(0,1);
			$nprogress.start();

			$trans.request('blogArticlecontent', {
				url: url,
				type: "get",
				dataType: 'html',
				onSuccess: function(res) {
					res = $(res).find('section.posts').html();
					that.nodes.root.html(res);
					$('pre code').each(function(i, e) {
						$hljs.highlightBlock(e);
					});
				},
				onFailure: function() {
					$.log("网络错误");
				},
				onComplete: function () {
					$nprogress.done();
				}
			});
		},
		onAttach : function(){
			this.checkUpdate();

			// this.set('currentUrl', $location.get().url);
		},
		onDetach : function(){
			// this.nodes.root.html('');
			this.set('currentUrl', '');
		}
	});

	module.exports = Blog;

});


