export function duplicateCount(text) {
    if (!text) {return 0};

    let count = 0;
    const uniqueChars = [];
    const countedChars = [];
    const chars = text.toLowerCase().match(/([a-z])/g);
    for (const char of chars) {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        } else {
            if(!countedChars.includes(char)) {
                count++;
                countedChars.push(char);
            }
        }
    }

    return count;
}