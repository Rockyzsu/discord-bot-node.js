require('dotenv').config()
const Discord = require('discord.js');
const { Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// 定义事件：当Bot完成登录并准备好时触发
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});



// 定义事件：当收到消息时触发
client.on('messageCreate', (message) => {
  // 检查消息是否提及Bot
  if (message.mentions.has(client.user)) {
    console.log(`${message.author.username} mentioned me: ${message.content}`);
  }else{
    console.log(`${message.author.username} said: ${message.content}`);
  }
});



// 运行Bot
client.login(process.env.TOKEN); // 替换为您的Discord令牌