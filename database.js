import { createConnection } from 'mysql2';

// Configura la conexión a la base de datos
const connection = createConnection({
  host: 'localhost',       // Host de la base de datos
  user: 'tu_usuario',      // Usuario de la base de datos
  password: 'tu_contraseña', // Contraseña del usuario
  database: 'nombre_base_datos' // Nombre de la base de datos
});

// Conéctate a la base de datos
connection.connect((err) => {
  if (err) {
    return console.error('Error de conexión: ' + err.message);
  }
  console.log('Conectado a la base de datos.');
});

// Realiza una consulta simple
connection.query('SELECT * FROM nombre_tabla', (error, results, fields) => {
  if (error) {
    console.error('Error en la consulta: ' + error.message);
    return;
  }

  // Muestra los resultados de la consulta
  console.log('Resultados:', results);
});

// Cierra la conexión
connection.end((err) => {
  if (err) {
    return console.error('Error al cerrar la conexión: ' + err.message);
  }
  console.log('Conexión cerrada.');
});
