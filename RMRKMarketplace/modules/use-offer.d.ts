/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type OfferArguments = {
    _listingId: BigNumber;
    _quantityWanted: BigNumber;
    _paymentCurrency: `0x${string}`;
    _pricePerToken: BigNumber;
    _expirationTimestamp: BigNumber;
};
export type UseRMRKMarketplaceOfferReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type OfferOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'offer', 0>>[0];
export declare const useOffer: ({ _listingId, _quantityWanted, _paymentCurrency, _pricePerToken, _expirationTimestamp, }: OfferArguments, { chainId, network, signer, ...rest }: OfferOptions) => UseRMRKMarketplaceOfferReturnValue;
