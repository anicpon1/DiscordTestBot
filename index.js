const { Client, GatewayIntentBits, EmbedBuilder, PermissionBitField, Permissions } = require(`discord.js`);
//const { Message } = require("./node_modules/discord.js/typings/index");

const { token } = require('./config.json');
const prefix = '>';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Bot has activated!");

    client.user.setActivity('This bot is working!', { type: "MATCHING" });

})

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    //const argument = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //COMMANDS


    //test commands
    if (command === 'test') {
        message.channel.send("Bot is online and working!")
    }
})



client.login(token);