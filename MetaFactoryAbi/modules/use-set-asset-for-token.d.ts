/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { MetaFactoryAbi } from '../abi/MetaFactoryAbi';
export type SetAssetForTokenArguments = {
    collection: `0x${string}`;
    tokenId: BigNumber;
    asset: string;
};
export type UseMetaFactoryAbiSetAssetForTokenReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type SetAssetForTokenOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof MetaFactoryAbi, 'setAssetForToken', 0>>[0];
export declare const useSetAssetForToken: ({ collection, tokenId, asset }: SetAssetForTokenArguments, { chainId, network, signer, ...rest }: SetAssetForTokenOptions) => UseMetaFactoryAbiSetAssetForTokenReturnValue;
