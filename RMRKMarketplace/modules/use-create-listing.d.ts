/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type CreateListingArguments = {
    _params: {
        assetContract: `0x${string}`;
        tokenId: BigNumber;
        startTime: BigNumber;
        secondsUntilEndTime: BigNumber;
        quantityToList: BigNumber;
        currencyToAccept: `0x${string}`;
        buyoutPricePerToken: BigNumber;
        listingType: number;
        gbm: {
            bidDecimals: BigNumber;
            stepMin: BigNumber;
            incMin: BigNumber;
            incMax: BigNumber;
            bidMultiplier: BigNumber;
            lastBidDueIncentives: BigNumber;
            auctionDebt: BigNumber;
        };
    };
};
export type UseRMRKMarketplaceCreateListingReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type CreateListingOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'createListing', 0>>[0];
export declare const useCreateListing: ({ _params }: CreateListingArguments, { chainId, network, signer, ...rest }: CreateListingOptions) => UseRMRKMarketplaceCreateListingReturnValue;
