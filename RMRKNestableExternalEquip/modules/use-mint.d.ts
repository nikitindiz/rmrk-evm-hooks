/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type MintArguments = {
    to: `0x${string}`;
    numToMint: BigNumber;
};
export type UseRMRKNestableExternalEquipImplMintReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type MintOptions = {
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableExternalEquipImpl, 'mint', 0>>[0];
export declare const useMint: ({ to, numToMint }: MintArguments, { chainId, contractAddress, signer, ...rest }: MintOptions) => UseRMRKNestableExternalEquipImplMintReturnValue;
