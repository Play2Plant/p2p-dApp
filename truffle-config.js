/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// require('dotenv').config();
// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const mnemonic = process.env.MNEMONIC.trim();


module.exports = {
    networks: {
        
       development: {
          host: "localhost",
          port: 8545,
          network_id: "*",
          websockets: true
       },
        // testnet: {
        //     provider: () =>
        //     new HDWalletProvider(
        //         mnemonic,
        //         `https://api.avax-test.network/ext/bc/C/rpc`,
        //         0,
        //         10
        //     ),
        //     network_id: "*",
        //     gas: 6000000,
        //     gasPrice: 225000000000,
        //     networkCheckTimeout: 999999,
        //     confirmations: 10,
        //     skipDryRun: true,
        // },
        // mainnet: {
        //     provider: () =>
        //     new HDWalletProvider(
        //         mnemonic,
        //         `https://api.avax.network/ext/bc/C/rpc`,
        //         0,
        //         10
        //     ),
        //     network_id: "*",
        //     networkCheckTimeout: 999999,
        //     confirmations: 4,
        //     skipDryRun: true,
        // },
    
    },
    compilers: {
        solc: {
            version: "0.8.0",
            settings:{
              optimizer: {
                enabled: true,
                runs: 200
              }
            }
            //  evmVersion: "byzantium"
            // }
        }
    },

    db: {
        enabled: false
    }
};
