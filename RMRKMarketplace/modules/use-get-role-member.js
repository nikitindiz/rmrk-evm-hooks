/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
const availableGetRoleMemberNetworks = {
    'moonbase-alpha': '0x3A854CFc9B912B0219146C4B829cD8Ce43695743',
};
const createMapper = ({ chainId, contractAddress, }) => function mapGetRoleMemberArgs({ role, index }) {
    return {
        address: contractAddress,
        abi: RMRKMarketplace,
        functionName: 'getRoleMember',
        chainId,
        args: [role, index],
    };
};
export const useGetRoleMember = (args, _a) => {
    var { skip, chainId, network } = _a, rest = __rest(_a, ["skip", "chainId", "network"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress: availableGetRoleMemberNetworks[network] })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-get-role-member.js.map