/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
import { DecodedWagmiReceiptLog } from '@nikitindiz/abi-to-js';
export type AddAssetEntryArguments = {
    metadataURI: string;
};
export type AddAssetEntryReturnArguments = [BigNumber];
export type UseRMRKEquippableImplAddAssetEntryReturnValue = {
    contract: ReturnType<typeof getContract>;
    decodedLogs: (DecodedWagmiReceiptLog<AddAssetEntryReturnArguments> | null)[];
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type AddAssetEntryOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'addAssetEntry', 0>>[0];
export declare const useAddAssetEntry: ({ metadataURI }: AddAssetEntryArguments, { chainId, contractAddress, signer, ...rest }: AddAssetEntryOptions) => UseRMRKEquippableImplAddAssetEntryReturnValue;
