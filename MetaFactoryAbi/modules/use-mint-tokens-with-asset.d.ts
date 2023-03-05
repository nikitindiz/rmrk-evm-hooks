/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { MetaFactoryAbi } from '../abi/MetaFactoryAbi';
export type MintTokensWithAssetArguments = {
    collection: `0x${string}`;
    asset: string;
    to: `0x${string}`;
    amount: BigNumber;
};
export type UseMetaFactoryAbiMintTokensWithAssetReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type MintTokensWithAssetOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof MetaFactoryAbi, 'mintTokensWithAsset', 0>>[0];
export declare const useMintTokensWithAsset: ({ collection, asset, to, amount }: MintTokensWithAssetArguments, { chainId, network, signer, ...rest }: MintTokensWithAssetOptions) => UseMetaFactoryAbiMintTokensWithAssetReturnValue;
