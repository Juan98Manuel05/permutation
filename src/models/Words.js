const IDictionary = require('./InterfaceDictionary')

class Words{

    constructor(Letters, quantityLetters, dictionary) {
        if (!(dictionary instanceof IDictionary)) {
            throw new Error('dictionary must implement IDictionary');
        }
        this.Letters = Letters
        this.quantityLetters = quantityLetters
        this.dictionary = dictionary
    }

    processingWords(){
        const allWords = this.permute(this.Letters, this.quantityLetters)
        let validWords = new Set();

        for (let permutation of allWords) {
            if (this.isValidWord(permutation)) {
                validWords.add(permutation);
            }
        }
        return Array.from(validWords)
    }

    isValidWord (word){
        const allWords = this.dictionary.availableWordsToSearch()
        return allWords.has(word)
    }
    
    permute(Letters, quantityLetters){
        if (quantityLetters === 1) {
            return Letters.split('');
        }
    
        let allWords = []
        let length = Letters.length
        for(let i = 0; i < length; i++){
            let char = Letters[i];
            let remaining = Letters.slice(0, i) + Letters.slice(i + 1);
            let permutationRemainings = this.permute(remaining, quantityLetters - 1)
            for(let permutation of permutationRemainings){
                allWords.push(char + permutation)
            }
        }
        return allWords
    }
}

module.exports = Words