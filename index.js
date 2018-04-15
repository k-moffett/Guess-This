let inquirer = require('inquirer')
let random_word = require('./app_modules/random_word.js')
let Word = require('./app_modules/word.js')
let update_user_guess = require('./app_modules/update_user_guess.js')
let update_state = require(`./app_modules/update_state.js`)

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

const app = () => {
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
//Sends each object through Word.update_letter_display() to return the character and guessed state of the object.
        temp.update_letter_display(temp.letter, temp.guessed)
        guessed_so_far.push(temp)
    })

//***Crete logic for comparing guessed letter under here */
//console.log(answers, `RIGHT ABOVE update_user_guess in INDEX`)
let indexes_to_update = update_user_guess(word_letters, guessed_so_far, answers.current_guess)
console.log(indexes_to_update, `INDEX`)
//Update current_display with info from indexes_to_update.
update_state(word_letters, guessed_so_far, indexes_to_update)

//Displays current letters guessed for the user.
    let display_array = []
    guessed_so_far.map((obj) => {
        display_array.push(obj.user_display())
    })
    let current_display = display_array.join(` `)
    console.log(current_display)
   
//Loops game
    if (current_display.includes(`_`) === true){
        app()
    }
    else if (current_display.includes(`_`) === false) {
//Add 1 to some sort of win counter, and display to the user below.
        console.log(`You win!!!`)
        console.log(`Let's play again!!`)
        let word_array = random_word()
        app()
//Then loop program to next word
    }
});
//End of app function
}
//Calls main app.
app()