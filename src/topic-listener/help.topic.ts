import { helpHandler } from "handler/help.handler";
import { wakeUpHandler } from "handler/wake-up.handler";
import { getRejectionAnswer } from "helper/get-rejection-answer";
import { Context, NarrowedContext } from "telegraf";
import { MountMap } from "telegraf/typings/telegram-types";

export const helpTopicListener = async (
  ctx: NarrowedContext<Context, MountMap["text"]>
) => {
  const userReply = ctx.update.message.text;

  if (userReply === "iyaaa") {
    await wakeUpHandler(ctx);
  } else if (userReply === "ngga usah deh") {
    await getRejectionAnswer(ctx);
  }
};
