$( document ).ready(function() {
	var arr = ['Taco Shells','Ground Beef']

//Text input to search array for strings that match

//Listen for even on search button

//Create a variable that stores data in input (get value)

//Loop through array and see if item exists 

//If it exists, I want to show it on page

//Alert: item does not exist (if item isn't there)



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