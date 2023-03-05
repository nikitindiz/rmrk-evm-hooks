/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type TotalCollectionsCounterOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKRegistry, 'totalCollectionsCounter'>>;
export declare const useTotalCollectionsCounter: ({ chainId, skip, network, ...rest }: TotalCollectionsCounterOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
