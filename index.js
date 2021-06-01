const { Client, RichEmbed } = require('discord.js');
const bot = new Client();

const token = "ODQ5MTY3NjgxMjgyMjQ0NjA4.YLXPBw.cLe9xje6Heg7UiPGh-GLmTXtq5M";

const PREFIX = "p!";

bot.on('ready', () => {
    console.log("This bot is active and ready to go!");
})

bot.login(token);