/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type UpdateListingArguments = {
    _listingId: BigNumber;
    _quantityToList: BigNumber;
    _buyoutPricePerToken: BigNumber;
    _currencyToAccept: `0x${string}`;
    _startTime: BigNumber;
    _secondsUntilEndTime: BigNumber;
    _gbm: {
        bidDecimals: BigNumber;
        stepMin: BigNumber;
        incMin: BigNumber;
        incMax: BigNumber;
        bidMultiplier: BigNumber;
        lastBidDueIncentives: BigNumber;
        auctionDebt: BigNumber;
    };
};
export type UseRMRKMarketplaceUpdateListingReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type UpdateListingOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'updateListing', 0>>[0];
export declare const useUpdateListing: ({ _listingId, _quantityToList, _buyoutPricePerToken, _currencyToAccept, _startTime, _secondsUntilEndTime, _gbm, }: UpdateListingArguments, { chainId, network, signer, ...rest }: UpdateListingOptions) => UseRMRKMarketplaceUpdateListingReturnValue;
