requirejs.config({
    baseUrl: "/src/js",
    paths: {
        // 'lib': 'core/chaos/jquery'
    }
});

requirejs(['conf/global', 'common/router', 'core/chaos/jquery'], function($global, $Router, $lib) {

	$Router.register('conf/routes/bloglist', (/^(\/page\/[\d]+\/|\/tag\/.*|($)|\/)(\?.*|\#.*|$)/) );

	$Router.register('conf/routes/blog', (/^(\/\d{4}\/\d{2}\/\d{2}\/[^\/]+\/|($)|\/)(\?.*|\#.*|$)/) );

	$Router.register('conf/routes/staticpage', (/^(\/(about|projects|links)\/|($)|\/)(\?.*|\#.*|$)/) );

	$Router.init({
		pageletM : {
			log : true
		}
	});

});

