# 🏠 Host - Microfrontend

Este repositório serve como **host** para uma arquitetura de microfrontends. Ele é responsável por carregar dinamicamente os microfrontends e inclui **os layouts das aplicações e a página inicial de login**.

## 📦 Instalação

Antes de rodar o projeto, instale as dependências necessárias:

```bash
npm install
```

## 🚀 Executando o Servidor de Desenvolvimento

Para iniciar o servidor localmente, execute:

```bash
ng serve
```

Depois, acesse no navegador:

🔗 [http://localhost:4200/](http://localhost:4200/)

A aplicação será recarregada automaticamente sempre que houver modificações no código-fonte.

## ⚙️ Configuração para Desenvolvimento Local

Para rodar corretamente o microfrontend localmente, é necessário modificar o arquivo `federation.manifest.json`, localizado na pasta `public`.

Altere a rota do microfrontend para o ambiente local:

```json
{
  "mfe1": "http://localhost:4202/remoteEntry.json"
}
```

⚠️ **Importante:** Não commite este arquivo!

No ambiente de produção, o arquivo `federation.manifest.json` deve conter a URL do microfrontend hospedado na Vercel:

```json
{
  "mfe1": "https://teste-teddy-microfrontend-clients.vercel.app/remoteEntry.json"
}
```

Se este arquivo for commitado com a configuração local, o deploy na **Vercel** pode ser comprometido.

## 🐳 Executando com Docker

A aplicação está **dockerizada**, permitindo a execução de forma isolada.

### Criando e executando o container:

```bash
docker compose up --build
```

### Parando os containers:

```bash
docker compose down
```

## 🔗 Integração com o Microfrontend

Para o host carregar corretamente o microfrontend, o repositório do **microfrontend clients** deve estar rodando simultaneamente.

🔗 [https://github.com/IagoPuzer/teste-teddy-microfrontend-clients](https://github.com/IagoPuzer/teste-teddy-microfrontend-clients)

Caso o microfrontend não esteja rodando, a aplicação host pode falhar ao carregar os componentes remotos.

## 📝 Notas Importantes

- **Não commite o arquivo `federation.manifest.json` com a configuração local.**
- O microfrontend precisa estar rodando para que o host carregue corretamente.
- Se houver problemas no carregamento, verifique se os serviços do host e do microfrontend estão rodando corretamente.
- Caso utilize **Docker**, garanta que as configurações de rede permitam a comunicação entre os containers.
