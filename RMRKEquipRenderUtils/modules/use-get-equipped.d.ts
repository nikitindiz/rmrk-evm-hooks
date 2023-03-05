/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetEquippedArguments = {
    target: `0x${string}`;
    tokenId: BigNumber;
    assetId: BigNumber;
};
export type GetEquippedContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getEquipped';
};
export type GetEquippedOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getEquipped', GetEquippedContract[]>>[0];
export declare const useGetEquipped: (args: GetEquippedArguments[], { skip, chainId, network, ...rest }: GetEquippedOptions) => UseQueryResult<(readonly [readonly BigNumber[], readonly {
    assetId: BigNumber;
    childAssetId: BigNumber;
    childId: BigNumber;
    childEquippableAddress: `0x${string}`;
}[], readonly string[]] & {
    slotPartIds: readonly BigNumber[];
    childrenEquipped: readonly {
        assetId: BigNumber;
        childAssetId: BigNumber;
        childId: BigNumber;
        childEquippableAddress: `0x${string}`;
    }[];
    childrenAssetMetadata: readonly string[];
})[], Error>;
