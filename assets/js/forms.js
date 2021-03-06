
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
      loadSpinner("none");
    },
    error: function(err) {
      $(".error-message-expense").css("display", "block");
      fadeOut(".error-message-expense");
      loadSpinner("none");
    }
  })
})

$("#salaryForm").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzvCDGMHAN7d5ce1CiRPXH313iwL05b2bG8OmAoRA/exec",
    data: $("#salaryForm").serialize(),
    type: "POST",
    success: function(response) {
      $(".success-message-salary").css("display", "block");
      $('#salaryForm')[0].reset();
      fadeOut(".success-message-salary");
      loadSpinner("none");
    },
    error: function(err) {
      $(".error-message-salary").css("display", "block");
      fadeOut(".error-message-salary");
      loadSpinner("none");
    }
  })
})

$("#paymentForm").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbz_ltrM0T9lxS6XiZumeGgk_77ae0lsyV6q-vLuBg/exec",
    data: $("#paymentForm").serialize(),
    type: "POST",
    success: function(response) {
      $(".success-message-payment").css("display", "block");
      $('#paymentForm')[0].reset();
      fadeOut(".success-message-payment");
      loadSpinner("none");
    },
    error: function(err) {
      $(".error-message-payment").css("display", "block");
      fadeOut(".error-message-payment");
      loadSpinner("none");
    }
  })
})

$("#promoForm").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzaqhEa4cIXy4IpxOvI4mJ9gbzQa5DImIm0eQYf/exec",
    data: $("#promoForm").serialize(),
    type: "POST",
    success: function(response) {
      $(".success-message-promo").css("display", "block");
      $('#promoForm')[0].reset();
      fadeOut(".success-message-promo");
      loadSpinner("none");
    },
    error: function(err) {
      $(".error-message-promo").css("display", "block");
      fadeOut(".error-message-promo");
      loadSpinner("none");
    }
  })
})

$("#freelanceForm").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbw6jgFpB4hozwet2DFmZabuAFpqZh9QjA0UYDj1cA/exec",
    data: $("#freelanceForm").serialize(),
    type: "POST",
    success: function(response) {
      $(".success-message-freelance").css("display", "block");
      $('#freelanceForm')[0].reset();
      fadeOut(".success-message-freelance");
      loadSpinner("none");
    },
    error: function(err) {
      $(".error-message-freelance").css("display", "block");
      fadeOut(".error-message-freelance");
      loadSpinner("none");
    }
  })
})

$("#memberForm").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwgUdN159kGJ2hdNC-OnyO4vJgEEdcPHUtpgLgJvQ/exec",
    data: $("#memberForm").serialize(),
    type: "POST",
    success: function(response) {
      $(".success-message-member").css("display", "block");
      $('#memberForm')[0].reset();
      fadeOut(".success-message-member");
      loadSpinner("none");
    },
    error: function(err) {
      $(".error-message-member").css("display", "block");
      fadeOut(".error-message-member");
      loadSpinner("none");
    }
  })
})

$("#attendenceForm").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzXV8rh7-p5bzZpak4OjctM5tl0TlsmigSLfWWFg5U0Xbh21j0/exec",
    data: $("#attendenceForm").serialize(),
    type: "POST",
    success: function(response) {
      $(".success-message-attend").css("display", "block");
      $('#attendenceForm')[0].reset();
      fadeOut(".success-message-attend");
      loadSpinner("none");
    },
    error: function(err) {
      $(".error-message-attend").css("display", "block");
      fadeOut(".error-message-attend");
      loadSpinner("none");
    }
  })
})

$('.custom-submit').click(function() {

  loadSpinner("block");
});

function loadSpinner(attribute) {

  $(".cover-spin").css("display", attribute);
  $(".loadingio-spinner-disk-sv1pyzh6et").css("display", attribute);
}

function fadeOut(className) {
  setTimeout(function(){
    $(className).remove();
  }, 6000);
}
