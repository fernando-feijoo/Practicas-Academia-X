const formValidation = (name, email, message) => {
  if (name != undefined && email != undefined && message != undefined) {
    console.log("¡Formulario enviado con éxito!");
  } else {
    console.error("Por favor completa todos los campos.");
  }
};

function sendInf() {
    const shouldSend = Math.random() < 0.5; // Probabilidad del 50% de enviar los datos
  
    if (shouldSend) {
      var name = "Fernando";
      var email = "fernando95f4@gmail.com";
      var message = "Hola Crack";
      formValidation(name, email, message);
    } else {
      formValidation(name, email, message);
    }
  }

sendInf();
