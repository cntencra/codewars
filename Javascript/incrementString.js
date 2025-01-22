
export function incrementString (string) {
     
    const regex = /([a-zA-Z]+)(\d+$)/;
    
    const match = string.match(regex);
    console.log(match);
    console.log(!match);

    if (!match) {
        return string + '1';
    }

    if (!match[2]) {
        return string + '1';
    }
    
    const length = match[2].length;
    const number = Number(match[2]) + 1;
    const numberStr = String(number);
    
    const padded = numberStr.padStart(length, "0");
    
    return match[1] + padded;
}