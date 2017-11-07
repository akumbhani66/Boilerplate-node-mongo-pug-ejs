var success = require('./success');
var error = require('./error');
var notFound = require('./notFound');
var notAuthorized = require('./notAuthorized');

module.exports.init = function () {
    success();
    error();
    notFound();
    notAuthorized();
};