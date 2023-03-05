/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type GetActiveAssetPrioritiesArguments = {
    tokenId: BigNumber;
};
export type GetActiveAssetPrioritiesContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'getActiveAssetPriorities';
};
export type GetActiveAssetPrioritiesOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'getActiveAssetPriorities', GetActiveAssetPrioritiesContract[]>>[0];
export declare const useGetActiveAssetPriorities: (args: GetActiveAssetPrioritiesArguments[], { skip, chainId, contractAddress, ...rest }: GetActiveAssetPrioritiesOptions) => UseQueryResult<(readonly number[])[], Error>;
