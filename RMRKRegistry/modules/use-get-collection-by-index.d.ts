/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type GetCollectionByIndexArguments = {
    _index: BigNumber;
};
export type GetCollectionByIndexContract = {
    abi: typeof RMRKRegistry;
    contractAddress: `0x${string}`;
    functionName: 'getCollectionByIndex';
};
export type GetCollectionByIndexOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKRegistry, 'getCollectionByIndex', GetCollectionByIndexContract[]>>[0];
export declare const useGetCollectionByIndex: (args: GetCollectionByIndexArguments[], { skip, chainId, network, ...rest }: GetCollectionByIndexOptions) => UseQueryResult<{
    collection: `0x${string}`;
    verificationSponsor: `0x${string}`;
    verificationFeeBalance: BigNumber;
    collectionType: number;
    visible: boolean;
    verified: boolean;
}[], Error>;
