/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetExtendedActiveAssetsArguments = {
    target: `0x${string}`;
    tokenId: BigNumber;
};
export type GetExtendedActiveAssetsContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getExtendedActiveAssets';
};
export type GetExtendedActiveAssetsOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getExtendedActiveAssets', GetExtendedActiveAssetsContract[]>>[0];
export declare const useGetExtendedActiveAssets: (args: GetExtendedActiveAssetsArguments[], { skip, chainId, network, ...rest }: GetExtendedActiveAssetsOptions) => UseQueryResult<(readonly {
    id: BigNumber;
    priority: number;
    metadata: string;
}[])[], Error>;
