function analyzeSentence(sentence) {
    let length = 0;
    let words = 0;
    let vowels = 0;
    let inWord = false;

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        // Update the length for each character except the period
        if (char !== '.') {
            length++;
        }

        // Check for vowels
        if ('aeiouAEIOU'.includes(char)) {
            vowels++;
        }

        // Check for words (words are assumed to be separated by a single space)
        if (char !== ' ' && char !== '.') {
            if (!inWord) {
                inWord = true;
                words++;
            }
        } else {
            inWord = false;
        }
    }

    console.log("Length of the sentence: " + length);
    console.log("Number of words: " + words);
    console.log("Number of vowels: " + vowels);
}


let sentence = "This is an example sentence.";
analyzeSentence(sentence);
