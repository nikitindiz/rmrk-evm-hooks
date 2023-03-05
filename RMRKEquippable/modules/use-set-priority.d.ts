/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type SetPriorityArguments = {
    tokenId: BigNumber;
    priorities: number[];
};
export type UseRMRKEquippableImplSetPriorityReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type SetPriorityOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'setPriority', 0>>[0];
export declare const useSetPriority: ({ tokenId, priorities }: SetPriorityArguments, { chainId, contractAddress, signer, ...rest }: SetPriorityOptions) => UseRMRKEquippableImplSetPriorityReturnValue;
