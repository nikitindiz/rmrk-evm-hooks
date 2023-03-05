/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type AdminsArguments = [`0x${string}`];
export type AdminsContract = {
    abi: typeof RMRKRegistry;
    contractAddress: `0x${string}`;
    functionName: 'admins';
};
export type AdminsOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKRegistry, 'admins', AdminsContract[]>>[0];
export declare const useAdmins: (args: AdminsArguments[], { skip, chainId, network, ...rest }: AdminsOptions) => UseQueryResult<boolean[], Error>;
