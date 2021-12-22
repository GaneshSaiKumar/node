// @ts-check
// import connect from "connect";
var connect = require('connect');
var serveStatic  = require('serve-static')
var util = require('util')
var process = require('process')
// import serveStatic from 'serve-static';

console.log(process.argv[2]);

var interceptorFn = (req, res, next) => {
    console.log(util.format( req.url), next())
    console.log("---------end-----------");
    next()
}

var server = connect()
    .use(interceptorFn)
    .use(serveStatic(__dirname+'/public'))
    .use( (req, res, next) => {
        // res.end(`Hello ${process.argv[2]}` )
    });

server.listen(3000,'localhost', () => {
    console.log("server runnig on http://localhost:3000");
})