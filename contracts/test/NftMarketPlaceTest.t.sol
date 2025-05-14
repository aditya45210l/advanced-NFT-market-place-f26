// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Test, console} from "forge-std/Test.sol";
import {DeployNftMarketPlace} from "script/DeployNftMarketPlace.s.sol";
import {AdvancedNftMarketPlace} from "src/AdvancedNftMarketPlace.sol";
import {MockNft} from "src/MockNft.sol";
import {DeployMockNft} from "script/DeployMockNft.s.sol";

contract NftMarketPlaceTest is Test {
    DeployNftMarketPlace deployerNftMarketPlace;
    DeployMockNft deployMockNft;
    AdvancedNftMarketPlace nftMarketPlace;
    MockNft mockNft;

    string constant NFT_URI =
        "https://ipfs.io/ipfs/QmQy4HcwBN9YmrmHxuTYByVgx1Ayu8ZkkawZQqDFLYidpN";

    address USER = makeAddr("user");

    modifier nftMinted() {
        vm.startBroadcast(USER);
        mockNft.mintNft(NFT_URI);
        vm.stopBroadcast();
        _;
    }

    function setUp() public {
        deployerNftMarketPlace = new DeployNftMarketPlace();
        deployMockNft = new DeployMockNft();
        nftMarketPlace = deployerNftMarketPlace.deployNftMarketPlace();
        mockNft = deployMockNft.deployMockNft();
        vm.deal(USER, 100 ether);
    }

    function testUserBalance() public {
        uint256 prvsBalance = mockNft.balanceOf(USER);
        vm.prank(USER);
        mockNft.mintNft(NFT_URI);
        assertEq(mockNft.balanceOf(USER), 1);
        assertEq(prvsBalance, 0);
    }

    function testRevertInvalidContractError() public {
        vm.expectRevert(
            AdvancedNftMarketPlace
                .AdvancedNftMarketPlace__InvalidContractAddress
                .selector
        );
        nftMarketPlace.listNft(address(0), 0, 1 ether);
    }

    function testRevertIfValueLessThenZeroOrEqualToZero() public {
        vm.expectRevert(
            AdvancedNftMarketPlace
                .AdvancedNftMarketPlace__AmountMustBeAboveZero
                .selector
        );
        nftMarketPlace.listNft(address(mockNft), 0, 0);
    }

    function testNftListerIsMustBeTheOwnerOfNft() public nftMinted {
        address realOwner = USER; // assuming the contract deployed the NFT
        address msgSender = address(1);

        vm.expectRevert(
            abi.encodeWithSelector(
                AdvancedNftMarketPlace
                    .AdvancedNftMarketPlace__NotOwner
                    .selector,
                realOwner,
                msgSender
            )
        );

        vm.prank(msgSender);
        nftMarketPlace.listNft(address(mockNft), 0, 1 ether);
    }

    function testIsNftAllreadyListed() public nftMinted {
        console.log("owner of token", mockNft.ownerOf(0));
        console.log("msg.sender", msg.sender);
        console.log("USER", USER);
        console.log("address nft marketplace", address(nftMarketPlace));
        vm.startPrank(USER);
        mockNft.approve(address(nftMarketPlace), 0);
        nftMarketPlace.listNft(address(mockNft), 0, 1 ether);
        vm.stopPrank();

        vm.startPrank(address(nftMarketPlace));
        mockNft.approve(address(nftMarketPlace), 0);
        vm.expectRevert(AdvancedNftMarketPlace.AdvancedNftMarketPlace__NftAllreadyListed.selector);
        nftMarketPlace.listNft(address(mockNft), 0, 1 ether);
        vm.stopPrank();
    }
}
