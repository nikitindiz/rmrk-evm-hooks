/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type IsApprovedOrOwnerArguments = {
    spender: `0x${string}`;
    tokenId: BigNumber;
};
export type IsApprovedOrOwnerContract = {
    abi: typeof RMRKNestableExternalEquipImpl;
    contractAddress: `0x${string}`;
    functionName: 'isApprovedOrOwner';
};
export type IsApprovedOrOwnerOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableExternalEquipImpl, 'isApprovedOrOwner', IsApprovedOrOwnerContract[]>>[0];
export declare const useIsApprovedOrOwner: (args: IsApprovedOrOwnerArguments[], { skip, chainId, contractAddress, ...rest }: IsApprovedOrOwnerOptions) => UseQueryResult<boolean[], Error>;
