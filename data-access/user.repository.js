var User = require('../models/User');

/**
 * @param successCallback
 * @param failureCallback
 */
module.exports.getAll = function(successCallback,failureCallback){
    if (!successCallback) {
        throw new Error('The argument successCallback is missing.');
    }
    if (!failureCallback) {
        throw new Error('The argument failureCallback is missing.');
    }

    var query = User.find({});
    query.exec().then(function (result) {
        console.log('result',result);
        successCallback(result);
    }, failureCallback);
};