export const baseURL =
    window.location.host === "localhost:3000"
        ? "http://localhost:5000"
        : window.location.origin


export const baseURLSocket =
    window.location.host === "localhost:3000"
        ? "http://localhost:5001"
        : `${window.location.origin.split(':')[0]}:${window.location.origin.split(':')[1]}`


