var http = require("http");
var url = require("url");


function start(route,handle) {
    function onRequest(request, response) {
        var postData="";
        var pathname = url.parse(request.url).pathname;  //post取值方法
        var getvalue = url.parse(request.url).query;     //get取值方法
        console.log("Request for"+ pathname +" received !");
        request.setEncoding("utf-8");
        request.addListener("data",function(postDataChunk){
            postData += postDataChunk;
            console.log("Received POST data chunk'"+ 
            postDataChunk + "'.");
        })
        request.addListener("end",function(){
           route(handle,pathname,response,postData);     //post方法
           //route(handle,pathname,response,getvalue);   //get方法 
        })
              
    }
    http.createServer(onRequest).listen(3000);
    console.log("Sever has started !")
}

exports.start = start;
