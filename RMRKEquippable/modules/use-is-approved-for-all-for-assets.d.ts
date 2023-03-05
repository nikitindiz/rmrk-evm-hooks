/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type IsApprovedForAllForAssetsArguments = {
    owner: `0x${string}`;
    operator: `0x${string}`;
};
export type IsApprovedForAllForAssetsContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'isApprovedForAllForAssets';
};
export type IsApprovedForAllForAssetsOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'isApprovedForAllForAssets', IsApprovedForAllForAssetsContract[]>>[0];
export declare const useIsApprovedForAllForAssets: (args: IsApprovedForAllForAssetsArguments[], { skip, chainId, contractAddress, ...rest }: IsApprovedForAllForAssetsOptions) => UseQueryResult<boolean[], Error>;
