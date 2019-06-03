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
  async getListPhotos(
    page: number,
    perPage: number,
    orderBy: OrderBy
  ): Promise<Image[]> {
    return await toJson(
      await this.unsplash.photos.listPhotos(page, perPage, orderBy)
    );
  }

  /**
   * Return Image details
   *
   * @static
   * @param {string} id
   * @param {string} [width]
   * @param {string} [height]
   * @param {number[]} [rectangle]
   * @returns {Promise<Image>}
   * @memberof UnsplashApiService
   */
  async getPhoto(
    id: string,
    width?: string,
    height?: string,
    rectangle?: number[]
  ): Promise<Image> {
    // const data = await unsplash.photos.getPhoto(id, width, height, rectangle);
    return await toJson(
      await this.unsplash.photos.getPhoto(id, width, height, rectangle)
    );
  }

  /**
   * Return the list of collection upon assigned criterias
   *
   * @param {number} page
   * @param {number} perPage
   * @param {OrderBy} orderBy
   * @returns
   * @memberof UnsplashApiService
   */
  async getCollectionList(page: number, perPage: number, orderBy: OrderBy) {
    return await toJson(
      await this.unsplash.collections.listCollections(page, perPage, orderBy)
    );
  }

  async getCollectionPhotos(
    id: number,
    page: number,
    perPage: number,
    orderBy: OrderBy
  ) {
    return await toJson(
      await this.unsplash.collections.getCollectionPhotos(
        id,
        page,
        perPage,
        orderBy
      )
    );
  }
}
