define('mods/bloglist', function(require, exports, module) {
/*
 @fileoverview 博文首页模块，用于处理博主首页的相关操作
 @authors Yongquan | Yongquan <xuyq1112@gmail.com>
 @date 2013-2-1
*/
	var $ = require('core/chaos/jquery');
	var $Base = require('more/base');
	var $channelCommon = require('common/channel');
	var $location = require('common/location');
	var $browser = require('kit/env/browser');
	var $trans = require('mods/trans/bloglist');
	var $getFormatedUrl = require('mods/util/getFormatedUrl');
	var $nprogress = require('vendor/bower/nprogress');

	//博主首页博文列表
	var BlogList = $Base.extend({
		parseDom: function() {
			this.nodes = {
				root: $('section.posts')
			};
		},
		build: function() {
			// this.set('currentUrl', $location.get().url);
		},
		setBound: function() {
			var that = this;
			this.bound = {
				getContent: function(evt) {
					that.getContent($(this), evt);
				},
				onAttach: function() {
					that.onAttach();
				},
				checkUpdate: function() {
					that.checkUpdate();
				},
				onDetach: function() {
					that.onDetach();
				}
			};
		},
		setDomEvents: function(action) {
			var bound = this.bound;
			var nodes = this.nodes;

			//由于对元素绑定了click事件，会导致IOS5无法激发文字选中的功能
			//所以在此做对事件的区分
			var eventtype = $browser.MOBILE ? 'touchend' : 'click';
			action = action === 'add' ? 'delegate' : 'undelegate';
			// nodes.root[action]('.older-posts', eventtype, bound.getContent);
			// nodes.root[action]('.newer-posts', eventtype, bound.getContent);
		},
		setListener: function(action) {
			var bound = this.bound;
			action = action === 'add' ? 'add' : 'remove';
			$channelCommon[action]('locationChange', bound.checkUpdate);
		},
		setCustEvents: function(action) {
			var bound = this.bound;
			action = action === 'add' ? 'on' : 'off';
			this[action]('attach', bound.onAttach);
			this[action]('detach', bound.onDetach);
		},
		//检查地址是否匹配博文页地址规则
		matchUrl: function(url) {
			url = $getFormatedUrl(url);
			return(	/^(\/page\/[\d]+\/|\/tag\/.*|($)|\/)(\?.*|\#.*|$)/).test(url);
		},
		//根据当前链接检查内容更新
		checkUpdate: function() {
			var that = this;
			var href = $location.get().url;
			var path = '/' + $location.get().path;
			var prevUrl = this.get('currentUrl');
			var firstLoad = that.nodes.root.attr('data-filled');
			that.nodes.root.removeAttr('data-filled');
			if (prevUrl !== href && this.matchUrl(path) && firstLoad !== 'true') {
				this.set('currentUrl', href);
				this.getContent(href);
			}
		},
		//直接获取博文列表首页
		getContent: function(url) {
			var that = this;

			window.scrollTo(0, 1);
			$nprogress.start();
			//博主首页加载更多博文接口
			$trans.request('blogArticleList', {
				url: url,
				type: "get",
				dataType: 'html',
				onSuccess: function(res) {
					res = $(res).find('section.posts').html();
					that.nodes.root.html(res);
				},
				onFailure: function() {
					$.log("网络错误");
				},
				onComplete: function () {
					$nprogress.done();
				}
			});
		},
		onAttach: function() {
			var nodes = this.nodes;

			this.checkUpdate();
			this.set('currentUrl', $location.get().url);
		},
		onDetach: function() {
			// this.nodes.root.html('');
			this.set('currentUrl', '');
		}
	});

	module.exports = BlogList;

});