// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface ContractWinner{
    function attempt() external;
}

contract EventWinner {

    function callWinner(address winnerAddr) external{
        ContractWinner(winnerAddr).attempt();
    }
}