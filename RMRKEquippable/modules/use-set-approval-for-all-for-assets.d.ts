/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type SetApprovalForAllForAssetsArguments = {
    operator: `0x${string}`;
    approved: boolean;
};
export type UseRMRKEquippableImplSetApprovalForAllForAssetsReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type SetApprovalForAllForAssetsOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'setApprovalForAllForAssets', 0>>[0];
export declare const useSetApprovalForAllForAssets: ({ operator, approved }: SetApprovalForAllForAssetsArguments, { chainId, contractAddress, signer, ...rest }: SetApprovalForAllForAssetsOptions) => UseRMRKEquippableImplSetApprovalForAllForAssetsReturnValue;
