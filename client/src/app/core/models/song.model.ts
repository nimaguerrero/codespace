interface Cover {
  url: string;
  public_id: string;
}

export interface Song {
  id: string;
  name: string;
  author: string;
  release_year: string;
  album: string;
  multimedia: string;
  tags_names: string[];
  genres: string[];
  artists: string[];
  description: string;
  stars: number;
  state: string;
  active: boolean;
  cover: Cover;
  link_youtube: string;
  createdAt: Date;
}
