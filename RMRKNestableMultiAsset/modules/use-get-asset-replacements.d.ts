/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type GetAssetReplacementsArguments = {
    tokenId: BigNumber;
    newAssetId: BigNumber;
};
export type GetAssetReplacementsContract = {
    abi: typeof RMRKNestableMultiAssetImpl;
    contractAddress: `0x${string}`;
    functionName: 'getAssetReplacements';
};
export type GetAssetReplacementsOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableMultiAssetImpl, 'getAssetReplacements', GetAssetReplacementsContract[]>>[0];
export declare const useGetAssetReplacements: (args: GetAssetReplacementsArguments[], { skip, chainId, contractAddress, ...rest }: GetAssetReplacementsOptions) => UseQueryResult<BigNumber[], Error>;
