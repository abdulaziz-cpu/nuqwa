// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NuqwaDCoA is ERC721, Ownable {
    uint256 public nextTokenId;
    mapping(uint256 => string) public tokenURIs;

    struct Provenance {
        address issuer;
        uint256 timestamp;
        string action; // e.g., "MINT", "TRANSFER", "VERIFY"
    }

    mapping(uint256 => Provenance[]) public provenanceHistory;

    constructor() ERC721("Nuqwa DCoA", "NDCOA") {}

    function mint(address to, string memory _tokenURI) external onlyOwner {
        uint256 tokenId = nextTokenId;
        _safeMint(to, tokenId);
        tokenURIs[tokenId] = _tokenURI;
        
        provenanceHistory[tokenId].push(Provenance({
            issuer: msg.sender,
            timestamp: block.timestamp,
            action: "MINT"
        }));

        nextTokenId++;
    }

    function addProvenanceRecord(uint256 tokenId, string memory action) external {
        require(_exists(tokenId), "Token does not exist");
        // In reality, add logic to check who can add records (e.g. the artist or platform)
        
        provenanceHistory[tokenId].push(Provenance({
            issuer: msg.sender,
            timestamp: block.timestamp,
            action: action
        }));
    }

    function _exists(uint256 tokenId) internal view returns (bool) {
        return _ownerOf(tokenId) != address(0);
    }
}
