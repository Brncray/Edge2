module.exports = {
    name: `test`,
    description: "testing command for Brncray",
    execute(message, args) {


        let role = message.guild.roles.cache.find(r => r.name ==="Co-Owner");

        if(message.member.permissions.has("BAN_MEMBERS")){
            message.channel.send("You have permissions to ban members!")
        } else {
            message.channel.send(`You don\'t have the permission BAN_MEMBERS`)
        }
    }
}