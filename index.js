var Web3 = require('web3')
//console.log(Web3);
const rpcURL = 'https://ropsten.infura.io/v3/b517a22380fe4dc8a1e63037aaaaf28a' // Your RCkP URL goes here
const web3 = new Web3(rpcURL)
const address = '0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8' // Your account address goes here
console.log(web3.eth.getBalance(address, (err, wei) => { balance = web3.utils.fromWei(wei, 'ether') }))





// var address = '0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8'
// // to get balance
// console.log(Web3.eth.getBalance(address,(err,bal)=>{
//     balance = bal
// }))
// // convert balance to ether
// console.log(Web3.utils.fromWei('balance','ether'))
// console.log(Web3.utils.fromWei('balance','gwei'))

// // create account in web3
// console.log(Web3.eth.accounts.create())

// // var  url = 'https://mainnet.infura.io/v3/b517a22380fe4dc8a1e63037aaaaf28a'
// // var web3 = new Web3(url)
// // console.log(web3);