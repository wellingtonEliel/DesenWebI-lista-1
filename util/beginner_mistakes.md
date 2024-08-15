# Erros de Principiantes

Este documento é uma lista de erros comuns que os principiantes cometem ao programar para web com HTML, CSS e JavaScript. A lista é baseada em experiências pessoais e em observações de outros programadores.

## Case Sensitivity

HTML, CSS e JavaScript são linguagens case-sensitive. Isso significa que `Hello`, `hello` e `HELLO` são considerados diferentes. Por exemplo, na estrutura de pastas do projeto abaixo:

```
projeto
│   MeuProjeto.html
│   Css
│   │   Estilos.css
```

Na prática, o arquivo `Estilos.css` não será encontrado, pois o nome do arquivo é `estilos.css`.

```html
<!-- MeuProjeto.html -->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="Css/Estilos.css">
</head>
<body>
    <h1>Olá, Mundo!</h1>
</body>
</html>
```

Pequenas mudanças e padronizações podem evitar muitos problemas. Por exemplo, sempre nomeie arquivos e pastas em minúsculas e use underscore (_) ou hífen (-) para separar palavras (padrão `snake_case` ou `kebab-case`).

## Caminhos Relativos

Ao referenciar arquivos, é importante entender a diferença entre caminhos absolutos e caminhos relativos. Caminhos absolutos começam com `/` (raiz do servidor) ou `http://` (URL completa), enquanto caminhos relativos são relativos ao arquivo atual.

Por exemplo, considere a seguinte estrutura de pastas:

```
projeto
│   index.html
│
└───css
│   │   estilos.css
│
└───imagens
    │   logo.png
```

Para referenciar o arquivo `estilos.css` a partir de `index.html`, você deve usar um caminho relativo:

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/estilos.css">
</head>
<body>
    <h1>Meu Site</h1>
    <img src="imagens/logo.png" alt="Logo">
</body>
</html>
```

```css
/* estilos.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background-image: url(../imagens/fundo.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
h1 {
    color: #333;
}
```

Se você usar um caminho absoluto, como `/css/estilos.css`, o arquivo não será encontrado, pois o servidor tentará acessar `http://seusite.com/css/estilos.css` em vez de `http://seusite.com/projeto/css/estilos.css`.

## Não usar `index.html`

Quando você acessa um diretório em um servidor web, como `http://seusite.com/projeto/`, o servidor procura automaticamente por um arquivo chamado `index.html` ou `index.php` para exibir. Se você não tiver um arquivo `index.html`, o servidor listará o conteúdo do diretório, o que pode ser um problema de segurança.

## Não Usar `meta viewport`

O elemento `<meta name="viewport">` é usado para controlar o layout da página em dispositivos móveis. Sem ele, a página pode não ser exibida corretamente em dispositivos móveis, resultando em texto pequeno e difícil de ler.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            min-height: 100vh;
            display: grid;
            place-content: center;
            color: #fff;
            background-color: #333;
        }

        /* Mobile */
        @media only screen and (min-width: 768px) {
            body {
                background-color: deepskyblue;
            }
        }

        /* Tablet */
        @media only screen and (min-width: 1024px) {
            body {
                background-color: deeppink;
            }
        }
    </style>
</head>
<body>
    <h1>Olá, Mundo!</h1>
</body>
</html>
```

O atributo `content="width=device-width, initial-scale=1.0"` faz com que a largura da página seja igual à largura do dispositivo e define o nível de zoom inicial para 1.0.

## Não usar `defer` para carregar Scripts

Quando você carrega um script no `<head>` do documento, o navegador para de processar o HTML e executa o script. Isso pode resultar em atrasos na renderização da página. Para evitar isso, você pode usar o atributo `defer` para carregar scripts após o HTML ser totalmente carregado.

```javascript
// main.js
const h1 = document.querySelector("h1");
console.log(h1);
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="main.js" defer></script>
  </head>
  <body>
    <h1>Olá Mundo</h1>
  </body>
</html>
```

O atributo `defer` garante que o script seja executado após o HTML ser totalmente carregado, evitando atrasos na renderização da página. Outra opção é colocar o script no final do corpo do documento, antes do fechamento da tag `</body>`. Isso também garante que o HTML seja totalmente carregado antes de executar o script.

Essa prática não é necessária para scripts do tipo `module`, pois eles são carregados de forma assíncrona e não bloqueiam a renderização da página.

## Não usar um Servidor Local

Ao desenvolver sites, é importante usar um servidor local para testar o código. Recursos como script do tipo `module` não funcionam corretamente ao abrir arquivos diretamente no navegador (usando `file://`). Existem várias ferramentas para configurar um servidor local, como `http-server`, `live-server`, `XAMPP`, `WampServer`, `MAMP`, entre outros.

Para demonstrar, considere o seguinte código:

```javascript
// main.js
console.log('Olá, Mundo!');
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <script type="module" src="main.js"></script>
</head>
<body>
    <h1>Meu Site</h1>
</body>
</html>
```

Ao abrir `index.html` diretamente no navegador, você verá um erro. No entanto, ao usar um servidor local, o código funcionará corretamente.

Vamos ver outro exemplo, um pouco mais complexo:

```javascript
// main.js
const mensagem = "Olá, mundo!";
const posts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .catch(err => console.log(err));
}
        

export {mensagem, posts};
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="main.js" type="module"></script>
    <script type="module">
      import { mensagem, posts } from "./main.js";
      console.log(mensagem);

      const data = await posts();
      console.log(data);
    </script>
  </head>
  <body>
    <h1>Olá Mundo</h1>
  </body>
</html>
```

Ao abrir `index.html` diretamente no navegador, você verá um erro. No entanto, ao usar um servidor local, o código funcionará corretamente.

## Extensões para Visual Studio Code

O Visual Studio Code é um editor de código popular entre os desenvolvedores web. Existem várias extensões úteis que podem melhorar sua produtividade e ajudar a evitar erros comuns. Algumas extensões recomendadas incluem:

- **Live Server**: Permite visualizar as alterações em tempo real no navegador.
- **Prettier**: Formata automaticamente o código para seguir um estilo consistente.

## Conclusão

Esses são apenas alguns dos erros comuns que os principiantes cometem ao programar para web. A prática constante, a leitura de documentação e a colaboração com outros programadores podem ajudar a evitar esses erros e a melhorar suas habilidades de programação.