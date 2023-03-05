/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractRead } from 'wagmi';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
const availableGetPlatformFeeInfoNetworks = {
    'moonbase-alpha': '0x3A854CFc9B912B0219146C4B829cD8Ce43695743',
};
export const useGetPlatformFeeInfo = (_a) => {
    var { chainId, skip = false, network } = _a, rest = __rest(_a, ["chainId", "skip", "network"]);
    return useContractRead(Object.assign({ address: availableGetPlatformFeeInfoNetworks[network], abi: RMRKMarketplace, functionName: 'getPlatformFeeInfo', chainId, enabled: !skip }, rest));
};
//# sourceMappingURL=use-get-platform-fee-info.js.map