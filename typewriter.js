const sentence = "this is a sentence that i came up with all on my own";

const typewritter = function(sentence) {
  let timer = 0;
  sentence = sentence + '\n';
  for (let letter of sentence) {
  
    setTimeout(() => {
      process.stdout.write(letter);
      
    }, timer)
    timer += 50
  }

}

typewritter(sentence);