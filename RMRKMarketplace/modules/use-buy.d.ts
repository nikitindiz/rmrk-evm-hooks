/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type BuyArguments = {
    _listingId: BigNumber;
    _buyFor: `0x${string}`;
    _quantityToBuy: BigNumber;
    _paymentCurrency: `0x${string}`;
    _totalPrice: BigNumber;
};
export type UseRMRKMarketplaceBuyReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type BuyOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'buy', 0>>[0];
export declare const useBuy: ({ _listingId, _buyFor, _quantityToBuy, _paymentCurrency, _totalPrice }: BuyArguments, { chainId, network, signer, ...rest }: BuyOptions) => UseRMRKMarketplaceBuyReturnValue;
