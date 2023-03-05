/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type TimeBufferOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKMarketplace, 'timeBuffer'>>;
export declare const useTimeBuffer: ({ chainId, skip, network, ...rest }: TimeBufferOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
