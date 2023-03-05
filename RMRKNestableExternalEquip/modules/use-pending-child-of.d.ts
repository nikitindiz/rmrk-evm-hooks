/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type PendingChildOfArguments = {
    parentId: BigNumber;
    index: BigNumber;
};
export type PendingChildOfContract = {
    abi: typeof RMRKNestableExternalEquipImpl;
    contractAddress: `0x${string}`;
    functionName: 'pendingChildOf';
};
export type PendingChildOfOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableExternalEquipImpl, 'pendingChildOf', PendingChildOfContract[]>>[0];
export declare const usePendingChildOf: (args: PendingChildOfArguments[], { skip, chainId, contractAddress, ...rest }: PendingChildOfOptions) => UseQueryResult<{
    tokenId: BigNumber;
    contractAddress: `0x${string}`;
}[], Error>;
