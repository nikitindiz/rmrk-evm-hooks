/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type GetRoyaltyPercentageOptions = {
    chainId?: number;
    skip?: boolean;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractRead<typeof RMRKNestableExternalEquipImpl, 'getRoyaltyPercentage'>>;
export declare const useGetRoyaltyPercentage: ({ chainId, contractAddress, skip, ...rest }: GetRoyaltyPercentageOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
