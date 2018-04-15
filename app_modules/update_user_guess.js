
update_user_guess = (word_letters, guessed_so_far, current_guess) => {
    console.log(`WELL YOU MADE IT HERE AT LEAST`)
    console.log(current_guess)
    if (word_letters.includes(current_guess) === false) {
        console.log(`Wrong dummy, try again.`)
//Then subtract from some sort of guess counter. When it hits 0, the user loses and has to star over.
    }
    else if (word_letters.includes(current_guess) === true) {
        //Use the below info to update the state of guessed in guessed_so_far.
        console.log(word_letters.indexOf(current_guess))
    }
}

module.exports = update_user_guess
