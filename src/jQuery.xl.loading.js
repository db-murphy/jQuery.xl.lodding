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

    function loadingCreate (loadingBox){

        //给lodding盒子添加样式
        loadingBox.addClass('loddingBox');

        //给lodding创建黑色背景
        createLoadingPart('blackBg');

        //添加小齿轮
        createLoadingPart('gearSmall');

        //添加大齿轮
        createLoadingPart('gearBig');

        //添加阴影
        createLoadingPart('shadow');

        //添加圆角图标
        createLoadingPart('circle');

        function createLoadingPart (className){
            var part = document.createElement('div');

            $(part).addClass(className);
            loadingBox.append(part);
        };
    };

    //为对象添加私有方法
    function createMethodForLoading (_that){
        //开始转动
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

        //停止转动
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
	$.fn.getLoading = function(options) {  

		var opts = $.extend({}, $.fn.getLoading.defaults, options);

		//此jquery对象添加私有方法
		createMethodForLoading(this);

		//start plugin here
		return this.each(function() { 

			var loadingBox = $(this);

            loadingCreate(loadingBox);

		});
		//end this.each 
	};

    //插件的默认参数    
	$.fn.getLoading.defaults = {};  
    
})(jQuery);
