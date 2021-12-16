const HDWalletProvider = require("truffle-hdwallet-provider");

const metaMaskMnemonic = 'tennis library dutch seven catalog garage picture dwarf hamster snow leopard very';
const infuraApiKey     = 'a656fcbabae2461b9263faf89cd28e6a';

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
  contracts_build_directory: "../frontend/src/contractBuilds",
  networks: {
    develop: {
      network_id: "*",
      host: "127.0.0.1",
      port: 7545,
    },
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    ropsten: {
      provider: function() {
        return new HDWalletProvider(metaMaskMnemonic, `https://ropsten.infura.io/v3/${infuraApiKey}`);
      },
      network_id: 3,
      // gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '>=0.8 <0.9.0',
    }
  },

  db: {
    enabled: false
  }
};

// Compile:              truffle compile
// Migrate:              truffle migrate
// Test contracts:       truffle test
// Deploy to Ropsten:    truffle deploy --network ropsten
// Test dapp:            cd client && npm test
// Run dev server:       cd client && npm run start
// Build for production: cd client && npm run build