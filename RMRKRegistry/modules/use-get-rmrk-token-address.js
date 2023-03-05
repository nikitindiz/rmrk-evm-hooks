/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractRead } from 'wagmi';
import { RMRKRegistry } from '../abi/RMRKRegistry';
const availableGetRmrkTokenAddressNetworks = {
    'moonbase-alpha': '0x7a1785a89aEbdD16F23731D4613a5e746eB8e495',
    'zksync-testnet': '0xC60c3F9dC842dc413df360f42f95CC708e240616',
};
export const useGetRmrkTokenAddress = (_a) => {
    var { chainId, skip = false, network } = _a, rest = __rest(_a, ["chainId", "skip", "network"]);
    return useContractRead(Object.assign({ address: availableGetRmrkTokenAddressNetworks[network], abi: RMRKRegistry, functionName: 'getRmrkTokenAddress', chainId, enabled: !skip }, rest));
};
//# sourceMappingURL=use-get-rmrk-token-address.js.map