import { Topic, TopicType } from "shared/topic";
import { Context, Markup } from "telegraf";

export const helpHandler = async (ctx: Context) => {
  await ctx.reply("aku cuma bisa bangunin kamu tidur");
  await ctx.reply(
    "mau aku bangunin kamu tidur?",
    Markup.keyboard([
      Markup.button.text("iyaaa"),
      Markup.button.text("ngga usah deh"),
    ])
      .oneTime(true)
      .resize(true)
  );

  Topic.type = TopicType.Help;
};
