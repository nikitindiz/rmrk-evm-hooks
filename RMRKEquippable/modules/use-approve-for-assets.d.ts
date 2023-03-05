/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type ApproveForAssetsArguments = {
    to: `0x${string}`;
    tokenId: BigNumber;
};
export type UseRMRKEquippableImplApproveForAssetsReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type ApproveForAssetsOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'approveForAssets', 0>>[0];
export declare const useApproveForAssets: ({ to, tokenId }: ApproveForAssetsArguments, { chainId, contractAddress, signer, ...rest }: ApproveForAssetsOptions) => UseRMRKEquippableImplApproveForAssetsReturnValue;
