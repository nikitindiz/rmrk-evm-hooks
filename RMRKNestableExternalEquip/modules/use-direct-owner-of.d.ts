/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type DirectOwnerOfArguments = {
    tokenId: BigNumber;
};
export type DirectOwnerOfContract = {
    abi: typeof RMRKNestableExternalEquipImpl;
    contractAddress: `0x${string}`;
    functionName: 'directOwnerOf';
};
export type DirectOwnerOfOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableExternalEquipImpl, 'directOwnerOf', DirectOwnerOfContract[]>>[0];
export declare const useDirectOwnerOf: (args: DirectOwnerOfArguments[], { skip, chainId, contractAddress, ...rest }: DirectOwnerOfOptions) => UseQueryResult<(readonly [`0x${string}`, BigNumber, boolean] & {})[], Error>;
