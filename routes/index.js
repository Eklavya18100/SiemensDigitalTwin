const express = require('express');

let router = express.Router();

// let FORGE_MODEL_URN="dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGdlcDdpdWtkYjdpaGp3aWM5ZWk1am94bXhsYWE2c3gtYmFzaWMtYXBwL1ZpbGxhXzIwMjJfdXBkYXRlZC5ydnQ";

let FORGE_MODEL_URN="dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGdlcDdpdWtkYjdpaGp3aWM5ZWk1am94bXhsYWE2c3gtYmFzaWMtYXBwL0VsZWN0cmljYWxfU3dpdGNoZ2Vhcl9TaWVtZW5zX0FJUy1TSU1PUFJJTUUtV29ybGRfU2luZ2xlLUJ1c2Jhci1EZW1vLnJ2dA";

// router.get('/', function(req, res) {
//     res.render('index', { analytics: process.env.GOOGLE_ANALYTICS_TAG, urn: process.env.FORGE_MODEL_URN });
// });

router.get('/', function(req, res) {
    res.render('index', { analytics: process.env.GOOGLE_ANALYTICS_TAG, urn: FORGE_MODEL_URN });
});

module.exports = router;