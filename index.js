const Discord = require('discord.js');

const client = new Discord.Client();


const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGO_URL;
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


class MyUser {

    constructor(id, admin, name) {
    this.id = id;
    this.admin = admin;
    this.name = name;
        }
}
const FischsServer = "731524338439946370";
const TestServer = "652598539381243934";
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
const PREFIX = "+";
function parseCommand(message) {
    if (message.content.startsWith(PREFIX)) {
        const args = message.content.slice(1).split(' ');
        const cmd = args.shift().toLowerCase();
        return {command: cmd, args: args};
    }
}
client.on('message', async message => {
   if (message.channel.type === "dm" && message.author.id === simon.id) {
        const COMMAND = parseCommand(message);
        if (COMMAND.command === "save-all") {
            const g = client.guilds.cache.find(s => s.id === FischsServer);
            var messages = [];
            for await (const message1 in loadAllMessages(g.channels.cache.find(s => s.id === "652598539381243937"))) {
            messages.push(message1.content);
            }
            await message.channel.send(messages);

        }
   }
});
async function * messagesIterator (channel) {
    let before = null
    let done = false
    while (!done) {
        const messages = await channel.messages.fetch({ limit: 100, before })
        if (messages.size > 0) {
            before = messages.lastKey()
            yield messages
        } else done = true
    }
}

async function * loadAllMessages (channel) {
    for await (const messages of messagesIterator(channel)) {
        for (const message of messages.values()) yield message
    }
}

client.on('ready', () => {
        console.log("READY");
        console.log("Admins: ");
        getAdmins().forEach(function (e) {console.log(e.name)})
    client.user.setActivity("@Rhytm", {type: "LISTENING"})
});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN).then();