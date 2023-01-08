// * configure local storage

export const configureLocalStorage = (name, value, action = 'set') => {
    if (action === 'set') {
        window.localStorage.setItem(name, value)
    } else {
        window.localStorage.removeItem(name)
    }
}

// * set local storage

export const setStorages = (storage) => {
    storage.map((item) => configureLocalStorage(item.name, item.value))
}

// * clear storage

export const clearStorage = (storage) => {
    storage.map((item) => configureLocalStorage(item, null, 'remove'))
}

// * get value from local storage

export const getStorage = (storage) => {
    const store = window.localStorage.getItem(storage)

    if (typeof storage !== 'undefined') {
        return store
    }

    return null
}