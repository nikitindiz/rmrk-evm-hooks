/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type CancelAuctionArguments = {
    _listingId: BigNumber;
};
export type UseRMRKMarketplaceCancelAuctionReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type CancelAuctionOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'cancelAuction', 0>>[0];
export declare const useCancelAuction: ({ _listingId }: CancelAuctionArguments, { chainId, network, signer, ...rest }: CancelAuctionOptions) => UseRMRKMarketplaceCancelAuctionReturnValue;
