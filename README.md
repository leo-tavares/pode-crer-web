# Pode crer web

<p align="center">
<img  style="border-radius: 8px; width:50%;" src="./docs/readme_intro.gif"/>
</p>

# Índice
- [Introdução](#introdução)
- [Quais as tecnologias usamos no projeto](#quais-as-tecnologias-usamos-no-projeto)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [🤔 Como contribuir?](#como-contribuir)
  - [🤔 fiz um fork como pegar as atualizações?](#como-pegar-atualizações-a-partir-de-um-fork)

# Introdução

O ideia é construir uma platafarma para realização de sonhos, as pessas podem criar seus projetos em busca de recursos para alcançar seus desejos. Com o pode-crer-web você vai poder tanto ajudar quanto ser ajudado.

# Quais as tecnologias usamos no projeto

- [Reactjs](https://reactjs.org/)
- [hooks](https://reactjs.org/docs/hooks-intro.html)
- [Yup](https://github.com/jquense/yup)
- [unform](https://unform.dev/)
- [Context api](https://pt-br.reactjs.org/docs/context.html)
- [styled-components](https://styled-components.com/)

# Como rodar o projeto

Para conseguir executar o projeto é necessário tem em tua maquina:

- [NodeJs](https://nodejs.org/en/) ( desenvolvido com node na versão 12+ )
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- Conhecimento _básico_ sobre variáveis de ambiente com arquivo ".env" ( [material de apoio](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs) )
- O projeto backend do sistema ( [link](https://github.com/Vitor-Vaz/pode-crer-backend) )


## Primeiro Passo

- Instale todas as dependências do projeto com o comando `yarn install`
- Agora devemos "cadastrar" algumas variáveis para nossa aplicações funcionar corretamente
  - Copie e cole na raiz do projeto o arquivo ".env.example", em seguida renomeie para ".env".
  - configure o valor de REACT_APP_API_URL para o endereço local da api ( por exemplo `http://localhost:8001` ). Esse valor é usado pela axios para termos acesso ao sistema backend
## Segundo Passo

- Execute o script de start com `yarn start`, caso enfrente algum problema pode resetar o chace `yarn start --reset-cache`

# Como contribuir

- Primeiro faça um clone do projeto

```bash
  git clone https://github.com/leo-tavares/pode-crer-web.git
```

- Agora crie uma nova branch com o seu nome ou com a feature que você deseja criar/corrigir.
Uma abordagem é o `git branch` + `git switch`

```bash
  git branch NOME-DA-BRANCH
  git switch NOME-DA-BRANCH
```
Você tambem pode fazer

```bash
  git checkout -b NOME-DA-BRANCH
```

- Faça **todas** as modificações necessárias e de o commit

```bash
  git commit -m "implemetação da funcionalidade X"
```

Se você encontrou algua issue relacionado você pode criar um link na tua mensagem de commmit usando '#' seguido pelo numero da issue.
Dessa forma o commit será linkado automaticamente na issue :smiley:

```bash
  git commit -m "implemetação da funcionalidade X #25"
```

- Após o(s) commit(s), basta enviar as modificações para o servidor

```bash
  git push origin NOME-DA-BRANCH
```

## Como pegar atualizações a partir de um fork

Se você optou por fazer um fork saiba que ele funciona como um novo repositório, isso quer dizer que o "endereço" do origin é diferente do repositório de origem.

Uma abordagem interessante é você adicionar uma "remote url", abaixo deixo uma sugestão

```bash
  git remote add repoOriginal https://github.com/leo-tavares/pode-crer-web.git
```

agora quando você pode dar pull diretamente do repositorio original.

```bash
  git pull repoOriginal NOME-DA-BRANCH
```

Se você quiser pegar uma atualização do branch main pode fazer algo do tipo

```bash
  git pull repoOriginal main
```

O mesmo se aplica para o push... mas... nesse caso o ideal é fazer um pullrequest... mas se ainda sim você quiser podes fazer algo do tipo

```bash
  git push repoOriginal NOME-DA-BRANCH
```
**O ideal é nunca commitar diretamente na branch main, eu dei um exemplo **
