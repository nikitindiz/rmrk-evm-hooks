/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetAssetIdWithTopPriorityArguments = {
    target: `0x${string}`;
    tokenId: BigNumber;
};
export type GetAssetIdWithTopPriorityContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getAssetIdWithTopPriority';
};
export type GetAssetIdWithTopPriorityOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getAssetIdWithTopPriority', GetAssetIdWithTopPriorityContract[]>>[0];
export declare const useGetAssetIdWithTopPriority: (args: GetAssetIdWithTopPriorityArguments[], { skip, chainId, network, ...rest }: GetAssetIdWithTopPriorityOptions) => UseQueryResult<(readonly [BigNumber, number] & {})[], Error>;
