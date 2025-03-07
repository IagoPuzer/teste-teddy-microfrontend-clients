# Microfrontend Clients

Este projeto é um microfrontend desenvolvido utilizando [Angular CLI](https://github.com/angular/angular-cli) versão 19.2.0. Microfrontends são uma abordagem para dividir uma aplicação frontend monolítica em unidades menores e mais gerenciáveis, que podem ser desenvolvidas, testadas e implantadas de forma independente.

## 📋 Detalhes da Aplicação

Esta aplicação é responsável por gerenciar clientes em um ambiente de microfrontends. Ela inclui componentes como:

- Formulários de cliente para adicionar e editar informações de clientes
- Cards de cliente para exibir informações resumidas de cada cliente
- Modais para confirmação de ações e exibição de detalhes adicionais
- Paginação para navegação eficiente entre listas de clientes

A aplicação também possui serviços para gerenciar o estado dos clientes e se comunicar com APIs externas, garantindo que os dados estejam sempre atualizados e sincronizados.

### Principais Pacotes Utilizados

- Angular: 19.2.0
- RxJS: 7.5.0
- Bootstrap: 5.1.3
- NgRx: 14.0.0

## 🚀 Servidor de Desenvolvimento

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Uma vez que o servidor esteja em execução, abra seu navegador e navegue até `http://localhost:4202/`. A aplicação será recarregada automaticamente sempre que você modificar qualquer um dos arquivos fonte.

## 📦 Build

Para compilar o projeto, execute:

```bash
ng build
```

Isso irá compilar o projeto e armazenar os artefatos de build no diretório `dist/`. Por padrão, o build de produção otimiza a aplicação para performance e velocidade.
