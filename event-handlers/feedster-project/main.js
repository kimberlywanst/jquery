$(document).ready(() => {
  // Hover Functionality to the Navigation Menu
  $(".menu").on("mouseenter", () => {
    $(".nav-menu").show();
  });

  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
  });

  //  hover functionality to the +1 button elements
  $(".btn")
    .on("mouseenter", (event) => {
      $(event.currentTarget).addClass(".btn-hover");
    })
    .on("mouseleave", (event) => {
      $(event.currentTarget).removeClass(".btn-hover");
    });

  // autofocus on textarea on page load
  $(".postText").focus();

  // Limit a User's Post to 140 Characters
  $(".postText").on("keyup", (event) => {
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;

    // update UI with character count
    $(".characters").html(remaining);

    if (remaining <= 0) {
      $(".wordcount").addClass("red");
    } else {
      $(".wordcount").removeClass("red");
    }
  });
});
