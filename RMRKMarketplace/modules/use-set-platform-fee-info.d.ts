/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type SetPlatformFeeInfoArguments = {
    _platformFeeRecipient: `0x${string}`;
    _platformFeeBps: BigNumber;
};
export type UseRMRKMarketplaceSetPlatformFeeInfoReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type SetPlatformFeeInfoOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'setPlatformFeeInfo', 0>>[0];
export declare const useSetPlatformFeeInfo: ({ _platformFeeRecipient, _platformFeeBps }: SetPlatformFeeInfoArguments, { chainId, network, signer, ...rest }: SetPlatformFeeInfoOptions) => UseRMRKMarketplaceSetPlatformFeeInfoReturnValue;
