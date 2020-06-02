window.addEventListener('load',function(){
	var preview=document.querySelector('.preview');
	var mask=document.querySelector('.mask');
	var big=document.querySelector('.bigBox');

	// 显示面纱和大图
	preview.addEventListener('mouseover',function(){
		mask.style.display='block';
		big.style.display='block';
	})
	preview.addEventListener('mouseout',function(){
		mask.style.display='none';
		big.style.display='none';
	})

	// 面纱随鼠标移动
	preview.addEventListener('mousemove',function(e){
		var x=e.pageX-this.offsetLeft;//盒子内鼠标坐标
		var y=e.pageY-this.offsetTop;
		var maskX=x-mask.offsetWidth/2;//面纱坐标
		var maskY=y-mask.offsetHeight/2;
		// 限制面纱移动范围
		if(maskX<=0)
		{
			maskX=0;
		}else if(maskX>=preview.offsetWidth-mask.offsetWidth)//面纱到达右边界
		{
			maskX=preview.offsetWidth-mask.offsetWidth;//面纱固定在右边界
		}

		if(maskY<=0)
		{
			maskY=0;
		}else if(maskY>=preview.offsetHeight-mask.offsetHeight)
		{
			maskY=preview.offsetHeight-mask.offsetHeight;
		}
		mask.style.left=maskX+'px';
		mask.style.top=maskY+'px';

		var maskMaxX=preview.offsetWidth-mask.offsetWidth;/*面纱最大移动距离*/
		var maskMaxY=preview.offsetHeight-mask.offsetHeight;
		var bigImg=document.querySelector('.bigImg');
		var bigMaxX=bigImg.offsetWidth-big.offsetWidth;/*大盒子最大移动范围：大图宽减去大图盒子宽*/
		var bigMaxY=bigImg.offsetHeight-big.offsetHeight;
		var bigX=maskX*bigMaxX/maskMaxX;/*距离*比例*/
		var bigY=maskY*bigMaxY/maskMaxY;
		bigImg.style.left=-bigX+'px';/*实际上移动的还是图片*/
		bigImg.style.top=-bigY+'px';
	})
	//随页面大小调整字体和盒子尺寸
	var width=$(".contentstory .con").width();
	$(".contentstory .con,.backwall").height(width*4/5);
	$(".con p").css("font-size",width/35);
	$(".con p span").css("font-size",width/25);
	$(window).resize(function(){
		var width=$(".contentstory .con").width();
		$(".contentstory .con,.backwall").height(width*4/5);
		$(".con p").css("font-size",width/35);
		$(".con p span").css("font-size",width/25);
	})
})