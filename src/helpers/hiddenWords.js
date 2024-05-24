const dictionary = new Set(["GANSTER", "GRADIUS", "NEGRITA", "TIJERAS", "TRIDENT", "TURISTA"]); // Añade más palabras aquí

const processingWords = (Letters, qtyLetter) => {
    const allWords = permute(Letters, qtyLetter)
    let validWords = new Set();

    for (let permutation of allWords) {
        if (isValidWord(permutation)) {
            validWords.add(permutation);
        }
    }
    return Array.from(validWords)
}

const isValidWord = (word) => {
    return dictionary.has(word)
}

const permute = (Letters, qtyLetter) => {
    if (qtyLetter === 1) {
        return Letters.split('');
    }

    let allWords = []
    let length = Letters.length
    for(let i = 0; i < length; i++){
        let char = Letters[i];
        let remaining = Letters.slice(0, i) + Letters.slice(i + 1);
        let permutationRemainings = permute(remaining, qtyLetter - 1)
        for(let permutation of permutationRemainings){
            allWords.push(char + permutation)
        }
    }
    return allWords
}

module.exports = processingWords

