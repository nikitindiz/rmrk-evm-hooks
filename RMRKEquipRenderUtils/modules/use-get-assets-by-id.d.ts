/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetAssetsByIdArguments = {
    target: `0x${string}`;
    tokenId: BigNumber;
    assetIds: BigNumber[];
};
export type GetAssetsByIdContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getAssetsById';
};
export type GetAssetsByIdOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getAssetsById', GetAssetsByIdContract[]>>[0];
export declare const useGetAssetsById: (args: GetAssetsByIdArguments[], { skip, chainId, network, ...rest }: GetAssetsByIdOptions) => UseQueryResult<(readonly string[])[], Error>;
