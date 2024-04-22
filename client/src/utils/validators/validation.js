export const requiredField = value => {
    if (value) return undefined;

    return "This field is required"
}

export const maxFieldLength = (maxLength) => (value) => {
    if(value && value.length > maxLength) return "Max length is " + maxLength + " symbols";

    return undefined;
}

export const minFieldLength = (minLength) => (value) => {
    if(value && value.length < minLength) return "Min length is " + minLength + " symbols";

    return undefined;
}

export const mailRequired = value => {
    if(value.includes('@')) return undefined

    return "Write correct email"
}