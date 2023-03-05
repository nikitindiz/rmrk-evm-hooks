/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
const createMapper = ({ chainId, contractAddress, }) => function mapGetPendingAssetsArgs({ tokenId }) {
    return {
        address: contractAddress,
        abi: RMRKEquippableImpl,
        functionName: 'getPendingAssets',
        chainId,
        args: [tokenId],
    };
};
export const useGetPendingAssets = (args, _a) => {
    var { skip, chainId, contractAddress } = _a, rest = __rest(_a, ["skip", "chainId", "contractAddress"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-get-pending-assets.js.map