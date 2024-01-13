function generateRandomNumber(num){
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
};

const metalFortune = {
    signInfo: ['Fire Tetrahedron', 'Air Octahedron', 'Water Icosahedron', 'Earth Cube', 'Ether Dodecahedron *You lucky bastard*'],
    todaysFortune: ['you will seek vengeance', 'you will quench your blood thirst', 'others will seek vengeance on you', 'you will ate their hearts, drank their blood', 'you will try to swim, try to hide', 'be murdered by Murmaids'],
    advice: ['leave no fingerprints', 'get instruments of pain', 'hold your breath, swim and strain', 'become a murder of Murmaids']
}

// Store the 'Fortune' in an array
let personalFortune = []

// Iterate over the object
for(let prop in metalFortune) {
    let optionIdx = generateRandomNumber(metalFortune[prop].length)
  
    // use the object's properties to customize the message being added to personalFortune  
    switch(prop) {
      case 'signInfo':
        personalFortune.push(`Your metal sign is now a brutal ${metalFortune[prop][optionIdx]}.`)
        break
      case 'todaysFortune':
        personalFortune.push(`Today ${metalFortune[prop][optionIdx]}.`)
        break
      case 'advice':
        personalFortune.push(`So... you better ${metalFortune[prop][optionIdx]}.`)
        break
      default:
        personalFortune.push('Go forth and die.')
    }
}

function formatFortune(fortune) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalFortune.join('\n')
    console.log(formatted)
}

formatFortune(personalFortune);