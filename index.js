// create server 

//for creating server we first need to require http module

const http=require('http');

//for create server we use create Server method of http

const server=http.createServer((req,res)=>
{
    res.end("Hello world! first proj in node js")

})

server.listen(8000,"localhost",()=>
{
    console.log("Server is running in port 8000")
})

