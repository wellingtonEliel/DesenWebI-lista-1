# DesenWebI-lista-2024

Lista de exercícios para os alunos praticarem programação web na disciplina Desenvolvimento Web I no curso de ciência da computação do IFC Videira

## Estrutura de diretórios

Crie a estrutura de diretórios abaixo para organizar os exercícios:

```
DesenWebI-lista-2024
│   README.md
│
└───exercicios
│   │
│   └───exercicio-xx
│   │   │   index.html
│   │   │   style.css
│   │   │   main.js
│   │   │   ...
│   │
```

## Instruções

Para cada exercício, crie um diretório `exercicio-xx` onde `xx` é o número do exercício. Dentro do diretório, crie os arquivos `index.html`, `style.css`, `main.js` e demais recursos para a solução do exercício.

Além disso, siga essas boas práticas em todos os exercícios:
   - [x] Adicionar meta tags para a codificação do documento (UTF-8), viewport.
   - [x] Adicionar responsividade ao sistema para ser acessível em dispositivos móveis.
   - [x] Normalizar o estilo do sistema com CSS. Pode usar uma biblioteca externa para isso ou normalizar pelo menos os espaçamentos e tamanhos de fonte.
   - [x] Usar tags semânticas no HTML.
   - [x] Adicionar um favicon ao sistema.
   - [x] Usar [funções puras no JavaScript]([https://](https://medium.com/@allangrds/o-que-%C3%A9-uma-fun%C3%A7%C3%A3o-pura-em-javascript-2b34edcad8e2)) sempre que possível.
   - [x] Não usar frameworks ou bibliotecas externas, apenas HTML, CSS e JavaScript puro.

## Exercícios

1. Criar um sistema web para uma lista de tarefas. O sistema deve permitir adicionar, remover e marcar como concluída uma tarefa. Além disso, faça:
   - [x] Adicionar um campo de texto para filtrar as tarefas por nome.
   - [x] Armazenar as tarefas no `localStorage` para que elas não sejam perdidas ao recarregar a página.
   - [x] Popular a lista de tarefas com alguns dados fictícios, caso o `localStorage` esteja vazio.
   - [x] Adicionar animações de transição ao adicionar, remover e marcar como concluída uma tarefa.
   - [x] Identificar as tarefas concluídas de alguma maneira.
   - [x] Adicionar uma família de fonte externa ao sistema. Pode ser do Google Fonts ou de outra fonte de sua escolha.
   - [x] Adicionar a opção de escolher entre temas claro e escuro. Salvar a escolha no `localStorage`.
   - [x] **Acessibilidade**: respeitar o critério 1.3.1 sobre informações e relações da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).
   - [x] **Acessibilidade**: respeitar o critério 2.1.1 sobre teclado da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).

2. A página picsum.photos contém uma API que retorna imagens aleatórias. Crie um sistema web que tenha um formulário para o usuário informar a largura e a altura da imagem que deseja e a quantidade de imagens (escolher entre 3, 5, 10 ou 20). Ao clicar em um botão, o sistema deve exibir as imagens retornadas pela API. O resultado deve ser organizado como um grid de imagens. Permita que o usuário possa baixar a imagem que desejar em tamanho Full HD. As imagens precisam estar no formato `webp`. Leia a documentação da API para saber como fazer a requisição: [https://picsum.photos/](https://picsum.photos/). Além disso, faça:
   - [x] Adicionar validação de formulário para os campos de largura, altura e quantidade de imagens. Caso o usuário informe um valor inválido, exibir uma mensagem de erro. Use html5 e/ou JavaScript para fazer a validação. Traga valores padrões para os campos.
   - [x] Adicionar um botão/link para copiar o link da imagem. Use a API `navigator.clipboard` para fazer isso.
   - [x] Adicionar um botão/link para compartilhar a imagem no WhatsApp, por e-mail ou outra rede social.
   - [x] **Acessibilidade**: respeitar o critério 1.1.1 sobre conteúdo não textual da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).
   - [x] **Acessibilidade**: respeitar o critério 1.4.3 sobre contraste mínimo da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).
   - [x] **Acessibilidade**: respeitar o critério 2.4.4 sobre foco visível da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).

