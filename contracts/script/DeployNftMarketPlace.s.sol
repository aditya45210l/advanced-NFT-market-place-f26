// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Script, console} from "forge-std/Script.sol";
import {AdvancedNftMarketPlace} from "src/AdvancedNftMarketPlace.sol";

contract DeployNftMarketPlace is Script {
    AdvancedNftMarketPlace public nftMarketPlace;
    function run() external returns (AdvancedNftMarketPlace) {
        return deployNftMarketPlace();
    }

    function deployNftMarketPlace() public returns (AdvancedNftMarketPlace) {
        vm.startBroadcast();
        nftMarketPlace = new AdvancedNftMarketPlace();
        vm.stopBroadcast();
        return nftMarketPlace;
    }
}
