# 🏗️ Microfrontend Clients

Este projeto é um **microfrontend** desenvolvido utilizando [Angular CLI](https://github.com/angular/angular-cli) versão **19.2.0**.

Microfrontends permitem dividir uma aplicação frontend monolítica em **unidades menores e independentes**, facilitando o desenvolvimento, testes e implantação modular.

## 📋 Sobre a Aplicação

Este microfrontend é responsável pela **gestão de clientes** dentro da arquitetura de microfrontends. Ele inclui funcionalidades como:

✔️ **Formulários de Cliente** – Adicionar e editar informações dos clientes.  
✔️ **Cards de Cliente** – Exibir informações resumidas de cada cliente.  
✔️ **Modais Interativos** – Para confirmação de ações e exibição de detalhes adicionais.  
✔️ **Paginação Dinâmica** – Para navegação eficiente entre listas de clientes.  
✔️ **Serviços de API** – Comunicação com APIs externas para manter os dados sincronizados.

### 📦 Principais Dependências

- **Angular**: 19.2.0
- **RxJS**: 7.5.0
- **Bootstrap**: 5.1.3
- **NgRx**: 14.0.0

## 🚀 Executando o Servidor de Desenvolvimento

### 1️⃣ Instale as dependências

Antes de rodar o projeto, instale as dependências necessárias:

```bash
npm install
```

### 2️⃣ Inicie o servidor

Para rodar a aplicação localmente, utilize:

```bash
ng serve
```

Depois, acesse pelo navegador:

🔗 [http://localhost:4202/](http://localhost:4202/)

A aplicação será recarregada automaticamente a cada modificação no código.

## 🐳 Executando com Docker

A aplicação está **dockerizada**, permitindo sua execução sem necessidade de configurações manuais.

**OBS**: Apesar de não apresentar nenhum erro aparante não é possivel acessar as rotas pelo docker, o Docker Container é criado normalmente porém não esta sendo feito o expose da imagem.

### Criando e executando o container:

```bash
docker compose up
```

### Parando os containers:

```bash
docker compose down
```

## 🔗 Integração com o Host

Este microfrontend **deve estar rodando** para que o host possa consumi-lo corretamente. O host pode ser encontrado no seguinte repositório:

🔗 [https://github.com/IagoPuzer/teste-teddy-host](https://github.com/IagoPuzer/teste-teddy-host)

Caso o host não consiga carregar o microfrontend, verifique se a configuração do arquivo `federation.manifest.json` está correta:

```json
{
  "remoteEntry": "http://localhost:4202/remoteEntry.json"
}
```

## 📝 Notas Importantes

- Este microfrontend **não é um projeto independente** – ele precisa ser integrado ao host para funcionar corretamente.
- Certifique-se de que a **porta 4202** está livre antes de rodar o servidor local.
- Se houver problemas no carregamento, confira se os serviços do host e do microfrontend estão rodando corretamente.
- Caso utilize **Docker**, garanta que as configurações de rede permitam a comunicação entre os containers.
