/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type ChildOfArguments = {
    parentId: BigNumber;
    index: BigNumber;
};
export type ChildOfContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'childOf';
};
export type ChildOfOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'childOf', ChildOfContract[]>>[0];
export declare const useChildOf: (args: ChildOfArguments[], { skip, chainId, contractAddress, ...rest }: ChildOfOptions) => UseQueryResult<{
    tokenId: BigNumber;
    contractAddress: `0x${string}`;
}[], Error>;
