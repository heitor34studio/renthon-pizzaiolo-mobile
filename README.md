
![logo-png](https://github.com/user-attachments/assets/82e0430f-b09b-4d7c-9f18-76abe6830b10)

# Renthon Pizzaiolo MOBILE
![JavaScript Badge](https://img.shields.io/badge/JavaScript-ffff00?style=for-the-badge&logo=JavaScript&logoColor=black) ![NodeJS Badge](https://img.shields.io/badge/NodeJS-88cc34?style=for-the-badge&logo=nodedotjs&logoColor=black) ![TypeScrypt Badge](https://img.shields.io/badge/TypeScrypt-387ccc?style=for-the-badge&logo=typescript&logoColor=white) ![React Badge](https://img.shields.io/badge/React_Native-183c54?style=for-the-badge&logo=react&logoColor=white) ![Expo Badge](https://img.shields.io/badge/Expo-100c24?style=for-the-badge&logo=Expo&logoColor=white) ![SCSS Badge](https://img.shields.io/badge/scss-fb0960?style=for-the-badge&logo=sass&logoColor=white)

A parte do Mobile do RenthonPizzaiolo é construída com React e Sass, proporcionando uma interface interativa e estilizada para a aplicação de criação de Pedidos (garçom). Ele se comunica com a API RESTful do backend para realizar operações de criação, listagem, atualização e exclusão de Pedidos.

## Índice 

* [Título e Descrição](#Renthon-Pizzaiolo-BACKEND)
* [Índice](#índice)
* [Funcionalidades do Projeto](#-funcionalidades-do-projeto)
* [Tecnologias Utilizadas](#%EF%B8%8F-técnicas-e-tecnologias-utilizadas)
* [Acesso ao Projeto](#-acesso-ao-projeto)
* [Abrir e Rodar o Projeto](#%EF%B8%8F-abrir-e-rodar-o-projeto)
* [Detalhamento do Código](#-detalhamento-do-código)

## 🔨 Funcionalidades do projeto

O Mobile do Renthon Pizzaiolo oferece as seguintes funcionalidades:

- Geração de Interfaces para interagir com o usuário.
- Interfaces de: login, cadastro de Pedidos informando a mesa, inserção de itens no pedido, e confirmação de envio do Pedido.

## ✔️ Técnicas e tecnologias utilizadas

- **`NodeJS`**: Ambiente de execução que permite executar JavaScript no servidor, facilitando o desenvolvimento de aplicações web escaláveis e eficientes.
- **`TypeScript`**: Superset do JavaScript que adiciona tipagem estática, melhorando a segurança do código e a produtividade do desenvolvimento com recursos como autocompletar e verificação de tipos em tempo de compilação.
- **`React Native`**: Biblioteca JavaScript para construção de interfaces de usuário, permitindo criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente.
- **`Sass`**: Pré-processador CSS que adiciona recursos como variáveis, aninhamento e mixins, facilitando a criação de estilos organizados e reutilizáveis para a aplicação.
- **`Expo`**: Plataforma para desenvolvimento de aplicações móveis com React Native, que oferece um conjunto de ferramentas e serviços para facilitar o desenvolvimento, teste e implantação de apps.

## 📁 Acesso ao projeto

Você pode ver o código fonte rodando [aqui](https://renthon-pizzaiolo-mobile.vercel.app).

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto, siga os seguintes passos:

1. Clone o repositório para o seu ambiente local:
    ```sh
    git clone https://github.com/heitor34studio/renthon-pizzaiolo-mobile.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd RenthonPizzaioloMobile;
    ```

3. Execute o projeto:
    ```sh
    npx expo start
    ```

## Detalhamento do código

O código React Native fornecido implementa uma interface para gerenciamento de uma pizzaria e seus pedidos.

#### assets/ e src/assets
Diretório que guarda imagens que serão utilizadas na interface do usuário.

#### src/components/ListItem/index.tsx
Componente que exibe um item da lista com a quantidade e o nome, e permite a exclusão do item.

#### src/components/ModalPicker/index.tsx
Componente modal que exibe uma lista de opções, permitindo selecionar uma categoria e fechar o modal.

#### src/contexts/AuthContext.tsx
Contexto de autenticação que gerencia o estado do usuário, incluindo login, logout e persistência de dados.

#### src/pages/Dashboard/index.tsx
Página do dashboard que gerencia a abertura de novas ordens e permite o logout do usuário.

#### src/pages/FinishOrder/index.tsx
Página para finalizar um pedido, enviando uma requisição para o backend e retornando ao início.

#### src/pages/Order/index.tsx
Página para gerenciar pedidos, incluindo seleção de categorias, produtos, quantidade e envio final.

#### src/pages/Signin/index.tsx
Tela de login onde o usuário pode inserir seu e-mail e senha para acessar o aplicativo.

#### src/routes/app.routes.tsx
Configuração das rotas da aplicação usando um stack navigator. Define as telas principais e suas propriedades, como a visibilidade do cabeçalho.

#### src/routes/auth.routes.tsx
Configuração das rotas de autenticação utilizando um stack navigator. Define a tela de login da aplicação.

#### src/routes/index.tsx
Gerenciamento das rotas da aplicação, alternando entre rotas de autenticação e rotas do aplicativo principal com base no estado de autenticação.

#### src/services/api.ts
Configuração da instância do Axios para fazer requisições à API.

#### App.tsx
Componente inicializador da aplicação, que gera um tela branca com um símbolo de carregamento, para indicar ao usúario que a aplicação está inializando

### Exemplo de Uso
Ao executar o programa, o usuário acessa a página de login. Ao logar ele é redirecionado para a página de criação de um novo Pedido, onde deve informar a mesa do cliente. Seguindo, selecionando as devidas categorias, ele deve selecionar os itens que constituem o pedido do cliente, junto com sua quantidade, para então redirecionar para a página de confirmação. E com o cliente confirmando que não quer alterar nada no pedido, o garçom confirma e envia o pedido para a cozinha, se o cliente quiser mudar algo no pedido, o garçom pode voltar alterar, e continuar novamente.

---

Este é o README atualizado para o MOBILE do projeto Renthon Pizzaiolo. Ele fornece uma visão geral do projeto, suas funcionalidades, tecnologias utilizadas e como acessar e rodar o projeto. Para mais detalhes, você pode explorar os arquivos do código fonte mencionados.
