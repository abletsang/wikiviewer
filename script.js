var input = $("input");
var searchStr;

$("input").keypress(function(e) {
	if (e.which === 13) {
		// console.log(e);
		searchStr = $("input").val()
		var url = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchStr + "&format=json"; // &callback=wikiCallback
		$.ajax({
			dataType: "jsonp",
			url: url,
			success: function(result) {
				for (var i = 0; i < 10; i++) {
					// var temp = "<p>" + result[1][i] + "</p>";
					// $(".wikiResults").text(i);
					// $(".wikiResults").clone().append().html(temp);
					console.log(temp);
				}
			}
		});
	}
});


