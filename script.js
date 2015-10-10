$(window).load(function(){
	$(".socialLinkTwitter").each(function()
	{　
		// twitter-widget-0 がツイッターボタンのところなので探しに行く
		// 絶対eachじゃなくてもよさそうこれ
			var title = $("title").text();
			// ページタイトルを取得

			var tagsP = "";
			// 末尾に「P」がついているタグ
			var tagsOther = "";
			// それ意外のタグ

			$("a.videoHeaderTagLink").each(function()
			{ // ページからタグを探す
				var tag = $(this).text();
				// タグの内容
				if(tag.match(/(Ｐ|P)$/i))
				{ // 正規表現で末尾がPか判定
					tagsP = tagsP + "【" + tag + "】";
					// P名はすみつきカッコでくくる
				}else if (tag)
				{ // 空じゃないかどうかだけ検査
					tagsOther = tagsOther + " [" + tag + "]";
					// ふつーのカッコでくくる
				}
			});

			var linktwitter = "https://twitter.com/intent/tweet" ;
			// ツイッターのURL
			var tweetStringAllTag = tagsP + tagsOther + " " + title + " " ;
			var tweetStringPTag = tagsP + " " + title + " " ;
			// ツイート内容
			var pageURL = document.URL.match(/([^\?]*)(\?.*)?$/)[1];
			// パラメータは邪魔な事が多いので外す
			var movieNum = pageURL.match(/.*\u002f([^\u002f\?]+)(\?.*)?$/)[1];
			// 元々ついているツイートボタン同様、動画番号をハッシュタグにする為URLから抽出

			// 以下、なぜか $("a.originalVideoLink").attr("href") がちゃんと動いてくれないので
			// とりあえず保留。
			// この関数の中で $("a.originalVideoLink").attr("href") ってやると
			// なぜか "javascript:;" という文字列が帰ってくる……なぞ……
			// if(!(movieNum.match(/sm/)))
			// { // 動画ページがコミュニティ動画等のページであれば、動画番号に「sm」がついていないので
			// 	movieNum = $("a.originalVideoLink").attr("href").match(/sm\d+$/);
			// 	// オリジナル動画へのリンクを探して動画番号を抽出し直す
			// }

			var linkURLBase =
				linktwitter +
				"?url=" + encodeURIComponent( pageURL ) +
				"&amp;hashtags=" + movieNum ;
			// リンクの生成

			var linkURLAllTag = linkURLBase +
				"&amp;text=" + encodeURIComponent( tweetStringAllTag );
			// 全タグツイートリンクの生成

			var linkURLPTag = linkURLBase +
				"&amp;text=" + encodeURIComponent( tweetStringPTag );
			// Pタグツイートリンクの生成 これコードの重複率上がりそう。

			$(this).parent().prepend(
				"<a href=\"" + linkURLAllTag + "\">【全タグつきのツイート】</a>" +
				"<a href=\"" + linkURLPTag + "\">【Pタグつきのツイート】</a>"
			);
			// ツイートボタンの直前に追加
	});
});
