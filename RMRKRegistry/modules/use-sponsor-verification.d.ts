/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKRegistry } from '../abi/RMRKRegistry';
export type SponsorVerificationArguments = {
    _collection: `0x${string}`;
};
export type UseRMRKRegistrySponsorVerificationReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type SponsorVerificationOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKRegistry, 'sponsorVerification', 0>>[0];
export declare const useSponsorVerification: ({ _collection }: SponsorVerificationArguments, { chainId, network, signer, ...rest }: SponsorVerificationOptions) => UseRMRKRegistrySponsorVerificationReturnValue;
