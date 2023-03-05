/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type TotalListingsOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKMarketplace, 'totalListings'>>;
export declare const useTotalListings: ({ chainId, skip, network, ...rest }: TotalListingsOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
