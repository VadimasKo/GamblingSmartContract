// SPDX-License-Identifier: MIT
pragma solidity >=0.8 <0.9.0;

import "./Players.sol";
import "./Timed.sol";


contract GamblingPool is Timed, Players {
  uint private poolSize = 0;
  Player private winner;

  modifier checkStatus {
    if(checkIfOpen()) {
      _; // if open continue
    } else {
      if (poolSize != 0) {
        //it means pool is closed winner not rewarded
        calculateWinner();
        awardWinner(); //resets pool
        _; 
      } else { // initial launch
        setDeadline();
        _;
      }
    }
  }

  function placeBet(string memory _name) public payable checkStatus {
    require(msg.value > 0, "bet size can not be equal to 0");
    addPlayer(msg.sender, msg.value, _name);
    poolSize += msg.value;
  }

  function getPoolSize() public view returns(uint _poolSize) {
    return poolSize;
  }

  function getWinner() public checkStatus returns(Player memory _winner) {
    return winner;
  }

  function calculateWinner() private {
    uint winningBallot = getRandom() % poolSize;
    Player[] memory players = getPlayers();

    uint bufferPool = 0;
    for(uint i = 0; i < players.length; i++) {
      bufferPool += players[i].betSize;
      if(winningBallot < bufferPool) {
        winner = players[i];
        break;
      }
    }
  }

  function awardWinner() private {
    if(payable(winner.wallet).send(poolSize)) {
      resetPool();
    }
  }

  function getRandom() private view returns(uint _randomNumber) {
    return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, poolSize)));
  }
 
  function resetPool() private {
    poolSize = 0;
    resetPlayers();
    setDeadline();
  }

}
