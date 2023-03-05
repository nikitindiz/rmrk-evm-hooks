/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type RemoveAcceptedCurrencyArguments = {
    currencyIndex: BigNumber;
};
export type UseRMRKRegistryRemoveAcceptedCurrencyReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type RemoveAcceptedCurrencyOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKRegistry, 'removeAcceptedCurrency', 0>>[0];
export declare const useRemoveAcceptedCurrency: ({ currencyIndex }: RemoveAcceptedCurrencyArguments, { chainId, network, signer, ...rest }: RemoveAcceptedCurrencyOptions) => UseRMRKRegistryRemoveAcceptedCurrencyReturnValue;
