import { config } from "config/app";
import { Context, Markup, Telegraf } from "telegraf";
import { Chat } from "telegraf/typings/core/types/typegram";

const bot = new Telegraf(config.app.BOT_TOKEN);

bot.telegram.setMyCommands([
  {
    command: "start",
    description: "mulai komunikasi dengan akuu..",
  },
  {
    command: "bagunin_tidur",
    description: "nanti aku akan bangunin kamu tidur",
  },
  {
    command: "help",
    description: "apa aja yang bisa aku lakukan",
  },
]);

async function handleHelp(ctx: Context) {
  await ctx.reply("mau dibantu apa nih..");
}

async function handleStart(ctx: Context) {
  if (ctx.chat.type !== "private") {
    await ctx.reply(
      "Aku sm masterku cuma dibolehin chat sama orang tok. gaboleh chat sm yang lain, wkwkwk"
    );
    await ctx.leaveChat();
    return;
  }

  await ctx.reply(
    `Haloo ${(ctx.chat as Chat.PrivateChat).first_name ?? ""}...`
  );
  await ctx.reply(
    `Ada yang bisa aku bantuu...`,
    Markup.keyboard([
      Markup.button.text("iyaaa"),
      Markup.button.text("hehe, ngga jadii"),
    ])
      .oneTime(true)
      .resize(true)
  );

  bot.on("text", async (ctx) => {
    const userReply = ctx.update.message.text;

    switch (userReply) {
      case "iyaaa":
        await handleHelp(ctx);
        break;
      case "hehe, ngga jadii":
        await ctx.reply("oke gapapa...");
        await ctx.reply("tapi nanti klo butuh bantuanku ketik /start ajaa");
        break;
      default:
        await ctx.reply("aku ngga ngertii yang kmu maksud");
        await ctx.reply("coba kmu pilih pilihan keybord dibwah ajaa..");
    }
  });
}

bot.start(handleStart);
bot.help(handleHelp);

bot.command("bagunin_tidur", (ctx) => {
  console.log(ctx);
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
