$( document ).ready(function() {
	var arr = []


	$(".add-food").click(function(e) {
		e.preventDefault()
		var foodInput = $(".food-input").val() 
		arr.push(foodInput)
		console.log(arr)
		console.log(foodInput)
		$('.allitems ul').append("<li class='currentitems'><img class='checked' src='images/checkbox.png'>"+foodInput+"<img class='trash' src='images/trashcan.ico'></li>")
	})
			
	$('ul').on('click', '.trash', function(event){
		console.log('trash clicked');
		$(this).closest('li').remove();
	})
	
	$('ul').on('click', '.checked', function(event) {
		$(this).closest('li').toggleClass('linethrough');
		console.log('check clicked');
	});

});