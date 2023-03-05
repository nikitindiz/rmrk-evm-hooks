/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
const createMapper = ({ chainId, contractAddress, }) => function mapPendingChildOfArgs({ parentId, index }) {
    return {
        address: contractAddress,
        abi: RMRKEquippableImpl,
        functionName: 'pendingChildOf',
        chainId,
        args: [parentId, index],
    };
};
export const usePendingChildOf = (args, _a) => {
    var { skip, chainId, contractAddress } = _a, rest = __rest(_a, ["skip", "chainId", "contractAddress"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-pending-child-of.js.map