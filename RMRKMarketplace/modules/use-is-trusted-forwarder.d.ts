/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type IsTrustedForwarderArguments = {
    forwarder: `0x${string}`;
};
export type IsTrustedForwarderContract = {
    abi: typeof RMRKMarketplace;
    contractAddress: `0x${string}`;
    functionName: 'isTrustedForwarder';
};
export type IsTrustedForwarderOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKMarketplace, 'isTrustedForwarder', IsTrustedForwarderContract[]>>[0];
export declare const useIsTrustedForwarder: (args: IsTrustedForwarderArguments[], { skip, chainId, network, ...rest }: IsTrustedForwarderOptions) => UseQueryResult<boolean[], Error>;
