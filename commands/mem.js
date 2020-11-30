const Discord = require('discord.js');


module.exports = {
    name: 'mem',
    description: "You probalby meant \**\meme\**\ right?",
    execute(message, args, ) {
        const mem = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('You probalby meant \**\meme\**\ right?')
        .setDescription(`You probalby meant meme. Am I right?`)
        .setFooter(`Sub to Tape\'s youtube!`)

        
    
    
    message.channel.send(mem);
    
    }
    
    
    
    
    
    
    }