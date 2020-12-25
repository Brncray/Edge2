const Discord = require('discord.js');


module.exports = {
    name: 'help',
    description: "commands for the server.",
    execute(message, args, ) {
        const commands = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Commands for the server')
        .addFields(
            {name: 'Command 1', value: 'ban'},
            {name: `Command 2`, value: `kick`},
            {name: `Command 3`, value: `ping`},
            {name: `Command 4`, value: `rules`},
            {name: `Command 5`, value: `developer`},
            {name: `Command 6`, value: `clear`},
            {name: `Command 8`, value: `meme`},
            {name: `Command 9`, value: `unmute`},
            {name: `Command 10`, value: `corona`},
            {name: `Command 11`, value: `tempban`}


        )
        .setFooter('Made by Brncray#2527');
    
    message.channel.send(commands);
    
    }
    
    
    
    
    
    
    }