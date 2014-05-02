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
				navMenu: $('.nav-menu')
			};
		},
		build: function() {
			var objs = this.objs;
		},
		setBound: function() {
			var that = this;
			this.bound = {
				showNav: function() {
					that.showNav();
				}
			};
		},
		showNav: function() {
			this.nodes.bodyNavMenu.addClass('nav-transition');
			this.nodes.$body.toggleClass('body-nav-open');
			this.nodes.navMenu.toggleClass('nav-open');
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
		}
	});

	module.exports = Blog;

});