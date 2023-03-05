/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type TotalSupplyOptions = {
    chainId?: number;
    skip?: boolean;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractRead<typeof RMRKNestableExternalEquipImpl, 'totalSupply'>>;
export declare const useTotalSupply: ({ chainId, contractAddress, skip, ...rest }: TotalSupplyOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
