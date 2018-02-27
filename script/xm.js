function openBook(type,book_id,file_name){
	api.openWin({
	    name: 'xm_openbook_win',
	    url: 'xm_openbook_win.html',
	    pageParam: {
	    	type:type,
	        book_id: book_id,
	        file_name:file_name
	    }
	});	
}

//缓存图片
function imageCache(){
    var srcs = $api.domAll("img.xm-img-cache");
    if (srcs.length > 0) {
        for(var i=0;i<srcs.length;i++){
            (function(imgObj){
                var imgUrl = $api.attr(imgObj, 'srcs');
                api.imageCache({
                    url: imgUrl
                },function(ret,err){
                    if (ret) {
                        $api.attr(imgObj, 'src', ret.url);
                    }
                });
            })(srcs[i]);
        }
    }
}


//转换时间差
function getDateDiff(dateTimeStamp){
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    var result="异常";
    if(diffValue < 0){return result;}
    var yearC=diffValue/(365*day);
    var monthC =diffValue/month;
    var halfamonthC=diffValue/halfamonth;
    var weekC =diffValue/(7*day);
    var dayC =diffValue/day;
    var hourC =diffValue/hour;
    var minC =diffValue/minute;
    if (yearC>=1) {
        result="" + parseInt(yearC) + "年前";
    }else if(monthC>=1){
        result="" + parseInt(monthC) + "个月前";
    }else if (halfamonthC>=1) {
        result="半个月前";
    }else if(weekC>=1){
        result="" + parseInt(weekC) + "周前";
    }
    else if(dayC>=1){
        result=""+ parseInt(dayC) +"天前";
    }
    else if(hourC>=1){
        result=""+ parseInt(hourC) +"小时前";
    }
    else if(minC>=1){
        result=""+ parseInt(minC) +"分钟前";
    }else
        result="刚刚";
    return result;
}
