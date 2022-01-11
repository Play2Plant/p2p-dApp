// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol';

/**
 * @title ERC20 smart contract of the Ethereum based $LEAF Token
 * @dev The token uses the library of openzeppelin for secure smart contract development. Token can be burned.
 */
contract LeafToken is ERC20, ERC20Burnable {

    /**
     * @dev Initializes the contract. The token has an initial supply fixed at 150.000.000 $LEAFS.
     */
    constructor() ERC20('Leaf', 'LEAF') {
        _mint(msg.sender, 150000000 * (10 ** decimals()));
    }

}
