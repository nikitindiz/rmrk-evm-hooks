/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type BalanceOfArguments = {
    owner: `0x${string}`;
};
export type BalanceOfContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'balanceOf';
};
export type BalanceOfOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'balanceOf', BalanceOfContract[]>>[0];
export declare const useBalanceOf: (args: BalanceOfArguments[], { skip, chainId, contractAddress, ...rest }: BalanceOfOptions) => UseQueryResult<import("ethers").BigNumber[], Error>;
