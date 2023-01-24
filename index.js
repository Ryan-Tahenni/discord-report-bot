console.log("started") // to announce that the program officially started

const {Client, GatewayIntentBits} = require("discord.js"); // imports the discord.js module
const client = new Client({
    intents: [ // all of the things that the bot intands to do (in this case it's mostly about messages)
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const prefix = "!"; // command prefix (can be changed to whatever we want here)

client.on("ready", () => {
    console.log("logged-in"); // to announce that the bot has logged in
});

client.on("messageCreate", msg => {

    console.log("message posted: " + msg.content); // to announce that a message has been posted

    if (msg.author.bot) return; // do not send a message if the author of the message is a bot

    if ((msg.content.includes(prefix + "report")) && (msg.content.includes("<@")) && (msg.content.includes("$-"))){; //if the message includes "!report", a user mention (which begins by <@) and a "$-"
        msg.reply("⚠ Someone has been reported by: " + msg.author.username + " ⚠"); // send a reply that contains the author of the message
    };

});

client.login("") // connect to discord with the bot token

// Command Syntax: !report @[User] $-[Reason]
