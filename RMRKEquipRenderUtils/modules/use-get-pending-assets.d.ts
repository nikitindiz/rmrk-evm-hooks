/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetPendingAssetsArguments = {
    target: `0x${string}`;
    tokenId: BigNumber;
};
export type GetPendingAssetsContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getPendingAssets';
};
export type GetPendingAssetsOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getPendingAssets', GetPendingAssetsContract[]>>[0];
export declare const useGetPendingAssets: (args: GetPendingAssetsArguments[], { skip, chainId, network, ...rest }: GetPendingAssetsOptions) => UseQueryResult<(readonly {
    id: BigNumber;
    acceptRejectIndex: BigNumber;
    replacesAssetWithId: BigNumber;
    metadata: string;
}[])[], Error>;
