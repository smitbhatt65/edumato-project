const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();
const http=require('http');
//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//React build output folder
app.use(express.static(path.join(__dirname,'build')));
//Send all other requests to the react app
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'));

})

const port=process.env.PORT || '3046';
app.set('port',port);
const server=http.createServer(app);
server.listen(port,()=>console.log(`running on localhost:${port}`));