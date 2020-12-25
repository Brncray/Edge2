module.exports = {
    name: `clear`,
    description: `Clears Messages`,
    async execute(message, args){

        if(message.member.hasPermission('MANAGE_MESSAGES')) {

        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear.");
        if(isNaN(args[0])) return message.reply("Please enter a real number!")

        if(args[0] > 99) return message.reply("You can\'t do more than 99 messages!")
        if(args[0] < 1) return message.reply("You have to delete atleast one message!")

        await message.channel.messages.fetch({limit: parseInt(args[0])}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    } else {
        return message.channel.send('You dont have perms.')
}

}}