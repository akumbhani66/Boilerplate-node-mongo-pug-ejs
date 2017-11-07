var mongoose = require('mongoose');
var config = require('../config');
mongoose.Promise = global.Promise;

module.exports = {
    connect : function(cb){
        var mongoConfig = config.connections.mongoDb;
        var connectionString = 'mongodb://';
        if(mongoConfig.user && mongoConfig.password){
            connectionString +=mongoConfig.user;
            connectionString +=':';
            connectionString +=mongoConfig.password;
            connectionString +='@';
        }
        if(!mongoConfig.host){
            throw new Error('The field host is required.',mongoConfig);
        }
        connectionString +=mongoConfig.host;
        if(mongoConfig.port){
            connectionString +=':';
            connectionString +=mongoConfig.port;
        }
        connectionString +='/';
        connectionString +=mongoConfig.database;


        var db = mongoose.connection;
        db.on('connecting', function() {
            console.log('connecting to MongoDB...');
        });

        db.on('error', function(error) {
            console.error('Error in MongoDb connection: ' + error);
            mongoose.disconnect();
        });
        db.on('connected', function() {
            console.log(connectionString+' => connected');
        });
        db.once('open', function() {
            console.log('MongoDB connection opened!');
        });
        db.on('reconnected', function () {
            console.log('MongoDB reconnected!');
        });
        db.on('disconnected', function() {
            console.log('MongoDB disconnected!');
            mongoose.connect(connectionString, {server:{auto_reconnect:true}});
            if(cb) cb();
        });
        mongoose.connect(connectionString);
    }
};