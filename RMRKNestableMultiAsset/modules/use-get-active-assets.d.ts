/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type GetActiveAssetsArguments = {
    tokenId: BigNumber;
};
export type GetActiveAssetsContract = {
    abi: typeof RMRKNestableMultiAssetImpl;
    contractAddress: `0x${string}`;
    functionName: 'getActiveAssets';
};
export type GetActiveAssetsOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableMultiAssetImpl, 'getActiveAssets', GetActiveAssetsContract[]>>[0];
export declare const useGetActiveAssets: (args: GetActiveAssetsArguments[], { skip, chainId, contractAddress, ...rest }: GetActiveAssetsOptions) => UseQueryResult<(readonly BigNumber[])[], Error>;
