export interface ShowCase {
  description: string;
  imageUrl: string;
  key: string;
  order: number;
  thumbnail: string;
  title: string;
  url: string;
}

export interface Artists {
  artistId: number;
  imageUrl: string;
  name: string;
  shortLink: string;
}

export interface Item {
  artists: Artists[];
  dateCreate: number;
  dateModify: string;
  dateRelease: number;
  description: string;
  duration: string;
  genreKey: string;
  key: string;
  listTag: any[];
  numOfItems: number;
  provider: string | null;
  refMapping: any[];
  songs: string | null;
  thumbnail: string;
  title: string;
  type: string;
  uploadBy: string | null;
  videos: string | null;
  imageUrl?: string;
}

export interface TopicEvent {
  groupName: string;
  listPlaylist: Item[];
}

export interface NewRelease {
  playlist: Item[];
  song: Item[];
}
