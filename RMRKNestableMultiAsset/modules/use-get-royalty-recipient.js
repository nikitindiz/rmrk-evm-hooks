/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractRead } from 'wagmi';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
export const useGetRoyaltyRecipient = (_a) => {
    var { chainId, contractAddress, skip = false } = _a, rest = __rest(_a, ["chainId", "contractAddress", "skip"]);
    return useContractRead(Object.assign({ address: contractAddress, abi: RMRKNestableMultiAssetImpl, functionName: 'getRoyaltyRecipient', chainId, enabled: !skip }, rest));
};
//# sourceMappingURL=use-get-royalty-recipient.js.map