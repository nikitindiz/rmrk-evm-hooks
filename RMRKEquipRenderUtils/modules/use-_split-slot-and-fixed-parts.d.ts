/** WARNING! This file is auto-generated. Please do not edit! */
import { BigNumber } from 'ethers';
import { useContractReads } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
export type _splitSlotAndFixedPartsArguments = {
    allPartIds: BigNumber[];
    catalogAddress: `0x${string}`;
};
export type _splitSlotAndFixedPartsContract = {
    abi: typeof RMRKEquipRenderUtils;
    contractAddress: `0x${string}`;
    functionName: '_splitSlotAndFixedParts';
};
export type _splitSlotAndFixedPartsOptions = {
    skip?: boolean;
    chainId?: number;
    network: string;
} & Parameters<typeof useContractReads<typeof RMRKEquipRenderUtils, '_splitSlotAndFixedParts', _splitSlotAndFixedPartsContract[]>>[0];
export declare const use_splitSlotAndFixedParts: (args: _splitSlotAndFixedPartsArguments[], { skip, chainId, network, ...rest }: _splitSlotAndFixedPartsOptions) => UseQueryResult<(readonly [readonly BigNumber[], readonly BigNumber[]] & {
    slotPartIds: readonly BigNumber[];
    fixedPartIds: readonly BigNumber[];
})[], Error>;
