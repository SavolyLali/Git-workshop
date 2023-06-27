// Task: Create a program that calls a cat based on a language.

// If the language: Hungarian, it should print 'cicc-cicc'
// If the language: Chinese, it should print 'miao-miao'
// If the language: Tunisian, it should print 'besh-besh'
// If the language: Japanese, it should print 'neko chan oide'
// Call it in any other language 'kitty-kitty'.

// Execute: node.js calling-a-cat.js Hungarian

function main(language) {
  let catCall;
  switch (language.toLowerCase()) {
    case 'hungarian':
      catCall = 'cicc-cicc';
      break;
    case 'chinese':
      catCall = 'miao-miao';
      break;
    case 'tunisian':
      catCall = 'besh-besh';
      break;
    case 'japanese':
      catCall = 'neko chan oide';
      break;
    default:
      catCall = 'kitty-kitty';
  }
  console.log(`${language.split('')[0].toUpperCase()}${language.slice(1).toLowerCase()}: ${catCall}`)
  // The language variable will be the language from the command line. 

}

main(process.argv[2])

