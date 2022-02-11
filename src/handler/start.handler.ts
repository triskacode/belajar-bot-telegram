import { Topic, TopicType } from "shared/topic";
import { Context, Markup } from "telegraf";
import { Chat } from "telegraf/typings/core/types/typegram";

export const startHandler = async (ctx: Context) => {
  if (ctx.chat.type !== "private") {
    await ctx.reply(
      "Aku sm ayahku cuma dibolehin chat sama orang tok. gaboleh chat sm group ato channel, wkwkwk"
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

  Topic.type = TopicType.Start;
};
