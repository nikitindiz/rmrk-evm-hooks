/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type OwnerOptions = {
    chainId?: number;
    skip?: boolean;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractRead<typeof RMRKNestableExternalEquipImpl, 'owner'>>;
export declare const useOwner: ({ chainId, contractAddress, skip, ...rest }: OwnerOptions) => UseQueryResult<`0x${string}`, Error>;
