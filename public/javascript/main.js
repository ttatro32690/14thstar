var $;

$(document).ready(function() {
	initPage();
	//noAnimationInit();
	
	$("#menu_button").on("click", menuOnClick);
	$("#close_menu_button").on("click", menuOnClick);

});

function menuOnClick() {
	$("#list").animate({
		"height": "toggle"
	}, {
		duration: 500,
		specialEasing: {
			"height": "easeInOutCirc"
		},
		complete: function() {
			$("#content").toggleClass("fadeContent", {
				duration: 300,
				easing: "easeOutCirc"
			});
			
			$("#menu_icon").toggleClass("fa-chevron-up");
			$("#menu_icon").toggleClass("fa-chevron-down");
		}
	});
}

//Will be the permanent init page once it is completed.
function initPage() {
	if($(".navbar-header").length > 0){
	
		$(".navbar-header").animate({
			"width": "100%"
		}, {
			duration: 500,
			specialEasing: {
				"width": "easeInOutCirc"
			},
			complete: initContent()
		});
		
	} else {
		$("#content").css({"margin-top": "100px"});
		initContent();
	}
}

//Used as a temporary page initialization to save time for now
function noAnimationInit(){
	$(".navbar-header").css({
		"width": "100%"
	});
	
	$("#content").fadeIn();
}

function initContent(){
	$("#content").fadeIn({
		duration: 1000,
		easing: "easeInOutCirc"
	});
}