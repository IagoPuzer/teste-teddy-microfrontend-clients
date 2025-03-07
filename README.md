# 🖥️ Microfrontend Clients

Este projeto é um **microfrontend** desenvolvido utilizando [Angular CLI](https://github.com/angular/angular-cli) versão **19.2.0**.

Microfrontends são uma abordagem para dividir uma aplicação frontend monolítica em unidades menores e mais gerenciáveis, permitindo que cada parte seja desenvolvida, testada e implantada de forma independente.

## 📋 Sobre a Aplicação

Esta aplicação é responsável pelo gerenciamento de **clientes** dentro de um ambiente de microfrontends.

### 📌 Funcionalidades Principais

- 📄 **Formulários** para adicionar e editar clientes
- 🗂 **Cards interativos** para exibição de informações resumidas
- 🔍 **Modais** para ações de confirmação e exibição de detalhes
- 📑 **Paginação** para navegação eficiente na lista de clientes
- 🔄 **Integração com APIs** para manter os dados sempre sincronizados

### 🛠 Tecnologias Utilizadas

- **Angular**: 19.2.0
- **RxJS**: 7.5.0
- **Bootstrap**: 5.1.3
- **NgRx**: 14.0.0

## 📦 Instalação

Antes de rodar o projeto, instale as dependências:

```bash
npm install
```

## 🚀 Executando o Servidor de Desenvolvimento

Para iniciar a aplicação localmente, execute:

```bash
ng serve
```

Acesse no navegador:

🔗 [http://localhost:4202/](http://localhost:4202/)

A aplicação será recarregada automaticamente sempre que houver modificações no código-fonte.

## 📦 Build

Para compilar o projeto, execute:

```bash
ng build
```

Isso gerará os arquivos de build dentro do diretório `dist/`, otimizados para produção.

## 🏠 Integração com o Host

Para que o microfrontend funcione corretamente, o **host** da aplicação também precisa estar rodando.

🔗 [Repositório do Host](https://github.com/IagoPuzer/teste-teddy-host)

Se o host não estiver em execução, os módulos remotos do microfrontend não serão carregados corretamente.

## 📝 Notas

- Para rodar localmente, verifique se o host está configurado para carregar os módulos remotos do microfrontend.
- Em produção, o microfrontend será carregado a partir da **Vercel**.
