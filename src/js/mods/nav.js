define('mods/nav', function(require, exports, module) {

	var $ = require('core/chaos/jquery');
	var $Base = require('more/base');

	//博客文章模块
	var Blog = $Base.extend({
		parseDom: function() {
			this.nodes = {
				navBtn: $('.nav-toggler'),
				bodyNavMenu: $('body, .nav-menu'),
				$body: $('body'),
				navMenu: $('.nav-menu'),
				container: $('#container')
			};
		},
		build: function() {
			var objs = this.objs;
		},
		setBound: function() {
			var that = this;
			this.bound = {
				showNav: function(e) {
					e.stopPropagation();
					that.showNav();
				},
				closeNavi: function () {
					that.closeNavi();
				}
			};
		},
		showNav: function() {
			this.nodes.bodyNavMenu.addClass('nav-transition');
			this.nodes.$body.toggleClass('body-nav-open');
			this.nodes.navMenu.toggleClass('nav-open');
		},
		// 点击空白处关闭侧边栏
		closeNavi: function () {
			var that = this;
			if (that.nodes.$body.hasClass('body-nav-open')) {
				that.nodes.bodyNavMenu.addClass('nav-transition');
				that.nodes.$body.toggleClass('body-nav-open');
				that.nodes.navMenu.toggleClass('nav-open');
			}
		},
		setListener: function(action) {
			var bound = this.bound;
			action = action === 'add' ? 'add' : 'remove';
		},
		setCustEvents: function(action) {
			var bound = this.bound;
			action = action === 'add' ? 'on' : 'off';
		},
		setDomEvents: function(action) {
			action = action === 'add' ? 'on' : 'off';
			this.nodes.navBtn[action]('click', this.bound.showNav);
			this.nodes.container[action]('click', this.bound.closeNavi);
			this.nodes.navMenu[action]('click', 'a', this.bound.closeNavi);
		}
	});

	module.exports = Blog;

});