/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type CollectionVerificationFeeOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKRegistry, 'collectionVerificationFee'>>;
export declare const useCollectionVerificationFee: ({ chainId, skip, network, ...rest }: CollectionVerificationFeeOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
