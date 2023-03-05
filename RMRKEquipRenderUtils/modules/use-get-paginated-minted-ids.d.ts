/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetPaginatedMintedIdsArguments = {
    target: `0x${string}`;
    pageStart: BigNumber;
    pageSize: BigNumber;
};
export type GetPaginatedMintedIdsContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getPaginatedMintedIds';
};
export type GetPaginatedMintedIdsOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getPaginatedMintedIds', GetPaginatedMintedIdsContract[]>>[0];
export declare const useGetPaginatedMintedIds: (args: GetPaginatedMintedIdsArguments[], { skip, chainId, network, ...rest }: GetPaginatedMintedIdsOptions) => UseQueryResult<(readonly BigNumber[])[], Error>;
