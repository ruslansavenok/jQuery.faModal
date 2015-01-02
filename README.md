jQuery.faModal
==============

Modal Windows Plugin, that doesn't suck with scrollbars. It's small and easy to modify for your project.

**Supports CSS3 browsers only.**

Check out the [Demo](https://dl.dropboxusercontent.com/u/18659172/code/jquery.famodal/demo/index.html)


##### Initialization
```html
<script src="jquery.js"></script>
<link rel="stylesheet" href="jquery.faModal.css" />
<script src="jquery.faModal.js"></script>
<script>
  $(document).ready(function () {
    $modal = $('.my-modal').faModal();
    $('.btn').click(function () {
      $modal.faModal('show');
    });
});
</script
```


##### Modal Content Markup
```html
<div class="fa-modal my-modal">
  <div class="fa-modal__close-btn"></div> <!-- add if you need close btn -->
  <!-- modal content goes here -->
</div>
```
