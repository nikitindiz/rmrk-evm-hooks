/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKEquipRenderUtils } from '../abi/RMRKEquipRenderUtils';
const availableCheckExpectedParentNetworks = {
    'moonbase-alpha': '0x5b1501BC44340050dBAe46387f8e0029CB285749',
    'zksync-testnet': '0x97D515Ce10B75C17cF9f87f06b68eAB769b10eD9',
};
const createMapper = ({ chainId, contractAddress, }) => function mapCheckExpectedParentArgs({ childAddress, childId, expectedParent, expectedParentId, }) {
    return {
        address: contractAddress,
        abi: RMRKEquipRenderUtils,
        functionName: 'checkExpectedParent',
        chainId,
        args: [childAddress, childId, expectedParent, expectedParentId],
    };
};
export const useCheckExpectedParent = (args, _a) => {
    var { skip, chainId, network } = _a, rest = __rest(_a, ["skip", "chainId", "network"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress: availableCheckExpectedParentNetworks[network] })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-check-expected-parent.js.map