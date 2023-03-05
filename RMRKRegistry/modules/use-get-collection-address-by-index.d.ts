/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type GetCollectionAddressByIndexArguments = {
    _index: BigNumber;
};
export type GetCollectionAddressByIndexContract = {
    abi: typeof RMRKRegistry;
    contractAddress: `0x${string}`;
    functionName: 'getCollectionAddressByIndex';
};
export type GetCollectionAddressByIndexOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKRegistry, 'getCollectionAddressByIndex', GetCollectionAddressByIndexContract[]>>[0];
export declare const useGetCollectionAddressByIndex: (args: GetCollectionAddressByIndexArguments[], { skip, chainId, network, ...rest }: GetCollectionAddressByIndexOptions) => UseQueryResult<`0x${string}`[], Error>;
