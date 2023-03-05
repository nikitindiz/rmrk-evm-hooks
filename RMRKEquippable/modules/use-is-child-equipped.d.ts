/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type IsChildEquippedArguments = {
    tokenId: BigNumber;
    childAddress: `0x${string}`;
    childId: BigNumber;
};
export type IsChildEquippedContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'isChildEquipped';
};
export type IsChildEquippedOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'isChildEquipped', IsChildEquippedContract[]>>[0];
export declare const useIsChildEquipped: (args: IsChildEquippedArguments[], { skip, chainId, contractAddress, ...rest }: IsChildEquippedOptions) => UseQueryResult<boolean[], Error>;
