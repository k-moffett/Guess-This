let words = ['fleeble', 'scribbs', 'blooky', 'nopperdome', 'lankrank']

let random_word = () => {
    let current_word = words[Math.floor(Math.random() * words.length)]
    return Array.from(current_word)
}

module.exports = random_word