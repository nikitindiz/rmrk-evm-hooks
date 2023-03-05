/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type AddCollectionArguments = {
    _collection: `0x${string}`;
    _deployer: `0x${string}`;
    _maxSupply: BigNumber;
    collectionType: number;
};
export type UseRMRKRegistryAddCollectionReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type AddCollectionOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKRegistry, 'addCollection', 0>>[0];
export declare const useAddCollection: ({ _collection, _deployer, _maxSupply, collectionType }: AddCollectionArguments, { chainId, network, signer, ...rest }: AddCollectionOptions) => UseRMRKRegistryAddCollectionReturnValue;
