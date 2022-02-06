import dotenv from "dotenv";

dotenv.config();

export const config = {
  app: {
    BOT_TOKEN: process.env.BOT_TOKEN,
  },
};
