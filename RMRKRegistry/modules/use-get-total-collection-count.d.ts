/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type GetTotalCollectionCountOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKRegistry, 'getTotalCollectionCount'>>;
export declare const useGetTotalCollectionCount: ({ chainId, skip, network, ...rest }: GetTotalCollectionCountOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
