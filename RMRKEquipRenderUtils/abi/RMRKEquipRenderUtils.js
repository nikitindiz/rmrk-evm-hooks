export const RMRKEquipRenderUtils = [
    {
        "inputs": [],
        "name": "RMRKChildNotFoundInParent",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "RMRKNotComposableAsset",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "RMRKParentIsNotNFT",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "RMRKTokenHasNoAssets",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "RMRKUnexpectedParent",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint64[]",
                "name": "allPartIds",
                "type": "uint64[]"
            },
            {
                "internalType": "address",
                "name": "catalogAddress",
                "type": "address"
            }
        ],
        "name": "_splitSlotAndFixedParts",
        "outputs": [
            {
                "internalType": "uint64[]",
                "name": "slotPartIds",
                "type": "uint64[]"
            },
            {
                "internalType": "uint64[]",
                "name": "fixedPartIds",
                "type": "uint64[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "childAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "childId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "expectedParent",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "expectedParentId",
                "type": "uint256"
            }
        ],
        "name": "checkExpectedParent",
        "outputs": [],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint64",
                "name": "assetId",
                "type": "uint64"
            }
        ],
        "name": "composeEquippables",
        "outputs": [
            {
                "internalType": "string",
                "name": "metadataURI",
                "type": "string"
            },
            {
                "internalType": "uint64",
                "name": "equippableGroupId",
                "type": "uint64"
            },
            {
                "internalType": "address",
                "name": "catalogAddress",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "partId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint8",
                        "name": "z",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "metadataURI",
                        "type": "string"
                    }
                ],
                "internalType": "struct RMRKEquipRenderUtils.FixedPart[]",
                "name": "fixedParts",
                "type": "tuple[]"
            },
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "partId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "childAssetId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint8",
                        "name": "z",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address",
                        "name": "childAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "childId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "childAssetMetadata",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "partMetadata",
                        "type": "string"
                    }
                ],
                "internalType": "struct RMRKEquipRenderUtils.EquippedSlotPart[]",
                "name": "slotParts",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "targetChild",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "childId",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "onlyEquipped",
                "type": "bool"
            }
        ],
        "name": "getAllEquippableSlotsFromParent",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "childIndex",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "slotPartId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "childAssetId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "parentAssetId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint16",
                        "name": "priority",
                        "type": "uint16"
                    },
                    {
                        "internalType": "address",
                        "name": "parentCatalogAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "isEquipped",
                        "type": "bool"
                    },
                    {
                        "internalType": "string",
                        "name": "partMetadata",
                        "type": "string"
                    }
                ],
                "internalType": "struct RMRKEquipRenderUtils.EquippableData[]",
                "name": "assetsWithSlots",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getAssetIdWithTopPriority",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            },
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint64[]",
                "name": "assetIds",
                "type": "uint64[]"
            }
        ],
        "name": "getAssetsById",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "parentAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "parentId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "childAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "childId",
                "type": "uint256"
            }
        ],
        "name": "getChildIndex",
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
                "name": "targetChild",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "childId",
                "type": "uint256"
            },
            {
                "internalType": "uint64",
                "name": "parentAssetId",
                "type": "uint64"
            }
        ],
        "name": "getEquippableSlotsFromParent",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "childIndex",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "slotPartId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "childAssetId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "parentAssetId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint16",
                        "name": "priority",
                        "type": "uint16"
                    },
                    {
                        "internalType": "address",
                        "name": "parentCatalogAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "isEquipped",
                        "type": "bool"
                    },
                    {
                        "internalType": "string",
                        "name": "partMetadata",
                        "type": "string"
                    }
                ],
                "internalType": "struct RMRKEquipRenderUtils.EquippableData[]",
                "name": "assetsWithSlots",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint64",
                "name": "tokenId",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "assetId",
                "type": "uint64"
            }
        ],
        "name": "getEquipped",
        "outputs": [
            {
                "internalType": "uint64[]",
                "name": "slotPartIds",
                "type": "uint64[]"
            },
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "assetId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "childAssetId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint256",
                        "name": "childId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "childEquippableAddress",
                        "type": "address"
                    }
                ],
                "internalType": "struct IRMRKEquippable.Equipment[]",
                "name": "childrenEquipped",
                "type": "tuple[]"
            },
            {
                "internalType": "string[]",
                "name": "childrenAssetMetadata",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getExtendedActiveAssets",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint16",
                        "name": "priority",
                        "type": "uint16"
                    },
                    {
                        "internalType": "string",
                        "name": "metadata",
                        "type": "string"
                    }
                ],
                "internalType": "struct RMRKMultiAssetRenderUtils.ExtendedActiveAsset[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getExtendedEquippableActiveAssets",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "equippableGroupId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint16",
                        "name": "priority",
                        "type": "uint16"
                    },
                    {
                        "internalType": "address",
                        "name": "catalogAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "metadata",
                        "type": "string"
                    },
                    {
                        "internalType": "uint64[]",
                        "name": "partIds",
                        "type": "uint64[]"
                    }
                ],
                "internalType": "struct RMRKEquipRenderUtils.ExtendedEquippableActiveAsset[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "targetCollection",
                "type": "address"
            }
        ],
        "name": "getExtendedNft",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "tokenMetadataUri",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "directOwner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "rootOwner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "activeAssetCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pendingAssetCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint16[]",
                        "name": "priorities",
                        "type": "uint16[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxSupply",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalSupply",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "issuer",
                        "type": "address"
                    },
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
                        "internalType": "uint256",
                        "name": "activeChildrenNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isSoulbound",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "hasMultiAssetInterface",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "hasNestingInterface",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "hasEquippableInterface",
                        "type": "bool"
                    }
                ],
                "internalType": "struct RMRKRenderUtils.ExtendedNft",
                "name": "data",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getExtendedPendingAssets",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "equippableGroupId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint128",
                        "name": "acceptRejectIndex",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint64",
                        "name": "replacesAssetWithId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "address",
                        "name": "catalogAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "metadata",
                        "type": "string"
                    },
                    {
                        "internalType": "uint64[]",
                        "name": "partIds",
                        "type": "uint64[]"
                    }
                ],
                "internalType": "struct RMRKEquipRenderUtils.ExtendedPendingAsset[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "pageStart",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "pageSize",
                "type": "uint256"
            }
        ],
        "name": "getPaginatedMintedIds",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "page",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "childAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "childId",
                "type": "uint256"
            }
        ],
        "name": "getParent",
        "outputs": [
            {
                "internalType": "address",
                "name": "parentAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "parentId",
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
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getPendingAssets",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint128",
                        "name": "acceptRejectIndex",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint64",
                        "name": "replacesAssetWithId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "string",
                        "name": "metadata",
                        "type": "string"
                    }
                ],
                "internalType": "struct RMRKMultiAssetRenderUtils.PendingAsset[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getTopAssetAndEquippableDataForToken",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "equippableGroupId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint16",
                        "name": "priority",
                        "type": "uint16"
                    },
                    {
                        "internalType": "address",
                        "name": "catalogAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "metadata",
                        "type": "string"
                    },
                    {
                        "internalType": "uint64[]",
                        "name": "partIds",
                        "type": "uint64[]"
                    }
                ],
                "internalType": "struct RMRKEquipRenderUtils.ExtendedEquippableActiveAsset",
                "name": "topAsset",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getTopAssetMetaForToken",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "parentAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "parentId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "parentAssetCatalog",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "childAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "childId",
                "type": "uint256"
            },
            {
                "internalType": "uint64",
                "name": "childAssetId",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "slotPartId",
                "type": "uint64"
            }
        ],
        "name": "isAssetEquipped",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
//# sourceMappingURL=RMRKEquipRenderUtils.js.map