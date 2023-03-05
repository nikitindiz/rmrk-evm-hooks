/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type ChainIdOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKRegistry, 'chainId'>>;
export declare const useChainId: ({ chainId, skip, network, ...rest }: ChainIdOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
