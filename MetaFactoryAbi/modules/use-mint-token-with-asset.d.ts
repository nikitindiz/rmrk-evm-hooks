/** WARNING! This file is auto-generated. Please do not edit! */
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { MetaFactoryAbi } from '../abi/MetaFactoryAbi';
export type MintTokenWithAssetArguments = {
    collection: `0x${string}`;
    asset: string;
    to: `0x${string}`;
};
export type UseMetaFactoryAbiMintTokenWithAssetReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type MintTokenWithAssetOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof MetaFactoryAbi, 'mintTokenWithAsset', 0>>[0];
export declare const useMintTokenWithAsset: ({ collection, asset, to }: MintTokenWithAssetArguments, { chainId, network, signer, ...rest }: MintTokenWithAssetOptions) => UseMetaFactoryAbiMintTokenWithAssetReturnValue;
