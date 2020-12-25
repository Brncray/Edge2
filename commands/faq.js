const Discord = require('discord.js');




module.exports = {
    name: 'faq',
    description: "FAQ1",
    execute(message, args, ) {
        const faq = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Faq`)
        .setDescription(`FAQ for the server.`)
        .addFields(
            {name: 'How do I get Brncray\'s Utilities in my server?', value: 'Brncray\'s Utilities is a privately owned bot and cannot operate in other servers. '},
            {name: 'How do I apply for staff?', value: 'If staff apps are open @Brncray#2527 will announce it with a @ everyone ping!'},
            {name: 'Ask Brncray to add more stuff here because he is out of ideas.', value: 'I am out of ideas :('}



            
        )
        .setFooter(`Made by Brncray#2527`)
       

        message.channel.send(faq)
}



}