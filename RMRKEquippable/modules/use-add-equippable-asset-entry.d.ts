/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
import { DecodedWagmiReceiptLog } from '@nikitindiz/abi-to-js';
export type AddEquippableAssetEntryArguments = {
    equippableGroupId: BigNumber;
    catalogAddress: `0x${string}`;
    metadataURI: string;
    partIds: BigNumber[];
};
export type AddEquippableAssetEntryReturnArguments = [BigNumber];
export type UseRMRKEquippableImplAddEquippableAssetEntryReturnValue = {
    contract: ReturnType<typeof getContract>;
    decodedLogs: (DecodedWagmiReceiptLog<AddEquippableAssetEntryReturnArguments> | null)[];
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type AddEquippableAssetEntryOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'addEquippableAssetEntry', 0>>[0];
export declare const useAddEquippableAssetEntry: ({ equippableGroupId, catalogAddress, metadataURI, partIds }: AddEquippableAssetEntryArguments, { chainId, contractAddress, signer, ...rest }: AddEquippableAssetEntryOptions) => UseRMRKEquippableImplAddEquippableAssetEntryReturnValue;
