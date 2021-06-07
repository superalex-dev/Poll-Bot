const { Client, RichEmbed, Message } = require('discord.js');
const token = "ODQ5MTY3NjgxMjgyMjQ0NjA4.YLXPBw.SAUuH4EVyEyw1rCE9x4DGjFm0jY";
const bot = new Client();


const PREFIX = "p!";

bot.on('ready', () => {
    console.log("This bot is active and ready to go!");
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case "poll":
            const Embed = new RichEmbed()
                .setColor(0xFFC300)
                .setTitle("Inititate poll")
                .setDescrption("p!poll to initiate a simple yes or no poll");
            if (!args[1]) {
                message.channel.send(Embed);
            }

            let msgArgs = args.slice(1).join(" ");

            break;
    }
})
bot.login(token);