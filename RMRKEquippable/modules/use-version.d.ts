/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type VERSIONOptions = {
    chainId?: number;
    skip?: boolean;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractRead<typeof RMRKEquippableImpl, 'VERSION'>>;
export declare const useVERSION: ({ chainId, contractAddress, skip, ...rest }: VERSIONOptions) => UseQueryResult<string, Error>;
