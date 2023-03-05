/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type GetApprovedForAssetsArguments = {
    tokenId: BigNumber;
};
export type GetApprovedForAssetsContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'getApprovedForAssets';
};
export type GetApprovedForAssetsOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'getApprovedForAssets', GetApprovedForAssetsContract[]>>[0];
export declare const useGetApprovedForAssets: (args: GetApprovedForAssetsArguments[], { skip, chainId, contractAddress, ...rest }: GetApprovedForAssetsOptions) => UseQueryResult<`0x${string}`[], Error>;
