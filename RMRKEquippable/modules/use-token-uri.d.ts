/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type TokenURIArguments = {
    tokenId: BigNumber;
};
export type TokenURIContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'tokenURI';
};
export type TokenURIOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'tokenURI', TokenURIContract[]>>[0];
export declare const useTokenURI: (args: TokenURIArguments[], { skip, chainId, contractAddress, ...rest }: TokenURIOptions) => UseQueryResult<string[], Error>;
