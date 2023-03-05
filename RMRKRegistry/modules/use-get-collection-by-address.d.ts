/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type GetCollectionByAddressArguments = {
    _collection: `0x${string}`;
};
export type GetCollectionByAddressContract = {
    abi: typeof RMRKRegistry;
    contractAddress: `0x${string}`;
    functionName: 'getCollectionByAddress';
};
export type GetCollectionByAddressOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKRegistry, 'getCollectionByAddress', GetCollectionByAddressContract[]>>[0];
export declare const useGetCollectionByAddress: (args: GetCollectionByAddressArguments[], { skip, chainId, network, ...rest }: GetCollectionByAddressOptions) => UseQueryResult<{
    collection: `0x${string}`;
    verificationSponsor: `0x${string}`;
    verificationFeeBalance: import("ethers").BigNumber;
    collectionType: number;
    visible: boolean;
    verified: boolean;
}[], Error>;
