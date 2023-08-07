const fs = require('fs');
const path = require('path');

// Cria o diretório do projeto, se ele não existir
const projectDir = path.join(process.cwd(), 'meu-projeto');
if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir);
}

// Cria o arquivo index.js com o código desejado
const indexPath = path.join(projectDir, 'index.js');
const indexContent = `const {Client, LocalAuth} = require ('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer:{
        headless: true,
       // executablePath:"caminho da pasta"
       args: ['--no-sandbox']
    }
})

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

client.initialize();
`;
fs.writeFileSync(indexPath, indexContent);

console.log('Projeto criado com sucesso!');
