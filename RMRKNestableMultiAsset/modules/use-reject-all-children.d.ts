/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type RejectAllChildrenArguments = {
    tokenId: BigNumber;
    maxRejections: BigNumber;
};
export type UseRMRKNestableMultiAssetImplRejectAllChildrenReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type RejectAllChildrenOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableMultiAssetImpl, 'rejectAllChildren', 0>>[0];
export declare const useRejectAllChildren: ({ tokenId, maxRejections }: RejectAllChildrenArguments, { chainId, contractAddress, signer, ...rest }: RejectAllChildrenOptions) => UseRMRKNestableMultiAssetImplRejectAllChildrenReturnValue;
