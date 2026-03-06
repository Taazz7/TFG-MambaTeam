# Usamos Node 20 (LTS) como base
FROM node:20-slim

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto que usa Vite por defecto
EXPOSE 5173

# Comando para lanzar el modo desarrollo
CMD ["npm", "run", "dev"]