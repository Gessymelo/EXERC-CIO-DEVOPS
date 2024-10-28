Exercício 1 meu-servidor-nginx: Criação de uma Imagem com um Servidor Web SimplesObjetivo:
Crie um Dockerfile que gere uma imagem com um servidor web simples usando o NGINX. O servidor deverá servir uma página HTML personalizada.

Requisitos:A imagem base deve ser nginx:latest.A página HTML deve estar no diretório /usr/share/nginx/html/ da imagem.O arquivo da página HTML deve ter o texto: "Hello, Docker!".

Exercício 2 meu-script-python: Criação de uma Imagem com um Script PythonObjetivo:
Crie um Dockerfile que execute um script Python simples que imprime "Olá, Docker!" no terminal.

Requisitos:A imagem base deve ser python:3.9-alpine.O Dockerfile deve copiar um script Python que imprime uma mensagem e o executar no container.O script deve rodar automaticamente quando o container iniciar.

Exercício 3 meu-projeto : Docker Compose com Redis e Web ApplicationObjetivo:
Crie um docker-compose.yml que execute dois serviços: um serviço Redis e um serviço web (em Node.js) que se conecte ao Redis.

Requisitos:Um serviço deve rodar o Redis usando a imagem redis:latest.O outro serviço deve rodar uma aplicação web em Node.js que se conecta ao Redis para armazenar contagens de visitas.A aplicação Node.js deve ser iniciada por meio de um script server.js

Exercício 4 meu-app-go: Multistage Build para Aplicação GoObjetivo:
Crie um Dockerfile que faça o build de uma aplicação Go e execute o binário resultante em uma imagem final leve.

Requisitos:A imagem deve ser multistage, usando uma imagem do Go para compilar e uma imagem final mais leve para rodar o binário.O aplicativo Go deve imprimir "Docker Multistage Build!" no terminal.

Exercício 5 meu-projeto-node: Usando Variáveis de Ambiente no Docker ComposeObjetivo:
Crie um docker-compose.yml para uma aplicação Node.js, que usa variáveis de ambiente para configurar o nome de um banco de dados e a porta de execução.

Requisitos:O docker-compose.yml deve usar variáveis de ambiente para definir a porta do serviço web e o nome do banco de dados.O arquivo server.js deve ler essas variáveis de ambiente para exibir a configuração.
