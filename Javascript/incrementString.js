
export function incrementString (string) {
     
    const regex = /([a-zA-Z]+)(\d+)/;
    //upload to github and change above regex to /d+$/
    const match = string.match(regex);

    if (!match) {
        console.log(string + '1')
        return string + '1'
    }

    console.log(match);
    
    if (!match[2]) {
        console.log(match);
    }

    const length = match[2].length;
    const number = Number(match[2]) + 1;
    const numberStr = String(number);
    
    const padded = numberStr.padStart(length, "0");
    console.log(match[1] + padded); 
    return match[1] + padded;
}