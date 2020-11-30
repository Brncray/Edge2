const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const antiSwearWords = require("anti-swear-words-packages-discord")
 
let prefix = config.prefix;
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Tape is online!');
});
 
client.on('ready', () => {
  client.user.setStatus('dnd')
  client.user.setPresence({
      activity: {
          name: '-help',
          type: "STREAMING",
          url: "https://www.twitch.tv/tapebot"
      }
  });
});


client.on('message', async message => {
  antiSwearWords(client, message, {
  customWord: ["youre anti swear words here", "youre other swear words. Keep adding commas and quotations."],
  warnMSG: `<@${message.author.id}> , do \**NOT**\ swear.`, // warn message option || when not then = `<@${message.author.id}> dont use swear words.`
  ignoreWord: ["ignoreThis", "andignoreThis", "alsoIgnoreThis"]
});


})




client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === `test`){
      client.commands.get(`test`).execute(message, args);
    } else if(command === `rules`){
      client.commands.get(`rules`).execute(message, args);
    } else if(command === `clear`){
      client.commands.get(`clear`).execute(message, args);
    } else if(command === `kick`){
      client.commands.get(`kick`).execute(message, args);
    } else if(command === `ban`){
      client.commands.get(`ban`).execute(message, args);
    } else if(command === `youtube`){
      client.commands.get(`youtube`).execute(message, args)
    } else if(command === `developer`){
      client.commands.get(`developer`).execute(message, args)
    } else if(command === `help`){
      client.commands.get(`help`).execute(message, args)
    } else if(command === `helpme`){
      client.commands.get(`helpme`).execute(message, args)
    } else if(command === `homework`){
      client.commands.get(`homework`).execute(message, args)
    } else if(command === `tempmute`){
      client.commands.get(`tempmute`).execute(message, args)
    } else if(command === `meme`){
      client.commands.get(`meme`).execute(message, args)
    } else if(command === `mute`){
      client.commands.get(`mute`).execute(message, args)
    } else if(command === `unmute`){
      client.commands.get(`unmute`).execute(message, args)
    } else if(command === `corona`){
      client.commands.get(`corona`).execute(message, args)
    } else if(command === `mem`){
      client.commands.get(`mem`).execute(message, args)
    } else if(command === `tempban`){
      client.commands.get(`tempban`).execute(message, args)
    }
});
 
client.login('NzY3NjY1OTA1NTA0MDkyMTYw.X41Olg.b11u0qhcTlfgta7w8IX0QcJbWt0');
 

