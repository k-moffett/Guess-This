let inquirer = require('inquirer')
let random_word = require('./app_modules/random_word.js')
let Word = require('./app_modules/word.js')

let question = {
    type: 'input',
    name: 'current_guess',
    message: 'Guess a letter!',
    validate: (x) => {
        if(x.length === 1) {
            return true
        }
        else if (x.length > 1){
            console.log('   Sorry, you can only guess one letter at a time dummy.')
        }
    }
}
let word_array = random_word()

inquirer.prompt(question).then(answers => {
    //Contains an array of the letters for the current chosen word. This will be refered to to update guessed_so_far.
    let word_letters = []
    //Will display what has been guessed so far.
    let guessed_so_far = []
    //Creates word objects of each letter.
    word_array.map((x) => {
        let temp = new Word(x)
        //Send each letter to the letter_obj array.
        word_letters.push(x)
        //Sends each object through Word.update_guessed() to return the character and guessed state of the object.
        temp.update_guessed(temp.letter, temp.guessed)
        guessed_so_far.push(temp)
    })
    //The info directly below will be used for comparison.
    // console.log(word_letters, `Array of word letters.`)
    // console.log(guessed_so_far, `Array of objects altered from Word.update_guessed.`)
    
    //Displays current letters guessed for the user.
    let display_array = []
    guessed_so_far.map((obj) => {
        display_array.push(obj.user_display())
    })
    console.log(display_array.join(` `))

    

    
    
    
    
    // letter_obj.map((current_obj, obj_index) => {
    //     console.log(obj_index, current_obj, `This is the index and the object`)
    //     console.log(current_obj)
    // })
});