 
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
document.querySelectorAll('div[aria-label="发消息"] div[class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t bp9cbjyn owycx6da btwxx1t3 kt9q3ron ak7q8e6j isp2s0ed ri5dt5u2 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 d1544ag0 tw6a2znq s1i5eluu tv7at329"]')[0].dispatchEvent(evObjClick);
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
//发送聊天信息
setTimeout(()=>{
var sendMessage = document.createEvent('MouseEvents');
sendMessage.initMouseEvent('click', true, false);
document.querySelectorAll('span[class="tojvnm2t a6sixzi8 abs2jz4q a8s20v7p t1p8iaqh k5wvi7nf q3lfd5jv pk4s997a bipmatt0 cebpdrjk qowsmv63 owwhemhu dp1hu0rb dhp61c6y iyyx5f41"]')[0].dispatchEvent(sendMessage);
},15000)

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
	var KeyboardEventInit = {key:"v", code:"", location:0, repeat:false, isComposing:false};
	var evtObj = new KeyboardEvent(eventType, KeyboardEventInit);
	objInput.dispatchEvent(evtObj);
},4000)