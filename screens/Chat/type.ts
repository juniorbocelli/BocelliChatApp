type RenderFunction = (x: any) => JSX.Element;

type User = {
  _id: string | number;
  name?: string;
  avatar?: string | number | RenderFunction;
};

type Reply = {
  title: string;
  value: string;
  messageId?: any;
};

type QuickReplies = {
  type: 'radio' | 'checkbox';
  values: Reply[];
  keepIt?: boolean;
};

interface Message {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: User;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  quickReplies?: QuickReplies;
};

export type MessageState = Array<Message>;

export type UserState = undefined | User;