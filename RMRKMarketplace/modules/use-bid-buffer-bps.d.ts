/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type BidBufferBpsOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKMarketplace, 'bidBufferBps'>>;
export declare const useBidBufferBps: ({ chainId, skip, network, ...rest }: BidBufferBpsOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
