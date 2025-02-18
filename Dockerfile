# Imagen base con Node.js 20 en Alpine (ligera)
FROM node:20-alpine AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia solo package.json para instalar dependencias 
COPY package.json ./

# Copia el resto del código fuente
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen más ligera para servir la aplicación en producción
FROM node:20-alpine AS production

# Instala un servidor web ligero para servir la app
RUN npm install -g serve

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos generados en la fase de build
COPY --from=build /app/build .

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["serve", "-s", ".", "-l", "3000"]

