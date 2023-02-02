import { get } from "../../../utils/interceptors";

export const getUsers = () => {
    return get('/users')
}