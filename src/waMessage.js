const {Client} = require ('whatsapp-web.js')


function mMsg(client, keyword, response) {
    client.on('message', msg=>{
        if (msg.body == keyword) {
                msg.reply(response);
        }
    })  
}


function mMsgs(client, message) {
    client.on('message', msg=>{
        if (message.hasOwnProperty(msg.body)) {
            msg.reply(messages[msg.body]);
            
        }
    });
}






module.exports = { mMsg, mMsgs }