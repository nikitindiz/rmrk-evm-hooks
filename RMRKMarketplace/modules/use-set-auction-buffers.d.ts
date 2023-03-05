/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type SetAuctionBuffersArguments = {
    _timeBuffer: BigNumber;
    _bidBufferBps: BigNumber;
};
export type UseRMRKMarketplaceSetAuctionBuffersReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type SetAuctionBuffersOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'setAuctionBuffers', 0>>[0];
export declare const useSetAuctionBuffers: ({ _timeBuffer, _bidBufferBps }: SetAuctionBuffersArguments, { chainId, network, signer, ...rest }: SetAuctionBuffersOptions) => UseRMRKMarketplaceSetAuctionBuffersReturnValue;
