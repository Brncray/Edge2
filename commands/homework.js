const Discord = require('discord.js');


module.exports = {
    name: 'homework',
    description: "Updated Homework",
    execute(message, args, ) {
        const rules = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Homework')
        .setDescription('Get Homework Every Week!')
        .addFields(
            {name: 'Homework week of 11/29/2020', value: 'An essay about you\'re favorite thing to do in free time!'},

        )
        .setFooter('Made by Brncray#2527');
    
    message.channel.send(rules);
    
    }
    
    
    
    
    
    
    }