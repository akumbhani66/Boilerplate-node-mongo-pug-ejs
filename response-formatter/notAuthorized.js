var express = require('express');

module.exports = function(error) {
    express.response.notAuthorized = function(error) {
    	this.status(403).send({
            success: false,
            error: error
        });
    }
}