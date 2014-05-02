define('kit/dom/hiddenContainer',function(require,exports,module){

	var $ = require('core/chaos/jquery');

/**
 * 页面统一隐藏容器工具
 * @example
	var $hiddenContainer = require('kit/dom/hiddenContainer');
	$hiddenContainer.append('<div></div>');
 */
	var hiddenNode;

	var getHiddenNode = function(){
		if(!hiddenNode){
			hiddenNode = $('<div></div>').css({
				position : 'absolute',
				top : '-9999px',
				left : '-9999px'
			}).appendTo($('head'));
		}
		return hiddenNode;
	};

	module.exports = {
		append : function(node){
			getHiddenNode().append($(node));
		},
		clear : function(){
			getHiddenNode().html('');
		},
		get : function(){
			return getHiddenNode();
		}
	};

});
