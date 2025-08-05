function check() {
  const msg = document.getElementById("mensagem");

  if (
    document.forms[0].elements[0].checked === true &&
    document.forms[0].elements[1].checked === true &&
    document.forms[0].elements[2].checked === true
  ) {
    if (!$('.wrapper').hasClass('throb')) {
      $('.wrapper').addClass('throb');
    }

    // Mostrar a mensagem
    msg.style.display = "block";

  } else {
    if ($('.wrapper').hasClass('throb')) {
      $('.wrapper').removeClass('throb');
    }

    // Esconder a mensagem
    msg.style.display = "none";
  }
}
