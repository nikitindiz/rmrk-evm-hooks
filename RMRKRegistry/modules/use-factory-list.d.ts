/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type FactoryListArguments = [BigNumber];
export type FactoryListContract = {
    abi: typeof RMRKRegistry;
    contractAddress: `0x${string}`;
    functionName: 'factoryList';
};
export type FactoryListOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKRegistry, 'factoryList', FactoryListContract[]>>[0];
export declare const useFactoryList: (args: FactoryListArguments[], { skip, chainId, network, ...rest }: FactoryListOptions) => UseQueryResult<`0x${string}`[], Error>;
