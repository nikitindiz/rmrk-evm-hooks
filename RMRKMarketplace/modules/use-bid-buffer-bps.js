/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractRead } from 'wagmi';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
const availableBidBufferBpsNetworks = {
    'moonbase-alpha': '0x3A854CFc9B912B0219146C4B829cD8Ce43695743',
};
export const useBidBufferBps = (_a) => {
    var { chainId, skip = false, network } = _a, rest = __rest(_a, ["chainId", "skip", "network"]);
    return useContractRead(Object.assign({ address: availableBidBufferBpsNetworks[network], abi: RMRKMarketplace, functionName: 'bidBufferBps', chainId, enabled: !skip }, rest));
};
//# sourceMappingURL=use-bid-buffer-bps.js.map