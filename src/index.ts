import { config } from "config/app";
import { helpHandler } from "handler/help.handler";
import { startHandler } from "handler/start.handler";
import { textHandler } from "handler/text.handler";
import { wakeUpHandler } from "handler/wake-up.handler";
import moment from "moment";
import { Telegraf } from "telegraf";

const bot = new Telegraf(config.app.BOT_TOKEN);
moment.locale("id");

bot.telegram.setMyCommands([
  {
    command: "start",
    description: "mulai komunikasi dengan akuu..",
  },
  {
    command: "bagunin_tidur",
    description: "aku bisa bangunin kamu tidur",
  },
  {
    command: "help",
    description: "apa aja yang bisa aku lakukan",
  },
]);

bot.start(startHandler);
bot.help(helpHandler);
bot.command("bagunin_tidur", wakeUpHandler);
bot.on("text", textHandler);

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
