const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {
    message.guild.roles.create()

        const args = message.content.split(" ")
        if (args.length == 2) {
            if (args[0] === '!ping') {
                message.channel.send('pong')
                message.guild.channels.create(args[1]).then(message.channel.send('worked'))
                message.channel.send(message.reactions.cache.toJSON())
            }


        }






});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);