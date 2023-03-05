/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type GetRoleMemberArguments = {
    role: `0x${string}`;
    index: BigNumber;
};
export type GetRoleMemberContract = {
    abi: typeof RMRKMarketplace;
    contractAddress: `0x${string}`;
    functionName: 'getRoleMember';
};
export type GetRoleMemberOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKMarketplace, 'getRoleMember', GetRoleMemberContract[]>>[0];
export declare const useGetRoleMember: (args: GetRoleMemberArguments[], { skip, chainId, network, ...rest }: GetRoleMemberOptions) => UseQueryResult<`0x${string}`[], Error>;
