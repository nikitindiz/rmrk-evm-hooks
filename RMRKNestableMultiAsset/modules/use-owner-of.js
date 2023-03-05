/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
const createMapper = ({ chainId, contractAddress, }) => function mapOwnerOfArgs({ tokenId }) {
    return {
        address: contractAddress,
        abi: RMRKNestableMultiAssetImpl,
        functionName: 'ownerOf',
        chainId,
        args: [tokenId],
    };
};
export const useOwnerOf = (args, _a) => {
    var { skip, chainId, contractAddress } = _a, rest = __rest(_a, ["skip", "chainId", "contractAddress"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-owner-of.js.map