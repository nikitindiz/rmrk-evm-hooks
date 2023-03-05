/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetExtendedPendingAssetsArguments = {
    target: `0x${string}`;
    tokenId: BigNumber;
};
export type GetExtendedPendingAssetsContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getExtendedPendingAssets';
};
export type GetExtendedPendingAssetsOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getExtendedPendingAssets', GetExtendedPendingAssetsContract[]>>[0];
export declare const useGetExtendedPendingAssets: (args: GetExtendedPendingAssetsArguments[], { skip, chainId, network, ...rest }: GetExtendedPendingAssetsOptions) => UseQueryResult<(readonly {
    id: BigNumber;
    equippableGroupId: BigNumber;
    acceptRejectIndex: BigNumber;
    replacesAssetWithId: BigNumber;
    catalogAddress: `0x${string}`;
    metadata: string;
    partIds: readonly BigNumber[];
}[])[], Error>;
