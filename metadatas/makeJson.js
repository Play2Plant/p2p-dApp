const fs = require('fs')

var content = []

function getRarity(i) {

  if(i <= 200){
    return "Legendary"
  } 
  else if(i <= 1000){
    return "Epic"
  } 
  
  else if(i <= 2000){
    return "Rare"
  }
  
  else if(i <= 10000){
    return "Common"
  }

}

// 8000 common
// 1000 rare
// 800 epic
// 200 legendary

async function makeData() {

  for (var i = 0; i <= 10000; i++) {
    content.push({
      description: "Ce LEAF TREE à déjà donné vie à 10 arbres dans le monde réel et si tu fais 10 000 pas aujourd'hui, il te donnera 6 LEAFs. Des LEAFs qui permettront de planter de nouveaux arbres. Alors lève toi et marche!",
      image: 'https://ipfs.io/ipfs/QmRGKxAu2KsTQG3G4zXKrCowSs8pgaCJ1yU3rPYHraHNiq',
      name: `LEAF TREE #${i}`,
      attributes: [
        {
          trait_type: 'Rarity',
          value: getRarity(i),
        },
      ],
    })
  }
  var json = JSON.stringify(content)
  fs.writeFile('file.json', json, (err) => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
}
makeData()
