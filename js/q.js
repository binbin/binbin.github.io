$(function(){
	var imgbox=$('.img-box')
	imgbox.click(function(){
		imgbox.removeClass('current')
		$(this).addClass('current')
		$('a.btn').show()
	})

})