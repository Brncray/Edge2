module.exports = {
    name: `clear`,
    description: `Clears Messages`,
    async execute(message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear.");
        if(isNaN(args[0])) return message.reply("Please enter a real number!")

        if(args[0] > 999) return message.reply("You can\'t do more than 999 messages!")
        if(args[0] < 1) return message.reply("You have to delete atleast one message!")

        await message.channel.messages.fetch({Limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}