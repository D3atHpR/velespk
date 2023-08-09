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


const { waMain } = require('velespk');

Chame a função waMain com as opções desejadas para criar uma instância do cliente e incluir quaisquer módulos adicionais do pacote whatsapp-web.js. Por exemplo:
const {client, MessageMedia} = waMain({
    modules: {MessageMedia},
    executablePath: 'path/to/chrome'
});


use mensagem simples passando 
o comando.
// Exemplo de uso
mMsg(client, 'Oi', 'Oi, como você está?');


// Exemplo de uso
const messages = {
    'Oi': 'Oi, como você está?',
    '!ping': 'pong',
    // Adicione outras palavras-chave e respostas aqui
};
mMsgs(client, messages);