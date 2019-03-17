const watson = require('watson-developer-cloud/personality-insights/v3');
const dotenv = require('dotenv').config();
const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json({
    message: 'I love Watson!'
  })
});

module.exports = router;