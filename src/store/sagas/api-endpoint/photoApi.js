import { get } from "../../../utils/interceptors";

export const getPhotos = (payload) => {
    return get(`/photos?albumId=${payload}`)
}