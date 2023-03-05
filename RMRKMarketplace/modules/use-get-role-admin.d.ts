/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type GetRoleAdminArguments = {
    role: `0x${string}`;
};
export type GetRoleAdminContract = {
    abi: typeof RMRKMarketplace;
    contractAddress: `0x${string}`;
    functionName: 'getRoleAdmin';
};
export type GetRoleAdminOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKMarketplace, 'getRoleAdmin', GetRoleAdminContract[]>>[0];
export declare const useGetRoleAdmin: (args: GetRoleAdminArguments[], { skip, chainId, network, ...rest }: GetRoleAdminOptions) => UseQueryResult<`0x${string}`[], Error>;
