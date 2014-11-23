#jQuery.xl.loading

jQuery.xl.loading是基于`jquery`,`css3`的一个loading组件。

## Usages

引入库文件

	<script type="text/javascript" src="../src/jquery.js"></script>
	<script type="text/javascript" src="../js/jQuery.xl.loading.js"></script>
	<link rel="stylesheet" href="../css/jQuery.xl.loading.css">

##Example

	<script type="text/javascript">
	$(function(){
		var loading = $('.icon').getLoading();

		$('.move').click(function(){
			loading.startMove('a','1s');
		});

		$('.stop').click(function(){
			loading.stopMove('a');
		});

	});
	</script>
	
	<div class="icon" _id="a"></div>

html结构

	<div class="icon" _id="a"></div>
	
`class`值任意，`_id`的值任意

渲染出loading图标

	var loading = $('.icon').getLoading();
	
此时生成的图标是静止的

调用语句开始转动loading

	loading.startMove(target,speed);
	
参数说明

1. `target`是需要转动的目标，由自定义属性`_id`决定
2. `speed`图标转动的速度，传入类型`String`

调用语句停止转动

	loading.stopMove(target);
	
参数说明

1. `target`是需要转动的目标，由自定义属性`_id`决定

## 版本

- v0.1.0 初始版本

## 作者

- write by `RainBow` rainbolean@sina.com

意见和建议，请提问issue或者发邮件给我

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).