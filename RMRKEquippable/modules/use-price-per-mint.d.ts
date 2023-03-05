/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type PricePerMintOptions = {
    chainId?: number;
    skip?: boolean;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractRead<typeof RMRKEquippableImpl, 'pricePerMint'>>;
export declare const usePricePerMint: ({ chainId, contractAddress, skip, ...rest }: PricePerMintOptions) => UseQueryResult<import("ethers").BigNumber, Error>;
