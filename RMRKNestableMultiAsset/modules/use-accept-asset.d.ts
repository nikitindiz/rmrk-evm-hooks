/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type AcceptAssetArguments = {
    tokenId: BigNumber;
    index: BigNumber;
    assetId: BigNumber;
};
export type UseRMRKNestableMultiAssetImplAcceptAssetReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type AcceptAssetOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableMultiAssetImpl, 'acceptAsset', 0>>[0];
export declare const useAcceptAsset: ({ tokenId, index, assetId }: AcceptAssetArguments, { chainId, contractAddress, signer, ...rest }: AcceptAssetOptions) => UseRMRKNestableMultiAssetImplAcceptAssetReturnValue;
