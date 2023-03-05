/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type TransferFromArguments = {
    from: `0x${string}`;
    to: `0x${string}`;
    tokenId: BigNumber;
};
export type UseRMRKNestableExternalEquipImplTransferFromReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type TransferFromOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableExternalEquipImpl, 'transferFrom', 0>>[0];
export declare const useTransferFrom: ({ from, to, tokenId }: TransferFromArguments, { chainId, contractAddress, signer, ...rest }: TransferFromOptions) => UseRMRKNestableExternalEquipImplTransferFromReturnValue;
