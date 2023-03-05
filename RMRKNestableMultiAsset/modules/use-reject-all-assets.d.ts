/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type RejectAllAssetsArguments = {
    tokenId: BigNumber;
    maxRejections: BigNumber;
};
export type UseRMRKNestableMultiAssetImplRejectAllAssetsReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type RejectAllAssetsOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableMultiAssetImpl, 'rejectAllAssets', 0>>[0];
export declare const useRejectAllAssets: ({ tokenId, maxRejections }: RejectAllAssetsArguments, { chainId, contractAddress, signer, ...rest }: RejectAllAssetsOptions) => UseRMRKNestableMultiAssetImplRejectAllAssetsReturnValue;
