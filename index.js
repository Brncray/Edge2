const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");





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
  console.log('This bot is online!')
  client.user.setActivity('Lumina Servers', {
      type: 'WATCHING'
  }).catch;
})








//client.on('message', (message) => { 
  //if(message.channel.id == "783050074270859298" || "783320249458098186") return
  //if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { 
    //message.delete() 
      //.then(message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**'))
  //}
//})


//client.on('message', (message) => { 
  //if(message.channel.id == "783050074270859298") return
  //if (message.content.includes('https://www.youtube.com'||'https://www.youtube.com/watch')) { 
    //message.delete() 
      //.then(message.channel.send('Link Deleted:\n**Invite links are not permitted on this channel**'))
  //}
//})




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
    } else if(command === `kick`){
      client.commands.get(`kick`).execute(message, args);
    } else if(command === `ban`){
      client.commands.get(`ban`).execute(message, args);
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
    } else if(command === `faq`){
      client.commands.get(`faq`).execute(message, args)
    } else if(command === `clear`){
      client.commands.get(`clear`).execute(message, args)
    } else if(command === `faq2`){
      client.commands.get(`faq2`).execute(message, args)
    } else if(command === `warn`){
      client.commands.get(`warn`).execute(message, args)
    } else if(command === `invite`){
      client.commands.get(`invite`).execute(message, args)
    }
});
 
client.login('NzgzMDU0NjA0Njc3MTUyNzk4.X8VKbg.x8CefFcPtzbT93rKH1gTAAo6RWE');
 

