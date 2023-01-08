import axios from 'axios'
import { Logger } from './logger'
import { getStorage } from './storage'

// * log responser

export const logResponser = (res) => {
    if (!res) return null
    const { config } = res
    const loadtime = performance.now()
    const url = config.url.replace(import.meta.env.VITE_API_BASE_URL, '')

    // * send Response to logger
    Logger(`${config.method.toUpperCase()} ${url}`, {
        responseTime: loadtime,
        status: res.status,
        statusText: res.statusText,
        error: res?.data?.meta?.error || '',
        message: res?.data?.meta?.message || ''
    })
}

// * service env web
const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        Authorization: {
            toString () {
                return `Bearer ${getStorage('token')}`
            }
        },
        version: 'v1.0.0'
    }
})

service.interceptors.response.use(function (res) {
    if (import.meta.env.VITE_NODE_ENV !== 'production')
        logResponser(res)
    return res
}, function (error) {
    if (import.meta.env.VITE_NODE_ENV)
        logResponser
    return Promise.reject(error)
})

// function get axios
export const get = (url, params) => {
    return service.get(`${url}`, params)
}

// function post axios
export const post = (url, body) => {
    return service.post(`${url}`, body)
}

// function put axios
export const put = (url, body) => {
    return service.put(`${url}`, body)
}

// function delete axios
export const del = (url, params) => {
    return service.del(`${url}`, params)
}

export const getBlob = (url, params) => {
    return service.get(`${url}`, {
        params,
        responseType: 'blob'
    })
}