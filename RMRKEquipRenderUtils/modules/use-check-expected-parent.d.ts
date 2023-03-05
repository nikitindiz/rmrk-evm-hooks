/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type CheckExpectedParentArguments = {
    childAddress: `0x${string}`;
    childId: BigNumber;
    expectedParent: `0x${string}`;
    expectedParentId: BigNumber;
};
export type CheckExpectedParentContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: 'checkExpectedParent';
};
export type CheckExpectedParentOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, 'checkExpectedParent', CheckExpectedParentContract[]>>[0];
export declare const useCheckExpectedParent: (args: CheckExpectedParentArguments[], { skip, chainId, network, ...rest }: CheckExpectedParentOptions) => UseQueryResult<void[], Error>;
