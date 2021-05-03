// Trigger function after page loads
$(document).ready(() => {
  // jQuery objects
  const $dropdown = $(".dropdown");
  const $dropdownMenu = $(".dropdown-menu");

  const $cart = $("#cart");
  const $cartMenu = $("#cartMenu");
  const $account = $("#account");
  const $accountMenu = $("#accountMenu");
  const $help = $("#help");
  const $helpMenu = $("#helpMenu");

  // Menu appears when user clicks on header
  $cart.on("click", () => {
    $cartMenu.show();
  });

  $account.on("click", () => {
    $accountMenu.show();
  });

  $help.on("click", () => {
    $helpMenu.show();
  });

  // Menu disappears when mouse exits menu
  $dropdown.on("mouseleave", () => {
    $dropdownMenu.hide();
  });
});
