import { get } from "../../../utils/interceptors";

export const getAlbumn = () => {
    return get('/albums')
}