/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type ApproveArguments = {
    to: `0x${string}`;
    tokenId: BigNumber;
};
export type UseRMRKEquippableImplApproveReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type ApproveOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'approve', 0>>[0];
export declare const useApprove: ({ to, tokenId }: ApproveArguments, { chainId, contractAddress, signer, ...rest }: ApproveOptions) => UseRMRKEquippableImplApproveReturnValue;
