/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type OnERC721ReceivedArguments = [`0x${string}`, `0x${string}`, BigNumber, `0x${string}`];
export type OnERC721ReceivedContract = {
    abi: typeof RMRKMarketplace;
    contractAddress: `0x${string}`;
    functionName: 'onERC721Received';
};
export type OnERC721ReceivedOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKMarketplace, 'onERC721Received', OnERC721ReceivedContract[]>>[0];
export declare const useOnERC721Received: (args: OnERC721ReceivedArguments[], { skip, chainId, network, ...rest }: OnERC721ReceivedOptions) => UseQueryResult<`0x${string}`[], Error>;
