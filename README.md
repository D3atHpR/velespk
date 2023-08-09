#VELESPK

Pacote destinado a criação rápida de chatbots para Whatsapp

Pacote inclui um arquivo index.js com todo o esqueleto da aplicação pronto, juntamente com suas dependências, basta instalar e usar.

```

npm install velespk

```

use para criar o projeto com o esqueleto já pronto
comando com problemas
```
velespk-init

```

Documentação ainda em Criação.
# Documentação do Código

Este código usa a função `waMain` do pacote `velespk` para criar uma instância do cliente do WhatsApp Web e incluir quaisquer módulos adicionais do pacote `whatsapp-web.js`.

```javascript
const { waMain } = require('velespk');

// Cria uma instância do cliente e inclui quaisquer módulos adicionais do pacote whatsapp-web.js
const {client, MessageMedia} = waMain({
    modules: {MessageMedia},
    executablePath: 'path/to/chrome'
});
A função waMain aceita um objeto de opções que pode incluir propriedades como modules e executablePath.

Enviando Mensagens
Depois de criar a instância do cliente, o código usa as funções mMsg e mMsgs para enviar mensagens simples ou várias mensagens com base em palavras-chave, respectivamente.

// Envia uma mensagem simples para o cliente
mMsg(client, 'Oi', 'Oi, como você está?');

// Envia várias mensagens para o cliente com base em palavras-chave
const messages = {
    'Oi': 'Oi, como você está?',
    '!ping': 'pong',
    // Adicione outras palavras-chave e respostas aqui
};
mMsgs(client, messages);
Copiar
A função mMsg aceita três argumentos: a instância do cliente, a palavra-chave e a mensagem a ser enviada. A função mMsgs aceita dois argumentos: a instância do cliente e um objeto contendo pares de palavras-chave e respostas.