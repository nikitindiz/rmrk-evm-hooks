export declare const RMRKRegistry: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_rmrkToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_collectionVerificationFee";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "collection";
        readonly type: "address";
    }];
    readonly name: "CollectionDoesNotExist";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "collection";
        readonly type: "address";
    }];
    readonly name: "CollectionBlacklisted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "collection";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "deployer";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "symbol";
        readonly type: "string";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "maxSupply";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "collectionMetadata";
        readonly type: "string";
    }, {
        readonly indexed: false;
        readonly internalType: "enum IRMRKRegistry.RMRKType";
        readonly name: "collectionType";
        readonly type: "uint8";
    }];
    readonly name: "CollectionCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "acceptedCurrencies";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "currency";
        readonly type: "address";
    }];
    readonly name: "addAcceptedCurrency";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newAdmin";
        readonly type: "address";
    }];
    readonly name: "addAdmin";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_collection";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_deployer";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_maxSupply";
        readonly type: "uint256";
    }, {
        readonly internalType: "enum IRMRKRegistry.RMRKType";
        readonly name: "collectionType";
        readonly type: "uint8";
    }];
    readonly name: "addCollection";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "factory";
        readonly type: "address";
    }];
    readonly name: "addFactory";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "adminList";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "admins";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_collection";
        readonly type: "address";
    }];
    readonly name: "blackListCollection";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "chainId";
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
        readonly name: "_collection";
        readonly type: "address";
    }];
    readonly name: "claimDepositAndRemoveCollection";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "collectionVerificationFee";
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
        readonly name: "_collection";
        readonly type: "address";
    }];
    readonly name: "declineVerification";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "factories";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "factoryList";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_index";
        readonly type: "uint256";
    }];
    readonly name: "getCollectionAddressByIndex";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_collection";
        readonly type: "address";
    }];
    readonly name: "getCollectionByAddress";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "collection";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "verificationSponsor";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "verificationFeeBalance";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum IRMRKRegistry.RMRKType";
            readonly name: "collectionType";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "visible";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "verified";
            readonly type: "bool";
        }];
        readonly internalType: "struct IRMRKRegistry.Collection";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_index";
        readonly type: "uint256";
    }];
    readonly name: "getCollectionByIndex";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "collection";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "verificationSponsor";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "verificationFeeBalance";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum IRMRKRegistry.RMRKType";
            readonly name: "collectionType";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "visible";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "verified";
            readonly type: "bool";
        }];
        readonly internalType: "struct IRMRKRegistry.Collection";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getCollectionVerificationFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getRmrkTokenAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getTotalCollectionCount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "currencyIndex";
        readonly type: "uint256";
    }];
    readonly name: "removeAcceptedCurrency";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "admin";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "adminIndex";
        readonly type: "uint256";
    }];
    readonly name: "removeAdmin";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "factory";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "factoryIndex";
        readonly type: "uint256";
    }];
    readonly name: "removeFactory";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "rmrkToken";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_collection";
        readonly type: "address";
    }];
    readonly name: "sponsorVerification";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalCollectionsCounter";
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
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_collection";
        readonly type: "address";
    }];
    readonly name: "unblackListCollection";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_collectionVerificationFee";
        readonly type: "uint256";
    }];
    readonly name: "updateCollectionVerificationFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_collection";
        readonly type: "address";
    }];
    readonly name: "verifyCollection";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "withdrawFees";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
