// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Test {
    struct Product {
        uint256 id;
        string name;
        uint256 price;
        uint256 quantity;
    }

    address public owner;

    Product public removeMe;
    mapping(uint256 => Product) public products;

    Product[] public prodacts;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setProduct(
        uint256 _id,
        string memory _name,
        uint256 _price,
        uint256 _quantity
    ) external onlyOwner {
        Product memory product = Product(_id, _name, _price, _quantity);
        products[_id] = product;

        prodacts.push(product);
    }

    function getProduct(uint256 _id) external view returns (Product memory) {
        return products[_id];
    }

    function getAllProducts() external view returns (Product[] memory) {
        return prodacts;
    }

    function updateProduct(
        uint256 _id,
        string memory _name,
        uint256 _price,
        uint256 _quantity
    ) external onlyOwner {
        Product storage product = products[_id];
        product.name = _name;
        product.price = _price;
        product.quantity = _quantity;
    }

    function removeProduct(uint256 _id) external onlyOwner {
        removeMe = products[_id];
        delete products[_id];
    }
}
