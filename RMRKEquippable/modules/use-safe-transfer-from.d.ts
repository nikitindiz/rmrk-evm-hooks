/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type SafeTransferFromArguments = {
    from: `0x${string}`;
    to: `0x${string}`;
    tokenId: BigNumber;
};
export type UseRMRKEquippableImplSafeTransferFromReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type SafeTransferFromOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKEquippableImpl, 'safeTransferFrom', 0>>[0];
export declare const useSafeTransferFrom: ({ from, to, tokenId }: SafeTransferFromArguments, { chainId, contractAddress, signer, ...rest }: SafeTransferFromOptions) => UseRMRKEquippableImplSafeTransferFromReturnValue;
