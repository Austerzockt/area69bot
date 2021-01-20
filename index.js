const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');


});



client.on('message', message => {
    const prefix = "+"
    const split = message.content.split(" ");
    const command = split_args[0]
    const args = split_args.slice(1);

    if (command.startsWith(prefix + "test")) {

        message.channel.send('pong')
        console.log(message.channel.messages.cache.toJSON())
        // message.channel.send(message.channel.messages.cache.get('801397004915310652').content)
        // message.channel.send(message.channel.messages.cache.get('801397004915310652').reactions.cache.toJSON())
    }














});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);