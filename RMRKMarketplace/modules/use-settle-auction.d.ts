/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type SettleAuctionArguments = {
    _listingId: BigNumber;
};
export type UseRMRKMarketplaceSettleAuctionReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type SettleAuctionOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'settleAuction', 0>>[0];
export declare const useSettleAuction: ({ _listingId }: SettleAuctionArguments, { chainId, network, signer, ...rest }: SettleAuctionOptions) => UseRMRKMarketplaceSettleAuctionReturnValue;
