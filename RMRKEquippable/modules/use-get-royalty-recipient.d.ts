/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export type GetRoyaltyRecipientOptions = {
    chainId?: number;
    skip?: boolean;
    contractAddress: `0x${string}`;
} & Parameters<typeof useContractRead<typeof RMRKEquippableImpl, 'getRoyaltyRecipient'>>;
export declare const useGetRoyaltyRecipient: ({ chainId, contractAddress, skip, ...rest }: GetRoyaltyRecipientOptions) => UseQueryResult<`0x${string}`, Error>;
