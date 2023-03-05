export const RMRKMarketplace = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nativeTokenWrapper",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_defaultAdmin",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_trustedForwarder",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_platformFeeRecipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_platformFeeBps",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "AuctionAlreadyStarted",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "AuctionCreatorOnly",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "AuctionNotEnded",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "FeesExceedPrice",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InactiveListing",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "IncorrectPrice",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "IncorrectQuantity",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "IncorrectValueSent",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidBidBufferBps",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidListingType",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidPlatformFeeBps",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidStartTime",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ListingDoesNotExist",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ListingExpired",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ListingQuantityExceeded",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "MustUseApprovedCurrencyToBid",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "MustUseApprovedCurrencyToBuy",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotApprovedOrNotOwner",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotDirectListing",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotEnoughTokenBalanceOrNotApproved",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotListingCreator",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotWinningBid",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotWithinSaleWindow",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UnsupportedTokenType",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timeBuffer",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "bidBufferBps",
                "type": "uint256"
            }
        ],
        "name": "AuctionBuffersUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "closer",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "bool",
                "name": "cancelled",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "auctionCreator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "winningBidder",
                "type": "address"
            }
        ],
        "name": "AuctionClosed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "assetContract",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "lister",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "listingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "tokenOwner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "assetContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "paymentCurrency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "buyoutPricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum IRMRKMarketplace.TokenType",
                        "name": "tokenType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum IRMRKMarketplace.ListingType",
                        "name": "listingType",
                        "type": "uint8"
                    },
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "bidDecimals",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "stepMin",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "incMin",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "incMax",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "bidMultiplier",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "lastBidDueIncentives",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "auctionDebt",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct IRMRKMarketplace.GBMParameters",
                        "name": "gbm",
                        "type": "tuple"
                    }
                ],
                "indexed": false,
                "internalType": "struct IRMRKMarketplace.Listing",
                "name": "listing",
                "type": "tuple"
            }
        ],
        "name": "ListingAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "listingCreator",
                "type": "address"
            }
        ],
        "name": "ListingRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "listingCreator",
                "type": "address"
            }
        ],
        "name": "ListingUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "bidder",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "enum IRMRKMarketplace.ListingType",
                "name": "listingType",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantityWanted",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalOfferAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "currency",
                "type": "address"
            }
        ],
        "name": "NewOffer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "assetContract",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "lister",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantityBought",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalPricePaid",
                "type": "uint256"
            }
        ],
        "name": "NewSale",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "platformFeeRecipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "platformFeeBps",
                "type": "uint256"
            }
        ],
        "name": "PlatformFeeInfoUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_BPS",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_listingId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_bidder",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_paymentCurrency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_pricePerToken",
                "type": "uint256"
            }
        ],
        "name": "acceptOffer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "bidBufferBps",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_listingId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_buyFor",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_quantityToBuy",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_paymentCurrency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_totalPrice",
                "type": "uint256"
            }
        ],
        "name": "buy",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_listingId",
                "type": "uint256"
            }
        ],
        "name": "cancelAuction",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_listingId",
                "type": "uint256"
            }
        ],
        "name": "cancelDirectListing",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "assetContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "secondsUntilEndTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantityToList",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currencyToAccept",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "buyoutPricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum IRMRKMarketplace.ListingType",
                        "name": "listingType",
                        "type": "uint8"
                    },
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "bidDecimals",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "stepMin",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "incMin",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "incMax",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "bidMultiplier",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "lastBidDueIncentives",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "auctionDebt",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct IRMRKMarketplace.GBMParameters",
                        "name": "gbm",
                        "type": "tuple"
                    }
                ],
                "internalType": "struct IRMRKMarketplace.ListingParameters",
                "name": "_params",
                "type": "tuple"
            }
        ],
        "name": "createListing",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "assetContract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getListingForNft",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "listingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "tokenOwner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "assetContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "paymentCurrency",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "buyoutPricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum IRMRKMarketplace.TokenType",
                        "name": "tokenType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum IRMRKMarketplace.ListingType",
                        "name": "listingType",
                        "type": "uint8"
                    },
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "bidDecimals",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "stepMin",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "incMin",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "incMax",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "bidMultiplier",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "lastBidDueIncentives",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "auctionDebt",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct IRMRKMarketplace.GBMParameters",
                        "name": "gbm",
                        "type": "tuple"
                    }
                ],
                "internalType": "struct IRMRKMarketplace.Listing",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlatformFeeInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
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
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getRoleMember",
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
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleMemberCount",
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
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
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
                "name": "forwarder",
                "type": "address"
            }
        ],
        "name": "isTrustedForwarder",
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
        "name": "listings",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "tokenOwner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "assetContract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "paymentCurrency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "buyoutPricePerToken",
                "type": "uint256"
            },
            {
                "internalType": "enum IRMRKMarketplace.TokenType",
                "name": "tokenType",
                "type": "uint8"
            },
            {
                "internalType": "enum IRMRKMarketplace.ListingType",
                "name": "listingType",
                "type": "uint8"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "bidDecimals",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "stepMin",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "incMin",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "incMax",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "bidMultiplier",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastBidDueIncentives",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "auctionDebt",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct IRMRKMarketplace.GBMParameters",
                "name": "gbm",
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
                "name": "_listingId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_quantityWanted",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_paymentCurrency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_pricePerToken",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_expirationTimestamp",
                "type": "uint256"
            }
        ],
        "name": "offer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "offers",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "bidder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "quantityWanted",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "currency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "pricePerToken",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "expirationTimestamp",
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
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155BatchReceived",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_timeBuffer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_bidBufferBps",
                "type": "uint256"
            }
        ],
        "name": "setAuctionBuffers",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_platformFeeRecipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_platformFeeBps",
                "type": "uint256"
            }
        ],
        "name": "setPlatformFeeInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_listingId",
                "type": "uint256"
            }
        ],
        "name": "settleAuction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
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
        "inputs": [],
        "name": "timeBuffer",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalListings",
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
                "internalType": "uint256",
                "name": "_listingId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_quantityToList",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_buyoutPricePerToken",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_currencyToAccept",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_secondsUntilEndTime",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "bidDecimals",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "stepMin",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "incMin",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "incMax",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "bidMultiplier",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastBidDueIncentives",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "auctionDebt",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct IRMRKMarketplace.GBMParameters",
                "name": "_gbm",
                "type": "tuple"
            }
        ],
        "name": "updateListing",
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
        "name": "winningBid",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "bidder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "quantityWanted",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "currency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "pricePerToken",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "expirationTimestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];
//# sourceMappingURL=RMRKMarketplace.js.map