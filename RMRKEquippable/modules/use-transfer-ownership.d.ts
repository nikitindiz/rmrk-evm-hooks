/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type TransferOwnershipArguments = {
    newOwner: `0x${string}`;
};
export type UseRMRKEquippableImplTransferOwnershipReturnValue = {
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
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'transferOwnership', 0>>[0];
export declare const useTransferOwnership: ({ newOwner }: TransferOwnershipArguments, { chainId, contractAddress, signer, ...rest }: TransferOwnershipOptions) => UseRMRKEquippableImplTransferOwnershipReturnValue;
