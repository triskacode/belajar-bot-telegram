export enum TopicType {
  Start,
  Help,
}

interface TopicInterface {
  type: TopicType | null;
}

export const Topic: TopicInterface = {
  type: null,
};
