/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type RejectAllChildrenArguments = {
    tokenId: BigNumber;
    maxRejections: BigNumber;
};
export type UseRMRKNestableExternalEquipImplRejectAllChildrenReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type RejectAllChildrenOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableExternalEquipImpl, 'rejectAllChildren', 0>>[0];
export declare const useRejectAllChildren: ({ tokenId, maxRejections }: RejectAllChildrenArguments, { chainId, contractAddress, signer, ...rest }: RejectAllChildrenOptions) => UseRMRKNestableExternalEquipImplRejectAllChildrenReturnValue;
