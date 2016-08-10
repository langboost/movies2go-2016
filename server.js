//Dependencies
var path = require('path')
var express    = require('express')
var serveIndex = require('serve-index')
var serveStatic = require('serve-static')

//Constants
var uploadsPath = '/path/to/shared/files/repo'
var assetsPath = '/path/to/movies2go-2016/assets'

//MVC stuff
var routes = require('./routes/index')
var app = express()


//Setup app behavior
//-------------------------

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use('/', routes)

//Send index.html responses for folders
app.use('/uploads', serveIndex(uploadsPath, {'icons': true}))

//Send static files when requested
app.use('/uploads', serveStatic(uploadsPath))

//Server static img, js, and css
app.use('/assets', serveStatic(assetsPath))

//Error handlers
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler (w/ stack)
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler (no stack)
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

//Main code
//------------------------
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Files app listening at http://%s:%s', host, port)

})
