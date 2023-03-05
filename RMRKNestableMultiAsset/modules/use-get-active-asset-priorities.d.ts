/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type GetActiveAssetPrioritiesArguments = {
    tokenId: BigNumber;
};
export type GetActiveAssetPrioritiesContract = {
    abi: typeof RMRKNestableMultiAssetImpl;
    contractAddress: `0x${string}`;
    functionName: 'getActiveAssetPriorities';
};
export type GetActiveAssetPrioritiesOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableMultiAssetImpl, 'getActiveAssetPriorities', GetActiveAssetPrioritiesContract[]>>[0];
export declare const useGetActiveAssetPriorities: (args: GetActiveAssetPrioritiesArguments[], { skip, chainId, contractAddress, ...rest }: GetActiveAssetPrioritiesOptions) => UseQueryResult<(readonly number[])[], Error>;
