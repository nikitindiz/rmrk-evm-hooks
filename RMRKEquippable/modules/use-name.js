/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractRead } from 'wagmi';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
export const useName = (_a) => {
    var { chainId, contractAddress, skip = false } = _a, rest = __rest(_a, ["chainId", "contractAddress", "skip"]);
    return useContractRead(Object.assign({ address: contractAddress, abi: RMRKEquippableImpl, functionName: 'name', chainId, enabled: !skip }, rest));
};
//# sourceMappingURL=use-name.js.map