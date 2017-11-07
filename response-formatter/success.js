var express = require('express');

module.exports = function() {
    express.response.success = function(data,message) {
        this.status(200).send({
            success: true,
            message : message,
            data: data
        });
    }
}