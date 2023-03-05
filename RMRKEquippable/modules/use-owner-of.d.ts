/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type OwnerOfArguments = {
    tokenId: BigNumber;
};
export type OwnerOfContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'ownerOf';
};
export type OwnerOfOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'ownerOf', OwnerOfContract[]>>[0];
export declare const useOwnerOf: (args: OwnerOfArguments[], { skip, chainId, contractAddress, ...rest }: OwnerOfOptions) => UseQueryResult<`0x${string}`[], Error>;
