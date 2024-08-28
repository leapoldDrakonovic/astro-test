const { Telegraf, Markup } = require("telegraf");

// URL for the web app
const webUrl = "https://localhost:5173";
// Token
const token = "7474843697:AAF1CnuG7cauiytcstWwlU6DdkbyZekIAR0";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  return ctx.reply(
    "Hello",
    Markup.keyboard([
      Markup.button.webApp("Open horoscope :)", webUrl) // Correct webApp button syntax
    ])
  );
});

bot.launch();
