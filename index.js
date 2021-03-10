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
var list = [fisch, simon, igel, kati, luxi];

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
client.on('message', message => {
   if (message.author === simon.id) {
       let x =message.guild.members.cache.find(s => s.id === "761270337480032300");
        x.kick().then();
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

        });



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);