/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type AddAdminArguments = {
    newAdmin: `0x${string}`;
};
export type UseRMRKRegistryAddAdminReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type AddAdminOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKRegistry, 'addAdmin', 0>>[0];
export declare const useAddAdmin: ({ newAdmin }: AddAdminArguments, { chainId, network, signer, ...rest }: AddAdminOptions) => UseRMRKRegistryAddAdminReturnValue;
