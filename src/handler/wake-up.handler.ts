import { Topic, TopicType } from "shared/topic";
import { Context } from "telegraf";

export const wakeUpHandler = async (ctx: Context) => {
  await ctx.reply("mao dibangunin jam berapaa?");

  Topic.type = TopicType.WakeUp;
};
