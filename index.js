const TeleBot = require('telebot');
const bot = new TeleBot(process.env.TOKEN);

bot.on('text', (msg) => msg.reply.text('Hi'));

bot.start();