3. Criar um sistema web que permita ao usuário tirar uma foto com a câmera do dispositivo e marcar a localização da foto em um mapa. O sistema deve exibir a foto tirada e a localização no mapa. Além disso, faça:
   - [x] Adicionar um botão para tirar a foto. Use a API `navigator.mediaDevices.getUserMedia` para acessar a câmera do dispositivo. Caso o dispositivo não tenha câmera, permitir que o usuário faça o upload de uma foto.
   - [x] Adicionar um botão para marcar a localização da foto no mapa. Use a API `navigator.geolocation` para acessar a localização do dispositivo. Caso o dispositivo não tenha GPS, permitir que o usuário informe a localização manualmente.
   - [x] Adicionar um campo de texto para o usuário informar título (obrigatório) e descrição (opcional) da foto.
   - [x] Armazenar a foto e a localização no `localStorage` para que elas não sejam perdidas ao recarregar a página.
   - [x] Criar uma tabela para exibir id, título, descrição, localização e data da foto. Adicionar um botão para visualizar detalhes da foto em uma modal ou em outra página. Para a localização, exibir um mapa com a localização marcada.
   - [x] Adicionar um botão para excluir o registro. Exibir um modal de confirmação antes de excluir a foto.
   - [x] Adicionar um botão para editar o registro. Exibir um formulário com os campos preenchidos para que o usuário possa editar o registro.
   - [ ] (opcional) Adicionar um botão para compartilhar a foto e a localização em redes sociais.

4. Criar uma SinglePageApplication (SPA) para exibir informações básicas sobre você como estudante. A SPA deve conter as seguintes páginas:
   - [x] Home: exibir uma foto sua, seu nome, curso, semestre, e-mail e telefone.
   - [x] Sobre: exibir um texto curto sobre você, alguns hobbies, habilidades, projetos desenvolvidos, etc.
   - [x] Contato: exibir um formulário para o usuário enviar uma mensagem para você. O formulário deve conter os campos nome, e-mail, assunto e mensagem. Adicionar validação de formulário para os campos obrigatórios. Use html5 e/ou JavaScript para fazer a validação. Adicionar também algumas redes sociais para contato. 
   - [x] Adicionar um menu de navegação para alternar entre as páginas. Use a API `history.pushState` para navegar entre as páginas sem recarregar a página.
   - [x] Adicionar um botão para alternar entre os temas claro e escuro. Salvar a escolha no `localStorage`.
   - [x] **Acessibilidade**: respeitar o critério 1.4.4 sobre redimensionamento de texto da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).
   - [x] **Acessibilidade**: respeitar o critério 3.3.2 sobre rótulos ou instruções da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).
   - [x] **Acessibilidade**: respeitar o critério 4.1.2 sobre nome, função e valor da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).
   - [x] Para implementar a lógica de navevação entre as páginas, você pode usar o código abaixo. O mesmo contém algumas marcadas como TODO que devem ser implementadas por você.
   ```javascript
        // Adiciona o evento "DOMContentLoaded" para executar o código JavaScript após o carregamento do DOM
        document.addEventListener("DOMContentLoaded", () => {

            // Função assíncrona para definir as rotas da SPA
            const router = async () => {
                const routes = [
                    { path: "/", view: () => document.getElementById("home") },
                    // TODO: Adicionar as rotas para as páginas "about" e "contact"
                ];

                // Função para verificar se a rota atual é válida
                const potentialMatches = routes.map(route => {
                    return {
                        route: route,
                        isMatch: location.pathname === route.path
                    };
                });

                // Verifica se a rota atual é válida, se não for, redireciona para a primeira rota
                // TODO: Adicionar a lógica para verificar se a rota atual é válida. Use a função find() para encontrar a rota correspondente em "potentialMatches"

                if (!match) {
                    match = {
                        route: routes[0],
                        isMatch: true
                    };
                }

                // Remove a classe "active" de todas as seções
                document.querySelectorAll("section").forEach(section => {
                    // TODO: Remover a classe "active" de todas as seções
                });

                // TODO: Adicionar a classe "active" na seção correspondente à rota atual
            };

            // Função para navegar entre as páginas
            const navigateTo = url => {
                history.pushState(null, null, url);
                router();
            };

            // Adiciona o evento "popstate" para navegar entre as páginas com o botão de voltar do navegador
            window.addEventListener("popstate", router);

            document.body.addEventListener("click", e => {
                if (e.target.matches("[data-link]")) {
                    e.preventDefault();
                    console.log(e.target.href);
                    // TODO: Adicionar a função navigateTo para navegar entre as páginas
                }
            });

            router();
        });
    ```

