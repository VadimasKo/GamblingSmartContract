// SPDX-License-Identifier: MIT
pragma solidity >=0.8 <0.9.0;


contract Timed {
  uint private deadline;

  function setDeadline() internal {
    deadline = block.timestamp + 60; //60s from current time
  }

  function getDeadline() public view returns(uint _deadline) {
    return deadline;
  }

  function checkIfOpen() public view returns (bool _isOpen) {
    return block.timestamp <= deadline;
  }
}
