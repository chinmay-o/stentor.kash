
$("#expense-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyizULKbrKjJYUUwTmG9AFYWmys6AgmOhiTS4HblRzbdM0KMwQ/exec",
    data: $("#expense-form").serialize(),
    type: "POST",
    success: function(response) {
      $(".success-message-expense").css("display", "block");
      $('#expense-form')[0].reset();
      fadeOut(".success-message-expense");
    },
    error: function(err) {
      $(".error-message-expense").css("display", "block");
      fadeOut(".error-message-expense");
    }
  })
})




function fadeOut(className) {
  setTimeout(function(){
    $(className).remove();
  }, 6000);
}
