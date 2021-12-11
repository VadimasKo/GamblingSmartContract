// SPDX-License-Identifier: MIT
pragma solidity >=0.8 <0.9.0;


contract Players {
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

}