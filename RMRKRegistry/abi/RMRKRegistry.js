export const RMRKRegistry = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_rmrkToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_collectionVerificationFee",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collection",
                "type": "address"
            }
        ],
        "name": "CollectionDoesNotExist",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "collection",
                "type": "address"
            }
        ],
        "name": "CollectionBlacklisted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "deployer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "maxSupply",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "collectionMetadata",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "enum IRMRKRegistry.RMRKType",
                "name": "collectionType",
                "type": "uint8"
            }
        ],
        "name": "CollectionCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "acceptedCurrencies",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "currency",
                "type": "address"
            }
        ],
        "name": "addAcceptedCurrency",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "addAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_collection",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_deployer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_maxSupply",
                "type": "uint256"
            },
            {
                "internalType": "enum IRMRKRegistry.RMRKType",
                "name": "collectionType",
                "type": "uint8"
            }
        ],
        "name": "addCollection",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "factory",
                "type": "address"
            }
        ],
        "name": "addFactory",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "adminList",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "admins",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_collection",
                "type": "address"
            }
        ],
        "name": "blackListCollection",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "chainId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_collection",
                "type": "address"
            }
        ],
        "name": "claimDepositAndRemoveCollection",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "collectionVerificationFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_collection",
                "type": "address"
            }
        ],
        "name": "declineVerification",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "factories",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "factoryList",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getCollectionAddressByIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_collection",
                "type": "address"
            }
        ],
        "name": "getCollectionByAddress",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "collection",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "verificationSponsor",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "verificationFeeBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum IRMRKRegistry.RMRKType",
                        "name": "collectionType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bool",
                        "name": "visible",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "verified",
                        "type": "bool"
                    }
                ],
                "internalType": "struct IRMRKRegistry.Collection",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getCollectionByIndex",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "collection",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "verificationSponsor",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "verificationFeeBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum IRMRKRegistry.RMRKType",
                        "name": "collectionType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bool",
                        "name": "visible",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "verified",
                        "type": "bool"
                    }
                ],
                "internalType": "struct IRMRKRegistry.Collection",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCollectionVerificationFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRmrkTokenAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalCollectionCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "currencyIndex",
                "type": "uint256"
            }
        ],
        "name": "removeAcceptedCurrency",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "admin",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "adminIndex",
                "type": "uint256"
            }
        ],
        "name": "removeAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "factory",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "factoryIndex",
                "type": "uint256"
            }
        ],
        "name": "removeFactory",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rmrkToken",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_collection",
                "type": "address"
            }
        ],
        "name": "sponsorVerification",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalCollectionsCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_collection",
                "type": "address"
            }
        ],
        "name": "unblackListCollection",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_collectionVerificationFee",
                "type": "uint256"
            }
        ],
        "name": "updateCollectionVerificationFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_collection",
                "type": "address"
            }
        ],
        "name": "verifyCollection",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
//# sourceMappingURL=RMRKRegistry.js.map