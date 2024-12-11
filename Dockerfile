# Usar la imagen base de Node.js
FROM node:16

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar el package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Exponer el puerto 3000 (puerto en el que corre la app)
EXPOSE 3000

# Ejecutar la aplicación cuando se inicie el contenedor
CMD ["node", "index.js"]
