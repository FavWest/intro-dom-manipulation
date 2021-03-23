$(document).ready(function () {
  $("button#hello").click(function () {
    $("ul#you-said").prepend("<li>Hello!</li>");
    $("ul#HAL-said").prepend("<li>Greetings, Human!</li>");
    $("ul#you-said").children("li").first().click(function () {
      (this).remove();
    })
    $("ul#HAL-said").children("li").first().click(function () {
      (this).remove();
    })
  });

  $("button#goodbye").click(function () {
    $("ul#you-said").prepend("<li>Goodbye!</li>");
    $("ul#HAL-said").prepend("<li>Goodbye</li>");
  });

  $("button#stop").click(function () {
    $("ul#you-said").prepend("<li>Stop copying me!</li>");
    $("ul#HAL-said").prepend("<li>I can't do that, Dave.</li>");
  });
});
