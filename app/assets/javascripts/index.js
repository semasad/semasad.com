$(document).on("ready", sindex);

function sindex () {

	$("nav ul").hide();
	$("#reference").hide();
	$("#contact").hide();
  $("nav .home").css("font-weight" , "bold");
	$("nav img").on("click" , show_menu);
	$("nav ul li a").on("click" , show_item);

	$("h1").flipping_text({
    	tickerTime: 5,
    	customRandomChar: 'abcdeimorst',
  	});
  
  $("section").hide();
	$("section").fadeIn(900);

	$("h1").tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });

  if ($(document).width() <= 800) {
    $("*[title]").removeAttr('title');
  }
}

function show_menu () {
	$("nav ul").toggle("slide" , 200);
}

function show_item () {
	$("nav ul li a").css("font-weight" , "100");
	$(this).css("font-weight" , "bold");
	var id = $(this).attr('class');
	var title = $('#' + id + " h2").text();
	$("h1").text(title).fadeIn(100);
  $("aside").hide();
	$("article").hide("fade" , 100);
	$('#' + id).delay(100).show("fade" , 500);
	$("h1").css("height" , "1.37em");
	$("h1").flipping_text({
    	tickerTime: 5,
    	customRandomChar: 'abcdeimorst',
  	});

  if (id === "contact" || id === "home") {
    $("aside").fadeIn(500);
  };
	
}