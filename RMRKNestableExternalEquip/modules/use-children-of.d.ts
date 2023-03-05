/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type ChildrenOfArguments = {
    parentId: BigNumber;
};
export type ChildrenOfContract = {
    abi: typeof RMRKNestableExternalEquipImpl;
    contractAddress: `0x${string}`;
    functionName: 'childrenOf';
};
export type ChildrenOfOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableExternalEquipImpl, 'childrenOf', ChildrenOfContract[]>>[0];
export declare const useChildrenOf: (args: ChildrenOfArguments[], { skip, chainId, contractAddress, ...rest }: ChildrenOfOptions) => UseQueryResult<(readonly {
    tokenId: BigNumber;
    contractAddress: `0x${string}`;
}[])[], Error>;
