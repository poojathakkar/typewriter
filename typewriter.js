let sentence = "hello there from lighthouse labs";
sentence = sentence + '\n';

const loopThroughSplittedText = function(splittedText) {
  splittedText.forEach(function(text, i) {
    setTimeout(() => {
      process.stdout.write(text) ;
    }, i * 1000)
  })
}

loopThroughSplittedText(sentence.split(''));