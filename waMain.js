const {Client, LocalAuth} = require ('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

function waMain(options) {

    const {modules, ...puppeteerOptions} = options;
    const client = new Client({
        authStrategy: new LocalAuth(),
        puppeteer: {
            headless: true,
            args: ['--no-sandbox'],
            ...puppeteerOptions
        }
    });

    function clo(eventType, handler) {
        client.on(eventType, async (message)=>{
           if(handler.constructor.name ==='AsyncFuction'){
            await handler(message);
            }else{
                handler(message);
            }
        });
    }

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

    return {client, clo, ...options.modules};
}

module.exports = waMain;


