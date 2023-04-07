$(document).ready(function () {
  $("#carousel-images").slick({
    autoplay: true,
  });

  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });

  $("#phone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      vehicleInterest: {
        required: false,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let incorrectsFields = validador.numberOfInvalids();
      if (incorrectsFields) {
        alert(`Existem ${incorrectsFields} campos incorretos`);
      }
    },
  });

  $(".list-vehicles button").click(function () {
    const destiny = $("#contact");

    const nameVehicle = $(this).parent().find("h3").text();

    $("#vehicle-interest").val(nameVehicle);

    $("html").animate(
      {
        scrollTop: destiny.offset().top,
      },
      1000
    );
    $("#name").val("");
    $("#phone").val("");
    $("#email").val("");
    $("#message").val("");
  });
});
