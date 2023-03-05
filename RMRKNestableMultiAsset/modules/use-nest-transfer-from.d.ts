/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export type NestTransferFromArguments = {
    from: `0x${string}`;
    to: `0x${string}`;
    tokenId: BigNumber;
    destinationId: BigNumber;
    data: `0x${string}`;
};
export type UseRMRKNestableMultiAssetImplNestTransferFromReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type NestTransferFromOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableMultiAssetImpl, 'nestTransferFrom', 0>>[0];
export declare const useNestTransferFrom: ({ from, to, tokenId, destinationId, data }: NestTransferFromArguments, { chainId, contractAddress, signer, ...rest }: NestTransferFromOptions) => UseRMRKNestableMultiAssetImplNestTransferFromReturnValue;
