/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type AdminListArguments = [BigNumber];
export type AdminListContract = {
    abi: typeof RMRKRegistry;
    contractAddress: `0x${string}`;
    functionName: 'adminList';
};
export type AdminListOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKRegistry, 'adminList', AdminListContract[]>>[0];
export declare const useAdminList: (args: AdminListArguments[], { skip, chainId, network, ...rest }: AdminListOptions) => UseQueryResult<`0x${string}`[], Error>;
