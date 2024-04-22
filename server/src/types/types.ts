export enum REALTY {
  SALE = 'sale',
  RENT = 'rent',
  OWN_OBJECT = 'own',
}

export type PostsTypeTag = REALTY.RENT | REALTY.SALE | REALTY.OWN_OBJECT;

export class PostType {
  userIdCreator: string;
  area: string;
  district: string;
  phone: string;
  city: string;
  price: string | number;
  additionalFields?: { label: string; value: string }[];
  images: string[];
  bgFolderImages: string;
  tag: PostsTypeTag;
}


export enum ROLE {
  ADMIN = 'admin',
  USER = 'user',
}