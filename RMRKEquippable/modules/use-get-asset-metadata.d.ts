/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type GetAssetMetadataArguments = {
    tokenId: BigNumber;
    assetId: BigNumber;
};
export type GetAssetMetadataContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'getAssetMetadata';
};
export type GetAssetMetadataOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'getAssetMetadata', GetAssetMetadataContract[]>>[0];
export declare const useGetAssetMetadata: (args: GetAssetMetadataArguments[], { skip, chainId, contractAddress, ...rest }: GetAssetMetadataOptions) => UseQueryResult<string[], Error>;
