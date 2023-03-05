/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type ListingsArguments = [BigNumber];
export type ListingsContract = {
    abi: typeof RMRKMarketplace;
    contractAddress: `0x${string}`;
    functionName: 'listings';
};
export type ListingsOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKMarketplace, 'listings', ListingsContract[]>>[0];
export declare const useListings: (args: ListingsArguments[], { skip, chainId, network, ...rest }: ListingsOptions) => UseQueryResult<(readonly [BigNumber, `0x${string}`, `0x${string}`, BigNumber, BigNumber, BigNumber, BigNumber, `0x${string}`, BigNumber, number, number, {
    bidDecimals: BigNumber;
    stepMin: BigNumber;
    incMin: BigNumber;
    incMax: BigNumber;
    bidMultiplier: BigNumber;
    lastBidDueIncentives: BigNumber;
    auctionDebt: BigNumber;
}] & {
    listingId: BigNumber;
    tokenOwner: `0x${string}`;
    assetContract: `0x${string}`;
    tokenId: BigNumber;
    startTime: BigNumber;
    endTime: BigNumber;
    quantity: BigNumber;
    paymentCurrency: `0x${string}`;
    buyoutPricePerToken: BigNumber;
    tokenType: number;
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
})[], Error>;
