/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type AddChildArguments = {
    parentId: BigNumber;
    childId: BigNumber;
    data: `0x${string}`;
};
export type UseRMRKNestableMultiAssetImplAddChildReturnValue = {
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
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableMultiAssetImpl, 'addChild', 0>>[0];
export declare const useAddChild: ({ parentId, childId, data }: AddChildArguments, { chainId, contractAddress, signer, ...rest }: AddChildOptions) => UseRMRKNestableMultiAssetImplAddChildReturnValue;
