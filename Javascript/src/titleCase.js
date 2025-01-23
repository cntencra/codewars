export function titleCase(title, minorWords) {

    if (title === "") {
        return "";  
    }
    //title in to lower case
    const words = title.toLowerCase().split(" ");
   

    if (minorWords) {
        const exclusionWords = minorWords.toLowerCase().split(" ");

        for (const i in words) {
            //If the word is not in exclusion words 
            if (!exclusionWords.includes(words[i])) {
                //Capitalise the word
                words[i] = words[i].replace(/\w/,fl => fl.toUpperCase());
            }}
        //Capitalise the first word
        words[0] = words[0].replace(/\w/,fl => fl.toUpperCase())
        return words.join(" ");
    } else {
        //Capitalise the whole string if there are no exclusion words
        return words.map(word => word.replace(/\w/,fl => fl.toUpperCase())).join(" ");
    }
}