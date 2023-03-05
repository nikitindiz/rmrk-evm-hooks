/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type AcceptOfferArguments = {
    _listingId: BigNumber;
    _bidder: `0x${string}`;
    _paymentCurrency: `0x${string}`;
    _pricePerToken: BigNumber;
};
export type UseRMRKMarketplaceAcceptOfferReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type AcceptOfferOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'acceptOffer', 0>>[0];
export declare const useAcceptOffer: ({ _listingId, _bidder, _paymentCurrency, _pricePerToken }: AcceptOfferArguments, { chainId, network, signer, ...rest }: AcceptOfferOptions) => UseRMRKMarketplaceAcceptOfferReturnValue;
