
windowFn();

function windowFn() {
	
	let responseLink = "";
	

function randomQuote(evt) {
    $.ajax({
		// get api href link
		url: "https://api.forismatic.com/api/1.0/?",
		// add data type jsonp
		dataType: "jsonp",
		// add data string to get info  
		data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
		// success method with resopnce method
        success: function( response ) {
		// add responce.qoteText and author to span tag to html 
        $("#span").html(`<span class='lead text-center'><p><a id="aTags" target="_blank"><strong>${response.quoteLink}</strong></a></p><h3><q>${response.quoteText}</q><br />&dash;<strong><em>${response.quoteAuthor}</em></strong>&dash;</h3><br /></span>`);
		// tweet quote 
		$("#tweet").attr("href", `https://twitter.com/home/?status= ${response.quoteText}${response.quoteAuthor}`);
		// addattribute and url link   
		$("#aTags").attr("href", response.quoteLink);
		}
	// end of ajax call	
	});
// end off randomQuote	
  }
  
  $(function() {
    randomQuote();
  });
  
// click event to change quote
  $("button").click(function(){
	randomQuote();
  });

// end of window  
}































