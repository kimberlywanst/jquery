$(document).ready(() => {
  // .hide() method
  // Browser render as if hidden element does not exist
  $(".hide-button").on("click", () => {
    $(".first-image").hide();
  });

  // .show() method
  // browser displays hidden elements
  $(".show-button").on("click", () => {
    $(".first-image").show();
  });

  // .toggle() method
  // hide/ show element depending on current state
  $(".toggle-button").on("click", () => {
    $(".first-image").toggle();
  });

  // .fadeOut() method
  // transition animation before element disappears
  $(".fade-out-button").on("click", () => {
    // default animation duration: 400 milliseconds
    $(".fade-image").fadeOut(500);
  });

  // .fadeIn() method
  // transition animation before element appears
  $(".fade-in-button").on("click", () => {
    $(".fade-image").fadeIn(4000);
  });

  // .fadeToggle() method
  // Fade in invisible element, fade out visible element
  // https://api.jquery.com/fadetoggle/
  $(".fade-toggle-button").on("click", () => {
    $(".fade-image").fadeToggle("fast");
  });

  // .slideUp() method
  $(".up-button").on("click", () => {
    $(".slide-image").slideUp(100);
  });

  // .slideDown() method
  $(".down-button").on("click", () => {
    $(".slide-image").slideDown("slow");
  });

  // .slideToggle() method
  $(".slide-toggle-button").on("click", () => {
    $(".slide-image").slideToggle();
  });
});
