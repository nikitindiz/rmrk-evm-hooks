/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractRead } from 'wagmi';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export const useGetEquippableAddress = (_a) => {
    var { chainId, contractAddress, skip = false } = _a, rest = __rest(_a, ["chainId", "contractAddress", "skip"]);
    return useContractRead(Object.assign({ address: contractAddress, abi: RMRKNestableExternalEquipImpl, functionName: 'getEquippableAddress', chainId, enabled: !skip }, rest));
};
//# sourceMappingURL=use-get-equippable-address.js.map