const moduloUsuarios = (() => {
  // Array privado para almacenar los usuarios
  let usuarios = [];
  
  // Método para agregar un usuario
  const agregarUsuario = (nombre) => {
  usuarios.push(nombre);
  console.log(`${nombre} ha sido agregado.`);
  };
  
  // Método para mostrar todos los usuarios
  const mostrarUsuarios = () => {
  console.log("Lista de usuarios:");
  usuarios.forEach((usuario, index) => {
  console.log(`${index + 1}. ${usuario}`);
  });
  };
  
  // Exponer públicamente los métodos que se quieren permitir
  return {
  agregarUsuario,
  mostrarUsuarios
  };
  })();
  
  // Ejemplo de uso
  moduloUsuarios.agregarUsuario('Juan');
  moduloUsuarios.agregarUsuario('Maria');
  moduloUsuarios.mostrarUsuarios();