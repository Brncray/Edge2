const Discord = require('discord.js');







module.exports = {
    name: `faq2`,
    description: "FAQ2",
    execute(message, args) {
        const faq2 = new Discord.MessageEmbed()
        

        .setColor(`RANDOM`)
        .setTitle(`FAQ2`)
        .setDescription(`FAQ2`)
        .addFields(
            {name: `Why can't I post links?`, value: `You can't post links in general chat or any other chat besides higher levels and #advertising because `},
            {name: `How do I report a Staff?`, value: `You can report a staff member by DMing @Brncray!`}
        )

            message.channel.send(faq2)
    }


}
