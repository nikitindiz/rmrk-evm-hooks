/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type RemoveFactoryArguments = {
    factory: `0x${string}`;
    factoryIndex: BigNumber;
};
export type UseRMRKRegistryRemoveFactoryReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type RemoveFactoryOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKRegistry, 'removeFactory', 0>>[0];
export declare const useRemoveFactory: ({ factory, factoryIndex }: RemoveFactoryArguments, { chainId, network, signer, ...rest }: RemoveFactoryOptions) => UseRMRKRegistryRemoveFactoryReturnValue;
