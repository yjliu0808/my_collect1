function getSchedule(){
	if($("#person").val()==0){
		$.ajax({
			type: "post", 
			url: TTS_URL+"studentCenter/getScheduleString", 
			dataType: "json",
			data:{},
      		success: function (data) {
				getDateNum(data.mess);
        	}, 
       		error: function (XMLHttpRequest, textStatus, errorThrown) { 
       			console.debug("取出教历进度错误");
			}
		});
	}
}

function getDateNum(str){
	var num = 0;
	var strArray = str.split("_");
	var beginDateStr = strArray[0];
	var redressNum = strArray[1];
	var beginDate = new Date(beginDateStr);
	var days=Math.floor((new Date(strArray[2]).getTime()-beginDate.getTime())/(24*3600*1000))
	var beginWeekIndex = beginDate.getDay();
	var nowWeekIndex = new Date(strArray[2]).getDay();
	if(nowWeekIndex-beginWeekIndex == days){
		num = days;
	}else{
		num = 5-beginWeekIndex;
		days = days -7 + beginWeekIndex;
		num = num + Math.floor(days/7)*5;
		if(days % 7 <5){
			num = num + days % 7;
		}else{
			num = num + 5;
	    }
	}
	
	getClear(num+parseInt(redressNum));
}
function getClear(num){
	num = num +5-num%5;
	var liArray  = $(".listcon_xq ul li");
	for(var i=num;i<liArray.length;i++){
		var li=liArray[i];
		$(li).find("a").attr("style","cursor:default;color:#CCCCCC;");
		$(li).find("a").removeAttr("href");
		$(li).find("a").removeAttr("target");
		$(li).find("p").attr("style","cursor:default;color:#CCCCCC;");
	}
	
}