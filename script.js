$(document).ready(function()
{

		  $('body').hide().fadeIn(800);
			$('h1').hide().delay(500).fadeIn(600);

  		$('.menu').hide().delay(1900).fadeIn(1100);
			$('.note').hide().delay(1000).fadeIn(1100);
		  $('.colorBar').css("opacity","1");


			$('#preview').click(function()
		{

		window.location.href = "https://github.com/shaz13/ink-note";

		});

		$('#download').click(function()
			{

    		html2canvas($('#text'),
    	{
      	onrendered: function (canvas) {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'inknote.jpg';
        a.click();
      }
    	});
  		});

	$('#red').click(function() {
$('#text').css("background-color","#f44336");
$('#text').css("color","white");
	});

	$('#yellow').click(function() {
$('#text').css("background-color","#efd918");
$('#text').css("color","#4c4747");

	});
	$('#blue').click(function() {
$('#text').css("background-color","rgba(22, 61, 171, 0.77)");
$('#text').css("color","white");

	});
	$('#green').click(function() {
$('#text').css("background-color","#4caf50");

	});
	$('#brown').click(function() {
	$('#text').css("background-color","#929a83");

	});




});
