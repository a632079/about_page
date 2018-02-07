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

function RandomNum(Min,Max){
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.round(Rand * Range); //四舍五入
      return num;
};
function LoadBg(url) {
	var ts = Date.now()
	var Bgimg = new Image();
	console.log('开始加载背景图像...');
	Bgimg.src = url;
	Bgimg.onload = function() {
    $('.bg').css('background-image', "url(" + "\"" + imgArray[index]+ "\")")
	console.log('背景图像加载完成！ 耗时：' + (Date.now() - ts) + 'ms');
	};
}

function LoadAvatar() {
	var Avatar = new Image();
	var ts = Date.now()
	console.log('开始加载头像...');
	Avatar.src = 'https://secure.gravatar.com/avatar/00445540cb7e892c690499053ca94796?s=500&d=mm&r=x';
	Avatar.onload = function() {
	$('#avatar').attr('src', Avatar.src);
	console.log('头像加载完成！ 耗时：' + (Date.now() - ts) + 'ms')
};
}
var imgArray = [
    "https://piccdn.freejishu.com/images/2016/07/18/59fe422cee6a2b825e4521ace38cc8b0.jpg!/format/jpg",
	"https://piccdn.freejishu.com/images/2016/04/27/c40ab2d44e9e25519b245e26b565498a.jpg!/format/jpg",
	"https://piccdn.freejishu.com/images/2017/09/04/qAuQB.jpg!/format/jpg",
	"https://piccdn.freejishu.com/images/2016/04/04/41795-106.jpg!/format/jpg",
	"https://piccdn.freejishu.com/images/2016/04/04/1057060.jpg!/format/jpg"
];
var index = RandomNum(0, imgArray.length - 1);
console.log('背景图像 id:' + index)
LoadBg(imgArray[index]);
LoadAvatar();


