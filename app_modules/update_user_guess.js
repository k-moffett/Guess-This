
update_user_guess = (word_letters, guessed_so_far, current_guess) => {
    let indexes = [], i = -1
    if (word_letters.includes(current_guess) === false) {
        console.log(`Wrong dummy, try again.`)
//Then subtract from some sort of guess counter. When it hits 0, the user loses and has to star over.
    }
    else if (word_letters.includes(current_guess) === true) {
        //Use the below info to update the state of guessed in guessed_so_far.
        while ((i = word_letters.indexOf(current_guess, i+1)) != -1){
            indexes.push(i);
        }
        (indexes, `UPDATE_USE_GUESS`)
        //WILL RETURN UNDEFINED IF THE GUESS IS INCORRECT. WILL HAVE TO TROUBLESHOOT THIS LATER.
        return indexes
    }
}

module.exports = update_user_guess
