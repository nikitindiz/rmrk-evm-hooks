/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractRead } from 'wagmi';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
const availableMAX_BPSNetworks = {
    'moonbase-alpha': '0x3A854CFc9B912B0219146C4B829cD8Ce43695743',
};
export const useMAX_BPS = (_a) => {
    var { chainId, skip = false, network } = _a, rest = __rest(_a, ["chainId", "skip", "network"]);
    return useContractRead(Object.assign({ address: availableMAX_BPSNetworks[network], abi: RMRKMarketplace, functionName: 'MAX_BPS', chainId, enabled: !skip }, rest));
};
//# sourceMappingURL=use-m-a-x_-b-p-s.js.map