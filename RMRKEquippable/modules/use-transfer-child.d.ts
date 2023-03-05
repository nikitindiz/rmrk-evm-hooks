/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type TransferChildArguments = {
    tokenId: BigNumber;
    to: `0x${string}`;
    destinationId: BigNumber;
    childIndex: BigNumber;
    childAddress: `0x${string}`;
    childId: BigNumber;
    isPending: boolean;
    data: `0x${string}`;
};
export type UseRMRKEquippableImplTransferChildReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type TransferChildOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'transferChild', 0>>[0];
export declare const useTransferChild: ({ tokenId, to, destinationId, childIndex, childAddress, childId, isPending, data, }: TransferChildArguments, { chainId, contractAddress, signer, ...rest }: TransferChildOptions) => UseRMRKEquippableImplTransferChildReturnValue;