5. Criar um site de e-commerce para uma loja de informática ou outro tema relacionado a informática ou computação. O site deve conter as seguintes páginas:
   - [x] Página Inicial: exibir os produtos em destaque em uma seção de carrossel. Adicione também uma seção de produtos em promoção.
   - [x] Produtos: exibir todos os produtos disponíveis para venda. Adicionar filtros para pesquisar produtos por categoria e marca. Adicione um campo de busca para pesquisar produtos por nome.
   - [x] Detalhes do produto: exibir informações detalhadas sobre o produto, como nome, descrição, preço, fotos, etc.
   - [x] Carrinho de compras: exibir os produtos adicionados ao carrinho, quantidade, preço total, etc. Permitir adicionar, remover e alterar a quantidade de produtos no carrinho.
   - [x] Checkout: exibir um formulário para o usuário informar os dados de entrega e pagamento. Use uma API de pagamento, como o PayPal ou Stripe, para simular o pagamento.
   - [x] Navegação: adicionar um menu de navegação para alternar entre as páginas. Escolha um menu de navegação que seja acessível e responsivo em dispositivos móveis. 
   - [x] Rodapé: exibir informações sobre a loja, formas de pagamento, redes sociais, etc.
   - [x] Adicionar um botão para adicionar o produto ao carrinho. Use a API `localStorage` para armazenar os produtos no carrinho.
   - [x] Adicionar um botão para remover o produto do carrinho. Exibir uma página ou modal de confirmação antes de remover o produto.
   - [x] Adicionar um botão para finalizar a compra. Exibir uma página ou modal de confirmação antes de finalizar a compra.
   - [x] **Acessibilidade**: respeitar o critério 2.4.3 sobre foco do alvo da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).
   - [x] **Acessibilidade**: respeitar o critério 3.3.1 sobre identificação de erros da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).
   - [x] **Acessibilidade**: respeitar o critério 4.1.1 sobre nome, função e valor da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).

6. Criar um jogo estilo quiz para testar os conhecimentos dos usuários sobre um determinado tema relacionado a computação. O jogo deve conter as seguintes funcionalidades:
   - [x] Página inicial: exibir uma breve descrição do jogo e um botão para iniciar o quiz.
   - [x] Perguntas: exibir uma pergunta por vez com 4 alternativas de resposta. Adicionar um cronômetro para limitar o tempo de resposta. Adicionar um botão para avançar para a próxima pergunta.
   - [x] Resultado: exibir a pontuação final do usuário e um botão para reiniciar o quiz.
   - [x] Adicionar um botão para iniciar o quiz. Use a API `fetch` para carregar as perguntas de um arquivo JSON.
   - [x] Adicionar um botão para avançar para a próxima pergunta. Use a API `fetch` para carregar a próxima pergunta.
   - [x] Adicionar um cronômetro para limitar o tempo de resposta. Use a API `setInterval` para atualizar o cronômetro a cada segundo. Exibir uma mensagem de tempo esgotado caso o usuário não responda a tempo e finalizar o quiz.
   - [x] Adicionar um botão para reiniciar o quiz. Use a API `fetch` para carregar as perguntas novamente.
   - [x] Adicionar transições de animação ao exibir as perguntas e o resultado.
   - [x] Adicionar uma pontuação para cada pergunta respondida corretamente. Exibir a pontuação final do usuário ao final do quiz.
   - [x] Adicionar uma opção para o usuário escolher o nível de dificuldade do quiz (fácil, médio, difícil).
   - [x] Adicionar uma música de fundo ao jogo. Permitir que o usuário possa mutar a música.
   - [x] **Acessibilidade**: respeitar o critério 2.4.7 sobre foco visível da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).
   - [x] **Acessibilidade**: respeitar o critério 3.3.3 sobre sugestão de erro da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).
   - [x] **Acessibilidade**: respeitar o critério 4.1.3 sobre status ou erros da WCAG disponível em: [https://www.guia-wcag.com/](https://www.guia-wcag.com/).