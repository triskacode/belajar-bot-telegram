import { Context } from "telegraf";

export const wakeUpHandler = async (ctx: Context) => {
  console.log("wake up");
  ctx.reply("mao dibangunin jam berapaa?");
};
