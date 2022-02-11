import { Topic, TopicType } from "shared/topic";
import { Context, NarrowedContext } from "telegraf";
import { MountMap } from "telegraf/typings/telegram-types";
import { helpTopicListener } from "topic-listener/help.topic";
import { startTopicListener } from "topic-listener/start.topic";
import { wakeUpTopicListener } from "topic-listener/wake-up.topic";

export const textHandler = async (
  ctx: NarrowedContext<Context, MountMap["text"]>
) => {
  if (Topic.type === TopicType.Start) {
    startTopicListener(ctx);
  } else if (Topic.type === TopicType.Help) {
    helpTopicListener(ctx);
  } else if (Topic.type === TopicType.WakeUp) {
    wakeUpTopicListener(ctx);
  } else {
    await ctx.reply("aku ngga ngertii yang kmu maksud");
    await ctx.reply("coba ketik /help ajaa");
    await ctx.reply("ato coba kmu tanya ayahku @triskamk, mungkin dia ngertii");
  }

  Topic.type = null;
};
