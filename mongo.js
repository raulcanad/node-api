import { connect, Schema, model, connection } from 'mongoose';

// URL de conexión a MongoDB (reemplaza <tu_usuario>, <tu_contraseña> y <nombre_base_datos>)
const mongoURL = 'mongodb://localhost:27017/nombre_base_datos'; // Cambia esto si usas MongoDB Atlas u otro servidor

// Conéctate a MongoDB
connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Define un esquema (estructura) de ejemplo
const usuarioSchema = new Schema({
  nombre: String,
  edad: Number,
  email: String,
});

// Crea un modelo basado en el esquema
const Usuario = model('Usuario', usuarioSchema);

// Función para obtener usuarios
async function obtenerUsuarios() {
  try {
    // Consulta para obtener todos los documentos de la colección 'usuarios'
    const usuarios = await Usuario.find();
    console.log('Usuarios encontrados:', usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  } finally {
    // Cierra la conexión a la base de datos
    connection.close();
  }
}

// Llama a la función para ejecutar la consulta
obtenerUsuarios();
