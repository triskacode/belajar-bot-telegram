import { Context } from "telegraf";

const listAnswer = [
  async function (ctx: Context) {
    await ctx.reply("oke gapapa...");
    await ctx.reply("tapi nanti klo butuh bantuanku ketik /help ajaa");
  },
  async function (ctx: Context) {
    await ctx.reply("bihh gajelas bgt asww");
    await ctx.reply("mangkanya ketik /help duluu...");
  },
  async function (ctx: Context) {
    await ctx.reply("siapppp");
    await ctx.reply("klo bingung ketik /help ajaaa...");
  },
  async function (ctx: Context) {
    await ctx.reply("/help dulu woyyyy");
    await ctx.reply("gajelas bgt...");
  },
  async function (ctx: Context) {
    await ctx.reply("anjg klo mo nyuruh ketik /help dulu woyyyy");
    await ctx.reply("biar tau aku bisanya apa ajaaa, gajelas bgt...");
  },
];

export const getRejectionAnswer = async (ctx: Context) => {
  const randomIndex = Math.floor(Math.random() * listAnswer.length);

  return listAnswer[randomIndex](ctx);
};
