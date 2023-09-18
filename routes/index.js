const express = require('express');

let router = express.Router();

let FORGE_MODEL_URN="dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGdlcDdpdWtkYjdpaGp3aWM5ZWk1am94bXhsYWE2c3gtYmFzaWMtYXBwL1ZpbGxhXzIwMjJfdXBkYXRlZC5ydnQ";

// router.get('/', function(req, res) {
//     res.render('index', { analytics: process.env.GOOGLE_ANALYTICS_TAG, urn: process.env.FORGE_MODEL_URN });
// });

router.get('/', function(req, res) {
    res.render('index', { analytics: process.env.GOOGLE_ANALYTICS_TAG, urn: FORGE_MODEL_URN });
});

module.exports = router;