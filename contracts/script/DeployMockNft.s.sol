// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Script} from "forge-std/Script.sol";
import {MockNft} from "src/MockNft.sol";

contract DeployMockNft is Script {
    MockNft mockNft;

    function run() external returns (MockNft) {
        return deployMockNft();
    }

    function deployMockNft() public returns (MockNft) {
        vm.startBroadcast();
        mockNft = new MockNft();
        vm.stopBroadcast();
        return mockNft;
    }
}
