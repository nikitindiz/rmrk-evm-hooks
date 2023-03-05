/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type FactoriesArguments = [`0x${string}`];
export type FactoriesContract = {
    abi: typeof RMRKRegistry;
    contractAddress: `0x${string}`;
    functionName: 'factories';
};
export type FactoriesOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKRegistry, 'factories', FactoriesContract[]>>[0];
export declare const useFactories: (args: FactoriesArguments[], { skip, chainId, network, ...rest }: FactoriesOptions) => UseQueryResult<boolean[], Error>;
