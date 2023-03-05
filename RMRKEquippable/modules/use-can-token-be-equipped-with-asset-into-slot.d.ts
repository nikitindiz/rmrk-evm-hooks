/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type CanTokenBeEquippedWithAssetIntoSlotArguments = {
    parent: `0x${string}`;
    tokenId: BigNumber;
    assetId: BigNumber;
    slotId: BigNumber;
};
export type CanTokenBeEquippedWithAssetIntoSlotContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'canTokenBeEquippedWithAssetIntoSlot';
};
export type CanTokenBeEquippedWithAssetIntoSlotOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'canTokenBeEquippedWithAssetIntoSlot', CanTokenBeEquippedWithAssetIntoSlotContract[]>>[0];
export declare const useCanTokenBeEquippedWithAssetIntoSlot: (args: CanTokenBeEquippedWithAssetIntoSlotArguments[], { skip, chainId, contractAddress, ...rest }: CanTokenBeEquippedWithAssetIntoSlotOptions) => UseQueryResult<boolean[], Error>;
