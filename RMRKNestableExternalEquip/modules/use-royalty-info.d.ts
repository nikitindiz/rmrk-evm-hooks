/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export type RoyaltyInfoArguments = {
    tokenId: BigNumber;
    salePrice: BigNumber;
};
export type RoyaltyInfoContract = {
    abi: typeof RMRKNestableExternalEquipImpl;
    contractAddress: `0x${string}`;
    functionName: 'royaltyInfo';
};
export type RoyaltyInfoOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKNestableExternalEquipImpl, 'royaltyInfo', RoyaltyInfoContract[]>>[0];
export declare const useRoyaltyInfo: (args: RoyaltyInfoArguments[], { skip, chainId, contractAddress, ...rest }: RoyaltyInfoOptions) => UseQueryResult<(readonly [`0x${string}`, BigNumber] & {
    receiver: `0x${string}`;
    royaltyAmount: BigNumber;
})[], Error>;
