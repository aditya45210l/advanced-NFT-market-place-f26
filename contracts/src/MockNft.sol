// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MockNft is ERC721 {
    uint256 public s_tokenCounter;

    mapping(uint256 => string) public s_IdToUri;

    constructor() ERC721("MockNft", "MNFT") {
        s_tokenCounter = 0;
    }

    function mintNft(string memory tokenUri) public {
        s_IdToUri[s_tokenCounter] = tokenUri;
        _safeMint(msg.sender, s_tokenCounter);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        return s_IdToUri[tokenId];
    }
}
