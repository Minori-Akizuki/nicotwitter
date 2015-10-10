$(function(){
	$(".socialLinkTwitter").each(function()
	{　
		// twitter-widget-0 がツイッターボタンのところなので探しに行く
		// 絶対eachじゃなくてもよさそうこれ
			var title = $("title").text();
			// ページタイトルを取得

			var tagsP = "";
			var tagsOther = "";

			$("a.videoHeaderTagLink").each(function()
			{
							var tag = $(this).text();
							if(tag.match(/(Ｐ|P)$/i))
							{
								tagsP = tagsP + "【" + tag + "】";
							}else if (tag) {
								tagsOther = tagsOther + " [" + tag + "]";
							}
			});
			$(this).parent().prepend("<p>" + tagsP + tagsOther + " " + title + "</p>");
			//テスト用にツイッターボタンの前に文字列を足してみる
	});
});
