# Gambling Smart Contract :cherries: :memo: 
 Simple Dapp allowing and ensuring fair gambling.  
 *Could be made profitable by allowing users to exchange some kind of items for betting currency*

| 📖 Table Of Contents    | link       |
|------------------------|------------|
|  🔍 How it Works       | [here](#1) |
| :package:  Components  | [here](#2) |
| 🛠️  How to run         | [here](#3) |


## How it Works 🔍 <a name='1'></a>
 1) First user to place a bet sets predetermined pool deadline
 2) Upon expiry of deadline Winner is being calculated:
    * Random Number is generated in range of **[0 - PoolSize)**
    * The player whose bet range includes random number is nominated as a winner
    * The player bet range: [**start** = sum of previuos bets, **end** = start + betSize)
 3) Gambling pool is being transfered to the winner
 4) Gambling pool is reset
    
## Components :package: <a name='2'></a>
 * Front end - React Web Application written with typescript and using web3 library to link to ethereum chain
 * Back end  - Ethereum Smart contracts written in solidity programing language
## Examples  :game_die: 
<img width="960" alt="home" src="https://user-images.githubusercontent.com/54241089/146417042-2596e72b-a0bc-4f7d-aae3-0e832790dcfb.png">
<img width="960" alt="pvz1" src="https://user-images.githubusercontent.com/54241089/146417093-2141a9ee-5970-4a14-b743-1f822bb1b030.png">
<img width="960" alt="pvz2" src="https://user-images.githubusercontent.com/54241089/146417104-11699c81-2452-4548-bd69-269fb86d2cd0.png">
<img width="960" alt="reward" src="https://user-images.githubusercontent.com/54241089/146417119-40baebfe-eaa7-4a4d-b8f4-3f136d3d475d.png">

## How to run 🛠️ <a name="3"></a>
### Back End (local network)
 1) Make sure you have truffle installed
 2) Install and run Ganache
 3) Make sure Ganache settings match settings in truffle.js 
 4) In ``./backend`` migrate Contracts ``` truffle migrate ``` or ``` truffle migrate --reset```
### Front End 
 1) Install MetaMask browser extension
 2) Select or add local Ganache network to Metamask 
 3) In ``./frontend`` run ```yarn``` and ``` yarn start```
