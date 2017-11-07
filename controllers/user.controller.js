var Repo = require('../data-access/user.repository');

module.exports.index = function (req, res) {

    Repo.getAll(function(data){
        res.success(data);
    },function(err){
        res.error(err);
    });
};