/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type GrantRoleArguments = {
    role: `0x${string}`;
    account: `0x${string}`;
};
export type UseRMRKMarketplaceGrantRoleReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type GrantRoleOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'grantRole', 0>>[0];
export declare const useGrantRole: ({ role, account }: GrantRoleArguments, { chainId, network, signer, ...rest }: GrantRoleOptions) => UseRMRKMarketplaceGrantRoleReturnValue;
