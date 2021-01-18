const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    if (message.content === 'ping') {

        message.channel.send('pong')
        message.guild.channels.create("test").then(message.channel.send('worked'))
    }

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);