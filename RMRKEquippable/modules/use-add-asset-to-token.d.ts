/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type AddAssetToTokenArguments = {
    tokenId: BigNumber;
    assetId: BigNumber;
    replacesAssetWithId: BigNumber;
};
export type UseRMRKEquippableImplAddAssetToTokenReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type AddAssetToTokenOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'addAssetToToken', 0>>[0];
export declare const useAddAssetToToken: ({ tokenId, assetId, replacesAssetWithId }: AddAssetToTokenArguments, { chainId, contractAddress, signer, ...rest }: AddAssetToTokenOptions) => UseRMRKEquippableImplAddAssetToTokenReturnValue;
