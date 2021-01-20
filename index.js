const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');


});



client.on('message', message => {
    const prefix = "+"
    const split = message.content.split(" ");
    const command = split[0]
    const args = split.slice(1);

    if (command.startsWith(prefix + "test")) {
        message.channel.send('pong')
        console.log(message.channel.messages.cache.toJSON())

        if (args.length === 1) {
            message.channel.send(message.channel.messages.cache.get(args[0]).content)
            message.channel.send(message.channel.messages.cache.get(args[0]).reactions.cache.toJSON())
        }



    }














});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);