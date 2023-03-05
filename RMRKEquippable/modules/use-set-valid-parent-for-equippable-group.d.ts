/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type SetValidParentForEquippableGroupArguments = {
    equippableGroupId: BigNumber;
    parentAddress: `0x${string}`;
    partId: BigNumber;
};
export type UseRMRKEquippableImplSetValidParentForEquippableGroupReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type SetValidParentForEquippableGroupOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'setValidParentForEquippableGroup', 0>>[0];
export declare const useSetValidParentForEquippableGroup: ({ equippableGroupId, parentAddress, partId }: SetValidParentForEquippableGroupArguments, { chainId, contractAddress, signer, ...rest }: SetValidParentForEquippableGroupOptions) => UseRMRKEquippableImplSetValidParentForEquippableGroupReturnValue;
