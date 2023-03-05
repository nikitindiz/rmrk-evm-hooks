/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type ManageContributorArguments = {
    contributor: `0x${string}`;
    grantRole: boolean;
};
export type UseRMRKNestableMultiAssetImplManageContributorReturnValue = {
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
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableMultiAssetImpl, 'manageContributor', 0>>[0];
export declare const useManageContributor: ({ contributor, grantRole }: ManageContributorArguments, { chainId, contractAddress, signer, ...rest }: ManageContributorOptions) => UseRMRKNestableMultiAssetImplManageContributorReturnValue;
