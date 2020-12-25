const ms = require('ms')



    module.exports = {
        name: 'tempmute',
        description: "Tempmute someone",
        execute(message, args, ) {
    
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];


      if(message.member.hasPermission('MANAGE_MESSAGES')) {
            let member = message.mentions.members.first() || message.guild.member(args[0])
            if(!member) return message.reply('Please Provide a Member to TempMute.')

            let role = message.guild.roles.cache.find(role => role.name === "Muted");

            if (!role) return message.reply("Couldn't find the 'muted' role.")

            let time = args[1];
            if (!time) {
                return message.reply("You didnt specify a time!");
            }

            member.roles.add(role);

            message.channel.send(`@${member.user.tag} has now been muted for ${ms(time)}`)

            setTimeout( function () {
                member.roles.remove(role);
                message.channel.send(`@${member.user.tag} has been unmuted.`)
            }, ms(time));

       } else {
            return message.channel.send('You dont have perms.')
        }
}}