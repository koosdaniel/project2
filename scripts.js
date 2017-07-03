var strictColor = false;

$(document).ready(function() {

  $(".color").mouseenter(function(){
      $("#big").css("background-color", $(this).css("background-color"));
      strictColor = false;
  });

  $(".color").mouseleave(function(){
    if (strictColor === false) {
        $("#big").css("background-color","red");
    }
  });

  $(".color").click(function(){
      $("#big").css("background-color",$(this).css("background-color"));
      strictColor = true;
  });
  
});
