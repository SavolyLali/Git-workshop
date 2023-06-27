// Task: Create a program that calls a cat based on a language.

// If the language: Hungarian, it should print 'cicc-cicc'
// If the language: Chinese, it should print 'miao-miao'
// If the language: Tunisian, it should print 'besh-besh'
// If the language: Japanese, it should print 'neko chan oide'
// Call it in any other language 'kitty-kitty'.

// Execute: node.js calling-a-cat.js Hungarian

function main(language) {
  let catCall;
  switch (language) {
    case 'Hungarian':
      catCall = 'cicc-cicc';
      break;
    case 'Chinese':
      catCall = 'miao-miao';
      break;
    case 'Tunisian':
      catCall = 'besh-besh';
      break;
    case 'Japanese':
      catCall = 'neko chan oide';
      break;
    default:
      catCall = 'kitty-kitty';
  }
  console.log(`${language}: ${catCall}`)
  // The language variable will be the language from the command line. 

}

main(process.argv[2])

