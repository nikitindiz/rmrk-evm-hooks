/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
const createMapper = ({ chainId, contractAddress, }) => function mapIsApprovedForAllArgs({ owner, operator }) {
    return {
        address: contractAddress,
        abi: RMRKEquippableImpl,
        functionName: 'isApprovedForAll',
        chainId,
        args: [owner, operator],
    };
};
export const useIsApprovedForAll = (args, _a) => {
    var { skip, chainId, contractAddress } = _a, rest = __rest(_a, ["skip", "chainId", "contractAddress"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-is-approved-for-all.js.map