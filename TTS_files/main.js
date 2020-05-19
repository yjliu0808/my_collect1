var E_URL = "http://www.tmooc.cn" ;
//var E_URL = "http://localhost:8080/elearning" ;
var Y_URL = "http://inote.tmooc.cn" ;

//跳转考试的URL
var QS_URL="http://qsserver.tmooc.cn/qsserver";
var QS_EXAM_url="http://qsserver.tmooc.cn/qsserver/rest/attendExam";
var QS_MYEXAM_url="http://qsserver.tmooc.cn/qsserver/web/exam.html";

//var TTS_URL="http://localhost:8080/tts8/";
var TTS_URL="http://tts8.tmooc.cn/";

//CC视频参数 CC_PLAYERID（播放器样式） CC_UID（用户ID）
var CC_UID = "0DD1F081022C163E";
var CC_PLAYERID = "C550161F45FAA381";

function locationToHref( href ){
	location.href= E_URL+ href ;
}
/**
* 跳转到登录页面
* tohref：登录成功后，跳转的页面
*/
function main_toLoginThenToBeforePage( tohref ){
	$.cookie("sessionid",null);
	$.cookie("beforePage",tohref ) ;
	location.href = E_URL +"/web/login.html" ;
}
function main_loginToIndex(){
	if( $.cookie("beforePage") !=null && $.cookie("beforePage").length>0 ){
		var login_to_page = $.cookie("beforePage");
		$.cookie("beforePage",null);
		location.href = login_to_page ;
	} else {
		location.href = E_URL +"/web/index.html" ;
	}
}
function main_getLoginUserFromCookie(){
	var sessionid = $.cookie("sessionid");
	if( sessionid == null || sessionid.length<1 ) return null ;
	var sessionUser = new Object() ;
	var str = new Array();
	str = sessionid.split("|");
	//session.getId()+"|"+user.getName()+"|"+user.getIs_tts()+"|"+user.getOutDays()
	sessionUser.sessionid = str[0] ;
	sessionUser.name = str[1];
	sessionUser.istts= str[2];
	sessionUser.outdays = str[3] ;
	return sessionUser ;
}
/*
 *提示操作成功
 *
 */
function show_success(dom,s){
	dom.html(s);
	dom.fadeIn(1000);
	setTimeout(function(){dom.fadeOut(1000);},1000);
}