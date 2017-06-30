//template plugin

/*
__________________________________________________

Created by NovaVovikov

github: https://github.com/novavovikov/
e-mail: novavovikov@gmail.com
__________________________________________________

*/


(function($) {
	var defaults = {
		
	};

    $.fn.template = function(options) {
		if (this.length == 0) return this;
		
        if (this.length > 1) {
            this.each(function() { $(this).template(options) });
            return this;
        }

		var node = {}, data = {}, el = this;
        var settings = $.extend({}, defaults, options);

        var methods = {
            init: function() {
                node.wrap = el;
            }

        };

        methods.init();
    };
})(jQuery);