// Image interfaces
export interface Image {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  downloads?: number;
  likes: number;
  liked_by_user: boolean;
  description: string;
  exif?: Exif;
  location?: Location;
  tags?: ITag[];
  current_user_collections: Collection[];
  urls: Urls;
  links: ImageLinks;
  user: User;
  related_collections: {
    results: Collection[];
    total: number;
    type: string;
  };
}

export interface ITag {
  title: string;
}

export interface Exif {
  make: string;
  model: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface Location {
  city: string;
  country: string;
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Collection {
  id: number;
  title: string;
  description: string;
  featured: boolean;
  total_photos: number;
  ITags: ITag[];
  preview_photos: Image[];
  published_at: string;
  updated_at: string;
  curated: boolean;
  cover_photo?: Image;
  private: boolean;
  share_key: string;
  user: User;
}

export interface User {
  id: string;
  username: string;
  name: string;
  portfolio_url: string | null;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  insITagram_username: string;
  twitter_username: string;
  profile_image: ProfileImage;
  links: UserLinks;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

// Links interfaces
export interface Links {
  self: string;
  html: string;
}

export interface ImageLinks extends Links {
  download: string;
  download_location: string;
}

export interface UserLinks extends Links {
  photos: string;
  likes: string;
  portfolio: string;
}
