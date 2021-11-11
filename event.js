 
var evObj = document.createEvent('MouseEvents');
evObj.initMouseEvent( 'click', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null );
document.querySelectorAll('image[preserveAspectRatio="xMidYMid slice"]')[5].dispatchEvent(evObj);

//模拟鼠标悬停 弹出个人信息窗口
var evObj = document.createEvent('MouseEvents');
evObj.initMouseEvent('mouseover', true, false);
document.querySelectorAll('span[class="nc684nl6"]')[1].dispatchEvent(evObj);

//模拟点击事件，打开聊天对话窗口
setTimeout(()=>{
var evObjClick = document.createEvent('MouseEvents');
evObjClick.initMouseEvent('click', true, false);
document.querySelectorAll('div[class="k4urcfbm"] div[aria-label="发消息"]')[0].dispatchEvent(evObjClick);
},1000);

//聊天对话输入内容
setTimeout(()=>{
	//获取焦点
	setTimeout(()=>{document.querySelectorAll('div[contenteditable]')[0].focus()},3000)
	document.querySelectorAll('div[contenteditable]')[0].focus();
	var innerHtml='<span data-text="true">abc火花1</span>'
	document.querySelectorAll('div[contenteditable] span[data-offset-key]')[0].innerHTML=innerHtml

	var evObjChange = document.createEvent('MouseEvents');
	evObjChange.initMouseEvent('change', true, false);
	document.querySelectorAll('div[contenteditable] span[data-offset-key]')[0].dispatchEvent(evObjChange);
},2000);

document.querySelectorAll('div[data-contents] div[data-editor]')[0]
//发送聊天信息
setTimeout(()=>{
var sendMessage = document.createEvent('MouseEvents');
sendMessage.initMouseEvent('click', true, false);
document.querySelectorAll('div[aria-label="按 Enter 键发送"]')[0].dispatchEvent(sendMessage);
},15000)


document.querySelectorAll('div[data-contents] div[data-editor]')[0];


//js控制滚动条到底部
window.scrollTo(0, document.body.scrollHeight)


//关闭聊天窗口 
setTimeout(()=>{
	var sendMessage = document.createEvent('MouseEvents');
	sendMessage.initMouseEvent('click', true, false);
	document.querySelectorAll('div[aria-label="关闭聊天窗口"')[0].dispatchEvent(sendMessage);
	},1000)









//模拟鼠标按下，但是内容不会在输入框显示
setTimeout(()=>{
	var eventType='keydown';

    var element=document.querySelectorAll('div[contenteditable]')[0];
	var objInput =element;
    objInput.addEventListener(eventType, function (e) {
		console.info(e);
        //element.innerHtml += e.key;
		//var innerHtml='<span data-text="true">abc火花1</span>'
		//document.querySelectorAll('div[contenteditable] span[data-offset-key]')[0].innerHTML=innerHtml	
    }, false);

	element.focus();
	var KeyboardEventInit = {key:"v", code:"", location:0, repeat:false, isComposing:false,ctrlKey:true,metaKey:true};
	var evtObj = new KeyboardEvent(eventType, KeyboardEventInit);
	objInput.dispatchEvent(evtObj);
	//document.querySelectorAll('div[class="l9j0dhe7 i09qtzwb esma6hys j83agx80"]')[0].dispatchEvent(evtObj);

},4000)
setTimeout(()=>{
	var eventType='keydown';
    var element=document.querySelectorAll('div[contenteditable]')[0];
	var objInput =element;
    objInput.addEventListener(eventType, function (e) {
		console.info(e);
        //element.innerHtml += e.key;
		//var innerHtml='<span data-text="true">abc火花1</span>'
		//document.querySelectorAll('div[contenteditable] span[data-offset-key]')[0].innerHTML=innerHtml	
    }, false);
	element.focus();
	var KeyboardEventInit = {key:"v", code:"", location:0, repeat:false, isComposing:false,isTrusted:true};
	var evtObj = new KeyboardEvent(eventType, KeyboardEventInit);
	objInput.dispatchEvent(evtObj);
},4000)

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
	setTimeout(()=>{
		var sendMessage = document.createEvent('MouseEvents');
		sendMessage.initMouseEvent('click', true, false);
		document.querySelectorAll('div[aria-label="按 Enter 键发送"]')[0].dispatchEvent(sendMessage);
		},1000)
}
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
},4000);
