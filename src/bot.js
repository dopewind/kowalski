// env
require('dotenv').config();

// client

const { Client } = require('discord.js');
const client = new Client();

// event -- ready & loged in

client.on('ready', () => {
    console.log(`The bot has logged in as ${client.user.tag}`)


// event -- message

client.on('message', (message) => {
    console.log(`${message.author.tag} has send the message \"${message.content}\"`)
    if (message.content === 'hello'){
        message.reply("hello there!")
    }
});
});

// login
client.login(process.env.BOT_TOKEN);

