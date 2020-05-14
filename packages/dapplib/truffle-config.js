require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn prosper harvest battle fox tube'; 
let testAccounts = [
"0x87ff8ec8cc9ae70418c51081ea18188919ba3803c2b8b47f30d7b4828780fe1b",
"0x5141d26739a111b91884f4a98d806e50f18986b807f10f193c2eaf9387657c63",
"0x230954bbd3a7ab13687df4e085554d20b0fd3b71a76a57d5d55ae5536dcfb464",
"0x377ff542052b6b11fe78d060a3a903628f8a3824a59da840e9d4ba04505eaa15",
"0xc9ddeb25504f2cebfa97c35d2a021cdadc1aee2b3de7ac0e16151566a12b11aa",
"0xcfea8e8c101bc33a11f2c591869df6571a93fdd1a15d6531b1fdf0c16cc67594",
"0x450aeb8197132fe90383d6b0fa23c9773a8bd4088f68e52adc8e34d7fdfa749f",
"0x8293e40c6b31d9e7afd113f35066d7fce57109398f251ded0109da2c824903d4",
"0xf29b91391386229f4e16b5073a135d2a25b5f2aa5cc696c4fd381309cc89416a",
"0x81486f3fd633418b14ceecedf6c2382722528f0705aea8667903263552460931"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
