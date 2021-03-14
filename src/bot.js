// env
require('dotenv').config();

// client

const { Client } = require('discord.js');
const client = new Client();

// constants

const PREFIX = '>';

// event -- ready & loged in

client.on('ready', () => {
  console.log(`The bot has logged in as ${client.user.tag}`); // logs the bot online
  client.user.setPresence({
    activity: {
      name: 'my sensei',
      type: 'LISTENING',
      url: 'https://discord.com/users/452762203880292354/',
    }, // sets the status
    status: 'online',
  }); // shows bot online
});

// event -- message

client.on('message', async (message) => {
  // ignores own bot messages
  if (message.author.bot) return;
  // checks for prefix
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    // kick
    if (CMD_NAME === 'kick') {
      if (!message.member.hasPermission('KICK_MEMBERS'))
        return message.reply('You do not have permissions to use that command');
      if (args.length === 0) return message.reply('Please provide an ID');
      const member = message.guild.members.cache.get(args[0]);
      if (member) {
        member
          .kick()
          .then((member) => message.channel.send(`${member} was kicked.`))
          .catch(() => message.channel.send('I cannot kick that user :('));
      } else {
        message.channel.send('That member was not found');
      }
      // ban
    } else if (CMD_NAME === 'ban') {
      if (!message.member.hasPermission('BAN_MEMBERS'))
        return message.reply('You do not have permissions to use that command');
      if (args.length === 0) return message.reply('Please provide an ID');
      try {
        const user = await message.guild.members.ban(args[0]);
        message.channel.send(`${user} was banned successfully`);
      } catch (err) {
        console.log(err);
        message.channel.send(
          'An error occured. Either I do not have permissions or the user was not found'
        );
      }
    }
  }
});

// login
client.login(process.env.BOT_TOKEN);
