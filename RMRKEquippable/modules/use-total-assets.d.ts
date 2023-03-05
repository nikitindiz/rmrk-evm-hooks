/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type TotalAssetsOptions = {
    chainId?: number;
    skip?: boolean;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractRead<typeof RMRKEquippableImpl, 'totalAssets'>>;
export declare const useTotalAssets: ({ chainId, contractAddress, skip, ...rest }: TotalAssetsOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
