/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type AddFactoryArguments = {
    factory: `0x${string}`;
};
export type UseRMRKRegistryAddFactoryReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type AddFactoryOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKRegistry, 'addFactory', 0>>[0];
export declare const useAddFactory: ({ factory }: AddFactoryArguments, { chainId, network, signer, ...rest }: AddFactoryOptions) => UseRMRKRegistryAddFactoryReturnValue;
