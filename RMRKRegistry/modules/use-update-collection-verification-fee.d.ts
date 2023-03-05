/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type UpdateCollectionVerificationFeeArguments = {
    _collectionVerificationFee: BigNumber;
};
export type UseRMRKRegistryUpdateCollectionVerificationFeeReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type UpdateCollectionVerificationFeeOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKRegistry, 'updateCollectionVerificationFee', 0>>[0];
export declare const useUpdateCollectionVerificationFee: ({ _collectionVerificationFee }: UpdateCollectionVerificationFeeArguments, { chainId, network, signer, ...rest }: UpdateCollectionVerificationFeeOptions) => UseRMRKRegistryUpdateCollectionVerificationFeeReturnValue;
