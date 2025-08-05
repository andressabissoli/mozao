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

    // Trocar o texto do span
    msg.textContent = "infinito elevado a infinito ♾️";

  } else {
    if ($('.wrapper').hasClass('throb')) {
      $('.wrapper').removeClass('throb');
    }

    // Voltar o texto original
    msg.textContent = "(Click on words)";
  }
}
