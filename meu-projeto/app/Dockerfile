# Use a imagem base do Node.js
FROM node:14

# Define o diretório de trabalho
WORKDIR /app

# Copie os arquivos necessários
COPY package.json ./
COPY server.js ./

# Instale as dependências
RUN npm install

# Exponha a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
