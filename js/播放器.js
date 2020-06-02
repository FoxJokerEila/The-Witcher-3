$(function(){
	 var play=document.getElementById("playa");
	 var playv=document.getElementById("play");
	$(".contentaudio ul li a").each(function(i,domEle){
		$(domEle).click(function(){
		playv.pause();
		play.src=$(this).attr('alt');
		$(".contentaudio ul li a").css("color","#171812");
		$(this).css("color","#b50d18");
		play.load();
		if(play.paused){
			play.play();
		}	
		else
		{
			play.pause();
		}
		})
	})
	//随页面大小调整字体和盒子尺寸
	var width=$(".contentaudio .ulback1").width();
	$(".contentaudio ul li a").css("font-size",width/17);
	$(".contentaudio ul,.contentaudio .ulback1,.contentaudio .ulback2").height(width*1.4);
	$(window).resize(function(){
		var width=$(".contentaudio .ulback1").width();
		$(".contentaudio ul,.contentaudio .ulback1,.contentaudio .ulback2").height(width*1.4);
		$(".contentaudio ul li a").css("font-size",width/17);
	})
})