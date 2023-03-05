/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type EquipArguments = {
    data: {
        tokenId: BigNumber;
        childIndex: BigNumber;
        assetId: BigNumber;
        slotPartId: BigNumber;
        childAssetId: BigNumber;
    };
};
export type UseRMRKEquippableImplEquipReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type EquipOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'equip', 0>>[0];
export declare const useEquip: ({ data }: EquipArguments, { chainId, contractAddress, signer, ...rest }: EquipOptions) => UseRMRKEquippableImplEquipReturnValue;
