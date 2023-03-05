/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetTopAssetAndEquippableDataForTokenArguments = {
    target: `0x${string}`;
    tokenId: BigNumber;
};
export type GetTopAssetAndEquippableDataForTokenContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getTopAssetAndEquippableDataForToken';
};
export type GetTopAssetAndEquippableDataForTokenOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getTopAssetAndEquippableDataForToken', GetTopAssetAndEquippableDataForTokenContract[]>>[0];
export declare const useGetTopAssetAndEquippableDataForToken: (args: GetTopAssetAndEquippableDataForTokenArguments[], { skip, chainId, network, ...rest }: GetTopAssetAndEquippableDataForTokenOptions) => UseQueryResult<{
    id: BigNumber;
    equippableGroupId: BigNumber;
    priority: number;
    catalogAddress: `0x${string}`;
    metadata: string;
    partIds: readonly BigNumber[];
}[], Error>;
