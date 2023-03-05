/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type IsContributorArguments = {
    contributor: `0x${string}`;
};
export type IsContributorContract = {
    abi: typeof RMRKNestableExternalEquipImpl;
    contractAddress: `0x${string}`;
    functionName: 'isContributor';
};
export type IsContributorOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableExternalEquipImpl, 'isContributor', IsContributorContract[]>>[0];
export declare const useIsContributor: (args: IsContributorArguments[], { skip, chainId, contractAddress, ...rest }: IsContributorOptions) => UseQueryResult<boolean[], Error>;
