(function ($) {

  var defaultOptions = {
    template: '<div class="fa-modal__overlay">' +
                '<div class="fa-modal__content-container">' +
                '</div>' +
              '</div>'
  }



  /*  Modal Class
   */
  var Modal = function ($modalContent, options) {
    var modal = this;
    var options = $.extend({}, defaultOptions, options);
    var $modal = $(options.template);
    var $modalContentContainer = $modal.find('.fa-modal__content-container');

    $modal.appendTo('body');
    $modalContentContainer.html($modalContent);

    $modal.add('.fa-modal__close-btn', $modal).on('click', function () {
      $modal.trigger('hide');
    });
    $modalContent.on('click', function (e) {
      e.stopImmediatePropagation()
    });

    $modal.on({
      show: function () {
        $modal.fadeIn().addClass('fa-modal__overlay_visible');
      },
      hide: function () {
        $modal.fadeOut().removeClass('fa-modal__overlay_visible');
      }
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
        $this.data('fa-modal', new Modal($this, options));
      }
    });
  }


})(jQuery);
