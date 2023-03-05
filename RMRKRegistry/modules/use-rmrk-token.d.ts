/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type RmrkTokenOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKRegistry, 'rmrkToken'>>;
export declare const useRmrkToken: ({ chainId, skip, network, ...rest }: RmrkTokenOptions) => UseQueryResult<`0x${string}`, Error>;
