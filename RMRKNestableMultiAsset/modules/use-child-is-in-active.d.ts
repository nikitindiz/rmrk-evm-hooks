/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type ChildIsInActiveArguments = {
    childAddress: `0x${string}`;
    childId: BigNumber;
};
export type ChildIsInActiveContract = {
    abi: typeof RMRKNestableMultiAssetImpl;
    contractAddress: `0x${string}`;
    functionName: 'childIsInActive';
};
export type ChildIsInActiveOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableMultiAssetImpl, 'childIsInActive', ChildIsInActiveContract[]>>[0];
export declare const useChildIsInActive: (args: ChildIsInActiveArguments[], { skip, chainId, contractAddress, ...rest }: ChildIsInActiveOptions) => UseQueryResult<boolean[], Error>;
