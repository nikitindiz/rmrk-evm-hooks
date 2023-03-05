/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type PendingChildrenOfArguments = {
    parentId: BigNumber;
};
export type PendingChildrenOfContract = {
    abi: typeof RMRKNestableMultiAssetImpl;
    contractAddress: `0x${string}`;
    functionName: 'pendingChildrenOf';
};
export type PendingChildrenOfOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableMultiAssetImpl, 'pendingChildrenOf', PendingChildrenOfContract[]>>[0];
export declare const usePendingChildrenOf: (args: PendingChildrenOfArguments[], { skip, chainId, contractAddress, ...rest }: PendingChildrenOfOptions) => UseQueryResult<(readonly {
    tokenId: BigNumber;
    contractAddress: `0x${string}`;
}[])[], Error>;
