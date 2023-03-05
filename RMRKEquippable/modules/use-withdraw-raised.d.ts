/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type WithdrawRaisedArguments = {
    to: `0x${string}`;
    amount: BigNumber;
};
export type UseRMRKEquippableImplWithdrawRaisedReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type WithdrawRaisedOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'withdrawRaised', 0>>[0];
export declare const useWithdrawRaised: ({ to, amount }: WithdrawRaisedArguments, { chainId, contractAddress, signer, ...rest }: WithdrawRaisedOptions) => UseRMRKEquippableImplWithdrawRaisedReturnValue;
