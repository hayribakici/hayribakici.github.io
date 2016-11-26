function init() {
  $('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    stamp: '.headline',
    gutter: '.gutter-sizer',
    percentPosition: true

  });

}
