export const RMRKEquippableFactory = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "rmrkRegistry",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "collectionMetadata",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "tokenURI",
                "type": "string"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "erc20TokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "tokenUriIsEnumerable",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "royaltyRecipient",
                        "type": "address"
                    },
                    {
                        "internalType": "uint16",
                        "name": "royaltyPercentageBps",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxSupply",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerMint",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct IRMRKInitData.InitData",
                "name": "data",
                "type": "tuple"
            }
        ],
        "name": "deployRMRKCollection",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
//# sourceMappingURL=RMRKEquippableFactory.js.map