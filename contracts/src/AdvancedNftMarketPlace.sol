// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract AdvancedNftMarketPlace is ReentrancyGuard {
    /**
     * Errors
     */
    error AdvancedNftMarketPlace__InvalidContractAddress(); //Test Done✅
    error AdvancedNftMarketPlace__AmountMustBeAboveZero(); //Test Done✅
    error AdvancedNftMarketPlace__NotOwner(
        address realOnwer,
        address msgSender
    ); //Test Done✅
    error AdvancedNftMarketPlace__NftAllreadyListed(); //Test Done✅
    error AdvancedNftMarketPlace__NftNotListed();
    error AdvancedNftMarketPlace__EthTransferFailed();
    error AdvancedNftMarketPlace__NotApprovedForMarketplace();
    struct Listing {
        address payable seller;
        uint256 price;
    }
    event NftListed(
        address indexed _nftAddress,
        uint256 indexed _tokenId,
        uint256 indexed _price,
        address _seller
    );

    mapping(address _nftAddress => mapping(uint256 _tokenId => Listing))
        public listings;

    function listNft(
        address _nftAddress,
        uint256 _tokenId,
        uint256 _price
    ) public {
        if (_nftAddress == address(0))
            revert AdvancedNftMarketPlace__InvalidContractAddress(); //Test Done✅

        if (_price == 0) revert AdvancedNftMarketPlace__AmountMustBeAboveZero(); //Test Done✅

        IERC721 _nftContract = IERC721(_nftAddress);

        if (_nftContract.ownerOf(_tokenId) != address(msg.sender)) {
            //Test Done✅
            revert AdvancedNftMarketPlace__NotOwner(
                _nftContract.ownerOf(_tokenId),
                address(msg.sender)
            );
        }

        if (_nftContract.getApproved(_tokenId) != address(this)) {
            revert AdvancedNftMarketPlace__NotApprovedForMarketplace();
        }
        if (listings[_nftAddress][_tokenId].price != 0)
            revert AdvancedNftMarketPlace__NftAllreadyListed();
        _safeListNft(address(_nftAddress), _tokenId, _price);
    }

    function _safeListNft(
        address _nftAddress,
        uint256 _tokenId,
        uint256 _price
    ) internal {
        IERC721 _nftContract = IERC721(_nftAddress);

        _nftContract.transferFrom(msg.sender, address(this), _tokenId);
        emit NftListed(_nftAddress,_tokenId,_price,msg.sender);

        listings[_nftAddress][_tokenId] = Listing({
            seller: payable(msg.sender),
            price: _price
        });

    }

    function buyNft(
        address _nftContract,
        uint256 _tokenId
    ) public payable nonReentrant {
        // IERC721 nftContract = IERC721(_nftContract);
        if (_nftContract == address(0))
            revert AdvancedNftMarketPlace__InvalidContractAddress();
        if (listings[_nftContract][_tokenId].price == 0)
            revert AdvancedNftMarketPlace__NftNotListed();

        if (!(msg.value >= listings[_nftContract][_tokenId].price)) {
            revert AdvancedNftMarketPlace__AmountMustBeAboveZero();
        }
        _safeBuyNft(_nftContract, _tokenId);
    }

    function _safeBuyNft(address _nftContract, uint256 _tokenId) internal {
        Listing memory listItem = listings[_nftContract][_tokenId];

        IERC721(_nftContract).safeTransferFrom(
            address(this),
            msg.sender,
            _tokenId
        );

        (bool succes, ) = listItem.seller.call{value: listItem.price}("");

        require(succes, AdvancedNftMarketPlace__EthTransferFailed());
        delete listings[_nftContract][_tokenId];
    }

    //Getter Functions
    function getListings(
        address _nftContract,
        uint256 _tokenId
    ) public view returns (Listing memory) {
        return listings[_nftContract][_tokenId];
    }
}
