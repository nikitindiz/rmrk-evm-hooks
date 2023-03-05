/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetExtendedNftArguments = {
    tokenId: BigNumber;
    targetCollection: `0x${string}`;
};
export type GetExtendedNftContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getExtendedNft';
};
export type GetExtendedNftOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getExtendedNft', GetExtendedNftContract[]>>[0];
export declare const useGetExtendedNft: (args: GetExtendedNftArguments[], { skip, chainId, network, ...rest }: GetExtendedNftOptions) => UseQueryResult<{
    tokenMetadataUri: string;
    directOwner: `0x${string}`;
    rootOwner: `0x${string}`;
    activeAssetCount: BigNumber;
    pendingAssetCount: BigNumber;
    priorities: readonly number[];
    maxSupply: BigNumber;
    totalSupply: BigNumber;
    issuer: `0x${string}`;
    name: string;
    symbol: string;
    activeChildrenNumber: BigNumber;
    isSoulbound: boolean;
    hasMultiAssetInterface: boolean;
    hasNestingInterface: boolean;
    hasEquippableInterface: boolean;
}[], Error>;
