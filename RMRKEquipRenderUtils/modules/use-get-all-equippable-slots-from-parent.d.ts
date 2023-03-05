/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetAllEquippableSlotsFromParentArguments = {
    targetChild: `0x${string}`;
    childId: BigNumber;
    onlyEquipped: boolean;
};
export type GetAllEquippableSlotsFromParentContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getAllEquippableSlotsFromParent';
};
export type GetAllEquippableSlotsFromParentOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getAllEquippableSlotsFromParent', GetAllEquippableSlotsFromParentContract[]>>[0];
export declare const useGetAllEquippableSlotsFromParent: (args: GetAllEquippableSlotsFromParentArguments[], { skip, chainId, network, ...rest }: GetAllEquippableSlotsFromParentOptions) => UseQueryResult<(readonly [BigNumber, readonly {
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
