# Usar una imagen base de Node.js (elige la versión que necesitas)
FROM node:18 AS build

# Directorio de trabajo
WORKDIR /app

# Copiar el archivo de configuración de dependencias (backend y frontend)
COPY package*.json ./

# Instalar dependencias del backend (si tienes un servidor backend Node.js)
RUN npm install

# Copiar el código fuente de tu frontend y backend
COPY . .

# Construir el proyecto frontend (si estás usando Next.js)
WORKDIR /app/src

# Instalar las dependencias de Next.js
RUN npm install

# Ejecutar la construcción del frontend (si usas Next.js)
RUN npm run build

# Exponer el puerto en el que la app escuchará
EXPOSE 3000

# Iniciar el servidor de Node.js y la aplicación de Next.js
CMD ["npm", "run", "dev"]

#docker build -t my-node-api  
#Una vez que la imagen se haya creado docker run -p 3000:3000 my-node-api en terminal , yo tengo herramientas del trabajo y no quiero interferir con mi wsl 
# o instalar por ahora docker desktop , son elementos que provee mi empresa y está monitorizado su uso. 
#Para demostrar que he instaldo docker docker --version
#Verificar contenedores  en ejecucioin docker ps (Para usar permisos de administracion tengo que pedir permisos a otro departamento)
