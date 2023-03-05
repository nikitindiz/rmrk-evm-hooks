/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type ManageContributorArguments = {
    contributor: `0x${string}`;
    grantRole: boolean;
};
export type UseRMRKNestableExternalEquipImplManageContributorReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type ManageContributorOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableExternalEquipImpl, 'manageContributor', 0>>[0];
export declare const useManageContributor: ({ contributor, grantRole }: ManageContributorArguments, { chainId, contractAddress, signer, ...rest }: ManageContributorOptions) => UseRMRKNestableExternalEquipImplManageContributorReturnValue;
