// env
require('dotenv').config();

// client

const { Client } = require('discord.js');
const client = new Client();

// constants

const PREFIX = ">";

// event -- ready & loged in

client.on('ready', () => {
    console.log(`The bot has logged in as ${client.user.tag}`);                           // logs the bot online 
    client.user.setPresence({ 
    activity: { name: 'my sensei', type: "LISTENING", url: "https://discord.com/users/452762203880292354/" },
    status: 'online' })
});

// event -- message

client.on('message', (message) => {
    console.log(`${message.author.tag} has send the message \"${message.content}\"`)    // logs the user who sent the message
    if (message.content === 'hello'){                                                   // basic stuff
        message.reply("hello there!")
    }
    if (message.content.startsWith(PREFIX)) {                                           // --------------- COMMANDS ------------------
        const CMD_NAME = message.content.substring(PREFIX.length )
    }

});


// login
client.login(process.env.BOT_TOKEN);

