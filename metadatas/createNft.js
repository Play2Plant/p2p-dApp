const fs = require('fs')
const metadatas = require('./metadatas.json')

metadatas.map(async (element, i) =>  {
    const json = JSON.stringify(element)
    await fs.writeFile(`leafNFTs/${i+1}.json`, json, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })

})
    