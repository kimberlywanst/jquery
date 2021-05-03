$(document).ready(() => {
  // Slide hint box
  $(".hint-box").on("click", () => {
    $(".hint").slideToggle(700);
  });

  // Animate wrong answers
  $(".wrong-answer-one").on("click", () => {
    $(".wrong-text-one").fadeOut("fast");
    // Display :( for wrong answer
    $(".frown").show();
  });

  $(".wrong-answer-two").on("click", () => {
    $(".wrong-text-two").fadeOut("fast");
    $(".frown").show();
  });

  $(".wrong-answer-three").on("click", () => {
    $(".wrong-text-three").fadeOut("fast");
    $(".frown").show();
  });

  // Animate correct answer
  $(".correct-answer").on("click", () => {
    $(".frown").hide();
    $(".smiley").show();
    $(".wrong-text-one").fadeOut("fast");
    $(".wrong-text-two").fadeOut("fast");
    $(".wrong-text-three").fadeOut("fast");
  });

  // Reset quiz
  $(".reset").on("click", () => {
    $(".answer-text").show();
    $(".frown").hide();
    $(".smiley").hide();
  });
});
