/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type UpdateRoyaltyRecipientArguments = {
    newRoyaltyRecipient: `0x${string}`;
};
export type UseRMRKNestableExternalEquipImplUpdateRoyaltyRecipientReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type UpdateRoyaltyRecipientOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableExternalEquipImpl, 'updateRoyaltyRecipient', 0>>[0];
export declare const useUpdateRoyaltyRecipient: ({ newRoyaltyRecipient }: UpdateRoyaltyRecipientArguments, { chainId, contractAddress, signer, ...rest }: UpdateRoyaltyRecipientOptions) => UseRMRKNestableExternalEquipImplUpdateRoyaltyRecipientReturnValue;
