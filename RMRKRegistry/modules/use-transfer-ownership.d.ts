/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type TransferOwnershipArguments = {
    newOwner: `0x${string}`;
};
export type UseRMRKRegistryTransferOwnershipReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type TransferOwnershipOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKRegistry, 'transferOwnership', 0>>[0];
export declare const useTransferOwnership: ({ newOwner }: TransferOwnershipArguments, { chainId, network, signer, ...rest }: TransferOwnershipOptions) => UseRMRKRegistryTransferOwnershipReturnValue;
