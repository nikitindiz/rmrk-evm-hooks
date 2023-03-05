/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type RejectAssetArguments = {
    tokenId: BigNumber;
    index: BigNumber;
    assetId: BigNumber;
};
export type UseRMRKEquippableImplRejectAssetReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type RejectAssetOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'rejectAsset', 0>>[0];
export declare const useRejectAsset: ({ tokenId, index, assetId }: RejectAssetArguments, { chainId, contractAddress, signer, ...rest }: RejectAssetOptions) => UseRMRKEquippableImplRejectAssetReturnValue;
