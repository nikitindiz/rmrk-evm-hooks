/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
import { DecodedWagmiReceiptLog } from '@nikitindiz/abi-to-js';
export type OnERC1155BatchReceivedArguments = [
    `0x${string}`,
    `0x${string}`,
    BigNumber[],
    BigNumber[],
    `0x${string}`
];
export type OnERC1155BatchReceivedReturnArguments = [`0x${string}`];
export type UseRMRKMarketplaceOnERC1155BatchReceivedReturnValue = {
    contract: ReturnType<typeof getContract>;
    decodedLogs: (DecodedWagmiReceiptLog<OnERC1155BatchReceivedReturnArguments> | null)[];
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type OnERC1155BatchReceivedOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'onERC1155BatchReceived', 0>>[0];
export declare const useOnERC1155BatchReceived: (args: OnERC1155BatchReceivedArguments, { chainId, network, signer, ...rest }: OnERC1155BatchReceivedOptions) => UseRMRKMarketplaceOnERC1155BatchReceivedReturnValue;
