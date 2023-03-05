/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKNestableExternalEquipImpl } from '../abi/RMRKNestableExternalEquipImpl';
const createMapper = ({ chainId, contractAddress, }) => function mapIsApprovedOrOwnerArgs({ spender, tokenId }) {
    return {
        address: contractAddress,
        abi: RMRKNestableExternalEquipImpl,
        functionName: 'isApprovedOrOwner',
        chainId,
        args: [spender, tokenId],
    };
};
export const useIsApprovedOrOwner = (args, _a) => {
    var { skip, chainId, contractAddress } = _a, rest = __rest(_a, ["skip", "chainId", "contractAddress"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-is-approved-or-owner.js.map