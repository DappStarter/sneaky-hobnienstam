require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name reflect rural evidence harvest clock orphan trip'; 
let testAccounts = [
"0xce9a7118d3e5a8d7ee19194e0d6aaf6e09f072da4f00379da3e4246e710e3d45",
"0x62e81beeea93213b0e0ab0f9fecd3eea553bdf3c808b63c27ded227b96d79328",
"0xc8cd36552b978a005da27880f44106c7afbf882b1bee6b11c9dcfac5d6854591",
"0x3633efd2493c3247ab1804cb6852838441b1a613f70d9d135a68c895126c36b6",
"0x0179e5c39ba4338a24d685e24f4a21acc070c8f4c57f9b09d6bdcc7b33cc16c5",
"0x6028811df52a4588abf6aeefd5e0ad0adc120e0cc13614238bdec135fc79b251",
"0x72457c6574c182435f7dfb72492b1049d743d32c35d19ee75dc8a1941b873ec3",
"0xa25f351e04001d4ecb9f8b422d48fc981c1f9e46a38a8a9e73e821dcc41076e1",
"0x0515a1a672a58a41a9fbcb28e82f8b8af25283160e47a0b4049afbf837de40b5",
"0xda90f90cea0a7c5d6a6af259bdc5578a23a2befd4264b6d2ba753367340ec2d9"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
