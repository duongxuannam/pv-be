var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({
    name: 'Xuan Nam',
    id: '1',
    title: 'Developer'
  })
});

module.exports = router;
