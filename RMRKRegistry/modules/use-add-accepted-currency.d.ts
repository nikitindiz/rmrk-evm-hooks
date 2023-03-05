/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type AddAcceptedCurrencyArguments = {
    currency: `0x${string}`;
};
export type UseRMRKRegistryAddAcceptedCurrencyReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type AddAcceptedCurrencyOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKRegistry, 'addAcceptedCurrency', 0>>[0];
export declare const useAddAcceptedCurrency: ({ currency }: AddAcceptedCurrencyArguments, { chainId, network, signer, ...rest }: AddAcceptedCurrencyOptions) => UseRMRKRegistryAddAcceptedCurrencyReturnValue;
