var express = require('express');
var session = require('express-session')

var app = express();
var returnMsg = '';

app.use(session({
    resave: true,
    secret:"shhhh!",
    saveUninitialized:true,
}));



app.get('/details', (req, res) => {
    // res.cookie('name','test', 'temp')
    if(req.session.pageView){
        returnMsg = ` Gotcha..! \n You've viwed this page ${++req.session.pageView} times`
    }else{
        req.session.pageView=1;
        returnMsg = ` Hello..! Welcome to the page`
    }

    res.send( {
        "name": "Ganesh",
        "age": "23"
    })
})

app.listen(3000, () =>{
    console.log(`server is running on http://localhost:3000`);
})
