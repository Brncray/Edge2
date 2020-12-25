const Discord = require('discord.js');


module.exports = {
    name: 'rules',
    description: "View the server rules.",
    execute(message, args, ) {
        const rules = new Discord.MessageEmbed()
        .setColor('#F90505')
        .setTitle('Rules')
        .setDescription('These rules are a replica of the ones in the server. Meaning they all apply and MUST be followed.')
        .addFields(
            {name: 'Rule 1', value: 'No spamming'},
            {name: `Rule 2`, value: `No trolling other users`},
            {name: `Rule 3`, value: `Do not bully or harm people`},
            {name: `Rule 3`, value: `No racism or sexism is permitted`},
            {name: `Rule 4`, value: `No trolling other users`},
            {name: `Rule 5`, value: `Do not advertise`},
            {name: `Rule 6`, value: `You must follow Discord ToS`},
            {name: `Rule 7`, value: `No Hacking`},
            {name: `Rule 8`, value: `No account selling or cracking`},
            {name: `Rule 9`, value: `No dark humour`},
            {name: `Rule 10`, value: `Swearing is *\*NOT*\* permitted`},
            {name: `Rule 11`, value: `Nothing NSFW`},
            {name: `Rule 12`, value: `If you are staff. Do not abuse you're power!`}

        )
        .setFooter('Made by Brncray#2527');
    
    message.channel.send(rules);
    
    }
    
    
    
    
    
    
    }