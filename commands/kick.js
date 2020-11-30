module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        const target = message.mentions.users.first();
 
        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send("Checking for permissions...")
 
        } else {
            return message.channel.send(`You do not have the right permissions`) 
        }
 
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You couldn't kick that member!`);
        }
    }
}