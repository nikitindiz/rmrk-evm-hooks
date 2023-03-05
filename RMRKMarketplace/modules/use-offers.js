/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
const availableOffersNetworks = {
    'moonbase-alpha': '0x3A854CFc9B912B0219146C4B829cD8Ce43695743',
};
const createMapper = ({ chainId, contractAddress, }) => function mapOffersArgs(args) {
    return {
        address: contractAddress,
        abi: RMRKMarketplace,
        functionName: 'offers',
        chainId,
        args,
    };
};
export const useOffers = (args, _a) => {
    var { skip, chainId, network } = _a, rest = __rest(_a, ["skip", "chainId", "network"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress: availableOffersNetworks[network] })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-offers.js.map