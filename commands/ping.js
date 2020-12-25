module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
    if(message.member.roles.cache.has(`783050073528991792`)){
        message.channel.send('pong!');

    } else { 
        message.channel.send(` You can\'t send this command because you don\'t have the right permissions!`)
    }
    
    }
}
