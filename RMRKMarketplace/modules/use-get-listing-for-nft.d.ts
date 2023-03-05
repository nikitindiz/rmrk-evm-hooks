/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type GetListingForNftArguments = {
    assetContract: `0x${string}`;
    tokenId: BigNumber;
};
export type GetListingForNftContract = {
    abi: typeof RMRKMarketplace;
    contractAddress: `0x${string}`;
    functionName: 'getListingForNft';
};
export type GetListingForNftOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKMarketplace, 'getListingForNft', GetListingForNftContract[]>>[0];
export declare const useGetListingForNft: (args: GetListingForNftArguments[], { skip, chainId, network, ...rest }: GetListingForNftOptions) => UseQueryResult<{
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
}[], Error>;
