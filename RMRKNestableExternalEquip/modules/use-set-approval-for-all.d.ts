/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type SetApprovalForAllArguments = {
    operator: `0x${string}`;
    approved: boolean;
};
export type UseRMRKNestableExternalEquipImplSetApprovalForAllReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type SetApprovalForAllOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableExternalEquipImpl, 'setApprovalForAll', 0>>[0];
export declare const useSetApprovalForAll: ({ operator, approved }: SetApprovalForAllArguments, { chainId, contractAddress, signer, ...rest }: SetApprovalForAllOptions) => UseRMRKNestableExternalEquipImplSetApprovalForAllReturnValue;
