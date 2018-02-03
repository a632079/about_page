$(document).ready(function(){
    $(".loading").hide();
    gethitokoto();
});

function gethitokoto() {
    $.ajax({
        url: "https://api.lwl12.com/hitokoto/main/get?encode=json",
        dataType: "jsonp",
        async: true,
        jsonp: "callback",
        jsonpCallback: "echokoto",
        success: function(result) {
        	//console.log(result.hitokoto);
            write(result.hitokoto);
        },
        error: function() {
            write("读取一言数据失败了的说……_(:з」∠)_");
        }
	});
};

function write(text) {
	if (text.length < 40) {
		$('#hitokoto').html("<p>" + text + "</p>");
	} else {
		gethitokoto();
	}
};
