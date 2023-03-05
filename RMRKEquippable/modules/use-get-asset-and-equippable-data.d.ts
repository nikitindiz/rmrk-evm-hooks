/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type GetAssetAndEquippableDataArguments = {
    tokenId: BigNumber;
    assetId: BigNumber;
};
export type GetAssetAndEquippableDataContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'getAssetAndEquippableData';
};
export type GetAssetAndEquippableDataOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'getAssetAndEquippableData', GetAssetAndEquippableDataContract[]>>[0];
export declare const useGetAssetAndEquippableData: (args: GetAssetAndEquippableDataArguments[], { skip, chainId, contractAddress, ...rest }: GetAssetAndEquippableDataOptions) => UseQueryResult<(readonly [string, BigNumber, `0x${string}`, readonly BigNumber[]] & {})[], Error>;
