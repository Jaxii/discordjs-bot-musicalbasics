const config = require("./config.json");

exports.run = async (client, message, args, level) => {

};















exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Accidentals"
};

exports.help = {
  name: "add",
  category: "Music",
  description: "Adds a song to the queue",
  usage: "add [name of song/youtube url]"
};
