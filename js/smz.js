	//フッターのアコーディオン
  $(document).ready(function() {
	$('#only-one [data-accordion]').accordion();

	$('#multiple [data-accordion]').accordion({
	  singleOpen: false
	});

	$('#single[data-accordion]').accordion({
	  transitionEasing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
	  transitionSpeed: 200
	});
  });
  
  //サイドバーの横幅をウィンドウサイズに合わせる
	$(window).on('load resize', function()  {
			var ww = window.innerWidth ? window.innerWidth: $(window).width();
			if (ww >750 ) {
				//サイドバーのheight取得
				var h = $(window).height();
				var s = h + 'px' ;
				$('#side_bar').css('height', s);
				$('#side_bar_in').css('height', s);
				$('.side_bar_open').css('height', s);
			}
			else {
				//サイドバーのheight取得
				$('#side_bar').css('height', 'auto');
				$('#side_bar_in').css('height', 'auto');
				$('.side_bar_open').css('height', 'auto');
			}
	});

	//no.2,3の高さの設定
	$(window).on('load resize', function()  {
		var ww = window.innerWidth ? window.innerWidth: $(window).width();
		if (ww >= 750 ) {
			var h2 = $("#no1").height();
			var s2 = h2/2 + 'px' ;
			$('#no2').css('height', s2);
			$('#no3').css('height', s2);
		}
		else{
			$('#no2').css('height', 'auto');
			$('#no3').css('height', 'auto');
		}
			
	});
	
	//PCグローバルナビホバー時
	$(".m_01").hover(function() {
		$("#gnav_hover01").show();
	}, function() {
		$("#gnav_hover01").hide();
	});
	
	$(".m_02").hover(function() {
		$("#gnav_hover02").show();
	}, function() {
		$("#gnav_hover02").hide();
	});
	
	$(".m_03").hover(function() {
		$("#gnav_hover03").show();
	}, function() {
		$("#gnav_hover03").hide();
	});
	
	$(".m_04").hover(function() {
		$("#gnav_hover04").show();
	}, function() {
		$("#gnav_hover04").hide();
	});

	//商品のキャプション
	$(window).on('load resize', function() {
		var h = $('.boxcaption').height()+120;
		var h2 = h + 'px' ;
		//マスオーバー時にキャンプション表示
		$('.boxgrid.captionfull').hover(function(){
			$(".cover", this).stop().animate({bottom:'0'},{queue:false,duration:200});
		}, function() {
			$(".cover", this).stop().animate({bottom:'-' + h2 },{queue:false,duration:200});
		});
	});
	
	//ピックアップアイコンの色を変更
	$(".pickup_hover").hover(function() {
		$(this).children(".pickup_icon").css({ backgroundColor: "#bb131a" });
	},function() {
		$(this).children(".pickup_icon").css({ backgroundColor: "#2b2b2b" });
	});
	
	//キャプションの文字の横幅制限
	$(window).on('load resize', function() {　//ピックアップテキスト横幅
		var w = $('.picup_item').width()-60;
		var w2 = w + 'px' ;
		$('.pickup_name').css("width", w2);
	});
	
	$(window).on('load resize', function() {　//ランキング２、３位テキスト横幅
		var w5 = $('.no23_width').width()-50;
		var w6 = w5 + 'px' ;
		$('.no23_name').css("width", w6);
	});
	
	$(window).on('load resize', function() {　//ブログテキスト横幅
		var w7 = $('.blog_p_img').width()-30;
		var w8 = w7 + 'px' ;
		$('.blog_p_txt02').css("width", w8);
	});
	
	//文字の横幅制限
	$(window).on('load resize', function() {
		var topbnr = $('#top_bnr_in').height();
		var topbnr2 = topbnr + 'px' ;
		$('#top_bnr_out').css("height", topbnr2);
	});
	
	//スマホヘッダーナビ
	$(function(){
		$(".menu").css("display","none");
		$(".button-toggle").on("click", function() {
			$(".menu").slideToggle("fast");
		});
	});
	
	//ブログ写真のheight取得
	$(window).on("load resize", function(){
			var rss_img = $('.blog_box').width();
		 	var rss_img_height = rss_img*0.446991404 + 'px' ;
			$('.blog_p_img').css('height', rss_img_height);
	});
