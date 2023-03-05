/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetEquippableSlotsFromParentArguments = {
    targetChild: `0x${string}`;
    childId: BigNumber;
    parentAssetId: BigNumber;
};
export type GetEquippableSlotsFromParentContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getEquippableSlotsFromParent';
};
export type GetEquippableSlotsFromParentOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getEquippableSlotsFromParent', GetEquippableSlotsFromParentContract[]>>[0];
export declare const useGetEquippableSlotsFromParent: (args: GetEquippableSlotsFromParentArguments[], { skip, chainId, network, ...rest }: GetEquippableSlotsFromParentOptions) => UseQueryResult<(readonly [BigNumber, readonly {
    slotPartId: BigNumber;
    childAssetId: BigNumber;
    parentAssetId: BigNumber;
    priority: number;
    parentCatalogAddress: `0x${string}`;
    isEquipped: boolean;
    partMetadata: string;
}[]] & {
    childIndex: BigNumber;
    assetsWithSlots: readonly {
        slotPartId: BigNumber;
        childAssetId: BigNumber;
        parentAssetId: BigNumber;
        priority: number;
        parentCatalogAddress: `0x${string}`;
        isEquipped: boolean;
        partMetadata: string;
    }[];
})[], Error>;
