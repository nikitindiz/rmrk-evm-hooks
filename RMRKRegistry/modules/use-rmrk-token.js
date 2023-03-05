/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractRead } from 'wagmi';
import { RMRKRegistry } from '../abi/RMRKRegistry';
const availableRmrkTokenNetworks = {
    'moonbase-alpha': '0x7a1785a89aEbdD16F23731D4613a5e746eB8e495',
    'zksync-testnet': '0xC60c3F9dC842dc413df360f42f95CC708e240616',
};
export const useRmrkToken = (_a) => {
    var { chainId, skip = false, network } = _a, rest = __rest(_a, ["chainId", "skip", "network"]);
    return useContractRead(Object.assign({ address: availableRmrkTokenNetworks[network], abi: RMRKRegistry, functionName: 'rmrkToken', chainId, enabled: !skip }, rest));
};
//# sourceMappingURL=use-rmrk-token.js.map