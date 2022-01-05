// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "./lib/ERC2981PerTokenRoyalties.sol";

contract LeafNFT is ERC721Enumerable, Ownable, ERC2981PerTokenRoyalties {
    using Strings for uint256;

    uint256 public constant MAX_MINTABLE = 10000;
    uint256 public constant MAX_PER_CLAIM = 10;
    uint256 public constant NFT_PRICE = 0.01 ether; 
    uint256 public constant ROYALTY_VALUE = 500;

    // tokenID mapping
    mapping(uint256 => uint256) indexer;

    uint256 indexerLength = MAX_MINTABLE;
    mapping(uint256 => uint256) tokenIDMap;
    mapping(uint256 => uint256) takenImages;

    string baseUri = "ipfs://QmSFMeDDejtnt78ETUGvs32ppFHXQFqhSV9hB1ZuiLte91/";
    uint256 public minted = 0;
    bool public canClaim = false;
    uint256 gross = 0;
    address ownerOfContract;
    address royaltyAddress;

    event Claim(uint256 indexed _id);

    constructor(
        string memory nftName,
        string memory nftSymbol,
        string memory baseTokenURI,
        address owner,
        address royalty
    ) ERC721(nftName, nftSymbol) Ownable() {
        ownerOfContract = owner;
        royaltyAddress = royalty;
        baseUri = baseTokenURI;
    }

    function tokensByAddress(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory result = new uint256[](balanceOf(_owner));
        uint256 balanceOfOwner = balanceOf(_owner);
        for (uint256 i = 0; i < balanceOfOwner; i++) {
            uint256 idToken = tokenOfOwnerByIndex(_owner,i);
            result[i] = idToken;
        }
        return result;
    }

    /* *************** */
    /*     Minting     */
    /* *************** */

    // Think of it as an array of 100 elements, where we take
    //    a random index, and then we want to make sure we don't
    //    pick it again.
    // If it hasn't been picked, the mapping points to 0, otherwise
    //    it will point to the index which took its place
    function getNextImageID(uint256 index) internal returns (uint256) {
        uint256 nextImageID = indexer[index];

        // if it's 0, means it hasn't been picked yet
        if (nextImageID == 0) {
            nextImageID = index;
        }
        // Swap last one with the picked one.
        // Last one can be a previously picked one as well, thats why we check
        if (indexer[indexerLength - 1] == 0) {
            indexer[index] = indexerLength - 1;
        } else {
            indexer[index] = indexer[indexerLength - 1];
        }
        indexerLength -= 1;
        return nextImageID;
    }

    function enoughRandom() internal view returns (uint256) {
        if (MAX_MINTABLE - minted == 0) return 0;
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.difficulty,
                        block.timestamp,
                        msg.sender,
                        blockhash(block.number)
                    )
                )
            ) % (indexerLength);
    }

    function randomMint(address receiver, uint256 nextTokenIndex) internal {
        uint256 nextIndexerId = enoughRandom();
        uint256 nextImageID = getNextImageID(nextIndexerId);

        assert(takenImages[nextImageID] == 0);
        takenImages[nextImageID] = 1;
        tokenIDMap[nextTokenIndex] = nextImageID;
        _safeMint(receiver, nextTokenIndex);
    }

    function toggleClaimability() external onlyOwner {
        canClaim = !canClaim;
    }

    function claim(uint256 n) public payable {
        require(canClaim, "It's not possible to claim just yet.");
        require(n + minted <= MAX_MINTABLE, "Not enough left to mint.");
        require(n > 0, "Number need to be higher than 0");
        require(n <= MAX_PER_CLAIM, "Max per claim is 10");
        require(
            msg.value >= (NFT_PRICE * n),
            "Ether value sent is below the price"
        );

        uint256 total_cost = (NFT_PRICE * n);
        gross += total_cost;

        uint256 excess = msg.value - total_cost;
        payable(address(this)).transfer(total_cost);

        for (uint256 i = 0; i < n; i++) {
            randomMint(_msgSender(), minted);
            _setTokenRoyalty(minted, royaltyAddress, ROYALTY_VALUE);

            minted += 1;
            emit Claim(minted);
        }

        if (excess > 0) {
            payable(_msgSender()).transfer(excess);
        }
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );

        _transfer(from, to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {

        safeTransferFrom(from, to, tokenId, "");
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) public virtual override {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );

        _safeTransfer(from, to, tokenId, _data);
    }

    /* ****************** */
    /*       ERC721       */
    /* ****************** */
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        string memory baseURI = _baseURI();
        uint256 imageID = tokenIDMap[tokenId];
        return
            bytes(baseURI).length > 0
                ? string(abi.encodePacked(baseURI, imageID.toString(),".json"))
                : "";
    }

    function setBaseUri(string memory uri) external onlyOwner {
        baseUri = uri;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUri;
    }

    /// @inheritdoc	ERC165
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC2981Base, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function withdraw() external {
        require(ownerOfContract == msg.sender, "Your are not the owner");
        require(address(this).balance > 0, "Nothing to withdraw");
        payable(_msgSender()).transfer(address(this).balance);
    }

    receive() external payable {}

    fallback() external payable {}
}
