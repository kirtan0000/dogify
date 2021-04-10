const dogify = sentence => {
  const sentence_arr = sentence?.split(' ') || []
  for (let word_index in sentence_arr) {
    let word = sentence_arr[word_index]
    let new_word = ''
    const word_prob = Math.random()
    if (word_prob < 0.6) new_word = 'bark'
    else if (word_prob > 0.6 && word_prob < 0.7) new_word = 'ruff'
    else new_word = 'woof'
    if (Math.random() > 0.65) new_word += ' *pant*'
    sentence_arr[word_index] = new_word
  }
  return sentence_arr?.join(' ') || sentence || ''
}

module.exports = dogify
