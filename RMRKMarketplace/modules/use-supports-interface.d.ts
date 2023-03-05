/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type SupportsInterfaceArguments = {
    interfaceId: `0x${string}`;
};
export type SupportsInterfaceContract = {
    abi: typeof RMRKMarketplace;
    contractAddress: `0x${string}`;
    functionName: 'supportsInterface';
};
export type SupportsInterfaceOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKMarketplace, 'supportsInterface', SupportsInterfaceContract[]>>[0];
export declare const useSupportsInterface: (args: SupportsInterfaceArguments[], { skip, chainId, network, ...rest }: SupportsInterfaceOptions) => UseQueryResult<boolean[], Error>;
