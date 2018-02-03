$(document).ready(function(){
    $(".loading").hide();
    gethitokoto();
});

function gethitokoto() {
    $.ajax({
        url: "https://api.a632079.me/?encode=json",
        dataType: "jsonp",
        async: true,
        jsonp: "callback",
        jsonpCallback: "echokoto",
        success: function(result) {
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

function RandomNum(Min, Max) {
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.floor(Rand * Range); //舍去
      return num;
};

var imgArray = [
    "https://piccdn.freejishu.com/images/2016/07/18/59fe422cee6a2b825e4521ace38cc8b0.jpg",
	"https://piccdn.freejishu.com/images/2016/04/27/c40ab2d44e9e25519b245e26b565498a.jpg",
	"https://piccdn.freejishu.com/images/2017/09/04/qAuQB.jpg",
	"https://piccdn.freejishu.com/images/2016/04/04/41795-106.jpg",
	"https://piccdn.freejishu.com/images/2016/04/04/1173409.jpg",
	"https://piccdn.freejishu.com/images/2016/04/04/1057060.jpg"
];
var index = RandomNum(0, imgArray.length - 1)
$('.bg').css('background-image', "url(" + "\"" + imgArray[index]+ "\")")