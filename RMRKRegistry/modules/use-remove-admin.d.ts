/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type RemoveAdminArguments = {
    admin: `0x${string}`;
    adminIndex: BigNumber;
};
export type UseRMRKRegistryRemoveAdminReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type RemoveAdminOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKRegistry, 'removeAdmin', 0>>[0];
export declare const useRemoveAdmin: ({ admin, adminIndex }: RemoveAdminArguments, { chainId, network, signer, ...rest }: RemoveAdminOptions) => UseRMRKRegistryRemoveAdminReturnValue;
