//Check off specific todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("ticked");	
});


//Click on X to fade out and remove it
$("ul").on("click", "span", function(evt){
	console.log("Clicked X");
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
	evt.stopPropagation();
});


$("input[type='text']").keypress(function(evt){
	if(evt.which === 13)
	{
		var textEntered = $(this).val();
		$(this).val('');
		$("ul").append("<li><span> <i class=\"fa fa-trash\" ></i> </span>" + textEntered + "</li>");
	}
	
});