

var imgUrl = 'http://kingwuzhu.com/joke/images/love.jpg';

var lineLink = 'http://kingwuzhu.com/joke/index.html';

var descContent = "我已经通过测试找到了真爱,你也来试试啊";

var shareTitle = '寻找真爱';
var appid = 'wxa184e54497cbb16d';//填入你的appid

function shareFriend() {
WeixinJSBridge.invoke('sendAppMessage',{
"appid":'wxa184e54497cbb16d' ,
"img_url": imgUrl,
"img_width": "500",
"img_height": "375",
"link": lineLink,
"desc": descContent,
"title": shareTitle
}, function(res) {
_report('send_msg', res.err_msg);
})
}
function shareTimeline() {
WeixinJSBridge.invoke('shareTimeline',{
"img_url": imgUrl,
"img_width": "500",
"img_height": "375",
"link": lineLink,
"desc": descContent,
"title": shareTitle
}, function(res) {
_report('timeline', res.err_msg);
});
}
function shareWeibo() {
WeixinJSBridge.invoke('shareWeibo',{
"content": descContent,
"url": lineLink,
}, function(res) {
_report('weibo', res.err_msg);
});
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {

// 发送给好友
WeixinJSBridge.on('menu:share:appmessage', function(argv){
shareFriend();
});

// 分享到朋友圈
WeixinJSBridge.on('menu:share:timeline', function(argv){
shareTimeline();
});

// 分享到微博
WeixinJSBridge.on('menu:share:weibo', function(argv){
shareWeibo();
});
}, false);
