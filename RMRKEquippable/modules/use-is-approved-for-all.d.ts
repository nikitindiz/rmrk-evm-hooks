/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type IsApprovedForAllArguments = {
    owner: `0x${string}`;
    operator: `0x${string}`;
};
export type IsApprovedForAllContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'isApprovedForAll';
};
export type IsApprovedForAllOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'isApprovedForAll', IsApprovedForAllContract[]>>[0];
export declare const useIsApprovedForAll: (args: IsApprovedForAllArguments[], { skip, chainId, contractAddress, ...rest }: IsApprovedForAllOptions) => UseQueryResult<boolean[], Error>;
