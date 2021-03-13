// env
require("dotenv").config();

// client

const { Client } = require("discord.js");
const client = new Client();

// constants

const PREFIX = ">";

// event -- ready & loged in

client.on("ready", () => {
  console.log(`The bot has logged in as ${client.user.tag}`); // logs the bot online
  client.user.setPresence({
    activity: {
      name: "my sensei",
      type: "LISTENING",
      url: "https://discord.com/users/452762203880292354/",
    }, // sets the status
    status: "online",
  }); // shows bot online
});

// event -- message

client.on("message", (message) => {
  console.log(
    `${message.author.tag} has send the message \"${message.content}\"`
  ); // logs the user who sent the message
  if (message.content === "hello") {
    // basic stuff
    message.reply("hello there!");
  }
  if (message.content.startsWith(PREFIX)) {
    // --------------- COMMANDS ------------------
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    if (CMD_NAME === "kick") {
      if (args.length === 0) return message.reply("Please provide an ID");
      const member = message.guild.members.cache.get(args[0]);

      console.log(member);
      if (member) {
        member.kick();
      } else {
        message.channel.send("That member was not found");
      }
    } else if (CMD_NAME === "ban") {
      message.channel.send("ban the user");
    }
  }
});

// login
client.login(process.env.BOT_TOKEN);
