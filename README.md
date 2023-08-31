#VELESPK

Pacote destinado a criação rápida de chatbots para Whatsapp
//Framework em Breve

Pacote inclui um arquivo index.js com todo o esqueleto da aplicação pronto, juntamente com suas dependências, basta instalar e usar.
```
npm install velespk
```

Documentação ainda em Criação.
# Documentação do Código

Este código usa a função `waMain` do pacote `velespk` para criar uma instância do cliente do WhatsApp Web e incluir quaisquer módulos adicionais do pacote `whatsapp-web.js`.

## Configurando o Cliente

Para configurar o cliente, chame a função `waMain` com as opções desejadas:

```javascript
const { waMain } = require('velespk');

const {client, seuModule} = waMain({
    modules: {seuModule},
    executablePath: 'path/to/chrome'
});
```
A função waMain aceita um objeto de opções que pode incluir propriedades como modules e executablePath.

Para Utilizar o `client.on` você declara ele juntamente com o `client` no `waMain`. 

Lembre-se o `client.on` agora usa a sintaxe `clo`.
```javascript
const { waMain } = require('velespk');

const { client, clo } = waMain({
    // ... opções aqui ...
});

// Manipulador de evento assíncrono
clo('message', async (message) => {
    // Lógica assíncrona aqui
});

// Manipulador de evento síncrono
clo('outro-evento', (data) => {
    // Lógica síncrona aqui
});
```
É possivel alterar os eventos entre os disponíveis, usar ele como `assíncrono` ou `síncrono` 

# Enviando Mensagens
Depois de criar a instância do cliente, você pode usar as funções mMsg e mMsgs para enviar mensagens simples ou várias mensagens com base em palavras-chave, respectivamente.
## Enviando uma Mensagem Simples
Para enviar uma mensagem simples para o cliente, use a função mMsg:
```javascript
mMsg(client, 'Oi', 'Oi, como você está?');
```
A função mMsg aceita três argumentos: a instância do cliente, a palavra-chave e a mensagem a ser enviada.
## Enviando Várias Mensagens
Para enviar várias mensagens para o cliente com base em palavras-chave, use a função mMsgs:
```javascript
const messages = {
    'Oi': 'Oi, como você está?',
    '!ping': 'pong',
    // Adicione outras palavras-chave e respostas aqui
};
mMsgs(client, messages);
```
A função mMsgs aceita dois argumentos: a instância do cliente e um objeto contendo pares de palavras-chave e respostas.
## Recebendo Mensagens
Você pode usar o evento message do cliente normalmente após chamar a função waMain com as opções desejadas e obter a instância do cliente. Aqui está um exemplo de como você pode fazer isso:
```javascript
client.on('message', msg => {
    // Coloque aqui o código para lidar com mensagens recebidas
    console.log(`Received message: ${msg.body}`);
});
```
Quando uma nova mensagem é recebida pelo cliente, o manipulador de eventos é chamado e o código dentro dele é executado. Neste caso, o código simplesmente imprime a mensagem recebida no console.

Você pode modificar o código dentro do manipulador de eventos para fazer o que quiser com as mensagens recebidas, como responder automaticamente ou armazená-las em um banco de dados.

# English

#VELESPK

Package for quick creation of chatbots for WhatsApp //Framework coming soon

The package includes an index.js file with the entire application skeleton ready, along with its dependencies, just install and use.

```
npm install velespk
```


# Code Documentation

This code uses the `waMain` function from the `velespk` package to create an instance of the WhatsApp Web client and include any additional modules from the `whatsapp-web.js` package.

## Setting up the Client

To set up the client, call the `waMain` function with the desired options:

```javascript
const { waMain } = require('velespk');

const {client, MessageMedia} = waMain({
    modules: {MessageMedia},
    executablePath: 'path/to/chrome'
});
```
The waMain function accepts an options object that can include properties such as modules and executablePath.

To use `client.on` you declare it together with `client` in `waMain`.

Remember `client.on` now uses the `clo` syntax.
```javascript
const { waMain } = require('velespk');

const { client, clo } = waMain({
     // ... options here ...
});

// Asynchronous event handler
clo('message', async(message) => {
     // Async logic here
});

// Synchronous event handler
clo('other-event', (date) => {
     // Synchronous logic here
});
```
It is possible to change the events between those available, use it as `asynchronous` or `synchronous`

# Sending Messages
After creating the client instance, you can use the mMsg and mMsgs functions to send simple messages or multiple messages based on keywords, respectively.

## Sending a Simple Message
To send a simple message to the client, use the mMsg function:
```javascript
mMsg(client, 'Hi', 'Hi, how are you?');
```
The mMsg function accepts three arguments: the client instance, the keyword, and the message to be sent.

## Sending Multiple Messages
To send multiple messages to the client based on keywords, use the mMsgs function:
```javascript
const messages = {
    'Hi': 'Hi, how are you?',
    '!ping': 'pong',
    // Add other keywords and responses here
};
mMsgs(client, messages);
```
The mMsgs function accepts two arguments: the client instance and an object containing pairs of keywords and responses.

## Receiving Messages
You can use the client’s message event normally after calling the waMain function with the desired options and obtaining the client instance. Here is an example of how you can do this:
```javascript
client.on('message', msg => {
    // Put your code here to handle received messages
    console.log(`Received message: ${msg.body}`);
});
```
When a new message is received by the client, the event handler is called and the code inside it is executed. In this case, the code simply prints the received message to the console.

You can modify the code inside the event handler to do whatever you want with received messages, such as automatically responding or storing them in a database.
