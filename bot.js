const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

  bot.user.setStatus('dnd') // Can be 'available', 'idle', 'dnd', or 'invisible'
    bot.user.setPresence({
        game: {
            name: 'DM ME FOR NITRO',
            type: 0
        }
    });
});

});


 

});

 

client.login(process.env.ZdLvcLdUhqyhRxwRi2vD4JRy8ucg1B6E);
