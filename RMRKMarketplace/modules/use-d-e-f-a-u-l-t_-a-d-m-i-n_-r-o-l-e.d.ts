/** WARNING! This file is auto-generated. Please do not edit! */
import { useContractRead } from 'wagmi';
import { UseQueryResult } from '@nikitindiz/abi-to-js';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
export type DEFAULT_ADMIN_ROLEOptions = {
    chainId?: number;
    skip?: boolean;
    network: string;
} & Parameters<typeof useContractRead<typeof RMRKMarketplace, 'DEFAULT_ADMIN_ROLE'>>;
export declare const useDEFAULT_ADMIN_ROLE: ({ chainId, skip, network, ...rest }: DEFAULT_ADMIN_ROLEOptions) => UseQueryResult<`0x${string}`, Error>;
