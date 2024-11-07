// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    address public manager;
    address[] public participants;
    uint public ticketPrice = 1 ether;

    // Events to notify frontend
    event WinnerSelected(address winner, uint amountWon);
    
    // Constructor to initialize the manager (deploying address)
    constructor() {
        manager = msg.sender;
    }


    // Function to participate in the lottery (send some ETH)
    function enter() public payable {
        require(msg.value >= ticketPrice, "Minimum ETH to participate is 1 ether");
        participants.push(msg.sender);
    }

    // Function to get a random index based on block difficulty and timestamp
    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, participants)));
    }

    // Function to pick the winner
    function pickWinner() public restricted {
        uint index = random() % participants.length;  // Select random winner
        address winner = participants[index];
        uint amountWon = address(this).balance;  // Total balance in the contract
        payable(winner).transfer(amountWon);  // Send ETH to the winner
        
        // Emit event
        emit WinnerSelected(winner, amountWon);
        
        // Reset the lottery for the next round
        participants = new address[](0);
        }

    // Modifier to restrict access to manager only
    modifier restricted() {
        require(msg.sender == manager, "Only the manager can pick the winner.");
        _;
    }

    // Function to view the participants
    function getParticipants() public view returns (address[] memory) {
        return participants;
    }
}
