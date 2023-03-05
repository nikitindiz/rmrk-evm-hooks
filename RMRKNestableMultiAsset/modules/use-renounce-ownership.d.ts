/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type RenounceOwnershipArguments = {};
export type UseRMRKNestableMultiAssetImplRenounceOwnershipReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type RenounceOwnershipOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableMultiAssetImpl, 'renounceOwnership', 0>>[0];
export declare const useRenounceOwnership: ({ chainId, contractAddress, signer, ...rest }: RenounceOwnershipOptions) => UseRMRKNestableMultiAssetImplRenounceOwnershipReturnValue;
