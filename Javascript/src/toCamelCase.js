export function toCamelCase(str) {

    if (str.length === 0) {
        return "";
    }
    const regex = /[_-]/

    const words = str.split(regex);

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
    }

    return words.join("");
}