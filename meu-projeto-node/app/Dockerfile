# Usa a imagem base do Node.js
FROM node:14

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários
COPY package.json ./
COPY server.js ./

# Instala as dependências
RUN npm install

# Exponha a porta configurada pela variável de ambiente
EXPOSE ${PORT}

# Comando para iniciar a aplicação
CMD ["npm", "start"]
