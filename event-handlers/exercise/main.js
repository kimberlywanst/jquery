// Two parts to event handlers:
// 1) Event listener - listens for specific event to occur, ie: a click
// 2) Callback function - executed when event listener triggered

$(document).ready(() => {
  // on "click" event
  $(".login-button").on("click", () => {
    $(".login-form").show();
  });

  // on "mouseenter" event
  $(".menu-button").on("mouseenter", () => {
    $(".nav-menu").show();
  });

  // on "mouseleave" event
  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
  });

  // chaining events
  $(".product-photo")
    // make photos zoom in on hover
    .on("mouseenter", () => {
      // add CSS rule for zoom in
      $(".product-photo").addClass("photo-active");
    })
    // remove rule when move away
    .on("mouseleave", () => {
      $(".product-photo").removeClass("photo-active");
    });

  // target current element
  // pass in event as parameter - to access currentTarget method
  $('.product-photo').on("mouseenter", event => {
    // only adds CSS rule to current target element
    $(event.currentTarget).addClass("photo-active");
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active');
});
