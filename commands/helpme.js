const Discord = require('discord.js');


module.exports = {
    name: 'helpme',
    description: "Gets you help.",
    execute(message, args, ) {
        const commands = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Help Me')
        .addFields(
            {name: 'Someone breaking the rules?', value: 'Report them to a moderator!'},
            {name: 'Want cool roles?', value: 'Go to reaction roles! ,'},
            {name: 'Want to apply for staff?', value: 'Go to the mod applications channel to see if they are open!'},
            {name: 'Want to add a command to the bot?', value: 'Ask Tape!'},

        )
        .setFooter('Made by Brncray#2527');
    
    message.channel.send(commands);
    
    }
    
    
    
    
    
    
    }