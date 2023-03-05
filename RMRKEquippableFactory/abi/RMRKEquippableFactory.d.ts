export declare const RMRKEquippableFactory: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "rmrkRegistry";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "symbol";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "collectionMetadata";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "tokenURI";
        readonly type: "string";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "erc20TokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "tokenUriIsEnumerable";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "royaltyRecipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "royaltyPercentageBps";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "pricePerMint";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IRMRKInitData.InitData";
        readonly name: "data";
        readonly type: "tuple";
    }];
    readonly name: "deployRMRKCollection";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
