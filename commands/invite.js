const Discord = require('discord.js');


module.exports = {
    name: 'invite',
    description: "Get the bot invite",
    execute(message, args, ) {
        const rules = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('My Invite Link!')
        .setURL(`https://discord.com/oauth2/authorize?client_id=783054604677152798&scope=bot&permissions=2147483647`)
        .setDescription(`Click on the link for the invite!`)
        .setFooter('Made by Brncray#2527');
    
    message.channel.send(rules);
    
    }
    
    
    
    
    
    
    }