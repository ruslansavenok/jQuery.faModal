jQuery.faModal
==============

Modal Windows Plugin, that doesn't suck with scrollbars. It's small and easy to modify for your project.

Check out the [Demo](https://dl.dropboxusercontent.com/u/18659172/code/jquery.famodal/demo/index.html)


** Initialization **
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


** Modal Content Markup **
```html
<div class="fa-modal my-modal">
  <div class="fa-modal__close-btn"></div>
  <-- modal content goes here -->
</div>
```


Requires extra markup in your html to prevent 2 scrollbars if modal content is too big.
```html
<body>
  <div class="fa-modal__page">
    <!-- your page content here -->
  </div>
</body>
```
