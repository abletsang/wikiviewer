$("input").keypress(function(e) {
	if (e.which === 13) {
		var searchStr = $("input").val();
		$("input").val("");
		$("h2").css("margin-top", "50px");
		var url = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchStr + "&format=json"; // &callback=wikiCallback
		$.ajax({
			dataType: "jsonp",
			url: url,
			success: function(result) {
				var articleList = result[1];
				var articleDesc = result[2];
				var articleLinks = result[3];
				for (var i = 0; i < 10; i++) {
					var articleName = "<h3><a target='blank' href='" + articleLinks[i] + "'>"+ articleList[i] + "</a></h3>";
					var article = "<p>" + articleDesc[i] + "</p>";
					$(".wikiResults" + i).append().html(articleName + article);
				}
			}
		});
	}
});


