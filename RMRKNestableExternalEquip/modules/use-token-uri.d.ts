/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type TokenURIArguments = {
    tokenId: BigNumber;
};
export type TokenURIContract = {
    abi: typeof RMRKNestableExternalEquipImpl;
    contractAddress: `0x${string}`;
    functionName: 'tokenURI';
};
export type TokenURIOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableExternalEquipImpl, 'tokenURI', TokenURIContract[]>>[0];
export declare const useTokenURI: (args: TokenURIArguments[], { skip, chainId, contractAddress, ...rest }: TokenURIOptions) => UseQueryResult<string[], Error>;
