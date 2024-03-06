// Initialize dotenv
require('dotenv').config();

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on('messageCreate', (message) => {
    console.log(`👍 works as expected`);
  });
  client.on('interactionCreate', (interaction) => {
    console.log(`👍 works as expected`);
  });

// Log In our bot
// client.login(process.env.CLIENT_TOKEN);

// client.login(TOKEN);


// 运行Bot
client.login(process.env.TOKEN); // 替换为您的Discord令牌