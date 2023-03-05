/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
const availableOnERC721ReceivedNetworks = {
    'moonbase-alpha': '0x3A854CFc9B912B0219146C4B829cD8Ce43695743',
};
const createMapper = ({ chainId, contractAddress, }) => function mapOnERC721ReceivedArgs(args) {
    return {
        address: contractAddress,
        abi: RMRKMarketplace,
        functionName: 'onERC721Received',
        chainId,
        args,
    };
};
export const useOnERC721Received = (args, _a) => {
    var { skip, chainId, network } = _a, rest = __rest(_a, ["skip", "chainId", "network"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress: availableOnERC721ReceivedNetworks[network] })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-on-erc721-received.js.map