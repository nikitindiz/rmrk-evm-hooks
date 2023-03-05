/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
const createMapper = ({ chainId, contractAddress, }) => function mapRoyaltyInfoArgs({ tokenId, salePrice }) {
    return {
        address: contractAddress,
        abi: RMRKEquippableImpl,
        functionName: 'royaltyInfo',
        chainId,
        args: [tokenId, salePrice],
    };
};
export const useRoyaltyInfo = (args, _a) => {
    var { skip, chainId, contractAddress } = _a, rest = __rest(_a, ["skip", "chainId", "contractAddress"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-royalty-info.js.map