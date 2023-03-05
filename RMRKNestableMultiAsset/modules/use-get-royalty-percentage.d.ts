/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type GetRoyaltyPercentageOptions = {
    chainId?: number;
    skip?: boolean;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractRead<typeof RMRKNestableMultiAssetImpl, 'getRoyaltyPercentage'>>;
export declare const useGetRoyaltyPercentage: ({ chainId, contractAddress, skip, ...rest }: GetRoyaltyPercentageOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
