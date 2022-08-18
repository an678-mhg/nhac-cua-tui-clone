export interface Artist {
  coverImageURL: string;
  id: number;
  imageUrl: string;
  name: string;
  role: string[];
}

export interface Artist2 {
  artistId: number;
  name: string;
  shortLink: string;
  imageUrl: string;
}

export interface Playlist2 {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist2[];
  type: string;
  dateRelease: any;
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

export interface Playlist {
  playlist: Playlist2[];
  total: number;
}

export interface Artist3 {
  artistId: number;
  name: string;
  shortLink: string;
  imageUrl: string;
}

export interface RefMapping {
  refKey: string;
  refType: string;
}

export interface Song2 {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist3[];
  type: string;
  dateRelease: number;
  dateCreate: number;
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
  description: string;
}

export interface Song {
  song: Song2[];
  total: number;
}

export interface Artist4 {
  artistId: number;
  name: string;
  shortLink: string;
  imageUrl: string;
}

export interface RefMapping2 {
  refKey: string;
  refType: string;
}

export interface SongNearly {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist4[];
  type: string;
  dateRelease: number;
  dateCreate: number;
  uploadBy?: any;
  provider?: any;
  isMyPlaylist: boolean;
  statusViewValue: number;
  statusPlayValue: number;
  statusDownloadValue: number;
  statusAddPlaylistValue: number;
  refMapping: RefMapping2[];
  genreKey: string;
  streamUrls: any[];
  description: string;
}

export interface Artist5 {
  artistId: number;
  name: string;
  shortLink: string;
  imageUrl: string;
}

export interface RefMapping3 {
  refKey: string;
  refType: string;
}

export interface Video2 {
  key: string;
  title: string;
  thumbnail: string;
  duration: string;
  artists: Artist5[];
  type: string;
  dateRelease: number;
  dateCreate: number;
  uploadBy?: any;
  provider?: any;
  isMyPlaylist: boolean;
  statusViewValue: number;
  statusPlayValue: number;
  statusDownloadValue: number;
  statusAddPlaylistValue: number;
  refMapping: RefMapping3[];
  genreKey: string;
  streamUrls: any[];
}

export interface Video {
  total: number;
  video: Video2[];
}

export interface ArtistDetails {
  status: string;
  artist: Artist;
  playlist: Playlist;
  song: Song;
  songNearly: SongNearly[];
  video: Video;
  clientIp: string;
  time: number;
}
