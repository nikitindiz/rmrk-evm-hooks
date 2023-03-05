/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type GetLockOptions = {
    chainId?: number;
    skip?: boolean;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractRead<typeof RMRKNestableExternalEquipImpl, 'getLock'>>;
export declare const useGetLock: ({ chainId, contractAddress, skip, ...rest }: GetLockOptions) => UseQueryResult<boolean, Error>;
