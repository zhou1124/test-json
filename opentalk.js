
// 封装一个get请求的方法
function getJSON(url) {
    return new Promise(function(resolve, reject) {
        var XHR = new XMLHttpRequest();
        XHR.open('GET', url, true);
        XHR.send();
 
        XHR.onreadystatechange = function() {
            if (XHR.readyState == 4) {
                if (XHR.status == 200) {
                    try {
                        var response = JSON.parse(XHR.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error(XHR.statusText));
                }
            }
        }
    })
}
function send(){
	console.info("发送消息")
	// setTimeout(()=>{
	// 	var sendMessage = document.createEvent('MouseEvents');
	// 	sendMessage.initMouseEvent('click', true, false);
	// 	document.querySelectorAll('div[aria-label="按 Enter 键发送"]')[0].dispatchEvent(sendMessage);
	// 	},1000)
}


var personImg=document.querySelectorAll('div[class="obtkqiv7"] span[class="nc684nl6"]');
var i=26;
setInterval(()=>{
    i++;
    console.info("第"+i+"个");
    if(i==personImg.length){
        //js控制滚动条到底部
        window.scrollTo(0, document.body.scrollHeight);
        i=i-1;
        personImg=document.querySelectorAll('div[class="obtkqiv7"] span[class="nc684nl6"]');
        }
    console.info("模拟鼠标悬停 弹出个人信息窗口");
//模拟鼠标悬停 弹出个人信息窗口
var evObj = document.createEvent('MouseEvents');
evObj.initMouseEvent('mouseover', true, false);
personImg[i].dispatchEvent(evObj);
console.info("模拟点击事件，打开聊天对话窗口");

//模拟点击事件，打开聊天对话窗口
setTimeout(()=>{
    var evObjClick = document.createEvent('MouseEvents');
    evObjClick.initMouseEvent('click', true, false);
    document.querySelectorAll('div[class="k4urcfbm"] div[aria-label="发消息"]')[0].dispatchEvent(evObjClick);
    //模拟鼠标悬停 弹出个人信息窗口
    var evObj = document.createEvent('MouseEvents');
    //关闭个人信息页面
    evObj.initMouseEvent('mouseout', true, false);
    personImg[i].dispatchEvent(evObj);
    console.info("模拟点击事件，打开聊天对话窗口");
},3000);
    //聊天对话输入内容
console.info("模拟聊天对话输入内容");
setTimeout(()=>{
	//获取焦点
    if(document.querySelectorAll('div[contenteditable]')[0]){
        document.querySelectorAll('div[contenteditable]')[0].focus();
        var innerHtml='<span data-text="true">abc火花1</span>'
        document.querySelectorAll('div[contenteditable] span[data-offset-key]')[0].innerHTML=innerHtml
    }
    },5000);
console.info("关闭聊天窗口");

setTimeout(()=>{
	var eventType='keydown';
    var element=document.querySelectorAll('div[contenteditable]')[0];
	var objInput =element;
	element.focus();
	setTimeout()
	getJSON("https://www.facebook.com/keydown").then(res=>{
//发送聊天信息
		send();
	},()=>{
send();
	})
},8000);

//关闭聊天窗口 
setTimeout(()=>{
	var sendMessage = document.createEvent('MouseEvents');
	sendMessage.initMouseEvent('click', true, false);
	document.querySelectorAll('div[aria-label="关闭聊天窗口"')[0].dispatchEvent(sendMessage);
	},9000)

},10000)






