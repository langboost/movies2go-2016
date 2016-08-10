var express = require('express')
var router = express.Router()
var spawn = require('child_process').spawn

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

/* GET shutdown signal */
router.get('/shutdown', function(req, res, next) {
  spawn('sudo', ['poweroff'], { stdio: 'inherit'})
  res.render('shutdown', { title: 'Shutting down...' })
})

module.exports = router
