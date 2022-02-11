import moment from "moment";
import { Topic, TopicType } from "shared/topic";
import { Context, NarrowedContext } from "telegraf";
import { MountMap } from "telegraf/typings/telegram-types";

export const wakeUpTopicListener = async (
  ctx: NarrowedContext<Context, MountMap["text"]>
) => {
  let dateContext: "nantii" | "besokk" = "nantii";
  const userReply = ctx.update.message.text;
  const userReplyDate = moment(userReply, "HH:mm", true);

  if (userReplyDate.isValid()) {
    if (userReplyDate.isBefore(moment())) {
      userReplyDate.add(1, "day");
      dateContext = "besokk";
    }

    await ctx.reply(
      `oke, akuu ${dateContext} akan bangunin kamu jam ${userReplyDate.format(
        "HH:mm"
      )}`
    );

    setTimeout(async () => {
      await ctx.reply("banguuunnnnnn");
    }, userReplyDate.diff(moment(), "ms"));
  } else {
    await ctx.reply("aku ngga ngertii yang kmu maksud");
    await ctx.reply("coba balesnya kaya gini: 08:00");

    Topic.type = TopicType.WakeUp;
  }
};
