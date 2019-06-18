import { toJson } from "unsplash-js";
import Unsplash from "unsplash-js/native";
import { Image } from "../types";

export type OrderBy = "latest" | "oldest" | "popular";

export default class UnsplashApiService {
  private applicationId =
    "c78b84d8af2668544fde430df285568c5b218d7fcd79012921af03e13e71dc3d";
  private secret =
    "e69782d357dddee323876dbdaaf4862bebd1a5f22d52f2ddea04e35f8764f67e";

  private unsplash = new Unsplash({
    applicationId: this.applicationId,
    secret: this.secret
  });

  /**
   * Return list of images by params
   *
   * @static
   * @param {number} page
   * @param {number} perPage
   * @param {OrderBy} orderBy
   * @returns {Promise<Image[]>}
   * @memberof UnsplashApiService
   */
  async fetchPhotos({
    page,
    perPage,
    order
  }: {
    page: number;
    perPage: number;
    order: OrderBy;
  }): Promise<Image[]> {
    return await toJson(
      await this.unsplash.photos.listPhotos(page, perPage, order)
    );
  }

  async fetchPhoto({
    id,
    width,
    height,
    rectangle
  }: {
    id: string;
    width?: string;
    height?: string;
    rectangle?: number[];
  }): Promise<Image> {
    return await toJson(
      await this.unsplash.photos.getPhoto(id, width, height, rectangle)
    );
  }

  async fetchCollections({
    page,
    perPage,
    order
  }: {
    page: number;
    perPage: number;
    order: OrderBy;
  }) {
    return await toJson(
      await this.unsplash.collections.listCollections(page, perPage, order)
    );
  }

  async fetchPhotosFromCollection({
    id,
    page,
    perPage,
    order
  }: {
    id: number;
    page: number;
    perPage: number;
    order: OrderBy;
  }) {
    return await toJson(
      await this.unsplash.collections.getCollectionPhotos(
        id,
        page,
        perPage,
        order
      )
    );
  }

  /**
   * Retrieve public user info
   *
   * @param {string} username
   * @returns
   * @memberof UnsplashApiService
   */
  async getUser(username: string) {
    return await toJson(await this.unsplash.users.profile(username));
  }
}
