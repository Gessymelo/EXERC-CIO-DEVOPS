# Projetos Docker

Este repositório contém uma série de exercícios para aprender a usar Docker com diferentes configurações e tecnologias.

## Exercícios

### [Exercício 1: meu-servidor-nginx](meu-servidor-nginx)

**Objetivo:** Criação de uma imagem com um servidor web simples usando o NGINX.  
**Requisitos:**  
- A imagem base deve ser `nginx:latest`.
- A página HTML deve estar no diretório `/usr/share/nginx/html/` da imagem.
- O arquivo da página HTML deve ter o texto: `"Hello, Docker!"`.

### [Exercício 2: meu-script-python](meu-script-python)

**Objetivo:** Criação de uma imagem com um script Python que imprime "Olá, Docker!" no terminal.  
**Requisitos:**  
- A imagem base deve ser `python:3.9-alpine`.
- O Dockerfile deve copiar um script Python que imprime a mensagem e o executa no container.

### [Exercício 3: meu-projeto](meu-projeto)

**Objetivo:** Docker Compose com Redis e uma aplicação web em Node.js que se conecta ao Redis.  
**Requisitos:**  
- Um serviço deve rodar o Redis usando a imagem `redis:latest`.
- O outro serviço deve rodar uma aplicação web em Node.js que se conecta ao Redis para armazenar contagens de visitas.
- A aplicação Node.js deve ser iniciada por meio de um script `server.js`.

### [Exercício 4: meu-app-go](meu-app-go)

**Objetivo:** Criação de uma imagem Docker multistage para uma aplicação Go.  
**Requisitos:**  
- A imagem deve ser multistage, usando uma imagem do Go para compilar e uma imagem final mais leve para rodar o binário.
- O aplicativo Go deve imprimir "Docker Multistage Build!" no terminal.

### [Exercício 5: meu-projeto-node](meu-projeto-node)

**Objetivo:** Usando variáveis de ambiente no Docker Compose para uma aplicação Node.js.  
**Requisitos:**  
- O docker-compose.yml deve usar variáveis de ambiente para definir a porta do serviço web e o nome do banco de dados.
- O arquivo `server.js` deve ler essas variáveis de ambiente para exibir a configuração.
