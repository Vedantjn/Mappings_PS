// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./contractA.sol";

contract contractB {
    function update(uint256 _num1, uint256 _num2, address _address) public {
        contractA(_address).updateMapping(_num1, _num2);
    }
}