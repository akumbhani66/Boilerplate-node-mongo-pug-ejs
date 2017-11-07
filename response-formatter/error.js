var express = require('express');

module.exports = function() {
    express.response.error = function(error) {
        this.status(200).send({
            success: false,
            error: error
        });
    }
}