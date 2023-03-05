export declare const RMRKMarketplace: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_nativeTokenWrapper";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_defaultAdmin";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_trustedForwarder";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_platformFeeRecipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_platformFeeBps";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "AuctionAlreadyStarted";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AuctionCreatorOnly";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AuctionNotEnded";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FeesExceedPrice";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InactiveListing";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectPrice";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectQuantity";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IncorrectValueSent";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidBidBufferBps";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidListingType";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidPlatformFeeBps";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidStartTime";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ListingDoesNotExist";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ListingExpired";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ListingQuantityExceeded";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MustUseApprovedCurrencyToBid";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MustUseApprovedCurrencyToBuy";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotApprovedOrNotOwner";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotDirectListing";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotEnoughTokenBalanceOrNotApproved";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotListingCreator";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotWinningBid";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotWithinSaleWindow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "UnsupportedTokenType";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "timeBuffer";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "bidBufferBps";
        readonly type: "uint256";
    }];
    readonly name: "AuctionBuffersUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "listingId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "closer";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "bool";
        readonly name: "cancelled";
        readonly type: "bool";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "auctionCreator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "winningBidder";
        readonly type: "address";
    }];
    readonly name: "AuctionClosed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "listingId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "assetContract";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "lister";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "listingId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "tokenOwner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "assetContract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "startTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "endTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "quantity";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "paymentCurrency";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "buyoutPricePerToken";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum IRMRKMarketplace.TokenType";
            readonly name: "tokenType";
            readonly type: "uint8";
        }, {
            readonly internalType: "enum IRMRKMarketplace.ListingType";
            readonly name: "listingType";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "bidDecimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "stepMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "incMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "incMax";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bidMultiplier";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastBidDueIncentives";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "auctionDebt";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IRMRKMarketplace.GBMParameters";
            readonly name: "gbm";
            readonly type: "tuple";
        }];
        readonly indexed: false;
        readonly internalType: "struct IRMRKMarketplace.Listing";
        readonly name: "listing";
        readonly type: "tuple";
    }];
    readonly name: "ListingAdded";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "listingId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "listingCreator";
        readonly type: "address";
    }];
    readonly name: "ListingRemoved";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "listingId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "listingCreator";
        readonly type: "address";
    }];
    readonly name: "ListingUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "listingId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bidder";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "enum IRMRKMarketplace.ListingType";
        readonly name: "listingType";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "quantityWanted";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalOfferAmount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "currency";
        readonly type: "address";
    }];
    readonly name: "NewOffer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "listingId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "assetContract";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "lister";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "buyer";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "quantityBought";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalPricePaid";
        readonly type: "uint256";
    }];
    readonly name: "NewSale";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "platformFeeRecipient";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "platformFeeBps";
        readonly type: "uint256";
    }];
    readonly name: "PlatformFeeInfoUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "previousAdminRole";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "newAdminRole";
        readonly type: "bytes32";
    }];
    readonly name: "RoleAdminChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "RoleGranted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "RoleRevoked";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "DEFAULT_ADMIN_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MAX_BPS";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_listingId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_bidder";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_paymentCurrency";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_pricePerToken";
        readonly type: "uint256";
    }];
    readonly name: "acceptOffer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "bidBufferBps";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_listingId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_buyFor";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_quantityToBuy";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_paymentCurrency";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_totalPrice";
        readonly type: "uint256";
    }];
    readonly name: "buy";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_listingId";
        readonly type: "uint256";
    }];
    readonly name: "cancelAuction";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_listingId";
        readonly type: "uint256";
    }];
    readonly name: "cancelDirectListing";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "assetContract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "startTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "secondsUntilEndTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "quantityToList";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "currencyToAccept";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "buyoutPricePerToken";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum IRMRKMarketplace.ListingType";
            readonly name: "listingType";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "bidDecimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "stepMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "incMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "incMax";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bidMultiplier";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastBidDueIncentives";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "auctionDebt";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IRMRKMarketplace.GBMParameters";
            readonly name: "gbm";
            readonly type: "tuple";
        }];
        readonly internalType: "struct IRMRKMarketplace.ListingParameters";
        readonly name: "_params";
        readonly type: "tuple";
    }];
    readonly name: "createListing";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "assetContract";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getListingForNft";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "listingId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "tokenOwner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "assetContract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "startTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "endTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "quantity";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "paymentCurrency";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "buyoutPricePerToken";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum IRMRKMarketplace.TokenType";
            readonly name: "tokenType";
            readonly type: "uint8";
        }, {
            readonly internalType: "enum IRMRKMarketplace.ListingType";
            readonly name: "listingType";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "bidDecimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "stepMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "incMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "incMax";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bidMultiplier";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastBidDueIncentives";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "auctionDebt";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IRMRKMarketplace.GBMParameters";
            readonly name: "gbm";
            readonly type: "tuple";
        }];
        readonly internalType: "struct IRMRKMarketplace.Listing";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPlatformFeeInfo";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "uint16";
        readonly name: "";
        readonly type: "uint16";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }];
    readonly name: "getRoleAdmin";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint256";
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "getRoleMember";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }];
    readonly name: "getRoleMemberCount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "grantRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "hasRole";
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
        readonly name: "forwarder";
        readonly type: "address";
    }];
    readonly name: "isTrustedForwarder";
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
    readonly name: "listings";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "listingId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "tokenOwner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "assetContract";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "startTime";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "endTime";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "quantity";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "paymentCurrency";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "buyoutPricePerToken";
        readonly type: "uint256";
    }, {
        readonly internalType: "enum IRMRKMarketplace.TokenType";
        readonly name: "tokenType";
        readonly type: "uint8";
    }, {
        readonly internalType: "enum IRMRKMarketplace.ListingType";
        readonly name: "listingType";
        readonly type: "uint8";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "bidDecimals";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "stepMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "incMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "incMax";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bidMultiplier";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastBidDueIncentives";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "auctionDebt";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IRMRKMarketplace.GBMParameters";
        readonly name: "gbm";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_listingId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_quantityWanted";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_paymentCurrency";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_pricePerToken";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_expirationTimestamp";
        readonly type: "uint256";
    }];
    readonly name: "offer";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "offers";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "listingId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "bidder";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "quantityWanted";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "currency";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "pricePerToken";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "expirationTimestamp";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly name: "onERC1155BatchReceived";
    readonly outputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "";
        readonly type: "bytes4";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly name: "onERC1155Received";
    readonly outputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "";
        readonly type: "bytes4";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly name: "onERC721Received";
    readonly outputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "";
        readonly type: "bytes4";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "renounceRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "revokeRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_timeBuffer";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_bidBufferBps";
        readonly type: "uint256";
    }];
    readonly name: "setAuctionBuffers";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_platformFeeRecipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_platformFeeBps";
        readonly type: "uint256";
    }];
    readonly name: "setPlatformFeeInfo";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_listingId";
        readonly type: "uint256";
    }];
    readonly name: "settleAuction";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "interfaceId";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "timeBuffer";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalListings";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_listingId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_quantityToList";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_buyoutPricePerToken";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_currencyToAccept";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_startTime";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_secondsUntilEndTime";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "bidDecimals";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "stepMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "incMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "incMax";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bidMultiplier";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastBidDueIncentives";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "auctionDebt";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IRMRKMarketplace.GBMParameters";
        readonly name: "_gbm";
        readonly type: "tuple";
    }];
    readonly name: "updateListing";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "winningBid";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "listingId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "bidder";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "quantityWanted";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "currency";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "pricePerToken";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "expirationTimestamp";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
