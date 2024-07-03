const fs = require('fs');
const path = require('path');
const IDictionary = require('./InterfaceDictionary');

class Dictionary extends IDictionary {
    constructor(){
        super()
        this.words = new Set(this.loadWords())
    }

    loadWords(){
        const filePath = path.join(__dirname, 'words.json')
        const data = fs.readFileSync(filePath, 'utf-8')
        const jsonData = JSON.parse(data)
        return jsonData.words
    }

    availableWordsToSearch(){
        return this.words
    }
}

module.exports = Dictionary