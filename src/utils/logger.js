// Read log from API fetch

export const Logger = (label, logs) => {
    if (import.meta.env.VITE_NODE_ENV === 'production') return
    console.group(label)
    console.table(logs)
    console.groupEnd()
}