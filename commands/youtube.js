const Discord = require('discord.js');


module.exports = {
    name: 'youtube',
    description: "View the server rules.",
    execute(message, args, ) {
        const youtube = new Discord.MessageEmbed()
        .setColor('#F90505')
        .setTitle('Tape\'s Youtube!')
        .setURL(`https://www.youtube.com/channel/UCB0bW8n0XYTmHQ-5yMz4x2g?`)
        .setDescription(`This is Tape\'s youtube channel! `)
 

    
    message.channel.send(youtube);
    
    }
    
    
    
    
    
    
    }