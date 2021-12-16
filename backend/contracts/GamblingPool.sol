// SPDX-License-Identifier: MIT
pragma solidity >=0.8 <0.9.0;


contract GamblingPool {

  uint private deadline;

  constructor() {
    deadline = 0;
  } 

  function setDeadline() public {
    deadline = block.timestamp + 72; //timer for 1 minute
  }

  function getDeadline() public view returns(uint _deadline) {
    return deadline;    
  }

  function checkIfOpen() public view returns (bool _isOpen) {
    return block.timestamp <= deadline;
  }

    struct Player {
    address wallet;
    uint    betSize;
    string  name;
  }

  Player[] players;

  function getPlayers() public view returns(Player[] memory _players) {
    return players;
  }

  function addPlayer(address _wallet, uint _betSize, string memory _name) internal {
    players.push(Player(_wallet, _betSize, _name));
  }

  function resetPlayers() internal {
    delete players;
  }



  uint private poolSize = 0;

  event GameStarted(uint _deadline);
  event BetPlaced(string _name, uint betSize);
  event WinnerFound(string _name, uint prize);

  modifier checkStatus {
    if(checkIfOpen()) {
      _; // if open continue 
    } else {
      if (poolSize != 0) {
        // calculate winner
        Player memory winner = calculateWinner();
      } else {
        // restart the game
        resetPlayers();
        setDeadline();
        emit GameStarted(getDeadline());
      }
    }
  }

  // constructor() payable {
  //   // require(msg.value > 0, 'can start only by betting');
  //   setDeadline();
  //   emit GameStarted(getDeadline());
  // }

  function getPoolSize() public view returns(uint _poolSize) {
    return poolSize;
  }

  function placeBet(string memory _name) public payable checkStatus {
    require(msg.value > 0, "bet size can not be equal to 0");
    // check if open
    addPlayer(msg.sender, msg.value, _name);
    poolSize += msg.value;
    emit BetPlaced(_name, msg.value);
  }

  function calculateWinner() private view returns(Player memory winner) {
    uint winningBallot      = getRandom() % poolSize;
    // Player[] memory players = getPlayers();

    uint bufferPool = 0;
    for(uint i = 0; i < players.length; i++) {
      bufferPool += players[i].betSize;
      if(winningBallot < bufferPool) {
        return players[i];
      }
    }
  }

  function getRandom() private view returns(uint) {
    return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, poolSize)));
  }

  function awardWinner(Player memory _winner) private {
    if(payable(_winner.wallet).send(poolSize)) {
      emit WinnerFound(_winner.name, poolSize);
      poolSize = 0;
    }
  }
}