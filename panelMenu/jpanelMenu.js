//Mobile Menu Toggle Plugin
;(function ( $, window, document, undefined ) {

	'use strict';

		// Create the defaults once
		var pluginName = "jwMobMenu",
			defaults = {
				topParentLink: 'li.has-drop > a',
				subParent: true,
				subParentLink: 'li > ul.navdrop > li > a',
				sectionToOpen: '.navdrop',
				subSection: false,
				subSectionToOpen: '.level-1',
				icon: true,
				iconClosed: '<span class="icon-arrow-down"></span>',
				iconOpen: '<span class="icon-arrow-up"></span>'
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		Plugin.prototype = {
			init: function () {
				if (settings.icon == true){
					$(settings.topParentLink).append(settings.iconClosed);
				}	
			},
			yourOtherFunction: function () {
					// some logic
			}
		};

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
			this.each(function() {
					if ( !$.data( this, "plugin_" + pluginName ) ) {
						$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
					}
			});

			// chain jQuery functions
			return this;
		};

})( jQuery, window, document );