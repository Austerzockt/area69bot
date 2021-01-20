const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {
    message.guild.roles.create()

        const args = message.content.split(" ")
        if (args.length === 1) {
            if (args[0] === '!test') {
                message.channel.send('pong')
                message.channel.send(message.channel.messages.cache.get('801390332473769985').content)
                message.channel.send(message.channel.messages.cache.toJSON())
                message.channel.send(message.channel.messages.cache.get('801390332473769985').reactions.cache.toJSON())
            }


        }






});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);