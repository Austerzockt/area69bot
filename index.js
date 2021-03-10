const Discord = require('discord.js');

const client = new Discord.Client();


//const MongoClient = require('mongodb').MongoClient;

//const uri = process.env.MONGO_URL;
//const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


class MyUser {

    constructor(id, admin, name) {
    this.id = id;
    this.admin = admin;
    this.name = name;
        }
}
const FischsServer = "731524338439946370";
const fisch = new MyUser("694984260913987594", false, "fisch");
const simon = new MyUser("334595545060605955", true, "simon");
const kati = new MyUser("641348606275747841", false, "kati");
const luxi = new MyUser("761270337480032300", false, "luxi");
const igel = new MyUser(    "767048733459349526", false, "igel");
const moxi = new MyUser("764860985348980777", false, "moxi");
const list = [fisch, simon, igel, kati, luxi, moxi];

function getUserFromId(id) {
    return list.find(s => s.id === id);
}
function getUserFromName(name) {
    return list.find(s => s.name === name.toLowerCase());
}
function getAdmins() {
    const returns = [];
    list.forEach( function (e) {
        if (e.admin) returns[returns.length] = e;
    })
    return returns;
}
function isAdmin(id) {
    getAdmins().forEach(function (value) {
        if (value.id === id) return true;
    });
    return false;

}
client.on('guildMemberUpdate', (oldUser, newUser) => {
    if (oldUser.roles.cache.size !== newUser.roles.cache.size) {

    }
});
client.on('voiceStateUpdate', (oldstate, newstate) => {
    if (oldstate.member.id === moxi.id) {
        newstate.kick()
    }
});
client.on('message', message => {
    if (message.channel.type === "dm" && message.author.id === simon.id) {
        if (message.content.toLowerCase().startsWith("+kickmoxi")) {
            kicking_moxi = !kicking_moxi;
            message.channel.send(kicking_moxi);
        }
    }
});
let kicking_moxi = false;
client.on('message', message => {
   if (message.author.id === "334595545060605955") {
       if (message.content.toLowerCase().startsWith("+kickluxi") && kicking_moxi) {
           let x =message.guild.members.cache.find(s => s.id === "761270337480032300");
           x.kick().then();
       }

   }
});
/*client.on('messageDelete', message => {
    mongoClient.connect( error => {

        mongoClient.db("messages").collection("deleted").insertOne({
            author: {
                id: message.author.id,
                name: message.author.username
            },
            id: message.id,
            content: message.content
        }).then(function (){
            mongoClient.close();
        });
    })

}); */
client.on('ready', () => {
        console.log("READY");
        console.log("Admins: ");
        getAdmins().forEach(function (e) {console.log(e.name)})
    client.user.setActivity("@Rhytm", {type: "LISTENING"})
});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN).then();