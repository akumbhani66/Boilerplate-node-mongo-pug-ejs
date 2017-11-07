var express = require('express');

module.exports = function(error) {
    express.response.notFound = function(error) {
    	this.status(404).send({
            success: false,
            error: 'Not found.'
        });
    }
}