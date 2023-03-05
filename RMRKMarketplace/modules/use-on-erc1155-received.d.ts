/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
import { DecodedWagmiReceiptLog } from '@nikitindiz/abi-to-js';
export type OnERC1155ReceivedArguments = [
    `0x${string}`,
    `0x${string}`,
    BigNumber,
    BigNumber,
    `0x${string}`
];
export type OnERC1155ReceivedReturnArguments = [`0x${string}`];
export type UseRMRKMarketplaceOnERC1155ReceivedReturnValue = {
    contract: ReturnType<typeof getContract>;
    decodedLogs: (DecodedWagmiReceiptLog<OnERC1155ReceivedReturnArguments> | null)[];
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type OnERC1155ReceivedOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKMarketplace, 'onERC1155Received', 0>>[0];
export declare const useOnERC1155Received: (args: OnERC1155ReceivedArguments, { chainId, network, signer, ...rest }: OnERC1155ReceivedOptions) => UseRMRKMarketplaceOnERC1155ReceivedReturnValue;
