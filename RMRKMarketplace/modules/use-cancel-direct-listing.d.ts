/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type CancelDirectListingArguments = {
    _listingId: BigNumber;
};
export type UseRMRKMarketplaceCancelDirectListingReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type CancelDirectListingOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'cancelDirectListing', 0>>[0];
export declare const useCancelDirectListing: ({ _listingId }: CancelDirectListingArguments, { chainId, network, signer, ...rest }: CancelDirectListingOptions) => UseRMRKMarketplaceCancelDirectListingReturnValue;
