/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type SupportsInterfaceArguments = {
    interfaceId: `0x${string}`;
};
export type SupportsInterfaceContract = {
    abi: typeof RMRKNestableExternalEquipImpl;
    contractAddress: `0x${string}`;
    functionName: 'supportsInterface';
};
export type SupportsInterfaceOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableExternalEquipImpl, 'supportsInterface', SupportsInterfaceContract[]>>[0];
export declare const useSupportsInterface: (args: SupportsInterfaceArguments[], { skip, chainId, contractAddress, ...rest }: SupportsInterfaceOptions) => UseQueryResult<boolean[], Error>;
