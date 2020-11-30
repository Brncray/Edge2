const ms = require("ms");

module.exports = {
    name: `tempban`,
    description: "Ban someone temporarily.",
    execute: async function(message, args) {
  
    
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission!");

    
    var user = message.guild.member(message.mentions.users.first());

    if (!user) return message.channel.send("Use the command like this: Tempban, user, time, reason.");

   
    if (user.hasPermission("BAN_MEMBERS")) return message.channel.send("You cannot ban this user!");

   
    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Provide a reason!");

    var tempBanTime = args[1];

    
    if (ms(tempBanTime)) {

       
        await message.guild.member(user).ban({ days: 7, reason: 'your reason here' })

        message.channel.send(`${user} has been banned for ${tempBanTime}`);

       
        setTimeout(function () {
            
            
            message.guild.unban(user.id);

            message.channel.send(`${user} is now unbanned!`);

        }, ms(tempBanTime));

 
    } else {
        return message.channel.send("Specify a valid time.");
    }
}}
