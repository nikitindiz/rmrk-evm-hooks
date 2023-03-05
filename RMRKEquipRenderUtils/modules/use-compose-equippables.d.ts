/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type ComposeEquippablesArguments = {
    target: `0x${string}`;
    tokenId: BigNumber;
    assetId: BigNumber;
};
export type ComposeEquippablesContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'composeEquippables';
};
export type ComposeEquippablesOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'composeEquippables', ComposeEquippablesContract[]>>[0];
export declare const useComposeEquippables: (args: ComposeEquippablesArguments[], { skip, chainId, network, ...rest }: ComposeEquippablesOptions) => UseQueryResult<(readonly [string, BigNumber, `0x${string}`, readonly {
    partId: BigNumber;
    z: number;
    metadataURI: string;
}[], readonly {
    partId: BigNumber;
    childAssetId: BigNumber;
    z: number;
    childAddress: `0x${string}`;
    childId: BigNumber;
    childAssetMetadata: string;
    partMetadata: string;
}[]] & {
    metadataURI: string;
    equippableGroupId: BigNumber;
    catalogAddress: `0x${string}`;
    fixedParts: readonly {
        partId: BigNumber;
        z: number;
        metadataURI: string;
    }[];
    slotParts: readonly {
        partId: BigNumber;
        childAssetId: BigNumber;
        z: number;
        childAddress: `0x${string}`;
        childId: BigNumber;
        childAssetMetadata: string;
        partMetadata: string;
    }[];
})[], Error>;
