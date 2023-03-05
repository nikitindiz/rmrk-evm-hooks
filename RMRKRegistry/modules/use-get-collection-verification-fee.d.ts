/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type GetCollectionVerificationFeeOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKRegistry, 'getCollectionVerificationFee'>>;
export declare const useGetCollectionVerificationFee: ({ chainId, skip, network, ...rest }: GetCollectionVerificationFeeOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
