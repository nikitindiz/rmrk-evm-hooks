/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
const createMapper = ({ chainId, contractAddress, }) => function mapIsChildEquippedArgs({ tokenId, childAddress, childId }) {
    return {
        address: contractAddress,
        abi: RMRKEquippableImpl,
        functionName: 'isChildEquipped',
        chainId,
        args: [tokenId, childAddress, childId],
    };
};
export const useIsChildEquipped = (args, _a) => {
    var { skip, chainId, contractAddress } = _a, rest = __rest(_a, ["skip", "chainId", "contractAddress"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-is-child-equipped.js.map