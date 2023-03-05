/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type RevokeRoleArguments = {
    role: `0x${string}`;
    account: `0x${string}`;
};
export type UseRMRKMarketplaceRevokeRoleReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type RevokeRoleOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'revokeRole', 0>>[0];
export declare const useRevokeRole: ({ role, account }: RevokeRoleArguments, { chainId, network, signer, ...rest }: RevokeRoleOptions) => UseRMRKMarketplaceRevokeRoleReturnValue;
