var personImg=document.querySelectorAll('div[data-visualcompletion="ignore-dynamic"] span[class="nc684nl6"]');
var i=1;
setInterval(()=>{
    i++;
    console.info("第"+i+"个");
    if(i==personImg.length){
        //js控制滚动条到底部
        window.scrollTo(0, document.body.scrollHeight);
        i=i-1;
        personImg=document.querySelectorAll('div[data-visualcompletion="ignore-dynamic"] span[class="nc684nl6"]');

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
    
        var evObjChange = document.createEvent('MouseEvents');
        evObjChange.initMouseEvent('change', true, false);
        document.querySelectorAll('div[contenteditable] span[data-offset-key]')[0].dispatchEvent(evObjChange);
    }
    },5000);
console.info("关闭聊天窗口");
//关闭聊天窗口 
setTimeout(()=>{
	var sendMessage = document.createEvent('MouseEvents');
	sendMessage.initMouseEvent('click', true, false);
	document.querySelectorAll('div[aria-label="关闭聊天窗口"')[0].dispatchEvent(sendMessage);
	},8000)

},10000)







document.querySelectorAll('div[data-contents] div[data-editor]')[0]
//发送聊天信息
setTimeout(()=>{
var sendMessage = document.createEvent('MouseEvents');
sendMessage.initMouseEvent('click', true, false);
document.querySelectorAll('div[aria-label="按 Enter 键发送"]')[0].dispatchEvent(sendMessage);
},15000)


document.querySelectorAll('div[data-contents] div[data-editor]')[0];
//发送聊天信息
setTimeout(()=>{
var sendMessage = document.createEvent('MouseEvents');
sendMessage.initMouseEvent('click', true, false);
document.querySelectorAll('span[class="tojvnm2t a6sixzi8 abs2jz4q a8s20v7p t1p8iaqh k5wvi7nf q3lfd5jv pk4s997a bipmatt0 cebpdrjk qowsmv63 owwhemhu dp1hu0rb dhp61c6y iyyx5f41"]')[0].dispatchEvent(sendMessage);
},15000)




