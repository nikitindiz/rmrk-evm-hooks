/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetTopAssetMetaForTokenArguments = {
    target: `0x${string}`;
    tokenId: BigNumber;
};
export type GetTopAssetMetaForTokenContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getTopAssetMetaForToken';
};
export type GetTopAssetMetaForTokenOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getTopAssetMetaForToken', GetTopAssetMetaForTokenContract[]>>[0];
export declare const useGetTopAssetMetaForToken: (args: GetTopAssetMetaForTokenArguments[], { skip, chainId, network, ...rest }: GetTopAssetMetaForTokenOptions) => UseQueryResult<string[], Error>;
