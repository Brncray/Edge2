const Discord = require('discord.js');


module.exports = {
    name: 'developer',
    description: "View the server rules.",
    execute(message, args, ) {
        const youtube = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Developer')
        .setDescription(`Brncray#2527 is the developer of this bot, if you would like to contact him about *\anything\* go ahead!`)
        .setThumbnail(`https://i.imgur.com/0dG2g3t.png`)
        .setTimestamp()
        .setFooter(`*\Made by Brncray#2527\*`)
        
 

    
    message.channel.send(youtube);
    
    }
    
    
    
    
    
    
    }