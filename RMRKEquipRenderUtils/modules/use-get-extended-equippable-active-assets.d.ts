/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetExtendedEquippableActiveAssetsArguments = {
    target: `0x${string}`;
    tokenId: BigNumber;
};
export type GetExtendedEquippableActiveAssetsContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getExtendedEquippableActiveAssets';
};
export type GetExtendedEquippableActiveAssetsOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getExtendedEquippableActiveAssets', GetExtendedEquippableActiveAssetsContract[]>>[0];
export declare const useGetExtendedEquippableActiveAssets: (args: GetExtendedEquippableActiveAssetsArguments[], { skip, chainId, network, ...rest }: GetExtendedEquippableActiveAssetsOptions) => UseQueryResult<(readonly {
    id: BigNumber;
    equippableGroupId: BigNumber;
    priority: number;
    catalogAddress: `0x${string}`;
    metadata: string;
    partIds: readonly BigNumber[];
}[])[], Error>;
