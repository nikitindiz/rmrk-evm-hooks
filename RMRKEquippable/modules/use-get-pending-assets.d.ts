/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type GetPendingAssetsArguments = {
    tokenId: BigNumber;
};
export type GetPendingAssetsContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'getPendingAssets';
};
export type GetPendingAssetsOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'getPendingAssets', GetPendingAssetsContract[]>>[0];
export declare const useGetPendingAssets: (args: GetPendingAssetsArguments[], { skip, chainId, contractAddress, ...rest }: GetPendingAssetsOptions) => UseQueryResult<(readonly BigNumber[])[], Error>;
