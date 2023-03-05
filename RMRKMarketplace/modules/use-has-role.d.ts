/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type HasRoleArguments = {
    role: `0x${string}`;
    account: `0x${string}`;
};
export type HasRoleContract = {
    abi: typeof RMRKMarketplace;
    contractAddress: `0x${string}`;
    functionName: 'hasRole';
};
export type HasRoleOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKMarketplace, 'hasRole', HasRoleContract[]>>[0];
export declare const useHasRole: (args: HasRoleArguments[], { skip, chainId, network, ...rest }: HasRoleOptions) => UseQueryResult<boolean[], Error>;
