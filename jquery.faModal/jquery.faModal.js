//  jQuery.faModal.js v1.1
(function ($) {

  var scrollBarWidth = null;


  /*  Count ScrollBar Width Helper
   */
  function getScrollBarWidth() {
    var html = '<div style="position: absolute; top: -9999px; left: 0; overflow: scroll;">' +
                  '<div style="width: 100px; height: 100px;"></div>' +
                '</div>';
    var $testDiv = $(html);
    var $testDivChild = $testDiv.find('div');

    $testDiv.appendTo('body');

    return $testDiv.width() - $testDivChild.width();
  }


  /*  Modal Class
   */
  var Modal = function ($modalContent, options) {
    var options = $.extend({}, options);

    if (scrollBarWidth == null) {
      scrollBarWidth = getScrollBarWidth();
    }

    var $body = $('body');
    var $modal = $(options.template);
    var $modalContentContainer = $modal.find('.' + options.classes.modalContentContainer);

    $body.append($modal);
    $modalContentContainer.html($modalContent);

    var $closeBtn = $modalContentContainer.find('.' + options.classes.closeBtn);

    /*  Event Listeners
     */
    $modal.on({
      show: function () {
        $body.css({
          paddingRight: scrollBarWidth,
          overflow: 'hidden'
        });
        $modal.show();
        setTimeout(function () {
          $modal.addClass(options.classes.wrapperAnimate);
        }, 10);
      },
      hide: function () {
        $modal.one('transitionend', function () {
          $modal.hide();
          $body.css({
            padding: 0,
            overflow: 'auto'
          });
        });
        $modal.removeClass(options.classes.wrapperAnimate);
      }
    });

    $modal.add($closeBtn).on('click', function () {
      $modal.trigger('hide');
    })

    $modalContent.on('click', function (e) {
      e.stopImmediatePropagation()
    });

    return {
      options: options
    }
  }


  /*  jQuery Plugin API
   */
  $.fn.faModal = function (options) {
    if (typeof options == 'string') {
      return this.trigger(options);
    }

    return this.each(function () {
      var $this = $(this);
      var modal = $this.data('fa-modal');

      if (modal) {
        $.extend(modal.options, options);
      } else {
        $this.data('fa-modal', new Modal($this, $.fn.faModal.defaults, options));
      }
    });
  }

  /*  Default Options
   */
  $.fn.faModal.defaults = {
    // Template Classes Mapping, for plugin use.
    classes: {
      wrapper:                'fa-modal__wrapper',
      wrapperAnimate:         'fa-modal__wrapper_animate',
      modalContentContainer:  'fa-modal__content-container',
      closeBtn:               'fa-modal__close-btn'
    },
    template: '<div class="fa-modal__wrapper">' +
                '<div class="fa-modal__centering-outer">' +
                  '<div class="fa-modal__centering-inner">' +
                    '<div class="fa-modal__content-container"></div>' +
                  '</div>' +
                '</div>' +
              '</div>'
  };

})(jQuery);
