import validarCorreo from "./verificacion.js";

function generarCorreoAleatorio() {
  var caracteres =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var correo = "";
  // Generar una cadena aleatoria para el correo
  for (var i = 0; i < 10; i++) {
    correo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  // Determinar si el correo será válido o no con un 50% de probabilidad
  var esValido = Math.random() < 0.5;
  if (esValido) {
    correo += "@dominio.com"; // Agregar un dominio válido
  } else {
    correo += "@dominio"; // Agregar un dominio inválido
  }
  return correo;
}

// Generar un correo aleatorio
var correo = generarCorreoAleatorio();
// Valida el correo aleatorio, enviando a la función importada
var validacion = validarCorreo(correo);
// Resultados
console.log("El correo:", correo);
console.log("Validación:", validacion);
