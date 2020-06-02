$(function(){
	var n=1;
	var ulleft=$(".list").position().left;//我写这个干嘛
	var timer=null;
	var kingwidth=$(".list li").width();//获取li的宽度
	// console.log(kingwidth);
	function move(){
		if(n==8)
		{
			n=1;
			$(".list").stop().animate({
			left:-n*kingwidth
		},0);//无缝衔接,直接跳到第1张
		}
		n++;
		$(".list").stop().animate({
			left:-n*kingwidth
		},800);
	}

	timer=setInterval(move,2500);//没有什么操作就轮播

	$(".contentchar").mouseover(function(){//鼠标放上就停止轮播
		clearInterval(timer);
	})

	$(".contentchar").mouseout(function(){//鼠标移开再重新开始轮播
		clearInterval(timer);
		timer=setInterval(move,2500);
	})

	$(".left-btn").click(function(){//处理左按钮
		if(n==1)//如果是第一张就要往前走
		{
			n=8;
			$(".list").stop().animate({
			left:-n*kingwidth
		},0);//直接跳到与第一张显示图相同的最后一张，实际上是垫图
			n--;//正常--
			$(".list").stop().animate({
			left:-n*kingwidth
		},800);//防止定时器重叠，先停止运动，然后正常轮播
		}
		else
		{
			n--;
			$(".list").stop().animate({
			left:-n*kingwidth
		},800);
		}
	})

	$(".right-btn").click(function(){//跟左边一样
		if(n==8)
		{
			n=1;
			$(".list").stop().animate({
			left:-n*kingwidth
		},0);
			n++;
		 	$(".list").stop().animate({
		 	left:-n*kingwidth
			},1000);
		}
		else
		{
			n++;
			$(".list").stop().animate({
			left:-n*kingwidth
		},1000);
		}
	})

});