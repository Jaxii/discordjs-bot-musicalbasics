const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const { Client, Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const config = require("./config.js");
const client = new Client({ disableEveryone: true });
const youtube = new YouTube(config.GOOGLE_API_KEY);
const queue = new Map();

client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
//command data
client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loading command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);
