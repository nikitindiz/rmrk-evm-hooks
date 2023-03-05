/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
const createMapper = ({ chainId, contractAddress, }) => function mapChildIsInActiveArgs({ childAddress, childId }) {
    return {
        address: contractAddress,
        abi: RMRKNestableExternalEquipImpl,
        functionName: 'childIsInActive',
        chainId,
        args: [childAddress, childId],
    };
};
export const useChildIsInActive = (args, _a) => {
    var { skip, chainId, contractAddress } = _a, rest = __rest(_a, ["skip", "chainId", "contractAddress"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-child-is-in-active.js.map