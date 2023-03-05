/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type MaxSupplyOptions = {
    chainId?: number;
    skip?: boolean;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractRead<typeof RMRKEquippableImpl, 'maxSupply'>>;
export declare const useMaxSupply: ({ chainId, contractAddress, skip, ...rest }: MaxSupplyOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
