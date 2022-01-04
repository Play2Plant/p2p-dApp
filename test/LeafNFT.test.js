const LeafNFT_build = artifacts.require('LeafNFT')
const truffleAssert = require('truffle-assertions')

contract('LeafNFT', (accounts) => {
  const nftName = 'LeafNFT';
  const nftSymbol = 'LEAF';
  const baseTokenURI = 'ipfs://QmavPyySCAe4MmKgPPgomAHEtUet14jRfdhC7eX4XfLJ9t';
  const owner = accounts[0];
  const royaltyAddress = accounts[0];
  var LeafNFT;

  beforeEach(async function () {
    LeafNFT = await LeafNFT_build.new(nftName, nftSymbol, baseTokenURI, owner, royaltyAddress)
  })    

  it('should transfer', async function () {
    await LeafNFT.toggleClaimability({ from: accounts[0] })

    await truffleAssert.passes(
      await LeafNFT.claim(2, {
        from: accounts[0],
        value: web3.utils.toWei('0.02', 'ether')
      })
    )

    const balance = await LeafNFT.balanceOf(accounts[0])
    const tokenId = await LeafNFT.tokenOfOwnerByIndex(
      accounts[0],
      balance - 1 
    )

    await truffleAssert.passes(
      await LeafNFT.transferFrom(accounts[0], accounts[3], tokenId)
    )

    const balance2 = await LeafNFT.balanceOf(accounts[3])
    expect(balance2.toString()).to.equal('1')
  })
  
  it('Only owner can call it', async function () {
    await truffleAssert.reverts(
      LeafNFT.toggleClaimability({ from: accounts[1] })
    )
    await truffleAssert.passes(
      LeafNFT.toggleClaimability({ from: accounts[0] })
    )
  })


  it('should toggleClaimability', async function () {
    await LeafNFT.toggleClaimability({ from: accounts[0] })
    canClaim = await LeafNFT.canClaim({ from: accounts[0] })
    expect(canClaim).to.equal(true)
  })

  it('should mint', async function () {
    await LeafNFT.toggleClaimability({ from: accounts[0] })

    await LeafNFT.claim(2, {
      from: accounts[9],
      value: web3.utils.toWei('0.02', 'ether')
    })

    const result = await LeafNFT.balanceOf(accounts[9])
    expect(result.toString()).to.equal('2')
  })



  it('should safetransfer', async function () {
    await LeafNFT.toggleClaimability({ from: accounts[0] })

    await truffleAssert.passes(
      await LeafNFT.claim(2, {
        from: accounts[0],
        value: web3.utils.toWei('0.02', 'ether')
      })
    )
    
    const balance = await LeafNFT.balanceOf(accounts[0])
    const tokenId = await LeafNFT.tokenOfOwnerByIndex(
      accounts[0],
      balance - 1
    )


    await truffleAssert.passes(
      await LeafNFT.transferFrom(accounts[0], accounts[3], tokenId)
    )

    const balance2 = await LeafNFT.balanceOf(accounts[3])

    expect(balance2.toString()).to.equal('1')
  })



  it('royolties info', async function () {
    await LeafNFT.toggleClaimability({ from: accounts[0] })

    await truffleAssert.passes(
      await LeafNFT.claim(1, {
        from: accounts[0],
        value: web3.utils.toWei('0.01', 'ether'),
      })
    )
    
    const balance = await LeafNFT.balanceOf(accounts[0])
    const tokenId = await LeafNFT.tokenOfOwnerByIndex(
      accounts[0],
      balance - 1
    )

    await LeafNFT.royaltyInfo(tokenId, 1000)
  })

  it('withdraw', async function () {
    await LeafNFT.toggleClaimability({ from: accounts[0] })

    await truffleAssert.passes(
      await LeafNFT.claim(1, {
        from: accounts[4],
        value: web3.utils.toWei('0.01', 'ether'),
      })
    )
    
    let balance_before = web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), "ether");
    await LeafNFT.withdraw({from: accounts[0]})
    let balance_after = web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), "ether");

  })

  // it('should pay royolties', async function () {
  //   await LeafNFT.toggleClaimability({ from: accounts[0] })
  //   const balance1 = await LeafNFT.register.balances(accounts[0])
    
  //   console.log('balance1 before=>  ', balance1.toString())

  //   await truffleAssert.passes(
  //     await LeafNFT.claim(1, {
  //       from: accounts[0],
  //       value: web3.utils.toWei('20', 'ether'),
  //     })
  //   )
  //   const balance = await LeafNFT.balanceOf(accounts[0])
  //   const tokenId = await LeafNFT.tokenOfOwnerByIndex(
  //     accounts[0],
  //     balance - 1
  //   )
  //   await truffleAssert.passes(
  //     await LeafNFT.transferFrom(accounts[0], accounts[3], tokenId)
  //   )
  //   const balance1_after = await LeafNFT.register.balances(accounts[0])

  //   console.log('balance1 after=>  ', balance1_after.toString())

  //   expect(balance1.toString()).to.equal('1')
  // })

  it('should not mint 11 nfts', async function () {
    await LeafNFT.toggleClaimability({ from: accounts[0] })

    await truffleAssert.reverts(
      LeafNFT.claim(11, {from: accounts[0],value: web3.utils.toWei('0.11', 'ether')}), "Max per claim is 10"
    )
  })

  // it('should not mint more than 100 nfts', async function () {
  //   await LeafNFT.toggleClaimability({ from: accounts[0] })

  //   async function  mint_101 (){
  //       for (let i=0; i <= 10; i++) {
  //         await LeafNFT.claim(10, {from: accounts[8],value: web3.utils.toWei('0.1', 'ether')})
  //     }
  //   }

  //   await truffleAssert.reverts(
  //     await mint_101()
  //   )
  // })
  
})
