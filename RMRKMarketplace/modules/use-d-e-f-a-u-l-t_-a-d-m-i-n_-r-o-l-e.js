/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractRead } from 'wagmi';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
const availableDEFAULT_ADMIN_ROLENetworks = {
    'moonbase-alpha': '0x3A854CFc9B912B0219146C4B829cD8Ce43695743',
};
export const useDEFAULT_ADMIN_ROLE = (_a) => {
    var { chainId, skip = false, network } = _a, rest = __rest(_a, ["chainId", "skip", "network"]);
    return useContractRead(Object.assign({ address: availableDEFAULT_ADMIN_ROLENetworks[network], abi: RMRKMarketplace, functionName: 'DEFAULT_ADMIN_ROLE', chainId, enabled: !skip }, rest));
};
//# sourceMappingURL=use-d-e-f-a-u-l-t_-a-d-m-i-n_-r-o-l-e.js.map