/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKNestableMultiAssetImpl } from '../abi/RMRKNestableMultiAssetImpl';
const createMapper = ({ chainId, contractAddress, }) => function mapSupportsInterfaceArgs({ interfaceId }) {
    return {
        address: contractAddress,
        abi: RMRKNestableMultiAssetImpl,
        functionName: 'supportsInterface',
        chainId,
        args: [interfaceId],
    };
};
export const useSupportsInterface = (args, _a) => {
    var { skip, chainId, contractAddress } = _a, rest = __rest(_a, ["skip", "chainId", "contractAddress"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-supports-interface.js.map