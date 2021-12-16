// SPDX-License-Identifier: MIT
pragma solidity >=0.8 <0.9.0;


contract Timed {
  uint private deadline = 0;

  function setDeadline() internal {
    deadline = block.timestamp + 20; //in seconds
  }

  function getDeadline() public view returns(uint _deadline) {
    return deadline;
  }

  function checkIfOpen() public view returns (bool _isOpen) {
    return block.timestamp <= deadline;
  }
}
