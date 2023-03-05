/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type GetRmrkTokenAddressOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKRegistry, 'getRmrkTokenAddress'>>;
export declare const useGetRmrkTokenAddress: ({ chainId, skip, network, ...rest }: GetRmrkTokenAddressOptions) => UseQueryResult<`0x${string}`, Error>;
