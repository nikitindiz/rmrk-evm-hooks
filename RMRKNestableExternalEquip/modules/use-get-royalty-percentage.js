/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractRead } from 'wagmi';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
export const useGetRoyaltyPercentage = (_a) => {
    var { chainId, contractAddress, skip = false } = _a, rest = __rest(_a, ["chainId", "contractAddress", "skip"]);
    return useContractRead(Object.assign({ address: contractAddress, abi: RMRKNestableExternalEquipImpl, functionName: 'getRoyaltyPercentage', chainId, enabled: !skip }, rest));
};
//# sourceMappingURL=use-get-royalty-percentage.js.map