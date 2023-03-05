/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type OffersArguments = [BigNumber, `0x${string}`];
export type OffersContract = {
    abi: typeof RMRKMarketplace;
    contractAddress: `0x${string}`;
    functionName: 'offers';
};
export type OffersOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKMarketplace, 'offers', OffersContract[]>>[0];
export declare const useOffers: (args: OffersArguments[], { skip, chainId, network, ...rest }: OffersOptions) => UseQueryResult<(readonly [BigNumber, `0x${string}`, BigNumber, `0x${string}`, BigNumber, BigNumber] & {
    listingId: BigNumber;
    bidder: `0x${string}`;
    quantityWanted: BigNumber;
    currency: `0x${string}`;
    pricePerToken: BigNumber;
    expirationTimestamp: BigNumber;
})[], Error>;
