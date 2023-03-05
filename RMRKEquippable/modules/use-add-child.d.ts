/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type AddChildArguments = {
    parentId: BigNumber;
    childId: BigNumber;
    data: `0x${string}`;
};
export type UseRMRKEquippableImplAddChildReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type AddChildOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'addChild', 0>>[0];
export declare const useAddChild: ({ parentId, childId, data }: AddChildArguments, { chainId, contractAddress, signer, ...rest }: AddChildOptions) => UseRMRKEquippableImplAddChildReturnValue;
