define('mods/util/getFormatedUrl', function(require, exports, module) {
    var $parseURL = require('kit/str/parseURL');
    module.exports = function(url) {
        var loc = $parseURL(url);
        var port = loc.port && loc.port !== '80' ? ':' + loc.port : '';
        return loc.url.replace(loc.scheme + '://' + loc.host + port, '');
    };
});