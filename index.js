const {Client, LocalAuth} = require ('whatsapp-web.js')
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
