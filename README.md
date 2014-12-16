jQuery.faModal
==============

Modal Windows Plugin, that doesn't suck with scrollbars. It's small and easy to modify for your project.

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

If you have `min-width`, `padding`, `margin`, etc on page `body {}`, you will need to add extra div inside `.fa-modal__page` and set it here.
```html
<style>
  .page-min-width-controller {
    min-width: 1200px;
    margin: 0 10px;
  }
</style>
<body>
  <div class="fa-modal__page">
    <div class="page-min-width-controller">
      <!-- your page content here -->
    </div>
  </div>
</body>
```
