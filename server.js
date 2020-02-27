/*创建简单的UDP服务器*/
var dgrm = require('dgram');
var server;

var http=require('http');




function init()
{
		
	
server = dgrm.createSocket('udp4');//udp4为指定UDP通信的协议类型


server.on('message',function (msg, rinfo) {
    console.log('已收到客户端发送的数据：'+msg);
	
	
	//get 请求外网
	
	/*
	http.get('http://127.0.0.1:9001?name='+msg,function(req,res){
		var html='';
		req.on('data',function(data){
			html+=data;
		});
		req.on('end',function(){
			console.info(html);
		});
	});
	*/
	
	
	
    console.log('客户端地址信息为&j',rinfo);
    var buf = new Buffer('确认信息：'+msg);
    //server.sent(Buffer,offset,length,port,address,[callback])
    server.send(buf,0,buf.length,rinfo.port,rinfo.address);
});
//当socket对象开始监听指定的端口和地址时，触发socket端口的listening事件
/*server.on('listening',function () {
    var address = server.address();
    console.log('服务器开始监听。地址信息为&j',address);
});*/
server.bind(8000,'localhost',function () {
    //bind方法中也可以不写回调函数，单独监听listening事件
    var address = server.address();
    console.log('服务器开始监听。地址信息为&j',address);
});

}

init();


process.on('uncaughtException', function (err) {
    console.error('网络异常!');

    init();

});