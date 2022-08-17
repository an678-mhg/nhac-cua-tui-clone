import {
  NewRelease,
  Ranking,
  Showcase,
  Song3,
  Top100,
  Topic,
  TopicEvent,
  Video,
} from ".";

export interface HomeData {
  status: string;
  newRelease: NewRelease;
  ranking: Ranking;
  showcase: Showcase[];
  song: Song3[];
  top100: Top100[];
  topic: Topic[];
  topicEvent: TopicEvent[];
  video: Video[];
  clientIp: string;
  time: number;
}
