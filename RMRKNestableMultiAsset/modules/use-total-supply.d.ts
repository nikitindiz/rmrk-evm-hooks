/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type TotalSupplyOptions = {
    chainId?: number;
    skip?: boolean;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractRead<typeof RMRKNestableMultiAssetImpl, 'totalSupply'>>;
export declare const useTotalSupply: ({ chainId, contractAddress, skip, ...rest }: TotalSupplyOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
