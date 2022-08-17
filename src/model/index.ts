export interface Artist {
  artistId: number;
  name: string;
  shortLink: string;
  imageUrl: string;
}

export interface RefMapping {
  refKey: string;
  refType: string;
}

export interface Song {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist[];
  type: string;
  dateRelease: any;
  dateCreate: any;
  uploadBy?: any;
  provider?: any;
  isMyPlaylist: boolean;
  statusViewValue: number;
  statusPlayValue: number;
  statusDownloadValue: number;
  statusAddPlaylistValue: number;
  refMapping: RefMapping[];
  genreKey: string;
  streamUrls: any[];
  description?: any;
}

export interface NewRelease {
  song: Song[];
  playlist: any[];
}

export interface Artist2 {
  artistId: number;
  name: string;
  shortLink: string;
  imageUrl: string;
}

export interface Song2 {
  title: string;
  position: number;
  oldPosition: number;
  highestPosition: number;
  totalWeekInRanked: number;
  thumbnail: string;
  artists: Artist2[];
  songKey: string;
  viewIn24H?: any;
  duration: number;
}

export interface Ranking {
  song: Song2[];
  week: number;
  year: number;
  key: string;
}

export interface Showcase {
  title: string;
  key: string;
  thumbnail: string;
  url: string;
  description: string;
  order: number;
  imageUrl: string;
}

export interface Artist3 {
  artistId: number;
  name: string;
  shortLink: string;
  imageUrl: string;
}

export interface Song3 {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist3[];
  type: string;
  dateRelease: any;
  dateCreate: any;
  uploadBy?: any;
  provider?: any;
  isMyPlaylist: boolean;
  statusViewValue: number;
  statusPlayValue: number;
  statusDownloadValue: number;
  statusAddPlaylistValue: number;
  refMapping: any[];
  genreKey: string;
  streamUrls: any[];
  description: string;
}

export interface Artist4 {
  artistId: number;
  name: string;
  shortLink: string;
  imageUrl: string;
}

export interface Top100 {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist4[];
  type: string;
  dateRelease: number;
  dateCreate: any;
  uploadBy?: any;
  provider?: any;
  refMapping: any[];
  genreKey: string;
  songs?: any;
  videos?: any;
  description: string;
  dateModify: string;
  listTag: any[];
  numOfItems: number;
}

export interface Topic {
  title: string;
  key: string;
  backgroundColor: string;
  description: string;
  coverImageURL: string;
  thumbURL: string;
}

export interface Artist5 {
  artistId: number;
  name: string;
  shortLink: string;
  imageUrl: string;
}

export interface ListPlaylist {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist5[];
  type: string;
  dateRelease: number;
  dateCreate: any;
  uploadBy?: any;
  provider?: any;
  refMapping: any[];
  genreKey: string;
  songs?: any;
  videos?: any;
  description: string;
  dateModify: string;
  listTag: any[];
  numOfItems: number;
}

export interface TopicEvent {
  groupName: string;
  listPlaylist: ListPlaylist[];
}

export interface Artist6 {
  artistId: number;
  name: string;
  shortLink: string;
  imageUrl: string;
}

export interface Video {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist6[];
  type: string;
  dateRelease: any;
  dateCreate: any;
  uploadBy?: any;
  provider?: any;
  isMyPlaylist: boolean;
  statusViewValue: number;
  statusPlayValue: number;
  statusDownloadValue: number;
  statusAddPlaylistValue: number;
  refMapping: any[];
  genreKey: string;
  streamUrls: any[];
}
