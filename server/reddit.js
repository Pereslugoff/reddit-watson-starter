const dotenv = require('dotenv').config();
const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json({
    message: 'I love Reddit!'
  })
});

module.exports = router;