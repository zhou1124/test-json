
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
//关闭聊天框
function closeMessage(){
	var sendMessage = document.createEvent('MouseEvents');
	sendMessage.initMouseEvent('click', true, false);
	document.querySelectorAll('div[aria-label="关闭聊天窗口"')[0].dispatchEvent(sendMessage);

    setTimeout(()=>{
        var twoCloseDom=document.querySelectorAll('div[aria-label="你的消息未发送。"] div[aria-label="确定"]');
        var twoClick = document.createEvent('MouseEvents');
        twoClick.initMouseEvent('click', true, false);
        if(twoCloseDom&& twoCloseDom.length>=1){
            twoCloseDom[0].dispatchEvent(twoClick);
        }
    },100)
}
//发送消息
function send(){
	console.info("发送消息")
	// setTimeout(()=>{
	// 	var sendMessage = document.createEvent('MouseEvents');
	// 	sendMessage.initMouseEvent('click', true, false);
	// 	document.querySelectorAll('div[aria-label="按 Enter 键发送"]')[0].dispatchEvent(sendMessage);
	// 	},1000)
};
//写聊天消息
function write(){
    var eventType='keydown';
    var element=document.querySelectorAll('div[contenteditable]')[0];
	var objInput =element;
	element.focus();
     //发送聊天信息
	getJSON("https://www.facebook.com/keydown").then(res=>{send();
	},()=>{send();})
};

//开始
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

console.info("聊天框获取焦点");
setTimeout(()=>{
    if(document.querySelectorAll('div[contenteditable]')[0]){
        document.querySelectorAll('div[contenteditable]')[0].focus();
    }
    },5000);

console.info("发送消息");
setTimeout(()=>{
	write();
},6000);
console.info("关闭聊天窗口");
setTimeout(()=>{ closeMessage();},9000)
},10000);









