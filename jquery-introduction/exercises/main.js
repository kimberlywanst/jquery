// $() - creates jQuery object
// . notation - attach handler method to trigger callback function

// .ready() - triggers callback function after browser loads
$(document).ready(() => {
  // Similar to .getElementsByClassName()
  $(".product-photo").show();

  // $jQueryObject
  const $menuButton = $(".menu-button");
  const $navDropdown = $("#nav-dropdown");

  // Event handler
  $menuButton.on("click", () => {
    $navDropdown.show();
  });

  $navDropdown.on("mouseleave", () => {
    $navDropdown.hide();
  });
});
