// 活动规则
$('.but span.gz').click(function() {
	$('.main ul li').css('display', 'none');
	$('.gzsm').css('display','block');
	$('.p1').css('display','block');
})

$('.but span').each(function(index) {
	$(this).click(function() {
		$('.but span').removeClass('nav');
		var nav = $('.but span').eq(index);
		nav.addClass('nav');
	})
})

$('.gzsm_warp a.close').click(function() {
	$('.gzsm').css('display','none');
	$('.but span').removeClass('nav');
})

$('.clo_b').click(function  () {
	$('.gzsm').css('display','none');
})

// 注册报名
$('.but span.zc').click(function() {
	$('.main ul li').css('display', 'none');
	$('.p5_mb').attr('src', arr[0]);
	$('#name').val('');
	$('#email').val('');
	$('#textare').val('请保持在24个字以内');
	$('.frame_pic').attr('src','');
	$('.picture').attr('src','');
	$('.item2').remove();

	$('.p5').hide();
	$('.p2').css('display','block');
})
// 围观点赞
$('.but span.dz').click(function() {
	$('.main ul li').css('display', 'none');
	$('.p6').css('display','block');
})

//选择模板
$('.p2_content div').each(function(index) {
	$(this).click(function() {
		$('.p2_content span').removeClass('turr');
		var nav = $('.p2_content span').eq(index);
		nav.addClass('turr');
	})
})
// 注册
$('a.ok').click(function() {
	$('.main ul li').css('display', 'none');
	$('.p3').css('display','block');
})
// 分享弹层
$('.fx').click(function() {
	$('.fxy').css('display','block');
})
$('.fxy').click(function() {
	$(this).css('display','none');
})