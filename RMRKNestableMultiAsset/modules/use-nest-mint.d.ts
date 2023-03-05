/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type NestMintArguments = {
    to: `0x${string}`;
    numToMint: BigNumber;
    destinationId: BigNumber;
};
export type UseRMRKNestableMultiAssetImplNestMintReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type NestMintOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableMultiAssetImpl, 'nestMint', 0>>[0];
export declare const useNestMint: ({ to, numToMint, destinationId }: NestMintArguments, { chainId, contractAddress, signer, ...rest }: NestMintOptions) => UseRMRKNestableMultiAssetImplNestMintReturnValue;
