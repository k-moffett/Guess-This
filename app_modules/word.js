
class Word {
    constructor(letter, guessed){
        this.letter = letter
        if (this.guessed === undefined) {
            this.guessed = false
        }
        else if (this.guessed === true) {
            this.guessed = true
        }
    }

    update_guessed(letter, guessed) {
        if (this.guessed === false) {
            this.letter = '_'
        }
        else if (this.guessed === true) {
            this.letter = letter
        }
    }

    user_display (obj) {
        return this.letter
    }
}

module.exports = Word