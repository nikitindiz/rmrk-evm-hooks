/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type ChildIsInActiveArguments = {
    childAddress: `0x${string}`;
    childId: BigNumber;
};
export type ChildIsInActiveContract = {
    abi: typeof RMRKNestableExternalEquipImpl;
    contractAddress: `0x${string}`;
    functionName: 'childIsInActive';
};
export type ChildIsInActiveOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableExternalEquipImpl, 'childIsInActive', ChildIsInActiveContract[]>>[0];
export declare const useChildIsInActive: (args: ChildIsInActiveArguments[], { skip, chainId, contractAddress, ...rest }: ChildIsInActiveOptions) => UseQueryResult<boolean[], Error>;
