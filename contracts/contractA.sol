// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract contractA {
    address public addressContractB;

    mapping(uint256 => uint256) public numToNum;

    constructor(address _contractB) {
        addressContractB = _contractB;
    }

    function getNum(uint256 _num1) public view returns (uint256) {
        return numToNum[_num1];
    }

    
    function updateMapping(uint256 _num1, uint256 _num2) public {
        require(msg.sender == addressContractB, "Only contract B can update");
        numToNum[_num1] = _num2;
    }
}