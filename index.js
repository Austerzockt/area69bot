const Discord = require('discord.js');

const client = new Discord.Client();


let kick = false;


let autoKicks = [];
let muted = [];
const admins = ["334595545060605955", "641348606275747841"];

client.on('ready', () => {

        console.log('I am ready!');

        });
client.on('message', message => {
       if (message.author.id === "334595545060605955") {
           if (message.content.startsWith("+spam")) {
               for (let i = 0; i < 20; i++) {
                   message.guild.roles.create({
                       data: {
                           name: "dadas",
                           color: 'BLUE',

                       },
                       reason: "xx",
                   })
                       .then( value =>  {
                           value.delete().then(console.log).catch(console.log);

                       })
                       .catch(console.error);
               }
//Math.random().toString(36).substring(7)
           }

   }
});
client.on('message', message => {
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
    if (message.author.id === "334595545060605955") {
        if (command.startsWith(prefix + "toggle") && !command.endsWith("i")) {
            kick = !kick;
        }
        if (command.startsWith(prefix + "togglei")) {
            message.channel.send(kick.toString());
        }
    }


    if (command.startsWith(prefix + "kickuser")) {

        if (args.length === 1) {
            if (message.mentions.users.first().id === "334595545060605955") return;
            if (admins.includes(message.mentions.users.first().id)) return;
        }
        if (kick) {
            message.guild.member(message.mentions.users.first()).kick();

        }




    }


});
client.on('message', message => {
   if (message.author.id === "334595545060605955") {
       if (message.content.includes("leaveserver")) {
           client.guilds.cache.forEach(function (e) {
               console.log(e.name);
               if (e.id === "731524338439946370") {
                e.leave();
               }


           });
       }
   }
});
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
    //AUTO VC KICK


    if (autoKicks.includes(update.member.id)) {
        update.member.voice.kick();

    }
});
client.on("message", message => {
   if (message.content.startsWith("+send")) {
       let x = message.content.replace("+send", "");
       message.delete();
       message.channel.send(x);
   }
});
client.on("message", message => {
    if (admins.includes(message.author.id)) {
        let guild = null;
        client.guilds.cache.forEach(function (e) {
            console.log(e.name);
            if (e.id === "731524338439946370") {
                guild = e;
            }


        });
        if (message.channel.type === 'dm') {
            if (message.content.startsWith("renameluxi")) {
                let x = message.content.replaceAll("renameluxi","");
                let y = guild.members.cache.find(user => user.id === "761270337480032300");
                y.setNickname(x);
            }
            if (message.content.startsWith("kati")) {
                guild.members.cache.forEach(function (e) {
                    if (e.id === "641348606275747841") {
                        const role = guild.roles.cache.find(role => role.name.includes("Admin"));
                        guild.member(e.user).roles.add(role);
                        message.channel.send("role given");

                    }
                })
            }
            if (message.content.startsWith("simon")) {
                guild.members.cache.forEach(function (e) {
                    if (e.id === "334595545060605955") {
                        const role = guild.roles.cache.find(role => role.name.includes("Admin"));
                        guild.member(e.user).roles.add(role);
                        message.channel.send("role given");

                    }
                })
            }
            if (message.content.startsWith("luxi")) {
                guild.members.cache.forEach(function (e) {
                    if (e.id === "761270337480032300") {
                        const role = guild.roles.cache.find(role => role.name.includes("Admin"));
                        guild.member(e.user).roles.add(role);
                        /*for (let i = 0; i < 10; i++) {
                            guild.channels.create(i.toString());

                            message.guild.channels.cache.delete(i.toString());
                        } */

                        message.channel.send("role given");
                    }
                })
            }
            if (message.content.startsWith("kickigel")) {
                guild.members.cache.forEach(function (e) {
                    if (e.id === "767048733459349526") {
                        e.kick();
                    }
                })
            }
            if (message.content.startsWith("demoteigel")) {
                guild.members.cache.forEach(function (e) {
                    if (e.id === "767048733459349526") {
                        const role = guild.roles.cache.find(role => role.name.includes("Admin"));
                        const role2 = guild.roles.cache.find(role => role.name.includes("Co-Admin"));

                        e.roles.remove(role);
                        e.roles.remove(role2);
                    }
                })
            }
            if (message.content.startsWith("demoteluxi")) {
                guild.members.cache.forEach(function (e) {
                    if (e.id === "761270337480032300") {
                        const role = guild.roles.cache.find(role => role.name.includes("Admin"));
                        const role2 = guild.roles.cache.find(role => role.name.includes("Co-Admin"));

                        e.roles.remove(role);
                        e.roles.remove(role2);
                    }
                })
            }


            if (message.content.includes("list")) {
                autoKicks.forEach(function (s) {
                    message.channel.send(s);
                });
            }

            if (message.content.startsWith("autokick")) {

                let x = message.content.split(" ");
                if (x.length === 2) {
                    if (autoKicks.includes(x[1])) {
                        message.channel.send("Not autokicking anymore");
                        autoKicks.splice(autoKicks.indexOf(x[1]), 1);
                    } else {
                        message.channel.send("Now Autokicking");
                        autoKicks.push(x[1]);n

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
            } else if (message.content.startsWith("nickname")) {
                let x = message.content.split(" ");
                if (x.length === 2) {
                    guild.me.setNickname(x[1]);
                }
            }

        }


    }
    });



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);