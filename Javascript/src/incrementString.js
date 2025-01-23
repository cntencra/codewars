
export function incrementString (string) {
     
    const regex = /(\d+$)/;
    
    const match = string.match(regex);

    if (!match) {
        return string + '1';
    }
    
    const length = match[1].length;
    const number = Number(match[1]) + 1;
    const numberStr = String(number);
    
    const padded = numberStr.padStart(length, "0");
    
    return string.slice(0, -length) + padded;
}