/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type GetRoleMemberCountArguments = {
    role: `0x${string}`;
};
export type GetRoleMemberCountContract = {
    abi: typeof RMRKMarketplace;
    contractAddress: `0x${string}`;
    functionName: 'getRoleMemberCount';
};
export type GetRoleMemberCountOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKMarketplace, 'getRoleMemberCount', GetRoleMemberCountContract[]>>[0];
export declare const useGetRoleMemberCount: (args: GetRoleMemberCountArguments[], { skip, chainId, network, ...rest }: GetRoleMemberCountOptions) => UseQueryResult<import("ethers").BigNumber[], Error>;
