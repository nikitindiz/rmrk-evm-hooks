/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { MetaFactoryAbi } from '../abi/MetaFactoryAbi';
import { DecodedWagmiReceiptLog } from '@nikitindiz/abi-to-js';
export type OnERC721ReceivedArguments = [`0x${string}`, `0x${string}`, BigNumber, `0x${string}`];
export type OnERC721ReceivedReturnArguments = [`0x${string}`];
export type UseMetaFactoryAbiOnERC721ReceivedReturnValue = {
    contract: ReturnType<typeof getContract>;
    decodedLogs: (DecodedWagmiReceiptLog<OnERC721ReceivedReturnArguments> | null)[];
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type OnERC721ReceivedOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof MetaFactoryAbi, 'onERC721Received', 0>>[0];
export declare const useOnERC721Received: (args: OnERC721ReceivedArguments, { chainId, network, signer, ...rest }: OnERC721ReceivedOptions) => UseMetaFactoryAbiOnERC721ReceivedReturnValue;
