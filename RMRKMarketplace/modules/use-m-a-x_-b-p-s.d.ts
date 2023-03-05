/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type MAX_BPSOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKMarketplace, 'MAX_BPS'>>;
export declare const useMAX_BPS: ({ chainId, skip, network, ...rest }: MAX_BPSOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
