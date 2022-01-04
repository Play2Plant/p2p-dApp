const Leaf = artifacts.require('LeafToken');

contract('Leaf', (accounts) => {
    const owner = accounts[0];
    const user = accounts[1];

    before(async () => {
        leaf = await Leaf.deployed();
    });

    it('decimals', async() => {
        decimals = await leaf.decimals();
        assert.equal(decimals, '18', "Decimals fixed to 18.");
    });

    it('name', async() => {
        leafName = await leaf.name();
        assert.equal(leafName, 'Leaf');
    });

    it('symbol', async() => {
        leafSymbol = await leaf.symbol();
        assert.equal(leafSymbol, 'LEAF', "The symbol must represent leaf in capital letters.");
    });

    it('total supply', async() => {
        totalSupply = web3.utils.fromWei(await leaf.totalSupply(), 'ether');
        assert.equal(totalSupply, '150000000', "The token has an initial supply fixed at 150.000.000 $LEAFS.");
    });

    it('gives the owner 150M LEAF', async () => {
        let balance = await leaf.balanceOf(owner);
        balance = web3.utils.fromWei(balance, 'ether');
        assert.equal(balance, '150000000', "Balance should be 150M LEAF for contract creator.");
    });

    it('can transfer tokens between accounts', async () => {
        let amount = web3.utils.toWei('1000', 'ether');
        await leaf.transfer(user, amount, { from: owner });

        let balance = await leaf.balanceOf(user);
        balance = web3.utils.fromWei(balance, 'ether');
        assert.equal(balance, '1000', "Balance should be 1k LEAF for user.");
    });

    it('can burn', async() => {
        let amount = web3.utils.toWei('10000000', 'ether');
        await leaf.burn(amount, { from: owner });
        totalSupply = web3.utils.fromWei(await leaf.totalSupply(), 'ether');
        assert.equal(totalSupply, '140000000', "Total supply should be 140M.");
    });

});