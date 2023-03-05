/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type GetPlatformFeeInfoOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKMarketplace, 'getPlatformFeeInfo'>>;
export declare const useGetPlatformFeeInfo: ({ chainId, skip, network, ...rest }: GetPlatformFeeInfoOptions) => UseQueryResult<readonly [`0x${string}`, number] & {}, Error>;
