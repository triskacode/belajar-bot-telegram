import { helpHandler } from "handler/help.handler";
import { getRejectionAnswer } from "helper/get-rejection-answer";
import { Context, NarrowedContext } from "telegraf";
import { MountMap } from "telegraf/typings/telegram-types";

export const startTopicListener = async (
  ctx: NarrowedContext<Context, MountMap["text"]>
) => {
  const userReply = ctx.update.message.text;

  if (userReply === "iyaaa") {
    helpHandler(ctx);
  } else if (userReply === "hehe, ngga jadii") {
    getRejectionAnswer(ctx);
  }
};
