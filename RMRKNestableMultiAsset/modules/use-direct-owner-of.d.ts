/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type DirectOwnerOfArguments = {
    tokenId: BigNumber;
};
export type DirectOwnerOfContract = {
    abi: typeof RMRKNestableMultiAssetImpl;
    contractAddress: `0x${string}`;
    functionName: 'directOwnerOf';
};
export type DirectOwnerOfOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableMultiAssetImpl, 'directOwnerOf', DirectOwnerOfContract[]>>[0];
export declare const useDirectOwnerOf: (args: DirectOwnerOfArguments[], { skip, chainId, contractAddress, ...rest }: DirectOwnerOfOptions) => UseQueryResult<(readonly [`0x${string}`, BigNumber, boolean] & {})[], Error>;
