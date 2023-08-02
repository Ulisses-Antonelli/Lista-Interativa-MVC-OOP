# Lista Interativa - Implementação MVC e JavaScript Orientado a Objetos

Este repositório contém um aplicativo simples de uma lista interativa implementando a arquitetura MVC (Model-View-Controller) e escrito em JavaScript com uma abordagem orientada a objetos. O aplicativo permite que os usuários adicionem e marquem itens de uma lista como concluídos alterando sua cor quando o checkbox é acionado.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)

## Arquitetura MVC

O aplicativo segue o padrão arquitetural MVC (Model-View-Controller) para manter uma clara separação de responsabilidades e melhorar a organização do código. Aqui está uma breve visão geral de cada componente:

### Model (Modelo)

O Model representa os dados e a lógica de negócio da aplicação. Neste projeto, a classe `interactiveListModel` armazena e manipula os itens da lista.

### View (Visualização)

A View é responsável por apresentar a interface do usuário aos usuários e exibir os itens da lista. Neste projeto, a classe `interactiveListView` lida com os elementos do DOM, como a caixa de entrada de novos itens e a lista exibida na página.

### Controller (Controlador)

O Controller atua como intermediário entre o Model e a View, tratando a interação do usuário e atualizando o Model de acordo. Neste projeto, a classe `interactiveListController` vincula manipuladores de eventos ao botão de adicionar item e gerencia as ações de marcação dos itens da lista como concluídos.

## Como Começar

Para executar a Lista Interativa localmente, siga os seguintes passos:

1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` em seu navegador da web.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

## Contribuição

Contribuições para este projeto são bem-vindas. Sinta-se à vontade para abrir issues e enviar pull requests.

---

O objetivo de implementar a Lista Interativa com a arquitetura MVC e a abordagem orientada a objetos é meramente um exercício de aprendizado. O projeto foi desenvolvido com o intuito de compreender melhor os princípios da arquitetura MVC e da programação orientada a objetos em JavaScript, bem como as técnicas de implementação de uma lista interativa.
