# Etapa de build usando a imagem do Go
FROM golang:1.19-alpine AS builder

# Etapa de build usando a imagem do Go
FROM golang:1.19-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copie o código Go para o contêiner
COPY main.go .

# Inicialize o módulo Go (mesmo sem dependências externas, isso é necessário)
RUN go mod init meu-app

# Compile o código Go em um binário estático
RUN go build -o meu-app

# Etapa final com uma imagem leve
FROM alpine:latest

# Copie o binário da etapa de build para a imagem final
COPY --from=builder /app/meu-app /meu-app

# Defina o comando para rodar o aplicativo
CMD ["/meu-app"]
