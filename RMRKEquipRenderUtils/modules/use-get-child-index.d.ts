/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type GetChildIndexArguments = {
    parentAddress: `0x${string}`;
    parentId: BigNumber;
    childAddress: `0x${string}`;
    childId: BigNumber;
};
export type GetChildIndexContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'getChildIndex';
};
export type GetChildIndexOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'getChildIndex', GetChildIndexContract[]>>[0];
export declare const useGetChildIndex: (args: GetChildIndexArguments[], { skip, chainId, network, ...rest }: GetChildIndexOptions) => UseQueryResult<BigNumber[], Error>;
