/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
const availableGetRoleMemberCountNetworks = {
    'moonbase-alpha': '0x3A854CFc9B912B0219146C4B829cD8Ce43695743',
};
const createMapper = ({ chainId, contractAddress, }) => function mapGetRoleMemberCountArgs({ role }) {
    return {
        address: contractAddress,
        abi: RMRKMarketplace,
        functionName: 'getRoleMemberCount',
        chainId,
        args: [role],
    };
};
export const useGetRoleMemberCount = (args, _a) => {
    var { skip, chainId, network } = _a, rest = __rest(_a, ["skip", "chainId", "network"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress: availableGetRoleMemberCountNetworks[network] })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-get-role-member-count.js.map