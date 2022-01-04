// const Migrations = artifacts.require("Migrations");
const LeafNFT = artifacts.require("LeafNFT");
const LeafToken = artifacts.require("LeafToken");

module.exports = async function (deployer) {

    const name = "Leaf";
    const symbol = "LEAF";
    const owner = "0x20dbf6Ad54bdAe76E42Aee8960b7e2E56A053eFf";
    const royaltyAddress = "0x20dbf6Ad54bdAe76E42Aee8960b7e2E56A053eFf";
    const uri = "";

    await deployer.deploy(LeafNFT, name, symbol,uri, owner, royaltyAddress)
    await deployer.deploy(LeafToken);

    // Instantiates the contract at the leaf variable
    const leafToken_Instance = await LeafToken.deployed();

    const leafNFT_Instance = await LeafNFT.deployed();
    await leafNFT_Instance.toggleClaimability()
    const leafNFTAddress = leafNFT_Instance.address;


    console.log("leafNFT address", leafNFTAddress, "leafToken address" , leafToken_Instance.address )
};
