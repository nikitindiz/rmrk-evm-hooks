/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type IsAssetEquippedArguments = {
    parentAddress: `0x${string}`;
    parentId: BigNumber;
    parentAssetCatalog: `0x${string}`;
    childAddress: `0x${string}`;
    childId: BigNumber;
    childAssetId: BigNumber;
    slotPartId: BigNumber;
};
export type IsAssetEquippedContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'isAssetEquipped';
};
export type IsAssetEquippedOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'isAssetEquipped', IsAssetEquippedContract[]>>[0];
export declare const useIsAssetEquipped: (args: IsAssetEquippedArguments[], { skip, chainId, network, ...rest }: IsAssetEquippedOptions) => UseQueryResult<boolean[], Error>;
