function getNotice(){
	$.ajax({
		type : "POST",
		url : basePath+"notice/getNotice",
		async : false,
		dataType : "json",
		success : function(result) {
			if(result.noticeTitle!=undefined && result.noticeContent!=undefined){
				$_eBox({
					title : { html : result.noticeTitle },
					content : { html : "<ul>"+result.noticeContent+"</ul>"},
//					content : { html : "<ul>"+result.noticeContent+"</ul><p style='padding-top: 5px'>请亲爱的学员及时设置密保问题，欢迎有问题及时反馈</p>"},
					effect : {
						type : "slide",
						speed : 1500
					},
					openOnce : true
				});
			}
		}
	});
}
window.onload=function() {
	//AJAX查学员指定阶段
	$.ajax({
		type: "post", 
		url: TTS_URL+"studentCenter/getStage", 
		dataType: "json",
		data:{},
  		success: function (data) {
  			setStage(data.stage);
//			console.log(data.stage+"\t"+data.result);
    	}, 
   		error: function (XMLHttpRequest, textStatus, errorThrown) { 
   			console.debug("取出教历进度错误");
		}
	});
//	//$(".ttscourseside").children("h3").before("<span id='overdueDate' style='color:lightblue;'><b></b></span>");
//	//AJAX查学员课程过期时间
//	$.ajax({
//		type: "post", 
//		url: TTS_URL+"studentCenter/getOverdueDate", 
//		dataType: "json",
//		data:{},
//  		success: function (data) {
//  			$("#overdueDate").children("b").html(data.overdueDate);
//			console.log(data.overdueDate+"\t"+data.result);
//    	}, 
//   		error: function (XMLHttpRequest, textStatus, errorThrown) { 
//   			console.debug("取出时间错误");
//		}
//	});
	//我的TTS左侧列表 碰到底部footer的div时，侧栏变短(避免遮挡底部) 详见index.css的335、336行样式
	var ft = $('.footerbox').offset().top;
	$(window).scroll(function(e){
		s = $(document).scrollTop();
		//console.log(t+"\t"+(s+614)+"\t"+(ft+140));
		if((s+614)>(ft+140+20)){
			$('.ttscourseside').removeClass('myslide');
			$('.ttscourseside').addClass('myslide_2');
		}else{
			$('.ttscourseside').removeClass('myslide_2');
		}
	});
};
function setStage(str){
	var n=0;
	if(str==null||str==''){return;}
	if(str.indexOf(",")!=-1){
		for(var j=0;j<$(".theopen").length;j++){
			for(var i=0;i<str.split(",").length;i++){
				var st=$(".theopen:eq("+j+") > .t").html();
				if(st.indexOf("&amp;")!=-1){
					st=st.replace("&amp;","&");
				}
				if(st==str.split(",")[i]){
//					console.log($(".theopen:eq("+j+") > .t").html());
					++n;break;
				}
			}
			if(n>0){--n;continue;}
			$(".theopen:eq("+j+")").next("div").children("div").children("ul").children("li").children("p")
				.attr("style","color:#B3B3B3;")
				.find("a").removeAttr("target href")
				.attr("style","cursor:default;color:#B3B3B3;");
			var alist=$(".theopen:eq("+j+")").next("div").children("div").children("ul").children("li").children("div").find("a");
			$(alist).removeAttr("target href");
			for(var k=0;k<$(alist).length;k++){
				if($(alist).eq(k).attr("style")==null){
					$(alist).eq(k).attr("style","cursor:default;color:#B3B3B3;");
				}
			}
		}
	}else{
		for(var j=0;j<$(".theopen").length;j++){
			var st=$(".theopen:eq("+j+") > .t").html();
			if(st.indexOf("&amp;")!=-1){
				st=st.replace("&amp;","&");
			}
			if(st==str){
//				console.log($(".theopen:eq("+j+") > .t").html());
				++n;continue;
			}
			$(".theopen:eq("+j+")").next("div").children("div").children("ul").children("li").children("p")
				.attr("style","color:#B3B3B3;")
				.find("a").removeAttr("target href")
				.attr("style","cursor:default;color:#B3B3B3;");
			var alist=$(".theopen:eq("+j+")").next("div").children("div").children("ul").children("li").children("div").find("a");
			$(alist).removeAttr("target href");
			for(var k=0;k<$(alist).length;k++){
				if($(alist).eq(k).attr("style")==null){
					$(alist).eq(k).attr("style","cursor:default;color:#B3B3B3;");
				}
			}
		}
	}
}