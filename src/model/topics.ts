export interface Topic {
  title: string;
  key: string;
  backgroundColor: string;
  description: string;
  coverImageURL: string;
  thumbURL: string;
}

export interface TopicCover {
  title: string;
  key: string;
  backgroundColor: string;
  description: string;
  coverImageURL: string;
  thumbURL: string;
}

export interface Topics {
  status: string;
  topic: Topic[];
  topicCover: TopicCover[];
  clientIp: string;
  time: number;
}
