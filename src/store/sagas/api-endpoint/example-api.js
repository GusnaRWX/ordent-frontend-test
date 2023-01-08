import { get } from "../../../utils/interceptors";

// endpoint api action

export const getExample = () => {
    return get('/example')
}