/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type UnequipArguments = {
    tokenId: BigNumber;
    assetId: BigNumber;
    slotPartId: BigNumber;
};
export type UseRMRKEquippableImplUnequipReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type UnequipOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'unequip', 0>>[0];
export declare const useUnequip: ({ tokenId, assetId, slotPartId }: UnequipArguments, { chainId, contractAddress, signer, ...rest }: UnequipOptions) => UseRMRKEquippableImplUnequipReturnValue;
