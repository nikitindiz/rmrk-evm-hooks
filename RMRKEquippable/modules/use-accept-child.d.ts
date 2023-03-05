/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type AcceptChildArguments = {
    parentId: BigNumber;
    childIndex: BigNumber;
    childAddress: `0x${string}`;
    childId: BigNumber;
};
export type UseRMRKEquippableImplAcceptChildReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type AcceptChildOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'acceptChild', 0>>[0];
export declare const useAcceptChild: ({ parentId, childIndex, childAddress, childId }: AcceptChildArguments, { chainId, contractAddress, signer, ...rest }: AcceptChildOptions) => UseRMRKEquippableImplAcceptChildReturnValue;
