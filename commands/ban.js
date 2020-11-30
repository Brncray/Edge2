module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        const target = message.mentions.users.first();
 
        if(message.member.permissions.has("BAN_MEMBERS")){
            message.channel.send("Checking for permissions...")
 
        } else {
            return message.channel.send(`You do not have the right permissions`) 
        }
 
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send(`You couldn't ban that member!`);
        }
    }
}