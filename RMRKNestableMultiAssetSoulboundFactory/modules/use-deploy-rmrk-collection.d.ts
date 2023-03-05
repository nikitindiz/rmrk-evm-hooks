/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableMultiAssetSoulboundFactory } from '../abi/RMRKNestableMultiAssetSoulboundFactory';
export type DeployRMRKCollectionArguments = {
    name: string;
    symbol: string;
    collectionMetadata: string;
    tokenURI: string;
    data: {
        erc20TokenAddress: `0x${string}`;
        tokenUriIsEnumerable: boolean;
        royaltyRecipient: `0x${string}`;
        royaltyPercentageBps: number;
        maxSupply: BigNumber;
        pricePerMint: BigNumber;
    };
};
export type UseRMRKNestableMultiAssetSoulboundFactoryDeployRMRKCollectionReturnValue = {
    contract: ReturnType<typeof getContract>;
    prepare: ReturnType<typeof usePrepareContractWrite>;
    write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
        write: () => void;
        isWaiting: boolean;
    };
    receipt: ethers.providers.TransactionReceipt;
    waitError: unknown;
};
export type DeployRMRKCollectionOptions = {
    chainId?: number;
    network: string;
} & Parameters<typeof usePrepareContractWrite<typeof RMRKNestableMultiAssetSoulboundFactory, 'deployRMRKCollection', 0>>[0];
export declare const useDeployRMRKCollection: ({ name, symbol, collectionMetadata, tokenURI, data }: DeployRMRKCollectionArguments, { chainId, network, signer, ...rest }: DeployRMRKCollectionOptions) => UseRMRKNestableMultiAssetSoulboundFactoryDeployRMRKCollectionReturnValue;
