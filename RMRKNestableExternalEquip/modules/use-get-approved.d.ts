/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type GetApprovedArguments = {
    tokenId: BigNumber;
};
export type GetApprovedContract = {
    abi: typeof RMRKNestableExternalEquipImpl;
    contractAddress: `0x${string}`;
    functionName: 'getApproved';
};
export type GetApprovedOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableExternalEquipImpl, 'getApproved', GetApprovedContract[]>>[0];
export declare const useGetApproved: (args: GetApprovedArguments[], { skip, chainId, contractAddress, ...rest }: GetApprovedOptions) => UseQueryResult<`0x${string}`[], Error>;
