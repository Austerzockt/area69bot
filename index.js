const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

            if (message.content.startsWith("!test")) {
                message.channel.send('pong')
                console.log(message.channel.messages.cache.toJSON())
               // message.channel.send(message.channel.messages.cache.get('801397004915310652').content)
                // message.channel.send(message.channel.messages.cache.get('801397004915310652').reactions.cache.toJSON())
            }









});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);