//
//  jQuery.xl.lodding.js
//  jq plugin
//
//  Created by RainBow on 22/11/2014.
//
//

;(function($) {   

	 //public methods
    function pp(info){

		if (window.console && window.console.log)    
			window.console.log('LOG: ' + info ); 

    };

    function createLoddingPart (lodingBox, className){
    	var part = document.createElement('div');

    	$(part).addClass(className);
    	lodingBox.append(part);
    };

    function createMethodForLodding (_that){
    	_that.startMove = function (target, speed){
    		_that.each(function (index, dom){
    			if($(dom).attr('_id') == target){
    				if(!speed){
    					speed = '2.4s';
    				};
    				$('.gearSmall', $(dom)).addClass('startMoveRevolve');
    				$('.gearSmall', $(dom)).css('animationDuration',speed);

    				$('.gearBig', $(dom)).css('animationDuration',speed);
    				$('.gearBig', $(dom)).addClass('revolveAnticlockwise');
    			};
    		});
    	};

    	_that.stopMove = function (target){
    		_that.each(function (index, dom){
    			if($(dom).attr('_id') == target){
    				$('.gearSmall', $(dom)).removeClass('startMoveRevolve');
    				$('.gearBig', $(dom)).removeClass('revolveAnticlockwise');
    			};
    		});
    	}
    };

    //jquery plugin
	$.fn.getLodding = function(options) {  

		var opts = $.extend({}, $.fn.getLodding.defaults, options);

		//此jquery对象添加私有方法
		createMethodForLodding(this);

		//start plugin here
		return this.each(function() { 

			var lodingBox = $(this);

			//给lodding盒子添加样式
	    	lodingBox.addClass('loddingBox');

	    	//给lodding创建黑色背景
	    	createLoddingPart(lodingBox, 'blackBg');

	    	//添加小齿轮
	    	createLoddingPart(lodingBox, 'gearSmall');

	    	//添加大齿轮
	    	createLoddingPart(lodingBox, 'gearBig');

	    	//添加阴影
	    	createLoddingPart(lodingBox, 'shadow');

	    	//添加圆角图标
	    	createLoddingPart(lodingBox, 'circle');

		});
		//end this.each 
	};

    //插件的默认参数    
	$.fn.getLodding.defaults = {
		lodingSize:{
			width:100,
			height:100
		},
		gearSmallSpeed:'5',
		gearBigSpeed:'5'
    };  
    
})(jQuery);
