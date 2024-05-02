// Función para obtener datos de una API
async function obtenerDatosDeAPI() {
    try {
        console.log('Iniciando solicitud a la API...');
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('La respuesta de la red no fue correcta');
        }

        // Convierte la respuesta a formato JSON
        const data = await response.json();
        console.log('Datos obtenidos de la API:', data);

        // Devuelve los datos obtenidos
        return data;
    } catch (error) {
        // Maneja cualquier error en la solicitud a la API
        console.error('Hubo un problema con la solicitud:', error);
        return null;
    }
}

// Mostrar datos después de un tiempo
async function mostrarDatosDespuesDeTiempo() {
    const tiempoEspera = 3000; // Tiempo de espera en milisegundos

    // Obtener datos de la API
    const datos = await obtenerDatosDeAPI();

    if (datos) {
        console.log(`Esperando ${tiempoEspera / 1000} segundos para mostrar los datos...`);

        // Esperar el tiempo especificado antes de mostrar los datos obtenidos
        setTimeout(() => {
            console.log('Datos después del tiempo de espera:', datos);
        }, tiempoEspera);
    }
}

// Iniciar el proceso para mostrar datos después de un tiempo
mostrarDatosDespuesDeTiempo();
