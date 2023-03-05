/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type WinningBidArguments = [BigNumber];
export type WinningBidContract = {
    abi: typeof RMRKMarketplace;
    contractAddress: `0x${string}`;
    functionName: 'winningBid';
};
export type WinningBidOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKMarketplace, 'winningBid', WinningBidContract[]>>[0];
export declare const useWinningBid: (args: WinningBidArguments[], { skip, chainId, network, ...rest }: WinningBidOptions) => UseQueryResult<(readonly [BigNumber, `0x${string}`, BigNumber, `0x${string}`, BigNumber, BigNumber] & {
    listingId: BigNumber;
    bidder: `0x${string}`;
    quantityWanted: BigNumber;
    currency: `0x${string}`;
    pricePerToken: BigNumber;
    expirationTimestamp: BigNumber;
})[], Error>;
