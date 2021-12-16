// SPDX-License-Identifier: MIT
pragma solidity >=0.8 <0.9.0;


contract Timed {
  uint private deadline;

  function setDeadline() internal {
    deadline = block.timestamp + 72; //timer for 72 secods
  }

  function getDeadline() public view returns(uint _deadline) {
    checkIfOpen();
    return deadline;    
  }

  function checkIfOpen() public view returns (bool _isOpen) {
    return block.timestamp <= deadline;
  }
}
