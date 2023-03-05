/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type AcceptedCurrenciesArguments = [BigNumber];
export type AcceptedCurrenciesContract = {
    abi: typeof RMRKRegistry;
    contractAddress: `0x${string}`;
    functionName: 'acceptedCurrencies';
};
export type AcceptedCurrenciesOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKRegistry, 'acceptedCurrencies', AcceptedCurrenciesContract[]>>[0];
export declare const useAcceptedCurrencies: (args: AcceptedCurrenciesArguments[], { skip, chainId, network, ...rest }: AcceptedCurrenciesOptions) => UseQueryResult<`0x${string}`[], Error>;
