$(function(){
	 var play=document.getElementById("play");
	 var playa=document.getElementById("playa");
	$(".contentvideo ul li a").each(function(i,domEle){
		$(domEle).click(function(){//点击事件发生
			playa.pause();//音频播放器暂停
			play.src=$(this).attr('alt');//获取相应的视频链接字符串
			$(this).parent().siblings().find("a").find("span").removeClass("click");
			//所有span移除点击效果
			$(this).find("span").addClass("click");
			//当前span添加点击效果
			play.load();
			//加载要播放的内容
			if(play.paused){
				play.play();
			}	
			else
			{
				play.pause();
			}
			//播放
		})
	})
	$(".contentvideo ul li a").hover(function(){//根据鼠标经过与否 添加相应显示效果
			$(this).find("span").addClass("hover");
		},function(){
			$(this).find("span").removeClass("hover");
		});

	//随页面大小调整字体和盒子尺寸
	var width=$(".tv").width();
	$(".tv").height(width*1080/1920);
	var widthul=$(".contentvideo ul").width();
	$(".contentvideo ul").height(widthul*2.1);
	$(".contentvideo ul li span").css("font-size",widthul/20);
	$(window).resize(function(){
		var width=$(".tv").width();
		$(".tv").height(width*1080/1920);
		var widthul=$(".contentvideo ul").width();
		$(".contentvideo ul").height(widthul*2.1);
		$(".contentvideo ul li span").css("font-size",widthul/20);
	})
})