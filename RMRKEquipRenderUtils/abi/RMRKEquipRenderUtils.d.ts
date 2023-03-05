export declare const RMRKEquipRenderUtils: readonly [{
    readonly inputs: readonly [];
    readonly name: "RMRKChildNotFoundInParent";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RMRKNotComposableAsset";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RMRKParentIsNotNFT";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RMRKTokenHasNoAssets";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RMRKUnexpectedParent";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64[]";
        readonly name: "allPartIds";
        readonly type: "uint64[]";
    }, {
        readonly internalType: "address";
        readonly name: "catalogAddress";
        readonly type: "address";
    }];
    readonly name: "_splitSlotAndFixedParts";
    readonly outputs: readonly [{
        readonly internalType: "uint64[]";
        readonly name: "slotPartIds";
        readonly type: "uint64[]";
    }, {
        readonly internalType: "uint64[]";
        readonly name: "fixedPartIds";
        readonly type: "uint64[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "childAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "childId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "expectedParent";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "expectedParentId";
        readonly type: "uint256";
    }];
    readonly name: "checkExpectedParent";
    readonly outputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64";
        readonly name: "assetId";
        readonly type: "uint64";
    }];
    readonly name: "composeEquippables";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "metadataURI";
        readonly type: "string";
    }, {
        readonly internalType: "uint64";
        readonly name: "equippableGroupId";
        readonly type: "uint64";
    }, {
        readonly internalType: "address";
        readonly name: "catalogAddress";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "partId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint8";
            readonly name: "z";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "metadataURI";
            readonly type: "string";
        }];
        readonly internalType: "struct RMRKEquipRenderUtils.FixedPart[]";
        readonly name: "fixedParts";
        readonly type: "tuple[]";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "partId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "childAssetId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint8";
            readonly name: "z";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "childAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "childId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "childAssetMetadata";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "partMetadata";
            readonly type: "string";
        }];
        readonly internalType: "struct RMRKEquipRenderUtils.EquippedSlotPart[]";
        readonly name: "slotParts";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "targetChild";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "childId";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "onlyEquipped";
        readonly type: "bool";
    }];
    readonly name: "getAllEquippableSlotsFromParent";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "childIndex";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "slotPartId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "childAssetId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "parentAssetId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "priority";
            readonly type: "uint16";
        }, {
            readonly internalType: "address";
            readonly name: "parentCatalogAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isEquipped";
            readonly type: "bool";
        }, {
            readonly internalType: "string";
            readonly name: "partMetadata";
            readonly type: "string";
        }];
        readonly internalType: "struct RMRKEquipRenderUtils.EquippableData[]";
        readonly name: "assetsWithSlots";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getAssetIdWithTopPriority";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint16";
        readonly name: "";
        readonly type: "uint16";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64[]";
        readonly name: "assetIds";
        readonly type: "uint64[]";
    }];
    readonly name: "getAssetsById";
    readonly outputs: readonly [{
        readonly internalType: "string[]";
        readonly name: "";
        readonly type: "string[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "parentAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "parentId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "childAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "childId";
        readonly type: "uint256";
    }];
    readonly name: "getChildIndex";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "targetChild";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "childId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64";
        readonly name: "parentAssetId";
        readonly type: "uint64";
    }];
    readonly name: "getEquippableSlotsFromParent";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "childIndex";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "slotPartId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "childAssetId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "parentAssetId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "priority";
            readonly type: "uint16";
        }, {
            readonly internalType: "address";
            readonly name: "parentCatalogAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isEquipped";
            readonly type: "bool";
        }, {
            readonly internalType: "string";
            readonly name: "partMetadata";
            readonly type: "string";
        }];
        readonly internalType: "struct RMRKEquipRenderUtils.EquippableData[]";
        readonly name: "assetsWithSlots";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly internalType: "uint64";
        readonly name: "tokenId";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "assetId";
        readonly type: "uint64";
    }];
    readonly name: "getEquipped";
    readonly outputs: readonly [{
        readonly internalType: "uint64[]";
        readonly name: "slotPartIds";
        readonly type: "uint64[]";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "assetId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "childAssetId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint256";
            readonly name: "childId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "childEquippableAddress";
            readonly type: "address";
        }];
        readonly internalType: "struct IRMRKEquippable.Equipment[]";
        readonly name: "childrenEquipped";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "string[]";
        readonly name: "childrenAssetMetadata";
        readonly type: "string[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getExtendedActiveAssets";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "id";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "priority";
            readonly type: "uint16";
        }, {
            readonly internalType: "string";
            readonly name: "metadata";
            readonly type: "string";
        }];
        readonly internalType: "struct RMRKMultiAssetRenderUtils.ExtendedActiveAsset[]";
        readonly name: "";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getExtendedEquippableActiveAssets";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "id";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "equippableGroupId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "priority";
            readonly type: "uint16";
        }, {
            readonly internalType: "address";
            readonly name: "catalogAddress";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "metadata";
            readonly type: "string";
        }, {
            readonly internalType: "uint64[]";
            readonly name: "partIds";
            readonly type: "uint64[]";
        }];
        readonly internalType: "struct RMRKEquipRenderUtils.ExtendedEquippableActiveAsset[]";
        readonly name: "";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "targetCollection";
        readonly type: "address";
    }];
    readonly name: "getExtendedNft";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "string";
            readonly name: "tokenMetadataUri";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "directOwner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "rootOwner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "activeAssetCount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "pendingAssetCount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16[]";
            readonly name: "priorities";
            readonly type: "uint16[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "issuer";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "activeChildrenNumber";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "isSoulbound";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "hasMultiAssetInterface";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "hasNestingInterface";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "hasEquippableInterface";
            readonly type: "bool";
        }];
        readonly internalType: "struct RMRKRenderUtils.ExtendedNft";
        readonly name: "data";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getExtendedPendingAssets";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "id";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "equippableGroupId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint128";
            readonly name: "acceptRejectIndex";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint64";
            readonly name: "replacesAssetWithId";
            readonly type: "uint64";
        }, {
            readonly internalType: "address";
            readonly name: "catalogAddress";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "metadata";
            readonly type: "string";
        }, {
            readonly internalType: "uint64[]";
            readonly name: "partIds";
            readonly type: "uint64[]";
        }];
        readonly internalType: "struct RMRKEquipRenderUtils.ExtendedPendingAsset[]";
        readonly name: "";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "pageStart";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "pageSize";
        readonly type: "uint256";
    }];
    readonly name: "getPaginatedMintedIds";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "page";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "childAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "childId";
        readonly type: "uint256";
    }];
    readonly name: "getParent";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "parentAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "parentId";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getPendingAssets";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "id";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint128";
            readonly name: "acceptRejectIndex";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint64";
            readonly name: "replacesAssetWithId";
            readonly type: "uint64";
        }, {
            readonly internalType: "string";
            readonly name: "metadata";
            readonly type: "string";
        }];
        readonly internalType: "struct RMRKMultiAssetRenderUtils.PendingAsset[]";
        readonly name: "";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getTopAssetAndEquippableDataForToken";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "id";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "equippableGroupId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "priority";
            readonly type: "uint16";
        }, {
            readonly internalType: "address";
            readonly name: "catalogAddress";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "metadata";
            readonly type: "string";
        }, {
            readonly internalType: "uint64[]";
            readonly name: "partIds";
            readonly type: "uint64[]";
        }];
        readonly internalType: "struct RMRKEquipRenderUtils.ExtendedEquippableActiveAsset";
        readonly name: "topAsset";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getTopAssetMetaForToken";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "parentAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "parentId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "parentAssetCatalog";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "childAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "childId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64";
        readonly name: "childAssetId";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "slotPartId";
        readonly type: "uint64";
    }];
    readonly name: "isAssetEquipped";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
