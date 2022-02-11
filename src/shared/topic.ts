export enum TopicType {
  Start,
  Help,
  WakeUp,
}

interface TopicInterface {
  type: TopicType | null;
}

export const Topic: TopicInterface = {
  type: null,
};
