/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type GetEquipmentArguments = {
    tokenId: BigNumber;
    targetCatalogAddress: `0x${string}`;
    slotPartId: BigNumber;
};
export type GetEquipmentContract = {
    abi: typeof RMRKEquippableImpl;
    contractAddress: `0x${string}`;
    functionName: 'getEquipment';
};
export type GetEquipmentOptions = {
    skip?: boolean;
    chainId?: number;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractReads<typeof RMRKEquippableImpl, 'getEquipment', GetEquipmentContract[]>>[0];
export declare const useGetEquipment: (args: GetEquipmentArguments[], { skip, chainId, contractAddress, ...rest }: GetEquipmentOptions) => UseQueryResult<{
    assetId: BigNumber;
    childAssetId: BigNumber;
    childId: BigNumber;
    childEquippableAddress: `0x${string}`;
}[], Error>;
