/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetParentArguments = {
    childAddress: `0x${string}`;
    childId: BigNumber;
};
export type GetParentContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getParent';
};
export type GetParentOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getParent', GetParentContract[]>>[0];
export declare const useGetParent: (args: GetParentArguments[], { skip, chainId, network, ...rest }: GetParentOptions) => UseQueryResult<(readonly [`0x${string}`, BigNumber] & {
    parentAddress: `0x${string}`;
    parentId: BigNumber;
})[], Error>;
