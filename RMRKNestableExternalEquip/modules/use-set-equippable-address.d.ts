/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type SetEquippableAddressArguments = {
    equippable: `0x${string}`;
};
export type UseRMRKNestableExternalEquipImplSetEquippableAddressReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type SetEquippableAddressOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableExternalEquipImpl, 'setEquippableAddress', 0>>[0];
export declare const useSetEquippableAddress: ({ equippable }: SetEquippableAddressArguments, { chainId, contractAddress, signer, ...rest }: SetEquippableAddressOptions) => UseRMRKNestableExternalEquipImplSetEquippableAddressReturnValue;
