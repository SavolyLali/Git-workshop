// Task: Show the cat names that contains the given keyword. (It can be case sensitive).

// Execute: node search-by-name.js Cir

// Example: node searcg-by-name.js irm
//  it will outputs:
//    Cirmi
//    Cirmos
// dsksdss



const catNames = ['Cirmi', 'Cirmos', 'Vakarcs', 'Butyok', 'Bubu']

function main(keyword) {
    catNames.map((cat) => {
        if (cat.toLowerCase().includes(keyword.toLowerCase())){
            console.log(cat)
        }
    })
    // Tip: string.prototype.includes()
}

main(process.argv[2])

