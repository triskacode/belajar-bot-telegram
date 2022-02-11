import moment from "moment-timezone";
import { Topic, TopicType } from "shared/topic";
import { Context, NarrowedContext } from "telegraf";
import { MountMap } from "telegraf/typings/telegram-types";

export const wakeUpTopicListener = async (
  ctx: NarrowedContext<Context, MountMap["text"]>
) => {
  let dateContext: "nantii" | "besokk" = "nantii";
  const userReply = ctx.update.message.text;
  const userReplyDate = moment.tz(userReply, "HH:mm", true, "Asia/Jakarta");

  if (userReplyDate.isValid()) {
    if (userReplyDate.isBefore(moment.tz("Asia/Jakarta"))) {
      userReplyDate.add(1, "day");
      dateContext = "besokk";
    }

    console.log(
      moment().tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss"),
      "wakeUpTopicListener",
      userReply,
      userReplyDate.format("YYYY-MM-DD HH:mm:ss")
    );

    await ctx.reply(
      `oke, akuu ${dateContext} akan bangunin kamu jam ${userReplyDate.format(
        "HH:mm"
      )}`
    );

    setTimeout(async () => {
      await ctx.reply("banguuunnnnnn");
    }, userReplyDate.diff(moment.tz("Asia/Jakarta"), "ms"));
  } else {
    await ctx.reply("aku ngga ngertii yang kmu maksud");
    await ctx.reply("coba balesnya kaya gini: 08:00");

    Topic.type = TopicType.WakeUp;
  }
};
